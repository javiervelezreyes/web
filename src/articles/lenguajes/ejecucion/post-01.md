---
title  : Modelos de Ejecución
slug   : modelos-de-ejecucion
author : Javier Vélez
date   : Dic 2023
---

## Introducción

En una serie anterior, presentamos los diferentes paradigmas de programación en base a sus modelos de abstracción característicos. Allí explicamos que un modelo de abstracción se describe siempre en términos del tipo de artefacto arquitectónico que se utiliza y de los mecanismos de soporte que se aplican para crear realidades compositivas funcionales y operativas.

Sin embargo, caracterizar de esta manera en exclusiva los paradigmas de programación ha sido una actividad tan frecuente como equivocada dentro de la literatura. Porque si bien los modelos de abstracción son una dimensión diferencial de los mismos, lo son igualmente y de manera complementaria, los modelos de ejecución asociados. Cada lenguaje de programación, queda descrito tanto por un modelo de abstracción como por un modelo de ejecución que ofrece una interpretación semántica a las construcciones del programa.

A lo largo de esta serie visitaremos los principales modelos de ejecución existentes vinculados a los paradigmas de programación y cómo estos inducen una experiencia de desarrollo característica dentro de cada paradigma. Incluso explicaremos cómo en la realidad de las actividades de desarrollo profesionales es frecuente compatibilizar varios modelos de ejecución para dar respuesta a las necesidades propias de cada espacio de problemas.

## Modelos de Ejecución

Cada paradigma de programación se describe, esencialmente, en términos de los artefactos arquitectónicos que utiliza y de la forma en la que éstos se combinan compositivamente para crear una armadura de soporte a todas y cada una de las responsabilidades que se circunscriben al problema objetivo a resolver. Sin embargo, de manera complementaria, un paradigma también debe definir cómo estos activos entran en operación durante la ejecución. Esto es lo que constituye la descripción del modelo de ejecución.

La descripción del modelo de ejecución de un paradigma es una tarea muy necesaria para poder entender cómo desarrollar actividades de construcción de software dentro del mismo. No en vano, cada constructo sintáctico particular recibe una interpretación semántica específica en términos del modelo de ejecución subyacente. Demos una definición formal de esta idea.

> **Modelo de Ejecución**. El modelo de ejecución de un paradigma de programación describe la forma en la que se llevará a cabo la computación del código fuente durante la ejecución del programa. De esta forma, este modelo permite conocer cómo debe interpretarse cada constructo sintáctico particular del lenguaje en términos de su semántica operacional asociada.

En esencia, y según lo explicado, cada paradigma de programación, y por extensión cada lenguaje de soporte asociado, parte del uso de un modelo de ejecución propio en base al cual se expresa la interpretación semántica operacional de cada una de sus construcciones sintácticas. El modelo de ejecución de base de un paradigma resulta, de esta manera, un elemento fundamental para caracterizarlo y, como explicábamos antes, es fundamental para entender las actividades de desarrollo de código expresadas sobre el mismo.

Por poner un simple ejemplo que ilustre lo anterior, podemos decir que las sentencias de control de flujo más convencionales como `if` o `while` sólo admiten una interpretación posible dentro del modelo de ejecución imperativa donde un programa se concibe como una secuencia ordenada de instrucciones capaces de cambiar el estado de la máquina durante la ejecución. Este tipo de sentencias carece de sentido, sin embargo, en otros paradigmas de corriente declarativa donde un programa se explica cómo una declaración formal de composiciones funcionales.

Y de manera similar a como ocurría con los modelos de abstracción, los modelos de ejecución suelen ser heredados y extendidos de un paradigma de programación al siguiente. Por ejemplo, es correcto afirmar que el modelo de ejecución imperativo, siendo propio de la programación estructurada, también se aplica a otros paradigmas posteriores como la orientación a objetos, la orientación a componentes o la orientación a servicios. 

