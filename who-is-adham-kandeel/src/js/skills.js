import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaJava,
  FaPython,
  FaDatabase,
  FaReact,
  FaSymfony,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaBootstrap,
  FaMicrosoft,
  FaRegCircle,
} from "react-icons/fa";
import { SiExpress, SiPostman, SiMongodb, SiAxios } from "react-icons/si";
import { LuSprout } from "react-icons/lu";

// Programming Languages
const programmingSkills = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "SQL", icon: FaDatabase, color: "#003B57" },
  { name: "PHP", icon: FaPhp, color: "#777BB4" },
];

// Frameworks & Libraries
const frameworkSkills = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Twig", icon: LuSprout, color: "#68A063" },
  { name: "ASP.NET", icon: FaMicrosoft, color: "#512BD4" },
  { name: "Symfony", icon: FaSymfony, color: "#000000" },

  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
];

// Tools & Platforms
const toolsSkills = [
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "MSSQL", icon: FaDatabase, color: "#CC2927" },
  { name: "Mongoose", icon: SiMongodb, color: "#47A248" },
  { name: "Axios", icon: SiAxios, color: "#5A29E4" },
  { name: "OutSystems", icon: FaRegCircle, color: "#FF2D20" },
];

export const usingNowSkillsArray = [
  ...programmingSkills,
  ...frameworkSkills,
  ...toolsSkills,
];
