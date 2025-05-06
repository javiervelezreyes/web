---
title  : Conformidad Total & Parcial
slug   : conformidad-total-y-parcial
author : Javier Vélez
date   : Diciembre 2023
---

## Introducción

En un artículo anterior, hablábamos de los dos tipos de conformidad que se aplican dentro de la orientación a objetos y los poníamos en contraste para explicar las diferencias de comportamiento que se dan durante la ejecución entre los modelos estático y dinámico.

En el modelo estático, se utiliza conformidad semántica a la hora de articular la participación de objetos dentro de una colaboración. Las clases, de manera principal, y los mecanismos de la herencia, de manera secundaria, confieren a cada objeto una tipología especifica y ello no sólo les habilita para operar en determinadas colaboraciones, sino que les confiere un rol de responsabilidad bien definido dentro de las mismas.

En el modelo dinámico, por el contrario, se usa una aproximación basada en conformidad sintáctica. Aquí los objetos son concebidos como meros contendedores de agregación que agrupan capacidades bajo a aplicación de criterios de cohesión interna. No existe una caracterización semántica de los mismos en base a un sistema de tipos, sino que la participación queda autorregulada a través de la imposición sintáctica de que cada objeto debe, por construcción, incluir los métodos miembro demandados en la colaboración.

Pero, si la naturaleza semántica o sintáctica de la conformidad es un elemento característico, no lo es menos el grado de compleción que se da dentro de este mismo atributo. En este sentido, es posible distinguir alternativamente entre conformidad total o parcial y, dado que existe cierto emparejamiento conceptual entre ambos pares de conceptos, lo habitual, dentro de la literatura, es hablar de conformidad semántica total o conformidad sintáctica parcial. 

A lo largo de este artículo, centraremos nuestra atención en describir las diferencias existentes entre la conformidad total, propia de los modelos estáticos de la orientación a objetos y la conformidad parcial, típica y característica de las aproximaciones dinámicas.

## Sistemas de Conformidad Total

La conformidad semántica, que ya describimos en un artículo anterior, es una aproximación característica de los modelos estáticos de la orientación a objetos y, como ya explicamos, está estrechamente relacionada con el uso de clases y sistemas de tipos fuertes. En efecto, durante las fases iniciales de diseño, el uso de clases y los mecanismos asociados de herencia, confiere a cada objeto una tipología característica. 

El carácter coercitivo de este tipo de lenguaje permite expresar cada colaboración entre objetos precisamente en términos de este sistema de tipos y este hecho no solamente legitima a cada objeto a entrar a participar en determinadas colaboraciones sino a hacerlo encarnando determino rol proyectivo dentro de las mismas. Se dice que este tipo de aproximación tiene una naturaleza semántica porque los tipos se utilizan como un artificio conceptual para representar, de manera simbólica, las restricciones estructurales y funcionales que debe exigirse a cada objeto en virtud del rol que desempeña en la colaboración.

En los ejemplos que venimos utilizando a lo largo de esta serie para ilustrar todos estos conceptos, explicamos que los objetos construidos a través del uso de las clases Coche, Camión y Moto solamente pueden entrar a participar en la colaboración del taller en base a su tipificación como Vehículos. En efecto, dado que coches, camiones y motos provienen de clases de una misma extirpe polimórfica y que ésta queda definida a través de la clase base Vehículo, todos los objetos de la misma disponen de este tipo requerido. En este contexto, la abstracción Vehículo es un artefacto arquitectónico que sirve para representar la restricción estructural que se impone sobre los objetos participantes en la colaboración. A saber, que dispongan de métodos miembro de arranque y parada. 

Todo esto es lo que ya conocíamos bajo el nombre de conformidad semántica. Pero ¿por qué dicha conformidad es además total y en qué sentido debe considerarse de esa manera? Pues bien, en la medida que la conformidad semántica queda asociada a perfiles estructurales característicos, ésta tiene una connotación de cobertura total vinculada al significado que se le confiere a cada abstracción en virtud del tipo al que pertenece. Expliquemos este trabalenguas a través de un nuevo ejemplo.

```
class Vehicle {
  start () {}
  stop  () {}
}
class Car   extends Vehicle { }
class Bike  extends Vehicle { }
class Truck extends Vehicle { }

let vehicles = [...]
class Workshop {
  execute (vehicles: Array<Vehicle>) {
    for (let vehicle: Vehicle of Vehicles) {
      vehicle.start ()
    }
  }
}
```
<div class="listing">Conformidad Total.</div>

Imaginemos ahora que sobre nuestro ejemplo recurrente hacemos una simplificación en el taller de manera que el método de ejecución se limita a meramente a ejecutar el método de arranque para cada uno de los vehículos implicados. En sentido estricto, esta nueva colaboración sólo demandaría que la definición semántica del tipo Vehículo declarara el método de arranque ya que el de parada nunca se va a ejecutar. Sin embargo, esto puede no ser así en el caso de otras colaboraciones diferentes dentro de la arquitectura donde participan vehículos. Por lo tanto, pese a que en este caso se hace una consumición parcial de las capacidades de un vehículo, este hecho no debe condicionar su caracterización semántica. Un vehículo es un vehículo y queda formal y conceptualmente definido por la existencia de métodos de arranque y parada. Y tal cosa no debe ser alterada por pragmáticas de uso particular.

