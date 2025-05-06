---
title  : Las 3 Evaluaciones del Funional
slug   : las-tres-evaluaciones-del-funcional
author : Javier Vélez
date   : Agosto 2017
---

Son muchos los caballos de batalla que caracterizan el paradigma de programación funcional. Pero sin lugar a dudas, uno de los elementos esenciales que hace de este tipo de programación algo diferente son sus modelos de evaluación. En este articulo los repasamos de forma comparada. 

Programar en funcional es pensar en funciones. Cualquier algoritmo puede - y debe bajo esta perspectiva - pensarse como un encadenamiento de expresiones funcionales. Sin embargo, la programación funcional no es sólo eso. Sobre todo y ante todo, cualquier lenguaje de programación que se precie dentro de este paradigma se caracteriza por un comportamiento específico acerca de cómo evalúa estas construcciones. Entender bien este hecho es muy importante de cara a controlar el paradigma ya que como desarrolladores es importante saber qué espera nuestro lenguaje de nosotros y de nuestro código.

Para hacer un estudio de forma comparada, a lo largo de este artículo, presentaremos los 3 tipos de evaluación que caracterizan un paradigma de programación y veremos, para cada uno de ellos, qué modelos son propios de la programación funcional. 

### Evaluación Impaciente vs Evaluación Perezosa

Comencemos por el más sencillo de los 3 tipos de evaluación, aquel que prescribe el momento exacto del tiempo en el que se deben evaluar las expresiones que aparecen en el código fuente. Encontrar una definición formal que permita diferenciar los dos modelos que se distinguen dentro de esta categoría es sencillo.

> La **Evaluación impaciente** evalúa cada expresión en el momento exacto del tiempo en que ésta es encontrada dentro del código fuente. La **evaluación perezosa**, por el contrario, posterga la evaluación de la expresión hasta que su valor es realmente demandado por el programa en ejecución.

El mejor ejemplo para ilustrar esta diferencia lo encontramos en las expresiones lógicas. Imaginemos una construcción de la forma `x && y`, que como sabemos corresponde a la conjunción lógica de las sub-expresiones en `x` e `y`. El modelo de evaluación impaciente evaluaría vorazmente las partes izquierda y derecha de la expresión y sólo cuando se obtuviera el valor de cada una de ellas se computaría el resultado final. La evaluación perezosa actúa de una manera más inteligente aplicando una estrategia de evaluación que, como hemos descrito, depende de la semántica de la operación posterior. En este ejemplo, primero se computa el valor en `x` y sólo si éste es cierto el compilador da continuidad a la evaluación de la sub-expresión en `y` dado que se sabe que si `x` fuera falso la operación de conjunción lógica arrojaría un valor lógico falso, con independencia del valor de la `y`. Un razonamiento similar puede encontrarse para el resto de operadores lógicos.

```
// A. Codificación
x > 0 && f (x)              // if (x>0) f(x)
xs && ys && xs.push(ys)     // if (xs && ys) xs.push (ys)
x && x.y && (x.y.z=1)       // if (x && x.y) x.y.z = 1
xs = [...(ys || []), ...zs] // if (ys) xs = [...ys, ...zs] else xs=[...zs]
(fn || x => x)(3)           // if (fn) fn(3) else 3

// B. Recursión
function search (xs, x) {
  return (function has (p) {
    return (
      p < xs.length && (
        xs[p] === x ||
        has (p+1)
      )
    )
  })(0);
}

// C. Optimización
function search (xs, x) {
  return (function has (p, q) {
    let m = Math.floor ((p + q) / 2)
    return p === q ? xs[p] === x :
      has (p, m) || 
      has (m+1, q)
  })(0, xs.length-1);
}
```

A primera vista, puede parecer trivial o poco relevante la utilización de uno u otro de estos modelos de evaluación. Pero lo cierto es que el uso de evaluación perezosa comporta importantes ventajas con respecto al otro modelo de evaluación. Principalmente, podemos destacar 3 motivaciones que conducen a esta preferencia tal y como se ilustra en el Listado 1.

