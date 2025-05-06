---
title  : Modelo de Regiones Críticas
slug   : modelo-de-regiones-criticas
author : Javier Vélez
date   : Enero 2024
---

## Introducción

En los dos artículos anteriores discutimos los dos modelos más clásicos para el control de la ejecución concurrente. Mientras que las aproximaciones basadas en cerrojos permitían definir zonas de acceso restringido a los recursos compartidos por acotación de protocolos de bloqueo y desbloqueo, el uso de semáforos extendía esta semántica a situaciones donde la lógica de coordinación se expresaba en términos de carga volumétrica.

En efecto, en el marco de nuestro problema de ejemplo las condiciones de seguridad exigían que no se permitiera realizar operaciones de escritura sobre un buffer de datos lleno ni tampoco actividades de lectura sobre un buffer vacío. Y las condiciones de vivacidad demandaban un flujo continuo y sin bloqueos de agentes lectores y escritores operando en equilibrio.

Conseguir esto último es algo que se puede hacer siguiendo diversas estrategias. En el texto de cerrojos presentábamos políticas más agresivas basadas en el desbloqueo en cascada, mientras que en el caso de semáforos discutimos una aproximación más coercitiva y equitativa basada en el uso de desbloqueo cruzado por cortesía.

Semáforos y cerrojos son el haz y el envés de la misma moneda en tanto que los primeros son una extensión en cardinalidad de los segundos. Aunque parezca que estos artefactos son de alcance pragmático restringido lo cierto es que, dentro del desarrollo concurrente son muchas las soluciones que se resuelven satisfactoriamente con el uso de estos modelos.

Lo que sin embargo no aciertan a resolver ninguno de ellos es la capacidad de ofrecer mecanismos de encapsulación y división de responsabilidades de la lógica de coordinación y operación que permitan simplificar la experiencia de desarrollo, por la vía de la centralización, la ocultación y la separación de competencias. A lo largo de este capítulo, presentaremos el modelo de regiones críticas y su extensión hacia las regiones críticas condicionales que fue ideado como respuesta a la demanda que acabamos de exponer. 

## El Modelo de Regiones Críticas

En el marco de las arquitecturas de desarrollo concurrente basadas en el uso de memoria compartida, quizá el aspecto más importante a asegurar es que, durante la ejecución, el acceso a los recursos comunes se haga siempre de manera protegida en exclusión mutua. Esta restricción resulta vital para garantizar la ausencia de interferencias entre los flujos de ejecución de distintos agentes que puedan comprometer la integridad del recurso a lo largo del tiempo.

Precisamente atender a esta preocupación es lo que fundamentalmente hacían los modelos de cerrojos y semáforos que presentamos en los dos textos anteriores de esta serie. Desde perspectivas similares, ambas aproximaciones lograban, por acotación con fases de bloqueo y desbloqueo, identificar una sección propia en el cuerpo algorítmico de cada tipo de agente que es donde se producía el acceso critico a los recursos compartidos. A esta zona se la suele llamar en la literatura zona o sección crítica. 

Sin embargo, la identificación que de esta sección hacen los modelos discutidos resulta bastante débil. Definir una sección de código dentro del cuerpo de un agente por la mera acotación de fragmentos de código anteriores y posteriores - los consabidos protocolos de bloqueo y desbloqueo - resuelta bastante peligroso ya que cualquier alteración de esta estructura de desarrollo puede romper la sección crítica y poner en riesgo las restricciones de acceso en exclusión mutua.

En este sentido, parece sensato construir un nuevo marco de conceptos que permita materializar la idea de sección critica como un artefacto tangible dentro de la expresión concurrente. Es así como se llega a la idea de regiones críticas. El modelo de regiones críticas ofrece un constructo sintáctico que permite acotar explícita y formalmente un cuerpo algorítmico para garantizar que éste sea lanzado a ejecución con garante de exclusión mutua total. Sino en términos absolutos con respecto a todo el resto de agentes operando en el sistema, al menos sí con respecto a aquellos que operan sobre cierto recurso de datos compartido. Y dado que frecuentemente, el acceso a este recurso debe ofrecerse sólo cuando se cumplan determinadas condiciones ambientales, resulta natural permitir que la expresión explícita de estas condiciones se realice sobre la base de la definición de las regiones críticas. Es así como surgen las regiones críticas condicionales.

