---
title  : El Efecto Ornitorrinco
slug   : el-efecto-ornitorrinco
author : Javier Vélez
date   : Dic 2023
---

## Introducción

Hace ahora casi una década que escribí un artículo en mi Web titulado <q>El efecto Ornitorrinco</q>. El artículo surgió de una discusión en la lista de distribución del grupo Madrid JS donde muchas voces críticas hacían una demanda encendida para que JavaScript se pareciera por diseño más al lenguaje que ellos imaginaban.

Ya en aquellos días, mi respuesta en el foro, y en el artículo que escribiría días después, defendía que no se puede pedir a un lenguaje que se ajuste académica y rigurosamente a los mimbres férreos de un paradigma sino, más bien, que el ejercicio que debe hacer todo desarrollador al estudiar un nuevo lenguaje consiste, precisamente, en aprender a entenderlo y reflexionar acerca de cómo nos está pidiendo que le usemos.

Quisiera poder reconocer que esta epifanía fue, desde el principio, fruto de mi genialidad. Pero lo cierto es que no fue así. Yo también intenté, desde mis inicios con el lenguaje, que JavaScript fuera un clon del espíritu canónico de la orientación a objetos que abanderaban otros lenguajes como Java o C# en boga en aquellos años. Esta lección yo también tuve que aprenderla con el tiempo. Cuando dejé de resistirme al cambio comencé a entender a la criatura. Aprendí a amarla y a sacarle todo el partido de sus rarezas y peculiaridades.   

Ahora, después de tantos años, creo que es buen momento para recuperar aquel articulo y convertirlo en las líneas que me encuentro escribiendo. No sólo porque vale la pena hacer alguna que otra depuración estilística y actualización requerida que con los años se ha vuelto necesaria sino porque creo que <q>El Efecto Ornitorrinco</q> es una lección de tanto valor como principio universal del desarrollo de software que bien vale la pena recorrerlo en profundidad dedicando a sus distintas aristas cada uno de los artículos de esta serie.

Aunque el texto estuvo y sigue centrado en JavaScript como lenguaje universal de base de todas las tecnologías de la Web, lo cierto es que la reflexión transciende de lo particular a lo general y es fácilmente interpretable que el carácter vivo de todo lenguaje resulta anterior y prioritario a cualquier paradigma y que la pragmática de uso siempre modula cualquier mimbre teórico culturalmente impuesto desde la literatura. El texto hace diez años empezaba así... 

## El Efecto Ornitorrinco

Cuando el ornitorrinco fue descubierto por primera vez por los europeos en 1798, el capitán John Hunter, segundo gobernador de Nueva Gales del Sur, envió un bosquejo y la piel de un ejemplar a Gran Bretaña. A la vista de tan extraño animal, los científicos británicos creyeron encontrarse ante una broma pesada. George Shaw, que en 1799 hizo la primera descripción del ornitorrinco en la revista Naturalist’s Miscellany, afirmó que era imposible no haber mostrado dudas sobre su autenticidad y Robert Knox creyó que podría haber sido creado por algún taxidermista asiático. Se creía que alguien había cosido el pico de un pato al cuerpo de un animal parecido a un castor. Shaw incluso utilizó unas tijeras para comprobar si había suturas en la piel disecada.

La nueva especie del capitán Hunter no era un ni un pato ni un castor ni una nutría sino un animal con hocico en forma de pico de pato, cola de castor y patas de nutria. Pese a la presión de la comunidad científica ni Hunter ni Shaw mantuvieron un serio diálogo con la especie para convencerla de que debería decidirse por una de las tres morfologías ya conocidas. Simplemente aceptaron que un ornitorrinco es eso, un ornitorrinco.

Sin embargo los informáticos no somos así. Nosotros no queremos ni mimamos paternalmente a nuestro lenguaje como los biólogos cladistas hacen con cada nueva especie descubierta. Nosotros exigimos y vapuleamos a nuestra criatura – en este caso JavaScript – para demandar que se acerque a nuestra forma de pensar porque como toda buena religión, la nuestra es la única y verdadera. Y claro, el pobre JavaScript, tiene que intentar adaptarse a la orientación a objetos para acoger a las hordas de librepensadores que llegan de otros lenguajes como los hunos imponiendo un sistema de tipos fuerte y un sistema robusto de clases para soportar los principios SOLID. O para exigirle encarecidamente que nos de soporte a la encapsulación que es forma doctrinal para articular un sistema de objetos mínimamente computable.

A este efecto, cada vez más extendido en la comunidad mundial de desarrollo, yo he dado en llamarle en mis últimos debates con colegas de la profesión <q>Efecto Ornitorrinco</q>. La mayoría de las voces detractoras advierten, no sin cierta razón, que JavaScript no es una especie sino un lenguaje de programación. Una herramienta hecho por y para humanos dirigida a facilitarnos la vida en nuestros problemas de desarrollo.

