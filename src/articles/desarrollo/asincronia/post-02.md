---
title  : Modelo de Continuaciones
slug   : modelo-de-continuaciones
author : Javier Vélez
date   : Ene 2024
---

## Introducción

En el artículo anterior, presentábamos la programación asíncrona como un modelo de ejecución que presta especial atención al rendimiento sobre la dimensión temporal. La propuesta, en este sentido, gira en torno a la idea de identificar los fragmentos algorítmicos dentro de un programa que puedan ser lanzados en paralelo, ya sean estos funciones o procedimientos.

En ese mismo artículo, explicábamos también que si las funciones así diseñadas presentan por construcción un carácter autónomo, es decir, si no arrojan un valor de retorno que deba ser recogido nuevamente por el programa llamante, la aplicación de esta técnica resulta trivial. Sin embargo, si éste no es el caso, en la secuencia de invocación será necesario añadir la lógica de continuación pertinente para procesar adecuadamente dicho valor.

Los modelos de desarrollo asíncronos que presentaremos a lo largo de esta serie tienen por objeto ofrecer una respuesta técnica a cómo resolver este problema, pero hacerlo de manera que se restaure, en la medida de lo posible, la sensación de secuencialidad propia del modelo imperativo que queda fragmentada por la introducción de la asincronía.

En particular, a lo largo de estas líneas, centraremos nuestra atención en la descripción del primero de estos modelos, conocido como modelo de continuaciones. En esencia, se trata de extender el conjunto de parámetros de llamada de cada función no bloqueante para incorporar una función que describa la lógica de ejecución a aplicar tras la terminación. Como haremos para el resto de modelos, primero presentaremos el modelo de desarrollo propuesto y los objetivos perseguidos y luego abordaremos el sustrato arquitectónico en que se apoya el mismo.

## El Modelo de Continuaciones

Desde un punto de vista práctico cualquier actividad de desarrollo asíncrona puede conceptualizarse como un proceso de transformación sistemática de un algoritmo imperativo en otro en el que todas las funciones y procedimientos se convierten en no bloqueantes, lo que significa que pasan a lanzarse a ejecución de forma paralela y retornan de manera instantánea el control al programa llamante.

Esta transformación se aplica, en términos generales, sobre cualquier función con lo que puede darse el caso de que la función a transformar devuelva un valor de retorno para ser procesado más adelante. Dado que, una vez lanzada a ejecución paralela, ya es imposible recuperar el flujo central del programa será necesario inyectar en la secuencia de llamada de esta nueva función toda la lógica necesaria para procesar el valor.

La manera más intuitiva de llevar esto a cabo es por medio de una extensión sistemática de cada función no bloqueante con un parámetro más de tipo función. Esta función incluye toda la lógica de procesamiento del valor de retorno y deberá ser invocada tras la terminación. Dado que, de alguna forma, la nueva función añadida de último parámetro representa la lógica de continuación tras la terminación, ésta suele recibir el nombre de función o manejador de continuación y el modelo asociado se llama modelo de continuaciones.

```
let add = Async (function (x, y) { return x + y })
let mul = Async (function (x, y) { return x * y })

add (3, 2, console.log)
mul (3, 2, console.log)
```
<div class="listing">Modelo de Continuaciones.</div>

A modo de ejemplo, en el listado 1 puede apreciarse como un par de sencillas operaciones aritméticas pueden reformularse en términos de este modelo. De momento podemos asumir que para realizar esta transformación existe ya programada una función de utilidad Async que convierte una función convencional en otra no bloqueante, si bien este esfuerzo podría ser realizado sin pérdida de generalidad de forma completamente manual. El caso es que, tras su terminación, la función no bloqueante, en lugar de devolver un valor de retorno como hacía la función original, invoca automáticamente al manejador de continuación y le proporciona el valor de retorno para que lo procese. De esta manera, todas las operaciones convertidas en no bloqueantes por medio de esta estrategia adquieren el grado oportuno de autonomía por cuanto incorporan toda la lógica de continuación requerida. Y ello se aprecia en el hecho de que la invocación de estas nuevas funciones no espera un resultado de retorno en el punto de invocación. 

Esta aproximación ofrece una sencilla solución al problema de la ejecución asíncrona pero aún es necesario resolver algunos aspectos relativos a la experiencia de desarrollo. En efecto, en el modelo imperativo, es frecuente que el resultado de una función sea procesado por la lógica algorítmica subsiguiente. En el marco de este modelo, sin embargo, como dicha lógica se ha inyectado ya como manejador de continuación, cualquier actividad de secuenciamiento tendrá que ser expresada en términos de un anidamiento de manejadores de continuación. En el listado 2, se muestra un ejemplo que pretende resolver una sencilla serie de operaciones en secuencia. Como puede apreciarse, el modelo, en este caso, obliga a realizar un ejercicio de anidamiento lo que, a la larga, conduce a escenarios de codificación prolijos que frecuentemente no resultan mantenibles. 

