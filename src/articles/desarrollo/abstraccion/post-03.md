---
title  : Programación Funcional
slug   : programacion-funcional
author : Javier Vélez
date   : Nov 2023
---

## Introducción

Habían pasado ya algunos años desde que la programación estructurada estuviera en pleno apogeo. La incipiente comunidad de desarrolladores e ingenieros de software estaba empezando a aprender una nueva forma en la que se podía dar respuesta a los problemas de complejidad creciente que se venían demandando en base al uso de algoritmos encapsulados fuertemente estructurados de acuerdo a un diseño modular descendente.

La nueva era de desarrollo había alcanzado una verdadera velocidad de crucero. Pero sin embargo, había una comunidad, esencialmente formada por matemáticos, que no parecía estar nada satisfecha en torno al rumbo que estaban tomando los acontecimientos. Concebir los modelos de solución como un entramado de procedimientos parecía una aproximación acertada. Sin embargo, pensar en ellos como algoritmos encapsulados con la potencialidad de poder modificar libremente las estructuras de datos de entrada, generaba serias dudas. 

Un procedimiento debería ser, ante todo, una operación capaz de trasformar una serie de parámetros de entrada en un conjunto de resultados de salida sin que ello reportara ningún efecto colateral en el estado de la máquina durante la ejecución. En este sentido, los procedimientos, más que cuerpos algorítmicos encapsulados, deberían ser entendidos como expresiones funcionales usadas para definir transformaciones declarativas de datos al puro estilo de las funciones en la matemática clásica. Y de hecho más que de procedimientos debería hablarse de funciones.

## Objetivos

Si bien todas estas ideas correctivas no parecían al principio tener un impacto relevante en relación a la forma de abordar los procesos de desarrollo de software, lo cierto es que rápidamente establecieron un punto de inflexión con respecto al paradigma de programación estructurada. Al hablar de funciones como ciudadanos de primera categoría, la forma de idear los procesos de ejecución no podía estar basada en modelos imperativos sino más bien en actividades de composición de funciones. 

Toda esta divergencia se materializaría rápidamente en el nacimiento de un nuevo paradigma conocido por el nombre de programación funcional. Pero, ¿qué es exactamente lo que tenían en la cabeza los miembros de la comunidad matemática al defender que debería establecerse un nuevo orden en el desarrollo de productos de software? Sin el ánimo de ser exhaustivos, las ideas de la programación funcional venían a perseguir los siguientes objetivos.

- **Declaratividad.** Ante todo, el desarrollo de soluciones de software debería ser más bien un esfuerzo declarativo. Más que elaborar complejos algoritmos de transformación del estado de la maquina, el desarrollo de software debería concebirse como una actividad de especificación formal de la semántica de las operaciones. Centrarnos en indicar formalmente qué significa cada operación de transformación sin indicar como se llevan a cabo las mismas ya que eso debería ser resulto por el compilador a través de la interpretación de tales especificaciones.

- **Fiabilidad.** Los programas diseñados a través de la definición declarativa de funciones puras que no presentaran efectos colaterales durante su ejecución garantizarían un comportamiento del programa mucho más estable y fiable que aquellas otras aproximaciones metodológicas pretéritas basadas en encapsulaciones algorítmicas. Un programa que se limitará a hacer una transformación de unos datos de entrada para generar unos resultados de salida tendría que presentar una propensión a errores mucho más reducida.

- **Verificabilidad.** El diseño funcional también reportaría una ventaja importante en relación a la capacidad de reflexionar sobre el diseño de soluciones desde un punto de vista de su verificación algorítmica. Dado que cada transformación se describía en términos declarativos e intencionales más que operativos y procedimentales, y también debido a que las funciones no presentaba efectos colaterales en ejecución, resultaba mucho más sencillo aplicar razonamientos formales acerca de la composición y comportamiento global del programa.

- **Reproducibilidad.** El diseño funcional también tendría la virtud de la reproducibilidad. En efecto, debido a que toda función se expresa exclusivamente en términos de una definición declarativa que transforma unos datos de entrada en otros de salida, éstas se pueden ejecutar tantas veces como se quiera. Al ejecutar una misma función múltiples veces sobre la misma base de parámetros de entrada, los resultados obtenidos siempre serán los mismos. Este comportamiento, que no aparecían los paradigmas anteriores, ofrecía mucha tranquilidad a los desarrolladores funcionales que entendían que sus modelos de solución resultaban altamente estables.

