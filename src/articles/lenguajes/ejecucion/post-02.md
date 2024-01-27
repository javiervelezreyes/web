---
title  : La Dimensión Espacial
slug   : modelos-de-ejecucion-espacial
author : Javier Vélez
date   : Dic 2023
---

## Introducción

Los modelos de ejecución centrados en el eje espacial ofrecen una metáfora sistémica ambiental para explicar la manera en que se llevan a cabo los procesos de ejecución de código. Esta metáfora sirve de elemento interpretativo que permite dar un significado específico a cada constructo sintáctico del lenguaje en el marco del paradigma de programación al que pertenece.

En particular, un modelo de ejecución espacial describe cómo se produce la interpretación y evaluación del código a lo largo de la ejecución expresada en términos de un diálogo continuo y evolutivo con los recursos de máquina. De esta manera, cada uno de estos modelos dan sentido a los esfuerzos de programación como una forma de dirigir dicho diálogo.

Los dos modelos característicos dentro de este perímetro son la ejecución imperativa y la ejecución declarativa. Desde un punto de vista cultural, sendas aproximaciones han entrado frecuentemente en pugna dentro de la comunidad científica ya que los valores en intuición del primero entran en conflicto con la corrección verificadora del segundo.

A lo largo de este artículo entraremos a describir cada uno de estos modelos desde un punto de vista comparativo. Entendemos que el detalle de los mismos es de sobra conocido y cae fuera del alcance de este texto.

## Modelo de Ejecución Imperativa

Dentro del modelo imperativo, las actividades de ejecución son interpretadas como un proceso sistemático y finito por medio del cual un estado ambiental de máquina es progresivamente transformado desde una configuración inicial hasta una final. El resultado de la ejecución consiste, precisamente, en el estado que deja la máquina tras la terminación.

> **Modelo de Ejecución Imperativa.** El modelo imperativo ofrece una interpretación de la ejecución del programa en términos de un proceso sistemático, ordenado y finito de transformación del estado de máquina desde una configuración inicial a una final.

Los esfuerzos de desarrollo dentro de este modelo consisten en el diseño de algoritmos capaces de describir de manera precisa y no ambigua cada una de las operaciones de transformación que deben ser realizadas para mover el estado de la máquina desde su configuración inicial a la final.

La caracterización de dicho estado depende del modelo de abstracción al que se adscribe el lenguaje de programación asociado. Así, por ejemplo, en la programación estructurada dicho estado se expresa meramente en términos de variables locales y no locales, parámetros y valores constantes. En la orientación a objetos, por el contrario, dicho estado queda modulado adicionalmente a través de los mecanismos de ocultación y protección de información que proporciona la encapsulación.

Y es que esta conceptualización sistémica se ha utilizado frecuentemente para explicar el ejercicio de las actividades de desarrollo desde un punto de vista metodológico. En línea con lo anterior, suele decirse que la programación estructurada debe interpretarse como un encadenamiento alterno de almacenes y procedimientos en el que los almacenes persisten local y temporalmente estructuras de información que son transformadas por aplicación sistemática de los procedimientos presentes en la cadena.

De manera contrapuesta, la orientación a objetos suele describirse a lo largo del tiempo como una colección de colaboraciones entre objetos que producen efectos colaterales de cambio en el estado representado por cada uno de los objetos implicados. 

En el primer caso, tanto el algoritmo como el estado ambiental se encuentra centralizado. En el segundo se encuentra distribuido. Pero en esencia, el modelo de ejecución que subyace es el mismo. Con independencia del carácter centralizado o distribuido, el propósito de toda ejecución imperativa radica en un esfuerzo de transformación de estado.

Esta idea, no solo da forma a la manera que deben entenderse los esfuerzos de desarrollo, sino que, adicionalmente, ofrece un marco interpretativo alineado. En el modelo imperativo, cada fragmento de código es un algoritmo secuencial cuyo flujo de ejecución se puede ver alterado, a través del uso de sentencias de control de flujo iterativo o condicional, en función de los cambios del estado ambiental subyacente.

## Modelo de Ejecución Declarativa

