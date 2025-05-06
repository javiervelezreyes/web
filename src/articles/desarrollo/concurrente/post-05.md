---
title  : Modelo de Monitores
slug   : modelo-de-monitores
author : Javier Vélez
date   : Enero 2024
---

## Introducción

El modelo de regiones criticas condicionales que discutimos ampliamente en el artículo anterior supuso un claro avance en el camino hacia la identificación de metáforas sistémicas más abstractas y potentes que permitieran llevar a cabo un adecuado control de la concurrencia.

En efecto, cada región crítica proporcionaba inyectores explícitos para especificar la lógica de coordinación y de operación. La primera, resolvería las condiciones que deben darse para conceder acceso a la sección critica. La segunda, incluiría la algoritmia específica que debe ser ejecutada una vez que el agente a alcanzado dicha sección. Y todo ello se conseguiría elegantemente por medio de la ocultación de la complejidad estructural subyacente y la división de competencias.

Con este modelo, la arquitectura de bloqueos, que en las aproximaciones anteriores se exponía visiblemente de manera explícita en el código de los agentes, quedaba completamente oculta. Y sin embargo, este hecho conducía a una pérdida intrínseca de la flexibilidad expresiva ya que muchas de las políticas de desbloqueo descritas como patrones propios dentro de la literatura concurrente no podían articularse por una falta de acceso directo a esta arquitectura.

Las lecciones aprendidas en todo este trayecto evolutivo es que si bien procede perseguir la identificación de modelos de mayor abstracción y separación de competencias que mantengan diferenciada la lógica de coordinación y operación, ello no debe ser a expensas de la pérdida de control sobre el flujo de ejecución concurrente. Debemos encontrar nuevos modelos que ofrezcan capacidades de encapsulación toda vez que se puedan incluir elementos de reflexión de la coordinación para ser expresados cómoda y elegantemente de manera explícita sobre la solución. Este es el propósito del modelo de monitores que presentamos a lo largo de este artículo.

## El Modelo de Monitores

Si algo nos ha enseñado el recorrido que hemos hecho a lo largo de esta serie es que en las arquitecturas de desarrollo concurrente basadas en el acceso a recursos compartidos tanto la lógica de coordinación que regula el flujo de ejecución de los agentes, como la propia de operación que caracteriza la actividad algorítmica de cada uno de ellos se expresa en términos de elementos compartidos.

Si en efecto, los problemas de esta naturaleza se basan en un acceso compartido a recursos, tendría mucho más sentido que interpretaramos esos recursos como verdaderas abstracciones de datos que incorporasen su propia lógica de protección de acceso de acuerdo a las necesidades particulares del problema. Esta es una aproximación claramente divergente de las propuestas que se hicieron desde los modelos anteriores. La lógica de coordinación, en lugar de encontrarse distribuída entre el cuerpo algorítmico de cada tipo de agente como veníamos haciendo hasta ahora, aquí se centraliza en las operaciones de acceso definidas sobre la abstracción de datos compartida.

En el marco de nuestro problema de referencia, en cada uno de los modelos predecesores, de una u otra forma la lógica que coordinaba el acceso al recurso compartido se expresaba por medio de protocolos mediados por el uso de artefactos de control. Unas veces cerrojos, otras, semáforos y en las soluciones más canónicas regiones de acceso garantista en exclusión mutua total. Sin embargo, las abstracciones compartidas permanecían indiferentes al problema de acceso. Un buffer de transferencia de datos era una abstracción canónica que poco sabía de las condiciones ambientales que debían garantizarse para invocar sus operaciones. Y la abstracción como tal se limitaba a proporcionar la semántica operacional de transferencia basada en el uso de métodos de lectura y escritura.

En sentido estricto, esta aproximación no es equivocada. De hecho, me atrevería a decir que corresponde con los cánones de los principios fundacionales de la ingeniería del software si lo que se persigue es la reutilización del buffer en distintos contextos arquitectónicos de uso. Sin embargo, es posible hacer una inversión de control y pensar que en realidad, el propósito de la centralización en el espacio compartido no es concentrar la abstracción de datos, que también, sino adicionalmente la reglamentación de acceso. En nuestro ejemplo canónico esto significa que sendas operaciones, lectura y escritura, puedan operarse garantistamente en exclusión mutua total. Pues justo éste, es el propósito de un monitor.

