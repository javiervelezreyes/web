---
title  : Arquitecturas Solidas & Plásticas
slug   : arquitecturas-solidas-plasticas
author : Javier Vélez
date   : Ene 2024
---

## Introducción

Con este último texto, ponemos punto final a este estudio que ha tenido como propósito describir, de manera detallada, <q>El Efecto Ornitorrinco</q> según el cual, la pragmática de uso que debe aplicarse sobre los lenguajes de programación queda siempre por encima de cualquier movimiento cultural y marco teórico académico.

A lo largo de los artículos de esta serie, hemos ido describiendo las diferencias esenciales que se dan entre los dos modelos alternativos existentes dentro del paradigma de orientación objetos. Primero, abordando los aspectos referentes a las actividades del tiempo de diseño. Y después, describiendo las repercusiones que ello tiene en tiempo de ejecución.

Los modelos estáticos de la orientación objetos están basados en la definición de clases y estirpes polimórficas que utilizan sistemas de tipos fuertes para caracterizar de manera semántica y completa cada uno de los objetos que entran a formar parte de las colaboraciones en el marco de la arquitectura. Los modelos dinámicos, por el contrario, reconocen que los objetos son meras organizaciones estructurales que abrazan capacidades funcionales por criterios de cohesión interna y que no responden a ninguna tipología específica. De hecho, se asume que su morfología estructural puede ir evolucionando a lo largo del tiempo para adaptarse convenientemente a los distintos contextos arquitectónicos donde se requiere su uso.

Estas diferencias, más que circunstanciales, suponen un punto de divergencia en relación a cómo se llevan a cabo los procesos de razonamiento semántico sobre el paradigma de objetos. Las soluciones de software más clásicas propias del modelo estático responden a arquitecturas sólidas, en tanto que se escriben a los cinco principios típicamente asociados con la descripción del paradigma. En contraposición, las soluciones articuladas en base al modelo dinámico de orientación objetos dan lugar a arquitecturas adaptativas que, como venimos comentando, resultan más plásticas, flexibles y tolerantes a los cambios a lo largo del tiempo.

Queremos reservar estas últimas líneas para señalar las notables diferencias que se dan a este respecto. Pero, más allá de eso, lo cierto es que hay otros muchos mecanismos que ofrecen los lenguajes de programación que condicionan considerablemente su pragmática de uso más común. En este sentido, resulta también conveniente incluir este hecho dentro del estudio comparativo que venimos haciendo y explicar el impacto notable que todo ello puede llegar a tener en las experiencias de desarrollo. Porque a veces, la forma en la que se soporta la redacción sintáctica de las cosas induce una manera específica de articular la construcción de soluciones a un nivel arquitectónico más global.

## Arquitecturas Sólidas

Cuando un lenguaje se basa en conformidad semántica total y, por ende, induce a una experiencia de desarrollo dirigida por contratos, el producto resultante sigue una arquitectura sólida. Este nombre, que en realidad proviene del acrónimo circunstancial que en su día se le dio a los principios fundacionales característicos del paradigma, está en realidad muy bien traído porque viene a poner de manifiesto que las arquitecturas construidas sobre la base de un modelo estático de orientación objetos resultan en productos robustos y seguros regulados por el uso de un sistema de tipos fuerte.

Para entender en qué medida las características del modelo estático de la orientación objetos condicionan la experiencia de diseño y desarrollo resulta conveniente revisar cada uno de los principios anteriormente citados y revisar hasta qué punto resultan viables y adecuados. A la luz de los conceptos que hemos presentado lo largo de estos artículos, seguramente ahora se alcanza un nivel más adecuado de entendimiento sobre los mismos.

El principio de responsabilidad única establece que siempre debe haber una única razón de cambio para cada abstracción a lo largo del tiempo. Ahora que sabemos que, en el marco de este tipo de arquitecturas, todas las abstracciones varían a través de la definición de estirpes polimórficas ello significa que el criterio de variabilidad de cada punto de extensión polimórfica debe ser solo uno. Esto desde luego es viable y además parece una práctica razonable.  El principio Abierto / Cerrado, por su parte, establece que, en este tipo de arquitecturas, los sistemas están cerrados a la operación, pero abiertos a la extensión. Ello es una consecuencia natural de los sistemas de herencia. En efecto, cada nueva variante supone una nueva extensión, pero cuyo desarrollo se realiza sin afectar a las variantes previas en la herencia.

