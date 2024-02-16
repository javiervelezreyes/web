---
title  : Modelo de Intercesión
slug   : modelo-de-intercesion
author : Javier Vélez
date   : Ene 2024
---

## Introducción

A lo largo de esta serie hemos presentado diferentes modelos de desarrollo que ofrecen aproximaciones de mejora progresiva en el perímetro de la ejecución asíncrona. Se trataba ante todo de dar una respuesta eficaz en relación a cómo un algoritmo puede mejorar sus tiempos de respuesta en base a la paralelización sistemática de cada una de sus funciones constituyentes. Pero a la vez, conseguir este objetivo manteniendo, en la medida de lo posible, la sensación de continuidad secuencial propia del paradigma imperativo.

El modelo de continuaciones proporcionó de partida una respuesta sencilla aunque resolutiva pero ello se obtenía bajo la extensión paramétrica de cada función para incluir un manejador de continuación. El modelo de diferimiento conseguía corregir este problema mediante la fragmentación de la carga paramétrica de aquella relativa a dicha continuación. Pero ninguna de estas aproximaciones recuperaba la idea de que las funciones se comportaran como abstracciones algorítmicas capaces de proporcionar valores de retorno para su procesamiento posterior.

Algo se conseguiría en esta dirección con la llegada del modelo de promesas dado que se lograba que las funciones no bloqueantes en efecto devolvieran, de manera directa e instantánea, un elemento de retorno. Sin embargo, éste no sería el verdadero valor obtenido sino tan sólo una promesa cuyo objetivo era soportar nuevamente la inyección de la lógica de continuación para éxito o fracaso.

El modelo de intercesión que presentaremos a lo largo de este texto consigue, precisamente, dar una respuesta orgánica a este problema y como veremos, de esta manera se restaura completamente la experiencia imperativa perseguida toda vez que se mantiene una aproximación asíncrona en ejecución. Como hemos hecho hasta ahora, centraremos primero nuestra atención en describir la experiencia de uso dentro de este modelo y describiremos después el soporte subyacente requerido.

## El Modelo de Intercesión

Los modelos que hemos descrito hasta ahora pueden dibujarse como un camino evolutivo en la búsqueda de una buena experiencia de uso que a la vez de soporte al problema de ejecución asíncrona. Buena experiencia en este sentido significa ofrecer un modelo de desarrollo en el que el código se percibe sin alteraciones estructurales con respecto al sabor imperativo mientras no se sacrifican los objetivos de soporte.

El modelo de continuaciones dio comienzo a este recorrido proporcionando una solución de soporte eficaz, pero ello requería realizar una extensión paramétrica sobre las funciones no bloqueantes. El modelo de diferimiento articulaba un correctivo sencillo en este sentido por aplicación de técnicas oportunistas de fragmentación paramétrica basadas en evaluación parcial. Y el modelo de promesas recuperaba la oportunidad de las funciones de devolver elementos de retorno al programa llamante.

Pese a todos estos avances, estos elementos de retorno no son valores reales computados sino, más bien, objetos que nuevamente exigen al desarrollador inyectar la lógica de continuación pertinente para dar seguimiento a la ejecución. Este hecho es una consecuencia esperada de la naturaleza intrínsecamente asíncrona de las funciones no bloqueantes. Dado que estas funciones entran en un flujo paralelo de ejecución y que dicha ejecución puede prolongarse en el tiempo, resulta punto menos que imposible ofrecer un elemento de retorno instantáneo que a la vez corresponda con el valor de terminación real.

Lo que sí podemos hacer, no obstante, en este sentido, es proporcionar al desarrollador entornos de evaluación asíncrona donde se legitime el uso de primitivas para controlar el flujo de ejecución entre lo paralelo y lo secuencial dentro de un marco de despliegue asíncrono. En particular, es suficiente con proporcionar una primitiva que permita establecer puntos de espera asíncrona para la obtención de un resultado real y otra que soporte la definición de entornos de evaluación de esta naturaleza. El modelo subyacente de soporte que elegiremos a lo largo de este texto será el basado en promesas. El entorno de ejecución se apoyará en el uso de generadores y la partícula de bloqueo asíncrono será la primitiva nativa yield de JavaScript.

