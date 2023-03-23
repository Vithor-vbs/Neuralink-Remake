import React from "react";
import "./InfoSection.css";
import redThumb from "./img/red-desktop-thumbnail.png";
import greenThumb from "./img/green-desktop-thumbnail.png";
import blueThumb from "./img/blue-desktop-thumbnail.png";

const InfoSection = () => {
  return (
    <section className="info-section-container">
      <div className="div-one info-divs">
        <p className="div-text">Understanding</p>
        <p className="div-text subtext">the Brain</p>
        <div className="div-img-box">
          <img src={redThumb} className="div-img1" alt="brain image" />
        </div>
        <div className="info-bottom info-1">
          <span>Science</span>
          <ion-icon className="" name="arrow-forward-outline"></ion-icon>
        </div>
      </div>
      <div className="div-two info-divs">
        <p className="div-text num2">Interfacing</p>
        <p className="div-text subtext">with the Brain</p>
        <div className="div-img-box">
          <img src={blueThumb} className="div-img2" alt="genetic statistics" />
        </div>
        <p className="info-bottom info-2">
          <span>Approach</span>
          <ion-icon
            className="arrow-icon"
            name="arrow-forward-outline"
          ></ion-icon>
        </p>
      </div>
      <div className="div-three info-divs">
        <p className="div-text num3">Engineering</p>
        <p className="div-text subtext">with the Brain</p>
        <div className="div-img-box">
          <img src={greenThumb} className="div-img3" alt="figured brain" />
        </div>
        <p className="info-bottom info-3">
          <span>Applications</span>
          <ion-icon
            className="arrow-icon"
            name="arrow-forward-outline"
          ></ion-icon>
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
