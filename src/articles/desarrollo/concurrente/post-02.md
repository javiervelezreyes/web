---
title  : Modelo de Cerrojos
slug   : modelo-de-cerrojos
author : Javier Vélez
date   : Ene 2024
---

## Introducción
 
Como explicamos en el artículo anterior, uno de los elementos más relevantes a la hora de llevar a cabo un diseño concurrente es incluir la lógica de coordinación pertinente que sirve de garante a las propiedades de seguridad, vivacidad y prioridad propias del problema bajo análisis.

Dentro de las aproximaciones de memoria compartida, este esfuerzo se lleva a cabo a través de la definición de protocolos de bloqueo y desbloqueo que, operando sobre una arquitectura de colas, recubren convenientemente las operaciones de acceso al espacio compartido. 

En particular, el modelo que presentaremos a lo largo de este artículo utiliza la metáfora sistémica de cerrojo como elemento de control sobre el que pivotar la arquitectura de bloqueo que soporta la coordinación. Los agentes abren o cierran el cerrojo para controlar el flujo de acceso al espacio compartido lo que provoca colas de bloqueo a la espera de que el cerrojo se abra.

Durante este texto presentaremos este modelo de coordinación discutiendo la pragmática de uso de cerrojos en las actividades de control concurrente y lo pondremos en valor en el marco del problema de referencia. Después, describiremos las actividades de soporte que permiten materializar un modelo de esta naturaleza. 

## El Modelo de Cerrojos

Como explicamos durante el artículo de introducción, toda solución de ejecución concurrente pasa por lanzar a ejecución una colección de diferentes tipos de agentes con la volumetría oportuna para que realicen operaciones sobre un espacio de acceso compartido. El cuerpo algorítmico de cada agente articula, típicamente, un protocolo de coordinación que tiene por objeto regular de forma distribuida el flujo de agentes accediendo a dicho espacio.

En concreto, este protocolo consiste en consultar previamente el estado del sistema para conocer si es posible apropiarse del acceso al espacio y de no ser así quedar a la espera sobre una arquitectura de bloqueo hasta que se den las condiciones oportunas para poder operar.

Dentro del modelo de concurrencia que presentamos a lo largo de este texto, esta arquitectura queda materializada a través de la metáfora sistémica de cerrojo. Un cerrojo es un elemento de control con un estado interno booleano de abierto o cerrado y con operaciones atómicas de bloqueo y desbloqueo wait y signal. Cuando un agente quiere acceder a la zona compartida primero invoca al método de espera del cerrojo para saber que se le concederá paso sólo si el cerrojo se encuentra en estado abierto. En caso contrario quedará bloqueado en una cola asociada al mismo. Si se concede el acceso, el cerrojo se cierra automáticamente tras de sí y sólo será nuevamente abierto cuando otro agente invoque la operación de señalización sobre éste. 

En las soluciones basadas en este modelo de control concurrente puede usarse cualquier número de cerrojos. Pero lo que sí suele ser canónico es que, dentro del protocolo de coordinación, la lógica de bloqueo anterior a la operación concurrente se basa en el uso de la operación wait mientras que la lógica de desbloqueo subsiguiente se apoya en operaciones de tipo signal.

A lo largo de esta serie se aplicará la tecnología de Web Workers para dar soporte a la concurrencia y haremos uso de artefactos propios para definir y dar acceso al espacio compartido. Sin embargo, los detalles de soporte particulares serán descritos en la siguiente sección. De momento, en el listado 1, analicemos el código de configuración del escenario concurrente para el problema objeto de estudio.

```
const READERS = 5
const WRITERS = 5

let space = Shared.create ({
  buffer   : Buffer ([]),
  lReaders : Lock (Lock.CLOSED),
  lWriters : Lock (Lock.OPEN),
  nReaders : Atom (0),
  nWriters : Atom (0),
})

let RFactory = Workers (RPATH)
let WFactory = Workers (WPATH)
let Readers  = RFactory.create (READERS) 
let Writers  = WFactory.create (READERS) 

Readers.share (space)
Writers.share (space)

export { Readers }
export { Writers }
```
<div class="listing">Modelo de Cerrojos.  Configuración General.</div>

