import React from "react";

import neuralinkFooter from "./img/neuralink-logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="first-column">
        <a href="#">
          <img
            src={neuralinkFooter}
            alt="logo da neuralink"
            className="footer-logo"
          />
        </a>
        <blockquote className="first-text">
          <p>&copy; Neuralink 2022</p>
          <p>all rights reserved.</p>
        </blockquote>
      </div>
      <div className="second-column">
        <div className="footer-links-box">
          <a href="#" className="footer-links">
            Science
          </a>
          <a href="#" className="footer-links">
            Approach
          </a>
          <a href="#" className="footer-links">
            Applications
          </a>
          <a href="#" className="footer-links">
            About us
          </a>
          <a href="#" className="footer-links">
            Careers
          </a>
          <a href="#" className="footer-links">
            Blog
          </a>
        </div>
      </div>
      <div className="third-column">
        <p>info@Neuralink.com</p>
        <p>@Neuralink</p>
      </div>
    </section>
  );
};

export default Footer;
