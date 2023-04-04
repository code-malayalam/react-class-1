import React, { useState } from "react";
import Search from "../Assets/Search.svg";
import ChevronDown from "../Assets/ChevronDown.svg";
import Cart from "../Assets/Cart.svg";
import "./DesktopHeader.css";
import CreateLoginDrop from "./LoginDrop";
import MoreDropDown from "./MoreDrop";

function DesktopHeader() {
  const [isHovering, setIsHovering] = useState(false);
  const [onHover, setOnHover] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const MouseOverHandler = () => {
    setOnHover(true)
  };

  const MouseOutHandler = () => {
    setOnHover(false)
  }

 const handleRotate = () => {
  setIsActive(!isActive)
 }

  return (
    <div className="dt_header_container">
      <div className="dt_header_nav">
        <div className="dt_nav_items">
          <div className="dt_flipkart_explore">
            <div className="dt_flipkart_plus">
              <div className="dt_flipkart_logo">
                <img
                  className="dt_logo"
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                />
              </div>
              <div className="dt_exp-plus">
                Explore
                <span className="plus">Plus</span>
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                  className="plus_img"
                />
              </div>
            </div>
          </div>
          <div className="dt_search_bar">
            <form className="dt_form_search">
              <div className="dt_search_bar_panel">
                <div className="dt_search_input">
                  <input
                    type="text"
                    placeholder="Search for products, brands and more"
                  />
                </div>
                <button className="dt_searchicon" type="submit">
                  <img src={Search} />
                </button>
              </div>
            </form>
          </div>
          <div className="dt_item dt_login">
            <div className="dt_login_box box">
              <div className="dt_login_text">
                <div>
                  <a
                    className="dt_login_title"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    Login{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {isHovering && <CreateLoginDrop />}
          <div className="dt_item dt_seller">
            <a className="dt_seller_text">
              <span className="become_a_seller">Become a Seller</span>
            </a>
          </div>
          <div className="dt_item dt_more">
            <div className="more-arrow box">
              <div
                className="more"
                onMouseOver={() => {
                  MouseOverHandler();
                  handleRotate()
                }}
                onMouseOut={() => {
                  MouseOutHandler();
                  handleRotate();
                }}
              >
                More
              </div>
              <div className="chevron-icon " >
                <img src={ChevronDown} className={isActive ? `icon active` : 'icon'} />
              </div>
            </div>
          </div>
          {onHover && <MoreDropDown />}
          <div className="dt_item dt_cart">
            <div className="dt_cart_flex">
              <img src={Cart} />
              <span className="dt_card_text">Cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopHeader;
