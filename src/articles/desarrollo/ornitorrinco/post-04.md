---
title  : Herencia & Referencia
slug   : herencia-y-referencia
author : Javier Vélez
date   : Diciembre 2023
---

## Introducción

Hasta este artículo hemos completado la descripción de la responsabilidad que tienen las clases en el marco de la orientación a objetos más clásica y convencional. Este relato, que se enmarca en el espacio que estamos llamando modelo estático a lo largo de esta serie, nos ha servido para poner en valor parte de las diferencias que existen dentro de este modelo con una aproximación alternativa no basada en clases ni tipos que venimos a referir como el modelo dinámico de la orientación a objetos y que es la utilizada, entre otros lenguajes, por JavaScript.

En el modelo estático, las clases son el artificio sintáctico que sirve para asignar un tipo a cada objeto dentro del sistema y este hecho les confiere un rol específico dentro de cada colaboración. En el modelo dinámico, no existe diferenciación tipológica entre los objetos una vez creados y éstos se comportan como contenedores de capacidades estructuralmente preparados para entrar a participar en tales colaboraciones.

Pero este relato no termina aquí, una de las características más diferenciales de la orientación a objetos con respecto a otros paradigmas es que cada objeto es una realidad poliédrica capaz de ofrecer múltiples perspectivas proyectivas. Y este hecho multiplica sus oportunidades de participar, con diferentes roles, en diversos escenarios de colaboración.

En los modelos estáticos, esto significa que cada objeto, más allá de responder a un único tipo, queda caracterizado por un conjunto de ellos y que los sistemas de tipos son los responsables de ofrecer visiones de sesgo proyectivo según corresponda como explicábamos antes. Los modelos dinámicos, por el contrario, cubren esta cualidad a través de modelos referenciales, y como este es otro importante valor diferencial entre ambos tipos de modelos de la orientación a objetos resulta interesante dedicarle un artículo dentro de esta serie.

## Sistemas Basados en Herencia

Una característica fundamental que ofrecen los lenguajes de soporte a la orientación a objetos dentro del modelo estático es el relativo a los mecanismos de herencia. De manera muy general, se suele afirmar que, la herencia es el mecanismo mediante el cual una clase refiere a la lógica de construcción de otra clase y adquiere, por extensión, todas las capacidades estructurales incorporadas en dicha clase.

Este hecho, establece una relación de dependencia entre clases conocida como relación de herencia donde sendas clases quedan enmarcadas en un modelo de roles característico. El rol de la clase heredada se llama clase padre o clase base mientras que el de la clase heredera se conoce con el nombre de clase hija.

En torno a este mecanismo, toda clase hija está legitimada a llevar a cabo procesos de sobrescritura tanto de la lógica de construcción de la clase base como la de aquella establecida en cada uno de los métodos conferidos a través de la herencia. Y esta actividad, no necesariamente tiene porqué ser completa dado que, en los lenguajes de esta naturaleza se ofrecen recursos sintácticos que permiten referir a la implementación en la clase base mientras se está implementando el nuevo código en la clase hija.

Junto con la posibilidad aditiva de incluir nuevos elementos dentro de la clase hija, la herencia, y la sobrescritura de capacidades, brindan una oportunidad excepcional para consolidar estrategias de refinamiento semántico mediante actividades de diseño. Este hecho, resulta de alto interés al contemplar los efectos que produce la aplicación de la herencia dentro de la arquitectura desde una perspectiva vertical. Sin embargo, aún resulta más interesante si estos efectos se consideran sobre el plano horizontal. En efecto, al crear una clase hija estamos creando una versión especializada con respecto al padre, pero al iterar esta idea varias veces sobre la misma clase base obtenemos varias clases que resultan en versiones especializadas bajo distintos criterios de especialización. Son, si se quiere, clases hermanas.