A esta idea – la de supeditar la conceptualización semántica completa de cada entidad del dominio por encima de sus necesidades fortuitas y circunstanciales de uso – se le conoce como conformidad total y es una cualidad siempre emparejada a los modelos semánticos. En el listado 1, se observa que, si bien hemos alterado el algoritmo de colaboración dentro de la iteración llevada a cabo por el taller, esto no ha condicionado la caracterización semántica de la abstracción. Esta es una realidad cuya existencia y definición formal trasciende y es superior a su uso.

## Sistemas de Conformidad Parcial

De manera paralela, en el mismo artículo de la serie explicamos el significado práctico de la conformidad sintáctica. En el marco de los modelos dinámicos, los objetos son artefactos que operan como contenedores que agregan capacidades miembros por criterios de cohesión. No existe una caracterización semántica de los objetos en base a un sistema de tipos fuerte y tampoco se pretende organizar a estos en estirpes jerárquicas en base a su comportamiento y estructura interna. En este modelo, un objeto resulta completamente indistinguible de los demás una vez que ha atravesado su proceso de construcción.

Sobre estos mimbres, la modalidad de conformidad empleada dentro de este tipo de arquitecturas es plenamente sintáctica. A cada objeto que entra a participar en el marco de una colaboración se le asume por construcción que está suficientemente preparado para que responda adecuadamente a la demanda capacitiva que se le hace dentro de la misma.

En nuestro ejemplo sobre Vehículos, Coches, Camiones y Motos son artefactos preparados para entrar a formar parte de la colaboración definida por el taller. Sin embargo, en este caso la diferencia estriba en que los objetos no son la materialización de una realidad semántica establecida en actividades de diseño. En su lugar, de una manera mucho más pragmática, cada objeto es el resultado de una preparación capacitiva dirigida a hacer viable la participación en cada colaboración.

```
function Car   { return { start } }
function Bike  { return { start } }
function Truck { return { start } }

let vehicles = [...]
function  Workshop () {
  execute (vehicles) {
    for (let vehicle of Vehicles) {
      vehicle.start ()
    }
  }
}
```
<div class="listing">Conformidad Parcial.</div>

Si en línea con lo que explicábamos en la sección anterior, la colaboración del taller empieza a ser estructuralmente menos exigente, porque eliminados de la iteración la invocación al método de parada entonces podemos asumir que, incluir dicho método dentro de las abstracciones es innecesario, al menos de momento. A este tipo de enfoque, en la que los objetos se adaptan estructuralmente y bajo demanda para encajar en cada contexto arquitectónico de uso particular se le conoce con el nombre de conformidad parcial. Los sistemas de conformidad sintáctica suelen además hacer uso de una caracterización parcial así que se habla de conformidad sintáctica parcial.

## Conclusiones

A lo largo de este articulo hemos completado la definición de los dos modos de conformidad que existen en los sistemas de orientación a objetos, la conformidad semántica total utilizada por los modelos estáticos y la conformidad sintáctica parcial explotada por los modelos dinámicos como es el caso del lenguaje JavaScript entre otros.

A estas alturas del recorrido comparativo que estamos haciendo, es posible entender como estas diferencias establecen un gran punto de divergencia entre los lenguajes que abrazan una u otra forma de entender la orientación a objetos puesto que todas las actividades de definición propias de la fase de diseño y el razonamiento posterior que se realiza sobre las colaboraciones entre objetos durante el tiempo de ejecución quedan fuertemente condicionadas.

En los modelos estáticos, los procesos de diseño orientados a objetos son una actividad muy relevante que pretende hacer una modelización fidedigna del dominio con el que se está trabajando. Para los arquitectos en esta línea de pensamiento, los objetos son el eje central de la arquitectura, deben ser concebidos como entidades conceptuales que describen la realidad casi de manera ontológica y, en cualquier caso, están completamente desvinculados de toda pragmática de uso particular. Las actividades de diseño deben ser realizadas cuidadosamente porque un diseño equivocado, una mala conceptualización del dominio, puede conducir a problemas irresolubles durante el desarrollo del sistema en ejecución.

En los modelos dinámicos, por el contrario, los objetos no son elementos fijos e inamovibles que representan conceptos perfectamente ajustados por diseño a las entidades del dominio. Ni siquiera son realidades terminadas necesariamente en la fase inicial de construcción. En su lugar, se trata de elementos vehiculares que sirven de artefacto de soporte capacitivo para articular procesos de colaboración entre agentes participantes. Como tal, los objetos son dúctiles y maleables, pueden extenderse y transformarse en el tiempo, pueden evolucionar a demanda de las necesidades arquitectónicas de uso e incluso pueden revertirse sus estructuras si ello es requerido. Aquí el centro de las actividades arquitectónicas no está en el diseño de objetos sino en la creación de estrategias de transformación adaptativa.

Como se puede apreciar poco tiene que ver la orientación a objetos estática, semántica y completa, con la que es dinámica, sintáctica y parcial. Al programar en cada lenguaje deberíamos reflexionar si estamos ante el primer modelo o más bien ante el segundo. Desvelada esta reflexión, queda describir que repercusiones tienen estas diferencias en las pragmáticas de desarrollo dentro de ambos modelos y esto es algo que nos ocupará los dos últimos artículos de esta serie.