En el marco de nuestro problema, el recurso compartido de acceso crítico se corresponde con el buffer de transferencia de datos y los agentes implicados en su acceso compartido son los lectores y los escritores. En el listado 1, puede verse cómo es posible reproducir las condiciones ambientales de este problema para este modelo de solución. En comparativa con respecto a los modelos anteriores, se sigue haciendo uso de las factorías de levantamiento de agentes y la definición de un espacio compartido sobre el que operan ambos tipos de agentes. Este espacio incluye el acceso al buffer de transferencia de datos y recupera las variables de control que nos sirvieron en otros artículos para mantener el número de agentes en espera. Sin embargo, es de destacar que, al menos de manera explícita, no existen dentro de este espacio elementos de coordinación concurrente como los que se utilizaron en los modelos anteriores. 

```
const READERS = 5
const WRITERS = 5

let space = Shared.create ({
  buffer   : Buffer ([]),
  nReaders : Atom (0),
  nWriters : Atom (0),
})

let RFactory = Workers (RPATH)
let WFactory = Workers (WPATH)
let Readers = RFactory.create (READERS)
let Writers = WFactory.create (WRITERS)

Readers.share (space)
Writers.share (space)

export { Readers }
export { Writers }
```
<div class="listing">Modelo de Regiones Críticas. Configuración General.</div>

Si fijamos ahora nuestra atención en cómo se reformula el ciclo de vida de los agentes implicados en la solución podemos observar que, con el uso de este modelo de soporte, existe una estructuración mucho más fuerte en la expresión sintáctica. Cada agente define una región crítica en relación al recurso sobre el que opera, en este caso el buffer de transferencia, e incluye dos fragmentos de código. Uno para reflejar respectivamente las condiciones ambientales que deben satisfacerse para conceder acceso a la sección crítica. Y otro para definir la operación específica que se hará sobre el recurso una vez que se ha accedido en exclusión mutua a dicha sección.

En el listado 2 que se adjunta, puede apreciarse cómo este constructo se usa para definir la lógica de los agentes lectores. Se define una región crítica condicional sobre el buffer y se indica que el acceso sólo debe quedar concedido cuando no haya otros agentes lectores o escritores esperando a poder operar. Asimismo, tampoco debe concederse acceso el buffer de transferencia mientras no haya datos suficientes que consumir, en nuestro ejemplo 3 datos, cosa que se expresa con el predicado isEmpty. 

```
worker.doForever (async function () {
  await Region (buffer)
    .when (async function () {
      inc (nReaders)
      return (
        !await isWaiting (nReaders) &&
        !await isWaiting (nWriters) && 
        !await isEmpty   (buffer)
      )
    })
    .execute (function () {
       dec (nReaders)
       let n = [
         await buffer.read (),
         await buffer.read (),
         await buffer.read ()
       ]
    })(self)
})
```
<div class="listing">Modelo de Regiones Críticas. Agentes Lectores.</div>

Una vez establecida esta lógica de coordinación se precisa la semántica de operación de los lectores consistente en llevar a cabo la lectura de la tripleta de datos. Y finalmente, se recoge esta especificación formal para lanzar a ejecución sobre la base del agente implicado, que en el marco de los Web workers se refiere a través de la constante nativa self.