Pero ¿qué sentido práctico tiene todo esto en los ejercicios de desarrollo? ¿Para qué sirve la herencia y cuando debe utilizarse? Pues bien, si somos observadores podremos advertir que todas las clases construidas por la vía de la herencia comparten una misma estructura común de base. Ya sea, porque cada clase hija nazca como un proceso de especialización con respecto al padre sobre el eje vertical o porque este proceso se itera para crear una familia de clases estructuralmente similares, lo cierto es que todas ellas resultan, en cierto sentido compatibles y mutuamente intercambiables.

Por reforzar esta idea de una manera mucho más nítida, los objetos que en el marco de una colaboración participan como pertenecientes a cierta clase base, pueden ser intercambiados sin prejuicio por objetos de cada una de sus clases hijas. Y, en tanto que estas sustituciones pueden incorporar versiones semánticas especializadas diferentes de la originalmente expresada en la clase base, los efectos del cambio pueden arrojar nuevos comportamientos establecidos a nivel sistémico.

Este es el principio de sustitución enunciado por Barbara Liskov en 1987 y constituye uno de los elementos más potentes de diseño dentro de los sistemas de orientación a objetos. De acuerdo a esta idea, la creación de colaboraciones durante la fase de diseño debe hacerse al nivel suficiente de abstracción como para conseguir que dentro de la misma se puedan efectuar sustituciones liskovianas bajo demanda a lo largo del tiempo.

Pero un momento. ¿Qué pasa con los tipos? En un artículo anterior estresamos la idea de que cada objeto adquiere un tipo en virtud de la clase a la que pertenece y que este hecho es el que verdaderamente le legitima para participar en colaboraciones con un rol nítidamente establecido de esta forma. Ahora, sin embargo, parece que, en virtud del principio de sustitución, objetos de diferentes clases pueden ocupar el mismo espacio de participación dentro de una colaboración. ¿No es esto una fuente de contradicción o conflicto?

Para reconciliar estas dos ideas, es necesario extender la idea de tipo que establecimos hasta aquí. El tipo de un objeto queda adquirido a través de la clase a la que pertenece. Pero si dicha clase se encuentra definida en el marco de una jerarquía de herencia, el objeto adquiere, de manera simultánea, todos los tipos correspondientes a cada una de las clases implicadas en la cadena de herencia. Esto tiene dos lecturas complementarias y mutuamente compatibles. A nivel de clase que, junto con la lógica de construcción y la estructura morfológica, cada clase hereda el tipo de todas sus clases base anteriores. Y a nivel de objetos, que cada objeto adquiere todos los tipos declarados en la cadena de herencia. Con esto, los objetos se convierten en realidades poliédricas que pueden mostrar diferentes perfiles semánticos y potencian la oportunidad de jugar diferentes roles en virtud de la colaboración en la que participan. A esta cualidad que presentan los objetos dentro de este modelo estático se le conoce con el nombre de polimorfismo que, por extensión, puede aplicarse también a nivel de clase.

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
      vehicle.stop  ()
    }
  }
}
```
<div class="listing">Herencia & Escenario de Colaboración.</div>

En el código de ejemplo del listado anterior puede apreciarse como la clase Vehículo es utilizada como elemento de anclaje para crear una jerarquía polimórfica. En efecto, cada vehículo así definido tiene métodos de arranque y parada articulados dentro de esta clase, que se asumen semánticamente refinados en cada una de las abstracciones hijas subsiguientes Coche, Camión y Moto. Al crear una colección de artefactos, convenientemente tipificados como vehículos, se legitima la colaboración sobre el taller de revisión que dispone de un método de iteración tipificado precisamente a ese mismo nivel de abstracción.

## Sistemas Basados en Referencia

Como acabamos de describir, el modelo estático de la orientación a objetos ha establecido un espacio de conceptos muy rico para articular procesos de razonamiento semántico basados en tipos, mecanismos de herencia, realidades poliédricas, construcciones proyectivas polimórficas y oportunidades sustitutivas en el marco de cualquier colaboración.

El modelo dinámico no ofrece, al menos de manera directa, mecanismos de clasificación y por tanto no deja espacio para establecer mecanismos de construcción de estirpes polimórficas y sustitución Liskoviana basadas en la herencia. En este modelo, los objetos son meros agregados de capacidades semánticamente indistinguibles una vez atravesados los procesos de construcción.

Lo que si es cierto es que, dentro de estos procesos, las funciones de creación de objetos suelen aplicar técnicas de replicación y clonado para crear nuevos objetos a partir de otros objetos anteriores que sirven como referencia. Son los conocidos prototipos.

Este tipo de estrategias, aunque diferentes a las descritas en la sección anterior, no resultan en absoluto menos potentes. Es fácil establecer claras concomitancias entre sendos modelos y sus artefactos asociados. En el mundo de lo estático, las clases son arquetipos de código, especialmente descritos para la construcción. En el mundo de lo dinámico, son los prototipos los que sirven a ese propósito. En el mundo de lo estático cada objeto mantiene una asociación interna con su clase asociada. Aunque este hecho no es directamente perceptible por el desarrollador es así. En el mundo de lo dinámico, los objetos son entidades autónomas y autocontenidas una vez atravesada la fase de construcción. En el mundo de lo estático es posible establecer complejas jerarquías de herencia entre clases. En el mundo de lo dinámico este hecho se sustituye por procesos de elaboración constructiva tan complejos y adaptados como se desee en base al uso de prototipos.

```
function Vehicle () {}
function Car   { return Vehicle (...) }
function Bike  { return Vehicle (...) }
function Truck { return Vehicle (...) }

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
<div class="listing">Referencia & Escenario de Colaboración.</div>

