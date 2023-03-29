import React from "react";
import './PoweredSection.css'
import EtsyGlobe from '../../svgs/EtsyGlobe.svg'
import PoweredSVG from '../../svgs/PoweredSVG.svg'

function PoweredSection() {
  return (
    <div className="footer-powered">
      <div className="footer-powered-svg">
        <img src={PoweredSVG} />
      </div>
      <div className="footer-powered-logo">
        <img src={EtsyGlobe} />
      </div>
      <div className="footer-powered-text">
            Etsy is powered by 100% renewable electricity
      </div>
    </div>
  );
}

export default PoweredSection;
