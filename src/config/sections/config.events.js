import Config from '../../helpers/helper.config.js'


Config.define ({

  'site.events.header' : {
    title   : 'Charlas & Difusión',
    caption : 'Eventos & Entrevistas',
    lead    : `
      En esta sección se recogen las intervenciones más relevantes dentro de la comunidad. Desde 
      charlas y talleres impartidas en diferentes eventos hasta entrevistas generalmente vinvuladas 
      a estos mismos eventos.
    `
  },

  'site.events.talks' : {
    title   : 'Comunicación & Evangelización',
    caption : 'Principales charlas en comunidad',
    icon    : '@site.icons.light.talk',
    items   : [{
      key     : 'techfest.2015',
      title   : 'Técnicas & Modelos de Metaprogramación',
      caption : 'Arquitecturas de Software Adaptativas',
      image   : '/images/events/talks/talk.15.01.png',
      video   : '/videos/events/talks/talk.15.01.mp4',
      path    : '/eventos/charlas/techfest-2015',
      place   : 'TechFest',
      author  : 'Javier Vélez',
      date    : '2015',
      time    : '55:30',
      draft   : false,
      hidden  : false,
      lead    : `
        Los procesos de construcción de soluciones de software pasan habitualmente por la creación de 
        arquitecturas sólidas. Este tipo de diseños son aquellas que cumplen con los principios 
        fundacionales del paradigma de la orientación a objetos, de sus siglas en inglés SOLID. Sin 
        embargo, en ocasiones resulta conveniente aplicar otro tipo de estrategia para la creación de 
        software. Esto es especialmente cierto en aquellos casos en los que se pretenda dar con soluciones 
        que resulten flexibles y plásticamente adaptables a distintos contextos de uso. El uso de 
        determinadas técnicas y modelos de diseño arquitectónico tal es como el uso de traits, mixins, 
        roles, aspectos o subjects, propios del paradigma de la orientación a componentes, es de aplicación
        en estos casos. Muchos lenguajes, de hecho, invitan a llevar a cabo un proceso de ideación de 
        soluciones basado en estas técnicas dando lugar a soluciones más flexibles y dinamicamente 
        cambiantes a tenor de las condiciones ambientales. A lo largo de esta charla se hace un recorrido
        exhaustivo de este paradigma arquitectónico revisando los principios, técnicas y modelos sobre
        la base del stack tecnológico de la plataforma web.
        `,
      links   : [
        'commit.2018',
        'polymer.2016',
        'codemotion.2016'
      ]
    }, {
      key     : 'bbva.2015',
      title   : 'Orientando a Componentes la Web',
      caption : 'Arquitecturas de Componentes Web',
      image   : '/images/events/talks/talk.15.02.png',
      video   : '/videos/events/talks/talk.15.02.mp4',
      path    : '/eventos/charlas/bbva-2015',
      place   : 'BBVA Innovation',
      author  : 'Javier Vélez',
      date    : '2015',
      time    : '51:00',
      draft   : false,
      hidden  : false,
      lead    : `
        La web está cambiando y la forma de desarrollar soluciones sobre ella también. En los últimos años 
        hemos observado cómo la llegada de los estándares en materia de componentes web ha supuesto un claro
        revulsivo en cuanto a la aproximación tecnológica para crear soluciones de frontend. Los componentes 
        se han convertido así en el activo arquitectónico fundamental para encapsular modelos de interacción 
        en torno a estructuras visuales. El éxito ha sido tal que ya sea como marco conceptual o como espacio
        de operación tecnológica todos los Frameworks de Front actuales trabajan con el uso de componentes.
        Sin embargo, esta revolución, va mucho más allá de meros aspectos de transformación tecnológica. En 
        cambio se trata de un cambio de paradigma a nivel metodológico y procedimental ya que las 
        organizaciones dejarán de construir soluciones a doc específicas para los requerimientos de un 
        determinado proyecto de cliente para comenzar a construir verdaderos catálogos de componentes con 
        activos reutilizables que respondan a las necesidades recurrentes de un determinado dominio de 
        aplicación El éxito en este sentido radicará en saber encontrar el equilibrio adecuado para crear 
        diseños lo suficientemente abstractos y bien diseñados Como para crear soluciones ágiles y productivas
        en tiempo récord.
        `,
      links   : [
        'polymer.2016',
        'codemotion.2016',
        'commit.2018'
      ]
    }, {
      key     : 'polymer.2016',
      title   : 'Patrones de Acceso a Datos en la Web',
      caption : 'Arquitecturas de Componentes Web',
      image   : '/images/events/talks/talk.16.01.png',
      video   : '/videos/events/talks/talk.16.01.mp4',
      path    : '/eventos/charlas/polymer-2016',
      place   : 'Polymer Day',
      author  : 'Javier Vélez',
      date    : '2016',
      time    : '49:21',
      draft   : false,
      hidden  : false,
      lead    : `
        La orientación a componentes web se ha convertido en un revulsivo en los últimos años para construir 
        soluciones digitales de última generación. El hecho de hacer uso de componentes como piezas de 
        interacción visual encapsuladas y reutilizables ofrece grandes ventajas a los procesos de construcción
        compositiva y arroja un escenario de mayor simplicidad a la hora de idear soluciones de escalabilidad
        creciente en complejidad. Dentro de la comunidad se ha hablado mucho acerca de cómo se pueden construir
        este tipo de activos tecnológicos y de cómo puede llevarse a cabo un proceso de construcción 
        sistemática dirigido a la creación de un catálogo de componentes bien formados para dar respuesta 
        efectiva a cada una de las necesidades del desarrollo de soluciones web. Sin embargo, se ha prestado 
        menos importancia a la manera en la que dichos componentes pueden recibir una inyección conveniente 
        de las fuentes de datos a la que de manera necesaria deben estar conectados para poder crear soluciones
        de frontend cohesivas y funcionales. A lo largo de esta charla centramos nuestra atención, precisamente,
        en la descripción de distintos patrones arquitectónicos de componentes web dirigidos a dar soporte a 
        las necesidades de configuración e inyección de fuentes de datos.
      `,
      links   : [
        'codemotion.2016',
        'commit.2018',
        'codemotion.2017'
      ]
    }, {
      key     : 'codemotion.2016',
      title   : 'Patrones de Composición en la Web',
      caption : 'Arquitecturas de Componentes Web',
      image   : '/images/events/talks/talk.16.02.png',
      video   : '/videos/events/talks/talk.16.02.mp4',
      path    : '/eventos/charlas/codemotion-2016',
      place   : 'Codemotion',
      author  : 'Javier Vélez',
      date    : '2016',
      time    : '50:56',
      draft   : false,
      hidden  : false,
      lead    : `
        La llegada de las tecnologías de componentes web ha cambiado radicalmente la manera en la que se 
        diseñan y construyen soluciones de frontend. Ya sea porque se apliquen estrategias de modularidad 
        basada en el uso masivo de componentes o por que se elaboren nutridos catálogos de componentes que 
        responden a las necesidades recurrentes de interacción visual propias de la plataforma web, lo cierto
        es que hoy por hoy todo esfuerzo de desarrollo en el lado frontal de las aplicaciones se basa en
        este tipo de activos arquitectónicos. Sin embargo, no debemos olvidar, que este tipo de componentes
        son activos de naturaleza declarativa que se despliegan sobre la geografía de documentos Web. Su 
        naturaleza autónoma y encapsulada ofrece importantes ventajas para el desarrollo. Sin embargo, una
        solución visual bien formada requiere de grados apropiados de cohesión entre los componentes que 
        forman parte de la interfaz. Precisamente por este motivo es importante identificar aquellos patrones 
        de composición que dentro del plano declarativo puedan ser utilizados para enlazar colectivamente los 
        componentes en uso.  
        `,
      links   : [
        'polymer.2016',
        'codemotion.2017',
        'commit.2018',
      ]
    }, {
      key     : 'kconnect.2017',
      title   : 'Arquitecturas Dirigidas por la Experiencia',
      caption : 'Arquitecturas & Experiencia de Usuario',
      image   : '/images/events/talks/talk.17.01.png',
      video   : '/videos/events/talks/talk.17.01.mp4',
      path    : '/eventos/charlas/kconnect-2017',
      place   : 'KConnect',
      author  : 'Javier Vélez',
      date    : '2017',
      time    : '12:48',
      draft   : false,
      hidden  : false,
      lead    : `
        Desde que naciera allá por el año 1995, la web se ha reinventado dramáticamente de forma sistemática 
        hasta convertirse en una realidad muy diferente a lo que es hoy por hoy. En efecto, los expertos de la 
        profesión hemos asistido a estos cambios desde los días en los que la web era un mero expositor 
        de contenidos hasta estos actuales en los que la web se ha convertido en una verdadera plataforma de 
        ejecución y soporte a la interacción colaborativa. Frecuentemente, me gusta pensar que esta evolución 
        ha atravesado, como ocurre en todos los periodos de la historia, por diferentes etapas y es que la 
        evolución no solamente ha sido tecnológica sino que también ha venido acompañada de cambios culturales
        en cuanto a la manera de consumición de la misma. En concreto yo advierto a diferenciar tres periodos 
        bien diferenciados. En la web nomádica, el usuario realizaba actividades de consumición voraz de la 
        información allí expuesta hasta esquilmar cada terreno digitales y pasar al siguiente. Durante la web 
        feudal, el usuario se convirtió en un auténtico vasallo fiel tributario a las arcas de enormes espacios
        de plataformas a cambio de un triste like. Hoy poir hoy, el usuario es un ciudadano digital que vive una
        web democrática en la que son las organizaciones las que pelean por captar los breves espacios de atención
        de sus clientes. Este recorrido historico tiene un relato de principios de soporte interesantes. 
      `,
      links   : [
        'codemotion.2017',
        'codemotion.2019',
        'cto.2019',
      ]
    }, {
      key     : 'codemotion.2017',
      title   : 'Sistemas de Diseño & Arquitecturas UX',
      caption : 'Arquitecturas & Experiencia de Usuario',
      image   : '/images/events/talks/talk.17.02.png',
      video   : '/videos/events/talks/talk.17.02.mp4',
      path    : '/eventos/charlas/codemotion-2017',
      place   : 'Codemotion',
      author  : 'Javier Vélez',
      date    : '2017',
      time    : '40:09',
      draft   : false,
      hidden  : false,
      lead    : `
        Las tecnologías de componentes web son una realidad que ha llegado a nuestros días. Hoy por hoy todos
        los frameworks de mercado y todos los profesionales que desarrollan productos digitales sobre la web 
        hacen uso de este tipo de soluciones para encapsular modelos de interacción sobre la base de contenidos
        visuales. Sin embargo, el cambio paradigmático no está tanto en aspectos tecnológicos como parecíera 
        pensar inicialmente, sino más bien en consideraciones de carácter metodológico. Y es que lo verdaderamente 
        importante es crear catálogos de componentes bien formados que den respuesta precisa y adecuada a cada
        una de las necesidades de interacción que surgen en el marco de las soluciones web. Construir catálogo
        significa  dejar de pensar en producto para pensar en dominio, dejar de operar desde la descomposición
        modularidad para construir en base a la reutilización compositiva, y dejar de pensar en desarrollo de 
        componentes locales a proyecto para crear un verdadero lenguaje de composición declarativo que de
        forma a toda una superficie visual funcional y sin fisuras experienciales. Conocer los principios 
        fundacionales del paradigma de componentes, la estructura anatómica y contractual de los mismos y las
        etapas del proceso metodológico de construcción de catálogos es punto clave para la obtención de éxito 
        en este tipo de iniciativas. 
      `,
      links   : [
        'bbva.2015',
        'polymer.2016',
        'codemotion.2016'
      ]
    }, {
      key     : 'codemotion.2018',
      title   : 'Modelos de API para el Diseño de Servicios',
      caption : 'Servicios & Arquitecturas Cloud',
      image   : '/images/events/talks/talk.18.01.png',
      video   : '/videos/events/talks/talk.18.01.mp4',
      path    : '/eventos/charlas/codemotion-2018',
      place   : 'Codemotion',
      author  : 'Javier Vélez',
      date    : '2018',
      time    : '41:05',
      draft   : false,
      hidden  : false,
      lead    : `
      Dentro del mundo de la computación distribuida, la orientación a servicios ha sido el paradigma 
      arquitectónico de mayor aplicación recurrente. En efecto, hoy por hoy cualquier solución desarrolla y 
      despliega su parte back de acuerdo a una colección de servicios que expone el modelo de información 
      requerido. En ese sentido, se ha alcanzado un alto grado de madurez a través de un recorrido evolutivo 
      que abarca los últimos 20 años, llegando a un consenso aceptado de usar REST como la aproximación 
      arquitectónica más conveniente y habitual. Sin embargo a la hora de diseñar servicios aplicamos 
      recurrentemente los mismos esquemas sin pararnos a pensar la adecuación con respecto al espacio del 
      problema. Lo cierto es que dentro de las aproximaciones orientadas a recursos existen distintos modelos
      o estilos arquitectónicos que pueden utilizarse a la hora de diseñar el protocolo de interacción con los
      servicios. En esta charla haremos un recorrido de los fundamentales modelos de diseño de APIs de 
      servicios que pueden desarrollarse para cada tipo de problema. Además ofreceremos técnicas y patrones 
      de diseño aplicables para cada uno de estos modelos.
      `,
      links   : [
        'codemotion.2019',
        'codemotion.2023',
        'cto.2019',
      ]
    }, {
      key     : 'commit.2018',
      title   : 'Arquitecturas Web Adaptativas',
      caption : 'Arquitecturas de Componentes Web',
      image   : '/images/events/talks/talk.18.02.png',
      video   : '/videos/events/talks/talk.18.02.mp4',
      path    : '/eventos/charlas/commit-2018',
      place   : 'Commit',
      author  : 'Javier Vélez',
      date    : '2018',
      time    : '47:49',
      draft   : false,
      hidden  : false,
      lead    : `
        Frecuentemente, cuando desarrollamos productos digitales basados en componentes web, de manera 
        consciente o inconsciente, aplicamos los principios del paradigma de orientación objetos, aquellos 
        referidos habitualmente a través de sus siglas en ingles SOLID. Este hecho conduce a soluciones
        bien formadas, sólidas y robustas. Sin embargo, con frecuencia este tipo de problemas requiere de 
        aproximaciones divergentes que aplican técnicas y modelos arquitectónicos de metaprogramación más 
        propios del paradigma clásico de la orientación a componentes. Se trata, en este sentido, de idear 
        soluciones con una capacidad de adaptación plástica y dinámica al contexto arquitectónico de uso 
        particular que sean capaces de elevar las cotas de reutilización potencial de los activos construidos.
        De acuerdo a estas ideas, el foco no está tanto en la construcción de los componentes idóneos para 
        resolver problemas particulares sino de ser capaces de crear estrategias de transformación adaptativa 
        que provoquen cambios puntuales irreversibles sobre la estructura y comportamiento de los componentes 
        y de encapsular esas estrategias en activos arquitectonicos de primer nivel para contribuir de manera
        formal y sistematica sobre el cuerpo de cualquier componente. 
      `,
      links   : [
        'techfest.2015',
        'codemotion.2018',
        'codemotion.2019'
      ]
    }, {
      key     : 'cto.2019',
      title   : 'Transformación Digital de la Experiencia',
      caption : 'Arquitecturas & Experiencia de Usuario',
      image   : '/images/events/talks/talk.19.01.png',
      video   : '/videos/events/talks/talk.19.01.mp4',
      path    : '/eventos/charlas/cto-summit-2019',
      place   : 'CTO Summit',
      author  : 'Javier Vélez',
      date    : '2019',
      time    : '33:11',
      draft   : false,
      hidden  : false,
      lead    : `
        En los últimos 20 años la web se ha reinventado recurrentemente a si misma pasando de ser un mero 
        expositor de contenidos estáticos a ser una verdadera plataforma de ejecución que da soporte a 
        toda la interacción colaborativa entre los usuarios. Y es que ciertamente, el cambio no ha sido
        meramente tecnológico, que también, sino que se advierte una transformación igualmente relevante
        de carácter cultural referida a la forma en la que los usuarios perciben y consumen este medio 
        digital. En particular, en todo este tiempo los usuarios han pasado de tener un rol meramente pasivo
        como meros consumidores observantes a mostrar una verdadera participación activa como contribuidores
        de contenido. Me gusta pensar que toda esta evolución se ha producido a lo largo de tres grandes
        transformaciones que dan lugar a sendas webs bien difernciadas: la web nomádica, la web feudal y la 
        web consumista, aquella que los usuarios vibimos hoy en dia. Y es que lo cierto es que cada etapa
        de este recorrido historico tiene sus condiciones y sus principios fundacionales. Ser conocedores de
        estos aspectos es especialmente relevante para los tecnicos y profesionales que creamos soluciones
        sobre las arquitecturas de canales digitales que proporciona la web y, si queremos ser buenos asesores
        de nuestros clientes, tendremos que conocer bien este relato y los principios asociados. Porque los
        usuarios siempre estarán donde quieran estar y no donde les pidamos que estén.
      `,
      links   : [
        'techfest.2015',
        'codemotion.2018',
        'codemotion.2019'
      ]
    }, {
      key     : 'codemotion.2019',
      title   : 'Arquitecturas Dirigidas por la Experiencia',
      caption : 'Arquitecturas & Experiencia de Usuario',
      image   : '/images/events/talks/talk.19.02.png',
      video   : '/videos/events/talks/talk.19.02.mp4',
      path    : '/eventos/charlas/codemotion-2019',
      place   : 'Codemotion',
      author  : 'Javier Vélez',
      date    : '2019',
      time    : '44:03',
      draft   : false,
      hidden  : false,
      lead    : `
        El desarrollo de soluciones digitales se ha enfocado, de manera convencional, como un proceso que nace
        del diseño formal y sistemático de modelos de información que se desarrollan y despliegan en el lado 
        del servidor. Solo entonces son consumidos por clientes específicos que elaboran soluciones
        visuales a medida para los modelos de información así diseñados. Esta aproximación implica grandes 
        ventajas con respecto a los desarrolladores de back que gozan de libertad absoluta en cuanto a la 
        toma de decisiones referia a cómo diseñar los modelos de información subyacentes y cómo exponderlos en 
        base a un espacio de recursos de acuerdo a los principios de las arquitecturas REST. Sin embargo, 
        esta aproximación es penalízante en relación a los esfuerzos ímprobos que tienen que hacer los equipos
        de front para adaptarse de manera recurrente y sistemática a la demanda cambiante de la parte del back.
        Se impone, en este sentido, una inversión de control relacionada con la forma en la que deben ser 
        enfocados los esfuerzos de desarrollo. Dado que los modelos de interacción en la parte del front son 
        recurrentes y limitados, tiene sentido permitir que sean los desarrolladores de esta parte los que 
        dirijan los procesos constructivos demandando a los desarrolladores de back que expongan un 
        modelo de interrogación y respuesta adaptado a las necesidades visuales y interactivas que demanda la 
        interfaz.
      `,
      links   : [
        'kconnect.2017',
        'cto.2019',
        'codemotion.2017',
      ]
    }, {
      key     : 'commit.2023',
      title   : 'Modelos Propios de Componentes Web',
      caption : 'Servicios & Arquitecturas Cloud',
      image   : '/images/events/talks/talk.23.01.png',
      video   : '/videos/events/talks/talk.23.01.mp4',
      path    : '/eventos/charlas/commit-2023',
      place   : 'Codemotion',
      author  : 'Javier Vélez',
      date    : '2018',
      time    : '41:05',
      draft   : false,
      hidden  : false,
      lead    : `
      Que hoy por hoy las arquitecturas de canales se han orientado fuertemente a componentes es una realidad
      irrefutable. Importantes compañías del sector tecnológico han desarrollado frameworks que proporcionan
      modelos de componentes al que se suben los desarrolladores para realizar soluciones competitivas. Este 
      modelo es una aproximación de éxito si se busca entrega temprana, pero puede conducir a situaciones de
      alto riesgo en el plano arquitectónico. Especialmente si trabajamos en compañías de alta volumetría no
      deberíamos permitir que toda nuestra arquitectura de canal Web descansará sobre soluciones tecnológicas 
      de terceros como Google o Facebook. La construcción de un modelo de negocio propio a la corporación es 
      una garantía en todos los sentidos. A lo largo de esta charla discutiremos la conveniencia de crear 
      estrategias de definición de modelos de componentes propios, visitaremos diferentes patrones y modelos 
      arquitectónicos de interés en este sentido y presentaremos Origami Frog, un framework específicamente 
      diseñado para la definición de modelos corporativos de componentes Web. Reflexiva, disruptiva e innovadora 
      que revisita muchos espacios de interés esta charla invita al pensamiento crítico, pero a la vez pone foco
      en descubrir un espacio de arquitecturas generativas poco conocidas en general. Sin lugar a dudas, esta es 
      una sesión que no te deberías perder.
      `,
      links   : [
        'polymer.2016',
        'codemotion.2016',
        'commit.2018',
      ]
    }, {
      key     : 'codemotion.2023',
      title   : 'Arquitecturas Dirigidas por el Diálogo',
      caption : 'Servicios & Arquitecturas Cloud',
      image   : '/images/events/talks/talk.23.02.png',
      video   : '/videos/events/talks/talk.16.01.mp4',
      path    : '/eventos/charlas/codemotion-2023',
      place   : 'Codemotion',
      author  : 'Javier Vélez',
      date    : '2023',
      time    : '42:15',
      draft   : false,
      hidden  : false,
      lead    : `
        De manera convencional, la manera en la que se ha enfrentado el desarrollo de soluciones digitales ha 
        sido mediante la exposición de una colección de capacidades y servicios enumerados de manera explícita 
        y extensiva para ser consumidos por el usuario final. Desde el lado del front, el éxito de cada producto
        residía en la manera en la que dichos servicios se ponían a disposición del usuario de forma cómoda y
        sencilla de acceder. En el lado del back, este mismo enfoque de enumeración extensiva se convirtió en 
        una realidad al crear arquitecturas de servicios que exponían en un espacio de recursos cada una de 
        las entidades características del negocio. Pero lo cierto, es que los modelos de interacción que demanda
        el gran público están cambiando. En pocos años hemos pasado de la metáfora experiencial exploratoria a 
        modelos dialógicos caracterizados por un enfoque fuertemente abierto e interactivo. Este hecho, nos debe
        hacer reflexionar acerca de cómo debemos reconducir el enfoque de la construcción de los sistemas back 
        para orientarlos hacia una orientación basada en el diálogo. Si los usuarios interactúan con el producto 
        digital a través del diálogo lo lógico es que las arquitecturas de recursos subyacentes también admitan 
        procesos de consumición y consulta basadas en el mismo principio donde el objetivo ya no sea tanto 
        exponer modelos de información estática sino, más bien, espacios dinámicamente cambiantes que puedan 
        ser explorables a través de una interacción recurrente y sistemática.
      `,
      links   : [
        'codemotion.2019',
        'codemotion.2018',
        'cto.2019',
      ]
    }]
  },

  'site.events.interviews' : {
    title   : 'Entrevistas & Intervenciones',
    caption : 'Apariciones puntuales en comunidad',
    icon    : '@site.icons.light.interview',
    items   : [{
      key     : 'techfest.2015',
      title   : 'Técnicas & Modelos de Metaprogramación',
      caption : 'Arquitecturas de Software Adaptativas',
      image   : '/images/events/interviews/interview.15.01.png',
      video   : '/videos/events/interviews/interview.15.01.mp4',
      path    : '/eventos/entrevistas/techfest-2015',
      place   : 'TechFest',
      author  : 'Javier Vélez',
      date    : '2015',
      time    : '2:38',
      draft   : false,
      hidden  : false,
      lead    : `
        Los procesos de construcción de soluciones de software pasan habitualmente por la creación de 
        arquitecturas sólidas. Este tipo de diseños son aquellas que cumplen con los principios 
        fundacionales del paradigma de la orientación a objetos, de sus siglas en inglés SOLID. Sin 
        embargo, en ocasiones resulta conveniente aplicar otro tipo de estrategia para la creación de 
        software. Esto es especialmente cierto en aquellos casos en los que se pretenda dar con soluciones 
        que resulten flexibles y plásticamente adaptables a distintos contextos de uso. El uso de 
        determinadas técnicas y modelos de diseño arquitectónico tal es como el uso de traits, mixins, 
        roles, aspectos o subjects, propios del paradigma de la orientación a componentes, es de aplicación
        en estos casos. Muchos lenguajes, de hecho, invitan a llevar a cabo un proceso de ideación de 
        soluciones basado en estas técnicas dando lugar a soluciones más flexibles y dinamicamente 
        cambiantes a tenor de las condiciones ambientales. A lo largo de esta charla se hace un recorrido
        exhaustivo de este paradigma arquitectónico revisando los principios, técnicas y modelos sobre
        la base del stack tecnológico de la plataforma web.
      `,
      links   : [
        'commit.2018',
        'polymer.2016',
        'codemotion.2016'
      ]
    }, {
      key     : 'codemotion.2016',
      title   : 'Patrones de Composición en la Web',
      caption : 'Arquitecturas de Componentes Web',
      image   : '/images/events/interviews/interview.16.01.png',
      video   : '/videos/events/interviews/interview.16.01.mp4',
      path    : '/eventos/entrevistas/codemotion-2016',
      place   : 'Codemotion',
      author  : 'Javier Vélez',
      date    : '2016',
      time    : '2:22',
      draft   : false,
      hidden  : false,
      lead    : `
        La llegada de las tecnologías de componentes web ha cambiado radicalmente la manera en la que se 
        diseñan y construyen soluciones de frontend. Ya sea porque se apliquen estrategias de modularidad 
        basada en el uso masivo de componentes o por que se elaboren nutridos catálogos de componentes que 
        responden a las necesidades recurrentes de interacción visual propias de la plataforma web, lo cierto
        es que hoy por hoy todo esfuerzo de desarrollo en el lado frontal de las aplicaciones se basa en
        este tipo de activos arquitectónicos. Sin embargo, no debemos olvidar, que este tipo de componentes
        son activos de naturaleza declarativa que se despliegan sobre la geografía de documentos Web. Su 
        naturaleza autónoma y encapsulada ofrece importantes ventajas para el desarrollo. Sin embargo, una
        solución visual bien formada requiere de grados apropiados de cohesión entre los componentes que 
        forman parte de la interfaz. Precisamente por este motivo es importante identificar aquellos patrones 
        de composición que dentro del plano declarativo puedan ser utilizados para enlazar colectivamente los 
        componentes en uso.  
      `,
      links   : [
        'polymer.2016',
        'codemotion.2017',
        'commit.2018',
      ]
    }, {
      key     : 'jsday.2016',
      title   : 'Arquitecturas para la Reutilización',
      caption : 'Arquitecturas de Software Adaptativas',
      image   : '/images/events/interviews/interview.16.02.png',
      video   : '/videos/events/interviews/interview.16.02.mp4',
      path    : '/eventos/entrevistas/jsday-2016',
      place   : 'JSDay',
      author  : 'Javier Vélez',
      date    : '2016',
      time    : '2:22',
      draft   : false,
      hidden  : false,
      lead    : `
        Frecuentemente se argumenta que la reutilización es uno de los valores más importantes de las 
        soluciones de software. En efecto, cuando desarrollamos arquitecturas, uno de nuestros objetivos 
        fundamentales es conseguir que los activos construidos puedan ser reutilizados en diferentes
        contextos arquitetónicos de uso. Entre otras cosas, esto contribuye al ahorro de costes en los 
        procesos de desarrollo y a la homogeneidad transversal de las soluciones. Todo paradigma y en 
        particular la orientación a objetos caracterizada por los principios SOLID ha promovido modelos 
        de construcción orientados a la reutilización. Se argumenta que la construcción de objetos es el 
        camino mediante el cual estos activos pueden ser de aplicación en diferentes contextos arquitectónicos 
        siempre que se diseñen con el nivel adecuado de abstracción y desacoplamiento. Sin embargo, 
        cuando nos adentramos en nuevos paradigmas de programación como aquellos propios de la orientación 
        a componentes encontramos que frequentemente construir menos asiste más en los procesos de reutilizar 
        más. Bajo esta hipótesis parece más interesante de cara la reutilización crear contribuciones parciales
        que puedan extender el comportamiento o estructura de los componentes para que adopten nuevas capacidades de 
        forma dinámica y convertir a estos rasgos de contribución puntual en los activos esenciales de la 
        reutilización.
      `,
      links   : [
        'techfest.2015',
        'commit.2018',
        'iasa.2019.2'
      ]
    }, {
      key     : 'google.2016',
      title   : 'JavaScript vs Java',
      caption : 'Lenguajes & Paradigmas',
      image   : '/images/events/interviews/interview.16.03.png',
      video   : '/videos/events/interviews/interview.16.03.mp4',
      path    : '/eventos/entrevistas/google-2016',
      place   : 'Google Campus',
      author  : 'Javier Vélez',
      date    : '2016',
      time    : '1:13:34',
      draft   : false,
      hidden  : false,
      lead    : `
      Nadie puede negar méritos a Java. Este lenguaje de programación nació y se ha mantenido honrosamente 
      durante la friolera de más de 20 años como el abanderado de las arquitecturas robustas. Sus propios 
      creadores lo mantuvieron sin complejos. El código en Java es más verboso pero más legible y mantenible. 
      Y es verdad, trabajar con Java siempre fue una garantía de éxito en tanto que, a poco que no fueras 
      demasiado torpe, las soluciones de Java funcionaban. Paradójicamente, Java y su asesino nacieron y 
      fueron creciendo a la vez y su historia se encuentra entrelazada como las vidas de Holmes y Moriarti. 
      Internet y la Web llegaron a los hogares del usuario a la vez que Java daba sus primeros pasos. Java 
      fue avanzando con paso marcial, mientras que la Web se transformaba de una mera valla publicitaria hacia
      una verdadera plataforma de ejecución donde nacerían todas las redes sociales que hoy gobiernan nuestras
      vidas. Y así, casi sin darnos cuenta, la carrera de negocios en Internet se fue acelerando. Era importante
      tener un negocio en Internet. Era importante correr más que tu competencia. Y sobretodo, si tenías que 
      morir, era importante que murieras pronto. En este nuevo marco de producto mínimo viable la agilidad en 
      el desarrollo de productos emergentes y corta duración se convirtió en la gran bala de plata y aquí es 
      donde Java termino perdiendo terreno en esta anunciada derrota.
      `,
      links   : [
        'techfest.2015',
        'jsday.2016',
        'techfest.2017',
      ]
    }, {
      key     : 'polymer.2016',
      title   : 'Patrones de Acceso a Datos',
      caption : 'Arquitecturas de Componentes Web',
      image   : '/images/events/interviews/interview.16.04.png',
      video   : '/videos/events/interviews/interview.16.04.mp4',
      path    : '/eventos/entrevistas/polymer-2016',
      place   : 'Polymer Day',
      author  : 'Javier Vélez',
      date    : '2016',
      time    : '2:32',
      draft   : false,
      hidden  : false,
      lead    : `
        La orientación a componentes web se ha convertido en un revulsivo en los últimos años para construir 
        soluciones digitales de última generación. El hecho de hacer uso de componentes como piezas de 
        interacción visual encapsuladas y reutilizables ofrece grandes ventajas a los procesos de construcción
        compositiva y arroja un escenario de mayor simplicidad a la hora de idear soluciones de escalabilidad
        creciente en complejidad. Dentro de la comunidad se ha hablado mucho acerca de cómo se pueden construir
        este tipo de activos tecnológicos y de cómo puede llevarse a cabo un proceso de construcción 
        sistemática dirigido a la creación de un catálogo de componentes bien formados para dar respuesta 
        efectiva a cada una de las necesidades del desarrollo de soluciones web. Sin embargo, se ha prestado 
        menos importancia a la manera en la que dichos componentes pueden recibir una inyección conveniente 
        de las fuentes de datos a la que de manera necesaria deben estar conectados para poder crear soluciones
        de frontend cohesivas y funcionales. A lo largo de esta charla centramos nuestra atención, precisamente,
        en la descripción de distintos patrones arquitectónicos de componentes web dirigidos a dar soporte a 
        las necesidades de configuración e inyección de fuentes de datos.
      `,
      links   : [
        'codemotion.2016',
        'commit.2018',
        'codemotion.2017'
      ]
    }, {
      key     : 'codemotion.2017',
      title   : 'Sistemas de Diseño & Arquitecturas UX',
      caption : 'Arquitecturas & Experiencia de Usuario',
      image   : '/images/events/interviews/interview.17.01.png',
      video   : '/videos/events/interviews/interview.17.01.mp4',
      path    : '/eventos/entrevistas/codemotion-2017',
      place   : 'Codemotion',
      author  : 'Javier Vélez',
      date    : '2017',
      time    : '2:22',
      draft   : false,
      hidden  : false,
      lead    : `
        Las tecnologías de componentes web son una realidad que ha llegado a nuestros días. Hoy por hoy todos
        los frameworks de mercado y todos los profesionales que desarrollan productos digitales sobre la web 
        hacen uso de este tipo de soluciones para encapsular modelos de interacción sobre la base de contenidos
        visuales. Sin embargo, el cambio paradigmático no está tanto en aspectos tecnológicos como parecíera 
        pensar inicialmente, sino más bien en consideraciones de carácter metodológico. Y es que lo verdaderamente 
        importante es crear catálogos de componentes bien formados que den respuesta precisa y adecuada a cada
        una de las necesidades de interacción que surgen en el marco de las soluciones web. Construir catálogo
        significa  dejar de pensar en producto para pensar en dominio, dejar de operar desde la descomposición
        modularidad para construir en base a la reutilización compositiva, y dejar de pensar en desarrollo de 
        componentes locales a proyecto para crear un verdadero lenguaje de composición declarativo que de
        forma a toda una superficie visual funcional y sin fisuras experienciales. Conocer los principios 
        fundacionales del paradigma de componentes, la estructura anatómica y contractual de los mismos y las
        etapas del proceso metodológico de construcción de catálogos es punto clave para la obtención de éxito 
        en este tipo de iniciativas. 
      `,
      links   : [
        'codemotion.2016',
        'polymer.2016',
        'codemotion.2016'
      ]
    },
    {
      key     : 'techfest.2017',
      title   : 'Funcional & Programación Declarativa',
      caption : 'Lenguajes & Paradigmas',
      image   : '/images/events/interviews/interview.17.02.png',
      video   : '/videos/events/interviews/interview.17.02.mp4',
      path    : '/eventos/entrevistas/techfest-2017',
      place   : 'Techfest',
      author  : 'Javier Vélez',
      date    : '2017',
      time    : '3:16',
      draft   : false,
      hidden  : false,
      lead    : `
        Frecuentemente, cuando pensamos en la programación funcional, en especial desde lenguajes que resultan 
        foráneos a este paradigma, caemos en el error de pensar en que programar de acuerdo a estos principios, 
        consiste básicamente en utilizar algunas primitivas centradas en operaciones sobre listas con 
        transformadores de orden superior. Sin embargo, la programación funcional cae lejos de estas ideas y 
        va mucho más allá de eso. Cuando ideamos soluciones orientadas a funciones, debemos ser capaces de crear 
        una única función que arroje una solución general sobre el espacio de problemas al que pertenece nuestro 
        problema y acompañarla de un nutrido conjunto de funciones y predicados que permitan poner en contexto 
        el uso de dicha función. Pensar en esta dirección resulta extraño al comienzo y, en ocasiones, 
        altamente complejo pero trae consigo importantes ventajas, en especial para aquellos tipos de problemas 
        centrados en una algoritmia en la que las operaciones de transformación son el elemento paramétrico que
        se configura para operar sobre la base de un conjunto de datos que se consideran punto fijo de la 
        operación. En un paradigma donde el concepto de instrucción, sentencia y orden de ejecución carece de 
        sentido, crear una función global a través de estrategias de composición funcional es la gran habilidad 
        que todo desarrollador debe adquirir por medio del uso y aplicación de diversas técnicas.
      `,
      links   : [
        'techfest.2015',
        'jsday.2016',
        'commit.2018'
      ]
    }, {
      key     : 'cto.2018',
      title   : 'Programas y Estrategias de Capacitación',
      caption : 'Cultura & Desarrollo Profesional',
      image   : '/images/events/interviews/interview.18.01.png',
      video   : '/videos/events/interviews/interview.18.01.mp4',
      path    : '/eventos/entrevistas/cto-summit-2018',
      place   : 'CTO Master',
      author  : 'Javier Vélez',
      date    : '2018',
      time    : '3:02',
      draft   : false,
      hidden  : false,
      lead    : `
        Resultaría largo y elaborado hacer un análisis causal de por qué en los últimos años se ha producido una
        transformación cultural verdaderamente dramática dentro de nuestra profesión. Sin la intención de hacer
        juicios de valor sobre este hecho, lo cierto es que los profesionales del sector tienen, buscan y 
        pretenden hoy en dia un plan de carrera horizontal frente a los clásicos movimientos de ascenso vertical 
        sobre las axfixiantes pirámides corporativas. Los valores cambian y con movimientos sociales como el 
        de la gran renuncia se prefieren factores de progreso profesional relativos al tipo de proyecto, el 
        ambiente laboral, el tipo de corporación, el teletrabajo y la conciliación familiar frente a los factores 
        convencionales de promoción basado en una nómina más abultada y un job position más largo y rimbombante.
        Este hecho sin embargo, contrasta de forma notable con la necesidad que tiene el mercado de absorber 
        posiciones de liderazgo tecnológico y estratégico que requieren de habilidades difícilmente adquiribles 
        a través de modelos de desarrollo horizontal. Si te pasas toda una vida clavando tachuelas a las suelas
        de los zapatos a buen seguro te convertirás en el mejor zapatero remendón pero será complicado que seas
        capaz de adquirir habilidades sobre diseño de calzado moderno. En este sentido, cada vez se advierte una
        mayor brecha entre perfiles centrados en el desarrollo con posicionamiento en el conocimiento 
        tecnológico de un montón de siglas y perfiles de dirección arquitectónica y estratégica que requieren otro
        tipo de conocimientos, habilidades, valores e inquietudes. Estará por descubrir cómo impactarán estas 
        diferencias en el futuro de nuestra profesión y como podremos hacer frente a las mismas.
      `,
      links   : [
        'iasa.2019.1',
        'iasa.2019.2',
        'cto.2019'
      ]
    }, {
      key     : 'commit.2018',
      title   : 'Arquitecturas Web Adaptativas',
      caption : 'Arquitecturas de Componentes Web',
      image   : '/images/events/interviews/interview.18.02.png',
      video   : '/videos/events/interviews/interview.18.02.mp4',
      path    : '/eventos/entrevistas/commit-2018',
      place   : 'Commit',
      author  : 'Javier Vélez',
      date    : '2018',
      time    : '2:26',
      draft   : false,
      hidden  : false,
      lead    : `
        Frecuentemente, cuando desarrollamos productos digitales basados en componentes web, de manera 
        consciente o inconsciente, aplicamos los principios del paradigma de orientación objetos, aquellos 
        referidos habitualmente a través de sus siglas en ingles SOLID. Este hecho conduce a soluciones
        bien formadas, sólidas y robustas. Sin embargo, con frecuencia este tipo de problemas requiere de 
        aproximaciones divergentes que aplican técnicas y modelos arquitectónicos de metaprogramación más 
        propios del paradigma clásico de la orientación a componentes. Se trata, en este sentido, de idear 
        soluciones con una capacidad de adaptación plástica y dinámica al contexto arquitectónico de uso 
        particular que sean capaces de elevar las cotas de reutilización potencial de los activos construidos.
        De acuerdo a estas ideas, el foco no está tanto en la construcción de los componentes idóneos para 
        resolver problemas particulares sino de ser capaces de crear estrategias de transformación adaptativa 
        que provoquen cambios puntuales irreversibles sobre la estructura y comportamiento de los componentes 
        y de encapsular esas estrategias en activos arquitectonicos de primer nivel para contribuir de manera
        formal y sistematica sobre el cuerpo de cualquier componente. 
      `,
      links   : [
        'techfest.2015',
        'jsday.2016',
        'iasa.2019.2'
      ]
    }, {
      key     : 'iasa.2019.1',
      title   : 'Arquitectura & Transformación Digital',
      caption : 'Arquitectura Agile & Gobierno',
      image   : '/images/events/interviews/interview.19.01.png',
      video   : '/videos/events/interviews/interview.19.01.mp4',
      path    : '/eventos/entrevistas/iasa-2019-1',
      place   : 'IASA',
      author  : 'Javier Vélez',
      date    : '2019',
      time    : '9:40',
      draft   : false,
      hidden  : false,
      lead    : `
        La responsabilidad de la arquitectura como disciplina en general, y la labor de los arquitectos en 
        particular, ha sido siempre un punto de encendida controversia dentro de la profesión. Qué es 
        exactamente un arquitecto, cuáles son sus responsabilidades, qué tipo de conocimiento le abala, 
        dónde residen sus puntos de contribución en el marco de un producto y cuándo debe aportar valor dentro 
        de un proyecto son preguntas recurrentes. Este espacio de encendido debate probablemente sea debido 
        al hecho de que la labor de la arquitectura es tan amplia como multidisciplinar. Los arquitectos son 
        responsables de velar por el cumplimiento de principios sobre el desarrollo del código, trabajar desde 
        las trincheras en el diseño y construcción de modelos de solución de productos digitales, elaborar 
        soluciones relativas a la integración o construcción compositiva de productos, idear arquitecturas de 
        referencia, marcos de actuación, directrices, patrones de diseño y buenas prácticas o elaborar la 
        arquitectura empresarial definiendo modelos de madurez, hojas de ruta y procesos de transformación 
        digital. Y por si esto fuera poco, los cambios de transformación cultural que de la mano de las 
        metodologías ágiles se han venido promoviendo en los últimos años han promovido una reconceptualización 
        en la que la arquitectura deja de estar concentrada en un rol específico para ser una habilidad 
        transversal que con frecuencia debe difundirse y cultivarse entre todos los miembros de cada equipo 
        de trabajo.

      `,
      links   : [
        'iasa.2019.2',
        'cto.2019',
        'cto.2018'
      ]
    }, {
      key     : 'iasa.2019.2',
      title   : 'Arquitecturas Ágiles & Emergentes',
      caption : 'Arquitectura Agile & Gobierno',
      image   : '/images/events/interviews/interview.19.02.png',
      video   : '/videos/events/interviews/interview.19.02.mp4',
      path    : '/eventos/entrevistas/iasa-2019-2',
      place   : 'IASA',
      author  : 'Javier Vélez',
      date    : '2019',
      time    : '1:34:13',
      draft   : false,
      hidden  : false,
      lead    : `
        La transformación cultural que vino de la mano de las metodologías ágiles puso rápidamente foco 
        de atención en los procesos de desarrollo de software. Se trataba de crear productos más orientados 
        al cliente con una participación activa del mismo en los procesos continuos de toma de decisiones y 
        permitir que el proceso de construcción de los productos digitales fuera más una actividad de exploración 
        y descubrimiento continuo sobre un espacio de problemas que el cumplimiento de un conjunto de 
        requisitos y restricciones definidos, bajo contrato legal, en el marco de un pliego de proyecto. La 
        comunidad de desarrollo de software aprendió rápidamente estas lecciones y empezó a aplicar una cultura
        del desarrollo fresca y dinámica basada en la resolución dialogada de problemas a través de 
        metodologías de time boxing y procedimientos iterativos e incrementales. Si bien se puso mucho foco de 
        atención en evangelizar sobre estas nuevas ideas en la literatura y en Internet, no se ha hecho tanto 
        estrés en relación a que significa practicar el agilismo desde la actividad del diseño arquitectónico.
        Crear arquitecturas ágiles significa romper con los prejuicios de otras épocas en las que el ejercicio 
        arquitectónico se entendía como una actividad de oráculo en el esfuerzo de crear un todo sistémico bien
        formado e inamovible. En su lugar hacer arquitecturas ágiles significa ser capaz de promover esfuerzos 
        exploratorios de alcance local para resolver cada problema inmediato en el marco temporal en el que se 
        aborda sin conflictos con las ideas de una construcción basada en la destrucción contínua e incremental.
      `,
      links   : [
        'iasa.2019.1',
        'cto.2018',
        'cto.2019'
      ]
    }, {
      key     : 'cto.2019',
      title   : 'Transformación Digital de la Experiencia',
      caption : 'Arquitecturas & Experiencia de Usuario',
      image   : '/images/events/interviews/interview.19.03.png',
      video   : '/videos/events/interviews/interview.19.03.mp4',
      path    : '/eventos/entrevistas/cto-2019',
      place   : 'CTO Summit',
      author  : 'Javier Vélez',
      date    : '2019',
      time    : '5:10',
      draft   : false,
      hidden  : false,
      lead    : `
        En los últimos 20 años la web se ha reinventado recurrentemente a si misma pasando de ser un mero 
        expositor de contenidos estáticos a ser una verdadera plataforma de ejecución que da soporte a toda 
        la interacción colaborativa entre los usuarios. Y es que ciertamente, el cambio no ha sido meramente 
        tecnológico, que también, sino que se advierte una transformación igualmente relevante de carácter 
        cultural referida a la forma en la que los usuarios perciben y consumen este medio digital. En 
        particular, en todo este tiempo los usuarios han pasado de tener un rol meramente pasivo como meros 
        consumidores observantes a mostrar una verdadera participación activa como contribuidores de contenido. 
        Me gusta pensar que toda esta evolución se ha producido a lo largo de tres grandes transformaciones que 
        dan lugar a sendas webs bien difernciadas: la web nomádica, la web feudal y la web consumista, aquella 
        que los usuarios vibimos hoy en dia. Y es que lo cierto es que cada etapa de este recorrido historico
        tiene sus condiciones y sus principios fundacionales. Ser conocedores de estos aspectos es especialmente 
        relevante para los tecnicos y profesionales que creamos soluciones sobre las arquitecturas de canales 
        digitales que proporciona la web y, si queremos ser buenos asesores de nuestros clientes, tendremos que 
        conocer bien este relato y los principios asociados. Porque los usuarios siempre estarán donde quieran 
        estar y no donde les pidamos que estén.
      `,
      links   : [
        'cto.2018',
        'iasa.2019.1',
        'codemotion.2017'
      ]
    }, {
      key     : 'codemotion.2023',
      title   : 'La Gran Renuncia & Reinvención Social',
      caption : 'Arquitectura Agile & Gobierno',
      image   : '/images/events/interviews/interview.23.01.png',
      video   : '/videos/events/interviews/interview.23.01.mp4',
      path    : '/eventos/entrevistas/codemotion-2023',
      place   : 'Codemotion 2023',
      author  : 'Javier Vélez & Otros',
      date    : '2023',
      time    : '45:16',
      draft   : false,
      hidden  : false,
      lead    : `
        Se está produciendo un gran cambio cultural dentro de nuestra profesión. Una transformación que tiene un 
        gran calado social y que trasciende más allá de nuestras fronteras. Todo un nuevo ecosistema de valores 
        diferentes al anterior mueven ahora a las nuevas generaciones a realizar sus procesos de búsqueda de 
        nuevas posiciones laborales. Cobra mayor relevancia el tipo de proyecto, la orientación innovadora 
        del mismo, el equipo de trabajo, la cultura de desarrollo ágil, la orientación a cliente, el uso de 
        nuevas tecnologías en auge emergente, las formas de liderzgo por influencia no basadas en la autoridad,
        y ante todo se demanda una nueva forma de concebir el trabajo con condiciones laborales más realistas 
        y actualizadas. Se acabaron los días de moverse por una motivación meramente económica y por llegar a 
        posiciones de absurdo liderazgo jerárquico que te sacan fuera de tu profesión. Se acabaron los días 
        de entrar en puestos de trabajo donde se premia más calentar el asiento que hacer una clara contribución
        sistemática a la cadena de valor. Se trata de construir, de aprender, de innovar, de co-crear y de ser 
        medidos y valorados en base a objetivos razonables y bien definidos gozando de importantes grados de 
        libertad en relación a dónde, cómo y cuándo desarrollo mi trabajo. Si eres capaz de definir un puesto 
        de estas características podemos hablar. Sino renuncio a tu oferta porque tú no estas hecho para mí.
      `,
      links   : [
        'iasa.2019.1',
        'cto.2018',
        'iasa.2019.2',  
      ]
    }]
  }

})