Para ilustrar este hecho es posible revisar el código contenido en el listado adjunto, que pretende alcanzar los mismos objetivos que los perseguidos en el listado de la sección anterior. En este caso, la creación de objetos no se lleva a cabo por medio de la creación de clases sino de funciones de construcción y tampoco se establecen mecanismos de herencia. En su lugar, la variabilidad polimórfica y la especialización semántica es una idea conceptual cuya garantía y corrección semántica descansa en las espaldas del desarrollador. Esta es un idea importante dentro del modelo dinámico que retomaremos más adelante al abordar el tiempo de ejecución. 

No obstante, dentro del modelo dinámico sí que es posible articular una arquitectura de elementos que, a través de esfuerzos de reconceptualización han traído muchos de los elementos terminológicos del modelo estático dentro de este perímetro al espacio de los modelos dinámicos. Esto, al menos es lo que ha ocurrido con JavaScript en su proceso evolutivo de reinvención constante. Para repasar brevemente este esfuerzo de transformación, permítaseme aplicar alguna licencia narrativa que, si viene no se mantiene fiel al relato de la evolución histórica, sí ayuda a arrojar mayor grado de claridad.

En primer lugar, las funciones constructoras han adquirido una sintaxis de clase apropiada. Al escribir una clase en JavaScript se crea una función constructora. Sin embargo, ello se hace con los elementos sintácticos al uso. Por otro lado, las técnicas de construcción por medio del uso de prototipos se han mantenido, pero creando estructuras de enlace de manera que se puedan imitar los mecanismos de búsqueda ascendente propios de la resolución de capacidades sobre las jerarquías de herencia. Por último, se ha hecho posible, la materialización de las clases como un artefacto vinculado a la descripción arquetípica de código permitiendo que los prototipos queden enlazados a la función constructora que subyace a la clase.

Quiero resistirme a sumarme a las voces incendiarias que habitualmente argumentan que esta secuencia de cambios nunca debió producirse dentro del lenguaje. A mi juicio, resulta una verdad indiscutible que, en el ámbito de la orientación a objetos, la inclusión de este tipo de artefactos y simulación de mecanismos ha arrojado mucho valor de simplificación y claridad. Más aún cuando, se trata de contribuciones de uso opcional que resultan completamente compatibles con los esquemas de codificación más convencionales del lenguaje y, en cualquier caso, respetan absolutamente la esencia del modelo de operación subyacente.

