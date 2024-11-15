---
title  : La Dimensión Temporal
slug   : modelos-de-ejecucion-temporal
author : Javier Vélez
date   : Dic 2023
---

## Introducción

Los modelos de ejecución que caen dentro de la dimensión temporal se preocupan por ofrecer diferentes interpretaciones semánticas del código que se desarrolla a lo largo del tiempo. En particular, estos modelos aciertan en dar respuesta a determinados problemas que tienen que ver con cómo se gestiona el flujo de ejecución de un programa sujeto a un marco de restricciones particular.

A diferencia de lo que ocurría con la dimensión espacial, donde lo declarativo y lo imperativo se dibujaba como dos aproximaciones contrapuestas y fuertemente incompatibles, dentro de esta dimensión, cada modelo de ejecución responde a un determinado tipo de problema característico y la yuxtaposición en el uso no solamente es posible sino frecuente y habitual.

Durante este artículo presentaremos, de manera sumarial, cada uno de los modelos que concurren dentro de esta dimensión y discutiremos, para cada uno de ellos, su propósito y espacio de aplicación característico. De igual manera, al hacer este recorrido, pondremos en valor la relación de uso de unos modelos con otros ya que, como veremos, algunos aprovechan las primitivas definidas por los demás.

Pese a que la cultura imperante imponga una línea de pensamiento imperativa como base de desarrollo, lo cierto es que no existe ninguna restricción que obligue a pensar en esta dirección. A lo largo de este texto, asumiremos un relato imperativo pero cualquier conceptualización puede ser fácilmente trasladable al espacio más puramente declarativo de la programación funcional.

## Modelo de Ejecución Asíncrona

El desarrollo de la ejecución de código que se produce en los lenguajes de alto nivel puede explicarse en términos de una invocación consecutiva de las sucesivas abstracciones algorítmicas que forman parte del programa, ya sean funciones, procedimientos o métodos miembro. 

En efecto, toda ejecución comienza siempre por la invocación de una de estas abstracciones y ello desencadena potencialmente la llamada a las demás. Este proceso así descrito es lo que confiere una interpretación semántica específica al código fuente de cada programa ya que está directamente relacionado con el comportamiento sistémico observado del mismo durante la ejecución.

Contemplado a lo largo del tiempo, la invocación de cada abstracción supone la activación de un cuerpo algorítmico que puede ser solapante o no solapante en función de si las invocaciones son anidadas o secuenciales. Si bien este relato, fuertemente vinculado al modelo de ejecución imperativo, puede resultar sencillo e intuitivo para el desarrollador, no está exento de problemas. Frecuentemente, el tiempo que cierta abstracción consume en su activación no está vinculado al procesamiento, sino que responde, en gran medida, a tiempo de inactividad a la espera de que se resuelvan factores ambientales de contexto, tales como el acceso a recursos, de disco, memoria, etc.

En este sentido, se dice que las operaciones en este tipo de modelos son bloqueantes, dado que la continuidad de la ejecución no se produce hasta que la activación de la función en curso haya terminado. Una manera más eficiente de operar en el plano temporal sería conseguir abstracciones no bloqueantes que devuelvan el control instantáneamente al programa llamante antes incluso de su terminación.

> **Modelo de Ejecución Asíncrona.** La ejecución asíncrona promueve crear operaciones no bloqueantes que puedan dar continuidad al flujo del programa llamante. Para ello se debe inyectar la lógica de continuidad como extensión paramétrica que confiera autonomía a la abstracción.

Trabajar con modelos no bloqueantes puede resultar sencillo si las abstracciones algorítmicas resultan autónomas e independientes. Es decir, si no arrojan un resultado de salida que deba ser enhebrado en el flujo de ejecución subsiguiente. Sin embargo, para los casos en los que esto no es así, cualquier intento de adelantamiento de la ejecución no bloqueante resultará inane dado que se requerirá una espera hasta la obtención del resultado.

