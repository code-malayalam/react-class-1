import React, { useState } from "react";
import MySvg from "../../Assets/chevron-down.svg";

function FooterSellSection() {

    const [dropdown, setDropDown] = useState(false)

    const handleChange = () => {
        setDropDown(current => !current)
    }

  return (
    <div className={`footer-shop-category ${dropdown ? "show" : ""}`}>
      <button className="shop-btn" onClick={handleChange}>
        Sell
        <img src={MySvg} alt="" className="chevron-down-btn" />
      </button>
      <ul className="shop-list">
        <li>
          <a href="">Sell on Etsy</a>
        </li>
        <li>
          <a href="">Teams</a>
        </li>
        <li>
          <a href="">Forums</a>
        </li>
        <li>
          <a href="">Affiliates</a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSellSection