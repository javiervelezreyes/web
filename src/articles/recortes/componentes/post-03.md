---
title  : Componentes & Proceso 
slug   : componentes-proceso
author : Javier Vélez
date   : Mar 2017
---

La orientación a componentes se presentaba en el artículo anterior como un nuevo intento de buscar desarrollos más ágiles y productivos. Pero, ¿cómo se traduce ese esfuerzo en términos concretos? Hoy hablamos de las implicaciones del uso de componentes dentro de los procesos de desarrollo.

En el articulo anterior presentábamos la orientación a componentes como un nuevo paradigma. Esta nueva aproximación constructiva se prometía como la solución definitiva para conseguir altas cotas de reutilización y flexibilidad adaptativa lo que se traduciría, de manera natural, en niveles altos de productividad en los procesos de desarrollo.

Aún no queda demasiado claro cómo consigue la orientación a componentes hacer frente a estos objetivos. Desenmarañar esa madeja nos llevará tiempo. Pero sin duda alguna, gran parte del éxito de todo esto está en su nueva aproximación metodológica. A lo largo de este artículo trataremos de responder a preguntas tales cómo ¿qué implicaciones metodológicas tiene todo este cambio paradigmático en el marco de los procesos de desarrollo? o ¿Cómo deben reorientarse los procesos clásicos para alinearse con los nuevos mimbres establecidos? Todas estas preguntas alcanzan dos niveles de respuesta que presentamos a continuación.

### Perspectiva de Caja Negra

Como puede apreciarse en la figura 1, desde una perspectiva de caja negra, los procesos de construcción compositiva operan a dos niveles de desarrollo. A continuación describimos cada uno de estos niveles:

- **Nivel de dominio.** En el nivel de dominio se asume la existencia de un catálogo de componentes previamente diseñado que responde a las necesidades generales que se dan en el marco de un dominio. La labor en este nivel consiste en realizar un adecuado ejercicio de descomposición para identificar, diseñar y construir los componentes que se dibujan como necesarios en el marco de dicho dominio. 

- **Nivel de proyecto.** A nivel de proyecto, por el contrario, el ejercicio de construcción compositiva de una solución particular se enmarca en los requerimientos de un proyecto específico y consiste, en este sentido, en seleccionar componentes del catálogo de dominio para aplicarlos en el ámbito del proyecto particular.

<figure>
  <img src="/images/articles/recortes/componentes/post-03.01.png" 
       alt="Proceso de Composición. Perspectiva de Caja Negra">
  <figcaption>Proceso de Composición. Perspectiva de Caja Negra</figcaption>
</figure>
 
El proceso de composición, bajo este prisma, se presenta como una frontera entre ambos niveles de desarrollo. Los componentes seleccionados por los desarrolladores en el nivel de dominio atraviesan dicha frontera transformándose adaptativamente para lograr encajar en las necesidades particulares de cada proyecto específico. En efecto, como se observa en la figura 1, distintos proyectos de orientación a componentes hacen distintos usos del componente adaptado representado aquí en forma pentagonal.

Y es que la adaptatividad, pese a que hasta la fecha no tiene un soporte muy sólido en la mayoría de los frameworks de componentes, se presenta dentro de este paradigma como una característica esencial de valor diferencial. Ya descubriremos por qué esto es así en la siguiente sección. Pero de momento ya hay que señalar que su aplicación tiene una repercusión importante. A diferencia de lo que ocurre en otras aproximaciones paradigmáticas donde sólo se reconocen 2 tipos de artefactos (por ejemplo en la orientación a objetos: clases y objetos) aquí, en la orientación a componentes, debemos distinguir 3:

- **Meta-componentes.** Los meta-componentes responden a todos aquellos artefactos diseñados estratégicamente para nutrir un catálogo a nivel de dominio que responda a todas las necesidades canónicas dentro de dicho dominio.
 
- **Componentes.** Los componentes viven en el ámbito del proyecto particular donde se utilizan y son el resultado de haber hecho atravesar los meta-componentes del catálogo de dominio por el proceso de composición que, como dijimos lleva implícito una transformación de carácter adaptativo.

- **Instancias de Componentes.** Finalmente llamaremos instancias de componentes a cada uno de los ejemplares de un prototipo componente que se crean en el ámbito de una web – dicho sea aquí en sentido JavaScript el término prototipo.
Una vez hecha esta rectificación lexicográfica, que ilustramos en la figura 2, ya podemos sentirnos más tranquilos. Difícil iba a ser entendernos si utilizáramos el mismo término para referirnos indistintamente a instancias, componentes y meta-componentes.

