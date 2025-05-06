---
title  : Modelo de Notificaciones
slug   : modelo-de-notificaciones
author : Javier Vélez
date   : Marzo 2024
---

## Introducción

Quizá el modelo de ejecución reactiva más comúnmente utilizado es aquel basado en notificaciones. En este tipo de arquitecturas un conjunto de elementos emite señales de notificación para ser atendidas por la lógica de respuesta reactiva de otras entidades distribuidas en el marco de la solución.

La característica esencial del modelo así construido es que los elementos de notificación son artefactos autónomos en el sentido de que incorporan todas las capacidades necesarias para la operación. No sólo disponen de mecanismos internos para poder articular el disparo de las notificaciones sino también proporcionan métodos para gestionar el registro de los elementos reactivos asociados a las mismas.
 
Esta última propiedad es una característica fundamental de este modelo ya que el registro de la lógica reactiva asociada a cada elemento de notificación es una actividad que debe ser realizado de manera explícita durante la fase de configuración para que el sistema comience a operar apropiadamente.

A lo largo de este articulo abordaremos en profundidad la descripción del modelo de ejecución reactiva basada en notificaciones. Primero describiremos la experiencia de desarrollo que resulta de su uso y después discutiremos los elementos de soporte que es necesario elaborar para hacer posible este tipo de soluciones.

## El Modelo de Notificaciones 

La familia de modelos de ejecución reactiva basados en seguimiento se caracteriza por el hecho de que un conjunto de entidades relevantes en el marco de la arquitectura es sometido a procesos de observación continua para detectar cambios en su estado interno o su comportamiento. Cuando este hecho se produce, la arquitectura subyacente emite señales de notificación hacia los elementos de respuesta asociados para que reaccionen adecuadamente. 

En el marco particular de este modelo, toda la infraestructura de soporte al proceso de observación y seguimiento de cambios se concentra en las propias entidades de notificación a las que daremos en llamar, precisamente por este motivo, elementos observados u observables. Este tipo de elementos también es responsable de llevar a cabo las actividades de notificación pertinentes sobre el conjunto de entidades de respuesta reactiva que por contra recibirán el nombre de elementos observadores. 

Lo que todo lo anterior significa en el plano arquitectónico es que tanto las entidades observables como los observadores deben ajustarse a determinadas restricciones contractuales. Si fijamos nuestra atención primeramente en los observables, éstos deben disponer de métodos propios que permitan el registro de observadores. Pero además, por construcción, cada elemento observable debe incluir toda la lógica interna necesaria para lanzar las notificaciones oportunas a cada uno de los observadores previamente registrados.

```
import Inspect from '...'
import FX      from 'core.x.js'
import FY      from 'core.y.js'
import OX      from 'observer.x.js'
import OY      from 'observer.y.js'

let CX = FX.create ()
let CY = FY.create ()

let IX = Inspect (CX)
let IY = Inspect (CY)

IX.bind (OX) || IX.unbind (OX)
IY.bind (OX) || IY.unbind (OY)

setTimeout (funtion () {
  << changes on CX >>
  << changes on CY >>
}, 200)
```
<div class="listing">Modelo de Notificaciones. Observables.</div>

El listado 1 muestra un ejemplo de cómo dos componentes están desarrollados con base al modelo de notificaciones. Se asume que, por construcción, sendos artefactos disponen de métodos propios, bind y unbind, para la gestión del conjunto de observadores con un interés en ser notificados cuando se producen acontecimientos relevantes sobre el estado o comportamiento de los componentes. Estos métodos se acceden por medio de un manejador de acceso Inspect. Y también por construcción se asume que, de manera interna, cada uno de estos artefactos disparará notificaciones de cambio ambiental sobre la base de cada uno de sus observadores registrados cuando ocurra en ellos algún acontecimiento relevante.

Pero ¿Qué anatomía se espera que presenten los elementos observadores? Esta pregunta da forma, a la otra parte de la restricción contractual a la que hacíamos referencia antes. Aunque lo más sencillo y habitual es que estos elementos tengan la forma de meras funciones, lo cierto es que dentro de este tipo de soluciones suele preferirse un modelo de objetos que permita encapsular un estado interno y presente un método de actualización, update. El listado 2 muestra un ejemplo de este tipo de contrato.

