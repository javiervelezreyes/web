---
title  : Modelo de Señales
slug   : modelo-de-senales
author : Javier Vélez
date   : Marzo 2024
---

## Introducción

El modelo de notificaciones que se presentó en un artículo anterior ofrecía una experiencia de desarrollo reactiva sencilla y eficaz. En él, cada entidad de notificación proporcionaba métodos de registro oportunos para la gestión de cada contraparte reactiva e incorporaba, por construcción, toda la lógica de señalización requerida.

Pese a esta aparente simplicidad, lo cierto es que este modelo pronto encontró detractores ya que el hecho de tener que registrar de manera explícita cada elemento reactivo como parte de la lógica de configuración inicial aportaba una carga cognitiva y una polución arquitectónica que, cuando menos, resultaba incomoda de gestionar.

Parece en este sentido mucho más conveniente ir a la búsqueda de otros modelos de desarrollo reactivo donde los elementos de notificación y de respuesta reactiva puedan declararse independientemente de forma sencilla manteniendo una aparente transparencia entre las dependencias subyacentes que puedan darse en el plano arquitectónico entre unos y otros elementos.

Este es, precisamente, el objetivo que persigue el modelo de señales que presentaremos a lo largo de este artículo. En primer lugar, centraremos nuestra atención en describir la experiencia de desarrollo que ofrece este tipo de soluciones para pasar posteriormente a describir el entramado de infraestructura subyacente que es necesario crear para dar soporte al modelo. 
 
## El Modelo de Señales

Como ya hemos explicado, la familia de modelos basados en seguimiento es un marco de soluciones reactivas en la que se realiza un proceso de observación activa y continua de un conjunto de elementos de interés potencial cuyos cambios de estado o comportamiento son notificados a las entidades de respuesta reactiva diseminadas por la arquitectura.

El modelo de señales que describimos en este artículo pertenece a esta categoría y por tanto todo lo anterior es rigurosamente cierto. Sin embargo, desde un punto de vista experiencial se pretende mantener un desacoplamiento entre las entidades de notificación y las unidades reactivas asociadas.

En el marco de este modelo, los elementos de notificación reciben el nombre de señales y se trata de unidades atómicas de información con un estado interno cuyo cambio a lo largo del tiempo está sometido a observación por parte de la arquitectura. Por su parte, los elementos de respuesta reactiva se materializan como cuerpos algorítmicos expresados declarativamente en términos del valor de las señales implicadas y reciben el nombre de visores o efectos.

De acuerdo a esta idea, la presencia de ciertas señales en la declaración de un visor es lo que establece una relación de dependencia reactiva entre estos elementos de manera que cuando alguna de las señales referidas en un visor cambia, el cuerpo del visor será automáticamente evaluado de nuevo. Esta suerte de azúcar sintáctico permite establecer un modelo de reactividad que manteniene la apariencia de desacoplamiento entre los elementos de la arquitectura.

El primer paso para desarrollar una solución basada en el modelo de señales consiste en definir el conjunto de señales necesarias para caracterizar el estado de nuestro problema. Dado que, como dijimos, cada señal dentro de la arquitectura representa una unidad de cambio reactivo potencial, en efecto es común modelar problemas reales como un conjunto de señales que operan de manera conjunta y coordinada.

En el código que aparece representado en el listado 1 puede verse un ejemplo abstracto formado por 2 señales genéricas SX y SY. Cada una de estas señales es una abstracción atómica de datos que recibe un valor inicial que es encapsulado como unidad reactiva y expone métodos de consulta y modificación get y set. Podemos hacer uso de manera explícita de este par de métodos para operar con las señales que por construcción son artefactos síncronos.

```
import Signal from '...'

let SX = Signal (1)
let SY = Signal (1)

let RX = SX.get ()
let RY = SY.get ()

console.log (RX, RY)

let idx = 0
let idy = 0
setInterval (function () {
  SX.set (idx++)
  SY.set (idy++)
}, 200)
```
<div class="listing">Modelo de Señales. Creación de Señales.</div>

Pese a que todo el código anterior es perfectamente correcto y valido, desde un punto de vista práctico resulta bastante incongruente por cuanto no se explota el modelo de reactividad planteado. Para ello es necesario incluir, sobre el código anterior, elementos visores que declaren comportamientos de respuesta reactiva cada vez que se produzcan camios en el valor de cada una de las señales.