El modelo de monitores presenta la metáfora sistémica de monitor como un artefacto que permite definir abstracciones de datos miméticamente a como se haría de forma convencional, pero ofreciendo, de manera automática y transparente, una semántica de cierre en exclusión mutua total sobre el conjunto de sus operaciones. Esto es algo similar a lo que perseguía el modelo de regiones críticas, pero mientras que éstas miraban a cerrar la semántica de forma distribuida sobre el cuerpo de cada tipo de agente, aquí los monitores ofrecen esta garantía de forma centralizada. Vale que de esta manera estamos perdiendo oportunidades de reutilización sobre la abstracción de datos. Pero, por el contrario, se logra una encapsulación centralizada transparente muy atractiva. 

Sin embargo, como ya hemos aprendido, disponer de un artefacto que ofrezca una semántica de acceso en exclusión mutua total a veces puede no ser suficiente y otras puede traducirse en una restricción demasiado fuerte. Estos son dos factores muy relevantes que debemos tener en cuenta para no caer en la pérdida de flexibilidad expresiva a la que antes hacíamos referencia. Discutamos cada uno de ellos de manera independiente.

Con respecto al primer factor, garantizar por construcción el acceso en exclusión mutua total sobre cada una de las operaciones del monitor puede ser un mecanismo necesario. No obstante, el desarrollo concurrente requiere, adicionalmente, de elementos de soporte para definir el control de los flujos de los distintos tipos de agentes en ejecución a lo largo del tiempo. Como sabemos, este control se expresa frecuentemente en términos de las condiciones ambientales del problema. Particularmente, del estado de las abstracciones de datos y de la carga volumétrica de agentes en ejecución. Por tanto, es necesario disponer además de elementos de regulación condicional para definir los consabidos protocolos de bloqueo y desbloqueo. Para esto, el modelo de monitores incluye como nuevo artefacto de soporte las variables de condición cuyo uso discutiremos más adelante.

En relación al segundo factor, la garantía en exclusión mutua total es claramente un aliado necesario. En nuestro ejemplo de referencia canónico de lectores y escritores, esta característica es exactamente lo que necesitamos. El monitor podría implementar directamente métodos de lectura y escritura que operan consumiendo y añadiendo ternas de datos. En efecto, ya que las transferencias por tripletas deben realizarse en exclusión mutua total, delegamos esta responsabilidad directamente sobre los métodos del monitor e implementamos allí la operativa de agentes lectores y escritores. Además, como la evaluación de la lógica de coordinación también debe realizarse en exclusión mutua total, ésta también se incluye dentro del monitor reproduciendo los protocolos de bloqueo y desbloqueo que hemos venido articulando en otros modelos.

Pero para justificar que a veces una exclusión mutua total puede resultar en un marco excesivamente coercitivo permitámonos por un momento hacer una modificación de nuestro problema de ejemplo. Imaginemos que ahora existen dos tipos de agentes lectores, aquellos que desean hacer una consumición de tripletas de valor par y aquellos otros que sólo pueden consumir tripletas de valor impar. Para aumentar el flujo concurrente, tendría sentido pasar a un buffer de dos colas independientes para datos pares e impares, de manera que sea posible dar acceso simultaneo a un lector par e impar. Para ello el monitor, extendería la semántica de la operación de lectura con un flag de tipo y evaluaría la lógica de coordinación sobre la cola de datos correspondiente. Mientras se solicite una lectura par y el buffer de pares esté lleno se concede la operación. Y de esta manera la operativa de lectores pares e impares resulta potencialmente concurrente.

Sin embargo, este nuevo escenario es un claro ejemplo donde la restricción en exclusión mutua total resulta demasiado fuerte. Aun cuando existieran datos impares par ser consumidos, las condiciones de totalidad sobre todas las operaciones del monitor impiden que, durante el tiempo que tarda un lector par en realizar su actividad, el lector impar no puede entrar a operar. Esto conduce a una secuencialidad innecesaria que introduce, como decíamos, un freno en la potencialidad concurrente.

Precisamente para dar respuesta a este tipo de problemas, en la pragmática de uso de los monitores suelen darse dos patrones de implementación característicos. Para aquellos casos en los que la lógica del problema no permita elevar la concurrencia de varios tipos de agentes operando simultáneamente, toda la lógica de éstos queda encapsulada dentro de los métodos del monitor. Para aquellos otros casos en los que, por el contrario, se permite cierta aceleración concurrente como la que acabamos de describir, lo que se hace es encapsular la lógica de coordinación en métodos canónicos que representan la entrada y salida a cada tipo de operación mientras que la operación en si misma se realiza fuera del monitor.

