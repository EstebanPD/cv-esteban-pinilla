import { linkedinProfile, skillsTechnical } from "../constants/constant";

const otherTexts = {
  jobTitle: "Front-end Developer",
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
      "I am an information systems analyst and developer with over five years of experience in the development and maintenance of websites. My career includes the efficient management of various technologies and the implementation of innovative solutions to ensure the optimal performance and security of digital platforms. I am characterized by my ability to analyze and solve complex problems, adapting to the specific requirements of each project and always oriented towards continuous improvement and customer satisfaction.",
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
      },
      // {
      //   jobTitle: otherTexts.jobTitle,
      //   company: "DDB WORLDWIDE",
      //   dates: "February 2023 - April 2023",
      //   experience: [
      //     "Developed custom animated filters for Instagram using augmented reality technologies.",
      //     "Collaborated with the creative team to translate marketing concepts into engaging and interactive social media experiences.",
      //     "Ensured optimization and performance of filters across various mobile devices, maintaining visual quality and smooth animation.",
      //   ],
      //   remote: otherTexts.remote,
      // },
      // {
      //   jobTitle: otherTexts.jobTitle,
      //   company: "CEINMER",
      //   dates: "April 2022 - March 2023",
      //   experience: [
      //     "Implemented responsive design solutions that improved accessibility and usability on mobile devices.",
      //     "Resolved complex code issues, reducing production errors by 15%.",
      //     "Developed reusable components in React to enhance the development team's efficiency.",
      //   ],
      //   remote: otherTexts.remote,
      // },
      // {
      //   jobTitle: otherTexts.jobTitle,
      //   company: "EMERGIA",
      //   dates: "September 2022 - October 2022",
      //   experience: [
      //     "Developed landing pages and microsites for advertising campaigns, optimizing user conversion.",
      //     "Advised clients on best web development practices and technology trends.",
      //   ],
      //   remote: otherTexts.remote,
      // },
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
      },
    ],
  },
  skills: {
    title: "Skills",
    technical: {
      title: "Technical",
      items: [...skillsTechnical],
    },
    softSkills: {
      title: "Soft Skills",
      items: [
        "Effective Communication",
        "Teamwork",
        "Adaptability",
        "Problem Solving",
        "Time Management",
        "Critical Thinking",
        "Leadership",
        "Empathy",
        "Attention to Detail",
        "Curiosity and Continuous Learning",
      ],
    },
  },
  education: {
    title: "Education",
    institutions: [
      {
        title: "SENA, Manizales, Caldas",
        description:
          "Information Systems Analyst and Developer, Information Systems, Dec. 2018",
      },
      {
        title: "Politécnico Grancolombiano",
        description: `Software Engineering - ${otherTexts.studying}`,
      },
    ],
    otherKnowledge: {
      title: "Other Knowledge",
      items: [
        { item: "Figma", studying: "" },
        { item: "Photoshop", studying: "" },
        { item: "Illustrator", studying: "" },
        { item: "Adobe XD", studying: "" },
        { item: "Spark Art Studio", studying: "" },
        { item: "Scrum Master", studying: "" },
        { item: "User Experience UX/UI", studying: "" },
        { item: "Flutter", studying: otherTexts.studying },
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
    { item: "English", percentage: 90 },
    { item: "Spanish", percentage: 90 },
  ],
};
