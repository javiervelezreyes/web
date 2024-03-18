---
title  : El Modelo de Canales
slug   : el-modelo-de-canales
author : Javier Vélez
date   : Ene 2024
---

## Introducción

Las soluciones basadas en cerrojos que discutimos al comienza de esta serie demostraron que muchas veces el uso de un artefacto sencillo de control del flujo de ejecución convenientemente articulado ya ofrecía una respuesta suficientemente flexible y eficaz. Y que cuando esta metáfora se extendía en cardinalidad para permitir la entrada concurrente a un número acotado de agentes para dar lugar al concepto de semáforo, se simplificaba aún más el control ya que este artefacto absorbería parte de la lógica de coordinación que requerían los cerrojos.

Cerrojos y semáforos podían interpretarse, de esta manera, como haz y envés de una misma moneda. Pero, pese a su aparente utilidad práctica, su uso resultaba en experiencias de desarrollo de bajo nivel donde no se conseguía alcanzar una encapsulación de la lógica de coordinación ni tampoco mantener ésta en aislamiento con respecto a la lógica de operación propia de los agentes.

Precisamente en esta dirección fueron nuestros siguientes pasos. Primero mediante el concepto de regiones críticas y luego a través del uso de monitores y variables de condición se pretendía ofrecer un modelo de desarrollo más abstracto y formal que el de aproximaciones anteriores. Mientras que las regiones críticas ofrecían mecanismos de encapsulación sobre la lógica de coordinación distribuida en el cuerpo de cada agente, los monitores planteaban una aproximación divergente basada en la centralización de dicha lógica.

El modelo de monitores se postuló, en este sentido, claramente como la aproximación de mayor éxito. Sin embargo, todas estas soluciones presentan una característica común que, en determinados contextos, puede traducirse en una fricción de uso importante. Se trata de que cada modelo descrito se basa en el uso de un espacio de memoria compartido. En efecto, cuando deseamos desarrollar escenarios concurrentes que se despliegan en un entorno distribuido todo lo que hemos ido visitando se derrumba.  En atención a esta preocupación se orienta el último de los modelos de soporte a la ejecución concurrente que discutiremos en este último capítulo de la serie. 

## El Modelo de Canales

Los modelos precedentes que hemos discutido a lo largo de esta serie presentaron un abanico de posibilidades interesantes con respecto al problema de soporte a la ejecución concurrente. Todas ellas encontraban un espacio de aplicación, desde las aproximaciones más sencillas basadas en el uso de cerrojos y semáforos que pretendían ofrecer artefactos de control del flujo de ejecución de los agentes, hasta las soluciones más robustas basadas en el uso de monitores como medio formal para la encapsulación y separación de competencias.

Sin embargo, la única pega que podía señalarse sobre toda esta familia de modelos es que se basaban en el uso de una arquitectura de memoria compartida. En efecto, tanto el uso de abstracciones de datos propias de la lógica de operación como el conjunto de variables de control que permitían expresar la lógica de coordinación requerían desplegarse en un espacio de acceso compartido. El vehículo de comunicación entre agentes tanto para la operación como para la coordinación se apoyaba en dicho espacio.

En el marco de nuestro problema de referencia, por ejemplo, el buffer de transferencia de datos y las variables de control para conocer la carga en colas de espera debía ser compartida por todos los agentes. Incluso los artefactos de regulación de la concurrencia como cerrojos, semáforos y monitores debían también publicarse dentro del espacio de acceso compartido.

Podría entenderse que este hecho es una característica intrínseca de las arquitecturas de ejecución concurrente y, en efecto, es así. Sin embargo, muchas voces dentro de la literatura han reclamado la necesidad de que los escenarios de esta naturaleza deben poder desplegarse en el marco de espacios de ejecución distribuida formados por distintos nodos de operación conectados mediante comunicaciones en red. Para dar soporte a esta necesidad se desarrolló el modelo de canales que presentamos en este artículo.

Retomemos por un momento el modelo de monitores que discutimos en el artículo anterior. La característica diferencial de esta aproximación con respecto a la de sus alternativas naturales es que ofrecía una solución basada en la idea de centralización encapsulada. Los agentes lectores y escritores eran capaces de delegar los procesos de operación al monitor para que este llevara a cabo toda la operativa. En los casos más sencillos, toda la lógica de operación y coordinación quedaría expresada en el contrato público del monitor. En los casos más elaborados, el monitor se responsabilizaría de encapsular sólo la lógica de coordinación dejando que la de operación se desarrollara sobre el cuerpo algorítmico de cada agente de manera controlada.

