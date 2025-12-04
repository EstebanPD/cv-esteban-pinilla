import {
  contractTypes,
  linkedinProfile,
  skillsTechnical,
} from "../constants/constant";

export const CV_INFO_ES = {
  actions: {
    text: "Cambiar idioma",
    es: "Español",
    en: "Inglés",
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
    jobTitle: "Desarrollador Full Stack",
  },
  professionalSummary: {
    title: "Perfil Profesional",
    description:
      "Desarrollador Full Stack con más de 7 años de experiencia en el diseño, desarrollo y optimización de aplicaciones web de alto rendimiento utilizando tecnologías modernas como React, Next.js, Node.js y TypeScript. Especializado en la construcción de arquitecturas frontend escalables, integración de APIs complejas, mejora del rendimiento SEO y creación de experiencias de usuario fluidas mediante código limpio y mantenible. Poseo una sólida capacidad para traducir requisitos de negocio en soluciones técnicas efectivas, colaborando con equipos multidisciplinarios en entornos ágiles y liderando funcionalidades desde la planificación hasta el despliegue. Altamente adaptable, orientado al detalle y comprometido con la mejora continua, la automatización y las mejores prácticas de desarrollo, enfoco mi trabajo en entregar productos digitales confiables, eficientes y de alto impacto para el crecimiento organizacional y la satisfacción del usuario.",
  },
  workExperience: {
    title: "Experiencia Laboral",
    experience: [
      {
        jobTitle: "Desarrollador Full Stack",
        company: "MAGNETO",
        dates: "Diciembre 2021 - Actualidad",
        experience: [
          "Lideré proyectos de desarrollo web desde la conceptualización hasta la implementación, asegurando la satisfacción del cliente.",
          "Desarrollé aplicaciones web utilizando frameworks modernos como React y Next.",
          "Implementé buenas prácticas de desarrollo, reduciendo el tiempo de entrega en un 20%.",
          "Colaboré con equipos multidisciplinarios para crear soluciones innovadoras que respondieran a las necesidades del cliente.",
          "Integré APIs de terceros para mejorar la funcionalidad de las aplicaciones.",
          "Implementé prácticas de SEO, aumentando el tráfico orgánico en un 20%.",
        ],
        remote: "Remoto",
        type: contractTypes.fullTime,
      },
      {
        jobTitle: "Desarrollador Full Stack",
        company: "DDB WORLDWIDE",
        dates: "Febrero 2023 - Abril 2023",
        experience: [
          "Desarrollé filtros animados personalizados para Instagram utilizando tecnologías de realidad aumentada.",
          "Colaboré con el equipo creativo para traducir conceptos de marketing en experiencias interactivas para redes sociales.",
          "Aseguré la optimización y el rendimiento de los filtros en diversos dispositivos móviles, manteniendo la calidad visual y la fluidez de la animación.",
        ],
        remote: "Remoto",
        type: contractTypes.freelance,
      },
      {
        jobTitle: "Desarrollador Full Stack",
        company: "CEINMER",
        dates: "Abril 2022 - Marzo 2023",
        experience: [
          "Implementé soluciones de diseño responsivo que mejoraron la accesibilidad y usabilidad en dispositivos móviles.",
          "Resolví problemas complejos de código, reduciendo errores en producción en un 15%.",
          "Desarrollé componentes reutilizables en React para mejorar la eficiencia del equipo de desarrollo.",
        ],
        remote: "Remoto",
        type: contractTypes.freelance,
      },
      {
        jobTitle: "Desarrollador Full Stack",
        company: "EMERGIA",
        dates: "Septiembre 2022 - Octubre 2022",
        experience: [
          "Desarrollé landing pages y micrositios para campañas publicitarias, optimizando la conversión de usuarios.",
          "Asesoré a clientes sobre buenas prácticas de desarrollo web y tendencias tecnológicas.",
        ],
        remote: "Remoto",
        type: contractTypes.freelance,
      },
      {
        jobTitle: "Desarrollador Full Stack",
        company: "ARIADNA COMMUNICATIONS GROUP",
        dates: "Julio 2018 - Diciembre 2021",
        experience: [
          "Desarrollé interfaces de usuario interactivas, mejorando la experiencia del usuario.",
          "Colaboré con diseñadores y desarrolladores back-end para implementar soluciones web eficientes y escalables.",
          "Optimicé el rendimiento de aplicaciones web, reduciendo los tiempos de carga.",
          "Lideré la migración de sitios web a tecnologías más modernas, aumentando la velocidad y seguridad.",
          "Capacité a nuevos miembros del equipo en buenas prácticas de desarrollo front-end.",
        ],
        remote: "Híbrido",
        type: contractTypes.fullTime,
      },
    ],
  },
  skills: {
    title: "Habilidades",
    technicalSkills: {
      title: "Habilidades Técnicas",
      items: [...skillsTechnical],
    },
    // softSkills: {
    //   title: "Habilidades Blandas",
    //   items: [
    //     "Comunicación efectiva",
    //     "Trabajo en equipo",
    //     "Adaptabilidad",
    //     "Resolución de problemas",
    //     "Gestión del tiempo",
    //     "Pensamiento crítico",
    //     "Liderazgo",
    //     "Empatía",
    //     "Atención al detalle",
    //     "Curiosidad y aprendizaje continuo",
    //   ],
    // },
  },
  education: {
    title: "Educación",
    institutions: [
      {
        title: "SENA, Manizales, Caldas",
        description:
          "Analista y Desarrollador de Sistemas de Información, Sistemas de Información, Dic. 2018",
      },
    ],
    otherKnowledge: {
      title: "Otros Conocimientos",
      items: [
        "Figma",
        "Photoshop",
        "Illustrator",
        "Adobe XD",
        "Spark Art Studio",
        "Scrum Master",
        "Experiencia de Usuario UX/UI",
      ],
    },
  },
  references: {
    title: "Referencias",
    reference: [
      {
        name: "Dahiana Ceballos",
        jobTitle: "Community Manager",
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
    { item: "Inglés", percentage: 50 },
    { item: "Español", percentage: 90 },
  ],
};
