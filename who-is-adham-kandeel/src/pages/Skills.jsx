import React from "react";
import SkillsComponent from "../components/skills/SkillsComponent";
import { usingNowSkillsArray } from "../js/skills";
import BannerTitle from "../components/bannerTitle/BannerTitle";

const Skills = () => {
  return (
    <div className="all-skills-container">
      <div className="skills-banner-container">
        <BannerTitle title="skills" />
      </div>
      <div className="skills-display-container">
        {usingNowSkillsArray.map((skill) => (
          <SkillsComponent {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
