import Config from '../../helpers/helper.config.js'

Config.define ({

  'site.interviews.header' : {
    title   : 'Entrevistas & Intervenciones',
    caption : 'Apariciones en Comunidad',
    icon    : '@site.icons.light.interview',
    image   : '/images/home/activity.03.png',
    lead    : `
      En esta sección aparece la colección de entrevistas e intervenciones en comunidad
      dedicadas a posicionar mi opinión y presentar mis áreas de investigación.
    `
  },

  'site.interviews.talks' : [{
      key     : 'techfest-2015',
      title   : 'Técnicas & Modelos de Metaprogramación',
      caption : 'Arquitecturas de Software Adaptativas',
      image   : '/images/activity/interviews/interview.15.01.png',
      video   : 'hPjiYsCb5DM',
      path    : '/entrevistas/techfest-2015',
      place   : 'TechFest',
      author  : 'Javier Vélez',
      date    : '2015',
      time    : '2:38',
      draft   : false,
      hidden  : false,
      lead    : `
          Los procesos de construcción de soluciones de software pasan habitualmente por la creación de arquitecturas sólidas. Este tipo de diseños 
          son aquellas que cumplen con los principios fundacionales del paradigma de la orientación a objetos, de sus siglas en inglés SOLID. Sin 
          embargo, en ocasiones resulta conveniente aplicar otro tipo de estrategia para la creación de software. Esto es especialmente cierto en 
          aquellos casos en los que se pretenda dar con soluciones que resulten flexibles y plásticamente adaptables a distintos contextos de uso. 
          El uso de determinadas técnicas y modelos de diseño arquitectónico tal es como el uso de traits, mixins, roles, aspectos o subjects, 
          propios del paradigma de la orientación a componentes, es de aplicaciónen estos casos. Muchos lenguajes, de hecho, invitan a llevar a 
          cabo un proceso de ideación de soluciones basado en estas técnicas dando lugar a soluciones más flexibles y dinámicamente cambiantes 
          a tenor de las condiciones ambientales. A lo largo de esta charla se hace un recorridoexhaustivo de este paradigma arquitectónico 
          revisando los principios, técnicas y modelos sobrela base del stack tecnológico de la plataforma web.`,
      links   : [
        'commit-2018',
        'polymer-2016',
        'codemotion-2016'
      ]
    }, {
      key     : 'codemotion-2016',
      title   : 'Patrones de Composición en la Web',
      caption : 'Arquitecturas de Componentes Web',
      image   : '/images/activity/interviews/interview.16.01.png',
      video   : '-FgfFP4ErbE',
      path    : '/entrevistas/codemotion-2016',
      place   : 'Codemotion',
      author  : 'Javier Vélez',
      date    : '2016',
      time    : '2:22',
      draft   : false,
      hidden  : false,
      lead    : `
          La llegada de las tecnologías de componentes web ha cambiado radicalmente la manera en la que se diseñan y construyen soluciones de frontend. 
          Ya sea porque se apliquen estrategias de modularidad basada en el uso masivo de componentes o por que se elaboren nutridos catálogos de 
          componentes que responden a las necesidades recurrentes de interacción visual propias de la plataforma web, lo ciertoes que hoy por hoy todo 
          esfuerzo de desarrollo en el lado frontal de las aplicaciones se basa eneste tipo de activos arquitectónicos. Sin embargo, no debemos olvidar, 
          que este tipo de componentesson activos de naturaleza declarativa que se despliegan sobre la geografía de documentos Web. Su naturaleza 
          autónoma y encapsulada ofrece importantes ventajas para el desarrollo. Sin embargo, unasolución visual bien formada requiere de grados 
          apropiados de cohesión entre los componentes que forman parte de la interfaz. Precisamente por este motivo es importante identificar aquellos 
          patrones de composición que dentro del plano declarativo puedan ser utilizados para enlazar colectivamente los componentes en uso.`,
      links   : [
        'polymer-2016',
        'codemotion-2017',
        'commit-2018'
      ]
    }, {
      key     : 'jsday-2016',
      title   : 'Arquitecturas para la Reutilización',
      caption : 'Arquitecturas de Software Adaptativas',
      image   : '/images/activity/interviews/interview.16.02.png',
      video   : 'ZKqGxpzI4yM',
      path    : '/entrevistas/jsday-2016',
      place   : 'JSDay',
      author  : 'Javier Vélez',
      date    : '2016',
      time    : '2:22',
      draft   : false,
      hidden  : false,
      lead    : `
          Frecuentemente se argumenta que la reutilización es uno de los valores más importantes de las soluciones de software. En efecto, cuando desarrollamos 
          arquitecturas, uno de nuestros objetivos fundamentales es conseguir que los activos construidos puedan ser reutilizados en diferentes contextos 
          arquitectónicos de uso. Entre otras cosas, esto contribuye al ahorro de costes en los procesos de desarrollo y a la homogeneidad transversal 
          de las soluciones. Todo paradigma y en particular la orientación a objetos caracterizada por los principios SOLID ha promovido modelos de 
          construcción orientados a la reutilización. Se argumenta que la construcción de objetos es el camino mediante el cual estos activos pueden ser 
          de aplicación en diferentes contextos arquitectónicos siempre que se diseñen con el nivel adecuado de abstracción y desacoplamiento. Sin embargo, 
          cuando nos adentramos en nuevos paradigmas de programación como aquellos propios de la orientación a componentes encontramos que frecuentemente 
          construir menos asiste más en los procesos de reutilizar más. Bajo esta hipótesis parece más interesante de cara la reutilización crear 
          contribuciones parcialesque puedan extender el comportamiento o estructura de los componentes para que adopten nuevas capacidades de forma 
          dinámica y convertir a estos rasgos de contribución puntual en los activos esenciales de la reutilización.`,
      links   : [
        'techfest-2015',
        'commit-2018',
        'iasa-2019-2'
      ]
    }, {
      key     : 'google-2016',
      title   : 'JavaScript vs Java',
      caption : 'Lenguajes & Paradigmas',
      image   : '/images/activity/interviews/interview.16.03.png',
      video   : 'f_v-6Xxtthc',
      path    : '/entrevistas/google-2016',
      place   : 'Google Campus',
      author  : 'Javier Vélez',
      date    : '2016',
      time    : '1:13:34',
      draft   : false,
      hidden  : false,
      lead    : `
          Nadie puede negar méritos a Java. Este lenguaje de programación nació y se ha mantenido honrosamente durante la friolera de más de 20 años como el 
          abanderado de las arquitecturas robustas. Sus propios creadores lo mantuvieron sin complejos. El código en Java es más verboso pero más legible y 
          mantenible. Y es verdad, trabajar con Java siempre fue una garantía de éxito en tanto que, a poco que no fueras demasiado torpe, las soluciones de 
          Java funcionaban. Paradójicamente, Java y su asesino nacieron y fueron creciendo a la vez y su historia se encuentra entrelazada como las vidas de 
          Holmes y Moriarti. Internet y la Web llegaron a los hogares del usuario a la vez que Java daba sus primeros pasos. Java fue avanzando con paso marcial, 
          mientras que la Web se transformaba de una mera valla publicitaria haciauna verdadera plataforma de ejecución donde nacerían todas las redes sociales 
          que hoy gobiernan nuestrasvidas. Y así, casi sin darnos cuenta, la carrera de negocios en Internet se fue acelerando. Era importantetener un negocio 
          en Internet. Era importante correr más que tu competencia. Y sobretodo, si tenías que morir, era importante que murieras pronto. En este nuevo marco 
          de producto mínimo viable la agilidad en el desarrollo de productos emergentes y corta duración se convirtió en la gran bala de plata y aquí es donde 
          Java termino perdiendo terreno en esta anunciada derrota.`,
      links   : [
        'techfest-2015',
        'jsday-2016',
        'techfest-2017'
      ]
    }, {
      key     : 'polymer-2016',
      title   : 'Patrones de Acceso a Datos',
      caption : 'Arquitecturas de Componentes Web',
      image   : '/images/activity/interviews/interview.16.04.png',
      video   : 'VSNzbyKC_CE',
      path    : '/entrevistas/polymer-2016',
      place   : 'Polymer Day',
      author  : 'Javier Vélez',
      date    : '2016',
      time    : '2:32',
      draft   : false,
      hidden  : false,
      lead    : `
          La orientación a componentes web se ha convertido en un revulsivo en los últimos años para construir soluciones digitales de última generación. El 
          hecho de hacer uso de componentes como piezas de interacción visual encapsuladas y reutilizables ofrece grandes ventajas a los procesos de 
          construcción compositiva y arroja un escenario de mayor simplicidad a la hora de idear soluciones de escalabilidadcreciente en complejidad. Dentro 
          de la comunidad se ha hablado mucho acerca de cómo se pueden construireste tipo de activos tecnológicos y de cómo puede llevarse a cabo un proceso 
          de construcción sistemática dirigido a la creación de un catálogo de componentes bien formados para dar respuesta efectiva a cada una de las 
          necesidades del desarrollo de soluciones web. Sin embargo, se ha prestado menos importancia a la manera en la que dichos componentes pueden recibir 
          una inyección conveniente de las fuentes de datos a la que de manera necesaria deben estar conectados para poder crear solucionesde frontend 
          cohesivas y funcionales. A lo largo de esta charla centramos nuestra atención, precisamente,en la descripción de distintos patrones arquitectónicos 
          de componentes web dirigidos a dar soporte a las necesidades de configuración e inyección de fuentes de datos.`,
      links   : [
        'codemotion-2016',
        'commit-2018',
        'codemotion-2017'
      ]
    }, {
      key     : 'codemotion-2017',
      title   : 'Sistemas de Diseño & Arquitecturas UX',
      caption : 'Arquitecturas & Experiencia de Usuario',
      image   : '/images/activity/interviews/interview.17.01.png',
      video   : 'pYjg1hbEdPI',
      path    : '/entrevistas/codemotion-2017',
      place   : 'Codemotion',
      author  : 'Javier Vélez',
      date    : '2017',
      time    : '2:22',
      draft   : false,
      hidden  : false,
      lead    : `
          Las tecnologías de componentes web son una realidad que ha llegado a nuestros días. Hoy por hoy todoslos frameworks de mercado y todos los profesionales 
          que desarrollan productos digitales sobre la web hacen uso de este tipo de soluciones para encapsular modelos de interacción sobre la base de contenidos
          visuales. Sin embargo, el cambio paradigmático no está tanto en aspectos tecnológicos como pareciera pensar inicialmente, sino más bien en consideraciones 
          de carácter metodológico. Y es que lo verdaderamente importante es crear catálogos de componentes bien formados que den respuesta precisa y adecuada 
          a cadauna de las necesidades de interacción que surgen en el marco de las soluciones web. Construir catálogosignifica  dejar de pensar en producto 
          para pensar en dominio, dejar de operar desde la descomposiciónmodularidad para construir en base a la reutilización compositiva, y dejar de pensar 
          en desarrollo de componentes locales a proyecto para crear un verdadero lenguaje de composición declarativo que deforma a toda una superficie visual 
          funcional y sin fisuras experienciales. Conocer los principios fundacionales del paradigma de componentes, la estructura anatómica y contractual de 
          los mismos y lasetapas del proceso metodológico de construcción de catálogos es punto clave para la obtención de éxito en este tipo de iniciativas. `,
      links   : [
        'codemotion-2016',
        'polymer-2016',
        'codemotion-2016'
      ]
    }, {
      key     : 'techfest-2017',
      title   : 'Funcional & Programación Declarativa',
      caption : 'Lenguajes & Paradigmas',
      image   : '/images/activity/interviews/interview.17.02.png',
      video   : 'FhnWbL9Nt00',
      path    : '/entrevistas/techfest-2017',
      place   : 'Techfest',
      author  : 'Javier Vélez',
      date    : '2017',
      time    : '3:16',
      draft   : false,
      hidden  : false,
      lead    : `
          Frecuentemente, cuando pensamos en la programación funcional, en especial desde lenguajes que resultan foráneos a este paradigma, caemos en el error 
          de pensar en que programar de acuerdo a estos principios, consiste básicamente en utilizar algunas primitivas centradas en operaciones sobre listas 
          con transformadores de orden superior. Sin embargo, la programación funcional cae lejos de estas ideas y va mucho más allá de eso. Cuando ideamos 
          soluciones orientadas a funciones, debemos ser capaces de crear una única función que arroje una solución general sobre el espacio de problemas al 
          que pertenece nuestro problema y acompañarla de un nutrido conjunto de funciones y predicados que permitan poner en contexto el uso de dicha función. 
          Pensar en esta dirección resulta extraño al comienzo y, en ocasiones, altamente complejo pero trae consigo importantes ventajas, en especial para 
          aquellos tipos de problemas centrados en una algoritmia en la que las operaciones de transformación son el elemento paramétrico quese configura para 
          operar sobre la base de un conjunto de datos que se consideran punto fijo de la operación. En un paradigma donde el concepto de instrucción, sentencia 
          y orden de ejecución carece de sentido, crear una función global a través de estrategias de composición funcional es la gran habilidad que todo 
          desarrollador debe adquirir por medio del uso y aplicación de diversas técnicas.`,
      links   : [
        'techfest-2015',
        'jsday-2016',
        'commit-2018'
      ]
    }, {
      key     : 'cto-2018',
      title   : 'Programas y Estrategias de Capacitación',
      caption : 'Cultura & Desarrollo Profesional',
      image   : '/images/activity/interviews/interview.18.01.png',
      video   : 'FtHC-uohciI',
      path    : '/entrevistas/cto-summit-2018',
      place   : 'CTO Master',
      author  : 'Javier Vélez',
      date    : '2018',
      time    : '3:02',
      draft   : false,
      hidden  : false,
      lead    : `
          Resultaría largo y elaborado hacer un análisis causal de por qué en los últimos años se ha producido unatransformación cultural verdaderamente dramática 
          dentro de nuestra profesión. Sin la intención de hacerjuicios de valor sobre este hecho, lo cierto es que los profesionales del sector tienen, buscan y 
          pretenden hoy en dia un plan de carrera horizontal frente a los clásicos movimientos de ascenso vertical sobre las asfixiantes pirámides corporativas. 
          Los valores cambian y con movimientos sociales como el de la gran renuncia se prefieren factores de progreso profesional relativos al tipo de proyecto,
          el ambiente laboral, el tipo de corporación, el teletrabajo y la conciliación familiar frente a los factores convencionales de promoción basado en una 
          nómina más abultada y un job position más largo y rimbombante.Este hecho sin embargo, contrasta de forma notable con la necesidad que tiene el mercado 
          de absorber posiciones de liderazgo tecnológico y estratégico que requieren de habilidades difícilmente adquiribles a través de modelos de desarrollo 
          horizontal. Si te pasas toda una vida clavando tachuelas a las suelasde los zapatos a buen seguro te convertirás en el mejor zapatero remendón pero 
          será complicado que seascapaz de adquirir habilidades sobre diseño de calzado moderno. En este sentido, cada vez se advierte unamayor brecha entre 
          perfiles centrados en el desarrollo con posicionamiento en el conocimiento tecnológico de un montón de siglas y perfiles de dirección arquitectónica 
          y estratégica que requieren otrotipo de conocimientos, habilidades, valores e inquietudes. Estará por descubrir cómo impactarán estas diferencias en 
          el futuro de nuestra profesión y como podremos hacer frente a las mismas.`,
      links   : [
        'iasa-2019-1',
        'iasa-2019-2',
        'cto-2019'
      ]
    }, {
      key     : 'commit-2018',
      title   : 'Arquitecturas Web Adaptativas',
      caption : 'Arquitecturas de Componentes Web',
      image   : '/images/activity/interviews/interview.18.02.png',
      video   : 'h3kJRlUR_Pg',
      path    : '/entrevistas/commit-2018',
      place   : 'Commit',
      author  : 'Javier Vélez',
      date    : '2018',
      time    : '2:26',
      draft   : false,
      hidden  : false,
      lead    : `
          Frecuentemente, cuando desarrollamos productos digitales basados en componentes web, de manera consciente o inconsciente, aplicamos los principios del 
          paradigma de orientación objetos, aquellos referidos habitualmente a través de sus siglas en ingles SOLID. Este hecho conduce a solucionesbien formadas, 
          sólidas y robustas. Sin embargo, con frecuencia este tipo de problemas requiere de aproximaciones divergentes que aplican técnicas y modelos arquitectónicos 
          de metaprogramación más propios del paradigma clásico de la orientación a componentes. Se trata, en este sentido, de idear soluciones con una capacidad de 
          adaptación plástica y dinámica al contexto arquitectónico de uso particular que sean capaces de elevar las cotas de reutilización potencial de los activos 
          construidos.De acuerdo a estas ideas, el foco no está tanto en la construcción de los componentes idóneos para resolver problemas particulares sino de 
          ser capaces de crear estrategias de transformación adaptativa que provoquen cambios puntuales irreversibles sobre la estructura y comportamiento de los 
          componentes y de encapsular esas estrategias en activos arquitectónicos de primer nivel para contribuir de maneraformal y sistemática sobre el cuerpo de 
          cualquier componente. `,
      links   : [
        'techfest-2015',
        'jsday-2016',
        'iasa-2019-2'
      ]
    }, {
      key     : 'iasa-2019-1',
      title   : 'Arquitectura & Transformación Digital',
      caption : 'Arquitectura Agile & Gobierno',
      image   : '/images/activity/interviews/interview.19.01.png',
      video   : 'yXbxbY-0rns',
      path    : '/entrevistas/iasa-2019-1',
      place   : 'IASA',
      author  : 'Javier Vélez',
      date    : '2019',
      time    : '9:40',
      draft   : false,
      hidden  : false,
      lead    : `
          La responsabilidad de la arquitectura como disciplina en general, y la labor de los arquitectos en particular, ha sido siempre un punto de encendida 
          controversia dentro de la profesión. Qué es exactamente un arquitecto, cuáles son sus responsabilidades, qué tipo de conocimiento le abala, dónde 
          residen sus puntos de contribución en el marco de un producto y cuándo debe aportar valor dentro de un proyecto son preguntas recurrentes. Este espacio 
          de encendido debate probablemente sea debido al hecho de que la labor de la arquitectura es tan amplia como multidisciplinar. Los arquitectos son 
          responsables de velar por el cumplimiento de principios sobre el desarrollo del código, trabajar desde las trincheras en el diseño y construcción de 
          modelos de solución de productos digitales, elaborar soluciones relativas a la integración o construcción compositiva de productos, idear arquitecturas 
          de referencia, marcos de actuación, directrices, patrones de diseño y buenas prácticas o elaborar la arquitectura empresarial definiendo modelos de 
          madurez, hojas de ruta y procesos de transformación digital. Y por si esto fuera poco, los cambios de transformación cultural que de la mano de las 
          metodologías ágiles se han venido promoviendo en los últimos años han promovido una reconceptualización en la que la arquitectura deja de estar concentrada 
          en un rol específico para ser una habilidad transversal que con frecuencia debe difundirse y cultivarse entre todos los miembros de cada equipo de trabajo.`,
      links   : [
        'iasa-2019-2',
        'cto-2019',
        'cto-2018'
      ]
    }, {
      key     : 'iasa-2019-2',
      title   : 'Arquitecturas Ágiles & Emergentes',
      caption : 'Arquitectura Agile & Gobierno',
      image   : '/images/activity/interviews/interview.19.02.png',
      video   : 'Q-7Ajt-ymCA',
      path    : '/entrevistas/iasa-2019-2',
      place   : 'IASA',
      author  : 'Javier Vélez',
      date    : '2019',
      time    : '1:34:13',
      draft   : false,
      hidden  : false,
      lead    : `
          La transformación cultural que vino de la mano de las metodologías ágiles puso rápidamente foco de atención en los procesos de desarrollo de software. 
          Se trataba de crear productos más orientados al cliente con una participación activa del mismo en los procesos continuos de toma de decisiones y
          permitir que el proceso de construcción de los productos digitales fuera más una actividad de exploración y descubrimiento continuo sobre un espacio 
          de problemas que el cumplimiento de un conjunto de requisitos y restricciones definidos, bajo contrato legal, en el marco de un pliego de proyecto. 
          La comunidad de desarrollo de software aprendió rápidamente estas lecciones y empezó a aplicar una culturadel desarrollo fresca y dinámica 
          basada en la resolución dialogada de problemas a través de metodologías de time boxing y procedimientos iterativos e incrementales. Si bien se 
          puso mucho foco de atención en evangelizar sobre estas nuevas ideas en la literatura y en Internet, no se ha hecho tanto estrés en relación a que 
          significa practicar el agilismo desde la actividad del diseño arquitectónico.Crear arquitecturas ágiles significa romper con los prejuicios de 
          otras épocas en las que el ejercicio arquitectónico se entendía como una actividad de oráculo en el esfuerzo de crear un todo sistémico bien 
          formado e inamovible. En su lugar hacer arquitecturas ágiles significa ser capaz de promover esfuerzos exploratorios de alcance local para 
          resolver cada problema inmediato en el marco temporal en el que se aborda sin conflictos con las ideas de una construcción basada en la destrucción 
          continua e incremental.`,
      links   : [
        'iasa-2019-1',
        'cto-2018',
        'cto-2019'
      ]
    }, {
      key     : 'cto-2019',
      title   : 'Transformación Digital de la Experiencia',
      caption : 'Arquitecturas & Experiencia de Usuario',
      image   : '/images/activity/interviews/interview.19.03.png',
      video   : 'OsgS-PYazDo',
      path    : '/entrevistas/cto-2019',
      place   : 'CTO Summit',
      author  : 'Javier Vélez',
      date    : '2019',
      time    : '5:10',
      draft   : false,
      hidden  : false,
      lead    : `
          En los últimos 20 años la web se ha reinventado recurrentemente a si misma pasando de ser un mero expositor de contenidos estáticos a ser una verdadera 
          plataforma de ejecución que da soporte a toda la interacción colaborativa entre los usuarios. Y es que ciertamente, el cambio no ha sido meramente tecnológico, 
          que también, sino que se advierte una transformación igualmente relevante de carácter cultural referida a la forma en la que los usuarios perciben y consumen 
          este medio digital. En particular, en todo este tiempo los usuarios han pasado de tener un rol meramente pasivo como meros consumidores observantes a mostrar 
          una verdadera participación activa como contribuidores de contenido. Me gusta pensar que toda esta evolución se ha producido a lo largo de tres grandes 
          transformaciones que dan lugar a sendas webs bien diferenciadas: la web nomádica, la web feudal y la web consumista, aquella que los usuarios vivimos hoy en dia. 
          Y es que lo cierto es que cada etapa de este recorrido históricotiene sus condiciones y sus principios fundacionales. Ser conocedores de estos aspectos es 
          especialmente relevante para los técnicos y profesionales que creamos soluciones sobre las arquitecturas de canales digitales que proporciona la web y, si 
          queremos ser buenos asesores de nuestros clientes, tendremos que conocer bien este relato y los principios asociados. Porque los usuarios siempre estarán donde 
          quieran estar y no donde les pidamos que estén.`,
      links   : [
        'cto-2018',
        'iasa-2019-1',
        'codemotion-2017'
      ]
    }, {
      key     : 'codemotion-2023',
      title   : 'La Gran Renuncia & Reinvención Social',
      caption : 'Arquitectura Agile & Gobierno',
      image   : '/images/activity/interviews/interview.23.01.png',
      video   : 'SbYsnck6nLM',
      path    : '/entrevistas/codemotion-2023',
      place   : 'Codemotion',
      author  : 'Javier Vélez & Otros',
      date    : '2023',
      time    : '45:16',
      draft   : false,
      hidden  : false,
      lead    : `
          Se está produciendo un gran cambio cultural dentro de nuestra profesión. Una transformación que tiene un gran calado social y que trasciende 
          más allá de nuestras fronteras. Todo un nuevo ecosistema de valores diferentes al anterior mueven ahora a las nuevas generaciones a realizar 
          sus procesos de búsqueda de nuevas posiciones laborales. Cobra mayor relevancia el tipo de proyecto, la orientación innovadora del mismo, el 
          equipo de trabajo, la cultura de desarrollo ágil, la orientación a cliente, el uso de nuevas tecnologías en auge emergente, las formas de 
          liderazgo por influencia no basadas en la autoridad,y ante todo se demanda una nueva forma de concebir el trabajo con condiciones laborales más 
          realistas y actualizadas. Se acabaron los días de moverse por una motivación meramente económica y por llegar a posiciones de absurdo liderazgo 
          jerárquico que te sacan fuera de tu profesión. Se acabaron los días de entrar en puestos de trabajo donde se premia más calentar el asiento que 
          hacer una clara contribuciónsistemática a la cadena de valor. Se trata de construir, de aprender, de innovar, de co-crear y de ser medidos y 
          valorados en base a objetivos razonables y bien definidos gozando de importantes grados de libertad en relación a dónde, cómo y cuándo 
          desarrollo mi trabajo. Si eres capaz de definir un puesto de estas características podemos hablar. Sino renuncio a tu oferta porque tú no 
          estas hecho para mí.`,
      links   : [
        'iasa-2019-1',
        'cto-2018',
        'iasa-2019-2'
      ]
    }, {
      key     : 'try-it-2025',
      title   : 'Impacto de la IA en la Ingeniería del Software',
      caption : 'Inteligencia Artificial & Desarrollo',
      image   : '/images/activity/interviews/interview.25.01.png',
      video   : 'l2GrXRq_kr8',
      path    : '/entrevistas/try-it-2025',
      place   : 'Try IT',
      author  : 'Javier Vélez & Otros',
      date    : '2025',
      time    : '01:30:07',
      draft   : false,
      hidden  : false,
      lead    : `
          El desarrollo de la Inteligencia Artificial Generativa, tal como la conocemos hoy, está suponiendo un fuerte revulsivo en términos generales.
          En el plano cultural la IA se presenta como un gran habilitador que ofrece nuevas oportunidades de acceso inteligente a la información y como
          un agente de cambio que vendrá a reconceptualizar muchas de las experiencias digitales a las que hoy estamos acostubrados. Sin embargo, el 
          gran perímetro que está experimentando un fuerte proceso de transformación movido por la intromisión de la IA es el del desarrollo y la 
          construcción de software y productos digitales. Por un lado, la IA no sólo parece prometer acortar los tiempos de desarrollo de manera antes
          insospechada sino que desbloquea oportunidades de negocio centradas en una fuerte adaptación a cliente y en un aumento de alcance sobre las 
          capacidades tradicionalmente asignadas a los equipos de desarrollo. Pero, más allá de eso, la Inteligencia Artificial se presenta como una 
          firme promesa que transformará incluso la esencia misma del software. Desde una perspectiva arquitectónica y tecnológica es muy probable que
          la anatomía y artefactos de los productos digitales de un futuro inmediato tengan poco que ver con los activos del presente centrados en 
          especificaciones de codigo fuente expresadas en lenguajes de tercera generación. Desde pun punto de vista metodológico, los procesos de
          desarrollo típicamente basados en valores como la reusabilidad, la modularidad, el mantenimiento o el desarrollo iterativo e incremental 
          parece que deben ser revisitados. A lo largo de este ameno debate se discuten estos y otros tópicos que describen el espacio donde la Ingeniería 
          del Software se encuentra con La Inteligencia Artificial.`,
      links   : [
        'erni-2025',
        'cto-2018',
        'iasa-2019-2'
      ]
    }, {
      key     : 'erni-2025',
      title   : 'El Futuro del Desarrollo en la Era de la IA ',
      caption : 'Inteligencia Artificial & Desarrollo',
      image   : '/images/activity/interviews/interview.25.02.png',
      video   : 'uyaurmEx08s',
      path    : '/entrevistas/erni-2025',
      place   : 'ERNI',
      author  : 'Javier Vélez & Otros',
      date    : '2025',
      time    : '01:16:51',
      draft   : false,
      hidden  : false,
      lead    : `
          Qué es la Inteligencia Humana, qué es la Inteligencia Artificial, qué es una Inteligencia Artificial General y hasta qué punto puede y debe 
          considerarse a la Inteligencia Artificial una ideación de laboratorio que persigue o consigue alcanzar la Inteligencia Racional del Hombre. 
          Estas y otras preguntas son, habitualmente, punto de partida insoslayable en los debates de estos días que giran en torno a las nuevas capacidades
          de transformación digital que se están desbloqueando con los avances de sistemas de redes neuronales conexionistas. Mas allá de adentrarnos
          en esta suerte de debates bizantinos, es oportuno poner en valor las nuevas capacidades que la IA está poniendo a nuestra disposición para crear
          un nuevo marco de experiencias dirigido por unas interacciones entre el hombre y la máquina centradas en el lenguaje y dirigidas por procesos 
          de diálogo convergentes y basados en negociación argumentativa. Es en realidad esta última característica lo que supone un verdadero revulsivo 
          con respecto a lo que ya habiamos conseguido con generaciones de avances anteriores. Se trata de un nuevo espectro de opciones centrados en 
          aceleración, adaptación y alcance pero democratizadas en su acceso a través del uso del lenguaje natural y una comunicación más orgánica y natural.
          A lo largo de este debate haremos un intersante recorrido sobre toda la carrera que está recorriendo la Inteligencia Artificial Generativa y 
          discutiremos hasta qué punto este nuevo actor va a suponer un cambio en la forma en que concebimos nuestra profesión como ingenieros.`,
      links   : [
        'try-it-2025',
        'cto-2018',
        'iasa-2019-2'
      ]
    }, {
      key     : 'producto-2025',
      title   : 'La Revolución Digital de la IA ',
      caption : 'Inteligencia Artificial & Producto',
      image   : '/images/activity/interviews/interview.25.03.png',
      video   : 'tfyhiBRaCLQ',
      path    : '/entrevistas/producto-2025',
      place   : 'Tenemos Que Hablar de Producto',
      author  : 'Javier Vélez & Álvaro Pérez Bello',
      date    : '2025',
      time    : '01:04:17',
      draft   : false,
      hidden  : false,
      lead    : `
          Que la Inteligencia Artificial está suponiendo un revulsivo nunca antes visto hasta la fecha es algo de lo que ya no cabe ninguna duda. Todas las 
          profesiones están experimentando transformaciones muy relevantes que imponen una nueva forma de concebir el trabajo, y cuando menos podemos afirmar 
          que en pocos años esta etapa de digitalización provocará serios cambios en la manera en que desarrollamos nuestras actividades profesionales.
          Sin embargo, el cambio es una realidad que trasciende este perímetro, evidenciándose plenamente como una auténtica revolución cultural que impone 
          nuevas formas de relacionarnos con la tecnología. No en vano, la Inteligencia Artificial ya se está manifestando en forma de agentes locales que 
          intermedian en nuestras actividades cotidianas de acceso al conocimiento y a los servicios en la nube. Lejos de visiones catastrofistas, este cambio
          debe entenderse como una oportunidad para descubrir e idear una nueva generación de productos digitales que pongan el foco en las necesidades de los 
          usuarios finales, más allá de características de innovación superflua. Se trata de concebir nuevos modelos de interacción centrados en el lenguaje y 
          en procesos de negociación dialógica argumentativa contra agentes especializados que funcionen como aliados, extendiendo las fronteras de producción, 
          adaptación y alcance. A diferencia de ocasiones anteriores, esta nueva evolución no tendrá a la comunidad de tecnólogos como los actores principales 
          del cambio. Esta será la transformación en la que los diseñadores de producto asumirán un protagonismo central.`,
      links   : [
        'try-it-2025',
        'erni-2025',
        'cto-2018'
      ]
    } 
  ]

})


