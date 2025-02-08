import Config from '../../helpers/helper.config.js'

Config.define ({

  'site.events.header' : {
    title   : 'Eventos & Divulgación',
    caption : 'Comunicaciones más Relevantes',
    icon    : '@site.icons.light.talk',
    image   : '/images/home/activity.02.png',
    lead    : `
      En esta sección se recogen las últimas charlas y comunicaciones que he realizado en los
      principales encuentros y converencias profesionales dentro del sector.
    `
  },

  'site.events.talks' : [
    {
      key     : 'techfest-2015',
      title   : 'Técnicas & Modelos de Metaprogramación',
      caption : 'Arquitecturas de Software Adaptativas',
      image   : '/images/activity/events/event.15.01.png',
      video   : 'APDAA61UsAk',
      path    : '/eventos/techfest-2015',
      place   : 'TechFest',
      author  : 'Javier Vélez',
      date    : '2015',
      time    : '55:30',
      draft   : false,
      hidden  : false,
      lead    : `
          Los procesos de construcción de soluciones de software pasan habitualmente por la creación de arquitecturas sólidas. Este tipo de 
          diseños son aquellas que cumplen con los principios fundacionales del paradigma de la orientación a objetos, de sus siglas en inglés
          SOLID. Sin embargo, en ocasiones resulta conveniente aplicar otro tipo de estrategia para la creación de software. Esto es 
          especialmente cierto en aquellos casos en los que se pretenda dar con soluciones que resulten flexibles y plásticamente adaptables 
          a distintos contextos de uso. El uso de determinadas técnicas y modelos de diseño arquitectónico tal es como el uso de traits, 
          mixins, roles, aspectos o subjects, propios del paradigma de la orientación a componentes, es de aplicaciónen estos casos. Muchos 
          lenguajes, de hecho, invitan a llevar a cabo un proceso de ideación de soluciones basado en estas técnicas dando lugar a soluciones 
          más flexibles y dinámicamente cambiantes a tenor de las condiciones ambientales. A lo largo de esta charla se hace un recorrido 
          exhaustivo de este paradigma arquitectónico revisando los principios, técnicas y modelos sobrela base del stack tecnológico de la 
          plataforma web.`,
      'links'   : [
        'commit-2018',
        'polymer-2016',
        'codemotion-2016'
      ]
    }, {
      key     : 'bbva-2015',
      title   : 'Orientando a Componentes la Web',
      caption : 'Arquitecturas de Componentes Web',
      image   : '/images/activity/events/event.15.02.png',
      video   : 'YW9bB6qHTvI',
      path    : '/eventos/bbva-2015',
      place   : 'BBVA Innovation',
      author  : 'Javier Vélez',
      date    : '2015',
      time    : '51:00',
      draft   : false,
      hidden  : false,
      lead    : `
          La web está cambiando y la forma de desarrollar soluciones sobre ella también. En los últimos años hemos observado cómo la llegada 
          de los estándares en materia de componentes web ha supuesto un clarorevulsivo en cuanto a la aproximación tecnológica para crear 
          soluciones de frontend. Los componentes se han convertido así en el activo arquitectónico fundamental para encapsular modelos de 
          interacción en torno a estructuras visuales. El éxito ha sido tal que ya sea como marco conceptual o como espaciode operación 
          tecnológica todos los Frameworks de Front actuales trabajan con el uso de componentes.Sin embargo, esta revolución, va mucho más 
          allá de meros aspectos de transformación tecnológica. En cambio se trata de un cambio de paradigma a nivel metodológico y 
          procedimental ya que las organizaciones dejarán de construir soluciones a doc específicas para los requerimientos de un determinado 
          proyecto de cliente para comenzar a construir verdaderos catálogos de componentes con activos reutilizables que respondan a las 
          necesidades recurrentes de un determinado dominio de aplicación El éxito en este sentido radicará en saber encontrar el equilibrio 
          adecuado para crear diseños lo suficientemente abstractos y bien diseñados Como para crear soluciones ágiles y productivas en 
          tiempo récord.`,
      'links'   : [
        'polymer-2016',
        'codemotion-2016',
        'commit-2018'
      ]
    }, {
      key     : 'polymer-2016',
      title   : 'Patrones de Acceso a Datos en la Web',
      caption : 'Arquitecturas de Componentes Web',
      image   : '/images/activity/events/event.16.01.png',
      video   : 'MxCBdxup-H0',
      path    : '/eventos/polymer-2016',
      place   : 'Polymer Day',
      author  : 'Javier Vélez',
      date    : '2016',
      time    : '49:21',
      draft   : false,
      hidden  : false,
      lead    : `
          La orientación a componentes web se ha convertido en un revulsivo en los últimos años para construir soluciones digitales de última 
          generación. El hecho de hacer uso de componentes como piezas de interacción visual encapsuladas y reutilizables ofrece grandes 
          ventajas a los procesos de construccióncompositiva y arroja un escenario de mayor simplicidad a la hora de idear soluciones de 
          escalabilidadcreciente en complejidad. Dentro de la comunidad se ha hablado mucho acerca de cómo se pueden construireste tipo de 
          activos tecnológicos y de cómo puede llevarse a cabo un proceso de construcción sistemática dirigido a la creación de un catálogo 
          de componentes bien formados para dar respuesta efectiva a cada una de las necesidades del desarrollo de soluciones web. Sin embargo, 
          se ha prestado menos importancia a la manera en la que dichos componentes pueden recibir una inyección conveniente de las fuentes de 
          atos a la que de manera necesaria deben estar conectados para poder crear solucionesde frontend cohesivas y funcionales. A lo largo 
          de esta charla centramos nuestra atención, precisamente,en la descripción de distintos patrones arquitectónicos de componentes web 
          dirigidos a dar soporte a las necesidades de configuración e inyección de fuentes de datos.`,
      'links'   : [
        'codemotion-2016',
        'commit-2018',
        'codemotion-2017'
      ]
    }, {
      key     : 'codemotion-2016',
      title   : 'Patrones de Composición en la Web',
      caption : 'Arquitecturas de Componentes Web',
      image   : '/images/activity/events/event.16.02.png',
      video   : 'm7MzzjapoUo',
      path    : '/eventos/codemotion-2016',
      place   : 'Codemotion',
      author  : 'Javier Vélez',
      date    : '2016',
      time    : '50:56',
      draft   : false,
      hidden  : false,
      lead    : `
          La llegada de las tecnologías de componentes web ha cambiado radicalmente la manera en la que se diseñan y construyen soluciones de 
          frontend. Ya sea porque se apliquen estrategias de modularidad basada en el uso masivo de componentes o por que se elaboren nutridos 
          catálogos de componentes que responden a las necesidades recurrentes de interacción visual propias de la plataforma web, lo ciertoes 
          que hoy por hoy todo esfuerzo de desarrollo en el lado frontal de las aplicaciones se basa eneste tipo de activos arquitectónicos. 
          Sin embargo, no debemos olvidar, que este tipo de componentesson activos de naturaleza declarativa que se despliegan sobre la geografía 
          de documentos Web. Su naturaleza autónoma y encapsulada ofrece importantes ventajas para el desarrollo. Sin embargo, unasolución
          visual bien formada requiere de grados apropiados de cohesión entre los componentes que forman parte de la interfaz. Precisamente 
          por este motivo es importante identificar aquellos patrones de composición que dentro del plano declarativo puedan ser utilizados 
          para enlazar colectivamente los componentes en uso.`,
      'links'   : [
        'polymer-2016',
        'codemotion-2017',
        'commit-2018'
      ]
    }, {
      key     : 'kconnect-2017',
      title   : 'Arquitecturas Dirigidas por la Experiencia',
      caption : 'Arquitecturas & Experiencia de Usuario',
      image   : '/images/activity/events/event.17.01.png',
      video   : 'pLuacJgjmJk',
      path    : '/eventos/kconnect-2017',
      place   : 'KConnect',
      author  : 'Javier Vélez',
      date    : '2017',
      time    : '12:48',
      draft   : false,
      hidden  : false,
      lead    : `
          Desde que naciera allá por el año 1995, la web se ha reinventado dramáticamente de forma sistemática hasta convertirse en una realidad 
          muy diferente a lo que es hoy por hoy. En efecto, los expertos de la profesión hemos asistido a estos cambios desde los días en los que 
          la web era un mero expositor de contenidos hasta estos actuales en los que la web se ha convertido en una verdadera plataforma de 
          ejecución y soporte a la interacción colaborativa. Frecuentemente, me gusta pensar que esta evolución ha atravesado, como ocurre en 
          todos los periodos de la historia, por diferentes etapas y es que la evolución no solamente ha sido tecnológica sino que también ha 
          venido acompañada de cambios culturalesen cuanto a la manera de consumición de la misma. En concreto yo advierto a diferenciar tres 
          periodos bien diferenciados. En la web nomádica, el usuario realizaba actividades de consumición voraz de la información allí expuesta 
          hasta esquilmar cada terreno digitales y pasar al siguiente. Durante la web feudal, el usuario se convirtió en un auténtico vasallo 
          fiel tributario a las arcas de enormes espaciosde plataformas a cambio de un triste like. Hoy por hoy, el usuario es un ciudadano 
          digital que vive unaweb democrática en la que son las organizaciones las que pelean por captar los breves espacios de atenciónde sus 
          clientes. Este recorrido histórico tiene un relato de principios de soporte interesantes.`,
      'links'   : [
        'codemotion-2017',
        'codemotion-2019',
        'cto-2019'
      ]
    }, {
      key     : 'codemotion-2017',
      title   : 'Sistemas de Diseño & Arquitecturas UX',
      caption : 'Arquitecturas & Experiencia de Usuario',
      image   : '/images/activity/events/event.17.02.png',
      video   : 'Q-YCFpe7W44',
      path    : '/eventos/codemotion-2017',
      place   : 'Codemotion',
      author  : 'Javier Vélez',
      date    : '2017',
      time    : '40:09',
      draft   : false,
      hidden  : false,
      lead    : `
          Las tecnologías de componentes web son una realidad que ha llegado a nuestros días. Hoy por hoy todoslos frameworks de mercado y todos los 
          profesionales que desarrollan productos digitales sobre la web hacen uso de este tipo de soluciones para encapsular modelos de interacción 
          sobre la base de contenidosvisuales. Sin embargo, el cambio paradigmático no está tanto en aspectos tecnológicos como pareciera pensar 
          inicialmente, sino más bien en consideraciones de carácter metodológico. Y es que lo verdaderamente importante es crear catálogos de 
          componentes bien formados que den respuesta precisa y adecuada a cadauna de las necesidades de interacción que surgen en el marco de las 
          soluciones web. Construir catálogosignifica  dejar de pensar en producto para pensar en dominio, dejar de operar desde la descomposición 
          modularidad para construir en base a la reutilización compositiva, y dejar de pensar en desarrollo de componentes locales a proyecto para 
          crear un verdadero lenguaje de composición declarativo que deforma a toda una superficie visual funcional y sin fisuras experienciales. 
          Conocer los principios fundacionales del paradigma de componentes, la estructura anatómica y contractual de los mismos y lasetapas del 
          proceso metodológico de construcción de catálogos es punto clave para la obtención de éxito en este tipo de iniciativas.`,
      'links'   : [
        'bbva-2015',
        'polymer-2016',
        'codemotion-2016'
      ]
    }, {
      key     : 'codemotion-2018',
      title   : 'Modelos de API para el Diseño de Servicios',
      caption : 'Servicios & Arquitecturas Cloud',
      image   : '/images/activity/events/event.18.01.png',
      video   : 'BnHatgtkJFA',
      path    : '/eventos/codemotion-2018',
      place   : 'Codemotion',
      author  : 'Javier Vélez',
      date    : '2018',
      time    : '41:05',
      draft   : false,
      hidden  : false,
      lead    : `
          Dentro del mundo de la computación distribuida, la orientación a servicios ha sido el paradigma arquitectónico de mayor aplicación recurrente. 
          En efecto, hoy por hoy cualquier solución desarrolla y despliega su parte back de acuerdo a una colección de servicios que expone el modelo 
          de información requerido. En ese sentido, se ha alcanzado un alto grado de madurez a través de un recorrido evolutivo que abarca los últimos 
          20 años, llegando a un consenso aceptado de usar REST como la aproximación arquitectónica más conveniente y habitual. Sin embargo a la hora 
          de diseñar servicios aplicamos recurrentemente los mismos esquemas sin pararnos a pensar la adecuación con respecto al espacio del problema. 
          Lo cierto es que dentro de las aproximaciones orientadas a recursos existen distintos modeloso estilos arquitectónicos que pueden utilizarse 
          a la hora de diseñar el protocolo de interacción con losservicios. En esta charla haremos un recorrido de los fundamentales modelos de diseño 
          de APIs de servicios que pueden desarrollarse para cada tipo de problema. Además ofreceremos técnicas y patrones de diseño aplicables para 
          cada uno de estos modelos.`,
      'links'   : [
        'codemotion-2019',
        'codemotion-2023',
        'cto-2019'
      ]
    }, {
      key     : 'commit-2018',
      title   : 'Arquitecturas Web Adaptativas',
      caption : 'Arquitecturas de Componentes Web',
      image   : '/images/activity/events/event.18.02.png',
      video   : '3trVtXOtYLs',
      path    : '/eventos/commit-2018',
      place   : 'Commit',
      author  : 'Javier Vélez',
      date    : '2018',
      time    : '47:49',
      draft   : false,
      hidden  : false,
      lead    : `
          Frecuentemente, cuando desarrollamos productos digitales basados en componentes web, de manera consciente o inconsciente, aplicamos los 
          principios del paradigma de orientación objetos, aquellos referidos habitualmente a través de sus siglas en ingles SOLID. Este hecho conduce 
          a solucionesbien formadas, sólidas y robustas. Sin embargo, con frecuencia este tipo de problemas requiere de aproximaciones divergentes que
          aplican técnicas y modelos arquitectónicos de metaprogramación más propios del paradigma clásico de la orientación a componentes. Se trata, 
          en este sentido, de idear soluciones con una capacidad de adaptación plástica y dinámica al contexto arquitectónico de uso particular que 
          sean capaces de elevar las cotas de reutilización potencial de los activos construidos.De acuerdo a estas ideas, el foco no está tanto en 
          la construcción de los componentes idóneos para resolver problemas particulares sino de ser capaces de crear estrategias de transformación 
          adaptativa que provoquen cambios puntuales irreversibles sobre la estructura y comportamiento de los componentes y de encapsular esas 
          estrategias en activos arquitectónicos de primer nivel para contribuir de maneraformal y sistemática sobre el cuerpo de cualquier componente.`,
      'links'   : [
        'techfest-2015',
        'codemotion-2018',
        'codemotion-2019'
      ]
    }, {
      key     : 'cto-2019',
      title   : 'Transformación Digital de la Experiencia',
      caption : 'Arquitecturas & Experiencia de Usuario',
      image   : '/images/activity/events/event.19.01.png',
      video   : 'spBDg464IPg',
      path    : '/eventos/cto-summit-2019',
      place   : 'CTO Summit',
      author  : 'Javier Vélez',
      date    : '2019',
      time    : '33:11',
      draft   : false,
      hidden  : false,
      lead    : `
          En los últimos 20 años la web se ha reinventado recurrentemente a si misma pasando de ser un mero expositor de contenidos estáticos a ser una 
          verdadera plataforma de ejecución que da soporte a toda la interacción colaborativa entre los usuarios. Y es que ciertamente, el cambio no ha 
          sido meramente tecnológico, que también, sino que se advierte una transformación igualmente relevantede carácter cultural referida a la forma 
          en la que los usuarios perciben y consumen este medio digital. En particular, en todo este tiempo los usuarios han pasado de tener un rol 
          eminentemente pasivo como meros consumidores observantes a mostrar una verdadera participación activa como contribuidoresde contenido. Me gusta 
          pensar que toda esta evolución se ha producido a lo largo de tres grandestransformaciones que dan lugar a sendas webs bien diferenciadas: la 
          web nomádica, la web feudal y la web consumista, aquella que los usuarios vivimos hoy en dia. Y es que lo cierto es que cada etapade este 
          recorrido histórico tiene sus condiciones y sus principios fundacionales. Ser conocedores deestos aspectos es especialmente relevante para los 
          técnicos y profesionales que creamos solucionessobre las arquitecturas de canales digitales que proporciona la web y, si queremos ser buenos 
          asesoresde nuestros clientes, tendremos que conocer bien este relato y los principios asociados. Porque losusuarios siempre estarán donde 
          quieran estar y no donde les pidamos que estén.`,
      'links'   : [
        'techfest-2015',
        'codemotion-2018',
        'codemotion-2019'
      ]
    }, {
      key     : 'codemotion-2019',
      title   : 'Arquitecturas Dirigidas por la Experiencia',
      caption : 'Arquitecturas & Experiencia de Usuario',
      image   : '/images/activity/events/event.19.02.png',
      video   : 'G1_gWqolA6g',
      path    : '/eventos/codemotion-2019',
      place   : 'Codemotion',
      author  : 'Javier Vélez',
      date    : '2019',
      time    : '44:03',
      draft   : false,
      hidden  : false,
      lead    : `
          El desarrollo de soluciones digitales se ha enfocado, de manera convencional, como un proceso que nacedel diseño formal y sistemático de 
          modelos de información que se desarrollan y despliegan en el lado del servidor. Solo entonces son consumidos por clientes específicos que 
          elaboran solucionesvisuales a medida para los modelos de información así diseñados. Esta aproximación implica grandes ventajas con respecto 
          a los desarrolladores de back que gozan de libertad absoluta en cuanto a la toma de decisiones refería a cómo diseñar los modelos de 
          información subyacentes y cómo exponerlos en base a un espacio de recursos de acuerdo a los principios de las arquitecturas REST. Sin 
          embargo, esta aproximación es penalizante en relación a los esfuerzos ímprobos que tienen que hacer los equiposde front para adaptarse de 
          manera recurrente y sistemática a la demanda cambiante de la parte del back.Se impone, en este sentido, una inversión de control relacionada 
          con la forma en la que deben ser enfocados los esfuerzos de desarrollo. Dado que los modelos de interacción en la parte del front son 
          recurrentes y limitados, tiene sentido permitir que sean los desarrolladores de esta parte los que dirijan los procesos constructivos 
          demandando a los desarrolladores de back que expongan un modelo de interrogación y respuesta adaptado a las necesidades visuales y 
          interactivas que demanda la interfaz.`,
      'links'   : [
        'kconnect-2017',
        'cto-2019',
        'codemotion-2017'
      ]
    }, {
      key     : 'commit-2023',
      title   : 'Modelos Propios de Componentes Web',
      caption : 'Servicios & Arquitecturas Cloud',
      image   : '/images/activity/events/event.23.01.png',
      video   : 'qxAuVr9PZek',
      path    : '/eventos/commit-2023',
      place   : 'Commit',
      author  : 'Javier Vélez',
      date    : '2023',
      time    : '41:05',
      draft   : false,
      hidden  : false,
      lead    : `
          Que hoy por hoy las arquitecturas de canales se han orientado fuertemente a componentes es una realidadirrefutable. Importantes compañías del 
          sector tecnológico han desarrollado frameworks que proporcionanmodelos de componentes al que se suben los desarrolladores para realizar 
          soluciones competitivas. Este modelo es una aproximación de éxito si se busca entrega temprana, pero puede conducir a situaciones dealto 
          riesgo en el plano arquitectónico. Especialmente si trabajamos en compañías de alta volumetría nodeberíamos permitir que toda nuestra 
          arquitectura de canal Web descansará sobre soluciones tecnológicas de terceros como Google o Facebook. La construcción de un modelo de 
          negocio propio a la corporación es una garantía en todos los sentidos. A lo largo de esta charla discutiremos la conveniencia de crear 
          estrategias de definición de modelos de componentes propios, visitaremos diferentes patrones y modelos arquitectónicos de interés en este 
          sentido y presentaremos Origami Frog, un framework específicamente diseñado para la definición de modelos corporativos de componentes Web. 
          Reflexiva, disruptiva e innovadora que revisita muchos espacios de interés esta charla invita al pensamiento crítico, pero a la vez pone 
          foco en descubrir un espacio de arquitecturas generativas poco conocidas en general. Sin lugar a dudas, esta es una sesión que no te 
          deberías perder.`,
      'links'   : [
        'polymer-2016',
        'codemotion-2016',
        'commit-2018'
      ]
    }, {
      key     : 'codemotion-2023',
      title   : 'Arquitecturas Dirigidas por el Diálogo',
      caption : 'Servicios & Arquitecturas Cloud',
      image   : '/images/activity/events/event.23.02.png',
      video   : 'IgPKF-m7g4w',
      path    : '/eventos/codemotion-2023',
      place   : 'Codemotion',
      author  : 'Javier Vélez',
      date    : '2023',
      time    : '42:15',
      draft   : false,
      hidden  : false,
      lead    : `
          De manera convencional, la manera en la que se ha enfrentado el desarrollo de soluciones digitales ha sido mediante la exposición de una 
          colección de capacidades y servicios enumerados de manera explícita y extensiva para ser consumidos por el usuario final. Desde el lado del 
          front, el éxito de cada productoresidía en la manera en la que dichos servicios se ponían a disposición del usuario de forma cómoda y sencilla 
          de acceder. En el lado del back, este mismo enfoque de enumeración extensiva se convirtió en una realidad al crear arquitecturas de servicios 
          que exponían en un espacio de recursos cada una de las entidades características del negocio. Pero lo cierto, es que los modelos de interacción 
          que demandael gran público están cambiando. En pocos años hemos pasado de la metáfora experiencial exploratoria a modelos dialógicos caracterizados 
          por un enfoque fuertemente abierto e interactivo. Este hecho, nos debehacer reflexionar acerca de cómo debemos reconducir el enfoque de la 
          construcción de los sistemas back para orientarlos hacia una orientación basada en el diálogo. Si los usuarios interactúan con el producto 
          digital a través del diálogo lo lógico es que las arquitecturas de recursos subyacentes también admitan procesos de consumición y consulta 
          basadas en el mismo principio donde el objetivo ya no sea tanto exponer modelos de información estática sino, más bien, espacios dinámicamente 
          cambiantes que puedan ser explorables a través de una interacción recurrente y sistemática.`,
      'links'   : [
        'codemotion-2019',
        'codemotion-2018',
        'cto-2019'
      ]
    }, {
      key     : 'scodigo-2024',
      title   : 'El Horizonte de la Inteligencia Artificial',
      caption : 'Inteligencia, Futuro & Experiencia',
      image   : '/images/activity/events/event.24.01.png',
      video   : '049q-ogFJu8',
      path    : '/eventos/scodigo-2024',
      place   : 'Sirviendo Código',
      author  : 'Javier Vélez',
      date    : '2024',
      time    : '56:47',
      draft   : false,
      hidden  : false,
      lead    : `
          Que la inteligencia artificial generativa (GenAI) ha llegado para quedarse es algo que hoy ya nadie podrá poner en duda. Hay gente que aún sigue 
          argumentando que a eso que hacen las máquinas no se le puede llamar inteligencia, pero tal vez esas voces hablan más desde el temor a un futuro 
          desconocido que desde una reflexión sosegada y objetiva. Lo que desde luego sí parece evidente es que este nuevo actor que ha entrado en el sistema 
          supondrá un claro revulsivo en los próximos años en el desarrollo de nuestra profesión. A lo largo de esta charla queremos precisamente abundar 
          en esta afirmación huyendo de optimismos baratos y catastrofismos infundados. Nos interesa dar una respuesta no sólo acerca del impacto que esta 
          tecnología tendrá en el futuro próximo en los procesos de diseño, desarrollo, construcción y mantenimiento del código sino también de cómo será 
          su esencia arquitectónica, funcional y experiencial. Si trabajas en esta profesión esto te interesa.`,
      'links'   : [
        'codemotion-2023',
        'codemotion-2018',
        'codemotion-2019'
      ]
    }
  ]
  
})