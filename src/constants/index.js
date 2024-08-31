import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer Trainee",
    company_name: "Intel Corporation (Intel Unnati Training Program 2024)",
    // company_website: "https://www.nickelfox.com/",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "May 2024 -June 2024",
    points: [
      "Managed project scope, objectives, and deliverables for 2D grid mapping using an overhead camera with Python, TensorFlow, AI, and IoT in the Robot Operating System (ROS) framework in Linux",
      "Collaborating with cross-functional teams including designers, Technical Mentor, and other team to develope this project.",
    ],
  },
  {
    title: "Salesforce Administration Trainee",
    company_name: "PWC CTDP 2.0 (Cloud Technology Development Programme 2024)",
    // company_website: "https://newgensoft.com/home-india/",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "May 2024 - June 2024",
    points: [
      "Completed training on Salesforce platform, covering Configuration and Setup, Sales and Marketing (Customer Relation management), Service and Support (Service Cloud), Productivity and Collaboration, Data and Analytics (Reports, Dashboards), and Automation (Workflows, Flows)",
    ],
  },
];

const projects = [
  {
    name: "Aptihealth Web",
    description:
      "Revolutionizing mental healthcare in New York State with a user-friendly platform for personalized therapy and progress tracking. Provides the digital gateway to comprehensive behavioral healthcare.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://www.aptihealth.com/",
  },
  {
    name: "Spinex Pain Management Web",
    description:
      "Designed and developed the Spinex Pain Management website with automated appointment scheduling and push notifications. The user-friendly, mobile-responsive design improves patient interactions and clinic efficiency.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://spinexpainmanagement.com/",
  },
  {
    name: "Zeal Web",
    description:
      "The Zeal website elevates the experience of enjoying activities with trusted friends, fostering connections and making every interaction exciting.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://getzeal.co/",
  },
  {
    name: "Kavya Travel Point Web",
    description:
      "developed the Kavyatravel website, featuring integrated call automation and meeting scheduling. It allows tourists to create and customize their itineraries based on individual preferences, enhancing their travel planning experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp,
    hosted_link:
      "https://kavyatravel.com/",
  },
  {
    name: "Why WhatsApp Redesigned Its UX | Blog",
    description:
      "Analyzed WhatsApp's recent UI redesign, highlighting the shift to a Bottom Navigation bar for better accessibility. This update makes key features like Communities more visible and reachable, improving user interaction on taller screens while keeping familiar navigation.",
    tags: [
      {
        name: "User Interface",
        color: "blue-text-gradient",
      },
      {
        name: "User Experience",
        color: "green-text-gradient",
      },
      {
        name: "Research",
        color: "pink-text-gradient",
      },
    ],
    image: rollWeb,
    hosted_link: "https://medium.com/@satapathy2003/why-whatsapp-redesigned-its-ux-9aa96ce5f1c9",
  },
  {
    name: "Flight Fare Prediction System | Machine Learning",
    description:
      "Developed a flight fare prediction system using machine learning with a Random Forest model. The system integrates real-time flight tracking and incorporates hyperparameter tuning to enhance model performance",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: rollApp,
    // hosted_link:
    //   "https://play.google.com/store/apps/details?id=com.roll&hl=en_GB",
  },
];

const personalInfo = {
  name: "Piyush",
  fullName: "Piyush Ranjan Satapathy",
  email: "satapathy2003@gmail.com",
  role: "Software Developer",
  about: `I'm Piyush Ranjan Satapathy, a versatile software developer with a strong foundation in languages like Python, C++, C, HTML, CSS, and JavaScript, with expertise in React.js. Along with my technical skills, I bring a creative edge with UI/UX design proficiency, using tools like Figma to deliver intuitive and user-centered designs. My experience extends to database management with SQL, data science tools for visualization and analysis, and end-to-end software development through the Software Development Life Cycle (SDLC).

In addition to my technical capabilities, I excel in event management, problem-solving, analytical thinking, networking, and project management. I’m passionate about collaborating on projects that blend creativity and technology to solve real-world problems. Let’s work together to bring your vision to life!

`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1g435phnI42yuHtJRKV7ZFggnvhyCqcX0/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/piyushrsatapathy/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/Alfa-Satapathy",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
