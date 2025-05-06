---
title  : Contratos & Protocolos
slug   : contratos-y-protocolos
author : Javier Vélez
date   : Diciembre 2023
---

## Introducción

Llegados a este punto, ya hemos descubierto gran parte de las diferencias que existen entre los modelos estático y dinámico de la orientación objetos. Mientras que los primeros operan con una estrategia de desarrollo basada en conformidad semántica total los segundos lo hacen de acuerdo una aproximación basada en conformidad sintáctica parcial.

Y este hecho, más allá de caracterizar la manera en que los objetos entran a participar en espacios de colaboración durante el tiempo de ejecución, induce importantes divergencias en la manera en que son conceptualizadas las actividades de desarrollo. Para los modelos estáticos, las fases de diseño preliminar son puntos fijos de paso en un esfuerzo por encontrar las abstracciones semánticas adecuadas que caracterizan las realidades presentes dentro del dominio. Para los modelos dinámicos, sin embargo, los objetos son meros contenedores de agregación que reúnen conjuntos de capacidades por criterios de cohesión interna y éstos pueden ir transformándose a lo largo del tiempo bajo demanda del cambio de las condiciones ambientales.

Estas diferencias encontradas se materializan a través de la forma en la que se aplican los procesos de razonamiento durante las actividades de diseño de las colaboraciones entre objetos. En los modelos estáticos el diseño se encuentra dirigido por contratos mientras que en los modelos dinámicos dicho diseño está dirigido por protocolos. Describir las diferencias entre ambos tipos de aproximaciones será foco de atención en este artículo.

A lo largo de estas líneas descubriremos que, si bien el diseño de arquitecturas siguiendo una u otra estrategia es, a la postre, una decisión en manos de los arquitectos y desarrolladores, siempre y cuando se opere con lenguajes dinámicos que ofrecen ambas alternativas, no es menos cierto que el propio lenguaje adquiere un posicionamiento intencional de uso y operación a este respecto.

## Sistemas Dirigidos por Contratos

En los lenguajes propios del modelo estático de orientación a objetos, la operativa se basa en técnicas de conformidad semántica total. El uso de clases como elemento vehicular de construcción permite inducir una tipología característica a cada objeto dentro del sistema. A partir de este mecanismo, los objetos quedan clasificados en estirpes polimórficas y, como hemos explicado en anteriores artículos, ello les habilita para participar en diferentes espacios de colaboración.

Esto es así, precisamente, porque los tipos se utilizan, durante las actividades de diseño, para definir los roles de participación dentro de las colaboraciones. Dentro de este relato, un rol queda caracterizado por la colección de métodos y propiedades que debe exponer para operar con la vecindad arquitectónica en el marco de dicha colaboración. Es decir, en cada colaboración, cada tipo sirve para identificar un rol que representa, de manera semántica y abstracta, una estructura morfológica específicamente demandada para poder operar dentro de la misma.
Para reflexionar sobre este tipo de actividades de diseño, a menudo se usa el concepto de contrato. Se dice, que cada objeto dentro de una colaboración, en virtud del rol que se encuentra representando, debe o está obligado a cumplir con cierto contrato capacitivo ya que, de otra forma, la colaboración no se llevará adecuadamente a término en tiempo de ejecución. Los sistemas de tipos fuertes propios de este tipo de lenguajes se encargan de realizar toda suerte de comprobaciones de esta naturaleza durante las actividades de desarrollo antes de alcanzar el tiempo de ejecución. 

Así que los tipos, dentro de este relato, juegan un papel múltiple. De un lado, durante las actividades de diseño, sirven para caracterizar las realidades semánticas de los objetos mediante la definición del uso de clases potencialmente organizadas en jerarquías de herencia. Por otro, sirven para definir los roles de participación que jugara cada objeto dentro de una colaboración. Y finalmente, servirán de garante para asegurar que la colaboración así definida es, en efecto, garantista para su despliegue en tiempo de ejecución.

Como ya explicamos en artículos anteriores, el segundo uso de los tipos, en línea con lo que acabamos de explicar en el párrafo anterior, tiene una naturaleza proyectiva. En efecto, los objetos son, en la práctica, realidades poliédricas formadas por múltiples tipos de manera simultánea. Al menos adquieren un tipo por cada clase dentro de la jerarquía de herencia y por cada interfaz realizada si es que se hace uso de interfaces dentro del lenguaje. Pero cuando describimos una colaboración, el tipo utilizado para caracterizar cada rol, esta expresando la demanda proyectiva de que, de todos los tipos del objeto participante solo se requerirá, durante la colaboración, que se cumpla con el rol de dicho tipo, y con el contrato capacitivo asociado al mismo, como venimos explicando. 