- **Codificación**. La evaluación perezosa permite alcanzar un modelo de programación defensivo basado en aserciones que resulta generalmente más sinóptico y sencillo de leer y entender. En lugar de comprobar las precondiciones de una operación a base de un abuso de sentencias y expresiones condicionales se utilizan expresiones lógicas como prefijo de las operaciones a realizar para que operen de guarda que dispara la ejecución de la operación a la derecha sólo si se satisface cierta condición ambiental. En el código (A) del Listado 1 pueden verse algunos ejemplos de este uso canónico de construcciones.

- **Recursión**. De forma similar al caso anterior, los esquemas de diseño funcional recursivo también se prestan mucho a hacer uso de este tipo de construcciones. En el código (B) del Listado 1 aparece un ejemplo de función de búsqueda recursiva que determina si un elemento `x` se encuentra dentro de un vector `xs`. Tal función consiste en una sola expresión que indica que el vector contendrá al elemento, si éste se encuentra en la posición de análisis en curso `p` o está en alguna posición posterior a este índice, comenzando desde el `0`. Y todo ello siempre que `p` no supere la longitud del vector. En este caso, la evaluación perezosa nos servirá para que se pare la recursión cuando esta última condición sobre `p` deje de ser cierta o el elemento se haya encontrado. 

- **Rendimiento**. La evaluación perezosa también puede ser relevante en temas de rendimiento. El código (C) del Listado 1 muestra una función similar a la anterior, pero en este caso aplicando búsqueda binaria. Básicamente,  en cada iteración recursiva, el vector se parte - de forma imaginaria - en 2 subvectores iguales con ayuda de dos índices posicionales `p` y `q`. Buscar el elemento `x` consiste en recurrir con la búsqueda en cada subvector. El proceso terminará cuando se llegue a alguna situación unitaria donde `p`y `q` coincidan y pueda comprobarse que en ese punto reside el elemento buscado. La ventaja de la evaluación perezosa en este escenario consiste en que todo el proceso de encadenamiento compositivo por operaciones de disyunción lógica se para automáticamente en cuanto se encuentra la primera coincidencia ahorrando muchos ciclos de cómputo. Recuerde que el modelo de ejecución es secuencial y que las operación `has` no se lanzan en paralelo.

De todo lo anterior podemos colegir que el modelo de evaluación perezosa resulta bastante más conveniente que su contrapartida impaciente. No obstante, debemos ser conscientes de que en este modelo el orden de escritura de las sub-expresiones es relevante. Defender ante la matemática que computacionalmente no es equivalente la construcción `x && y` a su simétrica `y && x` es algo que, cuando menos, resulta comprometido.

La buena noticia es que este tipo de evaluación perezosa - la que opera sobre el espacio de expresiones lógicas, también llamada **evaluación en cortocircuito** - está en la mayoría de lenguajes actuales. Es el caso de nuestro lenguaje JavaScript. No obstante, hay otros escenarios donde resultaría importante disponer de evaluación perezosa y que no quedan cubiertos por JavaScript. Me estoy refiriendo a la evaluación en las llamadas a funciones.

Cuando evaluamos una función en JavaScript, todas las expresiones que se corresponden con sus argumentos actuales se evalúan primero y sólo después se invoca la función con dichos valores resueltos. Es decir, en este caso JavaScript aplica una estrategia de evaluación impaciente. Esta estrategia, conocida como **evaluación en modo estricto**, contrasta con aquélla que se encuentra en los lenguajes de programación funcional más puros en los que la evaluación de los argumentos se posterga hasta que su valor es necesario. En este contexto, este modo de evaluación perezosa recibe el nombre de **evaluación no estricta**.

```
function Ones () {
  return [1, ...Ones()]
}  
let ones = Ones ()
```