Este código comienza estableciendo la carga volumétrica de ambos tipos de agentes dentro del problema. Después, se define una zona compartida que incluye un buffer de datos inicialmente vacío, dos cerrojos para controlar el acceso al medio de manera separada para cada tipo de agente y sendas variables de control que permiten conocer el número de agentes bloqueados en cada una de las colas de espera para cada uno de los cerrojos. El estado inicial del cerrojo de lectores se encuentra cerrado mientras que el de escritores está abierto. Esto es así por el hecho de que inicialmente el buffer de datos está vacío y no debe concederse acceso a operaciones de lectura pero sí de escritura. Además es de señalar que el valor inicial en cada una de las variables de control del número de agentes lectores y escritores en espera de operación es igual a cero.

Tras esta definición, el código configura convenientemente las factorias de creación y las invoca para que lancen a ejecución concurrente el número indicado de agentes, obtenidos en los objetos Readers y Writers respectivamente. Antes de finalizar, se proporciona a los agentes la referencia al espacio de trabajo compartido para que puedan operar sobre él.

```
worker.doForever (async function () {
  nReaders.inc ()
  await lReaders.wait ()
  nReaders.dec ()

  let n = [
    await buffer.read (),
    await buffer.read (),
    await buffer.read ()
  ]

  let next = (
    await isWaiting (nReaders) && !await isEmpty (buffer) && lReaders ||
    await isWaiting (nWriters) && lWriters 
  )
  next.signal ()
})
```
<div class="listing">Modelo de Cerrojos. Agentes Lectores.</div>

Veamos ahora, en el listado 2, cómo es el código iterativo correspondiente a los agentes lectores. Cada agente repite un ciclo de operación infinito que siempre comienza por actualizar, en la variable nReaders, el número de lectores bloqueados. Tras ello, el agente invoca la primitiva del bloqueo del cerrojo para asegurar un acceso en exclusión mutua al entrar en la zona de operación crítica. Y una vez dentro de esta zona lo primero que ocurre es que se actualiza nuevamente el número de lectores en cola de espera. Hasta aquí se ha producido el protocolo de bloqueo.

Tras esta fase es posible proceder con la operación de los lectores. En este código de ejemplo, dicha operación consiste en la consumición consecutiva de una tripleta de valores sobre el buffer de memoria compartida. Como este acceso secuencial se realiza en exclusión mutua total con respecto a otros lectores y escritores, se tiene garantía absoluta de que en cada operación de lectura siempre se recuperarán tripletas de datos consecutivas.

Es entonces cuando se procede a articular el protocolo de desbloqueo que pretende dar continuidad al flujo de ejecución. Como explicamos con anterioridad, en este punto es posible aplicar diferentes estrategias que se corresponden, frecuentemente, con patrones prototípicos dentro de la literatura. En el ejemplo, se hace uso de un despertar en cascada en el que cada agente lector prioriza el despertar de otros agentes lectores en cola de espera siempre que las condiciones ambientales lo permitan frente a la alternativa concesiva de liberar a un escritor. Estas condiciones ambientales se expresan en términos del número de lectores y escritores y el estado del buffer.

Un punto importante de la implementación de la fase de desbloqueo es que ésta debe ejecutase enteramente dentro de la zona de acceso en exclusión mutua para evitar condiciones de conflicto. Este hecho obliga a que la lógica de determinación de desbloqueo se apoye en una variable local que indique el cerrojo sobre el que debe operarse y sólo después invocar la primitiva de señalización para que ésta sea siempre la última sentencia en ejecución. De no ser así la evaluación de las condiciones de estado podrían verse interferidas por los nuevos agentes que se liberan.

```
worker.doForever (async function (n) {
  nWriters.inc  ()
  await lWriters.wait ()
  nWriters.dec  ()

  await buffer.write (n)
  await buffer.write (n)
  await buffer.write (n)

  let next = (
    await isWaiting (nWriters) && !await isFull (buffer) && lWriters ||
    await isWaiting (nReaders) && lReaders 
  )
  next.signal ()
})
```
<div class="listing">Modelo de Cerrojos. Agentes Escritores.</div>

El caso de los agentes escritores resulta bastante simétrico con respecto al de los lectores y no encierra mayor detalle más allá de que en este caso se realizan operaciones de escritura por tripletas. Durante la fase de bloqueo, los agentes quedan bloqueados en la cola asociada al cerrojo de escritores y se usa la variable de control nWritters para registrar en todo momento el número de agentes esperando a poder volcar datos. En la fase de desbloqueo, por su parte, se sigue también un patrón de cascada que en este caso da prioridad a escritores frente a lectores. Como hemos explicado a lo largo de esta serie las políticas optimas en estas fases dependen siempre fuertemente de las condiciones de cadencia y volumetría del problema.

