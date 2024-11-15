---
title  : Ejecución Asíncrona
slug   : ejecucion-asincrona
author : Javier Vélez
date   : Ene 2024
---

## Introducción

La programación asíncrona es un modelo de construcción que apunta a resolver ciertos aspectos característicos que se dan durante la ejecución del software dentro de la dimension temporal. Sin embargo, dada la relevancia que está cobrando en los últimos tiempos dentro de la comunidad el uso de este tipo de aproximaciones, parece conveniente hacer una revisión exhaustiva acerca de lo que es esta modalidad de desarrollo y de cada una de las variantes que existen y se encuentran soportadas en los lenguajes de programación.

A lo largo de este artículo trataremos de hacer una revisitación más exhaustiva acerca del concepto de asincronía y presentaremos cada uno de los modelos de desarrollo que serán objeto de estudio a lo largo de los sucesivos artículos dentro de esta serie.

Este recorrido no solamente resulta de interés por cuanto el diseño de soluciones asíncronas es una actividad de gran demanda hoy en dia dentro de las actividades de desarrollo sino porque, además, sus constructos sirven de apoyo para la edificación de otros modelos de ejecución que en los que profundizaremos en series subsiguientes.

## Ejecución Asíncrona

El uso de la programación imperativa para la construcción de soluciones digitales de software siempre ha sido la aproximación dominante dentro de la comunidad. Tal vez ello es debido a su alto grado de sencillez y mimetismo respecto a cómo razona el cerebro humano. Un algoritmo imperativo es una secuencia ordenada de instrucciones que se ejecutan consecutivamente y que tienen por objetivo transformar un estado inicial de la máquina hasta alcanzar un estado final.

Dentro de este modelo existen sentencias que permiten alterar el flujo normal de control, pero este hecho no complica el razonamiento que se aplica sobre el desarrollo. Al introducir abstracciones algorítmicas como elemento de descomposición modular – ya sean éstas funciones o procedimientos –  se impone que su ejecución sea completamente bloqueante con respecto al flujo del programa. Es decir, cada procedimiento no debe devolver el control al programa diamante hasta que se haya alcanzado su terminación.

Si bien este comportamiento ayuda enormemente a mantener la simplicidad en los procesos de razonamiento durante el desarrollo, de cara al rendimiento, el carácter bloqueante de las funciones puede convertirse en un verdadero problema. Si sabemos que determinada función puede llegar a ser lenta en su ejecución hasta el punto de llegar a comprometer el rendimiento de la solución, tal vez convenga que esta sea lanzada en paralelo para conceder así continuidad del flujo normal del programa.

> **Ejecución Asíncrona**. En el modelo de ejecución asíncrona, algunas funciones presentan un comportamiento no bloqueante de manera que devuelven instantáneamente el control al programa llamante.

Las funciones de esta naturaleza, que devuelven de manera instantánea el control al programa llamante, se llaman funciones no bloqueantes. El desarrollo de actividades de programación asíncrona, en este sentido, consiste en encontrar, dentro de un programa, los puntos en los que determinadas abstracciones algorítmicas puedan ser definidas como funciones no bloqueantes para ser lanzadas en paralelo permitiendo así que el flujo normal del programa siga con su ejecución.

En efecto, como venimos explicando, al identificar todos los espacios algorítmicos donde es posible aplicar actividades de fragmentación para la ejecución paralela, conseguiremos alcanzar mayores cotas de rendimiento en relación a la dimensión temporal. 

## Modelos de Asincronía

La realización de actividades de desarrollo basadas en programación asíncrona consiste, como hemos explicado, en identificar aquellos fragmentos algorítmicos que pueden ser lanzados a ejecución de manera paralela devolviendo el control de manera instantánea el programa llamante. Llevar a cabo esta actividad es relativamente sencillo para aquellos casos en los que la función o procedimiento identificada como no bloqueante presenta un comportamiento autónomo. Es decir, es capaz de realizar su procesamiento sin necesidad de devolver un valor resultante tras su terminación. Sin embargo, en aquellos otros casos en los que las funciones deban devolver algún resultado para que sea retomado por la secuencia principal de ejecución, el diseño asíncrono se complica. 

