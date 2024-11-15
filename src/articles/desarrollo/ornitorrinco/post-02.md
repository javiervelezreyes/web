---
title  : Clases & Funciones
slug   : clases-y-funciones
author : Javier Vélez
date   : Dic 2023
---

## Introducción

Tal vez la sentencia más sonada en relación con la orientación a objetos es que se trata de un paradigma basado en clases, ya que estos son los artefactos esenciales que sirven de soporte a los procesos de construcción de objetos. Esta afirmación tan simplista, que ha aparecido recurrentemente en la literatura más académica, encierra muchas trampas que conducen frecuentemente a confusión. Por eso, parece conveniente empezar por este punto para separar grano de paja.

Y es que, que la orientación a objetos es un paradigma que requiere como punto de partida la definición de clases es una creencia tan extendida como falsa. Muchos autores ponen foco de atención al hablar de orientación a objetos en el concepto de clase cuando en realidad el verdadero ciudadano de primera categoría no es la clase sino la abstracción de datos, fuente de la cual nacen los objetos.

A lo largo de este artículo, intentaremos explicar cómo el uso de clases, como mecanismo de construcción o definición de abstracciones, es sólo un recurso ofrecido por algunos lenguajes de soporte a la orientación a objetos. Pero en modo alguno es punto fijo de paso en la construcción de software de esta naturaleza.

Las clases son, si se quiere, un patrón más de diseño para crear soluciones orientadas a objetos. Y resultan en un recurso de valor especialmente relevante en aquellos modelos basados en clasificación de estirpes polimórficas como descubriremos a lo largo de esta serie. Pero existen aproximaciones contrapuestas en las que se conduce a la obtención de abstracciones de datos a través de modelos de fabricación alternativos. 

## Construcción Basada en Clases

El punto de partida para crear soluciones orientadas a objetos radica en identificar los elementos dentro de la arquitectura donde se centralizan los procesos de construcción de objetos. Para el modelo estático, este tipo de elementos queda materializado por el concepto de clase. Es decir, las clases son los artefactos que sirven a efecto de la obtención de los objetos que participarán en el espacio de la solución durante el tiempo de ejecución.

Desde el punto de vista funcional, una clase no solamente incorpora toda la lógica de creación dentro del constructor de ésta, sino que, opcionalmente, es capaz de articular procesos de construcción por medio del refinamiento extensivo de la lógica residente en los constructores de otras clases base. Esto es algo que explicaremos más adelante al hablar de los mecanismos de herencia.

Desde el punto de vista estructural, por su parte, la clase incorpora toda la declaración extensiva de propiedades y métodos miembro que caracteriza el cuerpo de los objetos en ejecución. Por tanto, todos los objetos que provienen del uso de una misma clase en su proceso de construcción no sólo compartirán una misma estructura anatómica, sino que, de manera derivada, presentarán un mismo perfil de comportamiento, lo que resulta muy relevante durante la ejecución tal como explicaremos en próximos artículos.

En el siguiente listado se puede apreciar un ejemplo abstracto de cómo la definición de una clase no sólo permite describir lógica de creación de objetos por medio de la definición de un método constructor, sino que, adicionalmente, incluye, de manera explicita la relación de métodos miembro vinculada a los objetos de esa clase.

```
class Core {
  constructor (x) {}
  fx () {}
  fy () {}
}
```
<div class="listing">Construcción Basada en Clases.</div>

De acuerdo a todo lo anterior, en el modelo estático de orientación a objetos deben distinguirse dos tipos de artefactos. Las clases, más vinculadas al proceso de diseño donde se capturan todas las cualidades de la solución y los objetos, que son la manifestación en memoria que se obtiene como resultado de la ejecución.