```
  function OX () {
    << state >>

    return {
      update (event) {
        let {type}  = event
        let {time}  = event
        let {mdata} = event
        let {agent} = event
        << actions >>
      }
    }
  }

  export default OX

```
<div class="listing">Modelo de Notificaciones. Observadores.</div>

La carga paramétrica que recibe el método de actualización naturalmente corresponderá con aquella enviada por la lógica de notificación emitida por la entidad observada. Pero aquí es donde reside la variabilidad tipológica que describíamos en el artículo de presentación de esta serie. En el caso más sencillo el parámetro tomará la forma de una mera señal o tal vez un mensaje con un esquema estructural compartido por ambas partes. Sin embargo, frecuentemente, este parámetro se materializa en forma de evento.

Este es el caso del ejemplo que mostramos en el listado anterior. Ello se reconoce por el hecho de que el evento puede descomponerse apropiadamente para extractar una marca de tiempo, un contexto de metadatos, una referencia al agente emisor y sobre todo un identificador de tipo que cualifica la categoría de acontecimiento emitido. El uso de comunicaciones basadas en eventos en las arquitecturas de notificación resulta interesante por cuanto permite a los observadores mostrar una lógica condicionada a dicho tipo e incluso hace posible filtrar las notificaciones para que los observadores solo muestren una respuesta reactiva ante notificaciones de cierto tipo.

Sobre este modelo de desarrollo también es frecuente articular arquitecturas federadas en las que un conjunto de elementos observadores y observables entra en coordinación para ofrecer un comportamiento global sistémico deseado. Tal es el caso de las soluciones basadas en técnicas de delegación en las que ciertos observadores disparan cambios sobre otros elementos observables generando así reacciones reactivas en cadena. En este contexto una comunicación basada en eventos resulta muy útil en tanto que el agente emisor incluido en el evento suele ser información muy relevante de cara al procesamiento.

## Soporte & Desarrollo

El desarrollo de un código general de soporte para el modelo de notificaciones puede resultar, en un principio, un tanto inviable, ya que el comportamiento que debe mostrar cada entidad observable debe ser incorporado durante su proceso de construcción como parte integral de su código interno. Es decir, a la postre, es responsabilidad de cada desarrollador realizar una adecuada implementación de cada observable para que muestre las capacidades de notificación necesarias.

Sin embargo, esta intución no es en realidad tan cierta. La lógica de gestión del conjunto de observadores asociados a cada observable es fácilmente expresable en términos de un módulo de reutilización potencial. En particular, se trata de construir una abstracción que mantenga un registro interno de observadores junto con sus métodos de operación bind y unbind. Estos métodos son los que más adelante expondremos a través del manejador de inspección. De momento baste saber que la abstracción de gestión de observadores está construida, tal y como se muestra en el listado 3.

```
  function Bindings () {
    let agents = new Set ()

    function fire (data) {
      for (let agent of agents) {
        agent.update (data)
      }
    }

    function bind (agent) {
      agents.set (agent)
    }

    function unbind (agent) {
      agents.delete (agent)
    }

    return {
      bind,
      unbind,
      fire
    }
  }

  export default Bindings

```
<div class="listing">Modelo de Notificaciones. Abtracción Bindings.</div>

Pero el trabajo no termina aquí. La abstracción anterior incorpora además la implementación de un método de disparo, fire, que articula notificaciones bajo demanda sobre cada uno de los observadores registrados en cada momento. Este método no está pensado para ser accedido desde el exterior sino para permitir a los desarrolladores de cada entidad observable disparar señales de notificación de manera sencilla y eficaz.

Como decíamos con anterioridad, será responsabilidad de cada desarrollador invocar en tiempo informa al método de disparo para articular los procesos pertinentes de respuesta reactivas sobre la base de observadores registrados. Sin embargo, hay otro aspecto común que podemos tener en consideración para seguir avanzando en las actividades de soporte que estamos describiendo. 

Comúnmente, las notificaciones de cambio ambiental que cada entidad observable dispara sobre el conjunto de sus observadores tiene el propósito de reflejar cambios en el estado interno de los observables. Teniendo este hecho en cuenta, es posible crear un algoritmo capaz de transformar cada observable de manera que cada variable de estado se sustituya por una propiedad equivalente con métodos de acceso y mutación get y set.