Para llevar esto a cabo podemos hacer uso del constructor de visores que permite declarar este tipo de respuestas. En el código que aparece representado en el listado 2, se muestra una solución mucho más coherente. Ahora, tras la definición de sendas señales se definen diferentes visores que refieren a alguna de las señales previamente definidas. Debe entenderse que, cada vez que se produzca un cambio en el estado de las señales los visores serán lanzados a ejecución.

```
import Signal  from '...'
import Watcher from '...'

let SX = Signal (0)
let SY = Signal (0)

Watcher (function () { console.log (SX.get ()) })
Watcher (function () { console.log (SY.get ()) })
Watcher (function () { 
  let RX = SX.get ()
  let RY = SY.get ()
  console.log (RX + RY) 
})

let idx = 0
let idy = 0
setInterval (function () {
  SX.set (idx++)
  SY.set (idy++)
}, 200)
```
<div class="listing">Modelo de Señales. Creación de Visores.</div>

La clave de todo lo anteriormente expuesto radica en que la arquitectura de soporte subyacente es capaz de identificar el conjunto de referencias presentes dentro de cada visor y articular un entramado de dependencias reactivas que mantenga en sincronización cada visor con sus señales asociadas. El hecho de que todo ello se realice de manera completamente automática y transparente de cara al desarrollador es el verdadero valor diferencial de este modelo.

Pero el alcance del modelo de señales no termina aquí. Resulta muy interesante disponer de un último constructor en sobrecarga al servicio de la creación de nuevas señales reactivas definidas por composición de señales previamente declaradas. En este caso, la función Create recibe como argumento una función que retorna un nuevo valor expresado en términos de la conjugación del estado de otras señales. Por construcción se asume que el valor de retorno será una nueva señal cuyo estado será reactivamente actualizado cuando cambie el valor de alguna de sus señales internas referidas.

```
import Signal  from '...'
import Watcher from '...'
import Create  from '...'

let SX = Signal (0)
let SY = Signal (0)
let SZ = Signal (function () { 
  let RX = SX.get ()
  let RY = SY.get ()
  return RX + RY
})

Watcher (function () { console.log (SX.get ()) })
Watcher (function () { console.log (SY.get ()) })
Watcher (function () { console.log (SZ.get ()) })

let idx = 0
let idy = 0
setInterval (function () {
  SX.set (idx++)
  SY.set (idy++)
}, 200)
```
<div class="listing">Modelo de Señales. Composición de Señales.</div>

El código que aparece reflejado en el listado 3 sirve de ejemplo a este tipo de creación compositiva. En este caso, se construye una señal compuesta SZ cuyo valor se ve actualizado de manera automática y transparente cada vez que el valor de las señales internamente referidas SX o SY se ven sometidas a cambio. Y de esta manera, el valor de la señal SZ siempre corresponde con la suma aritmética del valor de ambas señales.

Finamente, algunas librerías y marcos de trabajo que dan soporte a este modelo de desarrollo reactivo también incorporan una función adicional para la actualización del valor de una señal de manera directa en función de su estado interno. Aunque se trata de una característica de azucarado sintáctico de relevancia menor sí merece la pena discutirla. 

```
import Signal  from '...'
import Watcher from '...'

let Inc = x => x + 1
let Dec = x => x - 1

let SX = Signal (0)
let SY = Signal (10)
let SZ = Signal (function () { 
  let RX = SX.get ()
  let RY = SY.get ()
  return RX + RY
})

Watcher (function () { console.log (SX.get ()) })
Watcher (function () { console.log (SY.get ()) })
Watcher (function () { console.log (SZ.get ()) })

setInterval (function () {
  SX.update (Inc)
  SY.update (Dec)
}, 200)
```
<div class="listing">Modelo de Señales. Actualización Funcional.</div>

En particular se trata del método update. Esta función opera como una variante semántica de la función set. Sin embargo, en este caso no se recibe como parámetro un nuevo valor real para sobrescribir el estado interno de la señal, sino que se proporciona una función que opera  como unidad lógica de actualización. 

Como puede apreciarse en el listado 4, las señales SX y SY son configuradas, respectivamente, con una lógica reactiva de incremento y decremento. A intervalos regulares, el estado interno de ambas señales se ve actualizado en virtud de la lógica proporcionada. En particular esta configuración provoca que la señal SX incremente en una unidad su valor desde 0 mientras que la señal SY decremente en una unidad desde el valor inicial de 10.

