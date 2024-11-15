---
title  : Modelo de Enlaces
slug   : modelo-de-enlaces
author : Javier Vélez
date   : Mar 2024
---

## Introducción

Con la llegada al mundo del front de los framewors de segunda generación orientados a componentes se popularizó rápidamente el uso de un nuevo modelo reactivo basado en el uso de interpolación dinámica. En este tipo de soluciones existen modelos de información con un estado interno y al menos una vista asociada que es reactivamente actualizada ante los cambios de dicho modelo.

Esta nueva aproximación, que se popularizó con el nombre de modelo de enlace de datos, mantenía las ventajas propias de los anteriores en términos de eficacia operativa pero además presentaba aún un mayor grado de autonomía y transparencia en su comportamiento reactivo. En efecto, si la reactividad de los primeros estaba mediada explícitamente por notificaciones de cambio de estado o señales, ésta se controlaba a través de expresiones declarativas sobre la vista.

Es precisamente toda esta carga de azucarado sintáctico la que ha dado popularidad en los últimos años a este tipo de arquitecturas. A la postre se trata de una forma muy sencilla y directa de controlar los efectos de sincronización reactiva que mantiene una notable corriente de defensores en pugna con los modelos más centrados en una construcción imperativa o funcional.

A lo largo de este articulo describiremos en detalle el modelo reactivo de enlace. Comenzaremos, como hemos hecho en las entregas anteriores, abordando la pragmática de uso general de este tipo de aproximaciones para pasar posteriormente a discutir la forma más conveniente de cómo puede desarrollarse una arquitectura de soporte para esta estrategia de respuesta reactiva.

## El Modelo de Enlaces

El modelo reactivo basado en enlaces cuya descripción abordaremos a lo largo de este articulo pertenece a la familia de soluciones de seguimiento. De hecho, este es el último de los modelos centrados en el uso de esta estrategia y hoy por hoy es la base de funcionamiento de todos los frameworks de desarrollo Web centrados en la construcción de vistas declarativas.

Como ya describimos con anterioridad, en las arquitecturas de seguimiento se reconoce un conjunto de artefactos como elementos de interés potencial que son sometidos a observación directa y continua para disparar notificaciones de respuesta coordinada sobre un conjunto de elementos reactivos. En el marco de los modelos de enlace las entidades de notificación son modelos de información y las unidades de respuesta reactiva son las vistas asociadas a los mismos.

En concreto, cuando se construye una solución de esta forma, los desarrolladores definen un conjunto de modelos que son, típicamente abstracciones que encapsulan un estado interno junto con al menos una vista declarativa asociada. Es precisamente este estado el que es sometido a observación continua para actualizar la vista reactivamente de forma automática y transparente.

El valor diferencial de este tipo de soluciones precisamente radica en el carácter declarativo de las vistas. En lugar de consistir en un cuerpo imperativo o funcional cómo ocurría en los modelos anteriores, aquí las vistas se construyen utilizando un lenguaje de marcado basado en expresiones y directivas que funcionan como puntos de control sobre el comportamiento reactivo de las mismas.

Sobre los elementos constituyentes de una vista las expresiones y directivas declarativas controlan el cambio parcial de sus valores. La flexibilidad expresiva y potencia de control de dichas expresiones es algo que puede variar entre las distintas soluciones de mercado. Pero en general sí es posible reconocer que, una vez procesada la sintaxis de una vista, el vínculo de enlace en este tipo de modelos queda establecido más precisamente entre el componente y cada una de las expresiones reactivas extraídas de la misma.

Veamos a modo de ejemplo cómo puede típicamente definirse un modelo de información sobre este tipo de arquitecturas y cómo es posible asociarle diferentes vistas que incluyen conjuntos propios de expresiones de interpolación dinámica reactiva. En particular, en el código que se muestra en el listado 1 puede verse que existe un constructor para la definición de modelos que encapsulan un estado interno y éste ofrece métodos para la inclusión de vistas.

```
import Model from '...'
import View  from '...'

let Core = Model ({
  x : 0,
  y : 0
})

let VX = Core.View ('{{x}} + {{y}} = {{x+y}}') 
let VY = Core.View ('{{x}} - {{y}} = {{x-y}}')

setInterval (function () {
  Core.x++
  Core.y++
})

```
<div class="listing">Modelo de Enlaces. Modelos & Vistas.</div>

Es importante observar cómo, dentro de la cadena de texto que describe la vista, se define una estructura de contenido donde aparece el uso de diversas expresiones de interpolación reactiva que usan ciertas convenciones sintácticas. Con independencia de este tipo de detalles, todas ellas refieren a las propiedades individuales del modelo de información como meros valores de un contexto virtual que es sobre el que se evalúa la vista. El soporte a toda esta idea es algo que discutiremos, precisamente, en la siguiente sección.

Las soluciones de mercado ofrecen mecanismos mucho más ricos y flexibles para la construcción de este tipo de arquitecturas. Pero, en el marco de trabajo que hemos creado para este artículo, asumiremos que cada vista se limita a emitir por consola un nuevo resultado en cada actualización reactiva. Este efecto es suficiente en aras a ilustrar el modelo de reacción basado en enlaces que es aquí nuestro objetivo fundamental. 