El principio de sustitución establece que, en el marco de una colaboración entre objetos, cada abstracción participante puede ser sustituida por cualquiera de sus abstracciones hijas sin perjuicio. Nuevamente esto es una consecuencia de los sistemas de herencia. Dado que cada objeto adquiere,por herencia, todos los tipos del su clase padre, éste puede ocupar el lugar del padre dentro de cualquier colaboración.  El principio de segregación de interfaces, por su parte, promueve la idea de que la definición de contratos debe diseñarse a través de actividades de descomposición ortogonal. Como ya discutimos a lo largo de esta serie siempre es una buena práctica minimizar la superficie de contrato y ello resulta viable por medio de técnicas de descomposición como las que hemos ilustrado.

Y finalmente, el principio de inversión de dependencias fomenta la idea de que el diseño de colaboraciones debe ser siempre expresado en términos abstractos para que las realizaciones particulares puedan ocupar cada rol en base al principio de sustitución. La realización de este principio es factible en base a los procesos de abstracción articulados a través de la herencia y siempre resulta conveniente dado que supone una manera de reutilizar esquemas colaborativos.

Como puede apreciarse, todos los principios de la orientación a objetos que acabamos de describir giran fuertemente en torno al concepto de herencia. Se aprecia, por tanto, que las soluciones propias de las arquitecturas solidas están fuertemente enraizadas en una conceptualización del paradigma basada en el modelo estático. Esto es algo que también se aprecia al revisar la literatura de patrones vinculada a la pragmática de diseño dentro de este paradigma. En este sentido, se reconocen tres familias de patrones diferentes dirigidos a resolver problemas relativos a la lógica creacional, estructural y de comportamiento. Es de señalar, no obstante, que todo tipo de soluciones propuestas se apoya fuertemente en actividades de delegación y desarrollo polimórfico ya sea por mecanismos de herencia o realización de interfaces. Este hecho, como veremos comparativamente después, también resulta indicativo de que la orientación a objetos más clásica y convencional tiene un fuerte sesgo hacia los modelos estáticos aquí descritos.

## Arquitecturas Plásticas

En los lenguajes del modelo dinámico de orientación a objetos que se basan en el uso de técnicas de conformidad sintáctica y parcial, la experiencia de desarrollo inducida no se encuentra dirigida por contratos sino más bien por protocolos de colaboración que asumen cierta morfología estructural en cada una de las entidades participantes. Este tipo de arquitecturas no tiene un nombre reconocido dentro de la literatura. Sin embargo, yo suelo bautizarlas como arquitecturas plásticas por contraposición a la idea de rigidez que caracterizan las soluciones alternativas propias del modelo estático.

Pese a estas diferencias, los lenguajes dinámicos han logrado alcanzar cierto grado de mimetismo con respecto a las construcciones sintácticas que se aplican para construir arquitecturas orientadas a objetos. Así, por ejemplo, en el caso de JavaScript, pese a que el marco de ejecución subyacente está centrado en el modelo dinámico, se ha popularizado el uso de clases y herencia como elementos característicos de construcción.

Puestas así las cosas, no vale la pena discutir si sobre un lenguaje dinámico de esta naturaleza es posible articular arquitecturas similares a las descritas en la sección anterior. O dicho de otra manera, si los lenguajes del modelo dinámico también se adscriben a los cinco principios fundacionales de diseño de la orientación a objetos que se describieron con anterioridad. En efecto, como las arquitecturas sólidas, los principios fundacionales y los patrones de diseño se apoyan fuertemente en los mecanismos de delegación y herencia y dichos mecanismos también operan con los modismos incluidos en los lenguajes dinámicos parece evidente qué tal soporte está garantizado.

Sin embargo, a mi entender, la pregunta no debe ser si los lenguajes dinámicos de la orientación objetos dan soporte a tales características sino más bien si tiene sentido desarrollar arquitecturas sólidas sobre la base de un modelo de ejecución dinámico. Para responder a esta pregunta, conviene introducir aquí algunos aspectos adicionales de carácter sintáctico que ofrecen los lenguajes de soporte. Por ejemplo, JavaScript, en tanto que es un lenguaje con soporte funcional, también incluye mecanismos de declaración de funciones, orden superior, retención léxica, declaración de clausuras, y un largo etc.

