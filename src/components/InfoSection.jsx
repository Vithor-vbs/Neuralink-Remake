import React from "react";
import "./InfoSection.css";
import redThumb from "./img/red-desktop-thumbnail.png";
import greenThumb from "./img/green-desktop-thumbnail.png";
import blueThumb from "./img/blue-desktop-thumbnail.png";

const InfoSection = () => {
  return (
    <section className="info-section-container">
      <div className="div-one info-divs">
        <p className="div-text">Understanding The Brain</p>
        <div className="div-img-box">
          <img src={redThumb} className="div-img1" alt="brain image" />
        </div>
      </div>
      <div className="div-two info-divs">
        <p className="div-text num2">Interfacing with the brain</p>
        <div className="div-img-box">
          <img src={blueThumb} className="div-img2" alt="genetic statistics" />
        </div>
      </div>
      <div className="div-three info-divs">
        <p className="div-text num3">Engineering with the brain</p>
        <div className="div-img-box">
          <img src={greenThumb} className="div-img3" alt="figured brain" />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
