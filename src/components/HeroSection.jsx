import React from "react";
import HeroCta from "./HeroCta";
import HeroNav from "./HeroNav";
import "./HeroSection.css";
import heroImg from "./img/hero-img.png";

const HeroSection = () => {
  return (
    <section className="hero-Container">
      <div className="subordinate">
        <HeroNav />
        <div className="hero-content-box">
          <h1 className="hero-header">Breakthrough Technology for the Brain</h1>
          <div className="hero-img-box"></div>
        </div>
      </div>
      <HeroCta />
    </section>
  );
};

export default HeroSection;
