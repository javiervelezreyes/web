---
title  : Enjambres de Hormigas
slug   : enjambres-de-hormigas
author : Javier Vélez
date   : Enero 2024
---

## Introducción

En el artículo anterior presentamos la inteligencia de enjambre como una aproximación que se sitúa dentro del campo más amplio de la Inteligencia Artificial distribuida. Como ya explicamos, esta área se caracteriza por el uso de múltiples agentes simples que, mediante interacciones locales, son capaces de resolver problemas complejos de manera colectiva. Esta perspectiva descentralizada ofrece una serie de ventajas frente a los enfoques tradicionales.

Presentamos ese área como un perímetro dentro de la Inteligencia Artificial distribuida, destacando su enfoque en la emergencia de comportamientos inteligentes a partir de la interacción de individuos sencillos, y definimos la inteligencia de enjambre como una aproximación donde la coordinación y la resolución de problemas no se basan en una entidad central de control, sino en la colaboración y la comunicación directa o indirecta entre los agentes que componen el sistema.

Discutimos cuáles eran los elementos característicos de las soluciones basadas en inteligencia de enjambre, haciendo hincapié en conceptos como la auto-organización, la descentralización, la escalabilidad y la robustez. Subrayamos cómo estos sistemas son capaces de adaptarse a entornos cambiantes y de encontrar soluciones eficientes sin necesidad de un conocimiento global explícito por parte de cada agente.

En este artículo abordaremos el modelo de colonia de hormigas, uno de los algoritmos más influyentes y pioneros dentro del campo de la inteligencia de enjambre. Este modelo se inspira directamente en el comportamiento de las colonias de hormigas reales en su búsqueda de alimento, adaptando sus mecanismos de cooperación y comunicación para la resolución de problemas computacionales.

Se trata de uno de los trabajos posicionales más relevantes dentro de este campo, ya que sentó las bases para numerosas investigaciones posteriores y aplicaciones prácticas de la inteligencia de enjambre. Su sencillez conceptual, combinada con su capacidad para resolver problemas complejos, lo ha convertido en un referente obligado para cualquier persona interesada en esta área de la Inteligencia Artificial.

A lo largo de las siguientes secciones, describiremos primero el espacio de problemas a los que se dirige el modelo de colonia de hormigas y las dificultades que éstos presentan. Después discutiremos el modelo de solución planteado, explicando cómo se emula el comportamiento de las hormigas para encontrar soluciones eficientes a estos problemas.

## Espacio del Problema

El modelo de colonia de hormigas fue ideado principalmente para resolver problemas de optimización combinatoria. Estos problemas se caracterizan por tener un conjunto finito de posibles soluciones, donde el objetivo es encontrar la mejor solución posible según un criterio específico. Ejemplos clásicos incluyen la búsqueda de la ruta más corta entre varios puntos o la asignación óptima de recursos limitados.

La utilidad práctica de este modelo en el marco de la computación queda justificada por el hecho de que existen multitud de problemas de optimización combinatoria a los que este enfoque da una respuesta satisfactoria. Desde la planificación de rutas en logística y transporte hasta la secuenciación de tareas en la producción industrial, pasando por el diseño de redes de comunicación y la bioinformática, la necesidad de encontrar soluciones óptimas es una constante en la ciencia y la ingeniería.

Este tipo de problemas corresponde a una categoría que la academia ha dado en llamar NP-duros. Sin entrar en el detalle de lo que ello significa, podemos entender que se trata de problemas para los que, al menos hasta la fecha, no se conocen algoritmos eficientes para su resolución. Es decir, no existem algoritmos cuyo tiempo de ejecución crezca de forma polinomial con respecto al tamaño del problema y que garanticen encontrar la solución óptima en todos los casos. La complejidad inherente de estos problemas hace que las estrategias de búsqueda exhaustiva más convencionales sean computacionalmente inviables para instancias de tamaño medio o superior.

Los retos que presenta esta naturaleza problema con aproximaciones centralizadas son significativos. Los algoritmos tradicionales a menudo requieren una gran cantidad de recursos computacionales y tiempo para explorar el vasto espacio de soluciones. Además, pueden ser sensibles a cambios ambientales y es frecuente que se ofrezcan soluciones que se mantienen atrapadas en óptimos locales, sin encontrar la mejor solución global.

Los puntos fuertes o ventajas de aplicar inteligencia de enjambre en este tipo de problemas radican en su capacidad para realizar una búsqueda distribuida y paralela. Al utilizar múltiples agentes que exploran el espacio de soluciones de forma simultánea, se aumenta la probabilidad de encontrar buenas soluciones en un tiempo razonable. La colaboración indirecta a través de la modificación del entorno (en este caso, mediante la deposición de feromonas) permite, coo explicaremos más adelante, una convergencia gradual hacia las regiones más prometedoras del espacio de búsqueda.

