import Config from '../../helpers/helper.config.js'
Config.define ({

  'site.home.header' : {
    title       : 'Javier Vélez Reyes',
    watermark   : 'Javier Vélez',
    image       : '/images/commons/user.png',
    caption     : [
      'Estrategia & Innovación Digital',
      'Arquitectura Empresarial & Soluciones',
      'IA, Data & ML',
      'Diseño & Experiencia de Cliente',
      'Cultura & Transformación'
    ],
    keys  : [
      'Arquitectura Empresarial',
      'Diseño & Construcción de Software ',
      'Experiencia de Cliente',
      'Inteligencia Artificial & ML',
      'Transformación Digital'
    ],
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
      Doctor en Informática por la Universidad Politécnica de Madrid Javier tiene una 
      dilatada trayectoria académica y profesional de más de 25 años de experiencia. Experto en 
      Estrategia & Innovación Digital, Arquitectura Empresarial, Experiencia de Cliente e 
      Inteligencia Artificial, centra sus esfuerzos en la transformación digital de organizaciones, 
      en la divulgación tecnológica y es una voz autorizada del sector.
    `,
    summary    : `
      Javier Vélez Reyes PhD Informática. Arquitectura Empresarial, IA, Customer Experience, 
      Transformación Digital. Divulgador Tecnologico. Voz de Influencia.
    `
  },

  'site.home.highlights' : [{
    icon : '@site.icons.light.development',
    head : 'Ingeniería & Desarrollo',
    text : 'Construcción de Software. Paradigmas de Programación. Modelos de Abstracción y Ejecución'
  }, {
    icon : '@site.icons.light.architecture',
    head : 'Arquitectura & Diseño',
    text : 'Arquitectura de Soluciones. Patrones y Modelos. Pincipios Funfacionales. Patrones de Diseño'
  }, {
    icon : '@site.icons.light.data',
    head : 'Data & Inteligencia',
    text : 'Análisis de datos. Inteligencia de Negocio. Gobierno del Dato. Inteligencia y Aprendizaje Automático'
  }, {
    icon : '@site.icons.light.experience',
    head : 'Experiencia & Cliente',
    text : 'Diseño de Producto. Modelos de Uso. Arquitecturas de Canal. Experiencia de Cliente y Negocio'
  }, {
    icon : '@site.icons.light.strategy',
    head : 'Estrategia & Innovación',
    text : 'Transformación Digital. Estrategia & Operación. Organización Empresarial. Innovación Continua'
  }],

  'site.home.promo' : {
    loader : '/images/home/promo.loader.png',
    cover  : '/images/home/promo.cover.png',
    video  : '/videos/promo.03.mp4',
  },

  'site.home.stats' : [
    { label : 'Researching & Innovación',    value  : 2003 },
    { label : 'Training & Formación',        value  : 1998 },
    { label : 'Estrategia & Consultoría',    value  : 2000 },
    { label : 'Divulgación & Top Voice',     value  : 2010 },
  ],

  'site.home.service' : {
    title    : 'Servicios',
    caption  : 'Divulgación, Formación & Consultoría', 
    link     : '@site.pages.courses',
    services : [{ 
      key   : 'Speaker',
      head  : 'Speaker & Divulgador',      
      text  : `Javier es recococida voz de autoridad dentro del sector y 
      cuenta con una narrativa motivadora e inspiracional que nunca deja 
      indiferente a nadie`
    }, { 
      key   : 'Mentor',
      head  : 'Formador & Coach',
      text  : `Formador vocacional Javier lleva más de dos decadas 
      vinculando a la docencia universitaria y la formación técnica y
      profesional`,
    }, { 
      key   : 'Advisor',
      head  : 'Consultor & Advisor',
      text  : `Como adjunto a la dirección Javier ha trabajado en la 
      definición estratégica de negocios y la innovación digital de
      importantes compañías`,
     }
  ]},

  'site.home.activity' : {
    title      : 'Actividad',
    caption    : 'Clases, Articulos & Difusión', 
    activities : [{ 
      key   : 'Articles',
      head  : 'Publicaciones & Artículos',
      link  : '@site.pages.articles',
      image : '/images/home/activity.01.png',
      text  : `Publicaciones periódicas de carácter abierto que dan forma a 
        diferentes streams de trabajo e investigación donde me encuentro 
        implicado`,
     }, { 
      key   : 'Events',
      head  : 'Eventos & Divulgación',
      link  : '@site.pages.events',
      image : '/images/home/activity.02.png',
      text  : `Encuentros, conferencias y eventos en los que he participado
        de manera activa como speaker o colaborando en la organización y 
        difusión`,
     }, { 
      key   : 'IViews',
      head  : 'Intervenciones & Entrevistas',
      link  : '@site.pages.interviews',
      image : '/images/home/activity.03.png',
      text  : `Entrevistas e intervenciones en comunidad participando como
        voz autorizada unas veces para posicionar mi opinion profesional y
        para presentar mi trabajo`
    }, { 
      key   : 'wshops',
      head  : 'Talleres & Live Coding',
      link  : '@site.pages.workshops',
      image : '/images/home/activity.04.png',
      text  : `Un catálogo de los principales  talleres y master classes 
        que he impartido en comunidad en los últimos años sobre topicos de 
        fuerte interés y actualidad`,
    }, { 
      key   : 'posters',
      head  : 'Pósters & Infografías',
      link  : '@site.pages.posters',
      image : '/images/home/activity.05.png',
      text  : `Infografías publicadas sobre mis principales áreas de 
        expertise desde arquitectura empresarial o estrategia
        digital hasta IA, experiencia de cliente o diseño de producto`,
    },
  ]},

  'site.home.subscribe' : {
    head     : 'La Tribu',
    caption  : 'Súmate a la Tribu para Recibir Notificaciones de Interés',
    fields   : [
      { key : 'user', type : 'text',     text : 'nombre'},
      { key : 'mail', type : 'text',     text : 'mail'  },
      { key : 'gdpr', type : 'checkbox', text : 'Acepto Política GDPR' },
    ],
    action   : 'Suscribete'
  },

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
    icon     : '@site.icons.light.strategy',
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
        { label: 'Sobre Mi'    , path: '/#about'       },
        { label: 'Servicios'   , path: '/#servicios'   },
        { label: 'Actividad'   , path: '/#actividad'   },
        { label: 'Suscripción' , path: '/#suscripcion' },
        { label: 'Contacto'    , path: '/#contacto'    },
        { label: 'GDPR',         path: '/docs/gdpr'    }
      ]
    },
    contact : {
      title : 'Contacto',
      links : [
        { icon : '@site.icons.general.mail'     , label : 'Mail'     , href : 'mailto:javier.velez.reyes@gmail.com'         },
        { icon : '@site.icons.general.linkedin' , label : 'LinkedIn' , href : 'https://es.linkedin.com/in/javiervelezreyes' },
        { icon : '@site.icons.general.youtube'  , label : 'Youtube'  , href : 'https://youtube.com/user/javiervelezreyes'   },
        { icon : '@site.icons.general.github'   , label : 'Github'   , href : 'https://github.com/javiervelezreyes'         },
        { icon : '@site.icons.general.twitter'  , label : 'Twitter'  , href : 'https://twitter.com/javiervelezreye'         },
      ],
    }
  }

})


