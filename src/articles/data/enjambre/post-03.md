---
title  : Enjambres de Aves
slug   : enjambres-de-aves
author : Javier Vélez
date   : Enero 2024
---

## Introducción

En el anterior artículo de esta serie, arrancabamos el recorrido por los modelos de inteligencia de enjambre a través del prisma de las colonias de hormigas. Allí pudimos observar cómo un conjunto de individuos, cada uno siguiendo reglas locales muy sencillas, era capaz de orquestar un comportamiento colectivo sorprendentemente inteligente. La clave de esta coordinación distribuida residía en mecanismos de comunicación indirecta, como el rastro de feromonas que guía a las hormigas hacia las fuentes de alimento más abundantes. Y lo notable es que, este comportamiento inteligente a nivel global emergía como un sistema complejo de coordinación colectiva, demostrando ser una herramienta poderosa para la resolución de problemas de optimización y búsqueda de caminos.

Sin embargo, el reino de la inteligencia de enjambre no se limita a las laboriosas hormigas. Otro punto de referencia de la naturaleza igualmente inspirador proviene de la observación del movimiento sincronizado que realizan las bandadas de aves en vuelo o de bancos de peces desplazándose en las profundidades marinas. Al igual que las colonias de hormigas, estos colectivos de individuos exhiben una notable capacidad para moverse de forma coordinada y sincronizada, casi como si fueran una única entidad sistémica. Esta danza aérea o acuática es otro claro ejemplo de Inteligencia Artificial distribuida, donde la cooperación y la interacción local entre los miembros del grupo dan lugar a un comportamiento inteligente a escala global.

El fenómeno de movimiento colectivo que describiremos a lo largo este articulo se erige como un pilar fundamental dentro del ámbito de la inteligencia de enjambre, ofreciendo un enfoque alternativo para abordar problemas complejos. En las siguientes lineas, centraremos nuestra atención en este modelo en particular, explorando sus fundamentos, su funcionamiento interno y las diversas aplicaciones donde ha demostrado ser una herramienta valiosa. Nos sumergiremos en la metáfora de las bandadas de aves y los bancos de peces para desentrañar los principios que subyacen a su inteligencia colectiva.

## Espacio del Problema

El modelo de optimización por enjambre de partículas se concibe como una solución elegante para una clase específica de problemas dentro del vasto campo de la computación, los problemas de optimización continua. En esencia, estos problemas buscan encontrar el mejor valor, típicamente máximo o mínimo, para una función objetivo dada, donde las posibles soluciones se encuentran dentro de un espacio continuo multidimensional. Podemos imaginar, por ejemplo, tratar de encontrar la configuración óptima de los parámetros de un algoritmo de aprendizaje automático para maximizar su precisión, o determinar la forma más aerodinámica para el diseño de un ala de avión.

Dentro del contexto de la computación, los problemas de optimización continua son omnipresentes, surgiendo en disciplinas tan diversas como la ingeniería, la economía, la investigación operativa y la Inteligencia Artificial. La búsqueda de soluciones óptimas en estos espacios complejos a menudo se enfrenta a la dificultad de la existencia de múltiples óptimos locales, puntos donde la función objetivo es mejor que sus vecinos inmediatos, pero no necesariamente el mejor valor global absoluto. Los algoritmos de optimización tradicionales, basados en la exploración secuencial del espacio de soluciones, pueden quedar atrapados en estos óptimos locales, impidiéndoles alcanzar la solución globalmente óptima.

Abordar estos problemas de optimización con aproximaciones centralizadas puede resultar computacionalmente costoso, especialmente a medida que la dimensionalidad del espacio de búsqueda aumenta. La necesidad de evaluar la función objetivo en una gran cantidad de puntos y la posibilidad de quedar estancado en óptimos locales hacen que los métodos tradicionales puedan ser ineficientes o incluso intratables para problemas de gran escala. Es aquí donde la inteligencia de enjambre, y en particular el modelo inspirado en el movimiento coordinado de aves o peces, ofrece una alternativa original, creativa y  prometedora.

La principal fortaleza de aplicar la inteligencia de enjambre en este tipo de problemas radica en su capacidad para realizar una búsqueda paralela y distribuida en el espacio de soluciones. En lugar de un único agente explorando el terreno, una población de agentes - en nuestra metafora aves o peces, o más en general  partículas - coopera e interactúa entre sí, compartiendo información sobre sus descubrimientos y ajustando sus trayectorias de búsqueda de manera colectiva. Esta exploración simultánea reduce significativamente el riesgo de quedar atrapado en óptimos locales, ya que diferentes partes del enjambre pueden estar explorando diferentes regiones del espacio de búsqueda al mismo tiempo.

