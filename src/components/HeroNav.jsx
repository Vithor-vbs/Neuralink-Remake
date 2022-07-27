import React from "react";
import "./HeroNav.css";

import neuralinkLogo from "./img/neuralink-logo2.png";

const HeroNav = () => {
  return (
    <nav className="nav-container">
      <a href="#">
        <img
          src={neuralinkLogo}
          className="neuralink-logo"
          alt="neuralink logo"
        />
      </a>
      <div className="nav-links-box">
        <a href="#" className="nav-links">
          Science
        </a>
        <a href="#" className="nav-links">
          Approach
        </a>
        <a href="#" className="nav-links">
          Applications
        </a>
        <a href="#" className="nav-links">
          About us
        </a>
        <a href="#" className="nav-links">
          Careers
        </a>
        <a href="#" className="nav-links">
          Blog
        </a>
      </div>
    </nav>
  );
};

export default HeroNav;
