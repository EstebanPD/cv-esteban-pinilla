import { linkedinProfile, skillsTechnical } from "../constants/constant";

const otherTexts = {
  jobTitle: "Desarrollador Front-end",
  remote: "Remoto",
  hybrid: "Híbrido",
  studying: "Cursando",
};

export const CV_INFO_ES = {
  actions: {
    text: "Cambiar idioma",
    es: "Español",
    en: "Ingles",
    download: "Descargar",
  },
  basicInformation: {
    fullName: "Esteban Pinilla Delgado",
    email: "estebanp825@gmail.com",
    email2: "estebanp825@outlook.es",
    phone: "+57 3128128900",
    linkedin: {
      text: "LinkedIn",
      url: linkedinProfile,
    },
    jobTitle: otherTexts.jobTitle,
  },
  professionalSummary: {
    title: "Perfil Profesional",
    description:
      "Soy un analista y desarrollador de sistemas informáticos con más de cinco años de experiencia en el desarrollo y sostenimiento de sitios web. Mi trayectoria incluye el manejo eficiente de diferentes tecnologías y la implementación de soluciones innovadoras para garantizar el rendimiento óptimo y la seguridad de las plataformas digitales. Me caracterizo por mi capacidad para analizar y resolver problemas complejos, adaptándome a los requerimientos específicos de cada proyecto y siempre orientado a la mejora continua y satisfacción del cliente.",
  },
  workExperience: {
    title: "Experiencia laboral",
    experience: [
      {
        jobTitle: otherTexts.jobTitle,
        company: "MAGNETO",
        dates: "Diciembre. 2021 - Presente",
        experience: [
          "Dirigí proyectos de desarrollo web desde la conceptualización hasta la implementación, garantizando la satisfacción del cliente.",
          "Desarrollé aplicaciones web utilizando frameworks modernos como React y Next.",
          "Implementé mejores prácticas de desarrollo, reduciendo el tiempo de entrega en un 20%.",
          "Colaboré con equipos multidisciplinarios para crear soluciones innovadoras que cumplen con las necesidades del cliente.",
          "Integré APIs de terceros para enriquecer la funcionalidad de las aplicaciones.",
          "Implementé prácticas de SEO, aumentando el tráfico orgánico en un 20%.",
        ],
        remote: otherTexts.remote,
      },
      // {
      //   jobTitle: otherTexts.jobTitle,
      //   company: "DDB WORLDWIDE",
      //   dates: "Febrero. 2023 - Abril. 2023",
      //   experience: [
      //     "Desarrollé filtros animados personalizados para Instagram utilizando tecnologías de realidad aumentada.",
      //     "Colaboré con el equipo creativo para traducir conceptos de marketing en experiencias interactivas y atractivas en redes sociales.",
      //     "Aseguré la optimización y el rendimiento de los filtros en diferentes dispositivos móviles, manteniendo la calidad visual y la fluidez de la animación.",
      //   ],
      //   remote: otherTexts.remote,
      // },
      // {
      //   jobTitle: otherTexts.jobTitle,
      //   company: "CEINMER",
      //   dates: "Abril. 2022 - Marzo. 2023",
      //   experience: [
      //     "Implementé soluciones de diseño responsivo que mejoraron la accesibilidad y usabilidad en dispositivos móviles.",
      //     "Resolví problemas complejos de código, reduciendo los errores en producción en un 15%.",
      //     "Desarrollé componentes reutilizables en React para mejorar la eficiencia del equipo de desarrollo.",
      //   ],
      //   remote: otherTexts.remote,
      // },
      // {
      //   jobTitle: otherTexts.jobTitle,
      //   company: "EMERGIA",
      //   dates: "Septiembre. 2022 - Octubre. 2022",
      //   experience: [
      //     "Desarrollé landing pages y micrositios para campañas publicitarias, optimizando la conversión de usuarios.",
      //     "Asesoré a clientes sobre las mejores prácticas de desarrollo web y tendencias tecnológicas.",
      //   ],
      //   remote: otherTexts.remote,
      // },
      {
        jobTitle: otherTexts.jobTitle,
        company: "ARIADNA COMMUNICATIONS GROUP",
        dates: "Julio. 2018 - Diciembre. 2021",
        experience: [
          "Desarrollé interfaces de usuario interactivas, mejorando la experiencia del usuario.",
          "Colaboré con diseñadores y desarrolladores back-end para implementar soluciones web eficientes y escalables.",
          "Optimizé el rendimiento de las aplicaciones web, reduciendo los tiempos de carga.",
          "Lideré la migración de sitios web a tecnologías más modernas, aumentando la velocidad y seguridad.",
          "Capacité a nuevos miembros del equipo en las mejores prácticas de desarrollo front-end.",
        ],
        remote: otherTexts.hybrid,
      },
    ],
  },
  skills: {
    title: "Habilidades",
    technical: {
      title: "Técnicas",
      items: [...skillsTechnical],
    },
    softSkills: {
      title: "Habilidades blandas",
      items: [
        "Comunicación efectiva",
        "Trabajo en equipo",
        "Adaptabilidad",
        "Resolución de problemas",
        "Gestión del tiempo",
        "Pensamiento crítico",
        "Liderazgo",
        "Empatía",
        "Orientación al detalle",
        "Curiosidad y aprendizaje continuo",
      ],
    },
  },
  education: {
    title: "Educación",
    institutions: [
      {
        title: "SENA, Manizales, Caldas",
        description:
          "Analista y desarrollador de sistemas de información, Sistemas informáticos , Dic. 2018",
      },
      {
        title: "Politécnico Grancolombiano",
        description: `Ingeniería de software - ${otherTexts.studying}`,
      },
    ],
    otherKnowledge: {
      title: "Otros conocimientos",
      items: [
        { item: "Figma", studying: "" },
        { item: "Photoshop", studying: "" },
        { item: "Illustrator", studying: "" },
        { item: "Adobe XD", studying: "" },
        { item: "Spark Art Studio", studying: "" },
        { item: "Scrum Master", studying: "" },
        { item: "Experiencia de usuario UX/UI", studying: "" },
        { item: "Flutter", studying: otherTexts.studying },
      ],
    },
  },
  references: {
    title: "Referencias",
    reference: [
      {
        name: "Dahiana Ceballos",
        jobTitle: "Communty Manager",
        phone: "3162754940",
      },
      {
        name: "David Steven Llano",
        jobTitle: "Webmaster",
        phone: "3017749068",
      },
    ],
  },
  languages: [
    { item: "English", percentage: 90 },
    { item: "Spanish", percentage: 90 },
  ],
};
