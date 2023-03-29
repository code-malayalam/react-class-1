import React, { useState } from "react";
import MySvg from "../../Assets/chevron-down.svg";
import EtsyDownload from '../../svgs/EtsyDownload.svg'
import InstagramLogo from '../../svgs/InstagramLogo.svg'
import FacebookLogo from '../../svgs/FacebookLogo.svg'
import PinterestLogo from '../../svgs/PinterestLogo.svg'
import TwitterLogo from  '../../svgs/TwitterLogo.svg'
import YoutubeLogo from  '../../svgs/YoutubeLogo.svg'

function FooterHelpSection() {

    const [dropdown, setDropDown] = useState(true)

    const handleChange = () => {
        setDropDown(current => !current)
    }


  return (
    <div className={`footer-shop-category ${dropdown ? "show" : ""}`}>
      <button className="shop-btn" onClick={handleChange}>
        Help
        <img src={MySvg} alt="" className="chevron-down-btn" />
      </button>
      <ul className="shop-list">
        <li>
          <a href="">Help Centre</a>
        </li>
        <li>
          <a href="">Privacy settings</a>
        </li>
      </ul>
      <div className="etsy-social">
        <a href="" className="etsy-download">
          <span className="etsy-download-logo">
            <img src={EtsyDownload} />
          </span>
          <span className="etsy-download-text">Download the Etsy App</span>
        </a>
        <div className="etsy-social-icons">
          <span className="etsy-social-logo">
            <img src={InstagramLogo} />
          </span>
          <span className="etsy-social-logo">
            <img src={FacebookLogo} />
          </span>
          <span className="etsy-social-logo">
            <img src={PinterestLogo} />
          </span>
          <span className="etsy-social-logo">
            <img src={TwitterLogo} />
          </span>
          <span className="etsy-social-logo">
            <img src={YoutubeLogo} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default FooterHelpSection;
