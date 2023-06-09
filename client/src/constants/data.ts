import images from "./images";

interface About {
  title: string;
  description: string;
  imgUrl: string;
}

interface WorkData {
  title: string;
  description: string;
  projectLink: string;
  codeLink: string;
  imgUrl: string;
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