```
let add = Async (function (x, y) { return x + y })
let mul = Async (function (x, y) { return x * y })

Execute (function * () {
  let x = yield add (2, 3)
  let y = yield mul (2, 3)

  console.log (x)
  console.log (y)
})
```
<div class="listing">Modelo de Intercesión.</div>

En el listado 1 puede verse un ejemplo de lo que venimos explicando. Después de crear versiones no bloqueantes sobre la base de funciones convencionales a través del uso del operador Async ya conocido, creamos un entorno de evaluación asíncrona usando un generador. Dentro de este código se llama a las funciones aritméticas preparadas y su valor de retorno se recoge en sendas variables locales. Dado que se requieren valores reales para poder pasarlas a la consola, debemos incluir la partícula de espera asíncrona yield como punto de intercesión en la salida de sendas funciones. Si esta partícula no se hubiera colocado, el valor en x e y correspondería a promesas generadas completamente operativas con lo que este hecho fomenta la versatilidad durante el desarrollo permitiendo alternar con libertad entre este modelo y el modelo de promesas subyacente.  

Esta aproximación resulta muy elegante y, a menos del interceptor yield, recupera absolutamente el carácter secuencial propio del desarrollo imperativo. Cabe en este sentido reflexionar cómo resulta la definición de estructuras algorítmicas de composición secuencial similares a las que fueron objeto de estudio en los modelos anteriores dentro de esta serie. En el listado 2 podemos ver el ejemplo que venimos utilizando en este sentido para considerar este problema.

```
let inc = Async (function (x) { return x + 1 })
let dec = Async (function (x) { return x - 1 })
let dbl = Async (function (x) { return x + x })

Execute (function * () {
  let x = yield inc (2)
  let y = yield dbl (x)
  let z = yield dec (y) 
})
```
<div class="listing">Modelo de Intercesión. Ejecución Secuencial.</div>

Como puede apreciarse en este caso, la secuencialidad compositiva se expresa de manera natural a través del uso de variables de soporte local tal y como se espera de un enfoque imperativo. Como este esfuerzo requiere de una resolución en cada una de estas variables antes de dar continuidad a la ejecución, es necesario nuevamente incluir partículas de espera asíncrona en el punto de intercesión de cada función no bloqueante. 

Cabría pensar en este sentido, que dentro de este modelo cada accidente de espera es un punto de empeoramiento en la fluidez paralela propia de la ejecución asíncrona. Sin embargo, esto no es así porque en realidad no existen diferencias reales con respecto al resto de aproximaciones. Los puntos de espera que aquí se hacen explícitos también existen en los otros enfoques, lo que ocurre es que dichos puntos quedan ocultos dentro de la secuencia de encadenamiento compositivo que implica el uso de manejadores de continuidad. 

La expresión asíncrona y secuencial quedan orgánicamente resueltas con lo que acabamos de describir. Pero ¿cómo es el soporte a la ejecución paralela de varias funciones asíncronas? ¿Existe alguna forma de ejecución paralela similar al que venía utilizándose en el modelo anterior basado en promesas? Lo cierto es que sí. Pero dicho soporte resulta, nuevamente, mucho más orgánico. Veámoslo en detalle.

```
let inc = Async (function (x) { return x + 1 })
let dec = Async (function (x) { return x - 1 })
let dbl = Async (function (x) { return x + x })

Execute (function * () {
  let xs = yield [inc (2), dec (2), dbl (2)]
  let ys = yield [inc (3), dec (3), dbl (3)]

  console.log (xs)
  console.log (ys)
})
```
<div class="listing">Modelo de Intercesión. Ejecución Paralela.</div>

En el listado 3, se muestra un ejemplo de uso en el que se pretende lanzar a ejecución paralela varias operaciones aritméticas de forma simultánea. Para ello, la partícula de espera yield se coloca delante del array de promesas lo que no permite el progreso de continuidad hasta que todas ellas se hayan resuelta un valor real. 

