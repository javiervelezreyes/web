---
title  : Ejecución Reactiva
slug   : ejecucion-reactiva
author : Javier Vélez
date   : Marzo 2024
---

## Introducción

Generalmente cuando pensamos en el software nos viene a la cabeza la idea de un único flujo de instrucciones que se desarrolla de manera secuencial a largo del tiempo. Sin embargo, como ya hemos señalado con anterioridad, esta aproximación es solo una de las alternativas dentro de los modelos de ejecución.

En la programación reactiva, es habitual distribuir una colección de fragmentos de código para que se disparen a ejecución cuando se encuentren determinadas condiciones ambientales. Si se quiere, dentro de este modelo se puede distinguir entre dos tipos de elementos. En primer lugar, las señales, artefactos sujetos a una atención continua y en segundo lugar las reacciones, activos que expresan cierta lógica que debe lazarse a ejecución cuando se alcanzan determinadas condiciones ambientales expresadas en base a las señales. 

Dentro de este contexto, las arquitecturas son las encargadas de mantener un entramado transparente de coordinación entre ambos tipos de elementos. Y en este sentido son diferentes las estrategias que se han desarrollado para dar respuesta a esta necesidad dando lugar a diferentes modelos de ejecución reactiva. A lo largo de esta serie, abordaremos en profundidad cada uno de estos modelos, describiendo para cada uno de ellos la experiencia de desarrollo perseguida, así como el soporte tecnológico que es necesario proporcionar de manera subyacente para poderlo poner en práctica.

## Ejecución Reactiva

La ejecución reactiva supone una experiencia de desarrollo diferente. En lugar de pensar en la construcción de un único flujo secuencial de instrucciones que se despliega a lo largo del tiempo, el desarrollador declara una colección de fragmentos de código que se distribuyen sobre la base de la solución.

Muchos de estos elementos constituyen núcleos de interés en el marco del problema, en tanto que son objeto de atención continua. Otros, por el contrario, son la materialización de respuestas reactivas que deben ser lanzadas a ejecución, precisamente, cuando se produzcan ciertos cambios ambientales sobre la base de los elementos anteriores. Los primeros reciben el nombre genérico de señales mientras que los segundos son llamados, por oposición, reacciones.

> **Ejecución Reactiva.** En la ejecución reactiva se define un conjunto de señales que son sometidas a observación continua para disparar la ejecución de respuestas establecidas cuando se den determinadas condiciones ambientales sobre las mismas. 

Las arquitecturas de ejecución reactiva tienen por objeto dar una respuesta sencilla y eficaz a este problema dotando a la solución del entramado de enlaces necesario para que se produzca el disparo de cada reacción pertinente cuando se encuentren las condiciones ambientales necesarias sobre cada una de las señales. Por sencilla nos referimos al hecho de que el vínculo entre cada señal y sus reacciones asociadas debe poder llevarse a cabo de la forma más declarativa y simple posible. Por eficaz hacemos referencia a que la respuesta de cada fragmento reactivo debe producirse adecuadamente en tiempo y forma como para que induzca el comportamiento global sistémico perseguido.

<figure>
  <img src="/images/activity/articles/desarrollo/reactiva/post-01.01.png" 
       alt="Modelos de Ejecución Reactiva">
  <figcaption>Modelos de Ejecución Reactiva.</figcaption>
</figure>

Precisamente para dar respuesta a esta necesidad se han propuesto, a lo largo de los últimos años, diferentes arquitecturas de soporte que dan lugar a diversas experiencias de desarrollo. Cada una de estas aproximaciones puede reconocerse, en este sentido, como un modelo de desarrollo reactivo diferente. El objetivo de esta serie de articulo será hacer un recorrido por cada uno de estos modelos de manera detallada, describiendo tanto la experiencia de desarrollo como la arquitectura de soporte subyacente. No obstante, en términos generales, y de forma sumarial, sí podemos clasificar a estos modelos en tres grandes familias tal y como puede verse en la figura 1.

- **Modelos Basados en Seguimiento.** Los modelos basados en seguimiento realizan actividades de observación continua sobre el estado característico de determinados elementos de la arquitectura. Dentro de esta categoría cae el modelo de notificaciones, el modelo de señales y el modelo de enlace de datos.

- **Modelos Basados en Mensajería.** Los modelos basados en mensajería realizan un intercambio activo de mensajes para mantener el carácter reactivo de la solución. Las arquitecturas se centran en proporcional un medio de transferencia que utilizan las señales para lanzar mensajes a las que se suscriben los elementos de reacción. A esta categoría pertenecen los modelos de canales y buzones.

