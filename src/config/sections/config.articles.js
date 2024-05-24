import Config from '../../helpers/helper.config.js'


Config.define ({

  'site.articles.header' : {
    title   : 'Artículos & Opinión',
    caption : 'Publicaciones Técnicas & Opinión',
    lead    : `
      Esta sección reúne la colección de artículos publicados organizados por categorías temáticas. 
      Cada categoría agrupa series de interés y cada serie ordena una secuencia de artículos sobre
      el mismo tópico. 
    `
  },

  'site.articles.categories' : [{
    key     : 'lenguajes',
    title   : 'Lenguajes & Paradigmas',
    caption : 'Desarrollo & Construcción de Software',
    icon    : '@site.icons.light.development',
    path    : '/articulos/lenguajes',
    lead    : `
      Todo proceso de digitalización nace de un esfuerzo de desarrollo articulado a través del uso de lenguajes. 
      Más allá de sintaxis particulares y modelos o estilos de codificación, resulta especialmente importante 
      prestar atención a las formas en la que es posible construir software hoy en día desde distintos paradigmas
      y modelos arquitectónicos. Si bien esto es cierto, cada lenguaje impone una interpretación del paradigma
      al que da soporte y cada esfuerzo de arquitectura hoy vive desplegado directamente sobre el código. 
      
      Dentro de Lenguajes & Paradigmas centraremos nuestra atención en describir diferentes modelos, patrones,
      estilos, principios, técnicas y mecanismos que conforman la base conceptual de los más relevantes paradigmas 
      de construcción de software y ello lo haremos desde los ojos del desarrollador de soluciones de software.
      Si se dedica a desarrollar software, tal vez esta categoría le resulte un punto de referencia relevante 
      para aprender sobre la actividad de desarrollo desde una perspectiva no tan habitual.
    `,
    tags    : [
      'Desarrollo' , 'Programación', 
      'Lenguajes'  , 'Paradigmas'  ,  
      'Mecanismos' , 'Técnicas'    , 
      'Modelos'    , 'Patrones'    , 
      'Principios' 
    ], 
    series  : [
      '@site.articles.series.abstraccion',
      '@site.articles.series.ejecucion',
      '@site.articles.series.ornitorrinco',
      '@site.articles.series.asincronia',
      '@site.articles.series.concurrente',
      '@site.articles.series.reactiva',
    ],
    draft   : false,
    hidden  : false
  }, {
    key     : 'arquitectura',
    title   : 'Arquitectura & Diseño',
    caption : 'Modelos, Patrones y Reflexiones',
    icon    : '@site.icons.light.architecture',
    path    : '/articulos/arquitectura',
    lead    : `
      Arquitectura es muchas cosas a la vez. Hacemos arquitectura al idear modelos de solución. Lo hacemos cuando
      planteamos esquemas de integración y composición. También creamos arquitecturas al establecer ecosistemas de
      componentes que responden a las necesidades del negocio. Incluso estamos haciendo arquitectura cuando lanzamos
      screening de mercado, cuando escogemos y prescribimos stack tecnológico, al crear marcos de referencia para la
      construcción de software o en la definición de modelos de madurez y hojas de ruta de estrategia empresarial.

      Arquitectura es muchas cosas en una y los arquitectos son con frecuencia expertos que operan a muchos niveles
      dentro de la pirámide de gobierno de una organización. La categoría de Arquitectura & Diseño tiene por objeto 
      hacer un recorrido de todas estas preocupaciones. Se trata de crear un espacio donde poder discutir los 
      elementos nucleares de un perímetro de conocimiento tan amplio y fundamental como transversal y en constante
      movimiento al devenir de la transformación digital y tecnológica.
    `,
    tags    : [
      'Arquitectura' , 'Tecnologías', 
      'Modelos'      , 'Soluciones' ,  
      'Principios'   , 'Estrategia' , 
      'Patrones'     , 'Estilos'    , 
      'Gobierno' 
    ], 
    series  : [],
    draft   : false,
    hidden  : false
  }, {
    key     : 'data',
    title   : 'Data & Inteligencia Artificial',
    caption : 'Arquitecturas del Dato IA & ML',
    icon    : '@site.icons.light.data',
    path    : '/articulos/data',
    lead    : `
      La data se ha convertido en un revulsivo en los últimos años. Las organizaciones parecen haber hecho, de manera
      consciente o inconsciente, un giro copernicano hacia nuevos modelos de operación donde los datos toman el protagonismo
      en detrimento de la lógica empresarial abanderada de generaciones anteriores y que parece haber sido relegada hacia 
      soluciones verticales en la nube. Hoy por hoy los datos son el principal activo de negocio, el actor fundamental en 
      torno a los cuales gira toda la actividad. Porque el valor esta en ellos mismos como punto de operación germinal.
      
      De los datos se obtiene información y conocimiento. De hecho sólo donde hay datos hay inteligencia de negocio y 
      donde hay muchos datos hay mucha inteligencia. Parecemos haber aprendido el mantra del data centric y data driven
      sin saber muy bien las diferencias que existen entre estos y una pléyade de otros muchos conceptos de reciente 
      acuñamiento. En Data & Inteligencia Artificial dedicaremos nuestra atención a discutir estrategias, modelos,
      arquitecturas, principios y aproximaciones de innovación dentro de este área.
    `,
    tags    : [
      'Datos'         , 'Información'    , 
      'Conocimientos' , 'Arquitectura'   ,  
      'Aprendizaje'   , 'Reconocimiento' , 
      'Análisis'      , 'Decisioning'    , 
      'Valor' 
    ], 
    series  : [],
    draft   : false,
    hidden  : false
  }, {
    key     : 'cliente',
    title   : 'User & Customer Experience',
    caption : 'Experiencia de Usuario & Cliente',
    icon    : '@site.icons.light.experience',
    path    : '/articulos/cliente',
    lead    : `
      La experiencia lo es todo. Cuando creamos productos o servicios ante todo estamos creando experiencias. La calidad
      de esta experiencia a lo largo del viaje del usuario conforma un camino hacia el éxito o fracaso de cualquiera 
      iniciativa de diseño y construcción digital. Sin embargo, al hablar de uso y usuario es preceptivo precisar a que
      nos estamos refiriendo. Clientes, tecnólogos y expertos de negocio son todos usuarios pero su viaje y su 
      demanda experiencial es muy diferente. 
      
      Cuando hablamos de experiencia de cliente, negocio o desarrollador hablamos de tres perímetros claramente disjuntos
      pero a la vez elementos complementarios y contrapuestos que se conectan por vasos comunicantes para dar forma al 
      paraguas UX. En User & Customer Experiences recorreremos los principales tópicos de interés de estas tres arenas de
      de trabajo. Pero lo haremos desde una perspectiva diferencial, preocupándonos en cómo las arquitecturas digitales 
      pueden servir como vectores de empuje.
    `,
    tags    : [
      'Experiencia', 'Viaje'       , 
      'Usuario'    , 'Cliente'     ,  
      'Negocio'    , 'Desarrollo'  , 
      'Canales'    , 'Interacción' , 
      'Diálogo' 
    ], 
    series  : [],
    draft   : false,
    hidden  : false
  }, {
    key     : 'cultura',
    title   : 'Agile & Gobierno',
    caption : 'Cultura & Desarrollo Profesional',
    icon    : '@site.icons.light.governance',
    path    : '/articulos/cultura',
    lead    : `
      Crear una organización implica crear un colectivo social. Cuando ese colectivo se pone a trabajar de forma intencional 
      en relación a un marco de objetivos se crea una cultura de desarrollo y desempeño. Las costumbres, ceremonias, actitudes, 
      creencias y valores dentro del colectivo caracterizan la cultura. Las personalidades, ambiciones, intereses, emociones e 
      influencias condicionan la misma. Crear valor de negocio siempre se expresa antes como un esfuerzo contra la cultura que 
      en un acto de procedimiento.
        
      Al abordar iniciativas de digitalización, creamos activos tecnológicos, flujos de inteligencia sobre el dato, modelos 
      experienciales, procesos de innovación de negocio, y un largo etcetera. Sin embargo, a la postre, solo estamos dedicando
      esfuerzos de cambio sobre nuestro modelo de cultura. Y es que sólo así se consigue que esa realidad social fluya de forma
      mas coordinada y cohesiva. Conocer el contexto donde se opera e identificar las palancas de cambio cultural preceptivas 
      es fundamental para el éxito empresarial. Agile & Cultura es una categoría dedicada a la discusión sobre todos estos aspectos.
    `,
    tags    : [
      'Cultura'    , 'Transformación', 
      'Esfuerzo'   , 'Palancas'      ,  
      'Contexto'   , 'Cambio'        , 
      'Progreso'   , 'Objetivos'     , 
      'Alineamiento' 
    ], 
    series  : [],
    draft   : false,
    hidden  : false
  }, {
    key     : 'recortes',
    title   : 'Opinión & Recortes',
    caption : 'Miscelánea de mi Web Anterior',
    icon    : '@site.icons.light.clipping',
    path    : '/articulos/recortes',
    lead    : `
      El contenido de esta categoría es un compendio de todos los artículos relevantes que he podido rescatar de mi web anterior.
      Está en mi intención revisitar todos estos textos para crear nuevas versiones actualizadas y extendidas de los mismos.
      Hecho esto, todo el contenido actualizado será adecuadamente movido a las categorías y series de artículos donde mejor encajen.
      Esto quiere decir que idealmente la categoría de recortes tendrá un tiempo de vida limitado y desaparecerá cuando la integración
      de contenidos a esta nueva web haya finalizado.

      De cara a no perder las referencias a los artículos más populares ni generar enlaces rotos mantendremos una política conservadora 
      que redirija los antiguos enlaces a artículos publicados en la web anterior hacia los nuevos contenidos publicados en esta web.
      Si en el proceso de revisitado y actualización de contenidos un artículo se viera sometido a cambios severos mantendríamos un 
      enlace desde la nueva versión para poder acceder a la versión antigua aun cuando ésta no esté accesible directamente desde el
      índice general de categorías.
    `,
    tags    : [
      'Desarrollo' , 'Paradigmas'  , 
      'Componentes', 'Lenguajes'   ,  
      'tecnología' , 'Arquitectura', 
      'Diseño'     , 'Profesión'   , 
      'Cultura' 
    ], 
    series  : [
      '@site.articles.series.javascript',
      '@site.articles.series.componentes',
      '@site.articles.series.opinion',
    ],
    draft   : false,
    hidden  : false
  }],

  'site.articles.series' : [{
    key      : 'abstraccion',
    title    : 'Paradigmas & Modelos de Abstracción',
    caption  : 'El Software en la Fase de Diseño',
    path     : 'lenguajes/abstraccion',
    slug     : 'abstraccion',
    draft    : false,
    hidden   : false
  }, {
    key      : 'ejecucion',
    title    : 'Paradigmas & Modelos de Ejecución',
    caption  : 'El Software en la Fase de Ejecución',
    path     : 'lenguajes/ejecucion',
    slug     : 'ejecucion',
    draft    : false,
    hidden   : false
  }, {
    key      : 'ornitorrinco',
    title    : 'El Efecto Ornitorrinco',
    caption  : 'El Lenguaje es Anterior al Paradigma',
    path     : 'lenguajes/ornitorrinco',
    slug     : 'ornitorrinco',
    draft    : false,
    hidden   : false
  }, {
    key      : 'asincronia',
    title    : 'Ejecución Asíncrona',
    caption  : 'El Rendimiento de lo No Bloqueante',
    path     : 'lenguajes/asincronia',
    slug     : 'asincronia',
    draft    : false,
    hidden   : false
  }, {
    key      : 'concurrente',
    title    : 'Ejecución Concurrente',
    caption  : 'Construcción Cooperativa & Competitiva',
    path     : 'lenguajes/concurrente',
    slug     : 'concurrente',
    draft    : false,
    hidden   : false
  }, {
    key      : 'reactiva',
    title    : 'Ejecución Reactiva',
    caption  : 'Declaración & Comportamiento Emergente',
    path     : 'lenguajes/reactiva',
    slug     : 'reactiva',
    draft    : false,
    hidden   : false
  }, {
    key      : 'javascript',
    title    : 'El Lenguaje JavaScript',
    caption  : 'El Aprendiz de Brujo',
    path     : 'recortes/javascript',
    slug     : 'javascript',
    draft    : false,
    hidden   : false
  }, {
    key      : 'componentes',
    title    : 'Orientación a Componentes',
    caption  : 'Hacia una Web Modular y Reutilizable',
    path     : 'recortes/componentes',
    slug     : 'componentes',
    draft    : false,
    hidden   : false
  }, {
    key      : 'opinion',
    title    : 'Opinión y Reflexiones',
    caption  : 'Predicando en el Desierto',
    path     : 'recortes/opinion',
    slug     : 'opinion',
    draft    : false,
    hidden   : false
  }]

})