Los ejemplos de aplicación real del modelo de optimización por enjambre de partículas son numerosos y abarcan una amplia gama de campos. Se ha utilizado con éxito en el diseño de filtros digitales, la optimización de redes de comunicación, la planificación de rutas para vehículos autónomos, la optimización de carteras financieras e incluso en el descubrimiento de fármacos. En el ámbito de la Inteligencia Artificial, este modelo inteligencia de enjambre se ha empleado para entrenar redes neuronales, ajustar los parámetros de algoritmos de clustering y realizar la selección de características más relevantes para un modelo predictivo.

Dentro de las posibles variantes de estos ejemplos, podríamos imaginar la optimización del diseño de turbinas eólicas para maximizar la captura de energía, la planificación de la trayectoria óptima para un enjambre de drones de reparto minimizando el tiempo y el consumo de energía, o la calibración de modelos climáticos complejos para mejorar la precisión de las predicciones. En cada uno de estos escenarios, el desafío radica en encontrar la mejor combinación de parámetros dentro de un vasto espacio de posibilidades, una tarea para la cual el enfoque distribuido y colaborativo del modelo aviar resulta particularmente adecuado.

## Espacio de la Solución

Las soluciones basadas en la metáfora de las bandadas de aves o los bancos de peces se fundamentan en la idea de que la inteligencia emerge de la interacción de múltiples agentes simples que siguen unas pocas reglas sencillas. En términos generales, estos modelos simulan un conjunto de partículas (que representan a las aves o peces) moviéndose a través del espacio del problema. Cada partícula explora este espacio en busca de la mejor solución, influenciada tanto por su propia experiencia pasada como por la experiencia de sus vecinos dentro del enjambre.

Profundizando en la descripción detallada de esta solución, podemos identificar varios componentes clave. En primer lugar, los agentes - ya sean aves o peces - son entidades abstractas que poseen una posición y una velocidad dentro del espacio de búsqueda del problema. Cada uno de ellos mantiene una memoria de la mejor posición que ha encontrado hasta el momento - su mejor solución personal - y también tiene conocimiento tanto de la mejor posición encontrada por alguna de sus vecinas - su mejor alternativa local - como de o la versión global - mejor solución encontrada hasta el momento a nivel sistémico.

El entorno en el que se desenvuelven estas partículas es el espacio de búsqueda del problema en sí. Este espacio está definido por las variables que se están optimizando y la función objetivo que se desea maximizar o minimizar. La topología del entorno, es decir, la forma en que las partículas se consideran vecinas, juega un papel importante en la dinámica del enjambre. Diferentes topologías, como la de vecindad local o la de vecindad global, influyen en la velocidad con la que la información se propaga a través del enjambre.

La comunicación y coordinación entre las partículas se logra de manera implícita a través del intercambio de información sobre sus mejores posiciones encontradas. Cada partícula ajusta su propia velocidad y dirección de movimiento basándose en tres factores principales. Estos son su inercia o tendencia a mantener su dirección actual, su atracción hacia su mejor solución personal y su atracción hacia el mejor valor local y global alcanzado. Estas influencias combinadas guían a las partículas hacia las regiones más prometedoras del espacio de búsqueda.

Las reglas locales de comportamiento son las que dictaminan cómo cada partícula actualiza su velocidad y posición en cada iteración del algoritmo. Estas reglas suelen ser relativamente simples, involucrando ecuaciones matemáticas que ponderan la influencia de la inercia, el mejor resultado personal y local. A nivel global, el comportamiento emergente del enjambre es la exploración colectiva del espacio de búsqueda y la convergencia gradual hacia las regiones que contienen las mejores soluciones.

El objetivo del problema, como mencionamos anteriormente, es encontrar el valor óptimo, máximo o mínimo, de la función objetivo. En el contexto de este modelo, esto se traduce en que las partículas, a través de sus movimientos e interacciones, se concentren progresivamente alrededor de las áreas del espacio de búsqueda donde la función objetivo tiene valores más favorables. La convergencia a una solución óptima se espera que ocurra a medida que las partículas refinan sus posiciones y velocidades, guiadas por la información compartida sobre los mejores descubrimientos realizados por el enjambre.

