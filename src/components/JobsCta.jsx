import React from "react";
import "./JobsCta.css";
import jobImg from "./img/homepage-footer.jpg";

const JobsCta = () => {
  return (
    <section className="job-container">
      <div className="job-container-box">
        <div className="job-text">
          <div className="job-header-box">
            <p className="job-header">Create the</p>
            <p className="job-subHeader">Future with Us</p>
          </div>
          <p className="job-text">
            Every day we’re building better tools for communicating with the
            brain. With the right team, the applications for this technology are
            limitless.
          </p>
        </div>
      </div>
      <div className="jobs-cta-box">
        <a href="#" className="jobs-cta">
          <span>reach out</span>
          <ion-icon
            className="arrow-icon arrow-cta"
            name="arrow-forward-outline"
          ></ion-icon>
        </a>
      </div>
    </section>
  );
};

export default JobsCta;
