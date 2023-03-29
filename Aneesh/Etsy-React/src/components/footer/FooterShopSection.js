import React, {useState} from "react";
import MySvg from "../../Assets/chevron-down.svg";

function FooterShopSection() {

    const [dropdown, setDropDown] = useState(false)

    const handleChange = () => {
        setDropDown(current => !current)
    }

  return (
    <div className={`footer-shop-category ${dropdown ? "show" : ""}`}>
      <button className="shop-btn" onClick={handleChange}>
        Shop
        <img src={MySvg} className="chevron-down-btn" />
      </button>
      <ul className="shop-list">
        <li>
          <a href="">Gift cards</a>
        </li>
        <li>
          <a href="">Sitemap</a>
        </li>
        <li>
          <a href="">Etsy Blog</a>
        </li>
        <li>
          <a href="">Etsy United Kingdom</a>
        </li>
        <li>
          <a href="">Etsy Germany</a>
        </li>
        <li>
          <a href="">Etsy Canada</a>
        </li>
      </ul>
    </div>
  );
}

export default FooterShopSection