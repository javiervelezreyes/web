import Config from '../../helpers/helper.config.js'

const VIDEO = 'https://storage.googleapis.com/assets.javiervelezreyes.com'
const IMAGE = ''

Config.define ({

  'site.home.header' : {
    title       : 'Javier Vélez Reyes',
    watermark   : 'Javier Vélez',
    image       : '/images/commons/user.png',
    caption     : `
      Arquitectura Empresarial · Diseño & Construcción de Software ·
      Experiencia de Cliente · Inteligencia Artificial & ML · 
      Transformación Digital
    `,
    links : [
      { icon : '@site.icons.general.linkedin' , href : 'https://es.linkedin.com/in/javiervelezreyes' },
      { icon : '@site.icons.general.youtube'  , href : 'https://youtube.com/user/javiervelezreyes'   },
      { icon : '@site.icons.general.github'   , href : 'https://github.com/javiervelezreyes'         },
      { icon : '@site.icons.general.twitter'  , href : 'https://twitter.com/javiervelezreye'         }
    ],
    figures : [
      { ref: '/images/home/hero.01.png', title: 'La Era del Consumismo Web'    },
      { ref: '/images/home/hero.02.png', title: 'Experiencias Líquidas'        },
      { ref: '/images/home/hero.03.png', title: 'Descubrimiento de Audiencias' },
      { ref: '/images/home/hero.04.png', title: 'Arquitecturas Adaptativas'    },
      { ref: '/images/home/hero.05.png', title: 'Modelos Customer Centric'     },
      { ref: '/images/home/hero.06.png', title: 'Inteligencia Operacional'     },
      { ref: '/images/home/hero.07.png', title: 'Desarrollo por Objetivos'     },
      { ref: '/images/home/hero.08.png', title: 'Modelos de Composición'       },
      { ref: '/images/home/hero.09.png', title: 'Computación Cloud'            },
      { ref: '/images/home/hero.10.png', title: 'Modelos de Componente'        },
    ]
  },

  'site.home.about' : {
    title       : 'Javier Vélez Reyes',
    caption     : 'Trayectoria & Recorrido Profesional',
    description : `
      Ingeniero Informático por la Universidad Politécnica de Madrid y Doctor en Informática 
      por la Universidad Nacional de Educación a Distancia Javier tiene una dilatada trayectoria
      académica y profesional de más de 25 años. Experto en Arquitectura Empresarial, Experiencia
      de Cliente e Inteligencia Artificial, centra sus esfuerzos en la transformación digital, en
      la divulgación tecnológica y es una voz autorizada del sector.
    `,
    summary    : `
      Javier Vélez Reyes PhD Informática. Arquitectura Empresarial, IA, Customer Experience, 
      Transformación Digital. Divulgador Tecnologico. Voz de Influencia.
    `
  },

  'site.home.highlights' : [{
    icon : '@site.icons.light.architecture',
    head : 'Arquitectura',
    text : 'Ideación de modelos de solución innovadores con tecnologías emergentes'
  }, {
    icon : '@site.icons.light.data',
    head : 'Data & IA',
    text : 'Arquitectura de datos, analítica, big data, IA & ML, data mesh & data fabric'
  }, {
    icon : '@site.icons.light.governance',
    head : 'Gobierno',
    text : 'Arquitectura Empresarial, gobierno, cultura, centros de excelencia'
  }, {
    icon : '@site.icons.light.experience',
    head : 'Diseño & UX',
    text : 'Evangelización de conocimiento y actividades de difusión en comunidad'
  }],

  'site.home.promo' : {
    image : IMAGE + '/images/home/promo.png',
    video : VIDEO + '/videos/promo/2021/promo.03.mp4',
  },

  'site.home.stats' : [
    { label : 'Researching & Innovación',    value  : 2003 },
    { label : 'Training & Mentoring',        value  : 1998 },
    { label : 'Diseño & Arquitectura',       value  : 1995 },
    { label : 'Difusión & Evangelización',   value  : 2012 },
  ],

  'site.home.activity' : {
    title      : 'Actividad',
    caption    : 'Clases, Articulos & Difusión', 
    activities : [{ 
      key   : 'Courses',
      head  : 'Cursos & Master Classes',
      link  : '@site.pages.courses',
      image : '/images/home/activity.01.png',
      text  : `Cursos y master classes donde se revisan de manera vidual y 
        pildórica las bases fundacionales del espacio tecnológico, digital
        y arquitectónico`
    }, { 
      key   : 'Ebooks',
      head  : 'Ebooks & Documentación',
      link  : '@site.pages.books',
      image : '/images/home/activity.02.png',
      text  : `Un catálogo de documentación técnica en formato descargable 
        donde se abordan en profundidad diferentes tópicos de interés de 
        manera completa y precisa`,
    }, { 
      key   : 'Articles',
      head  : 'Artículos & Opinión',
      link  : '@site.pages.articles',
      image : '/images/home/activity.03.png',
      text  : `Publicaciones periódicas de carácter abierto que dan forma a 
        diferentes streams de trabajo e investigación donde me encuentro 
        implicado`,
     }, { 
      key   : 'Events',
      head  : 'Comunidad & Difusión',
      link  : '@site.pages.events',
      image : '/images/home/activity.04.png',
      text  : `Entrevistas, conferencias, eventos en los que he participado
        de manera activa como speaker o colaborando en la organización y 
        difusión`,
    }
  ]},

  'site.home.contact' : {
    title    : 'Contacto',
    caption  : 'Redes, Teléfono & Mail',
    channels : [{
        key   : 'web',
        title : 'Por Redes',
        icon  : '@site.icons.general.talk',
        links : [
          { label : 'Twitter'  , href : 'https://twitter.com/javiervelezreye'         },
          { label : 'LinkedIn' , href : 'https://es.linkedin.com/in/javiervelezreyes' },
          { label : 'Youtube'  , href : 'https://youtube.com/user/javiervelezreyes'   },
        ],
      }, {
        key   : 'phone',
        title : 'Por Teléfono',
        icon  : '@site.icons.general.phone',
        links : [{ label : '620.41.04.73' , href : 'tel:620410473' }]
      },{
        key   : 'mail',
        title : 'Por Correo',
        icon  : '@site.icons.general.mail',
        links : [{ label : 'javier.velez.reyes@gmail.com' , href : 'mailto:javier.velez.reyes@gmail.com' }]
      }
    ]
  },

  'site.home.quotes' : [{
    icon     : '@site.icons.light.architecture',
    title    : 'La tecnología se mueve a impulsos pendulares de dudoso valor para el cliente',
    caption  : `Frecuentemente transitamos hacia nuevas generaciones tecnológicas bajo la falsa
      creencia de que estamos transformando los negocios sin advertir que estos cambios pocas 
      veces responden a verdaderas necesidades de los clientes.`
  }, {
    icon     : '@site.icons.light.data',
    title    : 'Los datos masivos son el único caldo de cultivo donde puede crecer la inteligencia',
    caption  : `La proclamada inteligencia artificial es obscenamente simplista en su procedimiento. 
      Sólo una ingente cantidad de datos la convierte en una herramienta asombrosa. Si no disponemos
      de datos de calidad no disponemos de inteligencia.`
  }, {
    icon     : '@site.icons.light.experience',
    title    : 'No se trata tanto de atender a nuestros clientes sino de orientarlos hacia el futuro',
    caption  : `Con frecuencia los clientes demandan soluciones para igualarse a sus competidores. Sin 
      embargo es nuestra responsabilidad mostrarles todas aquellas opciones que ofrece la tecnología hoy
      para construir un mañana más eficiente y prometedor.`
  }, {
    icon     : '@site.icons.light.data',
    title    : 'La inteligencia generativa nos convertirá en pocos años en ingenieros de lo intencional',
    caption  : `Dentro de pocos años, el activo de entrega en los procesos de desarrollo de software
      dejara de ser el código fuente mantenible y cuidado para pasar a ser un activo generado cuya 
      construcción de dirigirá por un diálogo interactivo e intencional.`
  }, {
    icon     : '@site.icons.light.governance',
    title    : 'El mayor activo que puede construir una organización es su estrategia de avance digital',
    caption  : `Cuando hablamos de transformación digital frecuentemente se piensa en un cambio 
      generacional de la tecnología y los procesos de negocio. El mayor valor de estos esfuerzos está,
      sin embargo, en el racional del propio cambio en sí mismo.`
  }, {
    icon     : '@site.icons.light.experience',
    title    : 'La omnicanalidad es sin duda una de las señas de identidad más preponderantes de la digitalización',
    caption  : `El esfuerzo de los arquitectos de software de los próximos años no consistirá en la 
      creación de nuevos canales para atraer el tráfico de clientes sino de crear procesos que nos
      acerquen a aquellos canales donde los clientes quieren estar.`
  }, {
    icon     : '@site.icons.light.architecture',
    title    : 'Crear soluciones de computación en la nube significa diseñar arquitecturas defensivas',
    caption  : `La computación en la nube ofrece grandes ventajas competitivas a las organizaciones.
     Sin embargo, el solapamiento funcional, la ruptura UX o la fuga de datos son riesgos importantes
     que es necesario mitigar aplicando diseños defensivos. `
  }, {
    icon     : '@site.icons.light.data',
    title    : 'No se trata de tomar decisiones dirigidas por los datos sino de crear empresas entradas en ellos',
    caption  : `El valor diferencial de la inteligencia operativa y los procesos de negocio hace tiempo 
      que se perdió en base a la externalización y la estandarización homologada. Nuestro valor, hoy 
      por hoy es crear corporaciones donde el dato sea el producto central.`
  }],

  'site.home.footer' : {
    head : {
      title : 'Javier Vélez Reyes',
      text  : `La cura para el aburrimiento es la curiosidad. 
         No hay cura para la curiosidad. 
         Dorothy Parker. 1893 - 1967`
    },
    sections : {
      title : 'Secciones',
      links : [ 
        { label: 'Cursos'    , path: '/cursos'   },
        { label: 'Libros'    , path: '/libros'    },
        { label: 'Artículos' , path: '/articulos' },
        { label: 'Comunidad' , path: '/comunidad' }
      ]
    },
    contact : {
      title : 'Contacto',
      links : [
        { icon : '@site.icons.general.mail'     , label : 'Mail'     , href : 'mailto:javier.velez.reyes@gmail.com'         },
        { icon : '@site.icons.general.github'   , label : 'Github'   , href : 'https://github.com/javiervelezreyes'         },
        { icon : '@site.icons.general.twitter'  , label : 'Twitter'  , href : 'https://twitter.com/javiervelezreye'         },
        { icon : '@site.icons.general.linkedin' , label : 'LinkedIn' , href : 'https://es.linkedin.com/in/javiervelezreyes' },
        { icon : '@site.icons.general.youtube'  , label : 'Youtube'  , href : 'https://youtube.com/user/javiervelezreyes'   },
      ],
    }
  }

})