Lo verdaderamente esencial de este código de ejemplo es entender que, gracias al modelo de enlace que estamos describiendo, cada vez que se crea una instancia de un modelo se producirá la construcción de una estructura para la vista y que a medida que el valor de las propiedades x e y del modelo cambien a lo largo del tiempo, lo harán también automática y transparentemente el valor de las expresiones asociadas a la vista causando así los efectos reactivos deseados.

## Soporte & Desarrollo

La construcción de una arquitectura que de soporte al modelo de desarrollo reactivo basado en enlaces presenta dos problemas fundamentales que es preciso resolver. De un lado es necesario determinar cómo debe ser construido un modelo de información que mantenga una observación activa y continua sobre cada una de las propiedades que forman parte de su estado interno. De otro, es necesario permitir la creación de vistas declarativas que respondan reactivamente a los cambios de estado de dicho modelo. 

En particular, la problemática de observación es algo que ya fue resuelto en un artículo anterior cuando abordamos el funcionamiento de las soluciones de soporte al modelo reactivo basado en notificaciones. Se trataba en esencia de transformar cada unidad de datos del modelo de información en una propiedad con métodos de acceso de consulta y modificación. Durante la modificación, se incluiría la lógica pertinente de disparo de notificaciones para que los procesos de actualización reactiva se produzcan de manera automática y transparente.

Aun a riesgo de resultar reiterativos, incluiremos aquí el codigo correspondiente a esta estrategia adaptado al marco de este modelo. En el listado 2 puede verse dicho código. En esencia, se recupera del modelo el conjunto de todas sus claves y, para cada una de ellas, se define sobre el objeto resultante una nueva propiedad que mimetiza la gestión de estado a través de la aplicación de técnicas de retención léxica a la vez que extiende su semántica para incluir la lógica de notificación reactiva.

```
  import Helper from '...'
  import View   from '...'

  function Model (Core) {
    let helper = Helper (this)
    let ctx    = {}
    let model  = {}
    let keys   = Keys (Core)
    for (let key of keys) {
      Reflect.defineProperty (model, key, {
        get ()  { return ctx[key] },
        set (x) { helper.fire (ctx[key] = x) },
      })
    }
    model.View = View (model)
    return model
  }

  export default Model

```
<div class="listing">Modelo de Enlaces. Constructor de Modelo.</div>

En lo que respecta a la definición de nuevas vistas necesitamos incluir, dentro del modelo, un último método miembro que ofreca esta capacidad. Esto es algo que ya se preparó en el código del listado 2 anterior, puesto que antes de devolver el control al programa llamante se incluye en el objeto creado un constuctor de vista. En particular, este código se inyecta desde otro módulo y se proporciona como parámetro una referencia al modelo.

Ahora sí podemos estudiar cómo puede ser implementada la lógica referente a este otro constructor. El listado 3 muestra el código asociado. Como puede verse se trata de una función desarrollada en 2 fases de evaluación que recibe primero el modelo y después la especificación declarativa de la vista. En esencia, se construye una expresión de respuesta reactiva a partir del contenido de la vista y se vincula ésta a las señales de notificación provenientes del modelo. 

```
  import Helper from '...'

  function View (model) {
    return function (view) {
      function Exp (model, view) {
        let keys = Object.keys (model)
        let code = view
        code = code.replaceAll ('{{', '${')
        code = code.replaceAll ('}}', '}')
        code = 'console.log (`' + code + '`)'
        return {
          refresh (model) {
            let values = Object.values (model)
            Function (...keys, code)(...values)
          }
        }
      }
      let helper = Helper (model)
      let exp    = Exp (model, view)
      helper.bind (exp)
    }
  }

  export default View
```
<div class="listing">Modelo de Enlaces. Constructor de Vista.</div>

La parte más elaborada de este ejercicio consiste en el propio constructor de expresiones. Este código debe generar una función dinámica cuyo código se evalúe dentro de un contexto paramétrico extraído de las propiedades de estado del modelo. La respuesta debe retornar un objeto cuyo perfil de contrato corresponda al de una expresión de interpolación reactiva según lo esperado por la arquitectura de notificaciones.

Pero, al igual de lo que se hizo con anterioridad, al hablar del modelo reactivo de notificaciones, en este caso también hemos hecho uso de un helper para encapsular toda la lógica de soporte relativa al comportamiento reactivo. Aunque este código ya no debería arrojar secreto alguno, en aras a la completitud describiremos igualmente el contenido y comportamiento de dicho módulo.

```
  function Helper (model) {
    let exps = new Set ()

    function   bind (exp) { exps.add    (exp) }
    function unbind (exp) { exps.delete (exp) }
    function fire (ctx) { 
      for (let exp of exps) {
        exp.refresh (ctx)
      }
    }
  }

  export default Helper
```
<div class="listing">Modelo de Enlaces. Helper Reactivo.</div>


