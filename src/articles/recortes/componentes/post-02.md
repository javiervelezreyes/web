---
title  : Componentes & Objetivos 
slug   : componentes-objetivos
author : Javier Vélez
date   : Feb 2017
---

Todo paradigma se puede describir a partir de 3 ejes dimensionales. El eje de los objetivos responde a la pregunta del qué, caracterizando los propósitos fundamentales en contraposición con otros paradigmas. El eje de los principios se asocia al cómo ya que trata de ofrecer directrices para alcanzar los objetivos de manera canónica. Finalmente el eje de los mecanismos responde a la pregunta del con qué, indicando cuáles deben ser las capacidades del entorno computacional para posibilitar el desarrollo.

Entre cada uno de los 3 ejes anteriores pueden trazarse sendos planos de actividad. El plano arquitectónico, dibujado entre las dimensiones de los objetivos y los principios, describe todos los tipos de modelos arquitectónicos que pueden desarrollarse en el marco del paradigma. El plano de diseño, es un espacio de actividad que describe mediante patrones cómo pueden idearse soluciones alineadas con los principios de diseño a partir de los mecanismos del entorno computacional. Y finalmente, el plano tecnológico describe cómo utilizar dichos mecanismos para encontrar los objetivos perseguidos. La figura 1 ilustra lo expuesto.

<figure>
  <img src="/images/activity/articles/recortes/componentes/post-02.01.png" 
       alt="El Paradigma de Orientación a Componentes">
  <figcaption>El Paradigma de Orientación a Componentes</figcaption>
</figure>

Describir cada una de estas 6 áreas de interés – 3 ejes y 3 planos de actividad – es algo que nos llevará el tiempo de toda esta serie de artículos. Quizá lo más conveniente sea empezar por el principio describiendo qué objetivos diferenciales se persiguen al hacer aproximaciones orientadas a componentes. 

Como ya avanzábamos en el artículo anterior, la orientación a componentes había surgido como una respuesta a la necesidad de encontrar procesos de desarrollo de software más productivos. En esta línea la orientación a componentes puede caracterizarse a partir de 4 objetivos fundamentales:

- **Simplicidad.** La simplicidad apunta a la necesidad de hacer de los procesos de desarrollo de software una actividad elemental que no requiera tener altos conocimientos técnicos específicos. El desarrollo de soluciones orientadas a componentes debería ser un proceso más de confección y ensamblaje que uno basado en la implementación de elaboradas soluciones algorítmicas. Bajo esta conceptualización se explica por qué los componentes dentro del paradigma se imaginan como cajas negras fácilmente conectables entre sí para ofrecer servicios de orden superior. 

- **Automatización.** La automatización responde a la idea de invertir el control de los artefactos dentro de la arquitectura. En los paradigmas anteriores, los artefactos eran meros elementos pasivos cuyos servicios podían ser invocados bajo demanda de la lógica de control explícitamente impuesta por el desarrollador en el plano programático. En la orientación a componentes, los artefactos son entidades autónomas que operan proactiva y reactivamente en el marco de la arquitectura, descubriendo dinámicamente otros artefactos de la vecindad para arrancar procesos de colaboración con ellos. Aunque no es una labor sencilla de conseguir en muchas ocasiones si que existen, dentro del paradigma, principios y patrones de diseño que se dirigen a conseguir cotas de automatización aceptables.

- **Reutilización.** La reutilización responde a la necesidad de diseñar la colección de componentes en el marco de una determinada solución para que pueda ser aplicada recurrentemente en distintos contextos arquitectónicos y proyectos futuros. Conseguir este objetivo no es nada fácil y es algo en lo que, en términos generales, han fracasado los paradigmas anteriores. Aunque para ser justos no sabríamos decir si es más culpa de culturas empresariales de desarrollo neciamente establecidas que de aproximaciones paradigmáticas minuciosamente ideadas dentro de la academia. Como veremos en futuras entregas, los enemigos naturales de la reutilización suelen ser el acoplamiento y la falta de abstracción y flexibilidad adaptativa y eso es algo que la orientación a componentes combate con bastante éxito.

- **Productividad.** La productividad es, tal vez, de todos los objetivos perseguidos, el más general y ambicioso. Se trata de conseguir a toda costa que, en términos generales, los procesos de desarrollo de software resulten menos costosos de lo habitual y más ágiles y eficaces. Ello significa que, con una aproximación orientada a componentes, deberíamos ser capaces de ahorrar costes a nuestra empresa en el medio y largo plazo a la vez que respondemos a las necesidades específicas del cliente y mostramos competencia para dar una respuesta de repivotaje rápida a los potenciales cambios del mercado. Si esto no es conseguido, todo el cambio tecnológico y procedimental que conlleva la orientación a componentes habrá sido en vano. 

Cada una de estas 4 características se pueden  organizar en un modelo piramidal de dependencias conocido como la pirámide de objetivos de la orientación a componentes (figura 2). El mensaje que desprende esta representación es que, a la postre, cada objetivo supone una contribución a la necesidad de aumentar la productividad. En efecto, la simplicidad ayuda a obtener unos procesos de desarrollo más democráticos donde perfiles no cualificados puedan contribuir a hacer realidad una ganancia en productividad. Además si los componentes son capaces de operar con altas cotas de automatismo dicha productividad aumenta ya que los esfuerzos dejan de estar en manos del desarrollador de soluciones específicas para residir en artefactos altamente eficaces. Y a su vez, el uso de artefactos de aplicabilidad recurrente en el seno de distintas arquitectura de cliente – esto es la reutilización – también conduce a un claro aumento de la productividad. 

