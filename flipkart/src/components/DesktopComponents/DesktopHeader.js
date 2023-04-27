import React, { useRef, useState } from "react";
import "./DesktopHeader.css";
import searchIcon from "./../../svgs/searchIcon.svg";
import whiteDropDown from "./../../svgs/whiteDropDown.svg";
import cart from "./../../svgs/cart.svg";
import Login from "./Login";
import MoreHover from "./MoreHover";

let x = 0;
function DesktopHeader() {
  const [isMouseovered, setIsMouseovered] = useState(false);
  const [isMouseoveredOnMore, setIsMouseoveredOnMore] = useState(false);
  const boundaryRef = useRef("");

  const handleMouseOver = () => {
    setIsMouseovered(true);
  };

  const handleMouseleave = () => {
    setIsMouseovered(false);
  };

  const handleMouseOverOnMore = () => {
    x = boundaryRef.current.getBoundingClientRect().x - 100;

    setIsMouseoveredOnMore(true);
  };

  const handleMouseleaveOnMore = () => {
    setIsMouseoveredOnMore(false);
  };

  return (
    <header>
      <div className="desktop_header">
        <div className="empty_container"></div>
        <div className="header_container">
          <div className="flipkart_img_outer_container">
            <div className="flipkart_img_container">
              <div className="img_container">
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" />
              </div>
              <div className="img_text_container">
                <span className="explore_text">Explore</span>
                <span className="plus_text">Plus</span>
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" />
              </div>
            </div>
          </div>

          <div className="desktop_search_container">
            <div className="input_container">
              <input
                type="text"
                placeholder="Search for products, brands and more"
              />
            </div>
            <div className="btn_container">
              <button>
                <img src={searchIcon} />
              </button>
            </div>
          </div>

          <div
            className="link_container desktop_login_container"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseleave}
          >
            {isMouseovered && <Login />}
            <div className="login_text_container">
              <a href="#">Login</a>
            </div>
          </div>

          <div className="link_container">
            <a href="#">Become a Seller</a>
          </div>

          <div
            className="link_container more_container"
            onMouseOver={handleMouseOverOnMore}
            onMouseLeave={handleMouseleaveOnMore}
            ref={boundaryRef}
          >
            {isMouseoveredOnMore && <MoreHover leftPosition={x} />}

            <a href="#">
              More
              <img src={whiteDropDown} className="dropdown" />
            </a>
          </div>

          <div className="link_container cart_container">
            <a href="#">
              <img src={cart} />
              <p>Cart</p>
            </a>
          </div>
        </div>
        <div className="empty_container"></div>
      </div>
    </header>
  );
}

export default DesktopHeader;
