---
title  : Modelo de Promesas
slug   : modelo-de-promesas
author : Javier Vélez
date   : Ene 2024
---

## Introducción

Con el modelo de diferimiento descrito en el articulo anterior descubrimos que, a veces, pequeños cambios en la estructura de los elementos de soporte a la asincronía podían suponer considerables mejoras en la experiencia de uso. Si comparamos ese modelo con respecto al original basado en el paso de continuaciones, observábamos en efecto, que se recuperaba la estructura paramétrica de las funciones por medio de una estrategia de evaluación en dos fases.

Sin embargo, en sendas aproximaciones, la introducción de un comportamiento asíncrono seguía siendo disruptiva. El hecho de que las funciones no bloqueantes debiera mostrar un comportamiento autónomo para poder operar en paralelo con respecto al flujo principal de ejecución, exigía que la lógica de continuación requerida para procesar los resultados debiera ser inyectada a las mismas. Y ello, suponía una inversión de control que afectaba negativamente a la sensación de continuidad que pretendíamos recuperar.

Precisamente en este sentido apunta el modelo de promesas que discutiremos a lo largo de este texto. Como veremos, la estrategia de soporte que propone esta nueva aproximación permite restablecer, en cierto sentido, esa sensación de secuencialidad, ya que las funciones retornan nuevamente un elemento de vuelta al programa llamante para que gestione los resultados de la invocación, pero manteniendo el carácter de autonomía y respuesta instantánea propio de las funciones no bloqueantes.

Como en el resto de los artículos de esta serie, a lo largo de este texto primero centraremos nuestra atención en describir los aspectos de uso más característicos de este modelo y después procederemos a describir cómo pueden desarrollarse las abstracciones necesarias para darle soporte.

## El Modelo de Promesas

Los modelos anteriores de continuaciones y diferimiento habían conseguido dar una respuesta de soporte satisfactoria al desarrollo de actividades de programación asíncrona. Sin embargo, sendas aproximaciones resultaban muy invasivas con respecto a la experiencia de uso. Mediante el modelo de continuaciones, las funciones no bloqueantes debían aumentar su extensión paramétrica cosa que vino a repararse en el modelo de diferimiento al postergar la lógica de continuación a una fase de evaluación subsiguiente. 

Pese a ello, el carácter autónomo de las funciones no bloqueantes como entidades que no ofrecen ningún valor de retorno quedaba lejos del modelo imperativo cuya experiencia secuencial se pretendía recuperar. El modelo de promesas que presentamos a lo largo de este texto, ofrece una respuesta interesante que apunta, precisamente, en esta dirección. Ahora, cada función no bloqueante recupera la oportunidad de devolver un elemento de retorno al programa llamante para que sea éste el que realice una gestión oportuna de los resultados.

Evidentemente, como este tipo de funciones devuelve instantáneamente el control, y dado que se asume una ejecución paralela potencialmente prolongada en el tiempo, parece lógico pensar que tal elemento de retorno no sea el valor de terminación real sino, más bien, un artefacto que representa un compromiso de entrega de dicho valor a futuro, cuando éste se encuentre disponible. Es, si se quiere, una promesa de entrega.

Pero, ¿qué es exactamente una promesa? ¿Cuál es su anatomía interna y cómo se usa? ¿De qué manera puede vehicular este tipo de artefactos el proceso de recuperación de un valor que aún no se ha obtenido? No nos debería sorprender que, en realidad, una promesa no deja de ser otra cosa que un elemento sobre el que realizar la inyección de la lógica de continuación. Nada nuevo bajo el sol. Sin embargo, como ya hemos comprobado, frecuentemente pequeños cambios estructurales suelen arrojar valores de experiencia nuevos. Veamos cómo se usa todo esto.

```
let add = Async (function (x, y) { return x + y })
let mul = Async (function (x, y) { return x * y })

add (2,3).then (console.log).catch (console.error)
mul (2,3).then (console.log).catch (console.error)
```
<div class="listing">Modelo de Promesas.</div>