- **Escalabilidad.** Y finalmente, de manera derivada de las ideas anteriores, la programación funcional también garantizaría un mayor grado de escalabilidad con respecto a otras aproximaciones de construcción de software. En efecto, si el software se concibe como un encadenamiento compositivo de transformaciones que no presentan efectos colaterales, es posible escalar las soluciones para que operen en escenarios de alta concurrencia transaccional sin que ello suponga quebraderos de cabeza para los desarrolladores. Escalar es entonces solo una cuestión de ciclos de máquina.

Sin embargo, la programación funcional no venía sin penalizaciones. Concebir el desarrollo de software como un proceso de especificación formal declarativo complicaba, en cierto sentido, mucho las cosas. Sobre todo para la cultura imperante que reinaba el desarrollo de software en aquella época. Precisamente por estos motivos, durante unos pocos años, este nuevo paradigma de programación pareció emprender una diáspora hasta acabar predicando en el desértico espacio de la academia. 

Sin embargo, estas ideas tuvieron su resurgimiento cuando en la primera década de los 2000 apareció en escena la computación masiva en el ámbito del Big Data. Parecía que dentro de ese perímetro, las ideas de la programación funcional se convertían de repente en herramientas imprescindibles para hacer frente a tal demanda de procesamiento. Pero quizá conviene retomar este punto más adelante cuando hablemos de arquitectura.  

## Principios

Alcanzar los objetivos establecidos de la programación funcional parecía un esfuerzo menor. En principio, el mero hecho sustituir cada procedimiento estructurado por una función pura debería garantizar que el comportamiento general del programa cambiara en la dirección adecuada. Pero no todo iba a ser tán fácil. Como explicábamos anteriormente, esta  nueva concepción desencadenaría toda una suerte de cambios que impactarían de manera directa  en la forma de concebir todo el proceso compositivo de construcción de software.

En este sentido, parecía necesario establecer una colección de principios fundamentales de diseño que guiarán los procesos de desarrollo funcional. De hecho, como explicábamos en el artículo germinal de esta serie, la descripción de un paradigma pasa, inexorablemente, por la definición de este espacio dogmático. En términos generales podemos afirmar que los principios de la programación funcional son los siguientes.

- **Expresividad.** La programación funcional se enfoca en la expresividad del código, lo que significa que el código debe ser fácil de leer y entender. Esto se logra mediante el uso exclusivo de expresiones funcionales declarativas, que son funciones que no tienen efectos secundarios y siempre producen el mismo resultado para unos mismos datos de entrada.

- **Modularidad.** La programación funcional, así concebida, fomenta la modularidad del código de una manera distinta a como lo hacían los paradigmas anteriores. El código debe estar dividido en pequeñas piezas que puedan ser reutilizadas en diferentes partes del programa. Esto se logra mediante el uso de funciones como elemento de construcción nuclear para crear bloques de comportamiento.

- **Composición.** La programación funcional fomenta la composición de funciones de manera que éstas pueden ser combinadas para crear funciones más complejas. Para ello es necesario garantizar que cada función reciba a la entrada un único parámetro y, no en pocas ocasiones, que éste sea a su vez una función. Como explicaremos más tarde a este mecanismo se le conoce con el nombre de orden superior.

- **Inmutabilidad.** La programación funcional debe garantizar la inmutabilidad de los datos durante el proceso de transformación. Esto implica que los datos de entrada a toda función no pueden ser modificados en modo alguno. En su lugar, cada función debe expresarse como una reformulación declarativa que crea una nueva estructura de datos desde cero, a partir de los datos recibidos a la entrada.

- **Transparencia referencial.** Finalmente, la programación funcional debe garantizar la transparencia referencial, lo que significa que una función siempre debe producir el mismo resultado para una entrada dada, sin importar en qué parte del programa se invoque. Dicho de otra manera, allá donde aparezca la invocación a una función, ésta debería poder sustituirse por su cuerpo de definición sin afectar al comportamiento global del programa.

## Mecanismos

La programación funcional tiene sus orígenes allá por los años 30 en los trabajos germinales del cálculo Lambda desarrollados por Alonso Church. Lo cierto, es que este trabajo consiste, esencialmente, en la definición formal de un sistema de cómputo teórico. Pero ello, permitió sentar las bases para el surgimiento de lenguajes reales de programación funcional. Quizá el representante más canónico de esta estirpe queda representado por Lisp. Después, otros lenguajes más modernos, darían continuidad a este esfuerzo. Primero Scheme, Erlang o Caml, y más recientemente Haskell, Scala, F o incluso Rust.

