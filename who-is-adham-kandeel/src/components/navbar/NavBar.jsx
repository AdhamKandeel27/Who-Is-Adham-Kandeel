import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  /*   const linkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " active" : "");
 */
  return (
    /*     <nav className="navbar bg-none">
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/home" className={linkClass} end>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blog" className={linkClass}>
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
 */
    <>
      <nav className="navbar-container">
        <ul className="nav-links-container">
          <li>
            <NavLink to="home" className="nav-item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="about" className="nav-item">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="projects" className="nav-item">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="skills" className="nav-item">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="contact" className="nav-item">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