Pese a que nuestro problema de referencia soporta, en sentido estricto, perfectamente el modelo autocontenido que hemos descrito en primer lugar, en este texto haremos un desarrollo del segundo patrón más diferencial en aras a la ejemplificación. Es posible argumentar, en este sentido, que esta es una forma más general de desarrollo de soluciones concurrentes basadas en monitores que da cobertura a un mayor tipo de problemas porque los que se ajustan al primer patrón quedan subsumidos en los que cubre el segundo patrón que vamos a discutir a continuación.

En el listado 1 siguiente puede observarse como, con este patrón, tanto el buffer que materializa la abstracción de datos como el monitor que concentra la lógica de coordinación se incluyen en el espacio compartido. Puede apreciarse que para las operaciones convencionales de lectura y escritura ahora el monitor incluye métodos por pares begin y end. La lógica de las operaciones de arranque se limita a comprobar las condiciones de estado y de no cumplirse bloquean al agente en la variable de condición que tiene una semántica de cola muy similar a la de cerrojos. El protocolo de bloqueo se acompaña de variables de control volumétrico de agentes en espera y de variables que indican si existen agentes operando.

```
const READERS = 5
const WRITERS = 5

const MIN = 0
const MAX = 15
const ON  = true
const OFF = false

let buffer = Buffer ([])
let shared = Shared.create ({
  buffer  : buffer,
  monitor : Monitor ({
    cReaders : Condition,
    cWriters : Condition,
    reading  : OFF,
    writing  : OFF,
    nReaders : 0,
    nWriters : 0,

    async beginRead () {
      let wait = (
           this.reading
        || this.writing
        || this.nReaders
        || this.nWriters && !isFull (buffer)
        || isEmpty (buffer)
      )
      let readers = this.cReaders
      if (wait) {
        this.nReaders++
        await readers.wait ()
        this.nReaders--
      }
      this.reading = ON
    },

    async endRead () {
      let readers  = this.cReaders
      let writers  = this.cWriters
      this.reading = OFF
           if (this.nWriters)                      await writers.signal ()
      else if (this.nReaders && !isEmpty (buffer)) await readers.signal ()
      else await writers.signal ()
    },

    async beginWrite () {
      let wait = (
           this.reading
        || this.writing
        || this.nWriters
        || this.nReaders && !isEmpty (buffer)
        || isFull (buffer)
      )
      let writers = this.cWriters
      if (wait) {
        this.nWriters++
        await writers.wait ()
        this.nWriters--
      }
      this.writing = ON
    },

    async endWrite () {
      let readers  = this.cReaders
      let writers  = this.cWriters
      this.writing = OFF
      this.nWriters--
           if (this.nReaders)                     await readers.signal ()
      else if (this.nWriters && !isFull (buffer)) await writers.signal ()
      else await readers.signal ()
    }
  })
})

let RFactory = Workers (READER)
let WFactory = Workers (WRITER)

let Readers = RFactory.create (READERS)
let Writers = WFactory.create (WRITERS)

Readers.use (shared)
Writers.use (shared)

export { Readers }
export { Writers }
```
<div class="listing">Modelo de Monitores. Configuración General.</div>

En las operaciones de cierre por el contrario se implementan los protocolos que ya conocemos. En este caso, se ha articulado el protocolo de desbloqueo cruzado pero cualquier otra política podría desarrollarse en este punto de acuerdo a las necesidades del problema. Es interesante señalar aquí que, gracias al garante de exclusión mutua que ofrece el monitor, podemos despreocuparnos de la interferencia de otros agentes durante la evaluación de la lógica de coordinación, algo que en modelos anteriores hubo que resolver de manera mucho más delicada.

Sendos pares de métodos de apertura y cierre resultan muy similares para las operaciones de lectura y escritura. A diferencia de lo que pretendíamos al principio de este artículo, donde el monitor iba a ser una abstracción completa que conjugase la lógica de datos y de coordinación, lo que hemos logrado con el uso de este patrón de diseño es encapsular dentro del monitor tan solo la lógica de coordinación y permitir que sea sobre el cuerpo algorítmico de los propios agentes donde se resuelva la lógica de operación propiamente dicha. Es por esto por lo que el buffer, como abstracción de datos, se incluye en el espacio de acceso compartido.

