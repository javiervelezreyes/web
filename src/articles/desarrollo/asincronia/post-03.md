---
title  : Modelo de Diferimiento
slug   : modelo-de-diferimiento
author : Javier Vélez
date   : Enero 2024
---

## Introducción

El modelo de continuaciones que presentábamos en el artículo anterior, resultaba pretendidamente sencillo. En efecto, si una función no bloqueante necesita incluir toda la lógica necesaria para procesar el valor de retorno obtenido, simplemente se extiende el conjunto de parámetros de ésta para incluir un manejador de continuidad.

Sin embargo, en el pecado se tiene la penitencia. Porque si bien es un mecanismo bastante efectivo, conduce a experiencias de desarrollo en las que la lógica de continuación se ve entremezclada con la algoritmia natural del programa dando lugar a una considerable carga de ruido ambiental.

El modelo de diferimiento es una respuesta alternativa que, precisamente, tiene por objeto mitigar este problema al permitir hacer una evaluación en dos fases que persigue diferenciar la resolución paramétrica de la inyección de la lógica de continuidad necesaria. Aunque esta corrección pueda parecer simplista, lo cierto es que resulta bastante eficaz una vez observados como pueden ser expresados los ejercicios de construcción compositiva funcional.

A lo largo de este texto presentaremos el modelo de diferimiento asíncrono. Primero centraremos nuestra atención en la descripción de los aspectos de uso de este modelo y sólo después transitaremos a describir cuál es el soporte que es necesario construir para articular este tipo de soluciones.

## El Modelo de Diferimiento

La manera en la que se da respuesta a experiencias de desarrollo basadas en programación asíncrona no arroja demasiadas alternativas. Como ya hemos comentado en otras ocasiones, se trata en esencia, de transformar un algoritmo de manera que todas las funciones o procedimientos bloqueantes se conviertan en elementos no bloqueantes. Y para ello es necesario proporcionar la lógica de continuación requerida que permita procesar el valor de retorno obtenido tras la finalización de la función.

La diferencia entre unos otros modelos radica, precisamente, en la manera en la que dicha lógica es proporcionada a la función no bloqueante. En la estrategia de continuaciones que explicamos en el artículo anterior este problema se resolvía extendiendo el conjunto paramétrico de la función para incorporar un último manejador de continuidad. Como descubrimos, esta solución resulta directa y eficaz. Pero la experiencia de desarrollo obtenida resultaba un tanto pesada por cuanto la lógica de continuidad quedaba entrelazada con la correspondiente al propio algoritmo

El modelo de diferimiento que presentamos a lo largo de este artículo persigue, en este sentido, dar una respuesta alternativa que mitigue los problemas de experiencia que presentaba el modelo de continuaciones. En concreto, se trata de hacer una fragmentación en la evaluación temporal de la función que separe la fase reservada a la configuración paramétrica de la que corresponde a la inyección del manejador de continuidad.

```
let add = Async (function (x, y) { return x + y })
let mul = Async (function (x, y) { return x * y })

let Add = add (3, 2)
let Mul = mul (3, 2)

Add (console.log)
Mul (console.log)
```
<div class="listing">Modelo de Diferimiento.</div>

En el listado 1 puede verse un ejemplo de programación asíncrona siguiendo este nuevo modelo de desarrollo. Cómo puede apreciarse, aquí también se hace uso de un operador de transformación Async que convierte funciones convencionales en artefactos no bloqueantes. Sin embargo, en este caso, cada función obtenida es invocada por medio del aprovisionamiento exclusivo de la colección de parámetros requeridos. Como resultado de esta acción no se consigue la ejecución de la función, sino que se devuelve un thunk de diferimiento asíncrono que será resuelto a ejecución cuando se proporcione la lógica de continuación requerida.