Esencialmente, todos los lenguajes del paradigma funcional se centran en proporcionar cierta colección de mecanismos de soporte. Pese a ello, hay que tener en cuenta, que esta cobertura suele variar mucho de unos lenguajes a otros, especialmente por el modismo en el que hemos caído últimamente en el que se abrazan - no se si por complejo - múltiples paradigmas de manera simultanea y parcial. A continuación describimos los mecanismos más importantes.

- **Razonamiento por Casos.** El razonamiento por casos que ofrecen los lenguajes de programación funcional permite la definición de funciones a partir del uso de construcciones sintácticas declarativas donde los valores retornados por la función se indican mediante una enumeración explícita de casos condicionales. Cada caso se define por medio de una expresión que determina la colección de valores que tienen que tomar los parámetros de entrada para que se cumpla dicho caso. Al cumplirse un caso, el valor asociado al mismo es retornado por la función.

- **Recursividad.** La recursividad permite que una función pueda invocarse a sí misma desde dentro de su propia definición. En este punto debe distinguirse entre recursividad directa e indirecta. Mientras que en el primer caso es la propia función la que se invoca recursivamente a si misma, en el segundo caso, la función invoca a una segunda función y es ésta la que vuelve a invocar a la función llamante de forma recursiva.

- **Evaluación Perezosa.** La evaluación perezosa permite aplicar técnicas de rendimiento a la evaluación de las expresiones lógicas de un programa. Si el resultado de una expresión ya queda determinado por la evaluación exclusiva de una parte de la misma entonces el lenguaje determina no continuar con la evaluación del resto de partes. Este comportamiento también recibe el nombre de evaluación en cortocircuito y, si bien no es un mecanismo exclusivo de este paradigma, cobra una relevancia especial para permitir establecer definiciones de estructuras potencialmente infinitas sin conflicto.   

- **Orden Superior.** Los mecanismos de orden superior permiten a los lenguajes de programación funcional recibir como parámetros de entrada a una función otras funciones que puedan ser internamente invocadas. Esta capacidad legitima la posibilidad de definir funciones que expresan modelos de comportamiento en función del comportamiento descrito por las funciones recibidas como parámetro. En este sentido, el orden superior supone el mecanismo central de la programación funcional para articular estrategias de abstracción.

- **Evaluación Parcial.** De manera complementaria al caso anterior, la evaluación parcial es un mecanismo que permite a una función de volver otra función como resultado de su invocación. El nombre de este mecanismo proviene del hecho de que desde la perspectiva del cliente La parametrización de una invocación se establece en diferentes fases consecutivas de evaluación que pueden ser cadencias en el tiempo a discreción.

- **Retención Léxica & Clausuras.** Las funciones que, por medio de los mecanismos de evaluación parcial, devuelven funciones como resultado pueden consumir los datos ambientales de los parámetros y variables locales allá donde fueron definidos. Este hecho permite a las funciones de retorno que retengan el espacio de información sobre el que operan lo cual resulta de utilidad como soporte a la ocultación de la información y el comportamiento paramétrico.

- **Currificación.** La evaluación parcial resulta un mecanismo tan potente que algunos lenguajes de programación lo han convertido en una seña de identidad. De esta manera, cuando se define una función de múltiples parámetros, el lenguaje interpreta que cada parámetro debe proporcionarse en una fase de evaluación consecutiva. A este mecanismo se le conoce por el nombre de currificación y resulta altamente potente. Cuando el lenguaje no lo proporciona como capacidad de base pueden definirse funciones de orden superior que articulen esta suerte de trasformación funcional.  

## Arquitecturas

Si bien en sus primeros años de vida, la programación funcional quedó confinada al ámbito más académico, lo cierto es que a principios de los 2000 se dió un claro resurgimiento de este paradigma. Esto fue motivado, como explicamos anteriormente, por la llegada de el Big Data que demandaba capacidades mayores de cómputo y exploraba otras formas de procesamiento masivo de la información. El uso de las herramientas que años antes se habían establecido dentro de la programación funcional parecía una gran idea. 

 Si las aproximaciones map/reduce fueron la solución inicial para articular actividades de procesamiento masivo de datos por lotes, pronto surgiría la necesidad de ofrecer soluciones equivalentes de transformación para el procesamiento de stream de datos de alta volumetría consumidos en tiempo real. Y desde allí, la cultura de lo funcional se extendió como un reguero de pólvora hacia todos los perímetros de desarrollo . Desde el back hasta el front, todos los frameworks y lenguajes empezaron a adquirir un sabor claramente funcional. El paradigma se había puesto de moda. 
 
 Las ideas de la programación funcional parecían haberse anclado con fuerza dentro de la comunidad de desarrolladores y pareciera que todo aquello que no tuviera un claro enfoque funcional era cosa del pasado. Como siempre parece que los seres humanos somos animales de extremos. El caso es que este impulso sí que permitió consolidar algunos tipos de arquitecturas como modelos de referencia para dar solución a ciertos arquetipos de problemas.
 