```
worker.doForever (async function () {
  await monitor.beginRead ()
    let n = [
      await buffer.read (),
      await buffer.read (),
      await buffer.read (),
    ]
  await monitor.endRead ()
})
```
<div class="listing">Modelo de Monitores. Agentes Lectores.</div>

Si fijamos nuestra atención en el ciclo de vida de los agentes lectores que se ilustra en el listado 2, podemos apreciar como la resolución algorítmica resulta mucho más sencilla. Cada agente lector puede asumir encapsulada y correctamente implementada toda la lógica de coordinación entrante y saliente que debe acotar la operativa de lectura y simplemente se limita a invocarla.

```
worker.doForever (async function (n) {
  await monitor.beginWrite ()
    await buffer.write (n)
    await buffer.write (n)
    await buffer.write (n)
  await monitor.endWrite ()
})
```
<div class="listing">Modelo de Monitores. Agentes Escritores.</div>

De manera muy similar ocurre con la lógica de ciclo de vida que presentan los agentes escritores. Como se aprecia en el listado 3, este otro tipo de agentes concentran su atención en desarrollar la lógica de operación e invocan la lógica de coordinación encapsulada en el monitor como protocolos de bloqueo y desbloqueo que da garante a las condiciones de seguridad y vivacidad.

## Soporte & Desarrollo

Las actividades de desarrollo que es necesario llevar a cabo de manera nuclear para dar soporte al modelo de monitores consiste en la creación de abstracciones de datos para materializar los conceptos de monitor y variables de condición. En efecto, sendos artefactos se conjugan estratégicamente dentro de este tipo de soluciones para encapsular especialmente la lógica de coordinación propia de este tipo de escenarios. 

Los monitores son adaptadores realizados sobre abstracciones convencionales de datos que alteran la semántica de sus operaciones públicas para ofrecer un modelo de acceso en exclusión mutua total. El código que se presenta en el listado 4 a continuación ilustra cómo puede implementarse ese artefacto mediante el uso de cerrojos. Como puede apreciarse, todo monitor recibe como parámetro de construcción la abstracción de datos sobre la que va a operar y recorre cada una de sus claves para hacer la transformación pertinente.

Si el valor de clave es un valor convencional éste se deja sin alterar. Si se trata de una función esta se transforma para garantizar una ejecución en exclusión mutua total controlada por el cerrojo vinculado al monitor. Finalmente, si el valor asociado a la clave es una variable de tipo condición entonces se invoca el constructor de condición pasando como parámetro el monitor. Esto es algo que explicaremos más adelante. 

```
function Monitor (shared) {
  let lock = Lock (Lock.OPEN)

  function asLocked (monitor, fn) {
    return async function (...args) {
      await lock.wait ()
      let out = await fn.call (monitor, ...args)
      await lock.signal ()
      return out
    }
  }

  let monitor   = shared
  monitor[LOCK] = lock
  for (let key in shared) {
    let value = shared[key]
         if (isValue     (value)) monitor[key] = value
    else if (isCondition (value)) monitor[key] = value (monitor)
    else if (isFunction  (value)) monitor[key] = asLocked (monitor, value)
  }

  return monitor
}

export default Monitor
```
<div class="listing">Modelo de Monitores. Abstracción de Monitor.</div>

Como puede apreciarse la implementación de monitores es un ejercicio de metaprogramación sencillo que, en esencia, se centra en decorar la lógica de cada método de la abstracción entrante para que operen en un contexto de operación regulado por el uso de un cerrojo. Sobre ese cerrojo se realizan operaciones wait y signal para poder garantizar la ejecución en exclusión mutua total que buscamos.

Veamos ahora como se da soporte a las variables de condición. Como ya describimos en la sección anterior, este tipo de variables representan colas de espera condicional sobre las que se pueden articular convenientemente los protocolos de bloqueo y desbloqueo propios de la lógica de coordinación requerida por el problema. Estos elementos se encuentran declarados dentro del monitor y, como acabamos de ver, deben ser convenientemente inicializados por éste ya que requieren mantener una referencia al monitor sobre el que operan. Sin embargo, todo esto no es ningún problema dado que toda esta configuración resulta completamente transparente para el desarrollador.

```
const LOCK = Symbol.for ('Lock')

function Condition (monitor) {
  let lock    = monitor[LOCK]
  let agents  = []
  let nAgents = 0

  async function wait () {
    nAgents++
    await lock.signal ()
    return new Promise (function (agent) {
      agents = [...agents, agent]
    })
  }

  async function signal () {
    if (nAgents) {
      nAgents--
      let [agent, ...next] = agents
      agents = next
      if (agent) agent ()
    }
  }

  return {
    wait,
    signal
  }
}

export default Condition
```
<div class="listing">Modelo de Monitores. Abstracción de Condition.</div>

