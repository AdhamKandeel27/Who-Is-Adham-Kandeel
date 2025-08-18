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

const SkillsComponent = (props) => {
  return (
    <div className="skills-grid">
      <div
        key={props.name}
        className={`skill-card ${props.name.toLowerCase()}`}
      >
        <div className="skill-icon">
          <props.icon aria-hidden="true" size={50} color={props.color} />
        </div>
        <span className="skill-label">{props.name}</span>
      </div>
    </div>
  );
};

export default SkillsComponent;
