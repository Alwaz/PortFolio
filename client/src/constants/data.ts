import images from "./images";

interface About {
  title: string;
  description: string;
  imgUrl: string;
}

interface Skills {
  name: string;
  bgColor?: string;
  icon: string;
}

interface WorkData extends About {
  projectLink: string;
  codeLink: string;
}

interface Experience {
  year: string;
  works: Work[];
}

interface Work {
  name: string;
  company: string;
  desc: string;
}

const projectLinks = {
  project01: "https://nikestorecomerce.netlify.app/",
  project02: "https://jsjobsearching.netlify.app/",
  project03:
    "https://61ed4a61c8634e9306ce10d8--netflix-clone-alwaz.netlify.app/",
  project04:
    "https://61fd8a4bd52e24008a043c76--fervent-sinoussi-eece7f.netlify.app/",
  project05: "https://github.com/Alwaz/react-covid-tracker-2-",
  project06: "https://github.com/Alwaz/react-eCommerce",
};

const codeLinks = {
  project01: "https://github.com/Alwaz/e-comerce-front-end",
  project02: "https://github.com/Alwaz/Job-Searching-App",
  project03: "https://github.com/Alwaz/netflix-clone",
  project04: "https://github.com/Alwaz/TRVL",
  project05: "https://github.com/Alwaz/react-covid-tracker-2-",
  project06: "https://github.com/Alwaz/react-eCommerce",
};

const blogLinks = {
  blog01:
    "https://enlear.academy/react-hooks-how-usereducer-hook-works-e0b8532dae40",
  blog02: "https://medium.com/@alwazkazi3/merge-sort-f0935ebf6262",
  blog03:
    "https://alwazkazi3.medium.com/javascript-promises-simply-explained-ec1039165615",
  blog04: "https://medium.com/@alwazkazi3/javascript-strict-mode-81cf17a21f53",
  blog05: "https://alwazkazi3.medium.com/linked-lists-whats-that-3819943ee8d2",
  blog06:
    "https://alwazkazi3.medium.com/creating-a-weather-app-using-api-javascript-4d7bb26bbc92",
  blog07: "https://medium.com/@alwazkazi3/github-collaborations-f8dd9e9f8735",
  blog08:
    "https://medium.com/nerd-for-tech/how-to-modify-tuples-in-python-the-work-arounds-9213a2df21fe",
};

export const workData: WorkData[] = [
  {
    title: "Nike Store eCommerce Landing page",
    description:
      "Fully responsive eCommerce landing page built with HTML,CSS and JavaScript.",
    projectLink: projectLinks.project01,
    codeLink: codeLinks.project01,
    imgUrl: images.project01,
  },
  {
    title: "Job listing website",
    description:
      "A Job listing website built with HTML, CSS, JavaScript. With searching and filtering functionalities.",
    projectLink: projectLinks.project02,
    codeLink: codeLinks.project02,
    imgUrl: images.project02,
  },
  {
    title: "Netflix Clone",
    description:
      "A clone of Netlix built using ReactJS. With realtime fetching of movies using API.",
    projectLink: projectLinks.project03,
    codeLink: codeLinks.project03,
    imgUrl: images.project03,
  },
  {
    title: "TRVL",
    description:
      "An animated landing page for a travel agency, utilized React and react-router",
    projectLink: projectLinks.project04,
    codeLink: codeLinks.project04,
    imgUrl: images.project04,
  },
  {
    title: "Covid-19 Tracker App",
    description:
      "Covid Tracker built using reactJS that shows Live Cases, Recoveries, Deaths by retrieving real time data from disease.sh Api",
    projectLink: projectLinks.project05,
    codeLink: codeLinks.project05,
    imgUrl: images.project05,
  },
  {
    title: "Full Stack e-Commerce website",
    description:
      "Developed a full-stack e-commerce website using reactJs and react router, utilzed Context API for state management and Integrated stripe as payment gateway.",
    projectLink: projectLinks.project06,
    codeLink: codeLinks.project06,
    imgUrl: images.project06,
  },
];

export const navbarItems: string[] = [
  "home",
  "about",
  "work",
  "skills",
  "blogs",
  "contact",
];

export const skillsArr: string[] = [
  images.react,
  images.redux,
  images.typescript,
];

export const abouts: About[] = [
  {
    title: "Full Stack Developer (MERN)",
    description: `Empowering Applications with MERN Stack Magic - I'm an aspiring Full Stack Developer with a strong focus on front-end development.`,
    imgUrl: images.about04,
  },
  {
    title: "Front end Developer",
    description: `Crafting Engaging Web Experiences - As a dedicated front-end developer, I specialize in creating dynamic and visually stunning ReactJS applications.`,
    imgUrl: images.about02,
  },
  {
    title: "Mobile app Developer",
    description: `Transforming Concepts into Intuitive Mobile Experiences - From wireframes to polished applications, I'm a mobile app developer skilled in React Native.`,
    imgUrl: images.about01,
  },
  {
    title: "Problem Solver",
    description: `I thrive on problem-solving through code, utilizing my skills to create impactful solutions.`,
    imgUrl: images.about03,
  },
];

