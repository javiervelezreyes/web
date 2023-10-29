---
title  : Taller de Pogramación Funcional
slug   : taller-de-programacion-funcional
author : Javier Vélez
date   : Ene 2016
---

La programación funcional está cogiendo fuerte tracción en los últimos años dentro de la comunidad de desarrollo. Tal vez ello se deba al surgimiento de nuevas arquitecturas que demandan cotas de escalabilidad, resistencia y flexibilidad en el marco de soluciones centradas en procesos de transformación. Pero más allá de una simple moda, como trataremos de mostrar en este taller, la programación funcional conduce a soluciones de código robustas, versátiles y expresivas que difícilmente son comparables con las propias de la orientación a objetos.

Además JavaScript, como la mayoría de los lenguajes de scripting es un lenguaje idiomático que invita a pensar en términos funcionales. De hecho muchas veces, cuando programamos en Javascript, desarrollamos soluciones funcionales casi sin darnos cuenta. Pero para trabajar correctamente en el marco de este paradigma debemos saber, qué es exactamente la programación funcional, cuáles son sus ventajas y principios fundacionales, de qué mecanismos se sirve, qué técnicas de programación se utilizan, qué patrones de diseño funcional existen a nuestra disposición y qué estilos arquitectónicos emergen.

Este taller trata de dar una introducción a la programación funcional que comienza desde lo más básico y va pasando progresivamente hacia conceptos más avanzados. A continuación se resume una relación del programa de contenidos para que os hagáis una idea de  lo que se va a abordar.

- Diseño de Funciones I. Recursión
- Diseño de Funciones II. Inmersion
- Orden Superior I. Famila map & reduce
- Orden Superior II. Evaluación Partial
- Orden Superior III. Closures & Retentión Léxica
- Composición I. compose & sequence
- Composición II. Inversión de control
- Composición III. Streams
- Diseño sin Estado I. Fundamentos
- Diseño sin Estado II. Mónadas
- Conceptos Avanzados I. Optimización
- Conceptos Avanzados II.Inmutabilidad

Todos estos temas se abordan en 12 ficheros `.js` dentro del repositorio [https://goo.gl/YwXtkV] que se encuentran en la carpeta `code/`. Para falilitar la realización y autoevaluación, el material de este taller se ha dividido en dos carpetas. En  `code/problems` puede encontrarse una descripción de cada ejercicio planteado junto con una plantilla de código que ayuda a escribir la solución y probarla. En la carpeta `code/solutions` se ofrece una propuesta de solución para cada ejercicio planteado. Se anima al lector a no consultar la solución hasta haber intentando cada ejercicio por si mismo.


### Parte I. Recursividad & Inmersión
Comenzamos el desarrollo de este taller presentando los constructos sintácticos propios de la programación funcional que ofrece JavaScript: funciones, invocación inmediata y el operador condicional como razonador por casos. Presentamos las claves esenciales del diseño de funciones recursivas y estudiamos las técnicas de abstracción basadas en inmersión por parámetros de recorrido y de acumulación.

<iframe class="video" src="https://player.vimeo.com/video/152207268?title=0" allowfullscreen></iframe>

### Parte II. Familia Map / Reduce & Evaluación Parcial
Continuamos con algunos problemas de diseño recursivo basado en inmersión y presentamos la familia de funciones abstractas map / reduce. Más que usar las que nativamente implementa JavaScript desde ES5, nosotros primero las implementamos para conocer su anatomía interna y después las aplicamos en problemas. Finalmente presentamos y ejercitamos la evaluación parcial.

<iframe class="video" src="https://player.vimeo.com/video/152207269?title=0" allowfullscreen></iframe>

### Parte III. Clausuras & Retención Léxica
Como demostración de que en JavaScript gran parte de los problemas de algoritmia pueden resolverse de manera netamente funcional revisamos una colección de problemas que tienen que ver con evaluación parcial y abstracción funcional mediante el uso de clausuras y retención léxica.

<iframe  class="video" src="https://player.vimeo.com/video/154318101?title=0" allowfullscreen></iframe>

### Parte IV. Streams & Composición
Para terminar, revisamos los conceptos de composición y los aplicaremos al diseño de problemas basados en Streams que hacen uso de iteradores y generadores. También haremos un repaso de los principales tópicos avanzados en relación a la optimización de código en tiempo y memoria y al diseño de estructuras de datos funcionales con propiedad de inmutabilidad.

<iframe  class="video" src="https://player.vimeo.com/video/154318102?title=0" allowfullscreen></iframe>