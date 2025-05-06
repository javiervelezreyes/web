---
title  : Enjambres de Murcielagos
slug   : enjambres-de-murcielagos
author : Javier Vélez
date   : Enero 2024
---

## Introducción

Llegados a este punto, hemos alcanzado un importante avance en nuestro recorrido por la inteligencia de enjambre que, como venimos explicando, constituye una parte significativa del perímetro más amplio de la Inteligencia Artificial distribuída. A lo largo de los artículos anteriores, hemos desgranado diversos modelos que se inspiraban en la naturaleza para resolver problemas complejos de manera colectiva.

Desde la organización eficiente de las colonias de hormigas, donde la comunicación a través de feromonas permite encontrar los caminos más cortos hacia las fuentes de alimento, hasta la sofisticada danza de las abejas para indicar la ubicación y calidad del néctar, hemos observado cómo la colaboración descentralizada frecuentemente emerge como una poderosa estrategia de resolución de problemas.

En el caso particular de las hormigas, el objetivo primordial radica en la optimización de rutas y la división del trabajo, demostrando una notable capacidad para resolver problemas de búsqueda y logística sin una dirección centralizada. Las abejas, por su parte, nos ofrecen un ejemplo de toma de decisiones colectiva y asignación de recursos, donde cada individuo contribuye al bienestar general de la colmena.

Las bandadas de aves y los bancos de peces, por su parte, nos enseñaron cómo la simple aplicación de reglas locales, basadas en la proximidad, la alineación y la separación, puede generar comportamientos emergentes complejos y coordinados a gran escala, permitiendo al grupo evitar depredadores y optimizar el movimiento en el espacio.

Sin embago, dentro de este rico panorama de la inteligencia de enjambre, encontramos aún un modelo particularmente interesante y sofisticado. Nos estamos refiriendo a las colonias de murciélagos que emplean la ecolocalización como su principal mecanismo de orientación y detección.

A lo largo de las siguientes secciones de este artículo, nos adentraremos en el funcionamiento de este modelo de inteligencia de enjambre, explorando cómo la metáfora del comportamiento de los murciélagos puede ser aplicada para la resolución de problemas complejos en el ámbito de la Inteligencia Artificial distribuída.

## Espacio del Problema

El modelo de colonias de murciélagos, basado en el principio de la ecolocalización, se presenta como una solución ingeniosa para problemas de optimización continua. Estos problemas se caracterizan por la búsqueda de la mejor solución dentro de un espacio de búsqueda multidimensional donde las posibles soluciones varían de forma continua, a diferencia de los problemas de optimización discreta donde las soluciones son finitas y bien definidas.

Ubicados en el amplio contexto de la resolución de problemas reales, los desafíos de optimización continua se manifiestan en una gran variedad de campos. Desde la ingeniería, donde se busca el diseño óptimo de estructuras o la configuración más eficiente de sistemas, hasta la economía y las finanzas, donde se persiguen estrategias de inversión rentables o la predicción precisa de mercados.

Dentro de la vasta categoría de problemas de optimización, aquellos de naturaleza continua a menudo presentan retos significativos cuando se abordan con aproximaciones centralizadas. La complejidad del espacio de búsqueda, la presencia de múltiples óptimos locales y el elevado coste computacional de explorar exhaustivamente todas las posibilidades son algunos de los obstáculos más comunes.

La aplicación de la inteligencia de enjambre, y en particular el modelo de colonias de murciélagos, ofrece puntos fuertes notables para superar estas limitaciones. La naturaleza distribuida de este tipo de agentes, su capacidad de exploración paralela del espacio de búsqueda y la adaptación dinámica de sus estrategias permiten una búsqueda más robusta y eficiente de soluciones óptimas o cercanas al óptimo.

Ejemplos concretos de aplicación real incluyen la optimización de funciones complejas en el ámbito del machine learning, el ajuste de parámetros en modelos de simulación, la planificación de rutas óptimas para vehículos autónomos en entornos dinámicos y la optimización de la generación y distribución de energía en redes inteligentes.

Existen también variantes posibles dentro de estos ejemplos, como la optimización de la topología de redes neuronales, el ajuste de los hiperparámetros de algoritmos de deep learning o la planificación de trayectorias para múltiples robots colaborativos en un entorno con obstáculos.

## Espacio de la Solución

