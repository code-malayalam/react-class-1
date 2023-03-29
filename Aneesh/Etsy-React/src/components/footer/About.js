import React from "react";
import AboutInfo from "./AboutInfo";
import "./About.css";
import AboutSVG from '../../svgs/AboutSVG.svg'

function About() {
  return (
    <div className="about-bg">
      <div className="about">
        <div className="about-span-svg">
          <img src={AboutSVG} />
        </div>
        <div className="about-header">
          <h2>What is Etsy?</h2>
          <a href="">Read our wonderfully weird story</a>
        </div>
        <div className="about-info-container">
          <AboutInfo />
        </div>
        <div className="help-section">
          <p>Have a question? Well, we've got some answers.</p>
          <button className="help-center-btn">Go to Help Center</button>
        </div>
      </div>
    </div>
  );
}

export default About;