<figure>
  <img src="/images/activity/articles/recortes/componentes/post-02.02.png" 
       alt="Pirámide de Objetivos de la Orientación a Componentes">
  <figcaption>Pirámide de Objetivos de la Orientación a Componentes</figcaption>
</figure>
 
Por lo tanto, puede decirse, sin pérdida de generalidad,  que la productividad se dibuja como el objetivo nuclear de la orientación a componentes.  Sin embargo, hay que destacar que, el aumento de la misma viene vinculado a dos conceptos fundamentales de la economía: la economía de escala y la economía de alcance. La orientación a componentes se miró en estas dos estrategias de los sistemas productivos para definir de forma precisa los beneficios de la productividad. A continuación repasamos ambos enfoques:

### La productividad desde la economía de escala

Las ventajas de la productividad en la economía de escala se consiguen por los beneficios de crear múltiples copias idénticas de un producto determinado. Por ejemplo, Microsoft ha basado gran parte de su estrategia de negocio en hacer un único sistema operativo estándar y distribuirlo de forma clonada por todo el mundo (figura 3a).
 
<figure>
  <img src="/images/activity/articles/recortes/componentes/post-02.03.png" 
       alt="Economía de Escala & Economía de Alcance">
  <figcaption>Economía de Escala & Economía de Alcance</figcaption>
</figure>

La aplicación de esta estrategia puede parecer trivial a primera vista ya que el proceso de producción se limita a hacer copias indiscriminadas de un mismo código ejecutable. Sin embargo el proceso de diseño para que este tipo de aproximaciones tenga éxito encierra ciertas claves. En relación a los objetivos esto entronca fuertemente con la reutilización. Es necesario desarrollar componentes muy reutilizables para que tengan una aplicabilidad casi universal en cualquier tipo de cliente independientemente de sus necesidades particulares. Esto nos permite destacar ya el primer postulado de la orientación a componentes.

> **Orientar a componentes para Reutilizar.** Diseñamos soluciones orientadas a componentes para lograr encontrar la colección de artefactos que es necesario aplicar recurrentemente en el ámbito de un determinado dominio.

Aunque hoy no toca hablar de buenas prácticas, como veremos en próximos artículos, son muchos los principios y patrones de diseño que se dirigen a ofrecer directrices para alcanzar cotas mayores de reutilización y conseguir así grandes ventajas en un modelo de producción basado en economía de escala.

### La productividad desde la economía de alcance

Por su parte, la economía de alcance promueve una forma de productividad basada en la configuración adaptativa. Es decir se crea un modelo de producto estereotípico y se factura por adaptaciones menores realizadas sobre el mismo para encontrar las necesidades de cada cliente. Como ya comentamos en el articulo anterior, los procesos de desarrollo de productos software se caracterizan por una fuerte demanda del cliente de adaptar dicho producto a sus necesidades particulares o incluso llevar a cabo un desarrollo completamente a medida. Esto último es lo que trata de evitar la aplicación de procesos orientados a componentes.

Puestas así las cosas, el paradigma de orientación a componentes debe ofrecer ciertas capacidades de configuración adaptativa – incluso en caliente si ello fuera posible – para dar respuesta a las necesidades cambiantes que se dan en el seno de una arquitectura o entre varias soluciones de clientes distintos. Esto nos conduce al segundo de los postulados de la orientación a componentes (figura 3b). 

> **Orientar a componentes para Adaptar.** Diseñamos soluciones orientadas a componentes para lograr encontrar mecanismos expresivos lo suficientemente potentes y flexibles como para dar satisfacción a las necesidades específicas que surgen en el seno de cada proyecto de cliente particular.

De momento nos falta contexto para saber de qué manera la orientación a componentes supone un giro copernicano en la forma en que ofrece mecanismos de flexibilidad adaptativa. Ello será objeto de estudio en próximos artículos. De momento baste saber que, gracias a este valor diferencial se consigue no sólo un mayor ajuste a las necesidades de cliente sino también una mayor tolerancia a cambios en las arquitecturas anfitrionas lo que se traduce en un aumento automático de las cotas de reutilización.

En fin, conocer la historia sirve para no condenarnos a repetirla. Y en el mundo de la ingeniería del software eso significa evitar caer en la terrible tentación de reinventar la rueda de manera recurrente cada vez que se nos presenta un problema. Eso tiene que ver con la reutilización y con la flexibilidad adaptativa, que son en esencia los dos postulados de la orientación a componentes enmarcados dentro de las estrategias de producción. A partir de aquí cabe preguntarse cómo se orientan los procesos de desarrollo a este paradigma. Pero eso es una historia que os cuento en la próxima entrega. Hasta entonces os dejo que reflexionéis si en vuestra empresa, al aplicar técnicas orientadas a componentes, estáis verdaderamente haciendo orientación a componentes. 