Pero, si bien todo lo anterior es cierto, en la virtud se tiene la penitencia. Todo este arquitecturado artificioso que mira a mimetizarse con el sabor sintáctico expresado por otros lenguajes, no deja de ser más que eso, azúcar sintáctico.  Al recuperar una clase en tiempo de ejecución comprobamos que lo que subyace es meramente una función. Al mirar dentro del cuerpo de la misma advertimos que existe una propiedad de acceso al prototipo donde reside toda la estructura de código de la clase. 

Sin embargo, contemplado desde la ejecución el lenguaje no ha introducido con este cambio dos niveles de discurso, el de clases y el de objetos. JavaScript es un lenguaje exclusivamente centrado en objetos y si un objeto representa una instancia o un prototipo es tan sólo una cuestión de perspectiva. Al tomar cualquier objeto, si miramos al objeto padre dentro la jerarquía de prototipado dicho objeto juega el rol de prototipo. Pero si, subimos un nivel por la cadena y nos posicionamos al nivel del prototipo, entonces, desde ese nivel lo que antes era un prototipo ahora es un objeto con estado y su objeto padre se convierte en el prototipo dentro de esa relación.

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
  execute (vehicles) {
    for (let vehicle of Vehicles) {
      vehicle.start ()
      vehicle.stop  ()
    }
  }
}
```
<div class="listing">Herencia & Escenario de Colaboración.</div>

El listado anterior ofrece una versión equivalente a la que fue descrita en el modelo anterior haciendo uso de este tipo de abstracciones. Mas allá de que en todo el código, las clases no se utilizan como elemento de tipificación explícita los resultados obtenidos resultan sintácticamente bastante parecidos.

## Conclusiones

A lo largo de este artículo hemos realizado una descripción comparativa entre los mecanismos de herencia propios de la orientación a objetos del modelo estático y la aproximación contrapuesta basada en el uso de prototipos relacionados propio de los modelos dinámicos. En el primer caso, los mecanismos de herencia sirven para establecer, de manera formal, un entramado de dependencias entre clases donde unas clases adquieren el rol de clases padre o clases base con respecto a otras clases hijas que adquieren tanto el tipo, como la lógica de construcción y estructura anatómica.

A lo largo de este texto hemos explicado que, a través de estos mecanismos, los objetos pueden organizarse en base a estirpes jerárquicas y adquirir una estructura polimórfica que les habilita para potenciar su participación en diversos escenarios de colaboración en virtud de los principios de sustitución. Esta idea, contrasta con la falsa creencia, pero muy extendida de que la herencia, en su perspectiva pragmática es meramente un recurso de economía de desarrollo basado en refactorización de código común sobre clases base. 

Muy al contrario, en lectura arquitectónica, la herencia se interpreta como un mecanismo de refinamiento semántico de abstracciones contemplado sobre el eje vertical y como una oportunidad de articular soluciones de variabilidad polimórfica sustitutiva cuando ésta se contempla en anchura. El uso de la herencia y los principios asociados resulta de tantísima potencia dentro del paradigma que es, frecuentemente considerado un elemento germinal para otros muchos conceptos que, lamentablemente caen fuera del alcance de esta serie, tales como el uso de clases abstractas, interfaces, realizaciones, puntos de extensión, principios de inversión de dependencias, y un largo etcétera.

Lo cierto es que, pese a lo atractivo de esta aproximación, resulta perfectamente posible dar soporte a entornos de orientación a objetos basados en el modelo dinámico que no disponen de soporte directo a los mecanismos de herencia y polimorfismo. Desarrollar experimentos que permitan poner a prueba la viabilidad de este tipo de soluciones más ligeras es, tal vez,  una de las evidencias más notables de que el <q>Efecto Ornitorrinco</q> es una realidad constatable.

Con este texto ponemos punto y aparte al recorrido comparativo que estamos haciendo del lenguaje con respecto a su contraparte estática desde la perspectiva del tiempo de diseño. En lo que resta de esta serie abordaremos los factores diferenciales que se pueden destacar en lo relativo al tiempo de ejecución.