## Soporte y Desarrollo

El soporte general a los escenarios de ejecución concurrente requiere proporcionar el juego necesario y suficiente de artefactos para desarrollar tanto la lógica de operación como la de coordinación. En particular, dentro del ejemplo desarrollado a lo largo de este texto se requiere, proporcionar sendas abstracciones de datos para articular la transferencia de información entre lectores y escritores y para contabilizar el número de agentes en cola para cada uno de los dos cerrojos en uso.

El buffer es una adaptación conveniente de una estructura de datos de tipo Array que expone métodos de lectura y escritura read y write. El átomo es, por su parte, una encapsulación sobre un valor numérico que ofrece operaciones de incremento, decremente y acceso. Ninguno de estos esfuerzos de desarrollo encierra misterio alguno. Pero son elementos de soporte que aparecerán recurrentemente a lo largo de los subsiguientes artículos.

El código principal también hace uso de factorías de agentes para la creación de la colección de lectores y escritores que participan en el escenario del problema. Estas abstracciones se limitan a ofrecer un recubrimiento de azúcar sintáctico que opera sobre el constructor nativo de Web Worker y por tanto tampoco aporta nada su análisis en detalle. Lo que sí resulta francamente interesante es cómo es posible crear un espacio de datos que será compartido por todos los agentes implicados en la solución. A grandes rasgos cabe decir que este artefacto hace uso de promesas, proxies dinámicos y arquitecturas de correlación para reformular un modelo de comunicación nativa basado en eventos entre los agentes y el código principal a uno basado en llamadas a procedimientos. Lamentablemente la explicación pormenorizada de este desarrollo es demasiado prolija y cae fuera de los objetivos de este texto. Mi recomendación principal aquí es tomar este artefacto como un activo funcional cuya operativa interna es irrelevante para entender el marco de la ejecución concurrente.

El verdadero foco de atención del soporte al modelo de cerrojos es cómo este tipo de metáfora sistémica puede desarrollarse en atención a la semántica descrita. En líneas anteriores decíamos que un cerrojo es una abstracción capaz de operar como pasarela condicional hacía una zona de acceso restringido al recurso. Para ello, el cerrojo proporciona las primitivas wait y signal que se utilizan sobre los protocolos de bloqueo y desbloqueo anterior y posterior a dicha zona para dar garante de seguridad, vivacidad y prioridad a la solución planteada.

```
let OPEN   = true
let CLOSED = false

let isClosed = x => x == CLOSED

function Lock (init) {

  let state  = init
  let agents = []

  function wait () {
    return new Promise (function (agent) {
      if (isClosed (state)) agents = [...agents, agent]
      else {
        state = CLOSED
        agent ()
      }
    })
  }

  function signal () {
    let [agent, ...next] = agents
    agents = next
    if (agent) agent ()
    else state = OPEN
  }

  return {
    wait,
    signal
  }

}

Lock.OPEN   = OPEN
Lock.CLOSED = CLOSED

export default Lock
```
<div class="listing">Modelo de Cerrojos. Abstracción de Cerrojo.</div>

Como puede apreciarse en el listado 4, la abstracción Lock recibe un valor de estado inicial, init, que se corresponde con alguno de los dos valores posibles abierto o cerrado. Internamente la abstracción encapsula un valor para reflejar el estado en curso y un array para encolar la colección de agentes bloqueados en espera. Respectivamente esto se representa con las variables state y lock.

El cerrojo expone únicamente dos métodos de operación para el bloqueo y liberación de agentes sobre el mismo. Cuando un agente invoca la operación de espera, el cerrojo consulta su estado interno y deja pasar el agente solamente en caso de que éste esté abierto. Pero antes cambia el estado del recurso a cerrado. Si por el contrario, el agente encuentra el cerrojo cerrado este se añada al final de la cola de agentes a la espera de que alguien en un futuro le despierte.

La operación de señalización resulta, en cierto sentido, simétrica a la anterior. Lo primero que se hace es recuperar la cola asociada al cerrojo y extraer por desestructuración el primer agente bloqueado. Si existe un agente se le da paso y sino la operación es inocua. En cualquier caso, tras la operación la situación del cerrojo permuta al estado abierto. Por último, por conveniencia se incluyen en la abstracción sendas constantes simbólicas para referir el estado abierto y cerrado del cerrojo a través de las expresiones OPEN y CLOSE.