En el listado 1 podemos ver que, al igual que en los modelos anteriores, aquí también hacemos uso del operador Async para convertir funciones convencionales en no bloqueantes. Sin embargo, ahora al invocar cada función se devuelve una promesa de retorno. Como puede apreciarse, una promesa consiste en un objeto que dispone de métodos inyectores then y catch para proporcionar manejadores de éxito o fracaso. Cuando la función no bloqueante obtiene un valor real de retorno, ésta invoca transparentemente al manejador oportuno lo que da continuación al flujo natural de ejecución. En caso de que dicho valor se obtenga antes de que el cliente haya proporcionado los manejadores, éste quedará en retención léxica hasta que este hecho ocurra.

Las promesas son, en este sentido, un elemento vehicular para articular la comunicación desacoplada entre el código del cliente y el correspondiente a la función no bloqueante.  El cliente utiliza los inyectores de continuidad de la promesa para proporcionar los manejadores necesarios mientras que la función no bloqueante dispara la lógica de continuación pertinente invocando a dichos manejadores.

```
let inc = Async (function (x) { return x + 1 })
let dec = Async (function (x) { return x - 1 })
let dbl = Async (function (x) { return x + x })

inc (2)
  .then (dbl)
  .then (dec)
  .then (console.log)
```
<div class="listing">Modelo de Promesas. Ejecución Secuencial.</div>


Como ocurría dentro del modelo de diferimiento asíncrono, la estructura compositiva está garantizada por diseño. Allí la evaluación de cada thunk devolvía siempre otro thunk. Aquí el uso de los inyectores then y catch genera siempre otra promesa como resultado. Este hecho permite que fragmentos de código que persiguen una experiencia de desarrollo secuencial sean perfectamente viables. En el listado 2 se ve cómo la inyección sobre una promesa puede realizarse de manera encadenada replicando el uso de los inyectores. Ello provoca que cada manejador de continuidad proporcionado se ejecute en cascada una vez obtenido el valor de retorno.

Desde un punto de vista pragmático, el uso de promesas supone un aplanamiento de las estructuras anidadas propias de los modelos iniciales. Este hecho invalida la necesidad de definir funciones utilitarias centradas en dar soporte al secuenciamiento. Lo que sí resulta conveniente, por el contrario, es contemplar el soporte a la ejecución paralela. Como ya sabemos, en estos casos se trata de coordinar la terminación de un array de promesas lanzadas a ejecución.

Para ello, el propio constructor de promesas suele proporcionar métodos de soporte a este sentido. A este respecto, existen dos estrategias de composición alternativa. El operador all, se usa para crear una nueva promesa que resuelve a un array ordenado de resultados una vez que todas las promesas han finalizado. De manera alternativa, el operador race pone a competir en ejecución todas las promesas de forma que el valor resultante corresponda al de la primera promesa resuelta.

```
let inc = Async (function (x) { return x + 1 })
let dec = Async (function (x) { return x - 1 })
let dbl = Async (function (x) { return x + x })

Promise.all  ([inc (2), dec (2), dbl (2)]).then (console.log)
Promise.race ([inc (2), dec (2), dbl (2)]).then (console.log)
```
<div class="listing">Modelo de Promesas. Ejecución Paralela.</div>

En el listado 3, se muestra un ejemplo de uso de cada uno de los operadores que acabamos de describir. En el  primer caso, la invocación del método all, generará una promesa que terminará imprimiendo por pantalla el array [3, 1, 4], resultado de aplicar las operaciones incluidas. En el segundo caso, el operador race pondrá a competir en paralelo cada operación y el resultado será enviado por la consola una vez obtenido. Dado que en las situaciones de carrera el orden de evaluación puede depender fuertemente de las condiciones ambientales de la infraestructura de soporte, el resultado arrojado puede ser distinto en cada ejecución.