De manera similar se expresa el ciclo de vida algorítmico de los agentes escritores implicados en la solución. Tal como se ilustra en el listado 3, mediante la definición de otra región crítica condicional operada sobre el buffer de transferencia, se incluyen, en primer lugar, las condiciones de guarda que permiten el acceso a la sección crítica. En particular, para el caso de los escritores debe garantizarse que no existen otros agentes anteriores en espera de poder operar. Y también debe asegurarse que el estado del buffer no se encuentra en un estado incompatible con la escritura. Esto es, que al menos existen 3 huecos para poder hacer el depósito de una nueva tripleta. Esto es algo que se codifica con el predicado isFull.

```
worker.doForever (async function () {
  await Region (buffer)
    .when (async function () {
      inc (nWriters)
      return (
        !await isWaiting (nReaders) &&
        !await isWaiting (nWriters) && 
        !await isFull    (buffer)
      )
    })
    .execute (function () {
       dec (nWriters)
       await buffer.write (n)
       await buffer.write (n)
       await buffer.write (n)
    })(self)
})
```
<div class="listing">Modelo de Regiones Críticas. Agentes Escritores.</div>

Con respecto a la lógica de operación, ésta se describe en el fragmento de la región crítica condicional reservado para ello mediante el uso del inyector execute. En esencia, en este caso debe operarse sobre el buffer para escribir la tripleta de datos preceptiva.  Una vez articulada esta definición podemos lanzar a ejecución la región crítica proporcionando como referencia el agente escritor en curso.
  
## Soporte & Desarrollo

Muchos de los artefactos sistémicos que se utilizan en el marco del problema de referencia que estamos utilizando a lo largo de esta serie son elementos recurrentes. Las abstracciones de datos que sirven para dar soporte al buffer y los átomos que permiten articular las variables de control de la concurrencia son ejercicios triviales de encapsulación conveniente que sólo vienen a proporcionar azucarado sintáctico orientado al problema y no revisten mayor interés como para ser discutidos en este punto.

La construcción del espacio compartido es un esfuerzo prolijo de correlación y elevación semántica que cae fuera de los objetivos de este texto incluso aun cuando es elemento esencial de soporte en las arquitecturas concurrentes basadas en memoria compartida que venimos usando hasta el momento de manera recurrente.

Lo que sí resulta relevante en el marco de este artículo es descubrir cómo puede implementarse el soporte al concepto de región crítica y su extensión a las regiones críticas condicionales que hemos presentado a lo largo de este texto. Otros lenguajes de programación, como Java o C#, incluyen este constructo de manera nativa mediante el uso de primitivas o anotaciones. Sin embargo, en nuestro lenguaje de soporte no existe tal concepto. Por tanto, es necesario desarrollarlo nuevamente como una abstracción de control concurrente.

```
let locks = new Map ()

function Region (resource) {
  let lock = locks.get (resource) || Lock ()
  locks.set (resource, lock)

  function when (fn) {
    agent.guard = fn
    return this
  }

  function execute (fn) {
    agent.body = fn
    return async function (agent) {
       if (!await guard ()) await lock.wait (agent)
       else {
        await body ()
        lock.signal
      }
    } 
  }

  return {
    when,
    execute
  }
}
```
<div class="listing">Modelo de Regiones Críticas. Abstracción de Región.</div>

Mediante diseño intencional observamos que la abstracción de región crítica debe ofrecer sendos inyectores para proporcionar las condiciones de guarda y el cuerpo de ejecución. En la pragmática de uso, el constructor Region recibe un recurso como parámetro para dar paso opcional al inyector de guarda when y éste a su vez da paso al inyector de la lógica de operación execute. Cuando este inyector se cierra se ofrece un nivel de evaluación funcional que, al proporcional la referencia al agente como parámetro, ejecuta la lógica preceptiva de acuerdo a la semántica de región crítica condicional.

Internamente lo primero que hacemos es declarar un espacio de datos global lock que nos servirá de cache para mantener los cerrojos asociados a cada uno de los recursos compartidos recibidos como parámetro en el constructor de la región. Al inicio se recupera el cerrojo asociado y, de no existir, se crea e incluye como un nuevo cerrojo. El método de guarda no reviste mayor relevancia, es simplemente un inyector que recibe la lógica de espera condicional y la almacena en retención léxica. El método de ejecución también funciona miméticamente como un inyector de la lógica de operación. Pero a diferencia del método anterior revuelve una función que permite lanzar a ejecución la región crítica condicional una vez proporcionado el agente sobre el que hay que operar.

