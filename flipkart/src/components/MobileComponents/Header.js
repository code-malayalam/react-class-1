import React from "react";
import hamburger from "./../../svgs/hamburger.svg";
import liteApp from "./../../svgs/headerPlus.svg";
import cart from "./../../svgs/cart.svg";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_top_container">
        <div className="header_top_inner_container">
          <div className="top_left_container">
            <div className="hamburger">
              <button>
                <img src={hamburger} />
              </button>
            </div>
            <div className="flipkart_img">
              <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk-explorePlus-c5de64.png" />
            </div>
          </div>

          <div className="top_right_container">
            <div className="right_item_container right_img_container">
              <img src={liteApp} />
            </div>
            <div className="right_item_container right_img_container">
              <img src={cart} />
            </div>
            <div className="right_item_container login_container">
              <a href="#">Login</a>
            </div>
          </div>
        </div>
      </div>

      <div className="header_bottom_container">
        <div className="search_container">
          <button className="search_btn">
            <img src="https://rukminim1.flixcart.com/www/30/30/promos/28/04/2022/b05dc6a8-7e45-48ef-8f27-482e3a02bd67.png?q=90" />
          </button>
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
