---
title  : La Dimensión Volumétrica
slug   : modelos-de-ejecucion-volumetrica
author : Javier Vélez
date   : Dic 2023
---

## Introducción

La dimensión volumétrica constituye el último eje sobre el que pivota el marco conceptual del que nos hemos servido a lo largo de esta serie para describir los modelos de ejecución. En particular, sobre esta dimensión se considera la manera en la que el código puede quedar desplegado en diferentes nodos de red para su uso y explotación

Desde esta perspectiva - y también de manera coincidente en atención a un punto de vista histórico - es adecuado describir dentro de este eje dos aproximaciones arquitectónicas contrapuestas que conforman modelos de ejecución divergentes. Nos estamos refiriendo a los modelos de ejecución centralizada y distribuida.

A lo largo de este último artículo de la serie sobre modelos de ejecución realizaremos una descripción comparada de los mismos que sirva para entender las diferencias entre ambos y la conveniencia de uno y otro en diferentes contextos de problema. 

Como suele ser cierto para el resto de los casos que hemos presentado a lo largo de esta serie, cada modelo recoge una colección de diferentes aproximaciones en el plano de la arquitectura atendiendo a espacios de preocupación diferentes. Sin embargo, desde un punto de vista paradigmático, las posibilidades sobre el eje volumétrico se sintetizan en las dos alternativas complementarias y mutuamente excluyentes que recogemos a continuación.

## Modelo de Ejecución Centralizada

Lo más directo e intuitivo cuando desarrollamos soluciones digitales es pensar en un despliegue del código centralizado donde toda la lógica algorítmica quede contenida dentro de un mismo nodo de ejecución. Al referirnos en este punto a este término puede pensarse en una única unidad de cómputo operada en la nube y autocontenida, como es lo habitual hoy en día, pero también en cualquier arquitectura hardware que de soporte a la ejecución de un único proceso.

Es importante aclarar este punto porque, la ejecución centralizada, a diferencia de la ejecución distribuida, no requiere de una infraestructura de recursos en red que den soporte a procesos de comunicación entre los distintos nodos de una red, ya que como venimos explicando este modelo considera una sola unidad de procesamiento.

> **Modelo de Ejecución Centralizada.** En el modelo de ejecución centralizada todo la base de código se encuentra desplegada sobre una única unidad de procesamiento de manera que la composición entre abstracciones requiere procesos de comunicación interna.

Con este marco de ejecución, el código encuentra los elementos y abstracciones construidos durante el desarrollo, desplegados localmente sobre los recursos de cómputo de la única unidad en ejecución. La computación centralizada es, de acuerdo a esta idea, la mejor estrategia de soporte a la ejecución para hacer frente a modelos de solución ideados como aproximaciones monolíticas y autocontenidas que, si bien parecen haber caído injustamente en desgracia en los últimos tiempos, son una respuesta excepcional para la mayoría de las soluciones.

Y es que no debemos olvidar que las arquitecturas de esta naturaleza no son necesariamente cerradas e inamovibles. La desgraciada connotación peyorativa que comporta este término es algo que no le ha hecho mucha justicia a este tipo de diseños. Una solución monolítica está frecuentemente construida como una colección de artefactos que operan orgánicamente de manera modular y extensible.  Desde el punto de vista del rendimiento, la centralización, lejos de ser una desventaja, es una gran virtud ya que cualquier actividad de descomposición modular del código llevada a cabo como decisión de diseño arquitectónico no tiene un impacto directo en el tiempo de respuesta en ejecución como sí ocurre en la computación distribuida. 

De hecho, algunos de los modelos de abstracción más populares de construcción de software se apoyan inherentemente en estrategias de alta descomposición modular. Tal es el caso de la construcción de software basada en tipos abstractos de datos o la consolidada orientación a objetos donde se dice que la lógica se encuentra virtual y conceptualmente distribuida entre cada uno de los objetos que participan en una colaboración. 

Este hecho no impacta en rendimiento gracias a la asunción de que los objetos de la solución son abstracciones que operan bajo una misma unidad de red y permite articular un relato en la que cada operación de un algoritmo puede asociarse a la familia de datos con la que opera en vez de encontrarse concentrado en un solo procedimiento como es típico de las construcciones estructuradas.  

A lo largo de la historia se reconocen algunos intentos en los que el carácter conceptualmente distribuido de la orientación a objetos se ha extendido al ámbito de la computación distribuida y, en línea con lo que decimos, el resultado ha sido un estrepitoso fracaso. El camino de lo distribuido no es ese como discutiremos a continuación.

## Modelo de Ejecución Distribuida

El modelo de ejecución distribuido constituye la aproximación de contrapunto sobre el eje de descripción volumétrico. En este tipo de soluciones, las arquitecturas conciben el desarrollo de código como una familia de procesos que, desplegados sobre un conjunto de nodos de red, son capaces de dar respuesta a la ejecución del programa a través de actividades comunicativas desarrolladas sobre la red asociada.

