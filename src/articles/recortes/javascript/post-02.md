---
title  : La Función Que No Lo Era
slug   : la-funcion-que-no-lo-era
author : Javier Vélez
date   : Octubre 2015
---

La nueva versión de JavaScript nos ofrece algunas capacidades adicionales para mejorar la experiencia de desarrollo. En su gran mayoría parecen características que vienen a proporcionar azúcar sintáctico y por tanto no resultan disruptivas en ningún sentido. Pero, ¿de verdad es esto cierto? Hoy contamos la historia de un nuevo tipo de funciones que nunca lo fueron.

Nuestro sufrido lenguaje es raro hasta para eso. Antes de hacerse estable la nueva especificación de JavaScript en todos los sistemas y plataformas más comúnmente utilizados, ya se ha abierto una encendida controversia – que por otro lado parece de dudosa relevancia – acerca del nombre que debe darse a esta nueva versión. Aciago futuro le espera a un lenguaje en la que la comunidad ni siquiera se pone de acuerdo en cómo bautizar sus versiones.

Pero en fin, para cualquier tipo de contribución tecnológica de novedad siempre existen dos tipos de perfiles. Por un lado están aquellos que, llevados por el natural entusiasmo, se embarcan en la aventura de programar distinto y empiezan a utilizar masivamente las nuevas capacidades que nos ofrece la reciente versión de JavaScript. Por otro lado, quedamos aquellos programadores – si se quiere más conservadores – que prefieren hacer un detenido estudio preliminar acerca del verdadero valor añadido que tiene cada contribución en el marco del proceso de desarrollo y del impacto que supone su uso en relación a la arquitectura y el rendimiento.

Cuento con sólidos amigos en ambos bandos. Pero el lector avezado ya habrá descubierto por un sencillo análisis de tiempos gramaticales en cuál de las dos orillas me encuentro yo. No es que no me gusten las nuevas herramientas sintácticas de JavaScript. Me convence sobre todo el spreading y la destructuración. Pero debemos reconocer, que en el fondo, todas ellas, salvo quizá honrosas excepciones como los generadores, son esencialmente azúcar sintáctico. Sin embargo, no me quiero contar entre aquellas voces más furibundas que desdeñan el valor intrínseco que proporciona la dulcificación. Todo aquello que venga a mejorar la mantenibilidad y legibilidad del código bienvenido sea. Desde aquí prometo un venidero artículo para hablar de la importancia de esta dulcificación en la programación. Porque es éste un asunto más relevante de lo que a primera vista pueda parecer. 

Pero en fin a lo que vamos. Lo que bajo ningún concepto es admisible en relación al proceso evolutivo al que se somete un lenguaje a lo largo de sus sucesivas versiones es que sea de alguna manera disruptivo en relación al comportamiento establecido en las versiones precedentes. Principio de compatibilidad descendente lo suelen llamar. Y aunque no lo parezca existe un caso que viola dicho principio dentro de la nueva especificación de JavaScript que he descubierto recientemente. Me estoy refiriendo a las fat arrow functions. Este artículo es la historia de un nuevo tipo de funciones que nunca lo fueron.

Una función flecha, es una letiante de expresión funcional equivalente a  cualquiera de aquéllas que se podía escribir con la sintaxis tradicional de función. Sintácticamente los parámetros formales se separan del cuerpo funcional por medio del símbolo flecha `=>`. En la documentación acerca de este nuevo tipo de elemento descubriremos que se argumenta que la incorporación de esta nueva herramienta  como parte del lenguaje  está motivada por dos factores fundamentales, la sintaxis reducida y el this contextual:

* **Sintaxis Reducida.** Es evidente que la nueva formulación sintáctica para escribir una función es más sucinta. Desaparece la palabra `function`, se eliminan con frecuencia los delimitadores de bloque y asimismo no es preciso el uso de la sentencia `return`. Lo cierto es que a este respecto cabe preguntarse si verdaderamente esta nueva formulación aporta más ventajas que inconvenientes o más bien todo lo contrario. Experimentalmente se ha venido constatando a lo largo de los años que los lenguajes con una sintaxis más polisémica y reducida conducen a la larga a experiencias de desarrollo con curvas de aprendizaje más largas y barreras de entrada más costosas. A cualquier neófito sin experiencia previa que entienda un código de Closure o Lisp a vista de pájaro, yo desde aquí ya le doy un gallifante. ¿De verdad queremos que JavaScript acabe así?
  
* **This contextual.** Pero en fin, el asunto de la reducción sintáctica es un tema quizá controvertido pero desde luego no de mayor relevancia. Todo será cuestión de acostumbrarse. Donde verdaderamente las fat arrow functions cobran su verdadera valor diferencial es en la contextualización del this. Por fin, han conseguido construir una función que no pierda su contexto de aplicación – el valor del this – cuando se utiliza en el ámbito de otra función. Esta era una clara anomalía del lenguaje que a todos nos ha dado unos cuantos quebraderos de cabeza. En la blogosfera podemos encontrar algunas soluciones clásicas para resolver los problemas de contextualización de los que adolecían las funciones convencionales. Por fin una función que de verdad si lo es. O al menos eso nos han contado.  

Pero cuidado porque, como ocurre habitualmente, el diablo está en los detalles. Di algo hemos aprendido de nuestra experiencia con JavaScript es que, más que intentar alterarlos abruptamente, a los lenguajes hay que entenderlos y utilizarlos desde su pragmática de uso más natural. En relación a las funciones clásicas de JavaScript podemos interpretar los problemas de contextualización del this más que como inconvenientes como oportunidades de aplicar nuevas formas de composición que, utilizándose dinámicamente en tiempo de ejecución, pueden dar mucho juego. Veamos un código de ejemplo. ¿Sabrías decir cual es el resultado en arroja este código?

```
m = function () { console.log ('C') }
let o1 = {
  m : function () { console.log ('A') },
  n : function () { this.m () }
}
let o2 = {
  m : function () { console.log ('B') },
  n : function () { this.m () }
}

let n = o1.n
console.log (o1.n())

o1.n = o1.n.bind(o2)
console.log (o1.n())

o1.n = n
o1.n = function (...args) {
  (function () {
    n.apply (this, args)
  })()
}
console.log (o1.n())
```

Analizando el código anterior podemos comprobar que en (1) la referencia al método m que se invoca desde n apunta al método hermano dentro de o1 y este método imprimirá ‘A’ como resultado. En el punto (2), por el contrario, el uso de la función bind permite decorar la función m en o1 para recontextualizar el valor del this de tal manera que pase a apuntar ahora al objeto o2. Como resultado, en este momento la invocación al método m dentro de n referirá a la versión de m que hay publicada en o2. Por tanto se imprimirá una  ‘B’ por salida estándar. Finalmente, en el punto (3), se ha llevado a cabo una decoración manual que sumerge la invocación de la función original en o1.n dentro de una clausura de invocación inmediata. Como efecto patológico de JavaScript esto provoca automáticamente que la referencia a this – en este caso aplicada como parámetro de la función apply –  se recontextualice al ámbito global donde, oh casualidad, encontramos una tercera versión de m que hará, en este caso, que se imprima ‘C’ como resultado de salida. 

Pensando en positivo podemos decir que cada patología del lenguaje – al menos ésta así lo cumple –  puede interpretarse como una nueva forma flexible de operar con el mismo y hacer, por ejemplo que el modelo de objetos de nuestra arquitectura cambie dinámicamente de comportamiento mediante la aplicación en tiempo de ejecución de las transformaciones funcionales que hemos expuesto en el ejemplo anterior y que provocaban una alternancia en los elementos del problema que entran en composición.

Y sin embargo, si probamos este mismo código en su versión con fat arrow functions descubrimos – tristemente –  que el efecto de la corrección de la contextualización del this que se hace en este nuevo tipo de funciones impide disfrutar de las oportunidades de alternancia compositiva que acabamos de describir.

