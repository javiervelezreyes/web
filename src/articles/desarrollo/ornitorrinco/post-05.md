---
title  : Conformidad Semántica & Sintáctica
slug   : conformidad-semantica-y-sintactica
author : Javier Vélez
date   : Ene 2024
---

## Introducción

Hasta el momento dentro de esta serie, nos hemos centrado en la fase de diseño para hacer una descripción comparativa de las diferencias que existen entre el modelo estático y dinámico de la orientación objetos. En el modelo estático, los procesos de construcción se elaboran a través de las clases que también sirven como cualificadores semánticos de tipo. Este hecho sirve de elemento clasificador, de manera que es posible crear familias de artefactos con perfiles estructurales y funcionales característicos. Y con el uso de la herencia dichas familias se organizan en verdaderas estirpes jerárquicamente organizadas.

En los modelos dinámicos, por el contrario, los objetos se conciben como meros agregadores de capacidades organizados en torno a criterios de cohesión interna. Los procesos de construcción son llevados a cabo por funciones convencionales de manera que, una vez atravesados los mismos, los objetos resultan indistinguibles entre si a menos que se lleven a cabo actividades de introspección estructural. En este tipo de actividades, la construcción se realiza mediante el uso de otros objetos que operan como prototipos que pueden organizarse en un entramado complejo de relaciones.

En varios de los artículos anteriores, hicimos referencia, en no pocas ocasiones, a las repercusiones que todo lo anterior tiene en el tiempo de ejecución. Con este artículo y los que le siguen hasta el final de la serie, queremos describir toda esa suerte de repercusiones recorriendo las diferencias que, a este respecto, existen dentro de sendos modelos.

En concreto aquí, centraremos nuestra atención en cómo el uso de clases y el soporte que ofrece un sistema de tipos fuerte, dentro de los modelos estáticos, permite articular una forma de razonamiento diferente al que se produce en los modelos dinámicos de la orientación a objetos. Como en el resto de los artículos, el objetivo no es generar un sesgo de tendencia hace una u otra aproximación sino, más bien, hacer énfasis en la idea de que cada lenguaje expone una forma particular de razonar sobre él y que, el desarrollo comienza siempre por entender el modelo subyacente para usarlo adecuadamente.

## Sistemas de Conformidad Semántica

Cuando realizamos actividades de diseño dentro del modelo estático de la orientación objetos, estamos llevando a cabo actividades de clasificación de manera sistemática y recurrente. En efecto, la definición de cada clase persigue establecer un nuevo criterio de diferenciación de una familia de objetos que comparten una misma estructura y comportamiento de base. Y de esta manera, todos los objetos reciben una tipología semántica a partir de la clase a la que pertenecen.

Este hecho tiene repercusiones durante el tiempo de ejecución ya que cada objeto no sólo encuentra oportunidades de participación en diferentes colaboraciones dentro de la arquitectura en base a su tipo asociado, sino que dicho tipo le confiere un rol de responsabilidad dentro de cada una de ellas.

Extender esto al espacio de las estructuras polimórficas desarrolladas a través de la herencia resulta aún más atractivo, ya que todos aquellos objetos que comparten un mismo tipo de base resultarán, en cualquier momento, mutuamente intercambiables dentro de las colaboraciones en las que participan. Este hecho permite mostrar, a nivel sistémico, comportamientos muy diferentes por la mera sustitución de unos objetos por otros tal como predica el principio de sustitución que ya describimos.

Proceder de esta manera en un sistema orientado a objetos resulta muy orgánico y potente. En efecto, el diseño de colaboraciones suele establecerse mediante el uso de clases base lo suficientemente abstractas como para que se potencien las oportunidades de sustitución. El hecho de que, de manera iterativa, pueda incrementarse el conjunto de clases hijas de participación potencial confiere a los sistemas un carácter abierto a la extensión. La idea de que cada sistema en cada paso de iteración resulte completamente operativo le confiere una idea cerrada. Esto es lo que conduce al asi llamado principio Abierto / Cerrado dentro de este tipo de arquitecturas. Toda arquitectura de objetos está abierta a la extensión pero, a la misma vez, se encuentra cerrada a la operación. 

Dentro de este tipo de aproximaciones, la idea de tipos transferida a los objetos a través del uso de las clases resulta diferencial y le confiere un carácter fuertemente semántico. Los tipos, no sólo son el elemento de base para crear un marco coercitivo que regule las actividades de desarrollo durante el diseño. Más allá de eso, permiten modular la descripción de la colaboración en base a los roles que se asume de cada participante. 

Esto es así porque el tipo se convierte en una materialización abstracta de la estructura morfológica y capacitiva que, por diseño, se asume expondrá cada objeto en base al tipo al que pertenece. Es más, dado que, según lo explicado, cada objeto puede tener asociado diferentes tipos de manera simultánea en virtud de la estirpe de herencia a la que pertenece, lo frecuente es que la caracterización de los objetos dentro de colaboración se basa en selección aquel de sus tipos que corresponde al perfil morfológico que demanda la misma.

```
class Vehicle {
  start () {}
  stop  () {}
}
class Car  extends Vehicle { }
class Bike extends Vehicle { }
class Truck { start, stop }

let vehicles = [...]
class Workshop {
  execute (vehicles: Array<Vehicle>) {
    for (let vehicle: Vehicle of Vehicles) {
      vehicle.start ()
      vehicle.stop  ()
    }
  }
}
```
<div class="listing">Conformidad Semántica.</div>