```
let inc = Async (function (x) { return x + 1 })
let dec = Async (function (x) { return x - 1 })
let dbl = Async (function (x) { return x + x })

inc (2, function (x) {
  dbl (x, function (y) {
    dec (y, console.log)
  })
})
```
<div class="listing">Modelo de Continuaciones. Ejecución Secuencial.</div>

Precisamente por este motivo, el modelo de continuaciones suele venir acompañado de funciones de azúcar sintáctico que vienen a simplificar los procesos de desarrollo. En particular, es frecuente encontrar funciones que ayuden a describir estructuras de ejecución asíncrona en serie y en paralelo. En el primer caso, una colección de funciones es encadenada por medio de técnicas de composición que open en modo asíncrono. En el segundo, otra colección de funciones es lanzada en paralelo generando un array ordenado de valores de retorno. En ambos casos, los resultados obtenidos terminan drenando hacia el manejador de terminación proporcionado como último parámetro.

```
let inc = Async (function (x) { return x + 1 })
let dec = Async (function (x) { return x - 1 })
let dbl = Async (function (x) { return x + x })

let serie    = Serie    ([inc, dbl, dec], console.log)
let parallel = Parallel ([inc, dbl, dec], console.log)

Serie    (2)
Parallel (2)
```
<div class="listing">Modelo de Continuaciones. Helper Serie & Parallel.</div>

En el listado 3 puede apreciarse un ejemplo de uso prototípico de ambos casos de funciones utilitarias. Primero, se definen operaciones aritméticas básicas de acuerdo al modelo de continuación. Después, se define una cadena de composición donde algunas de esas operaciones se ejecutan en secuencia sobre un dato de entrada para obtener un resultado de salida. Y finalmente, se ilustra el caso en el que las mismas operaciones son lanzadas a ejecución paralela para generar un array de resultados. 

A lo largo de este ejemplo, es interesante destacar dos aspectos de uso interesantes. En primer lugar, que tanto la función Serie como Parallel requieren de la definición de un manejador de continuación que recoge los resultados obtenidos de la ejecución, lo cual resulta alineado con la estrategia de codificación dentro de este modelo. Pero lo que resulta más interesante es que sendas funciones de utilidad proporcionan, de manera transparente la lógica de continuación para articular, respectivamente, un flujo de ejecución serie y paralelo.

## Soporte & Desarrollo

Como explicamos al comienzo, el propósito de cada modelo de asincronía es proporcionar una respuesta a la demanda de paralelización algorítmica. Pero también proporcionar una experiencia de desarrollo que, en la medida de lo posible, restaure la sensación de secuencialidad propia del modelo imperativo. A lo largo de la sección anterior, hicimos precisamente un recorrido de estos dos aspectos. Primero explicamos cuál es la propuesta tecnológica del modelo de continuaciones y después ilustramos el uso que las diferentes funciones utilitarias tienen dentro de dicho modelo.

Lo que vamos a hacer a lo largo de esta sección es profundizar en cómo operan cada una de estas funciones en el marco del modelo de continuación y explicar, para cada una de ellas, las técnicas en que se basan. Entrar en este tipo de detalles a veces resulta algo incomodo. Sin embargo, la mejor forma de conocer un modelo o marco de trabajo es hacer anatomía de cada elemento constituyente para así poder controlar al máximo las actividades de desarrollo sobre el mismo.

La primera idea que debemos resolver es cómo podemos desarrollar una operación de transformación capaz de convertir cualquier función convencional en otra no bloqueante. Como ya hemos explicado con anterioridad, una función no bloqueante es aquella que es capaz de devolver el control al programa llamante de manera instantánea y lanzar su ejecución de forma paralela. Para poder dar soporte a la lógica de continuación que procesa el resultado de la función es necesario proporcionar como último parámetro un manejador de continuación que será convenientemente invocado tras la terminación una vez obtenido el resultado.

```
function Async (fn, ms) {
  return function (...args) {
    let [hn, ...last] = args.reverse ()
    let params        = last.reverse ()
    setTimeout (function () {
      hn (fn (...params))
    }, ms || 0)
  }
}
```
<div class="listing">Modelo de Continuaciones. Helper Async.</div>

En el listado 4, se muestra cómo una forma de resolver este problema consiste en hacer uso de la función nativa setTimeout que, de manera circunstancial, sirve en este contexto, para desvincular la función del flujo de ejecución natural. En particular, la función Async genera una nueva función que recibe una familia extendida de argumentos. De ellos, los primeros corresponderán a los parámetros que deba recibir la función original mientras que el último hace referencia al manejador de continuación. En esencia, este operador comienza llevar a cabo esta descomposición paramétrica e invoca adecuadamente la función de origen para pasar el resultado de la misma al manejador de continuación. Por conveniencia, se ha añadido un segundo parámetro temporal que resulta de utilidad en los casos que desee modelarse una ejecución retardada.

De esta manera, la obtención de cualquier función no bloqueante no exige al desarrollador la definición de una función específicamente diseñada sino que ésta se alcanza por medio del uso de la función Async que recoge el valor de retorno de la función y la inyecta como entrada al manejador de continuación.

