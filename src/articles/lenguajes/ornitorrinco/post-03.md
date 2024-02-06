---
title  : Tipos & Prototipos
slug   : tipos-y-prototipos
author : Javier Vélez
date   : Ene 2024
---

## Introducción

En un artículo anterior, hablamos acerca del papel que juegan las clases en relación a los procesos de construcción de objetos. En ese texto se discutió cómo, en el modelo estático de la orientación a objetos, las clases son uno de los ciudadanos de primera categoría y que, este tipo de artefactos sirve al propósito de conferir a los objetos así construidos una estructura y lógica operativa común.

Sin embargo, en los modelos de esta naturaleza, las clases cubren un espacio de responsabilidad mayor que servir meramente al soporte de los procesos de creación. Éstas se convierten en aliados fundamentales para hacer un relato semántico que describa el comportamiento global del sistema. Si bien este hecho es algo que tiene repercusiones durante el tiempo de ejecución, lo cierto es que también condiciona considerablemente las actividades en la fase de diseño como descubriremos a lo largo de esta serie.

A lo largo de las siguientes líneas, dedicaremos nuestra atención a discutir la relevancia que tienen los procesos de clasificación en los modelos estáticos de la orientación a objetos y los pondremos en comparación con las alternativas más ligeras propias de los modelos dinámicos. Y es que, como veremos, esta es otra de las diferencias esenciales que presenta JavaScript con respecto a otros lenguajes.

En particular, a lo largo de este artículo describiremos qué labor diferencial juegan los tipos en un lenguaje de soporte a la orientación a objetos en relación al que tienen en otros paradigmas. Y asimismo, entraremos a discutir qué opciones interpretativas existen dentro de este perímetro.

## Sistemas Basados en Tipos

En los sistemas más convencionales de la orientación a objetos - aquellos propios del modelo estático - los objetos se organizan de acuerdo a un sistema de tipos sobre el que es posible articular procesos de razonamiento semántico. Esto quiere decir que cada objeto, en virtud del tipo al que pertenece, queda legitimado para participar en determinados espacios de colaboración dentro de la arquitectura.

Este hecho es así porque, dentro de este modelo, el diseño de los escenarios de colaboración se describe, precisamente, en términos de los tipos de objetos participantes. En primera instancia, ello permite establecer un marco regulatorio que ofrece garantías durante la ejecución de que los objetos implicados en cada colaboración serán de la naturaleza apropiada.

Pero más allá de esto, los tipos de los objetos no solamente sirven a un efecto coercitivo sino también a un propósito de reflexión semántica durante las actividades de diseño. Aunque dar una justificación detallada de esta reflexión será objeto de un próximo artículo de esta serie, sí es conveniente argumentar en este punto que, en el espacio de cada colaboración, el tipo de cada objeto representa un rol activo dentro de la misma que le confiere una responsabilidad específica para articular el diálogo cruzado que se desarrolla a lo largo del tiempo.

Todo lo anterior arroja una idea clave propia de los lenguajes de orientación a objetos pertenecientes al modelo estático. A saber, que en el marco de una arquitectura de esta naturaleza, todos los objetos durante la ejecución quedan semánticamente cualificados por un tipo. Y ello, de manera indirecta, implica que, en este tipo de soluciones, los objetos en ejecución quedan clasificados en base a dicho tipo. Diseñar es ante todo clasificar para crear familias de objetos bien diferenciadas estructural y funcionalmente lo que, como estudiaremos más adelante, tiene una repercusión directa en el razonamiento semántico de este tipo de sistemas. 

Pero ¿Cómo se expresa en concreto el tipo de cada objeto? Pues bien, en los lenguajes propios del modelo estático, esta responsabilidad también queda relegada al uso de las clases. De esta manera, las clases, más allá de ser meros artefactos encargados de encapsular la lógica de construcción, como se explicó en un artículo anterior, sirven de elemento de caracterización semántica. Una clase es una marca sintáctica dentro del lenguaje que confiere un tipo establecido a todos los objetos que pertenecen a la misma. Es cierto que, según lenguajes, la clase no es la única vía para llevar a cabo este proceso, pero si la principal.

Quizá todo lo anterior, justifique la nomenclatura utilizada en la narrativa de orientación a objetos al usar el término de clase más que el de tipo. Los objetos son de diferentes clases, todos los objetos pertenecientes a una misma clase presentan unas cualidades morfológica y funcionalmente similares y las clases cubren, desde esta perspectiva, un propósito de clasificación para establecer la diferenciación semántica que distingue unos objetos de otros y los mantiene organizados por extirpes operativas.

## Sistemas Basados en Prototipos

Hasta ahora hemos descubierto las bondades del uso de las clases en los sistemas de orientación a objetos basados en el modelo estático. Cabe preguntarse, no obstante, si los sistemas de tipos robustos, similares a los que fueron descritos en la sección anterior, son punto fijo de paso en la creación de soluciones solventes de orientación a objetos. Pese a que el recorrido histórico de este paradigma pueda llevarnos a pensar en esta dirección, lo cierto es que esto no es necesariamente así.