Las soluciones basadas en la metáfora de las colonias de murciélagos se fundamentan en la simulación del comportamiento de estos animales durante su proceso de búsqueda de presas utilizando la ecolocalización. La idea central es que una población de soluciones candidatas - los murciélagos  - interactúa y ajusta sus movimientos en el espacio de búsqueda para converger hacia las regiones que contienen las mejores soluciones al problema planteado.

En una descripción detallada de la solución, los agentes individuales, que representan los murciélagos, poseen una posición en el espacio de búsqueda y una velocidad que determina su movimiento. Cada murciélago emite pulsos de sonido y escucha los ecos que rebotan en los objetos del entorno, lo que les permite estimar la distancia y la dirección de posibles presas u obstáculos.

El entorno en este modelo es el espacio de búsqueda del problema de optimización, cuyas dimensiones corresponden a las variables del problema. La presa que buscan los murciélagos representa la solución óptima o una región del espacio con un valor de función objetivo favorable.

La comunicación y coordinación entre los murciélagos se logra de manera implícita a través de la información que obtienen del entorno  a partir de la calidad de las soluciones que exploran y mediante ajustes en sus parámetros de ecolocalización, como la frecuencia y la tasa de emisión de pulsos. Los murciélagos que encuentran soluciones prometedoras tienden a reducir su tasa de pulsos y aumentar la intensidad del sonido, atrayendo a otros murciélagos hacia esa región del espacio de búsqueda.

Las reglas locales de comportamiento dictan cómo cada murciélago ajusta su posición y velocidad en función de su propia experiencia  en base a la mejor solución que ha encontrado hasta el momento y de la información obtenida de los murciélagos vecinos que han encontrado soluciones mejores. Las reglas globales, por otro lado, están implícitas en el objetivo de la optimización. Se trata, a la postre, de encontrar el valor óptimo - mínimo o máximo global - de la función objetivo.

El objetivo del problema es, por lo tanto, que la colonia de murciélagos explore eficientemente el espacio de búsqueda y converja hacia la región que contiene la solución óptima del problema planteado. Idealmente se espera que ocurra una convergencia organica y natural hacia dicha solución en la medida que los murciélagos ajustan colectivamente sus posiciones y velocidades, guiados por la retroalimentación del entorno y la influencia de los individuos más exitosos.

Existen diversas variantes de esta solución, que pueden incluir modificaciones en la forma en que los murciélagos ajustan sus parámetros de ecolocalización, la introducción de mecanismos para evitar el estancamiento en óptimos locales o la adaptación del algoritmo para problemas de optimización multiobjetivo.

## Enjambre de Murciélagos en Acción

Para ilustrar el funcionamiento del modelo de enjambre de murciélagos, consideremos un problema típico de optimización continua consistente en encontrar el mínimo de una función matemática compleja con múltiples mínimos locales. Imaginemos una función bidimensional f(x, y) cuyo gráfico presenta valles y picos. Nuestro objetivo es encontrar las coordenadas (x, y) que corresponden al punto más bajo de este paisaje.

Aplicando el modelo de colonia de murciélagos, inicializaríamos una población de murciélagos inicialmente distribuidos de forma aleatoria en el espacio de búsqueda definido por los rangos de x e y.  de esta forma, cada murciélago tendrá en cada momento del tiempo una posición dada (xi, yi) y una velocidad asociada (vxi, vyi).

De acuerdo a esta idea, en cada iteración del algoritmo, cada murciélago generará una nueva posición basándose en su velocidad actual y en la información de la mejor solución encontrada hasta el momento por él mismo y por el mejor murciélago de la colonia, ajustando asimismo su frecuencia de emisión de pulsos y su sonoridad en función de la calidad de la solución que está explorando.

```
function Swarm (fn, n, bounds) {
  let bats     = Init (n, lowerBound, upperBound)
  let solution = Solution (bats, fn)

  for (let j = 0; j < MAX; j++) {
    for (let i = 0; i < n; i++) {
      bats[i].frequency = Frequency (bats[i])
      bats[i].velocity  = Velocity  (bats[i], solution)
      let pos   = Position (bats, i])
      let value = fn (pos)

      if (isBetter (value, solution)) {
        bats[i].position = pos
        bats[i].loudness = Loudness (bats[i].loudness)
        bats[i].rate     = Rate     (bats[i].rate)
        solution         = bats[i]
      }
    }
  }
  return solution
}
```