Para entender la relevancia de la evaluación no estricta (evaluación perezosa en el contexto sintáctico de llamadas a funciones) consideremos el ejemplo del Listado 2. En este código, se pretende hacer una definición de una estructura infinitamente recursiva de la constante 1. En un lenguaje con evaluación no estricta este algoritmo sería perfectamente válido. El vector de `1`s no resolvería la evaluación del operador de spreading sobre la propia función `Ones` hasta que no se solicitara el acceso a otro elemento de la colección. La evaluación estricta que aplica JavaScript en este contexto, resulta en este sentido inconveniente ya que trata de resolver dicha expresión y cae en una recursión infinita antes de devolver el control al programa llamante. Volveremos a este problema más adelante al hablar de la evaluación diferida.   

### Evaluación Completa vs Evaluación Parcial

La segunda categoría de evaluación refiere a la forma en que las funciones pueden ser aplicadas cuando se demanda su ejecución. En este sentido, también existen 2 modelos de evaluación contrapuestos.

> La **evaluación completa**, requiere disponer de todos los argumentos actuales antes de invocar a una función. La **evaluación parcial**, por el contrario, permite proporcionar sólo parte de los argumentos para obtener otra función con aridad reducida.

El modelo de evaluación completa es característico de los paradigmas centrados en procesos, típicamente la programación estructurada y sus derivados. En este tipo de enfoques una función se interpreta de forma similar a un procedimiento que arroja un resultado cuando es evaluado contra unos argumentos determinados. 

El modelo de evaluación parcial sin embargo - que naturalmente puede entenderse como una generalización del anterior - permite ir reduciendo progresivamente la aridad de la función proporcionando los argumentos en el orden requerido por ésta a lo largo del tiempo y sólo cuando todos los argumentos se han proporcionado se alcanza el resultado final.

Lamentablemente, JavaScript no ofrece mecanismos de evaluación parcial de forma nativa. Sin embargo, aplicando las capacidades de orden superior de nuestro lenguaje podemos diseñar las funciones para que reciban los parámetros de acuerdo a un esquema de **diseño por fases**. En efecto, como puede verse en el código (A) del Listado 3, una sencilla función de suma puede reformularse en términos tales que requiera un esquema de invocación parcial. Esto es, recibiendo en 2 etapas de evaluación primero la `x` y después la `y`. 

```
// A. Diseño por Fases
function add (x) {
  return function (y) {
    return x + y
  }
}
let inc = add (1)
let dec = add (-1)

// B. Currificación
function curry (fn) {
  return function aux (...args) {
    return args.length >= fn.length ?
      fn (...args) :
      function (...rest) {
        return aux (...args, ...rest)
      }
  }
}
 
let add = curry (function (x, y) { return x + y })
let mul = curry (function (x, y) { return x * y })
  
let inc    = add (1)
let dec    = add (-1)
let double = mul (2)
let half   = mul (1/2)
```

El gran inconveniente de esta solución por rediseño es precisamente ese, que todas las funciones que queramos utilizar en evaluación parcial deberían reescribirse de acuerdo a una estrategia de diseño por fases. Esto complica la escritura de funciones y genera problemas de versionado más aún cuando las diferentes formas de uso en que nos puede interesar proporcionar los parámetros actuales de una función de forma progresiva conducen a una explosión combinatoria.

Para aliviar este problema podemos crear una función de orden superior que realice este proceso de transformación de forma automática para cualquier función y número de parámetros formales. El código (B) del Listado 3 muestra una función `curry` que se encarga precisamente de hacer esto. Parece un esquema prolijo pero en realidad es muy sencillo. En esencia, estamos devolviendo otra función `aux` para solicitar los primeros argumentos actuales. Si éstos resultan suficientes para invocar a la función original `fn` procederemos con su invocación. Sino, devolveremos otra nueva función que solicite más parámetros e invocaremos recursivamente a `aux` con la concatenación de toda la información paramétrica recibida. Un esquema similar, recogiendo los parámetros desde la derecha también resulta de interés. Aquí lo dejamos como ejercicio al ávido lector. A esta técnica se la llama currificación y no debe confundirse con la evaluación parcial. 

