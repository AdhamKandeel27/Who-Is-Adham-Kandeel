import React from "react";
import logo from "../assets/react.svg";

const ProjectsCard = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4"></div>
        <div className="projects-card-wrapper card d-flex">
          <img
            src={logo}
            alt="image"
            className="card-img-top"
            style={{ width: "150px", height: "auto" }}
          />
          <div className="card-body">
            <h5 className="card-title">Project Name</h5>
            <h6 className="card-subtitle">Backend Developer</h6>
            <p className="card-text">This is the projects description</p>
            <span className="badge rounded-pill bg-dark">Primary</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