<figure>
  <img src="/images/articles/recortes/componentes/post-03.02.png" 
       alt="Tipos de Artefactos en la Orientación a Componentes">
  <figcaption>Tipos de Artefactos en la Orientación a Componentes</figcaption>
</figure>

Pero el reto dentro de esta perspectiva – la de caja negra – reside  sobre todo y ante todo en saber cómo se puede obtener un catálogo de meta-componentes bien formado para que de cobertura a todas las necesidades de dominio. No es momento de entrar en profundidad a describir estos aspectos. Ya hablaremos de ello más adelante cuando describamos los problemas de gobierno en los procesos de orientación a componentes. Lo que si conviene estresar es la idea de que la orientación a componentes exige que los desarrolladores construyan artefactos que contribuyan al ámbito de un dominio general y no al de un proyecto específico. Es decir, no es correcto hacer componentes para mi proyecto de tienda en línea. Lo correcto es crear todos los componentes del dominio vertical de e-commerce para obtener un catálogo bien formado de meta-componentes y después realizar las consumiciones adaptativas pertinentes del mismo para aplicarlas en el ámbito de mi proyecto particular. 

Merece la pena señalar aquí, cómo se puede llevar a cabo este proceso de creación de catálogo desde una perspectiva metodológica. En este sentido podemos hablar de 3 posibles estrategias:

- **Estrategia descendente.** En la estrategia descendente (top-down) se parte de una fase preliminar de análisis de dominio que tiene por objeto descomponer el mismo en todos sus meta-componentes característicos. Esta fase suele estar formada por 3 tipos de actividades. Primero se identifican todos los componentes en el ámbito de dicho dominio y se les asigna un espacio bien definido de responsabilidades a los mismos. Después se realizan las actividades de diseño arquitectónico que describirán cuáles son los contratos de los meta-componentes y cómo se articulan colaboraciones entre los mismos. Finalmente, se pasa a desarrollar dichos meta-componentes para convertirlos en artefactos tangibles dentro de un repositorio de código.

- **Estrategia ascendente.** En la estrategia ascendente (bottom-up) se comienza arrancando uno o varios proyectos de cliente y se construyen componentes específicos para dar respuesta a las necesidades particulares de dichos proyectos. A medida que los proyectos avanzan, se realizan actividades de análisis transversal para identificar partes comunes y refactorizarlas en componentes que puedan ser reutilizados en cada proyecto. Finalmente, esos componentes se generalizan y se convierten así en meta-componentes que se contribuyen al catálogo de dominio.

- **Estrategia híbrida.** La estrategia hibrida parte de un análisis parcial de dominio, siguiendo las prescripciones de la aproximación descendente pero a la vez desarrolla componentes específicos para dar respuesta a las necesidades de proyectos en curso, según prescribe el enfoque ascendente. Si en el proceso de adaptación a proyecto o en el de factorización transversal se identifica una colaboración entre componentes susceptible de ser elemento de reutilización, ésta se generaliza y encapsula para ser contribuida a dominio en forma de meta-componente.

El hecho es que, independientemente de la estrategia que se escoja, debemos garantizar siempre que el proceso converge a un catálogo bien formado. Esto es, completo y sin existencia de solapamientos funcionales entre meta-componentes. En este sentido, cada tipo de estrategia tiene sus ventajas e inconvenientes. La estrategia descendente genera un menor número de solapamientos funcionales desde el principio al arrancan desde una fase de análisis temprana del dominio.  Ello implica un menor número de iteraciones para alcanzar la estabilidad del catálogo, lo cual significa a su vez que es la aproximación más rápida para disponer de dicho catálogo. Pero, por contrapartida, exige más tiempo inicial hasta poder empezar a construir proyectos. Yo es la aproximación que recomiendo siempre a mis clientes. 

Por su parte, la estrategia ascendente tarda mucho más tiempo en converger hacia un catálogo bien formado ya que los artefactos que se promocionan al nivel de dominio suelen tener características intrínsecas del proyecto particular de donde se extrajeron. Sin embargo, este tipo de estrategias se pueden aplicar mucho más pronto a proyectos específicos. Pero cuidado, porque correr para tener un primer proyecto funcionando es la clave para fracasar en las iniciativas de orientación a componentes. Hay que tener presente que si no conseguimos hacer de la orientación a componentes una historia de éxito en relación a la reutilización dentro de nuestra corporación, lo más seguro es que nuestro jefe se sienta defraudado por nuestras promesas de éxito y pierda confianza primero en la iniciativa y después en nosotros. 