export const blogs = [
  {
    title: "React Hooks: How useReducer Hook Works",
    description: `What is useReducer Hook and How It Works...`,
    imgUrl: images.blog01,
    link: blogLinks.blog01,
  },
  {
    title: "Merge Sort",
    description: `Merge sort is one of the most important sorting technique that works on Divide and...`,
    imgUrl: images.blog02,
    link: blogLinks.blog02,
  },
  {
    title: "JavaScript “Promises” — Simply Explained",
    description: `JavaScript promises are same as the promises we make in real life...`,
    imgUrl: images.blog03,
    link: blogLinks.blog03,
  },
  {
    title: `JavaScript ‘Strict Mode’.`,
    description: `Have you ever seen someone’s code and noticed ‘use strict’...`,
    imgUrl: images.blog04,
    link: blogLinks.blog04,
  },
  {
    title: "Linked Lists — what’s that?",
    description: `Hey Dear Readers…`,
    imgUrl: images.blog05,
    link: blogLinks.blog05,
  },
  {
    title: `Create a Weather App (JS)`,
    description: `This is my favorite project so far because this taught me...`,
    imgUrl: images.blog06,
    link: blogLinks.blog06,
  },
  {
    title: `Github Collaboration`,
    description: `Collaborating on GitHub can be hard when doing for the first time but...`,
    imgUrl: images.blog07,
    link: blogLinks.blog07,
  },
  {
    title: `How to Modify (the imutable) tuples in Python`,
    description: `Just like List and dictionaries Tuple is another data type in...`,
    imgUrl: images.blog08,
    link: blogLinks.blog08,
  },
];

export const skills: Skills[] = [
  { name: "React", bgColor: "#edf2f8", icon: images.react },
  { name: "React Native", bgColor: "#edf2f8", icon: images.reactnative },
  { name: "Redux", bgColor: "#edf2f8", icon: images.redux },
  { name: "JavaScript", bgColor: "#edf2f8", icon: images.javascript },
  { name: "TypeScript", bgColor: "#edf2f8", icon: images.typescript },
  { name: "NodeJs", bgColor: "#edf2f8", icon: images.node },
  { name: "Firebase", bgColor: "#edf2f8", icon: images.firebase },
  { name: "MongoDB", bgColor: "#edf2f8", icon: images.mongodb },
  { name: "Git", bgColor: "#edf2f8", icon: images.git },
  { name: "MUI", bgColor: "#edf2f8", icon: images.mu5 },
  { name: "Saas", bgColor: "#edf2f8", icon: images.sass },
  { name: "CSS", bgColor: "#edf2f8", icon: images.css },
  { name: "Tailwind", bgColor: "#edf2f8", icon: images.tailwind },
  {
    name: "Styled Components",
    bgColor: "#edf2f8",
    icon: images.styledcomponents,
  },
];

export const experiences: Experience[] = [
  {
    year: `May 2022 – Jun 2023`,
    works: [
      {
        name: "Full Stack Software Engineer",
        company: "Creditbook",
        desc: `Collaborated with cross-functional teams to develop features to improve financial outcomes of entrepreneurs across the country. Additionally,
         I streamlined company processes by creating and maintaining internal products, 
         resulting in significant time and effort savings. Optimized our core product, ensuring seamless performance and enhanced overall 
         user experience. Also implemented automation for the contract generation process, which led to a remarkable 99% reduction in contract generation time. Furthermore, 
         I worked closely with the customer support team, gathering insights on reported bugs and providing timely resolutions to enhance the user experience.`,
      },
    ],
  },
  {
    year: `Oct 2021 – Nov 2021`,
    works: [
      {
        name: "Full Stack JavaScript Developer",
        company: "DevScripts",
        desc: `Member of the core team in an early-stage startup, I played a pivotal role in collaborating with the front-end team to develop a website for our flagship event. Leveraging my expertise in HTML, CSS, and JavaScript, I contributed to the front-end development process. By incorporating updated trends and implementing innovative features, I successfully enhanced the product, leading to a remarkable 34% increase in user acquisition.`,
      },
    ],
  },
  {
    year: `Jul 2021 – Dec 2021`,
    works: [
      {
        name: "ReactJs Developer",
        company: "DevNation",
        desc: `I collaborated with a team of developers to build a platform for startup DevNation.
         utilised Redux for effective state management,
        enhancing application performance. Integrating RESTful APIs, to fetched and handle dynamic data on the web. 
        I tackled complex technical issues and optimized application performance using problem-solving skills. 
        I also stayed updated with the latest React.js trends and best practices, incorporating them into our development processes.`,
      },
    ],
  },
  {
    year: `Feb 2021 – Jun 2021`,
    works: [
      {
        name: "Web Developer Fellow",
        company: "Jadu Jobs",
        desc: `Under the guidance of highly skilled mentors, I acquired a foundation of MERN stack. I actively collaborated with fellow developers on group projects, honing my teamwork skills and utilizing GitHub for effective version control.`,
      },
    ],
  },
  {
    year: `Jan 2021 – Feb 2021`,
    works: [
      {
        name: "Front end developer Intern",
        company: "Interns Pakistan",
        desc: `Through self-paced learning, I mastered the fundamentals of frontend development, including semantic HTML, CSS, and core JavaScript (ECMAScript). I also gained hands-on experience by building projects using popular frontend frameworks and libraries such as Bootstrap and jQuery.`,
      },
    ],
  },
];