Como puede apreciarse sobre cada uno de los ejemplos anteriores, la partícula yield es un elemento que marca un punto de espera asíncrona aplicado como prefijo de una expresión de tipo promesa. El progreso algorítmico no se producirá hasta que la promesa a la derecha del yield haya sido resuelta. Esta idea general sirve como clave para interpretar cómo puede hacerse uso del yield de manera discrecional y estratégica durante el desarrollo asíncrono. Siempre que a la derecha aparece una promesa podemos incluir esta partícula como operador de espera. 

De acuerdo a esta idea es correcto afirmar que, en términos generales, los operadores de asincronía propios del modelo de promesas pueden usarse perfectamente aquí dentro de este enfoque, aunque algunos son innecesarios. Por ejemplo, para poner en carrera la evaluación de varias promesas una expresión del tipo yield Promise.race puede resultar muy acertada. Sin embargo, el uso de la construcción yield Promise.all resulta innecesario dado que, como hemos visto en el ejemplo del listado 3, la partícula yield despliega una semántica de espera equivalente cuando a la derecha hay un array de promesas. Lo mismo puede afirmarse del uso de operadores Promise.resolve y Promise.reject que aquí se expresarían directamente como valores reales.

## Soporte & Desarrollo

Como en los modelos anteriores, el relato de soporte debería comenzar con la definición del operador Async cuyo propósito como sabemos es articular la transformación de una función convencional en otra con comportamiento asíncrono no bloqueante. Dado que el modelo que estamos presentando en este artículo se apoya sobre los constructos proporcionados por el modelo de promesas, en realidad el código que presentamos en el listado 4 es idéntico al que se presentó en el artículo anterior. La operación Async captura una función regular y una carga paramétrica en dos fases de evaluación y cierra devolviendo una promesa cuyo código prepara la ejecución de dicha función desvinculada del flujo central de control. 

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
<div class="listing">Modelo de Intercesión. Helper Async.</div>

Lo que resulta verdaderamente interesante dentro de este modelo es cómo podemos obtener una función de evaluación Execute que sea capaz de convertir cada punto de intervención yield en un accidente de espera asíncrona dentro del código que garantice la no continuidad hasta que la promesa a su derecha quede resuelta. 

Es importante recordar previamente, que en JavaScript los mal llamados generadores suponen el soporte nativo a la definición de corrutinas que, a diferencia de las rutinas convencionales, presentan una consumición reentrante. Es decir, mientras que las rutinas son cuerpos algorítmicos que se ejecutan completamente hasta encontrar un punto de retorno, los generadores utilizan un protocolo que permite hacer una ejecución fragmentada del código. La ejecución transita hasta el primer punto de parada marcado con un yield lo que devuelve el control al programa llamante y el algoritmo no continuará hasta que éste le envíe una señal de progreso a través del método next. Este método permite proporcionar a través de un parámetro un valor para ser inyectado a la izquierda del yield una vez que el generador recupera el control de la ejecución.

En términos generales, este comportamiento puede interpretarse en términos de intercesión. En efecto, puede afirmarse que dentro del código de un generador, cada partícula yield es un punto de ruptura algorítmica que retorna un valor al programa llamante para que éste opere como agente de intercesión y de continuidad en tiempo y forma tras la intervención. En el particular del problema que nos ocupa el agente cliente es la función Execute y su lógica de intercesión consiste en recuperar la promesa que recibe del yield para enhebrar sobre ella una lógica de continuación consistente en montar como lógica de continuación todo el código subsiguiente dentro del algoritmo. 

```
function Execute (Gn) {
  let gn = Gn ()
  function tick ({ value, done }) {
    if (done) return value
    else {
      let p = value
      p.then (function (x) {
	  tick (gn.next (x))
	})
    }
  }
  tick (gn.next ())
}
```
<div class="listing">Modelo de Intercesión. Entorno de Evaluación.</div>

Veamos cómo conseguimos llevar a cabo todo esto de manera específica. En el listado 5 se muestra la implementación de una función que soporta la definición de entornos de evaluación asíncrona tal como han sido presentados en la sección anterior. Como puede apreciarse esta función recibe como único parámetro un generador que se prepara para su ejecución. La función tick representa la lógica de intervención que se materializa en un timing recurrente de acuerdo a la consumición del protocolo de generadores. Para arrancar se pide al generador que progrese hasta el primer yield encontrado y este devolverá un resultado que se pasa como argumento a la función de tick.

