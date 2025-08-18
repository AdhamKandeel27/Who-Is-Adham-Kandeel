import React from "react";
import BannerTitle from "../components/bannerTitle/BannerTitle";
import vertex04 from "../assets/vertex_padel_racket.png";
import surfboard from "../assets/surfboard.png";
import guitar from "../assets/guitar.png";
import ImageAndLabel from "../components/imageWithLabel/ImageAndLabel";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-left-container">
        <div className="padel-container">
          <ImageAndLabel imgSrc={vertex04} imgLabel="Padel Tennis" />
        </div>
        <div className="surfing-container">
          <ImageAndLabel imgSrc={surfboard} imgLabel="Surfing" />
        </div>
      </div>
      <div className="about-middle-container">
        <BannerTitle title="About" />
        <div className="about-me-text">
          <p>
            Hi, I’m <strong>Adham Kandeel</strong>, a passionate{" "}
            <strong>Full-Stack Engineer</strong> from Cairo, Egypt. I enjoy
            crafting interactive user experiences with{" "}
            <strong>React and modern frontend tools</strong>. I started my
            career as a software developer in a startup environment, which
            taught me how to move fast, adapt quickly, and take ownership of
            projects. Along the way, I’ve contributed to open-source plugins in
            Sylius, built APIs, and worked with Docker, CI/CD. When I’m not
            coding, I love exploring surfing the Mediterranean in North Coast,
            Egypt and Padel 🏄‍♂️.
          </p>
        </div>
      </div>
      <div className="about-right-container">
        <div className="padel-container">
          <ImageAndLabel imgSrc={vertex04} imgLabel="Padel Tennis" />
        </div>
        <div className="surfing-container">
          <ImageAndLabel imgSrc={surfboard} imgLabel="Surfing" />
        </div>
        <div className="guitar-container">
          <ImageAndLabel imgSrc={guitar} imgLabel="Playing The Guitar" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
