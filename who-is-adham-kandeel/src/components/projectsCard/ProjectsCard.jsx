import React from "react";
import "./projectsCard.css";
import Tag from "../tag/Tag";

const ProjectsCard = (props) => {
  return (
    <div className="project-card-container">
      <div className="project-card-header">
        <h3>{props.name}</h3>
      </div>
      <div className="project-card-subheader">
        <span>
          <Tag title={props.area} bgColor="#e9e9e9" fontColor="black" />
        </span>
        <span>
          <Tag title={props.company} bgColor="#e9e9e9" fontColor="black" />
        </span>
        <span>
          <Tag title={props.timeframe} bgColor="#e9e9e9" fontColor="black" />
        </span>
      </div>
      <div className="project-card-description">
        <ul className="description-list">
          <li className="description-item">
            {props.description}
          </li>
        </ul>
      </div>
      <div className="project-card-tech-stack-tags">
        {props.techStack.map((stack) => (
          <span>
            <Tag
              key={stack}
              title={stack}
              bgColor="#360F5A99"
              fontColor="white"
            />
          </span>
        ))}
      </div>
      <div className="project-card-links"></div>
    </div>
  );
};

export default ProjectsCard;