A la luz de estos nuevos elementos lo que cabe ahora preguntarse es si la forma en la que deben describirse arquitecturas sobre el lenguaje no ha cambiado. Es probable que podamos seguir haciendo un diseño de abstracciones basados en delegación y herencia y seguir rigurosamente la aplicación de cada uno de los principios sólidos de la orientación a objetos. Sin embargo, la existencia de los mecanismos anteriores invita a pensar qué tal vez existan otras formas divergentes de hacer las cosas.

Solo por citar algunos ejemplos, no tendrá mucho sentido, en un lenguaje como JavaScript, aplicar patrones tales como el método de fábrica, el patrón Singleton o el patrón comando que materializan abstracciones funcionales basadas en clases. En su lugar, parece más natural reformular esas mismas estrategias directamente en términos de funciones y retención léxica. Igualmente, tampoco tendrá sentido hacer uso de los patrones adaptador, proxy virtual, decorador o incluso estrategia puesto que las capacidades de transformación dinámica adaptativa del lenguaje evitan tener que seguir esas aproximaciones.

Y así podríamos seguir haciendo un recorrido mucho más exhaustivo acerca de las discrepancias que existen en cuanto a pragmática de desarrollo en cada uno de los dos modelos - estático y dinámico - de la orientación a objetos. Lamentablemente, tal cosa se sale del alcance de este artículo. El objetivo, a este respecto, señalar la idea de que cada lenguaje induce una pragmática de uso particular donde determinadas construcciones resultan más naturales que otras si bien estas últimas son igualmente aplicables y soportadas.

Lo que nos viene a recordar en este sentido el efecto ornitorrinco es que aunque muchas construcciones arquitectónicas puedan resultar canónicas en el marco académico que describe un paradigma pueden resultar equivocadas con respecto a la pragmática de uso en torno a la cual se diseñó el lenguaje.

## Conclusiones

A lo largo de este artículo hemos hecho una última revisión comparativa entre los modelos estático y dinámico de la orientación a objetos. En este texto hemos puesto foco de atención en los dos tipos de arquitecturas contrapuestas que de manera natural surgen al aplicar dichos modelos en base a la naturaleza de los lenguajes de soporte.

Al hacer uso de lenguajes basados en modelos estáticos debemos pensar en clases y estirpes polimórficas de herencia que sirven para crear ecosistemas de tipos fuertes que nos ayuden a razonar semánticamente sobre el uso potencial de los objetos en diferentes contextos de colaboración jugando roles específicos. Si utilizamos lenguajes basados en modelos dinámicos, por el contrario, debemos entender que los objetos más allá de realidades semánticas son meros contenedores que agregan capacidades por criterios de cohesión interna y que no disponen de diferenciación tipológica alguna. E incluso podemos asumir que la morfología estructural de los objetos puede ir cambiando a lo largo del tiempo para adaptarse bajo demanda a las necesidades de cambio ambiental y poder entrar a participar en diferentes escenarios de colaboración.

En el primer caso creamos arquitecturas sólidas que siguen los principios fundacionales de la orientación objetos. Se trata de productos sólidos y robustos, pero también hieráticos y menos flexibles. Todos los mecanismos de extensión adaptativa que puedan confeccionarse dentro de este tipo de soluciones están necesariamente basados en el uso de la herencia, el polimorfismo y la delegación. Por el contrario, el uso de lenguajes dinámicos da lugar a arquitecturas plásticas donde los objetos pueden evolucionar, como decíamos, a lo largo del tiempo y son elemento de transformación constante para mostrar cambios adaptativos a nivel global. Las actividades de diseño arquitectónico dentro de ese tipo de soluciones ya no están centradas en la definición de abstracciones semánticas perfectas, sino que se focalizan un nivel por encima en la definición de estrategias de transformación sistemática que sean aplicadas ante la identificación de determinadas condiciones ambientales.

Lo que hemos querido enfatizar a largo de esta serie es que cada lenguaje de soporte a la programación orientada objetos se diseña siempre mirando más a uno de los dos modelos de cómputo que hemos presentado. En línea con esta idea, nuestra responsabilidad como desarrolladores al utilizar dichos lenguajes es descubrir desde cuál de estos modelos debemos pensar el diseño de nuestras arquitecturas antes de hacer imposiciones culturales, modísticas o académicas. Este es <q>El Efecto ornitorrinco</q>.