El constructor de promesa también acierta a proporcionar un par más de operaciones de utilidad que funcionan como métodos de factoría para la creación de promesas resueltas a valores específicos pasados como parámetro.

```
let sx = Promise.resolve (2)
let sy = Promise.resolve (3)

let ex = Promise.reject ('Error X')
let ey = Promise.reject ('Error Y')

sx.then  (console.log)
sy.then  (console.log)
ex.catch (console.error)
ey.catch (console.error)
```
<div class="listing">Modelo de Promesas. Factorías Resolve & Reject.</div>

En el listado 4 puede apreciarse un par de ejemplos de lo que acabamos de describir. Las promesas obtenidas a través de la factoría resolve, encapsulan valores reales pasados como parámetro. Similarmente, las promesas generadas por medio del operador reject encapsulan mensajes de error a partir de ciertos parámetros. El uso de este tipo de operadores, lejos de resultar banal, es en la práctica de mucha utilidad para poder trabajar con promesas resueltas a partir de valores específicos.

## Soporte & Desarrollo

Los mecanismos de soporte al desarrollo de la programación asíncrona parten de la definición del operador Async. Como ya hemos visto en artículos anteriores, esta función se utiliza para convertir funciones convencionales en otras no bloqueantes y sirve de ayuda para que la especificación de la lógica algorítmica mantenga un adecuado espíritu imperativo.  El propósito semántico de esta función no arroja diferencias con respecto a las propias de los modelos anteriores. Sin embargo, sí que existe una diferencia de alineamiento importante con respecto a este modelo. Ahora se trata de una función que devuelve una promesa como valor de retorno.

El código que se muestra en el listado 5 recibe como parámetro una función convencional y una colección de parámetros de invocación en segunda fase de evaluación. Como retorno de sendas fases se devuelve una promesa creada por medio del uso de su constructor. Como puede apreciarse, dicho constructor se invoca proporcionando una función que es la que materializa toda la lógica de ejecución asíncrona. Sobre esa función, el constructor proporcionará manejadores de continuación para éxito y fracaso. Por lo tanto, la implementación se basa en el uso de la función setTimeout para lanzar un nuevo flujo de ejecución y la lógica asociada consiste, en esencia, en invocar a la función original, con los argumentos proporcionados e inyectar el resultado como entrada al manejador de éxito. Otras implementaciones más elaboradas, que por ejemplo tengan en cuenta la casuística de error, podrían desarrollarse, pero caen fuera de los objetivos ilustrativos que perseguimos en este texto. 

```
function Async (fn, ms) {
  return function (...args) {
    return Promise (function (ok, ko) {
      setTimeout (function () {
        ok (fn (...args))
      }, ms || 0)
    })
  }
}
```
<div class="listing">Modelo de Promesas. Helper Async.</div>

El código del operador de asincronía anterior funciona perfectamente. Pero se apoya casi absolutamente en el constructor de promesa del que no sabemos nada. Desde una perspectiva de caja negra bastaría decir lo que ya hemos visto, que un constructor de promesa recibe como parámetro una función donde se registra la lógica de ejecución asíncrona abrigado por funciones manejadoras que el propio algoritmo deberá invocar en tiempo y forma para disparar las estrategias de continuidad. Mirando con retrospectiva a lo que se describió en la sección anterior, se observará que esta estrategia de desarrollo se encuentra perfectamente alineada con la operativa de este modelo de asincronía.

Pero ¿qué hay dentro de una promesa? ¿Cómo puede funcionar un objeto tan misterioso capaz de dar continuidad a la ejecución cuando se tiene un valor de retorno y mantenerlo en retención léxica hasta que se inyecten los manejadores de continuidad por medio de los inyectores then o catch? La respuesta a esta pregunta no es sencilla y casi cae más dentro de la curiosidad algorítmica que de la necesidad de entender el modelo. Pero como  esta sección está, precisamente, para cubrir esa curiosidad, allá vamos.

