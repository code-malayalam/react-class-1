import React, { useState } from "react";
import MySvg from "../../Assets/chevron-down.svg";

function FooterAboutSection() {

    const [dropdown, setDropDown] = useState(false)

    const handleChange = () => {
        setDropDown(current => !current)
    }

  return (
    <div className={`footer-shop-category ${dropdown ? "show" : ""}`}>
      <button className="shop-btn" onClick={handleChange}>
        About
        <img src={MySvg} alt="" className="chevron-down-btn" />
      </button>
      <ul className="shop-list">
        <li>
          <a href="">Etsy, Inc.</a>
        </li>
        <li>
          <a href="">Policies</a>
        </li>
        <li>
          <a href="">Investors</a>
        </li>
        <li>
          <a href="">Careers</a>
        </li>
        <li>
          <a href="">Press</a>
        </li>
        <li>
          <a href="">Impact</a>
        </li>
        <li>
          <a href="">Legal imprint</a>
        </li>
      </ul>
    </div>
  );
}

export default FooterAboutSection;
