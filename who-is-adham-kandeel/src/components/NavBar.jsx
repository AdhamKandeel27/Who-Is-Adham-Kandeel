import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
     ${isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-200"}`;

  return (
    <div className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4">
        <ul className="flex space-x-4 py-4">
          <li>
            <NavLink to="/home" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={navLinkClass}>
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