El modelo de ejecución asíncrona plantea una solución a este problema basada en la aplicación de una inversión de control.  Si no puedes llevar los datos al código, lleva el código a los datos. De acuerdo a esta idea, si proporcionamos a cada abstracción algorítmica no bloqueante la lógica de continuación que deba aplicarse en el momento de la obtención de resultados estaremos convirtiendo cada abstracción dependiente en una unidad de ejecución autónoma que puede progresar permitiendo a su vez que el flujo de control llamante avanza adecuadamente.

Dentro de este modelo de ejecución se reconocen diferentes aproximaciones sintácticas más o menos elaboradas. Pero a la postre todas ellas esconden la misma idea de inyectar por extensión paramétrica a las abstracciones algorítmicas la lógica de continuidad pertinente para procesar los resultados.

Aunque este modelo de ejecución es favorable en rendimiento, en tanto que reduce lapsos de espera innecesarios, lo cierto es que su desarrollo resulta mucho más complejo. Con frecuencia se requiere incorporar puntos sistemáticos de sincronización que coordinen el flujo de avance independiente de los flujos abiertos no bloqueantes. Razonar en un modelo donde la idea de secuencialidad en ejecución se ha perdido resulta mucho más complicado y una vez se entra a recorrer ese camino es difícil salir. 

Si es cierto, no obstante, que el azúcar sintáctico proporcionado por algunas de las aproximaciones anteriormente citadas resulta de gran ayuda en este sentido ya que consiguen dar una sensación de falsa secuencialidad que, aunque falaz e impostada, resulta útil y operativa a la hora de llevar a cabo un diseño algorítmico más natural. 

## Modelo de Ejecución Concurrente

Cuando se habla de ejecución algorítmica, siempre se tiende a pensar en un código fuente que se atraviesa por un único flujo de ejecución secuencial. El programa toma unos datos de partida y genera unos resultados a la salida mostrando un comportamiento determinado.

Sin embargo, para muchos espacios de problema, resulta más adecuado plantear una conceptualización en la que un conjunto de agentes desarrolla un trabajo de manera conjunta a lo largo del tiempo hasta alcanzar un estado final esperado. En términos generales, cada agente puede imaginarse vinculado a un proceso o hilo de ejecución que opera de manera independiente, al menos desde un punto de vista conceptual, con independencia de la volumetría de recursos de la infraestructura de soporte subyacente.

Dentro de este marco, cada agente lleva a cabo ciertas actividades recurrentes de operación especializadas sobre un modelo de información compartido de manera cíclica y continua de forma que la ejecución así concebida es interpretada como un esfuerzo de construcción colaborativa de un producto por intervención coordinada de esfuerzos distribuidos.

> **Modelo de Ejecución Concurrente.** La ejecución concurrente se centra en dar respuesta a escenarios en los que un conjunto de agentes colaboran para alcanzar ciertos objetivos globales por medio de la intervención coordinada de esfuerzos distribuidos realizados sobre un modelo de información compartido.

Esta descripción recoge ya dos ideas fundamentales. En primer lugar, una orientación colaborativa de las soluciones. En efecto, en este tipo de aproximaciones, los agentes se dirigen por diseño, a lo largo del tiempo, hacia la consecución de ciertos objetivos globales por medio de la realización de contribuciones parciales sobre el modelo de información compartido. Esto puede conducir en ocasiones a situaciones de cooperación contributiva pero también, y de forma no excluyente, a esquemas de competición donde cierto tipo de agentes intentan hacer uso exclusivo del recurso común en detrimento de las oportunidades de intervención de los demás.

La segunda idea es que, los escenarios de esta naturaleza requieren de un exhaustivo diseño de la coordinación que regule la intervención de cada agente a lo largo del tiempo. Esto implica que cada problema, además de la lógica de operación que describe el comportamiento propio de cada agente, debe incluir cierta lógica de coordinación que regule cómo estos acompasan sus esfuerzos de progreso.