El desarrollo de modelos de ejecución basados en una distribución de código sobre diferentes unidades de cómputo en la red tiene su sentido si se considera que, sobre cada unidad de procesamiento, se coloca lógica de negocio que será potencialmente reutilizada por diferentes casos de uso o líneas algorítmicas.

> **Modelo de Ejecución Distribuida.** En el modelo de ejecución distribuida la base de código se encuentra desplegado sobre un conjunto de unidades de procesamiento conectados en red de manera que la composición entre abstracciones requiere comunicaciones entre distintos nodos de red.

Es así como nacen las arquitecturas de orientación a servicios interpretadas en cada una de sus formas posibles, ya sean familias de servicios, arquitecturas SOA, arquitecturas de microservicios o aproximaciones serverless. En cada uno de estos arquetipos de arquitectura se aplican criterios de descomposición del código diferente atendiendo a dar respuesta a preocupaciones alternativas y ello conduce a estrategias de distribución distintas.

Sin embargo, ha de tenerse en cuenta que con este nuevo enfoque las actividades de diseño arquitectónico se complican sobre manera debido a que las comunicaciones que se producen a nivel de red para dar respuesta a las necesidades de conexión compositiva entre la lógica desplegada sobre diferentes unidades de cómputo presentan un tiempo de latencia considerablemente mayor al de aquellas comunicaciones que se desarrollar internamente en local sobre una misma unidad de red.

En este sentido, dentro de este tipo de arquitecturas, pueden reconocerse dos categorías o niveles diferenciables de composición. De un lado está aquella que implica procesos de comunicación entre abstracciones que se producen dentro del mismo nodo red y de otro aquella que requiere una comunicación entre abstracciones residentes en distintas unidades de procesamiento dentro de la red. 
 
Y lo cierto es que, pese a que muchos marcos de desarrollo han llevado a cabo nada desdeñables esfuerzos para ocultar las diferencias entre estos dos tipos de comunicación, lo cierto es que es algo que debe ser tenido en cuenta por los desarrolladores en sus actividades de construcción de código. En efecto, dado que la red imputa unos ordenes de magnitud mayores en los procesos de comunicación, las arquitecturas así diseñadas y las técnicas de desarrollo asociadas deben ser diferentes para cada caso. 

## Conclusiones

A lo largo de este último artículo hemos descrito el eje dimensional volumétrico que pone punto final al análisis sobre modelos de ejecución que hemos desarrollado durante esta serie. En particular, hemos revisado con ánimo comparativo los dos tipos de arquitectura que, desde este punto de vista resultan alternativos y mutuamente excluyentes.

En los modelos de ejecución centralizada las arquitecturas se expresan como una única base de código donde toda la lógica de ejecución se despliega sobre una única unidad de cómputo. Este tipo de estrategias resultan las más adecuadas para la mayor parte de problemas en las que se pretende dar respuesta a una colección de casos de uso relacionados cuyas abstracciones en el espacio de la solución se benefician de compartir un mismo espacio local de recursos.

Como contrapunto a este tipo de estrategias, diferentes abstracciones o composiciones algorítmicas pueden distribuirse estratégicamente sobre cada uno de los nodos conectados de una red de comunicaciones. Este tipo de arquitecturas pretenden maximizar las oportunidades de reutilización que puede hacerse de cada esfuerzo de desarrollo, especialmente en aquellos escenarios donde la complejidad volumétrica del espacio del problema es considerablemente elevada. 

En este segundo tipo de modelos de ejecución, los criterios de descomposición que conducen a una estrategia de distribución de código determinada pueden ser muy diferentes y ello ha dado lugar a diferentes arquetipos de arquitectura dentro de la computación distribuida. Lamentablemente, como ocurre en otros perímetros, esta área de conocimiento está llena de imprecisiones y debates confusos lo que no ha hecho más que a generar falsas ideas y prejuicios que en nada ayudan en el desarrollo de la profesión.

Que las arquitecturas monolíticas centralizadas son un arquetipo de solución equivocado y perjudicial del que haya que huir a toda costa es un reclamo tan recurrente como poco argumentado. Asimismo, ha habido un abrazo ciego y modístico a determinados tipos de soluciones, inherentemente más complicadas, como es el caso de las arquitecturas de microservicios incluso a costa de un ataque indiscriminado a las arquitecturas de orientación servicios.

Me caben serias dudas que aquellos acérrimos y entusiastas seguidores de los modelos arquitectónicos de la computación distribuida aciertan a entender las diferencias entre un modelo de servicios, una arquitectura SOA, una de microservicios o de serverless. Y más aún dudo de si saben justificar argumentativamente sus decisiones cuando abrazan unos u otros tipos de arquitecturas. 

En fin, el objetivo de esta serie, y de este artículo en particular, ha sido solo hacer una revisión comparativa de los modelos de ejecución alternativos dentro del eje volumétrico. Tal vez, hablar de los distintos tipos de arquitecturas - y arrojar un poco de luz sobre sus justificantes - que se despliegan dentro del ámbito de la computación distribuida sea cosa de una serie diferente.