En los modelos dinámicos donde el uso de clases no esta soportado, el tipo no es un elemento constructivo nuclear. Como ya explicamos en un artículo anterior, dentro de este tipo de soluciones, los objetos son conceptualizados como meras estructuras contenedoras que aglutinan capacidades funcionales de acuerdo a criterios de cohesión y no existe un tipo característico asociado a cada tipo.

Dentro de este modelo, la caracterización coercitiva y los procesos de razonamiento paradigmático surgen de manera más natural en base a la estructura morfológica de los objetos así construidos y este es punto clave fundamental de diferenciación entre ambos tipos de aproximaciones desde un punto de vista operativo. Este hecho quedará meridianamente claro cuando abordemos el relato propio del tiempo de ejecución en próximos artículos.

Desde el punto de vista de lo que aquí nos ocupa, dentro del modelo dinámico, no es correcto afirmar que los objetos corresponden a un determinado tipo, ni que de manera global se organizan y diferencian por clases. Esto no es así, sencillamente porque no es necesario introducir estos factores como elemento característico. 

En el modelo dinámico, una vez que los objetos han sido obtenidos como consecuencia de un proceso constructivo típicamente basado en el uso de funciones factoría, resultan completamente indistinguibles unos de otros a no ser que sea a través de procesos introspectivos que bucean en la estructura morfológica de los mismos.

Comúnmente se tiende a pensar, que las funciones constructoras juegan un papel equivalente al de las clases dentro de este tipo de aproximación y, si bien la afirmación tiene algo de verdad, la idea es algo tramposa. En efecto, desde el punto de vista creacional, este tipo de funciones cubren los mismos propósitos que el de las clases. Incluso, es correcto afirmar que, por construcción, se da un mimetismo estructural y funcional entre todos los objetos que salen del mismo proceso de fabricación.

Pero las similitudes acaban ahí. Por un lado, los objetos así construidos, en tanto que se adscriben al modelo dinámico, son meros contenedores de agregación y su estructura puede evolucionar con el tiempo separándose de su morfología inicial conferida por la función constructora. Por otro lado, en el modelo estático las clases son el artefacto arquitectónico en base al cual se establece el modelo arquetípico que articula los procesos constructivos mientras que, en el modelo dinámico, las funciones constructoras recurren a objetos previamente generados para transferir las propiedades estructuras y funcionales deseadas a los nuevos objetos.

De acuerdo a esta idea, la construcción de objetos sobre modelos dinámicos conduce a un grafo de dependencias en las que, por diseño, unos objetos funcionan como modelo de referencia de otros objetos que, de manera bastante razonable, reciben el nombre de prototipos. En próximos artículos explicaremos que, de hecho, este es un mecanismo para dar soporte a mecanismos extensivos similares a los de herencia. Pero queremos aclarar en este punto, que el concepto de prototipo es, en términos generales, una idea mucho más general y no se encuentra específicamente vinculada al concepto de la herencia, sino que se refiere al hecho de que ciertas factorías hagan uso de objetos ambientales previamente creados como modelos de referencia para crear nuevos objetos.

## Conclusiones

A lo largo de este articulo hemos discutido el valor que los sistemas basados en tipos juegan en las arquitecturas de orientación a objetos propias del modelo estático. Y hemos hecho una discusión comparativa con respecto al enfoque que se articula en los sistemas propios del modelo dinámico.

En el modelo estático, las actividades de diseño consisten en realizar un esfuerzo sistemático y recurrente de realizar clasificaciones y encontrar los roles participantes que se requieren en el marco de cada colaboración. De esta manera, las clases, además se tener como misión la encapsulación de la lógica constructiva, son el activo fundamental que sirve al propósito de la cualificación semántica de cada objeto. Es decir, por el mero hecho de que su construcción es vehiculada a través el uso de una clase, cada objeto adquiere un tipo característico y queda adscrito a una familia de otros objetos que resultan morfológica y semánticamente miméticos.

Dentro del modelo dinámico, por el contrario, los objetos se conceptualizan como meros agregadores capacitivos generados a través del uso de funciones de fabricación. Pero, una vez atravesada la fase de construcción, estos objetos son semánticamente indistinguibles y solo pueden hallarse diferencias, si procede, a través del uso de actividades de introspección explícita.

Mientras que los modelos estáticos se basan en la creación de estirpes fuertemente jerarquizadas con respecto al modelo estructural prescrito a nivel de clase, en los modelos dinámicos tales estructuras no existen y lo que sí es frecuente es encontrar actividades de construcción basadas en el uso de otros objetos anteriores del sistema como prototipos. 

Esta diferenciación resulta bastante orgánica desde la experiencia del desarrollo ya que tanto la construcción jerarquizada basada en tipos como la relacional basada en transferencia de capacidades desde prototipo es una consecuencia del uso de clases y funciones dentro de cada modelo. Sin embargo, como describiremos en próximos artículos de esta serie estas diferencias tendrán un impacto directo en el comportamiento sistémico en ejecución.