```
interface Startable { start }
interface Stoppable { stop  }
class Vehicle  implements Startable, Stoppable {
  start () {}
  stop  () {}
}
class Car   extends Vehicle { ... }
class Bike  extends Vehicle { ... }
class Truck extends Vehicle { ... }

let vehicles = [...]
class Workshop {
  execute (vehicles: Array<Startable>) {
    for (let vehicle: Startable of Vehicles) {
      vehicle.start ()
    }
  }
}
```
<div class="listing">Diseño Dirigido por Contratos.</div>

Y es que, como también ya explicamos, la caracterización contractual que se hace de las entidades de dominio como realidades semánticas está por encima de cualquier pragmática de uso particular que se haga en el marco de toda colaboración. Para explicar como funciona el diseño dirigido por contratos podemos retomar nuestro ejemplo sobre el taller de reparación y adaptarlo para caracterizar el contrato de Vehículo como la síntesis aditiva de dos perfiles contractuales ortogonales, Arrancable y Parable. Esta definición puede llevarse a cabo a través del uso de interfaces para alcanzar una caracterización de las abstracciones Coche, Camión y Moto, en nada diferentes a lo que hemos visto hasta el momento. Sin embargo, a la hora de definir la colaboración dentro del método ejecución del taller no demandamos que las abstracciones cumplan con el rol de Vehículo, dado que sólo vamos a realizar invocaciones sobre el método de arranque, solo demandamos que, en el espacio de esa colaboración, los objetos cumplan con el contrato de Arrancable.

Que la simplicidad de este ejemplo, sin embargo, no nos lleve a confusión. En efecto, en este escenario Arrancable y Parable son dos perfiles contractuales de uso potencial para caracterizar colaboraciones entre objetos. Pero la abstracción Vehículo – definida o no a través del uso de interfaces – también es un perfil contractual igualmente válido. Si se quiere, doblemente demandante ya que en cualquier colaboración exige de la presencia de los métodos de arranque y parada. Sin embargo, el ajuste proyectivo, tal y como se ha mostrado en el ejemplo anterior, es siempre considerado una buena práctica ya que, dentro del espacio de cada colaboración, los objetos de la vecindad arquitectónica sólo deben estar legitimados a consumir las capacidades previstas para ello durante las actividades de diseño. A esta práctica corresponde el principio de segregación de interfaces propio de la orientación a objetos estática.

## Sistemas Dirigidos por Protocolos

Los lenguajes que caen dentro del modelo dinámico de la orientación objetos están caracterizados por una operativa basada en el uso de conformidad sintáctica parcial. En este tipo de aproximaciones, los objetos se conceptualizan como meros contenedores que agregan conjuntos de capacidades por criterios de cohesión interna. No existe un sistema de tipos fuerte capaz de hacer una diferenciación semántica de los mismos una vez han abandonado los procesos de construcción. Y, de hecho, su estructura morfológica puede verse alterada a lo largo del tiempo por conveniencia para adaptarse a las condiciones ambientales de ejecución.

De una manera mucho más pragmática, cuando una colección de objetos entra a participar en el marco de una colaboración, se asume que cada uno de ellos dispondrá por construcción de las capacidades necesarias para operar dentro de la misma. Dado que este tipo de arquitecturas tiene una naturaleza plástica y adaptativa, si esta asunción no se cumple siempre es posible aplicar técnicas extensivas que conviertan a los objetos en realidades operantes en cada contexto arquitectónico de uso.

Este hecho conduce a una fuerte divergencia en la manera en la que se conceptualizan este tipo de arquitecturas ya que el foco de atención es trasladado desde las actividades de diseño semántico inicial, como era preceptivo dentro de los modelos estáticos, hacia un locus exterior donde las tensiones de ejecución se concentran en la realización sistemática y reversible de operaciones de transformación adaptativa sobre los objetos implicados. 

La realización de actividades de diseño dirigidas por contrato es una tentación constante para los desarrolladores que trabajan dentro del modelo dinámico. Sin embargo, la conformidad parcial y sintáctica que lo caracteriza le habilita para llevar a cabo procesos de razonamiento diferentes de los que se llevan a cabo en el modelo estático basados en una definición semántica, explicita y completa para diseñar el contrato al que se adscribe cada objeto participante. En su lugar, la asunción constructiva a la que antes hacíamos referencia invita a pensar no en términos de contratos regulados a través de un sistema de tipos fuerte sino más bien en base a protocolos que de manera natural y orgánica se cumplirán en el marco de la colaboración durante el tiempo de ejecución.

