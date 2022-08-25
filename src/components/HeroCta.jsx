import React from "react";
import "./HeroCta.css";

import "./HeroCta.css";
const HeroCta = () => {
  return (
    <div className="hero-cta-box">
      <a href="#" className="global-link link1">
        <span>Join the Team</span>
        <ion-icon
          className="arrow-icon arrow-cta"
          name="arrow-forward-outline"
        ></ion-icon>
      </a>
      <a href="#" className="global-link link2">
        <span>Watch the update</span>
        <ion-icon
          className="arrow-icon arrow-cta"
          name="arrow-forward-outline"
        ></ion-icon>
      </a>
    </div>
  );
};

export default HeroCta;