```
m = () => { console.log ('C') }
let o1 = {
  m : () => { console.log ('A') },
  n : () => { this.m() }
}
let o2 = {
  m :  () => { console.log ('B') }
}
let n = o1.n
console.log (o1.n())

o1.n = o1.n.bind(o2)
console.log (o1.n())

o1.n = n
o1.n = function (...args) {
  (function () {
    n.apply (this, args)
  })()
}
console.log (o1.n())
```

En este caso, ni la función se afecta por aplicación del método bind (de hecho ni siquiera su aplicación da un error) ni se altera por ser evaluada en un contexto funcional nuevo (tal y como nos habían prometido). La versión de m que persiste en todos los contextos de evaluación es la primera que se define inicialmente, desde el ámbito global, con lo que aquí en todos los puntos del código donde se invoca n se imprime ‘C’. 

He aquí la demostración de que las fat arrow function no son equivalentes a las funciones convencionales y que de esta manera se ha violado el principio de compatibilidad descendente al que antes hacíamos referencia. El uso de este nuevo tipo de funciones puede tener efectos adversos de mal funcionamiento cuando éstas se usan en el marco de un problema de recontextualización.

Cabría pensar que en realidad todo este asunto no supone mayor inconveniente. Muy fácil! Cuando quieras aprovechar las capacidades de recontextualización que son tan relevante en escenarios de metaprogramación compositiva usa funciones convencionales. Si por el contrario, no te encuentras en ese tipo de situaciones puedes utilizar indistintamente funciones o fat arrow functions.

Pero, ¿De verdad es todo tan sencillo? ¿Es posible identificar siempre si en el ámbito de una evaluación funcional se esta aplicando recontextualización o no? ¿Qué pasa cuando es un framework el que nos solicita que le inyectemos una función como parámetro y éste internamente va a aplicar transformaciones funcionales sobre la misma, hecho éste que nosotros, naturalmente, desconocemos?

Pongamos un ejemplo sencillo. Aunque carece de demasiada utilidad práctica – sobre todo desde la aparición del constructo sintáctico class en JavaScript – imaginemos que queremos construir una pequeña utilidad para definir objetos de forma declarativa. Incluimos dentro de ella una función inyectora `init ` para definir el método constructor y otra `public`  para incluir los métodos públicos del objeto. Una vez hecha la definición la cerramos invocando el método `end` y obtenemos así el constructor deseado.

```
let Class = function () {
  
  let constructor
  let methods
  
  return {
    init : function (fn) {
      constructor = fn
      return this
    },
    public : function (fns) {
      methods = fns
      return this
    },
    end : function () {
      return function (...args) {
        let obj = {}
        Object
            .keys (methods)
          .forEach (function (k) {
            obj[k] = methods[k].bind(obj)
          })
        constructor.apply (obj, args)
        return obj
      }
    }  
    
  }
}

let Vector = Class ()
  .init (function (x, y) {
    this.x = x
    this.y = y
  })
  .public ({
    add : function (v) {
      this.x = this.x + v.x
      this.x = this.y + v.y
    },
    mul : function (k) {
      this.x = k * this.x
      this.y = k * this.y  
    },
    toString : function () {
      return 'Vector - ' + [this.x, this.y]
    }
  })
  .end()
  
let v1 = new Vector (1, 2)
let v2 = new Vector (1, 1)
v1.mul (5)
v1.add (v2)

console.log (
  v1.toString (),
  v2.toString ()
)
```

Como puede apreciarse en el código – puntos (1) y (2) – en este escenario se requiere recontextualizar cada función inyectada a través de los métodos `init`  y `public` para que reinterpreten el valor del this en términos del nuevo objeto `obj` que se va a construir.