- **Transformación & Reducción.** Map/Reduce es un modelo arquitectónico para dar soporte a la computación paralela sobre grandes volúmenes de datos desplegados en clusters de computación. El nombre de este modelo está inspirado en los nombres de dos importantes operaciones dentro del paradigma de programación funcional, map y reduce, que se utilizan para aplicar una función a todos los elementos de una estructura de datos con el fin de transformarla o compactarla, respectivamente. Las arquitecturas así llamadas combinan operaciones de transformación y reducción para generar nuevas vistas de los datos de entrada.

- **Eventos & Señales.** Este tipo de arquitecturas son soluciones centradas en el procesamiento de señales y eventos ocurridos en tiempo real. Para cada evento recogido por el sistema, se invoca una o varias funciones que han sido previamente registradas como manejadores de ese tipo. Los eventos aportan al manejador una carga de datos que permite poner en contexto el tratamiento que debe hacer de la activación. El efecto neto obtenido de este tipo de arquitecturas es el de un sistema reactivo capaz de atender y responder, en tiempo real, a las notificaciones y cambios ambientales ocurridos de manera asíncrona.

- **Streams & Observables.** Las arquitecturas de streams y observables son otro modelo de arquitectura dentro de la programación funcional. Este tipo de soluciones se basan en la manipulación de flujos continuos de datos llamados streams. De esta manera, un stream es una secuencia de datos que se puede procesar de forma secuencial y declarativa de acuerdo a lo que venimos explicando. Por su parte, los  observables dentro de este tipo de arquitecturas, son entidades del problema capaces de generar, por medio de su observación, streams de datos funcionalmente procesables.

- **Canales & Filtros.** Las arquitecturas de canales y filtros son otro modelo arquitectónico de referencia que hace uso intensivo de las ideas de la programación funcional. Aunque, dentro de la literatura, pueden encontrarse sabores orientados a objetos de esta misma idea lo cierto es que, por su naturaleza, este tipo de solución está basado en la aplicación sistemática de las técnicas y mecanismos de la programación funcional. En concreto, en este tipo de arquitecturas, una tarea compleja se divide en una serie de elementos independientes que se pueden reutilizar. Cada elemento realiza una tarea única y se comunica con los demás a través de canales o tuberías. De esta manera se pueden mejorar el rendimiento, la escalabilidad y la capacidad de reutilización al permitir que los elementos de tarea que realizan el procesamiento se implementen y ejecuten por separado.

## Patrones

Aunque dentro de la programación funcional no existe una cultura de desarrollo basada en el uso de patrones de diseño, lo cierto es que cada vez que programamos en este paradigma estamos definiendo y aplicando ciertos patrones. Esto es debido al hecho de que en la programación funcional cada solución se diseña por medio de la definición de un esquema funcional abstracto que atiende a dar respuesta a la familia de problemas a las que pertenece el problema concreto que queremos resolver. Asi que cada vez que programamos, estamos definiendo - y usando - un patrón. 

Hacer un recorrido exhaustivo de todos y cada uno de los patrones de diseño que podrían identificarse dentro del marco de este paradigma de programación cae fuera del alcance de este artículo. Sin embargo sí que podemos identificar las familias más relevantes a las que pertenecen dichos patrones en función del espacio de problemas al que contribuyen con una solución probada.

- **Patrones de Adaptación.** La adaptación funcional es una de las capacidades más comunes de la programación funcional. Persigue transformar la firma de una función para adaptarla a las peculiaridades específicas del contexto de explotación. La aplicación de adaptaciones convierte a las arquitecturas funcionales en sistemas con alta plasticidad que permite alcanzar cotas elevadas de reutilización.

- **Patrones de Evaluación.** La evaluación parcial ofrecen estrategias de transformación funcional que permiten convertir una función completa en otra que se evalúa por fases. Esta técnica resulta muy útil para reducir la dimensión de una transformación de forma progresiva y articular procesos de comunicación entre funciones proveedoras y funciones cliente.