En efecto, las operaciones de los agentes deben ser reguladas para garantizar ciertas propiedades de vivacidad, prioridad y seguridad que garanticen cierta evolución algorítmica. Y ello a veces requiere asegurar un acceso a los recursos compartidos de forma exclusiva o, en todo caso, condicionar dicho acceso a que se den ciertas condiciones ambientales típicamente expresadas en términos de variables de estado.

El modelo de programación concurrente se preocupa por estudiar este tipo de soluciones y las diferentes aproximaciones que hacen posible esta coordinación. En particular, toda solución concurrente requiere de la definición de las tareas acometidas por cada tipo de agente, la carga volumétrica de cada tipo de agente, la arquitectura de bloqueo que permite articular procesos de coordinación y las primitivas de sincronización que regulan la operación sobre dicha arquitectura.

## Modelo de Ejecución Paralela

Desde los inicios de la computación, se reconocen multitud de esfuerzos que persiguen alcanzar mayores cotas de rendimiento temporal en la ejecución de programas. Para lograr este objetivo, ampliar la base volumétrica de la infraestructura de procesamiento ha sido siempre una idea tentadora. En este sentido, es posible aplicar diferentes estrategias de paralelización de datos y de instrucciones. Este tipo de problemas son objeto de estudio del modelo de ejecución paralela.

En la paralelización de datos, se requiere realizar una fragmentación del problema en partes lo suficientemente independientes de manera que sea posible enrutar cada una de ellas a una unidad de procesamiento diferente. Este requerimiento es más o menos alcanzable dependiendo de la naturaleza de este. Por eso el diseño de algoritmos paralelos es una actividad que exige de habilidades de diseño particulares para la mayoría de las situaciones.

> **Modelo de Ejecución Paralela.** La ejecución paralela se centra en dar respuesta a escenarios en los que es posible descomponer problemas en fragmentos lo suficientemente independientes como para que sean ejecutados de manera paralela en recursos de computo diferentes.

Las operaciones map / reduce aplicadas sobre grandes volúmenes de datos son ejemplos de problemas con altas oportunidades de paralelismo dado su carácter de alta independencia en las operaciones sobre los datos. Por el contrario, problemas con un alto grado de encadenamiento algorítmico requieren de desarrollos secuenciales en ejecución y hacen muy complicado la paralelización.  Otros problemas, como la ordenación vectorial o la suma de datos de alta volumetría no siendo triviales encuentran una paralelización algorítmica relativamente sencilla.

La paralelización de instrucciones por el contrario persigue la ejecución simultanea de varias instrucciones siempre que sea posible. En este sentido, la esencia fundamental consiste en considerar que si dos instrucciones de un algoritmo secuencial son mutuamente intercambiables en su orden de manera que el resultado final de la ejecución no se ve alterado entonces dichas instrucciones pueden ser ejecutadas en paralelo.

La extensión de esta idea conduce a la posibilidad de adelantar de manera agrupada todas aquellas operaciones así definidas como independientes para su computación de manera paralela en recursos de máquina independientes. 

## Modelo de Ejecución Reactiva

Un último perímetro donde se imprime una interpretación semántica diferente del código fuente es el modelo de ejecución reactiva. En este tipo de escenarios, el diseño algorítmico no responde a crear flujos de ejecución secuencial, sino que queda convenientemente distribuido para ofrecer una respuesta reactiva a las señales de carácter ambiental que provienen del espacio arquitectónico.

> **Modelo de Ejecución Reactiva.** La ejecución reactiva describe escenarios en los que diferentes activos de lógica algorítmica son distribuidos dentro de la arquitectura para ofrecer una respuesta reactiva a las notificaciones de cambio que se producen en el espacio del problema.