El código que se presenta en el listado 5 para implementar la abstracción Condition resulta un tanto curioso. El constructor recibe como parámetro el monitor vinculado y sobre él recupera el cerrojo asociado. Este cerrojo se utiliza para garantizar que las operaciones que define esta abstracción se ejecuten con el garante de exclusión mutua. Esto es algo bastante común según lo que hemos venido viendo hasta el momento. Lo que resulta curioso es que, si fijamos nuestra atención en las primitivas de esta abstracción podremos advertir que en realidad una variable de condición ofrece una semántica idéntica a la que ofrecen los cerrojos. Mismas operaciones, mismo comportamiento y mismo estado interno. La diferencia es que ahora se trata de un artefacto de control concurrente vinculado al estado del monitor.

## Conclusiones

A lo largo de este artículo hemos presentado el modelo de monitores para el control de la actividad concurrente. A partir de la materialización de dos tipos de abstracciones - los monitores y las variables de condición - hemos conseguido alcanzar un modelo de mayor madurez y flexibilidad expresiva que ofrecían las aproximaciones predecesoras.

Los monitores son capsulas adaptadoras que transforman la semántica operacional de una abstracción de datos entrante para garantizar un marco de ejecución en exclusión mutua total. Mientras que las variables de condición representan colas de espera sobre las que se puede hacer descansar los protocolos de bloqueo y desbloqueo convencionales que permiten expresar la lógica de coordinación de cada problema concurrente.

En efecto, muchas de los propósitos que perseguíamos en este recorrido han sido convenientemente satisfechos. Por un lado, hemos logrado un adecuado nivel de abstracción al conseguir encapsular en el marco del monitor toda la lógica de coordinación para que, desde la perspectiva de cada agente, se perciba como una mera invocación. Por otro, hemos logrado separar toda esta lógica de la propia de operación que es la que, de manera natural es la que debe residir en el cuerpo de cada agente.

Este nuevo enfoque reporta importantes ventajas estructurales en el marco de la solución. Desde un punto de vista del desarrollo evolutivo, si la lógica de operación debe cambiar a lo largo del tiempo mientras permanecen invariantes las condiciones de coordinación, entonces debe mirarse al cuerpo de cada tipo de agente para adaptar la solución. Si, por el contrario, la operativa de los agentes es lo que permanece invariante y es la lógica de coordinación la que debe verse alterada, entonces bastará con revisitar la implementación de los métodos en el monitor.

Si miramos hacia la reutilización un relato a favor de este modelo también aparece. Al separar lógica de operación y coordinación en perímetros del espacio de la solución diferentes, estas competencias pueden reutilizarse con relativa independencia. La lógica operativa de los agentes puede reubicarse para operar dentro de otros contextos arquitectónicos de uso en el marco de nuevos proyectos y similarmente la lógica de coordinación puede ser reutilizada en otros problemas diferentes. Materializar la lógica de coordinación como una inteligencia abstracta de reusabilidad potencial es algo que resulta muy atractivo dentro de este paradigma.

Y es que el modelo de monitores es una aproximación francamente flexible. En efecto, desde un punto de vista pragmático, hemos podido presentar diversas estrategias de implementación según las características del problema. Para los casos más elementales con una baja demanda de ejecución concurrente, aproximaciones en las que el monitor asume la responsabilidad de encapsular tanto la lógica de operación como la de coordinación son una solución viable. Para aquellas otras situaciones en las que es posible y requerido dar mayor oxígeno a la ejecución concurrente, centralizar en el monitor tan solo la lógica de coordinación por pares de acceso y permitir que la propia de operación se desarrolle libre pero controladamente en el espacio abierto del cuerpo de cada agente es otra solución igualmente atractiva. Este hecho refleja que el uso de monitores no estable un marco de desarrollo tan coercitivo e inamovible como el propio de modelos anteriores.

Todo esto conduce a concluir que el control de la concurrencia basado en el uso de monitores es la solución definitiva. Sin embargo, el hecho de que todos los modelos que hemos presentado hasta el momento estén centrados en arquitecturas de memoria compartida puede ser un freno para que se puedan desplegar en espacios distribuidos. El último modelo que discutiremos en esta serie viene a ofrecer una respuesta en esta dirección.


