---
title  : Optimización por Recursion en la Cola
slug   : optimizacion-por-recursion-en-la-cola
author : Javier Vélez
date   : Oct 2015
---

Las técnicas de optimización por recursión en la cola son una novedad de ES6 que ayudan a mejorar el rendimiento en ejecución. En este artículo discutimos en qué consisten estas técnicas y su relevancia práctica. 

Una de las novedades del nuevo estándar de ES6 que, tal vez, ha pasado más desapercibida es la capacidad que tiene el intérprete para realizar optimizaciones sobre los esquemas de llamadas recursivas. Para entender esta problemática lo mejor es empezar dando un poco de contexto acerca de la relevancia de esta forma de diseño algorítmico y de los problemas que plantea su ejecución para la máquina.

### Diseño de Algoritmos Recursivos

Seguro que a ti te pasa lo mismo que a mí. Los desarrolladores hemos sido formados para concebir la algoritmia de una manera imperativa. Un programa es una secuencia de pasos que se ejecutan de forma ordenada para transformar un estado ambiental soportado por parámetros y variables. La mayoría de paradigmas y lenguajes más populares hasta la fecha se han basado en este modelo de ejecución. Hasta tal punto es acuciado nuestro condicionamento que frecuentemente nos cuesta mucho pensar que existen otras formas de pensar.

La programación funcional - tal vez por su fuerte enraizamiento histórico al mundo de las matemáticas - es un ejemplo de paradigma no imperativo. Dicho mal y pronto en programación funcional todo son expresiones funcionales compuestas entre sí para generar un resultado final.

Esta diferencia parece fácil de asimilar si nos quedamos en la superficie. Pero lo cierto es que en todo esto se encierran implicaciones mucho más relevantes. La programación basada en control de flujo típica del modelo de ejecución imperativo - el uso de sentencias iterativas o condicionales - queda invalidada en este paradigma. En efecto, todas estas sentencias se apoyan en el uso de un estado ambiental soportado por variables y la programación funcional no utiliza ese modelo. De hecho, el propio término de sentencia en programación funcional es un contrasentido en si mismo.

Entonces, ¿cómo se consigue alcanzar un nivel competitivo de operatividad? En general esto se logra por aplicación de combinadores funcionales. Dicho de manera más específica, la ejecución de funciones en secuencia se articula por medio de la composición funcional, la ejecución condicional por medio del uso de operadores de casos y la iterativa por medio de la recursión. Ya hemos llegado donde queríamos.

Por mover estas ideas al código comparemos cómo sería un algoritmo que permita resolver el cálculo del factorial de un número por aplicación de un esquema de diseño iterativo y recursivo. El siguiente listado muestra una versión imperativa del problema. Como puede apreciarse, la ejecución se apoya en un estado ambiental formado por dos variables locales (`r` e `i`) y un parámetro (`n`) que se va transformando a lo largo del tiempo.

```
function factA (n) {
  let r = 1;
  for (let i = 1; i <= n; i++) {
    r = r * i;
  }
  return r;
}
```

En el código siguiente por el contrario, donde mostramos la versión recursiva del problema, se observa que no se hace uso de variables ambientales sino que todo se resuelve en términos de una expresión funcional recursiva.

```
function factB (n) {
  return n === 0 ? 1 :
    n * factB (n - 1);
}
```
 
Hoy no es el día para entrar a discutir sobre las técnicas de diseño recursivo. pero lo cierto es que para la programación funcional esta estrategia de diseño es un gran caballo de batalla. De hecho, este tipo de aproximaciones ha trascendido más allá de este paradigma dado que la recursividad es, para muchos problemas, una forma mucho más sencilla y natural de proceder. Como ejemplo, intenta resolver una función que calcula el n-esimo término de la serie de fibonacci en forma iterativa y recursiva y descubre por tí mismo que solución resulta más fácil de entender. Asimismo, muchas estructuras de datos tienen una naturaleza inherentemente recursiva y por tanto su operativa algorítmica se presta más a seguir esquemas recursivos.
 
### Ejecución de Algoritmos Recursivos

Todo lo anterior resulta perfectamente válido en el plano teórico. El diseño recursivo es potente, eficaz y en no pocas ocasiones genera código más sencillo de entender. Punto aparte es cómo un ordenador con arquitectura de Von Newmann puede dar soporte a la ejecución de este tipo de algoritmos.

Hoy en día cabría pensar que los lenguajes de programación siempre dieron soporte a la ejecución recursiva pero lo cierto es que hasta finales de los 70 no se popularizaron los compiladores con esta capacidad. Los detalles de tal complejidad residen en cómo el compilador o interprete debe llevar a cabo la gestión de la memoria.

Si retomamos el ejemplo del listado 1, dado su carácter no recursivo podemos asegurar que nunca existirán 2 invocaciones de la función `factA` solapantes en el tiempo. Es decir, antes de que una nueva invocación de `factA` se produzca se debe haber terminado con cualquier otra invocación anterior. Con esto no estamos haciendo otra cosa que destacar una propiedad del modelo de ejecución no recursivo.

Sin embargo, en el esquema recursivo del listado 2, las invocaciones de la función `factB` sí que son solapantes en el tiempo dado que cada llamada a la función que entre por el caso recursivo provoca una nueva invocación de la función `fracB` cuyo tiempo de vida comienza y acaba antes de que termine la invocación en curso.

