import images from "./images";

interface About {
  title: string;
  description: string;
  imgUrl: string;
}

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
