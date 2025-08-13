import React from 'react'
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    
  const linkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " active" : "");

  return (
    <nav className="navbar bg-light">
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
  );
}

export default NavBar