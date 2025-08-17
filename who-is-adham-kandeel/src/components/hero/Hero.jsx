import React from "react";
import "./hero.css";
import AdhamPortfolio from "../../assets/Adham Portfolio.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-section-container">
      <div className="hero-section-left">
        <div className="hero-section-left-inner">
          <div className="introduction">
            <p>Hi, I am</p>
            <h1>Adham</h1>
            <h3>Full-Stack Engineer</h3>
          </div>
          <div className="social-links">
            <a href="https://github.com/AdhamKandeel27">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/adhamkandeel">
              <FaLinkedin size={30} />
            </a>
            <a href="mailto:adhamhkandeel27@gmail.com">
              <IoIosMail size={30} />
            </a>
          </div>
          <div className="know-me-more">
            <button onClick={()=>navigate("../about")}>Know me more</button>
          </div>
        </div>
      </div>
      <div className="hero-section-right">
        <img src={AdhamPortfolio} alt="AdhamPortfolio.jpg" />
      </div>
    </div>
  );
};

export default Hero;