En efecto, una vez que cierta función o procedimiento ha abandonado el flujo normal de control para ejecutarse de forma paralela resulta imposible que lo retome más adelante tras su terminación. La única solución en estos casos es proporcionar, en la secuencia de llamada, la lógica de continuación suficiente que pueda ser utilizada para procesar subsiguientemente el valor de retorno de la función.

<figure>
  <img src="/images/activity/articles/lenguajes/asincronia/post-01.01.png" 
       alt="Modelos de Asincronía">
  <figcaption>Modelos de Asincronía.</figcaption>
</figure>

Para llevar a cabo esta idea, se han desarrollado a lo largo del tiempo diferentes técnicas que ofrecen mecanismos alternativos de transferir la lógica de continuidad a las funciones no bloqueantes. Si una función o procedimiento ya es autónoma por diseño, el uso de estas técnicas carece de valor. Pero si no lo es, la aplicación de alguna de ellas es una forma de conferirle el grado oportuno de autonomía para su ejecución paralela.

El esfuerzo de cada una de estas técnicas no solamente persigue dar respuesta a las necesidades de ejecución asíncrona de funciones por medio de la inyección de lógica de continuación sino hacerlo de tal forma que se restaure la sensación de secuencialidad que se pierde al introducir asincronía dentro de un cuerpo algorítmico. Y es que, en efecto, cuando se opera con funciones no bloqueantes cuya invocación crea flujos de ejecución paralelos e independientes del programa principal el razonamiento algorítmico se vuelve mucho más complicado. Es por este motivo, que las técnicas aplicadas se convierten en verdaderos modelos de desarrollo y que la ejecución asíncrona pasa a ser un marco de diseño del que los programadores deben ser conscientes. 

A lo largo de esta serie describiremos cada uno de los modelos de desarrollo propuestos en este sentido. Este recorrido lo haremos en el orden adecuado para ilustrar las contribuciones de valor aportadas dentro de cada modelo para restaurar la experiencia de desarrollo secuencial. Si bien somos conscientes de que, se trata meramente de actividades de recubrimiento arquitectónico y azúcar sintáctico, es posible reconocer que los objetivos con la última de las aproximación están bastante alcanzados.
 
## Conclusiones

A lo largo de este artículo hemos presentado la asincronía, que en una serie anterior ya ubicamos como perteneciente a la dimensión temporal dentro de los principales modelos de ejecución. La principal preocupación de este modelo consiste en lograr reducir la latencia por medio de la identificación de fragmentos algorítmicos, procedimientos o funciones, no bloqueantes que puedan ser lanzados en paralelo y devuelvan instantáneamente el control al programa llamante.

Para los casos en los que estas funciones son completamente autónomas esta suerte de transformaciones resulta trivial. Sin embargo, en aquellos casos en los que las funciones generan un valor de retorno que debe ser procesado por el flujo principal de ejecución, la resolución asíncrona se complica. Aquí es necesario proporcionar, en la secuencia de llamada, toda la lógica de continuación que sirva para realizar dicho procesamiento. Este simple hecho derrumba toda la sencillez que reclamábamos al principio acerca del enfoque imperativo y convierte a la ejecución asíncrona en un aspecto de desarrollo para el que se requiere idear modelos eficaces que resuelvan este tipo de ejecución, pero a la misma vez restauren la sensación de secuencialidad de la aproximación imperativa.

A lo largo de esta serie, presentaremos cada uno de los principales modelos de  asincronía que, a este respecto, han sido propuestos hasta la fecha. Este recorrido será hecho de manera convenientemente ordenada para revisar en cada uno de ellos,  tanto la propuesta de valor experiencial mejorada como el sustrato tecnológico en el que se apoya.
