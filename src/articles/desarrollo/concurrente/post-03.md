---
title  : Modelo de Semáforos
slug   : modelo-de-semaforos
author : Javier Vélez
date   : Enero 2024
---

## Introducción

En un artículo anterior presentamos el primer modelo de soporte al control concurrente basado en el uso de cerrojos. Mediante esta metáfora sistémica, el desarrollador era capaz de modular el acceso a las zonas críticas dentro del cuerpo algorítmico de los agentes donde se opera sobre el espacio de memoria compartida.

Pese a que la aproximación basada en cerrojos resultaba sencilla y eficaz, lo cierto es que tuvo que ser tildada como una respuesta de bajo nivel dado que no ofrece ni mecanismos de encapsulación que oculten la complejidad de la lógica de coordinación ni tampoco una manera clara y explícita de separar ésta de la lógica de operación. Este es, precisamente, el camino de evolución que trataremos de recorrer a lo largo de los articulos de esta serie donde iremos presentando modelos sucesivos que supondrán en este sentido una mejora con respecto a sus aproximaciones predecesoras.

Lo que si parece haberse identificado como una lección aprendida a la luz de los ejemplos de código mostrados hasta este punto es que la lógica de coordinación en los problemas de desarrollo concurrente se expresa no sólamente en términos de las condiciones ambientales de estado sino comúnmente en referencia a la cardinalidad de los agentes implicados a lo largo del tiempo.

En efecto, en el problema de lectores y escritores que estamos utilizando de referencia a lo largo de esta serie, conocer el número de agentes de cada categoría esperando en cola para poder operar sobre el espacio compartido resulta primordial y ello se apreciaba en el modelo anterior al observar los protocolos de desbloqueo.  Dadas estas características igual resulta de interés proporcionar algún otro modelo que permita regular el control concurrente de manera más disciplinada y formal a través de nuevas abstracciones en lugar de hacerlo mediante el uso de variables numéricas compartidas. Este es precisamente el objetivo del modelo de semáforos que describiremos en detalle a lo largo de este artículo.
 
## El Modelo de Semáforos

En el articulo anterior presentabamos la metáfora sistémica de cerrojo como elemento de base para regular el flujo de agentes en ejecución que accedían al espacio compartido. En esencia un cerrojo se definía como una abstracción de datos sencilla caracterizada por un estádo interno con dos valores lógicos de abierto y cerrado y sendas operaciones wait y signal.

Cuando un agente invocaba la operación de espera, si el cerrojo se encontraba en estado abierto, se permitía pasar al agente y el cerrojo pasaba al estado de cerrado. En caso contrario, el agente quedaba bloqueado en una cola de espera. Cuando desde otro punto se invocaba el método de señalización, el cerrojo se abria y, caso de disponerse de agente en la cola se seleccionaba a una de ellos para dejarle pasar y volver a cerrar nuevamente el cerrojo.

Mediante este sencillo mecanismo, cuyos métodos de acceso se asumirían como operaciones atómicas, o equivalentemente sentencias ejecutadas en exclusión mutua total, se conseguiría articular la lógica de coordinación necesaria que permitiría un adecuado control de la concurrencia. La zona critica de acceso al espacio compartido dentro del cuerpo algorítmico de cada agente se rodeaba de los protocolos pertinentes de bloqueo y desbloqueo. En el protocolo de bloqueo, debían evaluarse las condiciones ambientales y, de ser necesario, utilizar el cerrojo para efectuar la retención del flujo de ejecución del agente. En el protocolo de desbloqueo, se reevaluaba la situación ambiental del entorno y se tomaba una determinación acerca de sobre cuál de todos los cerrojos implicados debía emitirse una señalización oportuna para dar continuidad al flujo natural de ejecución.

Este esquema general de protocolos complementarios es un elemento común de todos los modelos de solución del desarrollo concurrente. La determinación de la política particular de desbloqueo que convenientemente se debe aplicar es uno de los elementos más característicos de cada problema. En efecto, ésta se ve fuertemente condicionada por las condiciones de vivacidad y prioridad exigidas. Específicamente, lo cierto es que la lógica de desbloqueo suele formularse comúnmente en términos del estado del recurso, pero sobre todo es frecuente que se haga en función de la carga volumétrica de los agentes implicados para mantener las condiciones de equilibrio.

