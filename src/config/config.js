import Config from '../helpers/helper.config.js'
import             './sections/config.home.js'
import             './sections/config.articles.js'
import             './sections/config.events.js'
import             './sections/config.iviews.js'
import             './sections/config.wshops.js'
import             './sections/config.posters.js'

export default Config.define ({

  'site.brand'    : 'Javier Vélez Reyes',
  'site.slogan'   : 'Speaking In Silver',
  'site.logo'     : '/images/commons/logo.png',
  'site.link'     : 'javiervelezreyes.com',
  'site.location' : 'Madrid (Spain)',

  'site.pages'  : [
    { key: 'home'       , label: 'Home'          , path: '/'            , open : true  },
    { key: 'articles'   , label: 'Artículos'     , path: '/articulos'   , open : true  },
    { key: 'events'     , label: 'Eventos'       , path: '/eventos'     , open : true  },
    { key: 'interviews' , label: 'Entrevistas'   , path: '/entrevistas' , open : true  },
    { key: 'workshops'  , label: 'Talleres'      , path: '/talleres'    , open : true  },
    { key: 'posters'    , label: 'Posters'       , path: '/posters'     , open : true  },
  ],

  'site.sections'  : [
    { key: 'home'      , label: 'Home'          , tag: 'about'       },
    { key: 'services'  , label: 'Servicios'     , tag: 'servicios'   },
    { key: 'activity'  , label: 'Actividad'     , tag: 'actividad'   },
    { key: 'subscribe' , label: 'Tribu'         , tag: 'suscripcion' },
    { key: 'contact'   , label: 'Contacto'      , tag: 'contacto'    },
  ],

  'site.links' : [
    { key: 'web'      , icon : '@site.icons.general.web'      , label : 'javiervelezreyes.com'         , href : '/'                                           },
    { key: 'phone'    , icon : '@site.icons.general.phone'    , label : '620.41.04.73'                 , href : 'tel:620410473'                               },
    { key: 'mail'     , icon : '@site.icons.general.mail'     , label : 'javier.velez.reyes@gmail.com' , href : 'mailto:javier.velez.reyes@gmail.com'         },
    { key: 'linkedin' , icon : '@site.icons.general.linkedin' , label : 'LinkedIn'                     , href : 'https://es.linkedin.com/in/javiervelezreyes' },
    { key: 'youtube'  , icon : '@site.icons.general.youtube'  , label : 'Youtube'                      , href : 'https://youtube.com/user/javiervelezreyes'   },
    { key: 'github'   , icon : '@site.icons.general.github'   , label : 'Github'                       , href : 'https://github.com/javiervelezreyes'         },
    { key: 'twitter'  , icon : '@site.icons.general.twitter'  , label : 'Twitter'                      , href : 'https://twitter.com/javiervelezreye'         },
  ],

  'site.icons.general' : [
    { key: 'web'     , icon : 'fas fa-wifi'         },
    { key: 'mail'    , icon : 'fas fa-envelope'     },
    { key: 'phone'   , icon : 'fas fa-phone'        },
    { key: 'talk'    , icon : 'fas fa-comments'     },
    { key: 'linkedin', icon : 'fab fa-linkedin-in'  },
    { key: 'youtube' , icon : 'fab fa-youtube'      },
    { key: 'github'  , icon : 'fab fa-github'       },
    { key: 'twitter' , icon : 'fab fa-twitter'      },
  ],

  'site.icons.light' : [
    { key: 'architecture' , icon : 'pe-7s-vector'   },
    { key: 'development'  , icon : 'pe-7s-plugin'   },
    { key: 'data'         , icon : 'pe-7s-graph1'   },
    { key: 'experience'   , icon : 'pe-7s-users'    },
    { key: 'strategy'     , icon : 'pe-7s-light'    },
    { key: 'event'        , icon : 'pe-7s-display2' },
    { key: 'interview'    , icon : 'pe-7s-micro'    },
    { key: 'workshop'     , icon : 'pe-7s-tools'    },
    { key: 'clipping'     , icon : 'pe-7s-scissors' },
    { key: 'poster'       , icon : 'pe-7s-photo-gallery'},
  ],

  'site.colors.palette.gray' : [
    { key: '00'   , value : '#FFFFFF' },
    { key: '10'   , value : '#0E171F' },
    { key: '20'   , value : '#F2F5F7' },
    { key: '30'   , value : '#DCE3E8' },
    { key: '40'   , value : '#C1CCD6' },
    { key: '50'   , value : '#9FB1BD' },
    { key: '60'   , value : '#7A909E' },
    { key: '70'   , value : '#5B7282' },
    { key: '80'   , value : '#3E5463' },
    { key: '90'   , value : '#2A3F4D' },
    { key: '100'  , value : '#1C2B36' },
  ], 
  
  'site.colors.palette.turquoise' : [
    { key: '10'  , value : '#EBF5F4' },
    { key: '20'  , value : '#C7E8ED' },
    { key: '30'  , value : '#81D8E6' },
    { key: '40'  , value : '#45BCD1' },
    { key: '50'  , value : '#159AB3' },
    { key: '50'  , value : '#0187AE' },
    { key: '60'  , value : '#067A91' },
    { key: '70'  , value : '#09596B' },
    { key: '80'  , value : '#0C424D' },
    { key: '90'  , value : '#102D33' },
    { key: '100' , value : '#0F181A' },
  ],

  'site.colors.palette.aqua' : [
    { key: '10'  , value : '#EBF3F7' },
    { key: '20'  , value : '#C9E7F5' },
    { key: '30'  , value : '#8BD3F7' },
    { key: '40'  , value : '#48B8F0' },
    { key: '50'  , value : '#2F8AE0' },
    { key: '60'  , value : '#0073BA' },
    { key: '70'  , value : '#08548A' },
    { key: '80'  , value : '#0E3D66' },
    { key: '90'  , value : '#0C2B45' },
    { key: '100' , value : '#0B1724' },
  ],

  'site.colors.texts' : [
    { key: 'primary'   , value : '@site.colors.palette.gray.90' },
    { key: 'secondary' , value : '@site.colors.palette.gray.70' },
    { key: 'tertiary'  , value : '@site.colors.palette.gray.40' },
    { key: 'reverse'   , value : '@site.colors.palette.gray.00' },
  ],

  'site.colors.icons' : [
    { key: 'primary'   , value : '@site.colors.palette.gray.90' },
    { key: 'secondary' , value : '@site.colors.palette.gray.70' },
    { key: 'tertiary'  , value : '@site.colors.palette.gray.40' },
    { key: 'reverse'   , value : '@site.colors.palette.gray.00' },
  ],

  'site.colors.lines' : [
    { key: 'primary'   , value : '@site.colors.palette.gray.80' },
    { key: 'secondary' , value : '@site.colors.palette.gray.30' },
    { key: 'tertiary'  , value : '@site.colors.palette.gray.20' },
    { key: 'reverse'   , value : '@site.colors.palette.gray.00' },
  ],

  'site.colors.surfaces.light' : [
    { key: 'primary'   , value : '@site.colors.palette.gray.20' },
    { key: 'secondary' , value : '@site.colors.palette.gray.10' },
    { key: 'tertiary'  , value : '@site.colors.palette.gray.00' },
  ],

  'site.colors.surfaces.regular' : [
    { key: 'primary'   , value : '@site.colors.palette.turquoise.50' },
    { key: 'secondary' , value : '@site.colors.palette.gray.50' },
    { key: 'tertiary'  , value : '@site.colors.palette.aqua.50' },
  ],

  'site.colors.surfaces.dark' : [
    { key: 'primary'   , value : '@site.colors.palette.gray.100'      },
    { key: 'secondary' , value : '@site.colors.palette.turquoise.100' },
    { key: 'tertiary'  , value : '@site.colors.palette.turquoise.90'  },
  ],

  'site.sizes' : [
    { key: 'xxshort' , value : '1rem'   },
    { key: 'xshort'  , value : '1.1rem' },
    { key: 'short'   , value : '1.2rem' },
    { key: 'lite'    , value : '1.4rem' },
    { key: 'medium'  , value : '1.6rem' },
    { key: 'regular' , value : '1.8rem' },
    { key: 'big'     , value : '2.5rem' },
    { key: 'large'   , value : '3rem'   },
    { key: 'xlarge'  , value : '4rem'   },
    { key: 'xxlarge' , value : '8rem'   },
  ],

  'site.weights' : [
    { key: 'light'  , value : '200' },
    { key: 'normal' , value : '400' },
    { key: 'medium' , value : '500' },
    { key: 'bold'   , value : '600' },
    { key: 'xbold'  , value : '800' },
  ],

  'site.services.mailing' : {
    'host'  : 'https://assets.mailerlite.com',
    'path'  : '/jsonp/1112156/forms/133107449592808800/subscribe'
  },

  'site.services.analytics' : {
    'host'  : 'https://www.googletagmanager.com',
    'path'  : '/gtag/js',
    'id'    : 'G-VCBHDKLX6N',
    'key'   : 'site.services.analytics'
  },

  'site.redirects' : [
    { key: 'el-efecto-ornitorrinco'                             , path : '/articulos/desarrollo#ornitorrinco'                                   },
    { key: 'la-funcion-que-no-lo-era'                           , path : '/articulos/recortes/javascript/la-funcion-que-no-lo-era'              },
    { key: 'las-tres-evaluaciones-de-la-programacion-funcional' , path : '/articulos/recortes/javascript/las-tres-evaluaciones-del-funcional'   },
    { key: 'optimizacion-por-recursion-en-la-cola'              , path : '/articulos/recortes/javascript/optimizacion-por-recursion-en-la-cola' },
    { key: 'taller-de-programacion-funcional-en-javascript'     , path : '/comunidad#talleres'                                                  },
    
    { key: 'orientacion-a-componentes-como-empezo-todo'         , path : '/articulos/recortes/componentes/como-empezo-todo'                     },
    { key: 'orientacion-a-componentes-los-objetivos'            , path : '/articulos/recortes/componentes/componentes-objetivos'                },
    { key: 'orientacion-a-componentes-el-proceso'               , path : '/articulos/recortes/componentes/componentes-proceso'                  },
    { key: 'componentes-modelos-de-componente'                  , path : '/articulos/recortes/componentes/componentes-modelos'                  },
    
    { key: 'java-el-cobol-del-futuro'                           , path : '/articulos/recortes/opinion/java-el-cobol-del-futuro'                 },
    { key: 'el-feudalismo-llega-a-la-web'                       , path : '/articulos/recortes/opinion/el-feudalismo-llega-a-la-web'             },
    { key: 'ni-nueva-ni-arquitectura-ni-hexagonal'              , path : '/articulos/recortes/opinion/ni-nueva-ni-arquitectura-ni-hexagonal'    },
  ],

  'site.references' : [
    { key : 'color'         , ref : 'tinyurl.com/2eh9t2cf' },
    { key : 'icons.general' , ref : 'tinyurl.com/y8rrtn2v' },
    { key : 'icons.light'   , ref : 'tinyurl.com/2zctchhp' },
    { key : 'animation'     , ref : 'tinyurl.com/2hlvu3by' },
    { key : 'images'        , ref : 'tinyurl.com/y6wpy99p' },
  ],

})


