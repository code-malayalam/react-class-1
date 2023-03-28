import React from "react";
import "./Header.css";
import logo from "./logo.svg";
import hamburger from "./hamburger.svg";
import heart from "./heart.svg";
import basket from "./basket.svg";
import searchIcon from "./searchIcon.svg";

function Header() {
  return (
    <header>
      <div className="header">
        <div className="etsy_logo">
          <img src={logo} />
        </div>
        <div className="search_container">
          <button className="hamburger">
            <img src={hamburger} />
          </button>
          <div className="search_bar">
            <input type="text" placeholder="Search for anything" />
            <button className="search_btn">
              <span>
                <img src={searchIcon} />
              </span>
            </button>
          </div>
        </div>
        <div className="header_nav">
          <ul>
            <li>
              <button>Sign in</button>
            </li>
            <li>
              <span>
                <img src={heart} />
              </span>
            </li>
            <li>
              <span>
                <img src={basket} />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