Pero ¿cómo es posible que estemos controlando el flujo de continuidad en la ejecución de los agentes si, pese a tratarse de Web Workers, no los estamos tratando ni como procesos ni como verdaderos hilos de ejecución? La clave de este hecho radica en el uso estratégico de promesas. Como aprendimos en una serie anterior dedicada a la ejecución asíncrona, las promesas, acompañadas del modelo de intercesión con primitivas await y async, son elementos de control de la ejecución ante condiciones de contorno. En efecto, al enhebrar dentro del marco del cerrojo la ejecución entrante como una promesa podemos capturar su continuidad a través de las funciones manejadoras de la misma.

Revisitemos el código anterior en este sentido. Cuando el flujo de ejecución de un determinado agente invoca la operación de bloqueo se genera una promesa cuya continuidad sólo se concede si el cerrojo se encuentra abierto. En otro caso, es precisamente la función de continuidad de dicha promesa la que se retiene dentro de la cola de bloqueo del cerrojo para darle continuidad con posterioridad.

Y en efecto, si ahora fijamos nuestra atención en el código de la operación de señalización, al hacer la desestructuración lo que se está recogiendo es el manejador de continuidad de algún agente que previamente ha quedado bloqueado en la cola por invocación de la operación de espera. Al invocar dicho manejador automáticamente se está concediendo la continuación al agente para que avance en su ejecución.

Un aspecto esencial que es preciso señalar dentro de este tipo de implementación es que las operaciones del cerrojo wait y signal deben siempre comportarse como operaciones atómicas. Dado que el código presentado no cumple con estos requisitos, ello implica que el código interno de cada operación debe ejecutarse en exclusión mutua total. Por norma general, este tipo de garantías se resuelve mediante el uso de algoritmos de espera activa y gestión de turnos. Sin embargo, dado que la naturaleza de la ejecución subyacente que ofrece JavaScript para realizar una comunicación con Web Workers está basada en eventos y mensajes, este requisito está asegurado. Dogma de fe en este punto.

## Conclusiones

A lo largo de este articulo hemos presentado el primero de los modelos de coordinación que se usa en el marco de los problemas de ejecución concurrente. Como ya explicamos se trata de un modelo de coordinación distribuida en la que los agentes implicados en el espacio del problema van dándose paso para garantizar las condiciones de vivacidad, prioridad y seguridad pertinentes.

Pese a su aparente simplicidad, lo cierto es que esta aproximación es considerada una solución de bajo nivel ya que no ofrece mecanismos de encapsulación muy potentes ni tampoco consigue aislar la lógica de coordinación de la de operación dando lugar a soluciones complejas de leer y mantener. Además, el desarrollo de problemas más elaborados se convierte en un asunto complejo a poco que las restricciones de coordinación se vuelven más complicadas.

En este sentido, durante todo el código que hemos presentado a lo largo de este artículo hemos pretendido poner foco de atención en los aspectos fundacionales del modelo de cerrojos. Se trataba, a la postre, de describir este modelo y explicar cómo se usa y cuál es su implementación de soporte interna. Los aspectos algorítmicos propios de escenarios más complejos o elaborados han sido intencionalmente evitados, y de hecho esta es la estrategia de exposición que seguiremos en el resto de artículos subsiguientes de esta serie.

Lo que sí parece haber sido evidenciado a través de los ejemplos expuestos es que, desde un punto de vista general, los protocolos de actuación de los escenarios de ejecución concurrente resultan especialmente simplistas. Un cuerpo de acceso critico al espacio de memoria compartido debe ser abrigado por sendos protocolos de bloqueo y desbloqueo que resultan garantistas en relación a las condiciones se vivacidad, prioridad y seguridad que se imponen desde el marco del problema.

La descripción de estas condiciones se expresa comúnmente mediante el uso de variables de control compartidas dentro del espacio basadas en el número de agentes en intervención y el estado particular de las abstracciones de datos. En este sentido cabe preguntarse si existirán otras formalizaciones de mayor abstracción que conduzcan a una expresividad más rigurosa y segura de todas estas condiciones. Pero para dar respuesta a esta pregunta tendremos que esperar al siguiente artículo de esta serie.