```
function Serie (fns, hn) {
  return function (x) {
    let [gn, ...gns] = fns
     gn && gn (x, Serie (gns, hn))
    !gn && hn (x)
  } 
}
```
<div class="listing">Modelo de Continuaciones. Helper Serie.</div>

A partir de este punto, sólo queda resolver como pueden diseñarse estrategias algorítmicas complejas que respeten el modelo de continuaciones que venimos presentando a lo largo de este texto. En el listado 5, puede apreciarse el código correspondiente a la función Serie cuyo uso hemos ilustrado en la sección anterior. Como puede apreciarse, en esencia se trata de un esquema recursivo que articula una estrategia de composición funcional sobre la cual se hace atravesar un dato de entrada. En concreto, este operador devuelve una función para solicitar dicho dato. Sobre la serie de funciones en se extrae la primera del resto y se lanza a ejecución pasando como argumento de continuación la lógica correspondiente al resto de la cadena. Cuando se alcanza el final de este esquema recursivo, se invoca el manejador final hn.

```
function Parallel (fns, hn) {
  return function (...xs) {
    let ys   = []
    let next = fns.length
    fns.forEach (function (fn, idx) {
      fn (...xs, function (y) {
        ys[idx] = y
        next--
        !next && hn (ys)
      })
    }) 
  }
}
```
<div class="listing">Modelo de Continuaciones. Helper Parallel.</div>

El caso de la función Parallel resulta aún más sencillo. En el listado 6, puede verse como este operador devuelve otra función que prepara la entrada de argumentos para proporcionarlos como parámetro a cada una de las funciones que forman parte de la ejecución paralela. La clave dentro de este código consiste en preparar, para cada función lanzada una lógica de continuación consistente en inyectar el valor de retorno en la posición adecuada dentro de un array de resultados y comprobar, en cada iteración, si dicho array se ha rellenado completamente en cuyo caso debe invocarse a la función de terminación pasando el array como parámetro.

Como puede apreciarse, ninguna de las tres funciones que hemos presentado a lo largo de esta sección resulta excesivamente complicada. Sin embargo, su uso conjugado como operaciones de ayuda resulta de gran utilidad porque viene a proporcionar un nivel adecuado de azucarado sintáctico que simplifica los procesos de desarrollo. En efecto, al ocultarse mucha de la lógica de continuación dentro de estas funciones que de natural se requiere se logra restaurar en parte una sensación de secuencialidad orgánica que era uno de los objetivos perseguidos. Esta linea de trabajo puede extenderse con nuevas funciones que cubran otras estrategias compositivas. Sin embargo, su relato cae fuera del propósito meramente ilustrativo de este texto. 

## Conclusiones

A lo largo de estas líneas, hemos presentado el modelo de continuaciones propio de la programación asíncrona. En esencia, se trata de transformar cada función bloqueante en otra no bloqueante semánticamente equivalente por la vía de la extensión del conjunto de sus parámetros característicos para incluir una última función manejadora que encapsule la lógica de continuación requerida.

Hay que señalar aquí que, dentro de este modelo, el uso de manejadores de continuación con frecuencia se extiende semánticamente para permitir contemplar no sólo el procesamiento de valores en casos de éxito sino también el tratamiento de señales o mensajes de excepción asociadas a situaciones de error. No obstante, todo lo que aquí hemos descrito, resulta en esencia igualmente válido y por simplicidad no lo hemos incluido como parte de esta descripción.  

Aunque la idea de continuación parezca, en principio, algo simplista lo cierto es que su aplicación ha sido muy extendida dentro de la literatura y la comunidad de desarrollo. Dentro del ámbito de la programación funcional, por ejemplo, estas técnicas son ampliamente conocidas como el estilo de paso de continuaciones o CPS por sus siglas en inglés y, como decimos, resultan de aplicación recurrente dado a las peculiaridades específicas del enfoque declarativo. Pero además, tecnologías como NodeJS, también aplicaron inicialmente con bastante éxito este modelo para el diseño de sus APIs nativas antes de transitar a otras alternativas.

Pese a todo lo anterior, debemos reconocer que el uso de continuaciones como estrategia de desarrollo asíncrono, si bien resulta efectivo, se percibe como una práctica bastante pesada por cuanto cada función de continuación viene a proporcionar un considerable ruido ambiental sobre el código fuente. A pesar de que a lo largo de este texto hemos defendido el uso de algunas funciones de utilidad que vienen a mitigar este problema, lo cierto es que no siempre es posible llevar a cabo un proceso sistemático de ocultación de la lógica de continuación y ello introduce fricciones a la hora de alcanzar una amplia aceptación de este modelo dentro de la comunidad.

Durante los siguientes artículos de esta serie abordaremos la descripción de otros modelos característicos que vienen a ofrecer respuestas de valor para dar soporte a la ejecución asíncrona mientras mitigan buena parte del déficit experiencial propio de este modelo. 