En el listado 1, puede apreciarse como se materializa esta idea a la hora de razonar semánticamente sobre el código. En particular existen las abstracciones Coche, Camión y Moto que ya usamos en ejemplos anteriores, y existe un taller cuyo método de ejecución recibe como parámetro de entrada un array de objetos de tipo Vehículo. En aras a la ilustración, imaginemos que tan solo coches y motos fueran tipificados como vehículos por extensión de herencia y no hiciéramos lo mismo para los camiones. Esto impediría que los éstos pudieran a entrar a formar parte de la colaboración correspondiente a la iteración del taller dado que los camiones no pertenecen a la estirpe semántica de los vehículos y es requisito declarado que los objetos dentro del taller sólo pueden ser vehículos. Este sería el comportamiento aún cuando la clase de los camiones también incluyera métodos homónimos de arranque y parada similares al del resto de vehículos.

Este hecho que acabamos de ilustrar con el ejemplo anterior es lo que caracteriza de forma semántica las colaboraciones en este tipo de arquitecturas. La idea suele formularse en tono académico como que, dentro del modelo estático de la orientación a objetos, la conformidad de los objetos para entrar a formar parte de una colaboración tiene un carácter semántico. 

## Sistemas de Conformidad Sintáctica

En el mundo de lo dinámico las cosas pintan de una manera muy distinta. El concepto de clase no existe como elemento coercitivo de cualificación semántica y no se pretende crear estirpes polimórficas elaboradas. Los objetos, se interpretan meramente como contenedores de agregación que incorporan capacidades por criterios de cohesión interna. No son reconocibles a través de un sistema de tipos y, de hecho, resultan completamente indistinguibles unos de otros una vez atravesados los procesos de construcción, a no ser, claro está, que se apliquen actividades de introspección estructural.

Sobre estos mimbres, el desarrollo de la orientación a objetos es pretendidamente mucho más sencillo. Al entrar en ejecución, a cada objeto participante en el marco de una colaboración se le asume una estructura morfológica adecuada para dar respuesta satisfactoria a la demanda capacitiva que se hará de él a lo largo del diálogo. Por decir de otra manera, se asume que cada objeto ha sido preparado durante la construcción de manera adecuada para garantizar su funcionamiento operativo dentro de la colaboración en la que participa.

Por contraste a la aproximación de la sección anterior, en el modelo dinámico se dice que la conformidad que siguen los objetos al entrar a formar parte de una colaboración no es semántica sino sintáctica. Cada objeto, para participar en cierta colaboración, no requiere que se adscriba o pertenezca a una determinada familia tipológica preestablecida en tiempo de diseño, como sí ocurría dentro del modelo estático. En su lugar, es suficiente con que disponga de los métodos homónimos demandados durante el diálogo. De ahí que se hable de conformidad sintáctica.

```
function Car   { return { start, stop } }
function Bike  { return { start, stop } }
function Truck { return { start, stop } }

let vehicles = [...]
function  Workshop () {
  execute (vehicles) {
    for (let vehicle of Vehicles) {
      vehicle.start ()
      vehicle.stop  ()
    }
  }
}
```
<div class="listing">Conformidad Sintáctica.</div>

En el listado 2, puede apreciarse un ejemplo similar al de la sección anterior, pero expresado con los constructos propios del modelado dinámico. Más allá de estilos de codificación este ejemplo pretende señalar el hecho de que, en este caso, todas las abstracciones construidas, Coche, Camión y Moto, pueden entrar a formar parte de la colaboración del taller de reparación aun cuando no exista ningún vínculo semántico entre las tres variantes de objetos. Y es que en este escenario no existe ninguna restricción tipológica que regule la naturaleza semántica de las abstracciones entrantes. Para que coches, camiones y motos puedan entrar a operar con el taller solo se les exige que dispongan de sendas implementaciones de los métodos invocados de arranque y parada.

Y ¿qué pasaría si, dentro de este modelo, hubiéramos respetado el estilo de codificación del listado 1? En primer lugar deberíamos eliminar cualquier cualificación de tipo como la que aparece en el método execute o en el iterador for para Vehículo pero, más allá de eso, lo cierto es que no ocurriría nada, todo lo descrito en el párrafo anterior seguiría siendo válido dado que el estilo es sólo eso, una capa de azúcar sintáctico que nos acerca a otras culturas y experiencias de desarrollo. 

## Conclusiones

A lo largo de este artículo hemos hecho una revisión de las diferencias existentes entre los modelos estático y dinámico de la orientación objetos en lo referente a las estrategias de conformidad aplicada cuando los objetos entran a formar parte de una colaboración.

En el modelo estático, el uso de las clases sirve como elemento de cualificación semántica para conferir a cada objeto un tipo particular lo que les habilita para participar en ciertas colaboraciones y les confiere un rol específico dentro de las mismas. Desde una perspectiva coercitiva, el lenguaje regula la participación de los objetos en el marco de colaboración y genera un error si no se cumple con las condiciones tipológicas establecidas. En el modelo dinámico, por el contrario, se ofrece una aproximación mucho más sencilla no basada en el uso de un sistema de tipos fuerte sino en la comprobación durante el tiempo de ejecución de que en efecto cada abstracción implicada en la colaboración dispone de los métodos requeridos.

La comunidad se debate con frecuencia entre ambos tipos de aproximaciones y lo cierto es que ninguna de ellas resulta inherentemente mejor que su alternativa. La conformidad semántica propia de los modelos estáticos resulta claramente más segura puesto que muchos de los errores de ejecución se adelantan para ser descubiertos en la fase de diseño al quedar modulados por un sistema de tipos fuerte.

Sin embargo, las aproximaciones basadas en conformidad sintáctica, propias de los modelos dinámicos, resultan en arquitecturas mucho más plásticas, adaptativas y flexibles que pueden atender a la demanda de cambio continuo que se da en algún tipo de soluciones. Esta es una idea que retomaremos en próximos artículos de esta serie.