En el listado 6 aparece el código correspondiente al constructor de promesa. Como ya hemos comentado, dicho constructor debe recibir como único argumento la función que contiene la lógica de ejecución no bloqueante. Esta función debe ser invocada de manera instantánea dentro de la promesa proporcionando como argumento los dos manejadores que sirven al desarrollador para disparar la continuidad algorítmica cuando sea preceptivo. Además, sabemos que toda promesa debe proporcionar inyectores preparados para registrar los manejadores de continuidad desde el lado del cliente así que sendos métodos son los que forman parte del objeto de retorno.

```
let isPromise = x => x && x.then && x.catch

function Promise (fn) {
  let value, error
  let hthen, hcatch
  let isok,  isko

  function Then (hn) {
    return Promise (function (ok, ko) {
      isok && ok (hn (value))
     !isok && (hthen = x => ok (hn (x)))
    })
  }

  function Catch (hn) {
    return Promise (function (ok, ko) {
      isko && ko (hn (error))
     !isko && (hcatch = e => ko (hn (e)))
    })
  }

  function OK (x) {
    if (isPromise (x)) {
      x.then (function (x) {
        hthen && hthen (x)
       !hthen && (value = x) && (isok = true)
      })
    }
    else {
      hthen && hthen (x)
     !hthen && (value = x) && (isok = true)
    }
  }

  function KO (x) {
    if (isPromise (x)) {
      x.catch (function (e) {
          hcatch && hcatch (e)
        !hcatch && (error = e) && (isko = true)
      })
    }
    else {
        hcatch && hcatch (x)
      !hcatch && (error = x) && (isko = true)
    }
  }

  fn (OK, KO)

  return {
    then  : Then,
    catch : Catch 
  }
}
```
<div class="listing">Modelo de Promesas. Promesa.</div>

Para dar soporte al estado interno de la promesa utilizaremos 3 pares de variables. Las variables value y error sirven para mantener la retención léxica del valor de la promesa una vez obtenido. Las variables hthen y hcatch se utilizan para soportar los manejadores de continuidad recogidos desde el cliente por medio de los inyectores then y catch. Y finalmente, las variables isko e iko sirven al propósito de conocer si la función se ha resuelto con éxito o fracaso.

Veamos ahora cómo debemos implementar cada función constituyente.  Comencemos con los inyectores then y catch. Como puede apreciarse se trata de dos funciones estructuralmente muy similares. En primer lugar, la invocación siempre debe devolver como valor de retorno una nueva promesa. El desarrollo de la función asociada a la misma tiene un tratamiento distinto en función del estado interno. En concreto, si se ha obtenido ya un valor o error, el inyector invocará directamente al manejador correspondiente. Si por el contrario, dicho valor aún no se ha obtenido, el inyector prepara una función de diferimiento que retiene el manejador de continuidad inyectado para ser invocado en el momento que llegue.

Con respecto a las funciones OK y KO que dan contexto de continuidad al desarrollo de la función no bloqueante asociada a la promesa su estructura nuevamente resulta mimética y simétrica a la de los inyectores. En este caso, si ya existe manejador de éxito o fracaso inyectado, éste se invoca directamente. Y sino, se mantiene en retención léxica el valor recogido a la espera de que se proporcionen los inyectores. El código en este caso debe, no obstante, considerar dos posibles alternativas. Si el valor obtenido es un resultado real se procede como acabamos de describir. Sin embargo, si este es una promesa, ésta debe desenvolverse para alcanzar el valor encapsulado y  proceder miméticamente.

```
Promise.all = function All (ps) {
  return Promise (function (ok, ko) {
    let next = ps.length
    let xs   = []

    ps.forEach (function (p, idx) {
      p.then (function (x) {
        xs[idx] = x
         next--
        !next && ok (xs)
      })
    })
  })
}
```
<div class="listing">Modelo de Promesas. Helper All.</div>

