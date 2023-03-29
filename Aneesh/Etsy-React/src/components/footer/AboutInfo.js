import React from "react";
import "./AboutInfo.css";

function AboutInfo() {
  return (
    <>
      <div className="about-info">
        <h3 className="footer-about-header">A community doing good</h3>
        <div className="about-desc">
          Etsy is a global online marketplace, where people come together to
          make, sell, buy and collect unique items. We're also a community
          pushing for positive change for small businesses, people, and the
          planet.
          <span className="about-desc-underline">
            Here are some of the ways we're making a positive impact, together.
          </span>
        </div>
      </div>
      <div className="about-info">
        <h3 className="footer-about-header">Support independent creators</h3>
        <div className="about-desc">
          There's no Etsy warehouse - just millions of people selling the things
          they love. We make the whole process easy, helping you connect
          directly with makers to find something extraordinary.
        </div>
      </div>
      <div className="about-info">
        <h3 className="footer-about-header">Peace of mind</h3>
        <div className="about-desc">
          Your privacy is the highest priority of our dedicated team. And if you
          ever need assistance, we are always ready to step in for support.
        </div>
      </div>
    </>
  );
}

export default AboutInfo;
