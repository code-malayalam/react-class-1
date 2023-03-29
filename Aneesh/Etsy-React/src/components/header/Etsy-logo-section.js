import React from 'react'
import './Etsy-logo-section.css'
import EtsyLogo from '../../svgs/EtsyLogo.svg'

function EtsyLogoSection() {
  return (
    <div className="etsy-logo">
      <img src={EtsyLogo} />
    </div>
  );
}

export default EtsyLogoSection