Ahora imaginemos que el cuerpo del monitor y toda la lógica de configuración se codifica a su vez dentro del cuerpo de un nuevo tipo de agente llamado agente mánager o coordinador e imaginemos también que todos los agentes así desplegados son capaces de comunicarse sobre conexiones de red mediante el intercambio de mensajes. Dicho intercambio se realiza a través de la metáfora sistémica de canal. Cuando un agente desea emitir un mensaje hacia otro agente, usa el canal correspondiente e invoca la operación send. Recíprocamente, cuando un agente requiere mantenerse a la escucha activa de los mensajes que le llegan de otros agentes utiliza la operación receive. La primera es una operación no bloqueante, la segunda sí, en tanto que devuelve una promesa que se resuelve en la llegada de cada mensaje.

Realizado todo este juego de transformaciones hemos llegado al espacio conceptual propio del modelo de canales. Dentro de esta aproximación no existen elementos compartidos más allá de los propios canales, cosa que se puede resolver a través de arquitecturas de proxy. Pero toda la operación que de desarrolla a lo largo del tiempo durante la ejecución queda soportada en base al flujo de mensajes que se intercambian los agentes implicados en el escenario.

En el marco particular de nuestro problema de referencia ahora disponemos de tres tipos de agentes. Los agentes de lectura, los agentes de escritura y el agente de coordinación. Cuando un agente de lectura quiere hacer una operación de consumición de datos envía un mensaje al coordinador para que éste realice la operación por él. Simétricamente, cuando un agente de escritura necesita deposita datos en el buffer de transferencia, envía un mensaje al coordinador con dichos datos para que sea éste el que realice la operación de escritura.

Evidentemente son muchos los modelos de solución que pueden articularse para dar respuesta a nuestro problema. Pero una posible arquitectura de canales de soporte podría ser la siguiente. En primer lugar, cada agente lector necesita acceder a un canal del coordinador para solicitarle una operación de consumición de datos. Y a su vez, cada uno de estos agentes debe disponibilizar un canal contra el coordinador para que éste le transfiera los datos leídos una vez realizada la operación. En el lado de los escritores, la cosa es más sencilla. Cada escritor necesita tan sólo tener acceso a un canal del coordinador para emitir cada operación de escritura. En total necesitamos sendos canales de lectura y escritura entrantes hacia el coordinador y un canal saliente desde el coordinador hacia cada uno de los agentes lectores.

Veamos ahora, en el listado 1, la expresión de la lógica del ciclo de vida del agente coordinador. Como puede apreciarse, este agente es el responsable de custodiar el acceso protegido a la abstracción de datos del buffer ya que toda operación, tanto de lectura como de escritura, es llevada a cabo por este agente. Las funciones auxiliares doRead y doWrite llevan a cabo esta actividad.  

```
let buffer   = Buffer ([])
let canRead  = buffer.get ().length > MIN
let canWrite = buffer.get ().length < MAX

worker.doForever (async function () {
  async function doRead ({ id }) {
    let data = [
      buffer.read (),
      buffer.read (),
      buffer.read ()
    ]  
    let channel = readers[id]
    await channel.send (data)
  }

  async function doWrite ({ data }) {
    buffer.write (data)
    buffer.write (data)
    buffer.write (data)
  }

  await Port ()
    .when (read)  .and (canRead)  .then (doRead)
    .when (write) .and (canWrite) .then (doWrite)
  .receive ()
})
```
<div class="listing">Modelo de Canales. Agente Manager.</div>

Cuando el coordinador recibe un mensaje de petición de lectura, la operación oportuna extrae del mensaje el dato que identifica de manera única al agente lector y ello le permite seleccionar el canal de salida por el que deberá emitir la respuesta tras la lectura al agente oportuno. En las operaciones de escritura, por el contrario, el coordinador extrae del mensaje los datos a ser depositados en el buffer y los escribe allí. Se asume que esta operativa no puede generar errores con lo que no se considera necesario emitir notificaciones de éxito o fracaso de vuelta al lado de los escritores. Nuestra solución presenta esta asimetría característica.

Lo que tal vez resulta más relevante de todo este código es la última sentencia que es un constructo sintáctico propio de soporte al modelo de canales. En este escenario se requiere que el agente coordinador mantenga una escucha activa y simultánea sobre los dos canales de petición provenientes de agentes lectores y escritores. Dichos canales se materializan en las variables de canal read y write. La sentencia Port permite expresar dos reglas de atención simultánea. De manera declarativa éstas se pueden leer como que, si por el canal de lectura llega un nuevo mensaje y es posible realizar una operación de lectura sobre el buffer, entonces debe ejecutarse la operación de lectura. Y recíprocamente, si por el canal de escritura llega un mensaje de escritura y puede realizarse tal operación, debe realizarse la operación de escritura.

