import React from "react";
import "./HeroCta.css";

import "./HeroCta.css";
const HeroCta = () => {
  return (
    <div className="hero-cta-box">
      <div className="aux-cta-box">
        <a href="#" className="global-link link1">
          <span>Join the Team</span>
        </a>
        <span className="arrow-icon">
          <ion-icon className="" name="arrow-forward-outline"></ion-icon>
        </span>
      </div>
      <div className="aux-cta-box">
        <a href="#" className="global-link link1">
          <span>Watch the update</span>
        </a>
        <span className="arrow-icon">
          <ion-icon className="" name="arrow-forward-outline"></ion-icon>
        </span>
      </div>
    </div>
  );
};

export default HeroCta;