Esta transformación ofrece la oportunidad de incluir, de manera completamente transparente para el desarrollador, una llamada al método de disparo fire, cada vez que se invoca al método de mutación set de cada propiedad que, como decíamos, es lo que habitualmente se requiere. El listado 4, muestra el código que puede ser aplicado como extensión adaptativa del objeto para alcanzar el comportamiento deseado.

```
  import Inspect from '...'

  function Observable (Core) {
    let ICore = Inspect (Core)
    let ctx   = {}
    let keys  = Keys (Core)
    for (let key of keys) {
      Reflect.defineProperty (Core, key, {
        get ()  { return ctx[key] },
        set (x) { ICore.fire (ctx[key] = x) },
      })
    }
  }

  export default Observable

```
<div class="listing">Modelo de Notificaciones. Extensión Observable.</div>

Con lo expuesto hasta este punto ya tenemos todos los elementos necesarios. Disponemos de una abstracción para gestionar el conjunto de observadores asociados a cada elemento observable y también hemos creado una extensión adaptativa capaz de convertir un componente regular en una unidad observable completamente operativa y funcional.

Sin embargo, ¿cómo podemos integrar este par de elementos para que pueda ser incorporado de manera orgánica y transparente sobre objetos convencionales de JavaScript? El objetivo es que el desarrollador de arquitecturas basadas en notificación pueda centrar sus esfuerzos en crear componentes o artefactos de negocio y dejar la lógica de respuesta reactiva en manos de la infraestructura de soporte subyacente. Pues bien, la respuesta a esta preocupación se encuentra, precisamente, en el manejador de inspección.

```
  import Observable from '...'
  import Bindings   from '...'

  let BINDINGS   = Symbol.for ('Inspect')
  let OBSERVABLE = Symbol.for ('Observable')

  function Inspect (Core) {
    !Core[OBSERVABLE] && Observable (Core)
     Core[BINDINGS]   = Core[BINDINGS] || Bindings ()
     Core[OBSERVABLE] = true
     return Core[BINDINGS]
  }

  export default Inspect

```
<div class="listing">Modelo de Notificaciones. Manejador de Inspección.</div>

Para entender por qué esto es así debemos hacer una reflexión acerca de la pragmática de uso de este manejador. A lo largo de los ejemplos de este articulo hemos utilizado la función Inspect siempre que deseábamos acceder al contrato reactivo de un componente. En el listado 1 se usó la función para acceder a los métodos de registro de observadores sobre cada entidad observable y, aunque tal vez pasó desapercibido, también se hizo uso de esta función para acceder al método de disparo fire cuando implementamos la extensión adaptativa de observación en el listado 4. 

De esta forma, si el manejador de inspección es la que da siempre acceso al contrato reactivo, podemos hacer que esta función articule, de manera transparente, cualquier transformación necesaria. En concreto se trata de que si pretende accederse al contrato reactivo de una entidad observable, dicho contrato debe devolverse sin más. Si, por el contrario, el inspector se invoca sobre un elemento convencional no observable, primero se convierte en observable y después se devuelve. Esto es lo que, en esencia hace el listado 5 anterior. 

## Conclusiones

A lo largo de este articulo hemos presentado el modelo de desarrollo basado en notificaciones que es, tal vez, la aproximación más clásica y convencional de arquitectura reactiva. Esta familia de ideas se encuentra extensamente documentada dentro de la literatura, especialmente a través del patrón de diseño observador - observable propio de la orientación a objetos.

No obstante, las soluciones de respuesta reactiva basadas en notificación han sido ampliamente aplicados en la tecnología. El lector avezado puede haber descubierto clarísimos paralelismos, por ejemplo, entre este modelo y las arquitecturas reactivas basadas en eventos y escuchadores propias de la Web.

Si bien este último tipo de soluciones tiene un sabor más puramente funcional, donde los elementos observadores son meras funciones de respuesta y donde se aplican técnicas de delegación de eventos a través de técnicas de bubbling sobre la geografía del DOM tal como explicamos con anterioridad, lo cierto es que los conceptos nucleares en ambos casos son esencialmente los mismos.

Las soluciones basadas en notificación explicita resultan sencillas en su implementación y eficaces en su ejecución. No obstante, adolecen de un problema que otros modelos, que abordaremos próximamente, han tratado de solventar. Se trata del hecho de que, desde el punto de vista de la experiencia de desarrollo, el programador debe hacer un registro explícito de los observadores reactivos lo cual, aunque claramente más explícito, conduce en ocasiones a un mayor nivel de polución arquitectónica.