- **Patrones de Composición.** La programación funcional está basada en la construcción de abstracciones descritas como expresiones funcionales independientes. Los patrones de composición desvelan formas canónicas a través de las cuales es posible emular hasta cierto punto un estilo de programación secuencial con directivas de control de flujo similares a las que se dan en otros paradigmas. 

- **Patrones de Decoración.** Las capacidades adaptativas de la programación funcional permiten definir nuevas funcionas resultantes de un proceso de decoración de funciones pasadas en orden superior o de una combinación estratégica de dos o más funciones. Esto ofrece posibilidades de intercesión y transformación funcional que flexibilizan el uso de abstracciones funcionales en diferentes contextos de uso. 

- **Patrones de Inversión.** El diseño convencional de funciones dentro del paradigma consiste en la definición de operaciones que transforman un conjunto de datos de entrada para obtener ciertos resultados de salida. La aplicación de los patrones de inversión de control, permite la obtención de funciones que operan de manera inversa, fijando en retención léxica un conjunto de datos estables a los que se les hace atravesar distintas transformaciones definidas en funciones que son pasadas como parámetros.

- **Patrones de Ambientación.** Los patrones de programación ambiental definen entornos funcionales en el que ciertas transformaciones tienen una aplicabilidad contextual. Los pares describe/it típicos de los marcos de testing son un ejemplo de este tipo de aproximaciones en los que el comportamiento de cada it se resuelve en el ambiente de cada describe.

- **Patrones de Optimización.** La optimización de código, tanto en tiempo como en memoria, es una de las preocupaciones esenciales de la programación cuando se abordan problemas que requieren un alto grado de rendimiento. Los patrones de optimización presentan estrategias esenciales acerca de cómo realizar trasformaciones funcionales abstractas dirigidas a tal fin.

## Técnicas

El diseño de soluciones funcionales se desarrolla por medio de la aplicación de una colección de técnicas que hace un uso estratégico y modístico de los diferentes mecanismos del lenguaje que hemos descrito con anterioridad. Debido a la naturaleza de este paradigma, y a la particular cultura propia de la comunidad de desarrolladores funcionales, a veces, resulta complicado establecer las diferencias entre técnicas de desarrollo y patrones formales de diseño.

 El desarrollo exhaustivo de las diferentes técnicas de programación que se utilizan en el marco de la programación funcional cae fuera del alcance de este artículo. Sin embargo, con el ánimo de arrojar un poco de luz, podemos citar un par de familias de técnicas de aplicación frecuente. En el ámbito del diseño recursivo, por ejemplo, son habituales las técnicas de inmersión de control paramétrica o la transformación de recurrencias no finales a recurrencias finales. Por su parte, en lo relativo a la composición funcional, es habitual utilizar técnicas basadas eb el uso de functores, mónadas o aplicativos.

## Conclusiones

A lo largo de este artículo, hemos descrito las características de la programación funcional, un nuevo paradigma que, en la década de los 60 surgiría como contrapunto metodológico y conceptual al modo de desarrollo de software imperante hasta la fecha, basado en la programación estructurada. La comunidad de científicos y matemáticos entendían que los esfuerzos de construcción de soluciones computables deberían seguir una senda mucho más puramente matemática en la que las unidades de operación serían funciones sin efectos colaterales y los procesos de construcción de programas se inspirarían mucho más en las ideas matemáticas de composición funcional que en el uso de sentencias de control de flujo.

La idea era dar con espacios de desarrollo más centrados en la derivación formal de programas que resultaran en comportamientos estables, confiables y reproducibles que, a su vez no se vieran afectados por la volumetría de ejecución en contextos de alta concurrencia. Por eso, había que establecer la inmutabilidad y la transparencia referencias como dos de los principales vectores metodológicos de empuje.

La esencia de este paradigma de programación pareció atravesar un largo inverno, aletargado en las aulas de la academia hasta que los apetitos del procesamiento masivo de datos hicieron su aparición con la llegada del Big Data y el aumento de las capacidades de computo. De repente la programación funcional, y toda la tecnología, lenguajes y marcos de trabajo del mercado adquirieron un tufillo a lo funcional como si de repente el uso de funciones fuera la religión única y verdadera. Este impulso ha persistido hasta la fecha hasta tal punto que hoy es justo afirmar que ha desplazado notablemente a la orientación a objetos que venia siendo el paradigma reinante hasta la fecha. Pero este también es un paradigma de mucho interés y por eso requiere su propio espacio en el próximo articulo.