import React from "react";
import "./skills.css";
import BannerTitle from "../bannerTitle/BannerTitle";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

const SkillsComponent = () => {
  const usingNowSkillsArray = [
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "SASS", icon: FaSass, color: "#CC6699" },
    { name: "JAVASCRIPT", icon: FaJs, color: "#F7DF1E" },
    { name: "REACT", icon: FaReact, color: "#61DAFB" },
    { name: "BOOTSTRAP", icon: FaBootstrap, color: "#7952B3" },
    { name: "GIT", icon: FaGitAlt, color: "#F05032" },
    { name: "FIGMA", icon: FaFigma, color: "#F24E1E" },
  ];
  return (
    <div className="skills-container">
      <div className="skills-banner-container">
        <BannerTitle title="skills" />
      </div>

      <div className="using-now-container">
        <h3>Using Now:</h3>
        <div className="skills-grid">
          {usingNowSkillsArray.map(({ name, icon: Icon, color }) => (
            <div key={name} className={`skill-card ${name.toLowerCase()}`}>
              <div className="skill-icon">
                <Icon aria-hidden="true" size={50} />
              </div>
              <span className="skill-label">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