De acuerdo al protocolo la salida de cada yield es un objeto de pares value y done. El primer campo corresponde al valor de retorno devuelto por el yield. Como ya sabemos, por construcción, éste siempre debe corresponderse con una promesa. Por su parte, el campo done sirve de centinela para indicar cuándo se ha alcanzado el final del código dentro del generador. En este caso, el valor en value será siempre undefined. Según esto, la función tick evalúa el valor del centinela para y retorna si directamente el valor si ha llegado el final. Sino, la promesa capturada en el valor se desenvuelve inyectando como continuidad una lógica consistente en dar seguimiento al generador invocando a next y llamando recursivamente al tick. El valor resuelto en x se usa para inyectar al generador. El retorno de ese método entra como parámetro de la llamada recursiva a tick.

Como comentamos con anterioridad muchas de las capacidades de soporte propias del modelo de promesas son de utilidad dentro del que estamos discutiendo en este artículo. No en vano, el primero se apoya en el segundo. En particular, el operador race suele ser de aplicación si bien se consume mediante el uso de la partícula de espera activa yield. El operador all y las factorías resolve y reject no resultan relevantes en este modelo por la pragmática de desarrollo alcanzada.

## Conclusiones

A lo largo de este artículo hemos presentado el modelo de soporte a la asincronía basado en intercesión que es capaz de resolver todos los puntos de mejora pendientes con respecto al estado alcanzado con el uso de promesas. Hemos conseguido así definir un modelo de soporte a la ejecución asíncrona que a su vez logre restaurar la sensación de secuencialidad propia del desarrollo imperativo.

En concreto, con este modelo la inyección explícita de lógica de continuación desaparece y la capacidad de obtener valores reales de terminación en cada llamada asíncrona es una realidad orgánica. Todo ello se consigue tan sólo dentro de un entorno de evaluación basado en generadores capaz de interpretar el código fuente proporcionado en el marco de una ejecución asíncrona y donde la partícula yield adquiere una semántica de bloqueo a la espera de que las promesas a su derecha queden convenientemente resueltas. Si bien este tipo de constructos podrían en una primera lectura ser interpretados como nuevo ruido sintáctico a ser eliminado, lo cierto es que se trata de elementos de gran utilidad de cara a la expresión del control de la ejecución asíncrona.

En particular, la función de ejecución sirve a la idea de identificar fragmentos algorítmicos de interpretación asíncrona en el marco de un esfuerzo de desarrollo más grande. Y la partícula de intercesión yield, por su parte, sirve para definir flujos de control estratégicos con base en una ejecución no bloqueante. En este sentido, cada yield puede ser interpretado como un punto de bloqueo a la espera de que se resuelva cada promesa. 

No obstante, es importante señalar que, si bien esta lectura puede resultar de utilidad para razonar de manera ágil dentro de este modelo, no debemos olvidar que, a la postre, bajo cada partícula de intercesión yield subyace en realidad una lógica de enhebrado de continuidades sobre la base de la promesa transferida. Traer a la memoria este fundamento operativo a veces es de utilidad para poder razonar con precisión sobre la base del código en especial en aquellas situaciones en las que se conjugan alternativamente el uso de intercesión y promesas.

Dentro de JavaScript, el modelo que acabamos de presentar ha terminado consolidándose de manera nativa. Para ello, el uso de la función de evaluación Execute se ha eliminado, el uso de generadores se ha reemplazado por el marcador de prefijo async y el operador de espera se ha renombrado a la palabra clave await.

Actualmente dentro de la comunidad de desarrollo existe un nivel de aceptación muy alto del uso de esquemas de ejecución asíncrona articulados a través de una experiencia basada en intercesión y promesas. Parece en este sentido que se han cubierto los objetivos perseguidos así que con este último articulo ponemos fin a esta serie. Espero que hayas disfrutado el recorrido.