En esencia, y puesto en pocas palabras, hemos conseguido, como decíamos, separar la fase de evaluación reservada a la configuración paramétrica de la función, de aquella otra necesaria y subsiguiente para proporcionar el manejador de continuidad. Y es que, pese a su aparente simplicidad, esta estrategia consigue transformar considerablemente la experiencia de desarrollo cuando se abordan actividades de diseño compositivo funcional.

```
let inc = Async (function (x) { return x + 1 })
let dec = Async (function (x) { return x - 1 })
let dbl = Async (function (x) { return x + x })

inc (2)(dbl)(dec)(console.log)
```
<div class="listing">Modelo de Diferimiento. Ejecución Secuencial.</div>

A modo de ejemplo, en el listado 2 adjunto puede apreciarse como el mismo problema de ejecución secuencial que presentábamos en el artículo anterior se resuelve ahora de manera mucho más orgánica. Dentro de esta secuencia, cada operación subsiguiente puede inyectarse como lógica de continuación a la función anterior generando un flujo de desarrollo natural y fácil de entender. En particular, primero hemos definido un conjunto de sencillas operaciones aritméticas y después hemos desarrollado un flujo de secuencialidad compositiva. Siguiendo este modelo, la separación en fases de evaluación consecutivas que separa la lógica de configuración paramétrica de la lógica de continuación resulta altamente conveniente dado que se mejora considerablemente la experiencia de desarrollo.

Esta mejora invitaría a pensar que la definición de funciones utilitarias que ayude a expresar lógica compositiva elaborada ahora carece de sentido. Sin embargo, ha de observarse que, el orden en el que se aplica la configuración puede resultar contrario a la intuición pragmática. Si bien el flujo de lectura parece muy adecuado, no lo es tanto al advertir que resolver primero la configuración paramétrica para después inyectar la cadena de composición parece algo contrario a lo deseado. En efecto, lo lógico sería definir primero una lógica compositiva y después reutilizar varias veces dicha lógica aplicada a diferentes configuraciones paramétricas.

```
let inc = Async (function (x) { return x + 1 })
let dec = Async (function (x) { return x - 1 })
let dbl = Async (function (x) { return x + x })

let serie    = Serie    ([inc, dbl, dec], console.log)
let parallel = Parallel ([inc, dbl, dec], console.log)

serie    (2)
parallel (2)
```
<div class="listing">Modelo de Diferimiento. Helper Serie & Parallel.</div>

Por supuesto que para resolver este problema podríamos haber invertido el orden de evaluación parcial definido. Pero como los modelos de diferimiento se enmarcan dentro del contexto teórico de thunks de asincronía parece que tal inversión no resulta conceptualmente legitima. Precisamente por este motivo, en la mayoría de librerías y marcos de trabajo de esta naturaleza se incluyen funciones para la especificación declarativa de escenarios de ejecución secuencial y paralela. Desde una perspectiva pragmática, la experiencia de uso de las mismas no arroja especiales diferencias con respecto a las que se explicaron en el artículo anterior. En el listado 3, puede apreciarse que las mismas operaciones aritméticas pueden ahora conjugarse con positivamente con el uso de las funciones ya conocidas Serie y Parallel centradas en el despliegue de una ejecución secuencial y paralela respectivamente.

## Soporte & Desarrollo

Como acabamos de comprobar, el modelo de diferimiento que estamos presentando a lo largo de este texto introduce una pequeña alteración estructural con respecto al modelo de continuaciones descrito en el artículo anterior. Y si bien esto es así, también resulta en una notable diferencia desde el punto de vista de la experiencia de desarrollo. En particular, dentro de esta aproximación, el flujo de especificación pretende fraccionarse en dos actividades complementarias. Se pretende que primero todas las funciones resuelvan su configuración paramétrica y sólo después se articule la inyección de la lógica de continuación necesaria para completar la ejecución.

