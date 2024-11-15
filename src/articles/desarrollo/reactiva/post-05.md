---
title  : Modelo de Canales
slug   : modelo-de-canales
author : Javier Vélez
date   : Mar 2024
hidden : true
---

## Introducción

A veces, la simple introducción de un medio de comunicación entre dos partes es suficiente para establecer una solución de ejecución reactiva. En efecto, si disponemos de un lado de agentes productores de información y de otro, de agentes consumidores de la misma, podemos aticular un medio de comunicación entre ambos para que la información fluya de los primeros a los segundos.

Esta suerte de actividades pueden, en cierto sentido, ser reconocidos como escenarios de ejecución reactiva puesto que el comportamiento percibido en los agentes consumidores se ve potencialmente afectado por la transferencia de información enviada por los proveedores de acuerdo a la cadencia temporal de la comunicación.

Este tipo de situaciones dan pie a la familia de modelos de desarrollo reactivo basados en mensajería. El escenario más sencillo es aquél en el que la transferencia reactiva se realiza a través del establecimiento de un canal de comunicaciones punto a punto en el que dos tipos de agentes contrapuestos, productor y consumidor, operan de esta forma a través de operaciones de envío y recepción de mensajes. Esta idea conforma el modelo de desarrollo reactivo basado en canales.

A lo largo de este articulo abordaremos la descripción en profundidad de este modelo ilustrando primero como se da forma a un tipo específico de arquitecturas con una experiencia de desarrollo particular para posteriormente discutir un modelo de solución tentativo que permita dar soporte tecnológico a toda estas ideas. 

## El Modelo de Canales

El modelo de desarrollo reactivo basado en canales da forma a un tipo de arquitecturas en las que es posible distinguir entre dos tipos de agentes con roles contrapuestos. De un lado, se reconocen agentes productores, capaces de emitir mensajes de información bajo demanda a lo largo del tiempo. De otro, existen agentes consumidores capaces de recibir los mensajes emitidos por los consumidores en tiempo y forma y mostrar un comportamiento dependiente.

Este tipo de soluciones así planteadas cae dentro del marco de problemas de ejecución reactiva dado que el comportamiento mostrado por los agentes receptores puede interpretarse como una respuesta reactiva a cada uno de los mensajes emitidos por los proveedores.

Para habilitar las actividades de comunicación entre sendas partes de la arquitectura, es necesario proporcionar una solución de mensajería. La naturaleza de dicha solución y, su semántica operativa, determina el comportamiento sistemico global a nivel arquitectónico. En particular, el modelo reactivo que discutiremos a lo largo de este texto utiliza una metafora de canal sobre el que dos tipos de agentes, productor y consumidor, pueden realizar operaciones de envío y recepción de mensajes.

A modo de ejemplo, es posible ilustrar este tipo de solución en un código como el que se presenta en el listado 1 adjunto. En él, un conjunto de agentes productores de información emite mensajes de información bien formados para que sean recibidos por los agentes consumidores al otro lado del canal. Como puede apreciarse, para ello se hace uso del método del canal send, que tiene una semántica operativa no bloqueante lo que implica que los agentes productores cuando envían un mensaje no se quedan bloqueados a la espera de que algún agente consumidor lo reciba y procese.

```
import Channel  from '...'
import Producer from '...'

let PX = Producer ()
let PY = Producer ()

let CP = Channel ()
let CQ = Channel ()

while (END) {
  let MX = await PX.create ()
  let MY = await PY.create ()

  CP.send (MX)
  CQ.send (MY)
}
```
<div class="listing">Modelo de Canales. Agentes Productores.</div>

En el otro lado del canal se encuentran los agentes consumidores que, como ya hemos explicado, son aquellos elementos de la arquitectura responsables de mostrar una respuesta reactiva definida ante la llegada de cada nuevo mensaje. Para poder recibirlos, los agentes consumidores hacen uso del método receive del canal. A diferencia del caso anterior, este método sí que tiene una semántica bloqueante. Es decir, los agentes de este lado quedan bloqueados en el método de recepción del canal a la espera de la llegada del próximo mensaje. Esta característica es la que, precisamente, confiere a este tipo de soluciones un corte reactivo.

En el listado 2 puede verse un ejemplo de código de cómo diferentes agentes hacen uso de diversos canales para atender la secuencia de mensajes que proviene del lado de los consumidores que se describió en el código del listado anterior. La descripción conjunta de ambos códigos muestra cómo en este tipo de aproximaciones se mantiene un claro desacoplamiento espacial y volumétrico entre las partes implicadas. En efecto, durante la ejecución no son conocidos ni el conjunto de agentes implicados en la comunicación ni tampoco la cardinalidad de los mismos. 

```
import Channel  from '...'
import Consumer from '...'

let CX = Consumer ()
let CY = Consumer ()

let CP = Channel ()
let CQ = Channel ()

while (END) {
  let MX = await CP.receive ()
  let MY = await CQ.receive ()

  CX.process (MX)
  CY.process (MY)
}
```
<div class="listing">Modelo de Canales. Agentes Consumidores.</div>

Todo lo anterior conduce a pensar que el modelo de desarrollo reactivo basado en canales se encuentra centrado en la tipología de los mensajes que circulan por cada canal. Y en efecto es así. Aunque pueden usarse para arquitecturas sencillas canales de comunicación bilateral entre dos agentes como medio general de coordinación reactiva, lo habitual es que cada canal se use para transferir un cierto tipo de mensajes específicos en el marco de la solución y de esta forma éste reúna de ambos lados a interesados en los mensajes que circulan por el mismo. 

Sin embargo, toda esta asociación es meramente pragmática. A diferencia de lo que ocurre en otro tipo de arquitecturas, donde se reconoce una tipificación explícita de las unidades de comunicación y notificación, dentro de este modelo, los mensajes no presentan tipo, más allá de que ello se imponga por diseño en el marco de cada solución particular. Asimismo, tampoco es posible articular estrategias de recepción de mensajes basadas en el filtrado dado que todo mensaje que es consumido desde el canal por un agente no puede retornarse a este. De hecho esta es una característica diferncial del modelo de canales con el de buzones que presentaremos en un un artículo subsiguiente. 

Pese a la multiplicidad en número de canales que han presentado los ejemplos de código de los listados anteriores, lo cierto es que toda esta suerte de soluciones se torna realmente atractiva cuando, a través de un uso intencional conjugado de agentes y canales especializados se desarrollan patrones de costrucción compositiva para dar respuesta a problemas de mensajería de aparición recurrente dentro de la literatura. De manera sumarial, y sin el ánimo de ser exhaustivos, es posible reconocer las siguientes categorías de patrones.

- **Patrones de Composición.**
- **Patrones de Enrutamiento.**
- **Patrones de Extensión.**
- **Patrones de Adaptación.**




la arquitectura se complica en la multiplicidad
es posible hacer composicion de canales: patrones de camel
estos patrones se implentan sobre la  base de agentes y canales, no obstante cuando todos ellos se delegan en la infraestructura de canal se transita hacia arquitecturas de midleware de mensajeria que estan fuera de alcance y que si acaso ya describiremos en la revista de arquitectura



## Soporte & Desarrollo



## Conclusiones

Una de las diferencias...: autonomia, agentes activos,

aqui se habla mas de comandos y reacciones y no tanto de observación de estado y comporamiento. Si los modelos anteriores eran claramente mas declarativos y funcionales estos otros inducen arquitectura de corte mas claramente imperativo basado en comandos y reacciones

parecido a concurrente pero no igual
suatrato similiar
naturaleza autonomo: workers