La constatación de esta diferencia es algo más difícil de apreciar que en los casos presentados en artículos anteriores más allá del hecho de que todos los objetos que cumplan con determinado perfil sintáctico podrán entrar a participar en un espacio de colaboración con independencia de si la semántica asociada a dichos objetos acompaña o no. Este es el motivo por el cual muchos desarrolladores tildan de peligrosos los modelos de conformidad sintáctica.

```
class Vehicles {
  *[Symbol.iterator] () {}
}
class Car   { }
class Bike  { }
class Truck { }

let vehicles = new Vehicles (...)
class Workshop {
  execute (vehicles) {
    for (let vehicle of Vehicles) {
      vehicle.start ()
    }
  }
}
```
<div class="listing">Diseño Dirigido por Protocolos.</div>

Sin embargo, lo que resulta verdaderamente atractivo de los modelos de desarrollo dirigidos por protocolos es el hecho de que el propio lenguaje los incorpora como parte de su especificación. Más allá de que se pueda utilizar una estrategia de protocolos en el marco de una determinada arquitectura, resulta llamativo poder explotar las capacidades adaptativas que ofrece el lenguaje en base a alterar la descripción semántica de sus capacidades. 

En el ejemplo adjunto podemos apreciar que hemos declarado una nueva entidad Vehículos capaz de representar la colección de objetos que entra a formar parte de la colaboración del taller. Esta abstracción implementa el protocolo Iterador que es utilizado cada vez que una instancia de esta clase se itera mediante el uso de la partícula of o a través del operador de spreading. La lógica adaptativa que obtenemos en este ejemplo es que estamos prescribiendo al lenguaje una nueva manera particular de recorrer la colección. Si por ejemplo quisiéramos dar mayor dar prioridad de tratamiento a los coches y a las motos frente a los camiones podríamos hacerlo por medio de la alteración de la lógica interna del protocolo Iterador definido en la entidad vehículos. 

En los modelos de la orientación a objetos de carácter estático basados en conformidad semántica total este tipo de aproximaciones también es viable pero no queda tan orgánicamente resuelto ya que debe llevarse a cabo por medio del uso de contratos. Ello requiere la declaración explícita de nuevas abstracciones y conduce a mayores cotas de polución arquitectónica.

## Conclusiones

A lo largo de este artículo hemos discutido las diferencias que existen entre el diseño dirigido por contratos y el dirigido por protocolos. Mientras que la primera aproximación es característica de los lenguajes basados en modelos estáticos de objetos, la segunda es propia de lenguajes que se adscriben al modelo dinámico.

En efecto, en la aproximación estática, se llevan a cabo procesos sistemáticos de tipificación para crear una caracterización semántica de los objetos que van a entrar a participar en colaboraciones desempeñando un rol característico. Dentro de este contexto, se dice que cada objeto, en virtud del rol que desempeña, se ve contractualmente forzado a exponer la morfología estructural preceptiva que le habilita para llevar a cabo la colaboración. De la comprobación de este hecho se encarga el sistema de tipos del lenguaje.

En la aproximación dinámica, por el contrario, los objetos son entendidos como meros contenedores que agregan capacidades por criterios de cohesión interna y que resultan completamente indistinguibles una vez que han finalizado los procesos de construcción. De hecho, su estructura anatómica puede verse alterada a lo largo del tiempo para adaptarse convenientemente a las condiciones ambientales de uso y poder así entrar a participar en sucesivas colaboraciones. Dentro de este relato no se habla tanto de restricciones contractuales impuestas por un sistema de tipos sino de asunciones protocolarias garantizadas por construcción.

El uso de aproximaciones basadas en contratos o protocolos es, a la postre, una decisión de diseño si se contempla desde la perspectiva de la construcción arquitectónica de soluciones particulares. Sin embargo, lo que resulta especialmente atractivo es que los lenguajes de ambos modelos de la orientación objetos se han adscrito a sendos tipos de aproximaciones dejando un sesgo intencional acerca de cómo se pretende que se les consuma. Así, por ejemplo, Java, que puede ser identificado como el lenguaje abanderado de los modelos estáticos de la orientación objetos, hace un uso exhaustivo de diseño dirigido por contratos en la mayoría de sus diseños. Por el contrario, JavaScript, tal y como hemos ilustrado a lo largo de este texto, basa gran parte de sus comportamientos nativos en la definición de protocolos. Esta es una característica más, que estresa la importancia que tiene en los procesos de aprendizaje de nuevos lenguajes entender la pragmática de uso de los mismos más allá de mimbres teóricos y académicos. Esta es una característica más que viene estresar la importancia del <q>Efecto Ornitorrinco</q>.