- **Modelos Basados en Encadenamiento.** Los modelos basados en encadenamiento establecen cadenas de transformación secuencial que operan sobre los datos emitidos por las señales en el tiempo. El modelo de streams e incluso el encadenamiento de promesas forma parte de esta última categoría. 

Sobre la base de este tipo de arquitecturas es posible llevar a cabo técnicas de desarrollo muy diversas que son las que, en esencia, dan forma al desarrollo de la construcción de software reactivo. Lamentablemente, una descripción detallada de estas técnicas cae fuera del alcance de esta serie. Sin embargo, sí podemos describir de manera general, el tipo de cuestiones a las que nos estamos refiriendo.

En particular, si analizamos las soluciones reactivas desde una perspectiva espacial, podemos hacer una clara diferenciación entre arquitecturas simples y complejas. En las primeras cada elemento de respuesta reactiva está asociado a una única señal de estado, aunque puedan ser varias las reacciones definidas sobre una misma señal. Las segundas, por el contrario, presentan multitud de señales de estado y sobre la base de esta complejidad es posible articular técnicas de entrelazado compositivo para crear señales compuestas a partir de las anteriores.

Por su parte, si el análisis lo realizamos desde una perspectiva temporal, igualmente es posible diferenciar entre arquitecturas simples y complejas. En este caso, en las primeras, cada cambio sobre cada señal de estado encuentra una reacción instantánea en elementos reactivos de la solución. Por el contrario, en las segundas, las señales son atendidas en el marco de ventanas temporales de tamaño configurable y las reacciones son disparadas sólo cuando se encuentran ciertas estructuras de cambio secuencial sobre la base de las señales. Este segundo tipo de arquitecturas permite articular técnicas de correlación que resultan muy potentes para identificar señales complejas por composición temporal.

<figure>
  <img src="/images/activity/articles/desarrollo/reactiva/post-01.02.png" 
       alt="Arquitecturas Reactivas">
  <figcaption>Arquitecturas Reactivas.</figcaption>
</figure>

Naturalmente, ambos tipos de aproximaciones suelen conjugarse en las soluciones de problemas de la vida real. Sin embargo, el estudio dimensional anterior, resulta interesante por cuanto permite encontrar el locus de aplicación de diferentes familias de técnicas que se dan de manera convencional dentro de la programación reactiva. Si sobre la perspectiva espacial es posible aplicar técnicas de entrelazado compositivo sobre diferentes tipos de señales, desde la perspectiva temporal será posible encontrar nuevas señales en el tiempo por aplicación de técnicas de correlación.  La figura 2, en este sentido, muestra un espectro de todas las posibilidades y ubica cada uno de los modelos de desarrollo que veremos a lo largo de esta serie dentro de este espectro.

Otro aspecto relevante de análisis interesante gira en torno al carácter de acoplamiento que se da sobre las dimensiones espacio y tiempo. Se dice que existe un acoplamiento espacial entre señales y reacciones cuando existe una asociación clara y directa de las primeras con respecto a las segundas. Por el contrario, existirá un acoplamiento temporal entre señales y reacciones cuando la reacción asociada a una señal se lanza a ejecución instantáneamente después de la emisión de la señal. Los modelos de streams y buzones presentan acoplamiento espacial. Por su parte los streams junto con los canales también ofrecen mecanismos de acoplamiento temporal.

Aunque en un principio cabría pensar que los modelos ideales de ejecución reactiva son aquellos que presentan un claro desacoplamiento tanto espacial como temporal, lo cierto es que esto no tiene por qué ser así. Sobre la dimensión espacial, el acoplamiento permite mantener el control de asociación que se produce entre cada señal y su conjunto de reacciones asociadas en el marco de la arquitectura lo cual simplifica notablemente las actividades de gobierno y desarrollo. Por su parte, sobre la dimensión temporal, aunque el desacoplamiento permite articular cierta suerte de respuestas diferidas sobre el estado de las señales lo más frecuente es desear que el comportamiento reactivo sistémico se produzca instantáneamente después del cambio de las señales.

<!-- <figure>
  <img src="/images/activity/articles/desarrollo/reactiva/post-01.03.png" 
       alt="Arquitecturas Reactivas & Acoplamiento">
  <figcaption>Arquitecturas Reactivas & Acoplamiento.</figcaption>
</figure> -->

