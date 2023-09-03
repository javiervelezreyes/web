---
title  : El tipo que no lo era
slug   : el-tipo-que-no-lo-era
author : Javier Vélez
date   : Jun 2022
---

Hasta aquí todo parece sencillo, pero lo cierto es que hay una diferencia fundamental entre nuestro paradigma de programación - la orientación a componentes - y todos los anteriores. En los primeros existen lenguajes de programación que dan soporte preciso a las definiciones establecidas. Pascal o C para la programación estructurada, Java o C# para la orientación a objetos y Lisp o Haskell para la programación funcional.

Sin embargo, la orientación a componentes es un paradigma sin un lenguaje de soporte propio y específico. Las ideas de esta corriente de desarrollo deben desplegarse sobre los mimbres de una sintaxis ajena y tomando prestadas conceptualizaciones foráneas. Típicamente, se escogen para este fin lenguajes orientados a objetos, donde los componentes se materializan en forma de objetos. Pero, nada impediría hacer este mismo desarrollo conceptual, por ejemplo, dentro del mundo de la programación funcional.

Esta elección tiene, sin embargo, una repercusión importante. Las capacidades operativas que pueden articularse con componentes se verán, en general, fuertemente condicionadas por la pila tecnológica elegida y, en particular, por los mecanismos proporcionados por el lenguaje en relación a su sintaxis y semántica asociada. Al ser los componentes objetos, las técnicas básicas al servicio de la composición son la encapsulación, la delegación, la herencia, la genericidad y el polimorfismo. Si los componentes hubiesen sido funciones, dichas técnicas se restringirían a la aplicación del orden superior, la evaluación parcial y la composición funcional.

En línea con lo anterior, deberíamos elegir un lenguaje y un stack tecnológico sobre el que desarrollar todo este discurso. Sin embargo, dado que está en mi intención centrarme, a partir de ahora y en los siguientes artículos de esta serie, en los componentes de front, la elección ya está en buena parte tomada. Cuando hablemos de componentes, nuestro lenguaje de soporte será JavaScript [4] y por extensión todos aquellos super-lenguajes que transpilan a JavaScript. Los mecanismos para la composición serán los propios de este lenguaje y el concepto de componente se articulará en base al modelo de objetos por prototipado de JavaScript [5].

Dicho esto, el resto de elementos de la ecuación se centra en determinar cuál es el mejor framework para desarrollar nuestras soluciones. En este sentido, actualmente compiten varias alternativas entre las que destacan [6] [7] y [8]. Los propósitos son similares y las aproximaciones bastante miméticas. Pero si en algo se diferencian todas ellas es en el modelo de componente. Es decir, en la conceptualización que hacen del término componente y en el uso pragmático que le dan.

Modelo de componente. El modelo de componente de un framework orientado a componentes describe las partes constituyentes de los componentes y cómo éstas dan soporte al conjunto de requisitos a los que se pretende dar cobertura.

Nuestro foco de atención a lo largo de este artículo será, en este mismo sentido, precisar qué es un componente en términos de su anatomía interna y analizar las responsabilidades de cada una de sus partes constituyentes. Pero todo ello hecho con agnosticismo de una solución particular.

I. Perfiles de Contrato
Todos tenemos una idea intuitiva de lo que es un componente: una etiqueta personalizada fuera del léxico estándar HTML que presenta un rendering y comportamiento reactivo específico y que atiende a unos objetivos claramente definidos en el marco de algún problema. No obstante, precisar algo más esta idea en busca de las partes constituyentes de los componentes nos resultará conveniente.