El modelo de cerrojos resolvía esta evaluación condicional en términos e variables numéricas de conteo. Sin embargo, dado que estos aspectos son un elemento característico de control en el flujo concurrente parece sensato encontrar un nuevo modelo de soporte que atienda especialmente a estos factores. La manera de dar respuesta a esta necesidad es extender el concepto de cerrojo al concepto de semáforo.

Si el cerrojo se concebía como un centinela de acceso con una lógica de acceso binário, los semáforos son la extensión natural de esta semántica al caso de que su estado interno consiste en un contador interno configurado a un valor inicial. Las operaciones sobre el semáforo son equivalentes a las del cerrojo de manera que cuando un semáforo solicita entrar en la sección crítica por invocación de la primitiva de espera, el semáforo dejará pasar al agente solo si su estado interno no ha alcanzado el valor cero. En otro caso el agente quedará bloqueado.

La operación de espera decrementa el contador interno en una unidad cada vez que deja entrar a un nuevo agente en la sección critica mientras que la operación de señalización lo incrementa en una unidad al salir de ella. El valor semántico neto de esta extensión es que cuando una sección de acceso critico al espacio compartido se acota mediante el uso de semáforos se está legitimando que tan sólo un número acotado de agentes puedan estar cooperando sobre el espacio de manera concurrente. Este número corresponde al valor de configuración inicial del semáforo.

Para explicar por qué el modelo de semáforos supone una extensión semántica de valor desde una perspectiva pragmática, debemos retomar el ejemplo de lectores y escritores que venímos usando a lo largo de esta serie como marco de referencia ilustrativo. Comenzando por el principio, en el listado 1 podemos observar las primeras diferencias existentes con respecto al modelo de cerrojos. En esencia, la zona de memoria compartida incluye ahora como elemento de control varios semáforos. Un par para controlar el flujo de las actividades respectivas de lectura y escritura y otro binario llamado cerrojo cuya utilidad justificaremos más adelante. El buffer de datos que sirve de elemento de transferencia entre los agentes cooperantes permanece. Sin embargo, ha de observarse que las variables de control que mantenían el registro actualizado de los agentes de lectura encolados en cada momento ya no son necesarias. En su lugar, el estado interno de los semáforos adquiere esta responsabilidad.