Un último punto de discusión dentro de las soluciones de ejecución reactiva es el conjunto de diferentes aproximaciones viables que existen para vehicular las notificaciones de señalización sobre la base de las arquitecturas de soporte subyacente. De menor a mayor grado de complejidad y flexibilidad expresiva es posible hace una distinción entre las siguientes soluciones.

-	**Señales.** Las señales son los elementos más atómicos y elementales con los que se puede operar dentro de la ejecución reactiva. Puede pensarse en una señal como un simple pulso de activación o una unidad de información primitiva dentro del lenguaje

-	**Mensajes.** Los mensajes son elementos estructurales de transferencia de información dentro de la ejecución reactiva. Generalmente presentan un esquema de datos definido que conocen tanto los elementos emisores como sus reacciones asociadas.

-	**Eventos.** Los eventos son casos particulares de mensaje que notifican un acontecimiento relevante en el ámbito de la arquitectura. Este tipo de estructuras de información suele incluir una marca de tiempo, un tipo semánticamente definido, un contexto de metadatos y opcionalmente una referencia al elemento emisor.

-	**Comandos.** Los comandos son otro caso particular de mensaje que se utiliza para notificar comandos que deben ser ejecutados por la contraparte reactiva dentro de este tipo de arquitecturas. Un comando es una estructura de información que incluye un tipo semánticamente definido y un contexto paramétrico de ejecución.

-	**Secuencias.** Finalmente, las secuencias son estructuras de código más o menos complejas que pueden transferirse de manera serializada para ser interpretadas y lanzadas a ejecución por la parte reactiva de las arquitecturas. Las secuencias incluyen el código y en ocasiones un contexto de ejecución.

Un error frecuente, en este sentido, es tomar la parte por el todo y caracterizar determinada arquitectura exclusivamente en virtud del tipo de elemento vehicular que utilice, siendo común escuchar términos como arquitectura de eventos o mensajes. Lo cierto es que sobre cada una de las arquitecturas que presentaremos a lo largo de esta serie y por extensión a sus modelos de desarrollo asociados es posible aplicar cada uno de los elementos de comunicación que acabamos de describir. Las arquitecturas deben describirse más en términos del entramado subyacente de conexiones que fomenta la coordinación entre señales y reacciones que de la naturaleza de las unidades de información intercambiada.

## Conclusiones

A lo largo de este texto hemos presentado el modelo de ejecución reactiva. Esta aproximación invita a pensar en los procesos de construcción y desarrollo de software en términos de la creación de una colección de señales y reacciones asociadas. Cuando un conjunto de señales alcanza determinadas configuraciones establecidas deben lanzarse a ejecución las reacciones apropiadas.

Las arquitecturas de soporte en este sentido procuran mecanismos para mantener en adecuada coordinación el valor de las señales con los esquemas reactivos definidos. El grado de simplicidad y eficacia alcanzado de esta forma caracterizará la calidad de cada solución y por extensión, definirá un modelo de desarrollo diferente. Es el objetivo de esta serie de artículos describir cada uno de los modelos existentes más relevantes en este sentido.

Es relevante hacer una caracterización de las arquitecturas en términos de su dimensionalidad espacial y temporal para poder ubicar cada uno de los modelos de desarrollo y justificar el espacio potencial de aplicación de técnicas que se dan propias de este marco de construcción de software. Básicamente se trata de realizar actividades de composición y correlación de señales sobre el espacio y el tiempo respectivamente.

Igualmente es importante caracterizar el grado de acoplamiento espaciotemporal que existe en las arquitecturas reactivas y como se presentan, en este sentido, cada uno de los modelos que abordaremos a lo largo de esta serie. Y finalmente es importante aclarar una frecuente confusión entre el espacio de decisión arquitectónico dentro de las soluciones reactivas y el relativo al tipo de artefacto que se utiliza para vehicular la transferencia de información desde las señales a los elementos de reacción.

Dentro de este contexto existe una peligrosa polisemia sobre el uso del término señal que puede llevar a confusión. En aras a la claridad debemos recordar que, en términos generales, dentro de este marco se llama señal a cualquier artefacto de la arquitectura sujeto a atención reactiva continua. Por otro lado, el Modelo de Señales hace referencia a un tipo de solución arquitectónico que da respuesta al problema de la ejecución reactiva y que será objeto de estudio en un próximo artículo de esta serie. Y finalmente, también recibe el nombre de señal la unidad de transferencia de información más atómica dentro de este perímetro de construcción de software.
