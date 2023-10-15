import React from "react";
import "./style.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo"></div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#services">reports</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