Esta estrategia de transformación es interesante puesto que convierte a las funciones ordinarias en factorías de otras funciones más específicas con un subconjunto original de los parámetros formales ya resueltos y cuyo valor queda retenido léxicamente. Cada vez que aplicamos evaluación parcial convertimos en estado inmutable parte de los parámetros y dejamos el resto como grados de libertad para el usuario. En el Listado 3 pudo verse cómo sendas estrategias de resolución - el diseño por fases y la currificación - permitían generar funciones cuya semántica se expresaba en términos de un sólo parámetro. Desde la suma `add` se generaron `inc` y `dec` y desde el producto `mul`, se obtuvieron `double` y `half`.

```
// A. Evaluación por Fases
 let Ip = curry (function (a, b, c, d) {
  return [a, b, c, d]
})
  
// Phase (1)
let IpA = Ip (10)        
let IpB = Ip (172, 16)
let IpC = Ip (192, 168)

// Phase (2)
let ip1 = IpA (1, 2, 3) 
let ip2 = IpB (1, 2)
let ip3 = IpC (1, 2)

// B. Evaluación por Pares
let Logger = curry (function (uri, msg) {
  console.log ('Logger (%s) - [%s]', uri, msg)
})
  
// Rol Proveedor
let Provider = {
  logger : Logger ('com.acme.logger')
}
  
// Rol Consumior
let log = Provider.logger
log ('Succesfully done.')
log ('Error accesing data.')
```

Pero, ¿de verdad es tan relevante la evaluación parcial? Pensando arteramente, siempre podríamos ir acumulando en alguna estructura de datos temporal cada argumento resuelto y utilizar evaluación completa en cuanto sea posible y necesario. Sin embargo, si nos bajamos a la pragmática del código en seguida caeremos en las aplicaciones de la evaluación parcial. Fundamentalmente podemos distinguir entre dos usos canónicos.

- **Evaluación por Fases**. Con independencia de que se desarrolle un diseño por fases o por currificación, el primer uso de la evaluación parcial consiste en resolver las dimensiones paramétricas de una función en distintas fases del tiempo. El código (A) del Listado 4 presenta un sencillo ejemplo que tiene por objeto construir distintos tipos de direcciones de red. Atendiendo a lo que estamos explicando, este problema podría atacarse en dos etapas sucesivas. Primero se crean funciones específicas para crear direcciones de red de tipo `A`, `B` y `C`. Después, podrán usarse esas funciones, en una segunda fase de evaluación para obtener direcciones especificas de estos tipos por medio de un ejercicio consistente en especificar el resto de la información paramétrica.

- **Evaluación por Pares**. Otro uso prototípico de la evaluación parcial es la evaluación por pares. En este caso, existen 2 agentes que articulan una colaboración con roles diferentes. El agente cliente pide una función al agente proveedor y éste la resuelve de forma parcial antes de devolverla. De esta manera se fija parcialmente el comportamiento de dicha función para adaptarlo a las condiciones ambientales requeridas por el cliente. El código (B) del Listado 4 muestra un ejemplo de este escenario sobre funciones de traza.

Programando en funcional se descubre poco a poco la elegancia de esta estrategia de diseño. Llega un momento en que la descomposición por fases resulta tan natural que casi pasa desapercibida en nuestros procesos cognitivos cuando desarrollamos. Pero, cuando verdaderamente esta técnica cobra relevancia es cuando conseguimos ocultar - por separación o distanciamiento - ambas fases o pares del esquema. Esto es especialmente posible haciendo uso de técnicas de modularidad donde cada parte vive en un fichero distinto. 

### Evaluación Inmediata vs Evaluación Diferida