Esta diferenciación no sólo se limita al plano conceptual, sino que es una realidad en relación a cómo han sido convencionalmente construidos los compiladores de lenguajes orientados a objetos. En efecto, si diseccionáramos un programa orientado a objetos en plena ejecución observaríamos que el soporte al estado interno de cada objeto se aloja en zonas de memoria diferentes de aquellas reservadas a la gestión del cuerpo algorítmico vinculado a cada clase. Y así, la asociación necesaria entre estado y cuerpo algorítmico queda resulto por el compilador a través de procesos de referencia interna que resultan transparentes al desarrollador.

Algunos lenguajes con ambiciones de flexibilización expresiva incluso reconocen un tercer tipo de artefactos dentro de las arquitecturas orientadas a objetos. Se trata de las meta-clases, artefactos capaces de crear clases de manera dinámica a base de procesos de construcción. Si bien este tipo de artefacto puede resultar atractivo en ciertos escenarios, lo cierto es que su uso ha sido culturalmente bastante residual. Esto tal vez se deba al hecho de que existe un entendimiento bastante extendido dentro de la comunidad de que las clases son los artefactos utilizados por arquitectos y desarrolladores en fase de diseño para hacer una especificación estática del tipo de elementos que conforma una solución orientada a objetos.

## Construcción Centrada en Funciones

De manera contrapuesta a la perspectiva estática, en el modelo dinámico, los objetos son concebidos como abstracciones construidas por agregación de capacidades funcionales y estructurales. Un objeto es, de esta manera, un mero contenedor que aglutina una colección de propiedades y métodos miembro seleccionados por criterios de cohesión.

Para llevar a cabo procesos de creación no es preciso introducir nuevos elementos conceptuales. La labor de construcción de abstracciones dentro de esta aproximación puede ser llevada a cabo por cualquier artefacto capaz de generar tal suerte de construcciones. Una función, un generador e incluso el método miembro de un objeto son candidatos excepcionales de este tipo de artefacto. 

El siguiente listado muestra un ejemplo abstracto operativamente equivalente al de la sección anterior pero utilizando, en este caso, una función como elemento de construcción. Cómo se observa, la función recoge toda la configuración paramétrica relacionada con la construcción e incorpora al cuerpo del objeto toda la carga estructural necesaria, incluida la lógica de inicialización. Como resultado la función termina devolviendo un objeto literal estructural y funcionalmente equivalente al del listado anterior con lo que la construcción resulta en otro modelo de obtención de objetos perfectamente viable en aquellos lenguajes en los que tal cosa esta permitida como es el caso de JavaScript.

```
function Core (x) {
  function Init () {}
  function fx   () {}
  function fy   () {}
  return Init ({ fx, fy })
}
```
<div class="listing">Construcción Basada en Funciones de Fábrica.</div>

En este tipo de aproximaciones constructivas, la referencia a los valores de configuración no se accede mediante el puntero constante de contexto this, como sí ocurre con el uso de clases, sino que se hace a través del uso de los mecanismos de retención léxica que proporciona el lenguaje. Si bien, la pragmática de desarrollo reconoce diferentes formas de codificar este tipo de estrategias que incluso han llegado a documentarse como patrones de diseño - me estoy refiriendo a los así llamados patrón Module y patrón Reveal - lo cierto es que no son más que variantes estilísticas que no arrojan diferencias significativas desde un punto de vista semántico. 

A la postre, se trata de conceptualizar algunas funciones como verdaderos artefactos de construcción de objetos en tanto que son capaces de devolver abstracciones de datos. Si bien esta idea puede resultar habitual al comenzar con el desarrollo orientado a objetos dentro del modelo dinámico, lo cierto es que, con el tiempo, llega a resultar hasta algo un poco cómico diferenciar a las funciones en virtud del tipo de dato que devuelven. Las funciones a veces retornan objetos con los que podemos empezar a operar a partir de un relato orientado a objetos. Pero no sé por qué tenemos que llamarlas constructores. 