```
worker.doForever (async function (id) {
  await read.send ({ id })
  let n = await readers[id].receive ()
})
```
<div class="listing">Modelo de Canales. Agente Lector.</div>

Si fijamos ahora nuestra atención en el ciclo de vida de los agentes lectores observaremos que su cuerpo algorítmico se ha reducido considerablemente con respecto al de los modelos anteriores. Como puede apreciarse en el listado 2, cada lector reproduce incesantemente una actividad de solicitud de consumición de datos al agente coordinador pasando como referencia su identificador y después se mantiene bloqueado a la espera de recibir el dato solicitado.

```
worker.doForever (async function (id) {
  let data = [id, id, id]
  await write.send ({ data })
})
```
<div class="listing">Modelo de Canales. Agente Escritor.</div>

Por su parte, el cuerpo algorítmico de los agentes escritores que se muestra en el listado 3 resulta aún si cabe más sencillo. En este caso, el agente genera incesantemente tripletas de datos y las envía al coordinador para realizar la actividad preceptiva de escritura sobre el buffer de transferencia de datos.

## Soporte y Desarrollo

El modelo de canales que hemos presentado a lo largo de este texto requiere proporcionar soluciones de soporte para las metáforas sistémicas de canal y puerto. Pese a la demanda que se hace en la literatura de un entorno de ejecución distribuido, el texto de toda esta serie se enmarca dentro del ámbito de la tecnología de Web Workers, que es una arquitectura de carácter centralizada.  Por lo tanto, a lo largo de las próximas líneas nos centraremos en proporcionar los artefactos y primitivas necesarias para que operen dentro de este contexto. 

En el listado 4 puede apreciarse el código correspondiente al concepto de canal de mensajería unidireccional cuya pragmática de uso se explicó en la sección anterior. Un canal ofrece, en esencia, sendas primitivas send y receive para el envió y la recepción respectiva de mensajes desde un agente origen a otro destino. Mientras que la operación de envío se considera instantánea y no bloqueante, la operación de recepción se considera bloqueante a la espera de que llegue un próximo mensaje que procesar.

```
function Channel () {
  let messages = []
  let waiting  = Lock (Lock.CLOSED)

  async function send (message) {
    messages = [...messages, message]
    await waiting.signal ()
  }

  async function receive () {
    await waiting.wait ()
    let [first, ...next] = messages
    messages = next
    if (messages.length > 0) await waiting.signal ()
    return first
  }

  return {
    send,
    receive
  }
}

export default Channel
```
<div class="listing">Modelo de Canales. Abstracción de Canal.</div>

Para la implementación del canal se hace uso de una cola de mensajes como estado interno y de un cerrojo para controlar la consumición de mensajes por parte de los agentes en operación de recepción. Cuando se invoca una operación de envío, el nuevo mensaje se añade a la cola y se manda una señalización al cerrojo para que el primer agente a la espera pase a procesar dicho mensaje.

Cuando se lleva a cabo una función de recepción entonces el agente invocante queda bloqueado en la cola de espera asociada al cerrojo a menos que éste se encuentre abierto, en cuyo caso se le concede caso. Tras esto, se extrae de la cola el mensaje en cabeza y se entrega como retorno no sin antes hacer una señalización sobre el cerrojo sólo si hay más mensajes por procesar, para que el siguiente agente a la espera pueda proceder. 

Con respecto a la construcción del puerto, la parte de fácil comprensión es la dedicada a dar soporte al modelo fluido de inyección de reglas. En esencia esta abstracción proporciona los métodos miembro when, and y then para configurar por fases una regla que se incluye en el estado interno como un objeto con campos característicos homónimos. Es si se quiere una aplicación canónica del patrón builder propio de la orientación a objetos. Lo que se obtiene como resultado es un array de reglas que expresa la lógica de escucha que debe realizar el puerto por cada canal.