## Soporte & Desarrollo

Para dar soporte al modelo de señales que hemos descrito en la sección anterior, lo primero es comenzar por crear la abstracción Signal. Por simplicidad, consideraremos primero el caso en el que la función constructora no se encuentra sobrecargada para dar soporte a la definición compositiva. En tal caso, una señal es una abstracción que encapsula un valor de estado y que dispone de los métodos de acceso get, set y update que fueron presentados en la sección anterior.

Sin embargo, en aras a articular el modelo de respuesta reactiva, necesitamos además conseguir que cada señal sea registrada por la arquitectura de soporte subyacente cuando se consulte su estado interno y que se disparen las notificaciones pertinentes sobre los visores afectados cada vez que se produzcan actualizaciones sobre el mismo.

Toda esta responsabilidad de corte reactivo es algo que puede nuevamente encapsularse dentro de una abstracción de ayuda cuya descripción abordaremos más adelante. De momento, podemos ver que la construcción de una señal tiene una implementación sencilla en términos de operaciones de gestión del estado interno, de seguimiento de señales y de emisión de notificaciones de refresco. 

```
import Helper from '...'

function Signal (init) {

  let state = init

  function Create (init) {...}

  function get () {
    Helper.track (this)
    return state
  }

  function set (value) {
    Helper.refresh (this)
    state = value
  }

  function update (fn) {
    Helper.refresh (this)
    state = fn (state)
  }

  return Create (init) || { get, set, update }

}

expor default Signal
```
<div class="listing">Modelo de Señales. Abstracción Signal.</div>

En particular, como podemos ver en el código del listado 5, cada vez que se accede al valor de la señal se invoca la función de seguimiento track del Helper para que se registre la señal por si esta es la primera vez que se accede a ella. Simétricamente, cada vez que se actualiza el estado interno, se notifica el cambio a la arquitectura a través de la invocación del método refresh.

Hasta aquí todo parece correcto. Pero ¿cómo se relaciona el modelo de señales así construido con la definición de los visores? La respuesta a esta pregunta es algo que se resolverá un poco más adelante cuando abordemos la implementación del Helper. Pero de momento, baste saber que nuestro modulo de asistencia absorbe toda la responsabilidad de registrar cada visor cuando es declarado. El listado 6 muestra el sencillo código del constructor de visores.

```
import Helper from '...'

function Watcher (watcher) {

  Helper.register (watcher)

}

expor default Watcher
```
<div class="listing">Modelo de Señales. Abstracción Watcher.</div>

Haciendo un poco de técnica del avestruz, y confiando en la abstracción Helper como módulo general de soporte, parece que todo tiene bastante sentido. Cada vez que se declara un nuevo visor, el Helper es notificado para su registro. Por su parte, cada vez que se accede a una señal, el Helper también es notificado de la existencia de dicha señal. Y finalmente, cada vez que se invoca un cambio de estado sobre una señal, el Helper es asimismo informado para que lleve a cabo las operaciones de refresco oportunas.

Pero ¿qué es lo que encierra esta abstracción de ayuda? El objetivo último de este módulo es gestionar el registro de todas las señales definidas en la arquitectura y el conjunto de los visores que cada una de ellas presenta. El listado 7 que se expone a continuación muestra la implementación de este Helper.

```
function Helper () {

  let store  = new Map ()
  let buffer = new Set ()

  function track (signal) {
    buffer.add (signal)
  }

  function refresh (signal) {
    let watchers = store.get (signal) || []
    for (let watcher of watchers) {
      watcher ()
    }
  }

  function register (watcher) {
    buffer.clear ()
    watcher ()
    let signals = buffer.get ()
    for (let signal of signals) {
      let watchers = store.get (signal) || []
          watchers = [...watchers, watcher]
      store.set (signal, watchers)
    }
  }

  return { watch, refresh, register }

}

expor default Helper ()
```
<div class="listing">Modelo de Señales. Helper de Señales.</div>

Como puede apreciarse, se trata de un módulo que encapsula el conjunto de señales reactivas que operan sobre la arquitectura. La parte más sencilla de entender es el método de refresco. Suponiendo que, en efecto, existe un registro bien formado que gestiona el conjunto de todas las señales junto con sus visores asociados, entonces cada vez que se notifica una actualización de una señal por medio de este método, se buscan sus visores y se reevalúa su expresión funcional para disparar la respuesta reactiva esperada.