Atendiendo al tipo de elemento que articula el proceso de ejecución reactiva es posible distinguir entre arquitecturas de seguimiento, mensajería o encadenamiento. En las primeras, se hace seguimiento de cambio en determinados artefactos de la arquitectura para notificar de tal cosa a los agentes interesados. En las segundas, se proporciona una infraestructura de comunicación desacoplada para mantener en conexión unos agentes con otros. En las terceras, se definen estructuras encadenadas de operación que transforman y procesan datos de manera reactiva.

Según la continuidad temporal, es posible diferenciar entre arquitecturas, discretas y continuas. Los escenarios discretos corresponden a esquemas en los que determinada notificación puede llegar de manera repetidas veces para encontrar una respuesta reactiva. Por su parte, las arquitecturas continuas son aquellas caracterizadas por recibir un flujo de información continuo para ser procesado.

De acuerdo a la complejidad espacial de la respuesta reactiva es común diferenciar entre arquitecturas simples y compuestas. En el primer caso se asocian artefactos de respuesta a cada señal independiente dentro de la arquitectura mientras que, en el segundo, varias líneas de datos pueden procesarse de forma conjugada para conformar eventos compuestos.

Finalmente, En relación a la complejidad temporal también es posible hacer una clasificación entre arquitecturas simples y complejas. Las primeras tienen una lógica de reacción inmediata en el sentido de que cada evento o señal entrante encuentra una respuesta reactiva instantánea. Sin embargo, en el caso de las arquitecturas complejas es común trabajar con ventanas de tiempo para aplicar técnicas de correlación que conformen nuevos eventos complejos sobre la composición temporal de otros eventos más simples.

## Conclusiones

A lo largo de este artículo hemos abordado los cuatro tipos de modelos de ejecución que aparecen vinculados a la dimensión temporal. El objetivo no fue hacer un desarrollo en profundidad, sino meramente llevar a cabo una descripción comparativa. Como se ha podido comprobar, cada uno de ellos ofrece una semántica diferente sobre la interpretación de la ejecución dirigida a dar respuesta a un espacio de preocupaciones propio.

Mientras que la programación asíncrona se centra en articular espacios de solución que permitan a los desarrolladores operar de manera fluida con aproximaciones algorítmicas no bloqueantes, la programación concurrente recoge la necesidad de dar cobertura a escenarios donde un conjunto de agentes colabora para alcanzar unos objetivos comunes en base al uso de un modelo de información compartido.

La programación paralela, por su parte, se centra en dar respuesta a como un determinado problema puede ser fragmentado desde su base de código o datos para encontrar estrategias de paralelización que permitan una ejecución simultanea haciendo uso de recursos de cómputo independientes.

Y finalmente, la programación reactiva plantea escenarios donde la carga algorítmica no se asocia a un único flujo secuencial, sino que queda distribuido en torno a la arquitectura para ofrecer una respuesta reactiva a notificaciones ambientales.

En no pocas ocasiones, estos cuatro modelos de ejecución son confundidos en comunidad y, sin embargo, responden a espacios de preocupación y planteamientos bien diferentes. Tal vez la fuente de controversia viene del hecho de que existen ciertas concomitancias en el uso que desde ciertos modelos se hace de las primitivas propias de otro.

Así, por ejemplo, en la programación concurrente, los modelos de control de la coordinación de bajo nivel tales como cerrojos, semáforos, regiones o canales se apoyan en el uso de promesas o primitivas de bloqueo de tipo await. Por su parte algunos algoritmos paralelos también pueden expresarse en términos de estas mismas primitivas. E incluso a veces el modelo de procesas ha sido identificado en la literatura como un caso de arquitectura reactiva.

En definitiva, todos estos modelos resultan de mucha utilidad, aunque con frecuencia son un gran desconocido. Lamentablemente a lo largo de este espacio no ha habido oportunidad de hacer un recorrido más exhaustivo. Tal vez, tal cosa pueda ser objeto de publicaciones futuras. Espero, en cualquier caso, haber contribuido a arrojar a un poco de luz en relación a este perímetro.


