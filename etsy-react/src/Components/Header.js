import React from "react";
import NavBar from "./Navbar";
import icon from "../Assets/icon.svg"
import like from "../Assets/like.svg"
import bascket from "../Assets/basket.svg"
import search from "../Assets/search.svg"
import hamburger from "../Assets/hamburger.svg"

function Header() {
  return (
    <div className="hd-all">
      <div className="header-mb">
        <div className="head1">
          <div className="icon">
            <img src={icon}></img>
          </div>
          <div className="sign">
            <span>Sign in</span>
            <img src={like}></img>
            <img src={bascket}></img>
          </div>
        </div>
        <div className="head2">
          <img src={hamburger}></img>
          <div className="btn">
            <input type="text" placeholder="Search for anything" />
            <img src={search}></img>
          </div>
        </div>
      </div>
      <div className="header-dt">
       <img src={icon}></img>
        <div className="btn">
          <input type="text" placeholder="Search for anything" />
          <img src={search}></img>
        </div>
        <div className="sign">
          <span>Sign in</span>
           <img src={like}></img>
            <img src={bascket}></img>
        </div>
      </div>
      <div className="collections">
       <NavBar />
      </div>
    </div>
  );
}

export default Header;