Existen diversas variantes del algoritmo de optimización por enjambre de aves, que introducen modificaciones en las reglas de actualización de la velocidad y la posición, en la topología de la vecindad, o en la incorporación de mecanismos para evitar la convergencia prematura a óptimos locales. Algunas variantes incluyen el uso de factores de constricción para controlar la velocidad de las partículas, la introducción de operadores de mutación para fomentar la exploración, o la adaptación dinámica de los parámetros del algoritmo durante la ejecución. Estas variaciones buscan mejorar el rendimiento del modelo en diferentes tipos de problemas y aumentar su robustez frente a la complejidad del espacio de búsqueda.

## Enjambre de Aves en Acción

Para ilustrar el funcionamiento del modelo de enjambre de aves, consideremos el problema de encontrar el mínimo de una función matemática compleja con múltiples mínimos locales. Este tipo de problema es común en el entrenamiento de redes neuronales, donde se busca el conjunto de pesos que minimiza la función de error.

La utilidad práctica de resolver este problema radica en la posibilidad de encontrar configuraciones óptimas para sistemas complejos, ya sean modelos de Inteligencia Artificial, sistemas de control o procesos de ingeniería. Un algoritmo capaz de escapar de los mínimos locales y encontrar el mínimo global puede conducir a mejoras significativas en el rendimiento de estos sistemas.

A continuación, se presenta un fragmento de código en JavaScript que ilustra la lógica básica del algoritmo asociado al modelo de enjambre de aves aplicado a un problema de optimización simple, encontrar el mínimo de una función cuadrática en dos dimensiones.

```
function Swarm (fn, n, bounds) {
  let swarm  = Init (n, bounds, fn)
  let global = Global (swarm)

  for (let j = 0; j < MAX; j++) {
    for (let i = 0; i < n; i++) {
      swarm[i].speed    = Speed    (swarm[i], global)
      swarm[i].position = Position (swarm[i], bounds)
      swarm.local = Local (swarm[i], fn)
      global = Global (swarm, global, fn)
    }
  }
  return global
}
```

Este código presenta el esquema general de una versión básica de dicho algoritmo. Se inicializa un enjambre de partículas con posiciones y velocidades aleatorias dentro de un espacio de búsqueda definido por ciertos límites. Cada partícula recuerda la mejor posición que ha encontrado y el enjambre rastrea la mejor posición encontrada por cualquiera de sus miembros.

En cada iteración, la velocidad de cada partícula se actualiza en función de su inercia, su atracción hacia su mejor posición personal y su atracción hacia la mejor posición global. La posición de la partícula se actualiza luego en función de su nueva velocidad. Este proceso se repite durante un número máximo de iteraciones, buscando converger hacia el mínimo de la función objetivo.



## Conclusiones

A lo largo de este artículo, hemos presentado el modelo de inteligencia de enjambre inspirado en el movimiento coordinado de las bandadas de aves y los bancos de peces. Hemos visto cómo esta solución se enmarca dentro del paradigma de la Inteligencia Artificial distribuida, donde la inteligencia global emerge como consecuencia de la interacción local de múltiples agentes simples.

En efecto, dentro de este contexto, las aves o los peces son representados por las partículas, entidades abstractas que se desplazan a través del espacio del problema. El entorno es precisamente ese espacio de búsqueda multidimensional donde cada dimensión corresponde a una variable del problema de optimización. La metáfora de la comunicación se establece a través del intercambio de información sobre las mejores posiciones encontradas por cada partícula y sus vecinas, influyendo en la trayectoria de búsqueda de cada individuo.

Este modelo de solución resulta especialmente adecuado para abordar problemas de optimización continua, donde el objetivo es encontrar el mejor valor para una función objetivo dentro de un espacio de soluciones vasto y potencialmente complejo. Su capacidad para realizar una búsqueda paralela y distribuida, evitando la convergencia prematura a óptimos locales, lo convierte en una aportación diferencial relevante dentro de este perímetro de la Inteligencia Artificial.

Si en el artículo anterior exploramos la inteligencia colectiva de las colonias de hormigas, basada en la comunicación indirecta a través de feromonas, aquí hemos descubierto un modelo donde la coordinación se logra mediante la influencia mutua basada en la memoria de las mejores soluciones encontradas. Una similitud entre ambos modelos radica en la ausencia de un control centralizado y la emergencia de un comportamiento inteligente a partir de interacciones locales. Sin embargo, ambos modelos difieren en los mecanismos de comunicación y en la naturaleza de los problemas para los que resultan más eficaces.

En próximos artículos de esta serie, continuaremos explorando nuevos modelos que explotan la inteligencia de enjambre desde otras perspectivas, desvelando la riqueza y la diversidad de las soluciones que la naturaleza nos ofrece como inspiración para la creación de sistemas inteligentes.