Existen numerosos ejemplos de aplicación reales concretos del modelo de colonia de hormigas. Uno de los más conocidos es la resolución del Problema del Viajante, donde el objetivo es encontrar la ruta más corta para visitar un conjunto de ciudades exactamente una vez y regresar al punto de partida. También se ha aplicado con éxito en problemas de enrutamiento en redes de telecomunicaciones, en la planificación de horarios y en la optimización de la logística de almacenes.

Variantes de ejemplo posibles incluyen la optimización de la asignación de tareas a un equipo de trabajadores con diferentes habilidades y costes asociados. En estos casos, cada hormiga podría explorar diferentes asignaciones, dejando rastros de feromonas en aquellas asignaciones que resultan en una mayor eficiencia o un menor coste total. Asimismo podría ser útil aplicar esta suerte de algoritmos heurísticos en la optimización del flujo de tráfico en una red de carreteras, donde las hormigas representan vehículos que buscan la ruta más rápida, y las feromonas indican las rutas con menor congestión.

## Espacio de la Solución

La descripción general de soluciones basadas en la metáfora de colonia de hormigas se centra en la simulación del comportamiento de búsqueda de alimento de las hormigas reales. En la naturaleza, las hormigas exploradoras depositan una sustancia química llamada feromona a medida que se desplazan. Esta feromona atrae a otras hormigas, y la intensidad del rastro se refuerza cuando se encuentra una fuente de alimento y el camino de vuelta se recorre. Las rutas más cortas tienden a acumular más feromona, lo que lleva a un mayor número de hormigas a seguirlas.

La descripción detallada de la solución implica la definición de varios componentes clave. En primer lugar, los agentes, que en este caso son las hormigas artificiales. Cada hormiga es una entidad computacional que construye una solución al problema de forma iterativa. Posee una memoria limitada para recordar su recorrido actual y aplica reglas probabilísticas para decidir su próximo movimiento.

El entorno es una representación del problema que se va a resolver. Por ejemplo, en el Problema del Viajante, el entorno es un grafo donde los nodos representan las ciudades y las aristas representan las conexiones entre ellas, con un coste asociado que representa la distancia entre ciudades. Este entorno se modifica dinámicamente con la información de las feromonas depositadas por las hormigas.

La comunicación y coordinación entre las hormigas se realiza de manera indirecta a través de la estigmergia. Cada vez que una hormiga completa un paso en la construcción de una solución - por ejemplo, al moverse de una ciudad a otra en el Problema del Viajante - deposita una cierta cantidad de feromonas en ese componente del entorno, esto es en la arista recorrida. La cantidad de feromonas depositadas puede depender de la calidad de la solución parcial o final encontrada por la hormiga.

Las reglas locales de comportamiento dictan cómo cada hormiga toma decisiones individuales. En cada paso, una hormiga evalúa las posibles opciones para su próximo movimiento - por ejemplo, las ciudades no visitadas en el Problema del Viajante - y calcula una probabilidad para cada opción. Esta probabilidad se basa en dos factores principales: la cantidad de feromonas presente en el camino hacia esa opción y una información Heurística específica del problema - por ejemplo, la distancia a la siguiente ciudad. Las reglas globales de comportamiento, como la evaporación de las feromonas con el tiempo, son cruciales para evitar la convergencia prematura a soluciones subóptimas y para fomentar la exploración continua del espacio de soluciones. La evaporación reduce, de esta forma, gradualmente la intensidad de los rastros de feromonas con el tiempo, haciendo que las rutas menos prometedoras sean menos atractivas, lo cual supone una estrategia de readaptación dinámico continua de la respuesta como solución al problema.

Los objetivos del problema se traducen en la función de evaluación que las hormigas implícitamente buscan optimizar. En el Problema del Viajante que estamos usando como ejemplo a lo largo de este texto, el objetivo es minimizar la longitud total del recorrido. La calidad de una solución construida por una hormiga se evalúa según esta función objetivo, y esta evaluación puede influir en la cantidad de feromonas que la hormiga deposita.

La convergencia a una solución optimal se logra a través de la iteración del proceso. Inicialmente, las hormigas exploran el espacio de soluciones de manera más o menos aleatoria. A medida que algunas hormigas encuentran mejores soluciones - rutas más cortas en el Problema del Viajante - depositan más feromonas en los componentes de esas soluciones. Esto hace que estas componentes sean más atractivas para las hormigas futuras, creando un ciclo de retroalimentación positiva que gradualmente guía a la colonia hacia soluciones de alta calidad.

Existen diversas variantes de la solución básica de colonia de hormigas. Algunas introducen diferentes estrategias para la actualización de las feromonas, como la aplicación de factores de intensidad o la restricción de la deposición de feromonas a la mejor hormiga de cada iteración. Otras variantes incorporan mecanismos de búsqueda local para que cada hormiga pueda refinar la solución que ha construido antes de depositar feromonas. También se han propuesto enfoques híbridos que combinan el algoritmo de colonia de hormigas con otras técnicas de optimización para mejorar su rendimiento en problemas específicos.