Para llevar esto a cabo, es necesario introducir una nueva fase de diferimiento en la definición de las operaciones no bloqueantes. Si esto se realiza de manera manual, ello implica ofrecer un espacio para incluir la configuración paramétrica de la llamada y retornar como resultado una segunda función para poder proporcionar la lógica de continuación. No obstante, lo más interesante es que esta actividad de transformación pueda quedar encapsulada en un operador definido que sirva para convertir cada función convencional en otra no bloqueante de acuerdo a las condiciones que acabamos de describir.

```
let isFunction = x => x && x.call && x.apply

function Async (fn, ms) {
  return function (...args) {
    return Thunk (function (hn) {
      setTimeout (function () {
        hn (fn (...args))
      }, ms || 0)
    })
  }
}

function Thunk (fn) {
  let value
  let next
  let isok

  fn (function (x) {    
    if (isFunction (x)) {
      x (function (x) {
         next && next (x)
        !next && (value = x) && (isok = true)
      })
    }
    else {
       next && next (x)
      !next && (value = x) && (isok = true)
    }
  })

  return function (hn) {
    return Thunk (function (gn) {
      isok && gn (hn (value))
     !isok && (next = x => gn (hn (x)))
    })
  }
}
```
<div class="listing">Modelo de Diferimiento. Helper Async.</div>

En el listado 4 puede verse el código fuente correspondiente a una función Async que cubre exactamente esa necesidad. Si se examina con atención, su lógica interna resulta muy similar a la función homónima que se presentó en el modelo de continuaciones. Sin embargo, en este caso, la resolución paramétrica no se hace de una atacada sino en dos fases de evaluación sucesiva. Una vez que tanto la configuración paramétrica como la lógica de continuación ha sido recogida se desvincula del hilo principal de ejecución a la función por medio de la instrucción native setTimeout y se lanza a ejecución la función original pasando el resultado como parámetro de entrada al manejador de continuidad.

Sin embargo, esta lógica queda encapsulada dentro de un thunk de diferimiento asíncrono cuyo propósito es dar soporte al carácter compositivo de este modelo. En este código esto queda resuelto a través de un constructor cuya definición aparece de manera subsiguiente. En programación funcional los thunks son funciones que encapsulan la evaluación de una expresión para que su evaluación pueda ser diferida en el tiempo. Cuando hablamos de thunks convencionales debemos imaginar que se trata de funciones sin argumentos. Cuando hablamos de thunks asíncronos éstos presentan como único argumento una función de continuidad.

En nuestro caso, el thunk que hemos definido tiene por objetivo mantener en retención léxica el estado de la evaluación. Para ello se utilizan las variables value, next e isok para capturar, respectivamente, el valor resultante de la función original cuando ya se ha obtenido, el manejador de continuidad cuando ya se ha proporcionado y el indicador de que en efecto es así. 

El thunk comienza lanzando a evaluación la función que recibe como parámetro, que como sabemos, representa la lógica de ejecución asíncrona. Y ello lo hace proporcionando como parámetro un manejador preparado que el desarrollador de la función invocará adecuadamente en tiempo informa. Lo que hace en esencia este manejador, es recibir un valor de terminación y comprobar si ya existe un manejador de continuación en la variable next. Si es así, éste se invoca de manera instantánea y sino si retiene el valor de retorno capturado usando la variable value. 

Dado que, por motivo de la composición potencial, el valor capturado puede ser tanto un valor real como otra función de tipo asíncrono, es necesario hacer una comprobación de ambas casuísticas. Si el valor capturado es un nuevo manejador, este debe desenvolverse para recoger desde allí el autentico valor en x. Si no es así es porque, de manera más sencilla el valor en el parámetro x es verdaderamente el valor final de retorno.

Y finalmente, para dar opción a la inyección de nuevas fases de composición subsiguientes , el thunk debe devolver otra función que permita inyectar un nuevo manejador. Internamente, se evalúa el estado del thunk para decidir si debe darse continuidad al nuevo manejador con el valor capturado o si ello se debe preparar para que tal cosa se haga de forma diferida cuando dicho valor quede resuelto. Y todo ello se cocina dentro de un nuevo thunk que se devuelve como retorno para construir la recursividad compositiva de veíamos en el ejemplo del listado 2.