```
const READERS = 5
const WRITERS = 5
const OPEN    = 1
const NONE    = 0

let space = Shared.create ({
  buffer   : Buffer ([]),
  lock     : Semaphore (OPEN),
  sReaders : Semaphore (NONE),
  sWriters : Semaphore (WRITERS),
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
<div class="listing">Modelo de Semáforos. Configuración General.</div>

Veamos ahora cómo se hace uso de esta aproximación en el cuerpo de cada agente. En el caso particular de los lectores, su esquema algorítmico recorre incesantemente un bucle de lectura que, como es preceptivo en este tipo de arquitecturas, se descompone en un protocolo de bloqueo y desbloqueo en torno a la zona crítica de acceso al espacio compartido. En el listado 2, puede apreciarse en efecto que los protocolos de bloqueo y desbloqueo consisten exactamente en el uso de los semáforos de lectores y escritores. 

En particular, sobre la fase de bloqueo ahora cada agente lector invoca directamente a la operación de espera sobre el semáforo de lectores. Este artefacto será responsable de asegurar que el agente sólo transitará a la zona de memoria compartida cuando hay datos disponibles para ser consumidos. Sin embargo, una vez allí, antes de acceder al espacio es preciso garantizar el acceso en exclusión mutua total para cumplir con la condición de que los datos son recogidos del buffer en tripletas consecutivas según como han sido depositados. Precisamente esta es la razón de ser el uso del semáforo binario que se definió en el listado 1, ya que permite acotar una zona anidada donde se ofrece un acceso protegido. Nótese que dado que los semáforos son una extensión de los cerrojos, al definir un semáforo binario con cardinalidad 1 estamos desarrollando un comportamiento equivalente al de un cerrojo.

```
worker.doForever (async function () {
  await sReaders.wait ()
    await lock.wait ()
      let n = [
        await buffer.read (),
        await buffer.read (),
        await buffer.read ()
      ]
    lock.signal ()
  sWriters.signal ()
})
```
<div class="listing">Modelo de Semáforos. Agentes Lectores.</div>

En la zona de desbloqueo debe articularse como sabemos la lógica de coordinación pertinente que mantenga la adecuada fluidez del problema. En este caso asumiremos que la carga volumétrica de agentes lectores y escritores y su cadencia de operación es equitativa. Esto es algo que, en efecto, puede ser comprobado en la configuración paramétrica del listado 1. Por este motivo aplicaremos la técnica de despertar cruzado por cortesía. Cada agente lector, al salir de su zona de operación crítica deja un hueco en el buffer lo que legitima la concesión a un turno de escritores. Y cada escritor deberá asimismo hacer lo propio en justa reciprocidad para garantizar la simetría de la solución.

En efecto, si observamos el comportamiento de los agentes lectores que aparece reflejado en el listado 3 observamos que, al igual de lo que ocurría en el modelo de cerrojos, los escritores muestran comportamientos miméticos con respecto a los lectores. Cada escritor solicita acceso a la sección critica por medio de la operación de espera aplicada sobre el semáforo de escritores y tras de sí, realiza las operaciones pertinentes de escritura en tripleta. Aquí nuevamente la actividad de escritura queda acotada de forma anidada por el semáforo binario que garantiza una operación en exclusión mutua. Y al alcanzar la zona de desbloqueo los escritores, como explicamos antes, realizan la cesión de turno a un agente lector.

```
worker.doForever (async function (n) {
  await sWriters.wait ()
    await lock.wait ()
      await buffer.write (n)
      await buffer.write (n)
      await buffer.write (n)
    lock.signal ()
  sReaders.signal ()
})
```
<div class="listing">Modelo de Semáforos. Agentes Escritores.</div>

Las políticas de desbloqueo cruzado que hemos ejemplificado en este articulo resultan muy coercitivas y a veces resultan poco flexibles de cara a la tolerancia de la variabilidad concurrente. Sin embargo, dado que los escenarios de alta volumetría y cadencia son frecuentes en este tipo de problemas resulta de valor escenificar como el uso de semáforos puede simplificar notablemente el diseño de soluciones en estos casos.

## Soporte & Desarrollo

El soporte al desarrollo de soluciones concurrentes basadas en el modelo de semáforos requiere, como contexto de abrigo, muchos de los elementos que ya fueron considerados en el artículo anterior. En particular, las factorias de construcción de agentes, las capacidades de soporte al ciclo de vida iterativo y los mecanismos de comunicación de bajo nivel que permiten materializar un espacio compartidos son y serán una constante a lo largo de toda esta serie.

El uso del buffer de transferencia de datos como abstracción central en torno a la cual gira todo el problema de referencia también aparece referido en este texto. Pero como señalamos en el artículo anterior, unas veces por excesiva complejidad y otras por trivialidad la explicación de todos estos artefactos no será incluida aquí.

Lo que si reviste interés abordar en el marco de esta sección es cómo puede implementarse un semáforo de acuerdo a la caracterización semántica que se ha descrito en la sección anterior. Dado que, como explicamos, los semáforos son una extensión en cardinalidad del concepto de cerrojo, o si se quiere los cerrojos una simplificación binaria del concepto de semáforo, es posible imaginar que la solución resultará francamente similar a la que se presentó en el artículo anterior.

Esto es algo que se observa claramente en el listado 4. Como puede apreciarse, un semáforo mantiene las mismas primitivas de control de flujo concurrente que exponían los cerrojos. Existe una operación de bloqueo condicional que depende del estado interno y otra de señalización para actualizar convenientemente dicho estado. A diferencia del caso de cerrojos, en lo semáforos el estado interno incluye una variable contador que es inicializada al valor del parámetro de construcción. Cada vez que se invoca el método de espera este deja pasar al agente y decrementa en una unidad el contador. Cuando dicho contador alcanza el valor cero, el semáforo se cierra y los agentes quedan bloqueados en una cola de espera similar a la que incluían los cerrojos. 

```
let isClosed = x => x == 0