Sin embargo, si bien todo lo anterior es cierto, no lo es menos que dentro de un mismo paradigma pueden concurrir en uso diferentes modelos de ejecución. En primer lugar, por el hecho de que el uso de determinado modelo de ejecución puede ser conveniente para determinado tipo de problema. Por ejemplo, para un problema con fuerte flujo interactivo el modelo reactivo puede ser lo adecuado mientras que para un problema de alto grado de ataque concurrente el modelo de ejecución concurrente parece ser lo idóneo. Pero también es posible hacer un uso simultáneo de diferentes modelos de ejecución. Este hecho es frecuente cuando se pretende aprovechar en sinergia las diferentes capacidades inherentes propias de cada modelo. Por ejemplo, podemos trabajar en imperativo, haciendo uso de programación asíncrona en un espacio de computación distribuida. 

### Ejes Dimensionales

El uso simultáneo de diferentes modelos de ejecución dentro de un mismo paradigma de programación se explica por el hecho de que, con frecuencia, cada modelo de ejecución viene a proporcionar una aproximación diferente en la forma en la que se interpreta y ejecuta el código. Sin embargo, dicha interpretación no siempre es incompatible con la que proporcionan otros modelos de ejecución. 

Si bien, como explicamos, no todos los modelos de ejecución son mutuamente incompatibles, sí que existen ciertas restricciones en relación a su aplicación conjugada que deberían tenerse en cuenta. Hacer una descripción detallada de ese tipo de restricciones resultaría un tanto complejo y prematuro en este punto. Sin embargo, para arrojar un poco de luz en este sentido, sí que podemos proporcionar un espacio de descripción característico que ayude a entender el propósito que persigue cada modelo de ejecución y la relación específica que tienen unos con otros. 

<figure>
  <img src="/images/articles/lenguajes/ejecucion/post-01.01.png" 
       alt="Paradigmas de Construcción de Software">
  <figcaption>Ejecución de Software</figcaption>
</figure>

Los modelos de ejecución existentes pueden clasificarse en función del perímetro de preocupación al que contribuyen. De acuerdo a esta idea, es posible establecer tres ejes dimensionales que, de manera ortogonal, conforman un espacio de análisis característico. En particular, estas dimensiones son las siguientes:

- **Dimensión Espacial.** Los modelos de la dimensión espacial se preocupan por ofrecer un marco conceptual que permita explicar como se produce la ejecución del código de un programa en términos de consumición de memoria y procesos de transformación. Dentro de este perímetro compiten principalmente las interpretaciones imperativas que han adquirido muchos modelos de abstracción y las interpretaciones declarativas que han quedado culturalmente reservadas al paradigma de programación funcional y lógica.

- **Dimensión Temporal.** Los modelos de la dimension temporal describen maneras alternativas de desarrollar la ejecución del código a lo largo del tiempo para hacer frente a diferentes tipos de problemas. Asi, la ejecución asíncrona permite definir operaciones no bloqueantes para aumentar el rendimiento de la máquina. La ejecución concurrente resuelve problemas en las que multiples agentes cooperan o compiten en un espacio de recursos compartidos. La ejecución paralela se ocupa de fragmentar un problema para ejecutar cada fragmento de forma simultánea. Y la ejecución reactiva permite construir sistemas con una compleja lógica de interacción.

- **Dimensión Volumétrica.** Finalmente, en la dimensión volumétrica entran los modelos de ejecución que determinan cómo debe ser distribuido el código en ejecución en diferentes nodos de operación. Dentro de este perímetro se diferencia la computación centralizada de la computación distribuida. En la primera, todo el flujo de ejecución se desarrolla dentro de una misma unidad de operación mientras que en la segunda diferentes nodos realizan ejecuciones simultáneas que luego son coordinadas por medio de protocolos de comunicación en red.

La caracterización en tres ejes dimensionales que acabamos de presentar es un primer punto para aclarar la naturaleza y pragmática de uso de los diferentes modelos de ejecución en uso dentro del software. Sin embargo, debemos advertir que, descrito así, quizás haya una cierta tentación a pensar que la definición de una arquitectura particular consiste en la elección de un modelo de ejecución dentro de cada dimensión. Nada más lejos de la realidad. Dentro de una misma dimensión es posible hacer uso simultáneo de diferentes modelos.

En la dimensión espacial, el modelo de bajo nivel, imperativo y declarativo sí que resultan mutuamente excluyentes. En la dimensión temporal, sin embargo, todos los modelos de ejecución pueden entrar en uso de forma simultánea. De hecho, algunos de ellos hacen uso de primitivas que se definen en el marco de otros. Por ejemplo, la programación concurrente y paralela hace uso de primitivas de sincronización basadas en promesas propias de la programación asíncrona. A su vez, la programación reactiva frecuentemente también define operaciones asíncronas que deben ser reguladas a través de mecanismos propios de primitivas asíncronas.