```
function Serie (fns, hn) {
  return function (x) {
    let [gn, ...gns] = fns
     gn && gn (x)(Serie (gns, hn))
    !gn && hn (x)
  } 
}
```
<div class="listing">Modelo de Diferimiento. Helper Serie.</div>

Con respecto a la definición del operador de composición en serie no existen demasiadas diferencias con la versión que se presentó en el artículo anterior. En efecto, en este caso también ha de recogerse una colección de funciones que se pretenden lanzar a ejecución de forma secuencial para hacer atravesar sobre ellas un dato de entrada. Y en esencia, ello requiere el mismo algoritmo recursivo que se presentó para el modelo de continuaciones. La única diferencia en este caso, es que aquí la resolución de continuidad en cada función de la serie debe invocarse en dos fases de valuación consecutivas, a diferencia de como ocurría en el modelo anterior, donde dicha lógica se introducía a través de un último parámetro extendido. En el listado 5, puede apreciarse el código fuente asociado a esta versión del operador.

```
function Parallel (fns, hn) {
  return function (...xs) {
    let ys   = []
    let next = fns.length
    fns.forEach (function (fn, idx) {
      fn (...xs)(function (y) {
        ys[idx] = y
        next--
        !next && hn (ys)
      })
    }) 
  }
}
```
<div class="listing">Modelo de Diferimiento. Helper Parallel.</div>

Finalmente, para el caso del operador de composición paralelo también puede esgrimirse un argumento de similitud parecido al anterior. Como puede apreciarse en el listado 6, esta estructura tampoco resulta especialmente diferente a la que se discutió en el artículo anterior al hablar del modelo de continuaciones. Aquí comenzamos preparando un array vacío de resultados y lanzamos a ejecución paralela cada una de las funciones recogidas por el operador. La lógica de continuación de cada una de ellas es una función que acierta a posicionar el valor de retorno obtenido tras su terminación en el índice adecuado y comprueba, si tras esta acción, se ha completado el array de resultados en cuyo caso se invoca el manejador de terminación. Nuevamente aquí la diferencia con respecto a la versión propia del modelo de continuaciones radica únicamente en que la invocación de cada función se realiza proporcionando la lógica de configuración y de continuación en dos fases de evaluación consecutivas.

## Conclusiones

A lo largo de este artículo hemos presentado el modelo de asincronía basado en diferimiento. En esencia, se trata de una nueva aproximación diferencial que presenta una alteración estructural menor con respecto al modelo anterior de continuación, consistente en usar dos fases de evaluación diferentes para proporcionar la información de configuración paramétrica y la lógica de continuación subsiguiente. 

Este hecho, junto con la naturaleza de continuidad compositiva que ofrecen los thunks de asincronía, ha permitido no obstante, mejorar significativamente la experiencia de desarrollo. En efecto, por un lado se recupera la extensión paramétrica original de las funciones y por otro, se ofrece una experiencia de composición funcional orgánica para definir estructuras secuenciales.

A este modelo también se le acompaña de funciones utilitarias para automatizar el proceso de transformación de funciones convencionales en otras funciones no bloqueantes o para la definición, de manera declarativa, de fragmentos de lógica secuencial o paralela.

Sin embargo, este modelo aún adolece de un problema importante, y es que no se ha recuperado absolutamente la sensación de secuencialidad propia del modelo imperativo. Las funciones no bloqueantes siguen siendo Artefactos autónomos que deben recibir manejadores de continuidad y que no devuelven, de manera directa, ningún valor de retorno al programa llamante. Esta cuestión será, precisamente, objeto de atención en los modelos subsiguientes dentro de esta serie.