Los métodos asistentes de ejecución paralela resultan más sencillos de desarrollar. En el caso de operador all, la función devuelve una nueva promesa que prepara cierta lógica de continuidad para cada promesa recibida como parámetro. En particular, dicha lógica consiste en posicionar, dentro de un array de resultados inicialmente vacío, el valor obtenido y comprobar si con esa contribución ya se han alcanzado todos los valores del array en cuyo caso debe darse continuidad a la nueva promesa generada.

```
Promise.race = function Race (ps) {
  return Promise (function (ok, ko) {
    let found = false

    ps.forEach (function (p, idx) {
      p.then (function (x) {
        !found && ok (x)
         found = true
      })
    })
  })
}
```
<div class="listing">Modelo de Promesas. Helper Race.</div>

Por su parte, la variante del operador race, también devuelve una nueva promesa cuyo código interno da continuación a cada promesa proporcionada como parámetro. Sin embargo, en este caso, la lógica prescribe que la primera de ellas que sea resuelta invocará con su valor al manejador de continuación de la nueva promesa.

```
Promise.resolve = function Resolve (value) {
  return Promise (function (ok, ko) {
    ok (value)
  }) 
}

Promise.reject = function Reject (error) {
  return Promise (function (ok, ko) {
    ko (error)
  })
}
```
<div class="listing">Modelo de Promesas. Helper Resolve & Reject.</div>

Finalmente, los casos de los métodos de fábrica resolve y reject tienen una evidente implementación elemental. En sendos casos, estos operadores construyen una nueva promesa cuya función asíncrona simplemente se limita a invocar directamente al manejador apropiado con el valor proporcionado como retorno. En el caso de resolve se invoca al manejador de éxito con el valor del parámetro. En el caso de reject el manejador utilizado es el de fracaso.

## Conclusiones

A lo largo de este texto hemos presentado el modelo de programación asíncrona basado en promesas. El valor diferencial de esta aproximación con respecto a las dos anteriores que ya hemos descrito radica en que las funciones no bloqueantes ahora recuperan la capacidad potencial de devolver un elemento de retorno al programa llamante. Dado que se trata de funciones que devuelven instantáneamente el control y cuya ejecución es potencialmente prolongada en el tiempo dichos elementos no pueden corresponderse con el valor real de retorno sino, mas bien, con un artefacto que representa un compromiso de entrega de dicho valor a futuro.

Este artefacto es lo que llamamos promesa. Un objeto que dispone de métodos inyectores para proporcionar lógica de continuación que permita dar tratamiento a situaciones de éxito o fracaso con lo que las ideas nucleares siguen siendo las mismas. Sin embargo, en esta ocasión se ha recuperado la sensación de secuencialidad propia del paradigma imperativo dado que ya no es necesario proporcionar la lógica de continuidad como una extensión paramétrica en la invocación de las funciones como ocurría en los modelos anteriores.

En estas líneas hemos centrado nuestra atención en describir estas mejoras detallando la experiencia de desarrollo que presenta el uso de promesas en la programación asíncrona y hemos discutido cuál es la tecnología de soporte que debe ser elaborada en el marco de esta aproximación. Ha de tenerse en cuenta, no obstante, que el código de ejemplo aquí presentado tiene un mero propósito ilustrativo ya que los códigos en producción arrojan versiones considerablemente más complejas.

Actualmente la mayoría de los lenguajes ofrecen este tipo de abstracciones de manera nativa. En particular en JavaScript las promesas son un artefacto de soporte idéntico al que hemos descrito en este artículo con la única excepción de que nosotros hemos hecho una implementación basada en funciones y en JavaScript se sigue una basada en objetos y clases lo que requiere el uso del operador new por delante del constructor de promesa. Hecha esa salvedad no hay diferencias mayores a destacar.