Pero si bien todo lo anterior resulta verdaderamente interesante, lo que resulta aún más significativo, de cara al estudio comparativo que estamos realizando, es que el uso de funciones como artefactos constructores habilita la posibilidad de establecer ecosistemas de objetos que no requieran de la participación de otros artefactos como es el uso de las clases.

Ahora bien, ¿son este tipo de objetos equivalentes a los obtenidos en los procesos de construcción que implican el uso de clases? Lo cierto es que sí, pero no del todo. Desde un punto de vista semántico, los objetos obtenidos por sendas vias de construcción resultan equivalente y mutuamente intercambiables en cualquier contexto arquitectónico de uso. Sin embargo, desde un punto de vista estructural, la anatomía oculta diferencias. 

Mientras que los objetos del modelo dinámico son completamente autocontenidos en el sentido de que incorporan todas sus capacidades dentro de su propio cuerpo, los objetos basados en clases usan mecanismos de referencia para encontrar dichas capacidades en su clase asociada pero no incluyen las mismas en el cuerpo del objeto. Esto explica el argumento anterior de que los objetos aquí son meros contenedores de capacidades agregadas por cohesión y no artefactos regulados por una entidad superior como es el caso de las clases.   

En sentido estricto, parece sensato argumentar, que los modelos de ejecución basados exclusivamente en el uso de objetos y funciones de construcción pueden ser considerados más puros, que aquellos que se sirven de otro tipo de artefactos que a la postre introducen más ruido estructural dentro de las soluciones. Las clases, no obstante, son un artefacto de relevancia que como discutiremos en próximos artículos, ayudan a articular procesos de razonamiento relevantes con respecto al comportamiento sistémico que muestra el programa en ejecución.

## Conclusiones

A lo largo de este artículo hemos descrito las diferencias que presentan el modelo estático y dinámico de la orientación a objetos en relación a las actividades llevadas a cabo para dar soporte a la creación de objetos.

El modelo estático se sirve del concepto de clase para encapsular la lógica de construcción y enfatiza la idea de que una clase es una descripción extensiva de la estructura interna que comparten todos los objetos que pertenecen a la misma. Si se quiere, la clase opera como molde o estructura de plantilla que prescribe la morfología operativa de los objetos de esa clase confiriéndoles, como veremos en próximos artículos, propiedades relevantes de cada a la participación en contextos arquitectónicos de uso específicos. 

En la conceptualización que se hace desde el modelo dinámico del modelo constructivo, se entiende que la creación de objetos consiste, meramente, en el resultado de una actividad agregativa que reúne, por criterios de cohesión, un conjunto de capacidades que se asumen necesarias para operar en contextos de colaboración con otros objetos. La responsabilidad de este proceso es conferida al uso de funciones, que se interpretan como artefactos especializados capaces de llevar a cabo cualquier demanda constructiva.  

Que el concepto de clase no es más que un patrón de diseño cristalizado en muchos lenguajes mediante el uso de palabras reservadas es una realidad fácil de constatar. En todos esos lenguajes, en muchas ocasiones se externaliza por estrategia la lógica de construcción de abstracciones hacia otros artefactos por aplicación de otros patrones como el método de fábrica, la fábrica abstracta, el pool de construcción, o la construcción por fases. En todos esos casos, la clase como unidad de construcción es un concepto sobrante.

Que algunos lenguajes dentro del modelo dinámico de orientación a objetos hayan abrazado el concepto de clase, resulta circunstancial y es el resultado del movimiento modístico que sufren muchos de ellos presionados por modelos culturales de comunidad. En el caso particular de JavaScript es preciso reconocer que la incorporación de clases ha venido a ofrecer elegancia en una construcción de abstracciones más clásica y convencional. Sin embargo, es preciso advertir que lo que se llama clase en ese contexto no es exactamente lo que se reconoce como tal dentro de la literatura y es meramente una capa de azúcar sintáctico incorporado sobre la base del modelo de prototipos propio del lenguaje. Incidiremos en esta misma idea más adelante en próximos artículos. 