Finalmente, las estrategias híbridas intentan recoger lo mejor de ambos mundos. Tratan de comenzar por un proceso de análisis y arrancan proyectos en fase temprana. De esta manera si se descubren colaboraciones entre componentes susceptibles de ser encapsuladas y reutilizadas en otros contextos se promocionan a dominio como un nuevo meta-componente. El problema de esta aproximación radica en que con frecuencia este último tipo de contribuciones suele conducir a la necesidad de llevar a cabo pesadas reorganizaciones del catálogo de dominio que son complejas de desarrollar y suponen un alto coste en tiempo y recursos.  

### Perspectiva de Caja Blanca

Desde una perspectiva de caja blanca, nos preocupamos de estudiar cada una de las actividades que forman parte del proceso de composición. Sin embargo antes de profundizar en dicho proceso deberíamos dar una definición formal de a qué nos estamos refiriendo cuando hablamos de composición:

> **Composición.** Componer es acoger un nuevo artefacto en el marco de una arquitectura de componentes para que se adapte a la misma y consiga operar con el resto de componentes de la vecindad de forma satisfactoria. 

Como se puede apreciar en la figura 3, cada meta-componente de catálogo atraviesa un proceso de 4 fases en cascada hasta estar preparado para operar en el marco de un proyecto particular. A estas actividades hemos incluido en la figura el punto de anclaje de una actividad más de encapsulación y generalización cuya responsabilidad es articular las promociones de componentes al catálogo de dominio propias de las estrategias ascendente e híbrida tal y como fueron descritas en la sección anterior.

<figure>
  <img src="/images/articles/recortes/componentes/post-03.03.png" 
       alt="Proceso de Composición. Perspectiva de Caja Blanca">
  <figcaption>Proceso de Composición. Perspectiva de Caja Blanca</figcaption>
</figure>

Describiremos brevemente, a continuación, cada una de estas 4 fases características que forman parte del proceso de composición:

- **Actividad de localización.** El primer paso para comenzar con el proceso de composición consiste en garantizar que el componente recibido va a encontrar el espacio específico de responsabilidad dentro de la arquitectura donde debe operar. Decir esto equivale a que tal componente debe localizar a todos aquellos artefactos de la vecindad que suponen una oportunidad de colaboración con él. Esta prescripción supone un punto de diferenciación con otras arquitecturas. En la orientación a objetos por ejemplo, los artefactos son entidades pasivas cuya actividad se mueve desde clases de control. En la orientación a componentes por el contrario, cada componente debería, en la medida de lo posible, ser una entidad autónoma para encontrar la vecindad con la que debe operar.

