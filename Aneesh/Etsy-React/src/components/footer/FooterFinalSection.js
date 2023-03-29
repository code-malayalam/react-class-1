import React from "react";
import './FooterFinalSection.css'

function FooterFinalSection() {
  return (
    <div className="footer-final-section-bg">
      <div className="footer-final-section">
        <a href="" className="footer-regions">
          <span className="world-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12,2A10,10,0,1,0,22,12,10.012,10.012,0,0,0,12,2ZM9,18.883v0.528A7.938,7.938,0,0,1,4.06,11.06l3.385,3.385a2.967,2.967,0,0,0,1.649,4.4ZM17.5,15a2.509,2.509,0,0,0,.5-0.05V15a0.992,0.992,0,0,0,.927.985A8,8,0,0,1,12,20c-0.216,0-.427-0.016-0.639-0.032l1.254-2.5-0.015.006A2.968,2.968,0,0,0,13,16a2.988,2.988,0,0,0-5-2.221V11H9a1,1,0,0,0,1-1V9a1,1,0,0,0,1-1,1,1,0,0,0,0-2H6.726A7.9,7.9,0,0,1,14,4.263V6a1,1,0,0,0,2,0V5.082a8.047,8.047,0,0,1,2,1.649V7H17a1,1,0,0,0,0,2h2.411a7.941,7.941,0,0,1,.326,1H17a2.556,2.556,0,0,0-2,2.5A2.5,2.5,0,0,0,17.5,15Z"></path>
            </svg>
          </span>
          <span className="region-text">
            &nbsp; India &nbsp; | &nbsp; English (UK) &nbsp; | &nbsp; ₹ (INR)
          </span>
        </a>
        <div className="footer-policies">
          <div className="etsy-inc">© 2023 Etsy, Inc.</div>
          <ul className="footer-terms-list">
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Interest-based ads</a>
            </li>
            <li>
              <a href="">Regions</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default FooterFinalSection;