El helper de soporte reactivo tiene por responsabilidad mantener el registro de cada una de las expresiones que en nuestro modelo de solución se corresponden biunivocamente con cada una de las vistas definidas. Y asimismo, se responsabiliza de gestionar el disparo de notificaciones que articulan en enlace reactivo de éstas con el modelo.

Para llevar esto a cabo la abstracción proporciona dos métodos de acceso. Uno para disparar las notificaciones y el otro para llevar a cabo el registro de expresiones. El listado 4 ilustra el código de esta implementación. Ha de recordarse aquí que el método de disparo fire se invoca desde el constructor del modelo presentado en el listado 2 mientras que el método de registro de expresiones bind se usa desde el constructor de vistas que se recoge en el listado 3.

La ventaja de esta implementación radica en su sencillez dado que, a diferencia de otros modelos, la definición declarativa de vistas está atada al modelo al que pertenece. Este hecho es así en nuestra aproximación y en todos los marcos de mercado existentes ya que, en este tipo de soluciones, el modelo y la vista son el haz y el envés de la definición de los componentes.   

## Conclusiones

A lo largo de este artículo hemos presentado el modelo de desarrollo reactivo basado en enlaces. Con este modelo cerramos la familia de soluciones basadas en estrategias de seguimiento en las que un conjunto de objetos de interés potencial es sometido a observación constante para causar respuestas reactivas en otros elementos de la arquitectura ante cambios relevantes en su estado o comportamiento.

Este tipo de aproximaciones goza de gran aceptación popular dentro de una corriente significativa de desarrolladores de front que defienden modelos de construcción de soluciones Web basadas en la definición declarativa de vistas. Es precisamente este tipo de azucarado sintáctico el que ha creado tantos adeptos dentro de la comunidad dadas las ventajas en simplicidad y transparencia de cara a conseguir comportamientos automáticos de respuesta reactiva.

Aunque en una lectura transversal de todo este texto, y debido al orden secuencial que este artículo ocupa dentro de esta serie, cabría pensar que los modelos basados en enlace reactivo son intrínsecamente más aptos, modernos y ventajosos que sus predecesores, debemos en este punto mantener el rigor cultural. El reciente repunte del modelo de señales y el hecho de que los marcos de desarrollo que lo usan apuesten por experiencias más imperativas y funcionales próximas a la zona de confort de los programadores hace que aún a día de hoy tanto las aproximaciones basadas en enlaces como las basadas en señales se encuentren en pugna constante con importantes soluciones de mercado representantes de uno y otro lado.

Nuestro objetivo a lo largo de estas líneas ha sido tan sólo discutir un modelo de desarrollo reactivo más y ubicarlo en el contexto del resto de aproximaciones competidoras. Los marcos reales que siguen este tipo de aproximación ofrecen un soporte a la definición de modelos de información plenamente integrado en la construcción de componentes, permiten la especificación declarativa de vistas de una manera mucho más orgánica e incluso adaptan el comportamiento de las expresiones de interpolación dinámica al contexto de la creación de vistas sobre la Web lo que legitima distinguir entre diferentes tipos de expresiones que sirven para controlar el contenido del texto en los elementos, el valor o la presencia de atributos, los valores de datos en controles de edición o incluso el comportamiento iterativo o condicional sobre estructuras de datos asociadas al modelo. Sin embargo, la descripción de todas estas características en el marco de esta serie queda completamente fuera de alcance.

Incluso cabe señalar que los marcos de desarrollo basados en arquitecturas de enlace se apoyan en modelos de notificaciones para conseguir una bidireccionalidad entre el modelo y la vista. Si la sincronización reactiva desde el modelo a la vista se consigue mediante arquitecturas de enlace, la sincronización de la vista hacia el modelo, donde se pretende que los datos introducidos mediante controles de edición se sincronicen con el modelo, se soportan mediante soluciones basadas en notificaciones.

Nos vemos obligados a señalar asimismo, que la implementación de referencia que hemos presentado aquí es francamente mejorable y ésta sólo persigue un desarrollo simple en aras a la claridad pedagógica. En particular, si una expresión no incluye referencia a una propiedad del modelo lo lógico es que ésta no sea recalculada cuando cambia dicha propiedad. La mejora en esta dirección supondría aplicar técnicas de análisis sintáctico sobre el contenido de las expresiones para lo cual existen excepcionales librerías en comunidad. Alternativamente se podrían aplicar estrategias de descubrimiento dinámico similares a las que fueron utilizadas en el modelo de señales. 

Hablando de lo cual esto conduce a una importante reflexión. Toda la implementación anterior, que ha sido elaborada como una extensión adaptativa del modelo de desarrollo reactivo basado en notificaciones podría perfectamente haberse abordado mediante el uso de señales dejando, naturalmente, éstas como elemento de soporte subyacente y transparente. Esto demuestra la versatilidad isomorfa que se da comúnmente entre las estrategias de soporte al desarrollo de modelos. Quizá la implementación de esta alternativa podría ser un buen ejercicio práctico para el lector.