## Enjambre de Hormigas en Acción

Para comprender mejor cómo opera el modelo de colonia de hormigas, tomemos como ejemplo el problema típico de optimización combinatoria que hemos venido usando a lo largo de este texto, el Problema del Viajante. Imaginemos un conjunto de ciudades dispersas geográficamente que un viajante necesita visitar, pasando por cada una de ellas una sola vez y regresando al punto de partida, todo ello recorriendo la menor distancia posible.

El desafío reside en encontrar la secuencia óptima de visitas a las ciudades que minimice la longitud total del trayecto. Aunque la formulación del problema es sencilla, la cantidad de posibles rutas crece factorialmente con el número de ciudades, lo que lo convierte en un problema computacionalmente costoso para un número incluso reducido de destinos.

La solución que propone el modelo de colonia de hormigas se inspira en la estrategia que utilizan las hormigas reales para encontrar el camino más corto hacia una fuente de alimento. Cada hormiga artificial en nuestro modelo representa una posible solución al problema del viajante, y estas hormigas colaboran de manera indirecta dejando rastros de feromonas sobre los caminos que recorren.

```
function Swarm (n, k) {
  let ants       = Ants (k, n)
  let pheromones = Pheromones (n)
  let route

  for (let j = 0; j < MAX; j++) {
    for (let i = 0; i < k; i++) {
      ants[i] = Ant (n)
      while (ants[i].pending.length > 0) {
        let next = NextCity (ants[i], pheromones)
        ants[i].route = [...ants[i].route, next]
        removeCity(ants[i], next)
      }
      ants[i].length = Length (ants[i].route)
      if (!route || ants[i].length < route.length) {
        route = ants[i]
      }
    }
    update (pheromones, route)
  }
  return route
}
```

Este fragmento de código ilustra de forma abstracta la estructura general de un algoritmo de colonia de hormigas aplicado al problema del viajante. Podemos observar la creación de un conjunto de hormigas, cada una construyendo una posible ruta a través de las ciudades. La función NextCity representa el núcleo de la toma de decisiones de cada hormiga, influenciada por la concentración de feromonas dejada por hormigas anteriores y por la distancia a las ciudades aún no visitadas. Finalmente, la función update simula el proceso de evaporación de las feromonas y el depósito de otras nuevas por las hormigas que han encontrado rutas más cortas.

## Conclusiones

A lo largo de este artículo hemos presentado el algoritmo de colonia de hormigas, detallando su inspiración biológica y su aplicación a la resolución de problemas de optimización combinatoria. Hemos explicado cómo esta solución se enmarca dentro de la Inteligencia Artificial distribuida, y particularmente dentro de la asi llamada inteligencia de enjambre, que es un área de investigación que enfatiza la colaboración y la auto-organización de múltiples agentes simples.

En efecto, en este tipo de soluciones, la inteligencia emerge a partir del comportamiento colectivo de agentes individuales operando de manera coordinada y distribuída lo cual contrasta con los enfoques centralizados, donde una única entidad controla y dirige el proceso de resolución del problema.

Pero además, se trata de aprocimaciones donde debe hablarse de inteligencia en modo de enjambre porque a la vez que cada agente muestra un comportamiento local autónomo e independiente, se observa un comportamiento global sistemico emergente a partir del espacio de interacciones coordinadas mediante el uso de algún mecanismo de interacción indirecto a la busqueda de algún objetivo común. 

En efecto, dentro de este contexto las hormigas son los agentes individuales que exploran el espacio de soluciones, y el todo sistémico es la colonia de hormigas en si misma como una unidad funcional coordinada, que colectivamente busca la mejor solución. Se usa la metáfora de comunicación por rastro de feromonas para establecer una memoria distribuida y una forma de influencia indirecta entre las hormigas, guiando la búsqueda hacia las regiones más prometedoras del espacio de soluciones.

Este modelo de solución resulta especialmente adecuado para problemas donde el espacio de búsqueda es grande y complejo, y donde las aproximaciones centralizadas pueden resultar ineficientes o quedar atrapadas en óptimos locales. Su capacidad para adaptarse a diferentes tipos de problemas de optimización combinatoria lo ha convertido en una herramienta valiosa en diversos campos de la ciencia y la ingeniería.

Es una de las aportaciones iniciales y más relevantes dentro de este perimetro, sentando un precedente importante para el desarrollo de otros algoritmos de inteligencia de enjambre. Su éxito ha demostrado el potencial de inspirarse en la naturaleza para diseñar soluciones computacionales eficientes y robustas.

En próximos artículos seguiremos explorando la inteligencia de enjambre centrándonos en modelos que miran el movimiento sincronizado de las aves o bancos de peces, analizando cómo sus estrategias de coordinación pueden ser adaptadas para resolver otro tipo de problemas complejos. Estos modelos ofrecen nuevas perspectivas sobre la inteligencia colectiva y sus posibles aplicaciones en el futuro.