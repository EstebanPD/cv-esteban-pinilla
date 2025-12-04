import {
  contractTypes,
  linkedinProfile,
  skillsTechnical,
} from "../constants/constant";

const otherTexts = {
  jobTitle: "Full Stack Developer",
  remote: "Remote",
  hybrid: "Hybrid",
  studying: "Studying",
};

export const CV_INFO_EN = {
  actions: {
    text: "Change language",
    es: "Spanish",
    en: "English",
    download: "Download",
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
    title: "Professional Profile",
    description:
      "Full Stack Developer with more than 7 years of experience designing, developing, and optimizing high-performance web applications using modern technologies such as React, Next.js, Node.js, and TypeScript. I specialize in building scalable front-end architectures, integrating complex APIs, improving SEO performance, and enhancing user experience through clean, maintainable code. I have a strong ability to translate business requirements into effective technical solutions, collaborating with cross-functional teams in Agile environments and leading feature development from planning to deployment. Highly adaptable, detail-oriented, and committed to continuous improvement, automation, and best development practices, I focus on delivering reliable, efficient, and meaningful digital products that contribute directly to organizational growth and user satisfaction.",
  },
  workExperience: {
    title: "Work Experience",
    experience: [
      {
        jobTitle: otherTexts.jobTitle,
        company: "MAGNETO",
        dates: "December 2021 - Present",
        experience: [
          "Led web development projects from conceptualization to implementation, ensuring customer satisfaction.",
          "Developed web applications using modern frameworks like React and Next.",
          "Implemented best development practices, reducing delivery time by 20%.",
          "Collaborated with multidisciplinary teams to create innovative solutions that meet client needs.",
          "Integrated third-party APIs to enhance the functionality of applications.",
          "Implemented SEO practices, increasing organic traffic by 20%.",
        ],
        remote: otherTexts.remote,
        type: contractTypes.fullTime,
      },
      {
        jobTitle: otherTexts.jobTitle,
        company: "DDB WORLDWIDE",
        dates: "February 2023 - April 2023",
        experience: [
          "Developed custom animated filters for Instagram using augmented reality technologies.",
          "Collaborated with the creative team to translate marketing concepts into engaging and interactive social media experiences.",
          "Ensured optimization and performance of filters across various mobile devices, maintaining visual quality and smooth animation.",
        ],
        remote: otherTexts.remote,
        type: contractTypes.freelance,
      },
      {
        jobTitle: otherTexts.jobTitle,
        company: "CEINMER",
        dates: "April 2022 - March 2023",
        experience: [
          "Implemented responsive design solutions that improved accessibility and usability on mobile devices.",
          "Resolved complex code issues, reducing production errors by 15%.",
          "Developed reusable components in React to enhance the development team's efficiency.",
        ],
        remote: otherTexts.remote,
        type: contractTypes.freelance,
      },
      {
        jobTitle: otherTexts.jobTitle,
        company: "EMERGIA",
        dates: "September 2022 - October 2022",
        experience: [
          "Developed landing pages and microsites for advertising campaigns, optimizing user conversion.",
          "Advised clients on best web development practices and technology trends.",
        ],
        remote: otherTexts.remote,
        type: contractTypes.freelance,
      },
      {
        jobTitle: otherTexts.jobTitle,
        company: "ARIADNA COMMUNICATIONS GROUP",
        dates: "July 2018 - December 2021",
        experience: [
          "Developed interactive user interfaces, improving user experience.",
          "Collaborated with designers and back-end developers to implement efficient and scalable web solutions.",
          "Optimized web application performance, reducing load times.",
          "Led the migration of websites to more modern technologies, increasing speed and security.",
          "Trained new team members in front-end development best practices.",
        ],
        remote: otherTexts.hybrid,
        type: contractTypes.fullTime,
      },
    ],
  },
  skills: {
    title: "Skills",
    technicalSkills: {
      title: "Technical Skills",
      items: [...skillsTechnical],
    },
    // softSkills: {
    //   title: "Soft Skills",
    //   items: [
    //     "Effective Communication",
    //     "Teamwork",
    //     "Adaptability",
    //     "Problem Solving",
    //     "Time Management",
    //     "Critical Thinking",
    //     "Leadership",
    //     "Empathy",
    //     "Attention to Detail",
    //     "Curiosity and Continuous Learning",
    //   ],
    // },
  },
  education: {
    title: "Education",
    institutions: [
      {
        title: "SENA, Manizales, Caldas",
        description:
          "Information Systems Analyst and Developer, Information Systems, Dec. 2018",
      },
    ],
    otherKnowledge: {
      title: "Other Knowledge",
      items: [
        "Figma",
        "Photoshop",
        "Illustrator",
        "Adobe XD",
        "Spark Art Studio",
        "Scrum Master",
        "User Experience UX/UI",
      ],
    },
  },
  references: {
    title: "References",
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
    { item: "English", percentage: 50 },
    { item: "Spanish", percentage: 90 },
  ],
};