```
function Port () {
  let rules = []
  let rule

  function when (channel) {
    rule = { channel }
    return this
  }

  function and (check) {
    rule = { ...rule, check }
    return this
  }

  function then (task) {
    rule = { ...rule, task }
    rule.check = rule.check || TRUE
    rules = [...rules, rule]
    return this
  }

  function end () {
    async function receive () {
      let promises = []
      let tasks    = []
      let found    = false
      for (let idx in rules) {
        let promise = new Promise (async function (ok, ko) {
          promises[idx] = { ok, ko }
          let rule    = rules[idx]
          let channel = rule.channel
          let message = await get (channel)
          let guard   = await rule.check (message)
          if (!found && guard) {
            found = true
            for (let idy in promises) {
               (idy == idx) && promises[idy].ok ()
              !(idy == idx) && promises[idy].ko ()
            }
            await rule.task (message)
            await channel.receive ()
          }
        }).catch (KILL)
        tasks.push (promise)
      }
      return Promise.race (tasks)
    }
    return { receive }
  }

  async function receive () {
    let select = end ()
    await select.receive ()
  }

  return {
    when,
    and,
    then,
    end,
    receive
  }

}

export default Port
```
<div class="listing">Modelo de Canales. Abstracción de Puerto.</div>

Lo que resulta considerablemente más prolijo, aunque no por ello más complicado, es la implementación del método de escucha activa receive. Como sabemos este método debe mantener una escucha activa a la espera de que llegue un primer mensaje por alguno de sus canales previamente registrados en las reglas anteriores. En esencia, hemos usado un bucle para crear una colección de promesas sobre cada una de las reglas de escucha definidas. Una vez obtenida esta colección ponemos las promesas a competir mediante la primitiva asíncrona race ya que nos interesa atender solamente aquella que se resuelve en primer lugar, ya que corresponderá con el primer mensaje en entrar.

Una vez que el sistema selecciona una promesa ésta debe ser evaluada para lo cual se extrae la condición de guarda y se invoca para comprobar su resultado. Si éste es satisfactorio, entonces se procede a anular el resto de promesas en competición paraque no causen efecto. Para ello recorremos cada promesa y resolvemos con el manejador de éxito ok, la promesa del mensaje entrante y para el resto ejecutamos el manejador de fallo, ko. Sencillo pero prolijo.

## Conclusiones

A lo largo del último artículo de esta serie dedicada al soporte de ejecución concurrente hemos presentado el modelo de canales. El factor diferencial con respecto a las aproximaciones anteriores consistió en que, en este caso, la ejecución se soporta sobre una arquitectura de mensajería en vez de una basada en espacios compartidos de datos. Este hecho fue un elemento de valor para poder posicionar el desarrollo de actividades concurrentes en el marco de sistemas distribuidos cosa que los modelos anteriores, por su naturaleza centralizada, no permitían.

Precisamente para dar soporte a esta idea se trabajó con las metáforas sistémicas de canal y puerto de escucha. Mientras que un canal es un artefacto de comunicación basada en el intercambio unidireccional de mensajes con primitivas send y receive, un puerto es un constructo que permite a un agente mantener una escucha activa y simultanea de mensajes que lleguen indistintamente por diversos canales de entrada.

En el marco de nuestro problema de referencia, la estrategia de solución habitual ha sido extendida con un nuevo agente coordinador que centraliza toda la operativa de acceso sobre el buffer de transferencia de datos. De esta manera, los escritores utilizan un canal para comunicar al coordinador sus operaciones de escritura mientras que los lectores hacen lo propio por un canal de demanda de lectura y quedan bloqueados después en otro canal de recepción propio a la espera de los resultados.

La propuesta de solución que hemos desarrollado a lo largo de este texto resulta pretendidamente simple. En sentido estricto, responde a la potencialidad concurrente que demanda el problema planteado de lectores y escritores. Pero si se flexibiliza el esquema para permitir mayores cotas de ejecución concurrente entonces esta aproximación resulta insuficiente. En estos casos, aplicar una propuesta más flexible similar a la que se hizo en el artículo anterior de monitores pudiera ser una solución más satisfactoria si bien, claro está, necesita ser expresada en términos de la arquitectura de mensajería definida. 

Con respecto al soporte descrito, hay que hacer notar que, como ya comentamos con anterioridad este desarrollo a no está pensado para operar en un contexto de computación distribuida aun cuando ese sea el motivacional de este modelo de concurrencia. Nuestro propósito en este sentido queda circunscrito a un ejercicio ilustrativo que pretende mostrar como articular modelos de soporte a la programación concurrente sobre JavaScript haciendo uso del marco tecnológico de Web Workers.

Y con esto llegamos al final de esta serie. Las lecciones aprendidas es que el modelo de monitores para el caso de las arquitecturas basadas en espacio de datos compartidos y el modelo de canales para operar sobre arquitecturas de mensajería resultan dos soluciones canónicas que se han erigido como referentes dentro de la literatura académica. Bien es cierto que de forma combinada se han propuesto extensiones a estas ideas como el uso de buzones o el de procedimientos remotos, pero ninguna de estas aproximaciones reviste cuerpo de diferenciación relevante con respecto al marco teórico del desarrollo concurrente.