> **Efecto ornitorrinco.** Entiende a tu lenguaje, no lo intentes cambiar.

Pero, ¿de verdad JavaScript no es una especie? ¿Acaso no se le reconoce una clara evolución adaptativa? ¿Existe un mínimo objetivo común o concomitante entre el JavaScript del año 95 y el de nuestros días? Javascript es un lenguaje vapuleado y vilipendiado con injustos ataques muchas veces más vinculados a la falta de entendimiento y empatía de los desarrolladores exigentes con su pragmática de uso que con una crítica argumentada y racional. 

JavaScript no tiene tipos fuertes, ni soporta sustitución Liskoviana. No cierra los objetos ni los considera consagrados a estirpes polimórficas establecidas en tiempo de diseño. JavaScript no ofrece mecanismos de encapsulación ni fuerza a operar con contratos preestablecidos. JavaScript no es Java. Si lo que buscas es un pato, un castor o una nutria, deja al ornitorrinco bucear en paz. Si lo que quieres es Java, no uses JavaScript.

## El Camino de JavaScript 

Quiero pensar que todo esto es asi, no de forma incidental, como se ha venido creyendo, sino estratégica. Si no existen tipos fuertes, tal vez ello sea para permitir una conversión más flexible durante la dinámica de ejecución. Si los objetos son entidades abiertas quizá sea para poder crear arquitecturas adaptativas que devengan en cambios evolutivos a lo largo del tiempo con naturalidad. Si no se dan estirpes polimórficas igual es porque el lenguaje invita a pensar en modelos de objetos basados en prototipos operados por clonación y referencia. Si no se ofrece encapsulación quizá es para dejar en manos del desarrollador la modulación adecuada de los principios de protección de la información.

<figure>
  <img src="/images/articles/lenguajes/ornitorrinco/post-01.01.png" 
       alt="Modelos de Orientación a Objetos">
  <figcaption>Modelos de Orientación a Objetos.</figcaption>
</figure>

En lugar de hacer análisis retrospectivos escudriñando en la historia del lenguaje para encontrar justificaciones Freudianas de lo que debería haber sido y nunca fue que solo conduzcan a la frustración, mejor sería entender el ejercicio de aprendizaje del lenguaje como un juego que trata de descubrir cómo se crean soluciones orgánicas en JavaScript según su naturaleza y valorar si la experiencia conduce a un modelo de desarrollo de valor diferencial. Tal vez el resultado nos sorprenda.

Precisamente este camino es el que pretendemos recorrer a lo largo de esta serie. Apoyándonos en el marco de descripción que presentamos en la figura 1, describiremos las diferencias que ofrece JavaScript como lenguaje universal de desarrollo frente a otras alternativas. En particular, pondremos foco de atención comparativa entre los aspectos del tiempo de diseño y ejecución que presenta el modelo clásico de la orientación a objetos, aquí referido como modelo estático, y el propio de JavaScript, referido como modelo dinámico. Es nuestra intención que esta selección terminológica quede justificada a lo largo de esta serie.
 
## Conclusiones

JavaScript, es tal vez uno de los lenguajes más maltratados por la comunidad de desarrolladores de toda la historia de la programación. Y sin embargo, las cifras están ahí. Es una de las tecnologías de mayor uso hasta la fecha. Sin lugar a dudas, eso es debido a su posicionamiento hegemónico como elemento clave de soporte al desarrollo Web. Pero lo cierto es que una pléyade de lenguajes le han intentado robar protagonismo a lo largo de todos estos años y a la vista está que ninguno de ellos ha conseguido derrocarle.

Como en toda creación, el lenguaje tiene sus luces y sus sombras. JavaScript es un lenguaje con muchos puntos de mejora y yo seré siempre el primero en ponerme al frente de esa manifestación. Pero es de justicia reconocer que se trata de una tecnología que ha ido reinventándose recurrentemente para adaptarse a las tendencias y demandas de mercado. Pocos son los lenguajes que han establecida una cultura de desarrollo basada en la extensión fronteriza de capacidades por técnicas de transpilación sistemática. Y eso es algo de lo que muchos otros podrían aprender.

Pero como digo, el objetivo de toda esta serie no está en cubrir al lenguaje de loas y juicios banales de valor sino de explicar, de la manera más pragmática y directa posible, una gran lección que aprendí con los años cuando yo me acerqué por primera vez a JavaScript. A saber, que el aprendizaje de todo lenguaje consiste en entender cómo es su funcionamiento y su pragmática de uso fundamental liberada del marco coercitivo de restricciones propio de cualquier paradigma de academia o espacio de creencias culturalmente impuesto. Ese es, precisamente, el <q>Efecto Ornitorrinco</q> que quiero describir en el detalle a lo largo de toda esta serie. ¿Me acompañas?
 