Dentro del cuerpo de esta función es donde reside toda la lógica relevante. Como podemos observar, apoyándonos en el uso de los cerrojos creados para cada recurso compartido evaluamos las condiciones de guarda y de no satisfacerse dejamos al agente convenientemente bloqueado. En caso contrario, lo dejamos pasar. Una vez que se ha finalizado la ejecución de la lógica de operación se lanza una señal sobre el cerrojo asociado al recurso para que, si procede, deje pasar al siguiente agente en cola de espera para operar.

## Conclusiones

A lo largo de este artículo hemos presentado el modelo de regiones críticas y su extensión hacia las regiones críticas condicionales. Como pudimos comprobar, el mayor valor diferencial de este mecanismo de control de la concurrencia es que constituye un constructo sintáctico explícito para encapsular y separar la lógica de coordinación de la lógica de operación dentro del cuerpo algorítmico de cada tipo de agente.

En efecto, las regiones críticas proporcionan un espacio para definir la lógica de operación que debe ejecutarse en cada agente en condiciones de exclusión mutua total con lo que se consigue por encapsulación ocultar la complejidad estructural que presentaban los modelos anteriores. Por otro lado, al proporcionar inyectores separados para la guarda y la ejecución se consigue separar la lógica de coordinación y operación tal como veníamos persiguiendo.

Pese a estas aparentes ventajas lo cierto es que el modelo de regiones criticas conduce al uso de una arquitectura de solución que resulta coercitiva en muchos sentidos. Con el transcurso del análisis que venimos haciendo a lo largo de esta serie, parece que cuanto más dogma formal pretendemos incluir en cada nueva aproximación menor es la flexibilidad expresiva que inducimos. En el particular de este modelo, el soporte al control concurrente ya no es algo explicito. Pero ello es a costa de haber perdido la libertad de definir una arquitectura de bloqueo propia sobre la que articular estrategias de despertar convenientemente adaptadas al espacio de cada problema.

En el marco de nuestro problema de referencia, al usar una única región critica vinculada al buffer de datos como recurso compartido nos hemos visto obligados a trabajar sobre un único cerrojo y, por tanto, una única cola de espera. Tanto lectores como escritores se acumulan ahora unos detrás de otros. Haciendo de la necesidad virtud, podríamos argumentar que esto nos da pie a explicar nuevas estrategias de despertar más simple que no requieren distinguir entre tipos de agentes. Pero lo cierto es que con estos mimbres es imposible hacer otros cestos. Un único elemento de control de acceso concurrente impide articular políticas de desbloqueo que atiendan a criterios de volumetría o prioridad basados en el tipo de agentes.

De hecho, el uso de dos variables de control diferenciadas para regular el flujo de lectores y escritores resulta algo artificial. Las variables nReaders y nWriters podrían haberse  sustituído perfectamente por una única variable nAgents y el efecto neto de control hubiera seguido siendo el mismo. No obstante, hemos preferido dejar el esquema como está para encontrar elementos de comparación con respecto a soluciones anteriores dentro de esta serie.

Todo esto se traduce en un menor grado general de control sobre la ejecución concurrente. Pero además, un aspecto incómodo que dejamos pasar por alto al describir el modelo de regiones críticas es el hecho de que la actualización de las variables de control, inc y dec, se encuentra dispersa a caballo entre las condiciones de guarda y la lógica de operación. Así que ni siquiera la encapsulación perseguida es totalmente perfecta. Necesitamos nuevos modelos de control concurrente que, resultando igualmente formales, resulten en un grado de expresividad mayor. En próximos artículos daremos respuesta a esta necesidad.

