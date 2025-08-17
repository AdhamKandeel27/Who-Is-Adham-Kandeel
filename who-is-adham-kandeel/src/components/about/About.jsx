import React from "react";
import "./about.css";
import BannerTitle from "../bannerTitle/BannerTitle";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-me-banner">
        <BannerTitle title="about me"/>
      </div>
      <div className="about-me-text">
        <p>
          Hi, I’m <strong>Adham Kandeel</strong>, a passionate{" "}
          <strong>Full-Stack Engineer</strong> from Cairo, Egypt. I specialize
          in building scalable and maintainable web applications using PHP
          (Symfony, Sylius) on the backend, and I enjoy crafting interactive
          user experiences with <strong>React and modern frontend tools</strong>
          . I started my career as a software developer in a startup
          environment, which taught me how to move fast, adapt quickly, and take
          ownership of projects. Along the way, I’ve contributed to open-source
          plugins in Sylius, built APIs, and worked with Docker, CI/CD.
          Currently, I’m focused on improving my skills in Next.js, Supabase,
          and cloud integrations to broaden my full-stack capabilities. When
          I’m not coding, I love exploring creative projects like surfing the Mediterranean in North Coast, Egypt 🏄‍♂️.
        </p>
      </div>
    </div>
  );
};

export default About;