El código presentado es un esquema abstracto del algoritmo de colonia de murciélagos. La función principal Swarm comienza inicializando una población de murciélagos, que itera un número máximo de veces y, en cada iteración, actualiza la frecuencia, la velocidad y la posición de cada murciélago. Se incluye un mecanismo de búsqueda local que se activa probabilísticamente. Si un nuevo movimiento resulta en una mejor solución, el murciélago actualiza su posición y sus parámetros de sonoridad y tasa de pulsos. Finalmente, se devuelve la posición del mejor murciélago encontrado. Las funciones auxiliares como Init, Frequency, Velocity, Loudness y Rate, representan operaciones abstractas necesarias para la implementación completa del algoritmo.

## Conclusiones

A lo largo de este artículo, nos hemos adentrado en el modelo de inteligencia de enjambre inspirado en las colonias de murciélagos. Hemos visto cómo estos animales utilizan la ecolocalización, la emisión y recepción de ondas sonoras, para orientarse en el espacio y detectar tanto presas como obstáculos.

Esta peculiar estrategia de los murciélagos se revela como una metáfora sorprendentemente adecuada para abordar problemas de optimización continua, aquellos donde buscamos la mejor solución dentro de un espacio de posibilidades infinitas. La capacidad de esta suerte de agentes con inteligencia local para explorar el espacio de búsqueda de manera distribuida y cooperativa, ajustando sus pulsos y sonidos en función de la calidad de las soluciones encontradas, demuestra ser una técnica poderosa.

Junto con los modelos de colonias de hormigas, enjambres de abejas, bandadas de aves o bancos de peces que hemos explorado en entregas anteriores de esta serie, el algoritmo de colonia de murciélagos se erige como uno de los ejemplos más característicos y sofisticados dentro del campo de la inteligencia de enjambre. En efecto, este modelo viene a cumplir con los criterios propios de las soluciones basadas en inteligencia de enjambre. Se trata, de hecho, de un sistema descentralizado compuesto por agentes simples - los murcielagos - que interactúan localmente entre sí y con su entorno, dando lugar a un comportamiento global inteligente y a la resolución de problemas complejos.

Con la descripción detallada de este modelo, ponemos fin a nuestro recorrido por espacio de la inteligencia de enjambre. A lo largo de toda esta serie, hemos buscado demostrar que esta área de investigación activa representa un campo muy fructífero dentro de la Inteligencia Artificial distribuida, ofreciendo alternativas robustas y eficientes para la resolución de una amplia gama de problemas.

Es evidente que la inteligencia de enjambre entra en franca conexión con las corrientes más actuales de investigación en Inteligencia Artificial. Su énfasis en la colaboración descentralizada y el comportamiento emergente la sitúa en una posición relevante dentro del panorama de la IA actual.

Por ejemplo, es posible afirmar que se existe una estrecha relación con los modelos de solución evolutivos, típicos de los algoritmos genéticos, dado que ambos se basan en la exploración de un espacio de búsqueda mediante una población de soluciones candidatas que evolucionan con el tiempo. Pero también la inteligencia de enjambre se vincula con el vasto campo de la IA Conexionista y las redes neuronales, especialmente en la idea de sistemas complejos que emergen de la interacción de unidades más simples.

En la literatura científica, se observa una proliferación constante de nuevos modelos de enjambre, tal vez incluso de forma excesiva, dado que en no pocas ocasiones las contribuciones de nuevos modelos de inteligencia de enjambre se basan más en la creatividad de encontrar nuevas metáforas inspirados en la etología colectiva animal que en ofrecer un verdadero valor diferencia en el terreno computacional.

Precisamente por esta razón, queremos poner punto final a este relato sobre la inteligencia de enjambre con este artículo animando, en todo caso, al lector a que continúe su exploración con otros modelos, aún cuando  puedan puedan presentar una menor carga de originalidad. En cualquier caso, nuestro objetivo primordial en esta serie ha sido presentar la inteligencia de enjambre como de interés dentro de la Inteligencia Artificial distribuída, estableciendo sus fundamentos esenciales, sus principios fundacionales y su marco de operación general.

Aunque en la literatura existen marcos organizativos que buscan clasificar estas y otras contribuciones bajo el paraguas más amplio de la llamada inteligencia evolutiva, en este trabajo nosotros hemos preferido mantenernos alejados de dichas clasificaciones. Consideramos que, en general, estos marcos pueden tener un valor contributivo limitado y, en ocasiones, pueden introducir más sesgo clasificatorio que un orden comúnmente aceptado dentro de la comunidad científica.