function Semaphore (n) {
  let state  = n
  let agents = []

  function wait () {
    return new Promise (function (agent) {
      if (isClosed (state)) agents = [...agents, agent]
      else {
        state--
        agent ()
      }
    })
  }

  function signal () {
    let [agent, ...next] = agents
    agents = next
    if (agent) agent ()
    else state++
  }

  return {
    wait,
    signal
  }
}
```
<div class="listing">Modelo de Semánforos. Abstracción de Semáforo.</div>

La operación de señalización, de forma simétrica incrementa en una unidad el valor del contador interno lo que abre el estado del semáforo para que un nuevo agente, o uno en cola de espera, transite a la sección critica lo cual efectuará los efectos de alteración de estado que acabamos de explicar.  

Al igual que ocurría en el modelo de cerrojos, la implementación de la abstracción de semáforo se apoya fuertemente en las capacidades de control de la ejecución que habilita la ejecución asíncrona. La operación de espera genera una promesa con manejadores de continuidad que son capturados en retención léxica dentro del estado del semáforo para articular la cola de bloqueo. Cuando se invoca el método de sincronización, este se limita a extraer de la cola el primer manejador encolado y lo ejecuta para permitir que el flujo de ejecución asociado a éste pueda continuar.

## Conclusiones

El modelo de semáforos que hemos presentado a lo largo de este artículo supone una revisitación conveniente de la metáfora sistémica de cerrojo. Si bien sendos tipos de artefactos resultan miméticos desde el punto de vista de su semántica operacional dado que ambos ofrecen el mismo par de primitivas, el primero supone una extensión en cardinalidad que abre oportunidades de uso mayores que las que presentaban los cerrojos.

En efecto, los cerrojos eran artefactos de bajo nivel orientados a habilitar el control del flujo de ejecución para garantizar el establecimiento de zonas de acceso protegido en exclusión mutua total en el marco del cuerpo algorítmico de cada tipo de agente. Los semáforos, por el contrario, flexibilizaban esta semántica para permitir que fuera un número acotado de agentes el que pudiera entrar de manera simultánea y concurrente a la sección crítica.

Esta cualidad fue puesta en explotación sobre la base de los listados de código expuestos que operan en el marco de nuestro ejemplo de referencia. En particular, el semáforo, aplicado sobre cada tipo de agente, permitió garantizar las restricciones de seguridad relativas al estado del espacio de datos compartido. Esto es, que no pudieran darse actividades de lectura sobre un buffer vacío ni actividades de escritura sobre un buffer lleno. Pero a su vez, un semáforo binario anidado se usaría para generar una zona de exclusión mutual total similarmente a como se hizo en el modelo anterior.

Como se ha podido comprobar, el uso de semáforos permite simplificar notablemente la expresión de la lógica de coordinación necesaria para definir soluciones de ejecución concurrente. Esto es así en parte por la mayor expresividad que ofrecen este tipo de artefactos. Sin embargo, en el relato que hemos hecho al presentar los ejemplos existen trampas encerradas. Esta simplicidad es tan sólo aparente dado que sin el uso de otras variables de control volumétrico como las que se usaron en el artículo anterior es imposible establecer protocolos de desbloqueo diferentes al de concesión cruzada que se han aplicado en este texto.

Podemos argumentar que en muchas situaciones el esquema de coordinación que hemos descrito aquí es exactamente el que canónicamente se requiere en muchos escenarios de control concurrente y ello justifica la ideación de los semáforos como metáfora de éxito. Pero lo cierto es que si salimos de estos settings tan particulares los semáforos como elementos autónomos resultan insuficientes. En escenarios más generales, el uso de semáforos debe acompañarse de las variables de control que ya hemos estudiado en el modelo anterior lo que resta valor de originalidad a los semáforos con respecto a los cerrojos. Semáforos y cerrojos son una extensión o particularización sobre la base de la cardinalidad. Teniendo en claro cómo funcionan este tipo de abstracciones todo es cuestión de hacer un uso racional de estos elementos de control.

Lo que pese a todo lo anterior sigue sin quedar resuelto de manera satisfactoria con el modelo de semáforos es el bajo nivel de operación. Será necesario encontrar nuevas aproximaciones que tal vez acierten a ofrecer mayores ventajas en relación a encapsulación y división de responsabilidades entre la lógica de coordinación y operación. Como explicábamos en la introducción, recorrer este camino de mejoras sucesivas es el propósito de todos los artículos de esta serie. Así que será en el próximo texto donde encontraremos mejoras más relevantes.
