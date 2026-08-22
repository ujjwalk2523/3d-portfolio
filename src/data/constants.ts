// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
  // New Skills for Ujjwal Kumar
  JAVA = "java",
  SPRINGBOOT = "springboot",
  CPP = "cpp",
  PYTHON = "python",
  SOLIDITY = "solidity",
  ETHEREUM = "ethereum",
  BLOCKCHAIN = "blockchain",
  SQL = "sql",
  ALTERYX = "alteryx",
  FIGMA = "figma",
  UIUX = "uiux",
  DSA = "dsa",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "yeeting code into the DOM since '95, no cap! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "JavaScript's overachieving cousin who's always flexing 💯🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "the internet's granddad, still bussin' fr fr! 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "styling with the ultimate drip, no cap 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: `"use using" 
using use = useUsing("use")`,
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription:
      "the chill pill for your frontend, it hits different! 🟢😌",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "the drama queen of front-end frameworks, and we stan! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "utility classes hitting different fr fr 🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "middlewares go dummy hard, no cap! 🚂💨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "SQL but make it fashion, purr 💅🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "flexin' with that NoSQL drip, respectfully! 💪🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "sliding into those pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "making your code not a whole mess, thank u next 🧹✨",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "package manager said 'I gotchu fam', period! 📦💯",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "your app's ultimate wingman, but watch out, vendor lock-in vibes! 🔥👌",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "the grandpa of CMS, still rocking that cane 🧓👴",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "where 'chmod 777' is the ultimate flex 🔓🙌",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "The best containerization! 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription: "reverse proxy go zoom zoom, sheesh! 🚗💨",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription:
      "always extra, making everything more complicated, period! 🌐👨‍💻",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Google Cloud",
    shortDescription:
      "cloud computing but make it Google vibes, living rent free! ☁️🔥",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Vim",
    shortDescription: "exit? In this economy? Ight, imma head out! 🚪🏃",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "The triangle company, helps you deploy and go touch grass! 🚀🌿",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.JAVA]: {
    id: 26,
    name: "java",
    label: "Java",
    shortDescription: "Write once, debug everywhere — enterprise powerhouse! ☕⚡",
    color: "#f89820",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.SPRINGBOOT]: {
    id: 27,
    name: "springboot",
    label: "Spring Boot",
    shortDescription: "Robust microservices and REST APIs with zero friction! 🍃🚀",
    color: "#6db33f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  [SkillNames.CPP]: {
    id: 28,
    name: "cpp",
    label: "C / C++",
    shortDescription: "Raw speed and pointer magic for competitive programming! ⚡👾",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 29,
    name: "python",
    label: "Python",
    shortDescription: "AI, ML, and automation wizardry in clean syntax! 🐍✨",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.SOLIDITY]: {
    id: 30,
    name: "solidity",
    label: "Solidity",
    shortDescription: "Smart contracts locked in the blockchain forever! 💎⛓️",
    color: "#363636",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
  },
  [SkillNames.ETHEREUM]: {
    id: 31,
    name: "ethereum",
    label: "Ethereum",
    shortDescription: "Decentralized world computer running Web3 magic! 🌐🪙",
    color: "#627eea",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg",
  },
  [SkillNames.BLOCKCHAIN]: {
    id: 32,
    name: "blockchain",
    label: "Blockchain",
    shortDescription: "Trustless ledgers and smart contracts powering the future! 🔗🛡️",
    color: "#f7931a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg",
  },
  [SkillNames.SQL]: {
    id: 33,
    name: "sql",
    label: "SQL",
    shortDescription: "Relational queries that never drop the ACID guarantee! 🗄️📊",
    color: "#00758f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.ALTERYX]: {
    id: 34,
    name: "alteryx",
    label: "Alteryx",
    shortDescription: "Automating complex ETL data workflows with speed! 📈⚙️",
    color: "#004b87",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.FIGMA]: {
    id: 35,
    name: "figma",
    label: "Figma",
    shortDescription: "Crafting pixel-perfect prototypes & slick user experiences! 🎨✨",
    color: "#f24e1e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  [SkillNames.UIUX]: {
    id: 36,
    name: "uiux",
    label: "UI & UX Design",
    shortDescription: "Intuitive interfaces and seamless user journeys! 🪄📐",
    color: "#a259ff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  [SkillNames.DSA]: {
    id: 37,
    name: "dsa",
    label: "Data Structures & Algorithms",
    shortDescription: "Optimizing time and space complexity with clean logic! 🧠⚡",
    color: "#00d2ff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  location?: string;
  description: string[];
  skills: SkillNames[];
  certificateUrl?: string;
  certificateId?: string;
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jul 2025",
    endDate: "Sep 2025",
    title: "AI-ML Virtual Intern",
    company: "Google for Developers — AICTE EduSkills",
    location: "Remote",
    certificateUrl: "/assets/certificates/google-aiml-virtual-internship.pdf",
    certificateId: "08e39e2707f36c2c32e611d1506c2f56",
    description: [
      "Implemented core Machine Learning concepts, data preprocessing pipelines, and predictive modeling workflows.",
      "Explored real-world AI applications and enhanced problem-solving using data-driven approaches.",
      "Engineered machine learning models and evaluated classification & regression performance metrics.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.SQL,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },
  {
    id: 2,
    startDate: "Apr 2025",
    endDate: "Jun 2025",
    title: "Data Science Master Virtual Intern",
    company: "Altair — AICTE EduSkills",
    location: "Remote",
    certificateUrl: "/assets/certificates/altair-data-science-virtual-internship.pdf",
    certificateId: "c1e9ad56f7c651a1f886462b5556c18d",
    description: [
      "Executed end-to-end data science lifecycles, including data cleaning, exploratory data analysis, and statistical modeling.",
      "Applied modern visualization techniques to derive actionable insights from complex datasets.",
      "Utilized data analytics tools to streamline feature engineering and model training processes.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.SQL,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },
  {
    id: 3,
    startDate: "Jan 2025",
    endDate: "Mar 2025",
    title: "Data Analytics Process Automation Virtual Intern",
    company: "Alteryx SparkED — AICTE EduSkills",
    location: "Remote",
    certificateUrl: "/assets/certificates/alteryx-data-analytics-virtual-internship.pdf",
    certificateId: "727cdb0e39cc3c13a33698a7bcb2d564",
    description: [
      "Developed automated ETL pipelines to optimize data cleaning, spatial analysis, and transformation processes.",
      "Gained proficiency in business-centric analytics tools to streamline workflow efficiency and reporting.",
      "Built automated data prep workflows reducing manual processing overhead.",
    ],
    skills: [
      SkillNames.ALTERYX,
      SkillNames.SQL,
      SkillNames.PYTHON,
      SkillNames.GIT,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