- **Actividad de adaptación.** En los meta-componentes de catálogo existen muchas características de  contrato que pueden impedirles operar en el marco de un proyecto particular. Por ejemplo, un componente puede no estar preparado para emitir eventos en el marco de un proyecto con arquitectura dirigida por eventos [[2]](https://goo.gl/VSbZyH) o incluso algo más trivial, puede que el nombre de los métodos del contrato funcional del componente no corresponda a lo esperado por los componentes de la vecindad en el marco de otro proyecto. Para resolver estos problemas, deben aplicarse – como venimos diciendo – técnicas de transformación adaptativa. En general,  estas técnicas tienen a su vez un carácter recurrente por lo que son susceptibles de encapsularse en librerías de transformación. Según la aproximación que se use se pueden distinguir varios tipos de técnicas adaptativas. Pero eso es algo que ya describiremos. 

- **Actividad de enlace.** Superados los problemas de adaptación, debemos articular los mecanismos de enlace compositivo pertinentes que permitan articular la comunicación entre los componentes. Dado el alto nivel de reutilización transversal que se pretende dar a los mismos, la realización de esta actividad conviene que se lleve a cabo de forma externa. A la postre, articular estos mecanismos de enlace forma parte de las actividades que el usuario programador debe llevar a cabo en el marco de su proyecto particular. En efecto, cada enlace establecido responde a un requerimiento de comunicación asociado a dicho proyecto. Asimismo, el tipo particular de enlace que se define depende del modelo de comunicación que queramos articular dentro de la arquitectura. Si operamos en el marco de una arquitectura por eventos, el enlace compositivo consistirá en disponer los mecanismos de escucha oportunos. Sin embargo, si operamos en un entorno basado en llamadas a métodos, los enlaces compositivos consistirán en articular mecanismos de intercesión para que en algún punto de la ejecución de un método de un componente se invoque el método de otro componente al que queremos enlazar. 

- **Actividad de contextualización.** Finalmente la contextualización es la actividad por la cual los componentes reciben su configuración y logran operar en el contexto arquitectónico de uso. En este sentido se puede hablar de 3 niveles de madurez. El primero de ellos asigna configuraciones estáticas a cada componente de manera explícita. El segundo nivel centraliza la lógica de configuración de artefactos para que los componentes puedan solicitar bajo demanda y de forma explícita a una factoría la creación de las instancias de componentes con las que se debe operar. Esto es lo que se conoce como inversión de control y es típico de componentes de caja negra. El último nivel de madurez corresponde a aquél en el que el proceso de configuración e inyección de dependencias se realiza incluso de manera transparente para cada componente por artefactos del entorno. 

Nuevamente, debemos destacar aquí que la clave diferencial con respecto a propuestas paradigmáticas anteriores reside precisamente en la fase 2 de adaptación. Vale la pena discutir las implicaciones que tiene este paso en el tipo de arquitecturas resultantes.

- **Arquitecturas Polimórficas OOP.** En las arquitecturas clásicas – en las de programación funcional y especialmente en las de orientación a objetos con sistemas de clases de tipos fuertes – las arquitecturas se diseñan estratégicamente para dar cabida a los diferentes tipos de variantes que, siendo artefactos distintos, responden a comportamientos semánticamente diferentes. Por ejemplo, en un túnel de lavado, la colaboración que se encarga del proceso de lavado se expresa en términos de la entidad abstracta Vehículo bajo la previsión de que en la arquitectura tengan cabida bajo esa abstracción diferentes variantes polimórficas (Coche, Camión o Moto). En relación a lo que nos interesa todo ello significa que la responsabilidad de saber aceptar distintas variantes de artefactos recae sobre el diseñador de la arquitectura, que por medio de ciencia infusa, debe prever apriorísticamente cuales son los puntos potenciales de extensión liskoviana.

- **Arquitecturas Rígidas COP.** En las arquitecturas de orientación a componentes todo lo anterior no es así. Se trata de diseños estructurales que establecen claramente las dependencias entre artefactos y la división de responsabilidades. Si un artefacto quiere entrar a formar parte de la arquitectura deberá prepararse de forma adaptativa preliminar para que encaje en las necesidades estructurales impuestas por la arquitectura. Justo como venimos diciendo a lo largo de todo este articulo. Todo esto quiere decir que el ecosistema tecnológico en este caso no sólo se centra en una arquitectura sino que se acompaña de una librería de transformaciones que ayudan a los componentes a adaptarse para realizar el encaje pertinente.

La figura 4 viene a representar esquemáticamente esta diferencia esencial entre las arquitecturas polimórficas de orientación a objetos y las arquitecturas rígidas con transformadores propias de la orientación a componentes. Como puede apreciarse en la arquitectura de objetos (a) se ha definido apriorísticamente un contrato abstracto B para dar receptividad sustitutiva a todos los tipos de artefactos, presentes y venideros, que respondan a cierto comportamiento. Por el contrario, en la arquitectura de componentes (b), es responsabilidad de cada componente adaptarse previamente para encajar en el marco de la arquitectura.  Típicamente esta adaptación está soportada por el ecosistema de meta-programas que también forman parte de la arquitectura.

<figure>
  <img src="/images/articles/recortes/componentes/post-03.03.png" 
       alt="Arquitecturas Polimórficas (OOP) vs Arquitecturas Rígidas (COP)">
  <figcaption>Arquitecturas Polimórficas (OOP) vs Arquitecturas Rígidas (COP)</figcaption>
</figure>

En relación a la interpretación semántica de los artefactos, la inclusión de la adaptación también tiene una importante repercusión. En la orientación a objetos, las clases representan entidades inmutables establecidas en el marco de un proyecto que son inferidas a través de un sesudo proceso de análisis. En la orientación a componentes, por el contrario, los artefactos presentan unos contratos de alta plasticidad para adaptarse bajo demanda de las condiciones ambientales a las necesidades de una arquitectura particular y potencialmente cambiante a lo largo del tiempo. Esta es una de las claves de por qué la orientación a componentes consigue altas cotas de reutilización y productividad. Pero de eso ya hablaremos a su debido momento.

En fin, que desarrollar proyectos de orientación a componentes significa construir persiguiendo la reutilización y aplicando para ello técnicas de adaptación. Pero ante todo y sobre todo, en primera instancia es necesario idear, diseñar y construir un catálogo de componentes bien formado que opere a nivel de dominio y sólo entonces, empezar a desarrollar. Independientemente de estrategias, si no operamos siempre con la idea fija de obtener un catálogo de componentes de dominio no estamos haciendo uso del paradigma de programación orientada a componentes.  Incluso aunque se utilice para ello la misma tecnología. En próximas entregas hablaremos de esto: componentes que no lo son, o no deberían serlo.