Veamos ahora cómo este hecho afecta a la gestión de memoria que debe hacerse. En los dos listados anteriores se manejan elementos de datos tal y como comentamos anteriormente. Sin embargo, existen importantes diferencias. En la ejecución imperativa de `factA` puede establecerse una correspondencia 1:1 entre dichos elementos a nivel simbólico - las variables y parámetros `n`, `r` e `i` - y las posiciones de memoria física donde se almacenan dichos datos. En la versión recursiva de `factB`, por el contrario, cada uno de los elementos simbólicos del algoritmo - en este caso tan sólo el parámetro n - debe alojarse en una dirección física de memoria diferente estableciéndose así una correspondencia 1:N entre referencias simbólicas y datos en memoria. 

Es decir, mientras que en la versión imperativa de `factA` cada variable o parámetro refiere siempre al mismo espacio de datos en memoria, en el esquema recursivo de `factB` el parámetro n hace referencia de forma simultánea a todos los valores que alcance n a lo largo del tiempo. Por ejemplo, al hacer la invocación `factB(5)` deberíamos ser conscientes como desarrolladores de que, en este caso, en parámetro `n` es una referencia simbólica - más o menos simultánea a nivel sintáctico - de los datos `5, 4, 3, 2, 1, 0`.

La razón resulta evidente si lo relacionamos con los modelos de activación. En las invocaciones de `factA` cada referencia física a los datos puede reutilizarse de invocación en invocación dado que no existe solapamiento temporal entre las mismas. Por el contrario, en el caso del diseño recursivo de la función `factB` cada valor de `n` debe respetarse hasta que termine su ejecución. Ello exige que las invocaciones solapantes requieran alojar los nuevos valor de n en cada invocación en un espacio nuevo de memoria.

En resumen, ello implica que para las funciones no recursivas puede hacerse un direccionamiento absoluto a memoria de los elementos de datos implicados mientras que en los esquemas recursivos se exigen direccionamientos relativos a memoria cuya organización más conveniente es en forma de pila. Dado su carácter más general, los compiladores actuales hacen una gestión de memoria en forma de pila para la ejecución de cualquier función, con independencia de su diseño recursivo o no recursivo. Aquí surge la famosa pila que tantas veces se nos ha desbordado cuando hacemos por error un diseño recursivo que no garantiza la convergencia hacia algún caso base desde cualquier caso recursivo y, si lo hace, esto se produce en tiempo posterior al llenado de la pila.

### Optimización por Recursión en la Cola

En términos de rendimiento en memoria debería quedar clara una cosa. Los esquemas recursivos puede que sean más claros, eficaces y sencillos de entender en muchas ocasiones pero desde luego suponen - al menos desde una perspectiva estructural - una gran cantidad de consumición de recursos de memoria en comparación con sus equivalentes no recursivos. La valoración de este hecho es algo que debe hacerse con sentido común - algo poco frecuente en general al hablar de optimización y rendimiento. - dado que siempre hay que relativizar la consumición de recursos en relación a su proporción disponible.

No obstante, cabría preguntarse si siempre siempre debe mantenerse esta correspondencia 1:N entre referencias de datos y direcciones físicas de memoria que parece ser la madre de todos los males. Si retomamos la función observamos que en realidad la única necesidad de mantener en memoria el valor del parámetro `n` después de hacer una nueva invocación a `factB` es por la necesidad de hacer una operación de combinación ulterior para producir el resultado retornado. Me estoy refiriendo, en este ejemplo a la operación de producto por `n`. A las funciones recursivas que requieren de este tipo de operación posterior a la llamada se las clasifica como *funciones de recursividad no final*, mientras que aquellas cuyos casos recursivos acaban directamente con una llamada recursiva se consideran *funciones de recursividad final*. 

Cabe reflexionar entonces que si la función `factB` tuviera un esquema de recursividad final, el compilador podría detectar este hecho y evitar tener que montar un modelo de gestión de memoria basado en pila dado que los datos, aun en correspondencia mantenida 1:N no se van a utilizar con posterioridad a cada nueva llamada recursiva. Eso es lo que se conoce como optimización por recursión en la cola.

La única pregunta que queda es si es posible transformar el diseño recursivo de la función `factB` en otro diseño `factC` equivalente pero con un esquema de recursividad final. Como se muestra en el listado 3, puede encontrarse dicha transformación por aplicación de técnicas de inversión funcional. 

```
function factC (n) {
  return (function aux (n, a) {
     return n === 0 ? 
      a : 
      aux (n-1, a*n);
  })(n, 1);
}
```

Básicamente en este nuevo diseño hemos introducido un nuevo parámetro `a` de acumulación de resultados sobre el esquema original. Cuando alcancemos el caso base, el resultado estará por definición en `a`. Mientras tanto el caso recursivo irá invocando finalistamente a la función actualizando el nuevo valor del parámetro `n` como antes y el valor de acumulador `a`, que subsume la operación de combinación producto.

Nos podemos felicitar. Nuestros mayores, diseñadores del futuro del lenguaje han dado soporte a esta capacidad con lo que, a partir de ahora la consumición de memoria para casos de recursividad final pasará de tener una cota lineal `O(n)` a una constante `O(1)`.

Sin embargo, más en general, ¿existe algo que podamos hacer para poder revertir este tipo de consumición excesiva de memoria cuando el compilador con el que trabajamos no es lo suficientemente inteligente? Es aquí donde entran en juego las *técnicas de trampolín*. Pero eso lo dejamos para un próximo artículo, si hay interés.