El último tipo de evaluación refiere al momento exacto del tiempo en que una función se ejecuta tras su invocación. Nuevamente, en esta dimensión del discurso, distinguimos dos modelos contrapuestos.

> La **Evaluación Inmediata** lanza a ejecución una función en el mismo momento en que se procesa su invocación. La **Evaluación Diferida**, por el contrario, permite trabajar con funciones cuya invocación puede postergarse en el tiempo hasta un momento más conveniente.

En sentido estricto, esta diferenciación no responde a una característica de los lenguajes de programación. Diferir la ejecución de una función es más bien un recurso algorítmico dentro del estilo de diseño funcional. No obstante, no es menos cierto que para que esta práctica pueda articularse el lenguaje debe proporcionar las herramientas necesarias. Aunque existen varias formas de dar soporte a esta idea todas giran en torno a las capacidades de orden superior. 

```
function defer (fn) {
  return function (...args) {
    return function () {
      return fn (...args)
    }
  }
}

let add  = function (x, y) { console.log (x + y) }
let mul  = function (x, y) { console.log (x * y) }
let dAdd = defer (add)
let dMul = defer (mul)
let five = dAdd (2, 3)
let six  = dMul (2, 3)

five ()
six  () 
```

Con estos mimbres, diferir la ejecución de una función resulta tarea sencilla. La estrategia consiste, básicamente, en encapsular la invocación e invertir el orden de captura de parámetros. El Listado 5 muestra un ejemplo de función de orden superior que lleva a cabo este proceso.

```
// A. Comandos
function Stack () {
  let state = []
  let cmds  = []
    
  let cPop = function (x) {
    return function () { state.push (x) } 
  } 
  let cPush = function (x) {
    return function () { state.pop ()   }
  }
    
  function push (x) { 
    state.push (x) 
    cmds.push (cPush(x))
  }
  function pop  () {
    let x = state.pop  () 
    cmds.push (cPop(x))
    return x;
  }
  function undo () {
    cmds.pop()()
  }
    
  return {
    push,
    pop,
    undo
  }
}

// B. Thunks
function Async (fn) {
  return function (...args) {
    return function (hn) {
      setTimeout (function () {
        let r = fn (...args)
        hn (r)
      }, 0)
    }
  }
}

function Go (gn) {
  let code = gn();
  let exp  = code.next ();

  (function resolve (exp) {
    if (exp.done) return exp.value
    else {
      exp.value (function (r) {
        resolve (code.next (r))
      }) 
    }
  })(exp)
}

let add = Async (function (x, y) { return x + y })
let mul = Async (function (x, y) { return x * y })
  
Go (function *() {
  let x = yield add (2, 3)
  let y = yield mul (x, 5)
  console.log (y)
})

// C. Breakpoins
function trampoline (fn) {
  return function (...args) {
    let r = fn (...args)
    while (isFunction (r)) {
      r = r ()
    }
    return r
  }
}
  
let f = function (n, a = 1) {
  if (n === 0) return a
  else return function () {
    return f (n-1, n*a)
  }
}
let ft = trampoline (f)

console.log (
  ft (5), ft (6)
)
```

Sin ánimo de completitud, en general pueden destacarte 3 tipos de situaciones en las que se aplican este tipo de técnicas. Pero como siempre, la mejor forma de entender estas técnicas es a través del código. El Listado 6 las ejemplifica.