Afortunadamente hacer una descripción teórica como la que estamos haciendo en estas líneas de los modelos de ejecución existentes es mucho más complejo y confuso que familiarizarse con cada uno de ellos y operar de manera natural. A lo largo de los diferentes artículos que conforman esta serie, se entenderá en profundidad, la pragmática particular de uso de cada modelo y cómo pueden conjugarse apropiadamente en su uso.

### Planos de Actividad

Aunque hacer una revisión de la relación por pares que se da entre cada uno de los ejes dimensionales del espacio característico de modelos de ejecución no es un elemento indispensable en las actividades de diseño y desarrollo de programas, sí que resulta interesante abordar esta discusión en el plano teórico. 

Describir las relaciones que se dan entre lo espacial, lo temporal y lo volumétrico nos permitirá entender cómo debe interpretarse semánticamente el espacio de caracterización que hemos presentado en este artículo. En particular, es posible diferenciar, en este sentido, tres planos de actividad complementarios formados por el corte de cada par de ejes dimensionales.

- **Plano de Consumición.** El plano de consumición está formado por el corte entre la dimensión espacio y tiempo. Dentro de este espacio se describe la forma en la que un determinado modelo de memoria es consumido a lo largo del tiempo durante la ejecución. Por ejemplo, en el caso de la programación imperativa un algoritmo es ejecutado en el tiempo de manera secuencial por medio de la aplicación de transformaciones consecutivas sobre el mapa de memoria mientras que en el caso de la programación declarativa un conjunto de declaraciones funcionales es articulada compositivamente sobre la memoria para alcanzar una respuesta al problema.

- **Plano de Despliegue.** El plano de despliegue está formado por el corte entre la dimensión espacial y volumétrica. En este sentido, dentro de este perímetro de actividad, se describen todas las operaciones que se producen durante el tiempo de ejecución relativas a cómo la memoria se distribuye entre una topología de nodos capaces de ejecutar fragmentos del código fuente. Por ejemplo, en un modelo de Grid Computing el plano e despliegue describe como la memoria es operada y consumida por cada uno de los nodos de la red.

- **Plano de Desarrollo.** Finalmente, el plano de desarrollo es el formado por el corte entre la dimensión temporal y volumétrica. Dentro de esta área se circunscriben todas las actividades que se producen entre las unidades de computación a lo largo del tiempo. Por ejemplo, en un modelo centralizado la descripción de este plano corresponde a la arquitectura clásica de Von Newman mientras que en un modelo distribuido hablaríamos de cómo se producen las comunicaciones entre los distintos modos de red a lo largo del tiempo de ejecución.
 
## Conclusiones

Los paradigmas de programación que fueron descritos en una serie anterior fueron caracterizados en términos de los diferentes modelos de abstracción subyacente con los que operan. A lo largo de esta serie hicimos un exhaustivo recorrido en relación a la programación estructurada, la programación funcional, la programación orientada objetos, la programación orientada componentes y la programación orientada a servicios. Y esto nos permitió conocer cuáles son los artefactos característicos en uso dentro de cada paradigma y como estos se articulan compositivamente entre sí para dar respuesta a los problemas objetivos.

En este artículo hemos querido hacer incidencia en que, más allá de una caracterización basada en modelos de abstracción, todo paradigma de programación debe caracterizarse, adicionalmente, en términos de su modelo de ejecución subyacente. En efecto, para poder llevar a cabo actividades de desarrollo sobre un paradigma debemos entender su modelo de ejecución asociado ya que, a la postre, cada constructo sintáctico utilizado sólo puede interpretarse en términos de la semántica operacional definida en el marco de este modelo.

A lo largo de esta serie, haremos una revisión exhaustiva de los diferentes modelos de ejecución que existen vinculados a los procesos de construcción del software. Este esfuerzo será realizado recorriendo, de manera sistemática, cada uno de los modelos que hemos presentado aquí posicionados sobre el marco organizativo de tres ejes dimensionales. Espero que disfruten de la aventura.
