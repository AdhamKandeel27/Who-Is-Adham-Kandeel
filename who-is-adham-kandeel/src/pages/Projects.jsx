import React from "react";
import ProjectsCard from "../components/projectsCard/ProjectsCard";
import { projectsArray } from "../js/projects";

const Projects = () => {
  return (
    <div className="project-cards-container">
      {projectsArray.map((proj) => (
        <ProjectsCard key={proj.id} {...proj} />
      ))}
    </div>
  );
};

export default Projects;