Lo que es algo más complejo de entender es cómo se consigue llegar a poblar adecuadamente este registro. Para ello entra en juego conjugado la función se seguimiento y de registro. Cuando se registra una señal a través del método de track lo que se hace es dar de alta a la misma dentro de un conjunto temporal de señales. Y cuando se registra un visor, se invoca el mismo e inmediatamente a continuación se consulta el conjunto temporal anterior para descubrir el total de todas las señales que se refieren como dependencia en la expresión funcional del visor. Esta información se utiliza para construir de manera progresiva el almacén de señales con sus visores asociados que es lo verdaderamente relevante.

Llegados a este punto ya está casi todo resuelto a excepción de la sobrecarga del constructor Signal que permite la definición compositiva de nuevas señales a partir de otras previamente definidas. Dado que, en efecto, se trata de una sobrecarga, podemos enfocar esta descripción como una extensión semántica del código que fue presentado en el listado 5. De hecho, aquella implementación ya se dejó preparada mediante el uso de una función Create que sirve a los efectos de esta extensión. Lo que discutiremos en las próximas líneas es la implementación de esta función.

```
function Create (init) {
  if (isFunction (init)) {
    let signal = Signal ()
    Helper.register (function () {
      signal.update (init)
    })
    return Signal
  }
}
```
<div class="listing">Modelo de Señales. Extensión Signal.</div>

Lo primero que hace el constructor Signal en el listado 5 es invocar a la función Create pasando como parámetro el valor inicial, init. Si esta función devuelve un resultado este será el valor de salida que emita el constructor. Sin embargo, si esto no es así, el valor de retorno corresponderá a la abstracción convencional de señal que hemos presentado. 

De acuerdo a lo expuesto, el valor del parámetro init puede consistir en un valor de estado inicial o en una expresión funcional que describa la lógica compositiva de una nueva señal. Así que lo que debemos hacer dentro de la función crear es evaluar el valor del parámetro y ofrecer una construccion alternativa solo en el caso de que el parámetro sea una función. En tal caso, debemos crear una nueva señal y declarar un nuevo visor cuya misión sea registrar como lógica de actualización precisamente la función proporcionada en el parámetro init. Es más prolijo describirlo que entenderlo. El código en el listado 8 ilustra lo expuesto.

## Conclusiones

A lo largo de este artículo hemos descrito el modelo de señales de ejecución reactiva. Al igual que otros modelos de esta serie, este tipo de arquitecturas pertenecen a la familia de soluciones basadas en seguimiento en la que un conjunto de objetos de interés es sometido a observación continua para mostrar un comportamiento reactivo.

El punto de interés de este modelo radica fundamentalmente en que, a diferencia de otras soluciones basadas en seguimiento, se consigue dar una respuesta satisfactoria y eficaz al problema reactivo a la vez que se mantiene una aparente sensación de desacoplamiento entre cada señal y cada visor asociado.

En la fecha de redacción de este texto el comité de estandarización de JavaScript se encuentra en proceso de definición de un estándar para este modelo de desarrollo. Aunque este trabajo está aún en una fase muy preliminar, en la medida de lo posible, hemos procurado mantenernos fieles a la sintaxis propuesta, si bien reconocemos ciertas adaptaciones de autor en aras a la explicación.

Lo cierto, es que el triunfo evidente de este tipo de arquitectura ha llegado por la vía de multitud de implementaciones de soporte alternativas. Prácticamente hoy todos los marcos de trabajo Web orientados a componentes y no pocas librerías de rendering ofrecen una experiencia de desarrollo basada en la metáfora sistémica de señal.

El contrapunto a este modelo está en las arquitecturas de enlace que son también una aproximación preponderante dentro de las soluciones de mercado. Su valor radica en que, en este caso, la sincronización no se vehicula a través de artefactos explícitos de señalización sino responde más bien a expresiones de enlace entre vistas y objetos expresadas en términos declarativos. En aras a la completitud dentro de la familia de soluciones basadas en seguimiento y por su interés práctico comparativo, este otro modelo será objeto de estudio en el artículo subsiguiente de esta serie. 