- **Comandos**. Las técnicas de diferimiento se utilizan a menudo para generar comandos que se ejecutan en el momento adecuado. Un comando es una operación que al ejecutarse transforma el estado de la arquitectura. Dado que la ejecución de tal operación debe postergarse hasta el momento en que sea explícitamente requerido, los comandos difieren la ejecución. El ejemplo por antonomasia de este tipo de soluciones se encuentra en los sistemas de UI. Sin embargo, como ejemplo sencillo nosotros hemos implementado en el código (A) del Listado 6 una abstracción `Stack` que incorpora la operación `undo` para deshacer operaciones anteriores. Quizá este código está un poco traído por los pelos para que sirva de ejemplo a nuestros propósitos. Pero lo cierto es que en lugar de implementar la operación de deshacer trabajando sobre el estado de la pila nosotros hemos seguido una aproximación basada en comandos. Primero definimos 2 factorías de comandos que revierten las operaciones de la abstracción: `cPush` deshace el `push` y `cPop` deshace el `pop`. Después, definimos las operaciones clásicas `push` y `pop`. Pero en este caso, ambas, además de transformar el estado interno en `state`, almacenan el comando asociado en una pila de comandos `cmds`. En estos términos, la operación `undo` puede formularse como extraer el último comando de la estructura `cmds` e invocarlo.

- **Thunks**. Si los comandos representan operaciones diferidas que alteran el estado de una arquitectura, los thunks son funciones diferidas que devuelven un valor de interés al invocarlas. Este tipo de artefactos es clásico de las arquitecturas de integración. Un thunk sirve de vehículo para comunicar información entre un origen y un destino. El último ejemplo más sonado que hemos visto dentro de la comunidad de JS es el uso de thunks dentro de la programación asíncrona resuelta con generadores. No está en nuestro ánimo explicar aquí todo el proceso ejemplificado en el código (B) del Listado 6, ya que cae fuera de nuestro alcance. Pero baste comprobar cómo en ese código, la función `Async` se encarga de transformar funciones bloqueantes en no bloqueantes que arrojan el resultado cuando son invocadas proporcionando un manejador. El contexto de la solución de asincronía con generadores ilustra que es una función `Go` la encargada de proporcionar este manejador cuya lógica es meramente la de dar continuidad al algoritmo ocultando dentro del código de la función generadora la perdida de secuencialidad. Pero insisto, esto es ya asunto de otro post sobre asincronía.  

- **Breakpoints**. Finalmente, merece la pena destacar el uso de técnicas de diferimiento funcional para establecer puntos de parada dentro del código. En general cualquier lógica que se encapsule dentro de una función quedará automáticamente retenida hasta que dicha función se invoque explícitamente. Este uso pragmático del diferimiento lo encontramos, entre otros casos, en la técnica de trampolín, que sirve para resolver el problema del desbordamiento de pila en grandes recursiones. Como explicamos en el artículo anterior [[1]](https://goo.gl/LZXepb), después de convertir las funciones recursivas no finales en recursivas finales, esperábamos que un buen compilador aplicara, de forma automática y transparente, técnicas de optimización por recursión en la cola. Pues bien, hasta que ese sea el caso de JS nosotros podemos hacer uso de una función de trampolín que reaproveche el espacio de memoria. En el código (C) del Listado 6 puede verse como la función factorial `f`no solamente se reformula en términos de un esquema de recursivida final sino que además encapsula el caso recursivo para poder diferir su ejecución. Al pasar esta función a la función `trampoline` obtenemos una función equivalente `tf` que arroja los mismos resultados que `f`. La función `trampoline`opera como un entorno de ejecución que reutiliza la variable local `r`para la obtención de resultados. Todo este reaprovechamiento funciona en base a la hipótesis de que `f` es una función, en efecto, de recursividad final. En esencia, la función `trampoline` invoca la función que se devuelve como resultado (caso recursivo diferido) hasta que se obtiene un valor real (caso base final).

La aplicación de las técnicas de diferimiento funcional que acabamos de describir ayudarían a resolver los inconvenientes de ejecución que encontramos en la evaluación del código en el Listado 2. No obstante, dado que esa no es la única solución posible y que nos estamos quedando sin espacio, abordaremos este tema en  el próximo artículo para cerrar esta serie.

En fin, que evaluación perezosa, parcial y diferida son el incienso, oro y mira de la programación funcional. Si quieres saber cuan bueno es un lenguaje en relación al soporte que ofrece a la programación funcional mírale las cosquillas en estos tres puntos.