El modelo de ejecución declarativa presenta un marco interpretativo dramáticamente diferente al anterior. Aunque este hecho es, consciente o inconscientemente, ignorado por muchos profesionales lo cierto es que induce una experiencia de desarrollo muy distinta.

Dentro de la ejecución declarativa, el código se interpreta como una especificación declarativa, no ambigua y formal que describe un modelo de comportamiento. Durante la ejecución, la especificación se pone en evaluación por aplicación de ciertos datos de entrada para obtener un resultado de salida.

> **Modelo de Ejecución Declarativa.** El modelo declarativo ofrece una interpretación de la ejecución del programa consistente en la evaluación de una especificación formal basada en declaraciones a partir de unos datos de entrada.

La especificación debe conformar un todo cohesivo. En ocasiones esta cohesión recae en las espaldas del desarrollador como es en el caso de la programación funcional donde deben articularse definiciones compositivas explícitas. En otras ocasiones, el propio entorno garantiza la cohesión como es en el caso de los modelos de reglas, lógica de predicados o restricciones. 

De acuerdo con esta descripción, la ejecución declarativa es un modelo fuertemente caracterizado por una ausencia de efectos colaterales. En efecto, cualquier aproximación declarativa debe ser interpretada como una canalización de transformaciones que toman un conjunto de parámetros de entrada y generan resultados a la salida.

Esta idea confronta de plano con la interpretación semántica del modelo imperativo en el que, por definición, el cuerpo algorítmico de una solución consiste, esencialmente, en articular un proceso de cambio ambiental sistemático del estado de la máquina. En los modelos declarativos, por el contrario, el estado ambiental directamente no existe o, por decir mejor, está expresado en término de una entrada formal paramétrica.

Esta conceptualización, frecuentemente nominalizada como elevación paramétrica, puede parecer apriorísticamente una falacia metodológica, pero lo cierto es que, al formalizar cada posible condición ambiental en términos paramétricos se transita de un entorno de ejecución inseguro al de uno reproducible y verificable, basado en los principios de inmutabilidad y transparencia referencial.

## Conclusiones

A lo largo de este artículo hemos descrito los dos modelos de ejecución característicos dentro de la dimensión espacial, el modelo imperativo y el modelo declarativo. Estas aproximaciones resultan tan divergentes con respecto al modelo de interpretación propuesto que han dado lugar a dos escuelas de pensamiento divergente en relación a cómo deben ser conceptualizados los esfuerzos de desarrollo.

Mientras que el modelo imperativo se centra en describir la ejecución como un proceso sistemático y finito de transformación del estado ambiental de la máquina por aplicación de un cuerpo algorítmico, el modelo declarativo niega la existencia de dicho estado y advierte los riesgos que supone llevar a cabo actividades de transformación que induzcan efectos colaterales que impacten en la reproducibilidad del código.

Desde esta perspectiva comparativa, ambas aproximaciones parecen fuertemente irreconciliables. Y de hecho, en efecto es así. Cualquier enfoque puramente declarativo, como el de la programación funcional, resulta dramáticamente incompatible con aproximaciones imperativas como las propias de la programación estructurada o la orientación a objetos.

La fuerte confusión en este sentido proviene del hecho de que muchos lenguajes de programación incluyen constructos y conceptualizaciones propias de un paradigma sobre la base de modelos de ejecución inadecuados. Tal vez esto se hace como un ejercicio de mercadotecnia o, lo que es aún peor, se trata de consecuencia de la ambición expansionista que tienen los lenguajes de intentar ser lo que no son en base a parecerse a otros lenguajes populares.

Sin embargo, lo cierto es que este hecho está causando fuerte confusión dentro de la masa de desarrolladores. Pensar que se está programando en funcional cuando utilizamos operaciones map/reduce de orden superior sobre la base de un modelo imperativo como el de JavaScript es no tener las cosas muy claras. 

Espero que este texto haya ayudado a aclarar al menos dos ideas fundamentales. En primer lugar, que todo modelo de abstracción debe quedar soportado por un modelo de ejecución asociado que le dota de un marco interpretativo. Y en segundo, que no existe una correspondencia biunívoca entre modelos de ejecución y paradigmas de programación, sino que un mismo modelo es, frecuentemente, compartido o consumido por varios paradigmas.