Dado que este framework aplica recontextualización ¿Qué debemos hacer? ¿Debemos avisar en la documentación al usuario programador de que las funciones recibidas como parámetros deberán definirse a la vieja usanza o por el contrario JavaScript provee algún mecanismo en manos del desarrollador del framework para que pueda detectar si un objeto función recibido como parámetro es una función flecha o una función convencional? Lo que si parece claro es que si definimos las funciones `add`y `mul` mediante arrow functions nos encontraremos con la desagradable sorpresa de que nuestro framework deja de funcionar. Dejo al curioso lector que haga este ejercicio. 

Pongámonos a ello pues. El primer paso para dar seguridad a nuestro framework es saber detectar en tiempo de ejecución si un objeto función recibido como parámetro proviene de una función convencional o una fat arrow function. Lo cierto es que la labor no se antoja sencilla. Si hacemos algunas pruebas elementales comprobamos que no es posible detectar la diferencia entre funciones convencionales y funciones flecha. Pero como cuento con buenos amigos me han dado algunas buenas ideas para resolver este primer problema. Podemos comprobar si una función es función flecha por 3 mecanismos. Ordenados de menor a mayor nivel de solidez, según mi criterio, éstos son: 1) comprobar si el texto de la función comienza por la palabra clave `function`, 2) comprobar si el objeto función no tiene prototipo y 3) aunque se basa en características no estándar o desaconsejadas de JavaScript, también funciona comprobar que llamar al atributo `arguments` o `caller` sobre una función flecha genera una excepción. 

```
function isArrowA (fn) { 
        return !!fn.toString().indexOf('function') 
  }
function isArrowB (fn) { 
          return fn.prototype === void 0 
  }
function isArrowC (fn) { 
  try { 
    fn.arguments
    return false 
  } catch (e) { return true } 
}

let f = function () { return 1 }
let g = () => 1

console.log (
  isArrowA (f), isArrowA (g),
  isArrowB (f), isArrowB (g),
  isArrowC (f), isArrowC (g)
)
```

Ya hemos sido capaces de detectar desde nuestro framework si un objeto función corresponde a una función convencional o una función flecha, lo cual equivale a preguntar si el objeto función es recontextualizable o no. Ahora sólo queda dar respuesta a nuestro segundo problema. ¿Cómo conseguimos convertir las objetos función obtenidos a partir de una expresión de tipo flecha a objetos recontextualizables donde el método bind tenga efecto? Sospecho que este problema resulta aún más truculento que el anterior y para él aún no conozco respuesta. Al menos siempre podemos restablecer la seguridad en el uso de nuestros frameworks en JavaScript ya que cuando detectemos que nos han proporcionado por orden superior una función no contextualizable siempre podremos avisar al usuario con una excepción, si bien tampoco parece una solución demasiado elegante.

En resumen, las funciones arrow no son para nada equivalentes a las funciones convencionales  si las contemplamos desde las oportunidades de recontextualización. Lo que al principio parecía la corrección de un comportamiento patológico del lenguaje se ha convertido en un problema de ambigüedad semántica difícilmente tratable por los desarrolladores. Las funciones flecha son otra cosa distinta a las funciones convencionales. Pero sin embargo, ambos tipos de construcciones, flechas y funciones, conducen en memoria a un mismo tipo de artefacto: el objeto función, por lo que en tiempo de ejecución resultan difíciles de tratar diferencialmente aun cuando presenten comportamientos de cara a la recontextualización radicalmente opuestos.  

¿Qué podemos hacer? Nuevamente levantar la mano e indicar que aquí: querido comité de estandarización de JavaScript habéis vuelto a meter la pata. Los cambios en un lenguaje nunca deben ser disruptivos y tampoco deben romper la compatibilidad descendente. Ya nos lo viene enseñando la filosofía oriental desde miles de años con el movimiento Wu Wei: opera sin forzar las cosas. ¿Mi consejo? Pásate a mi orilla, antes de lanzarte a usar ES6 o 2015 o como demonios quieras llamarlo, pregúntate si puedes, debes y si en general ganas más de lo que pierdes haciendo la transición en el marco de tu proyecto.