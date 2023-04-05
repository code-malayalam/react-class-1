import React from "react";
import "./MobileSearch.css";
import MenuOptions from "./MenuOptions";
import Hamburger from '../../svgs/Hamburger.svg'
import SearchButton from '../../svgs/SearchButton.svg'

function MobileSearch() {
  return (
    <>
      <div className="mobile-search-section">
        <div className="search-menu">
          <img src={Hamburger} />
        </div>
        <div className="search">
          <input
            type="text"
            className="input search"
            placeholder="Search for anything"
          />
          <button className="search-icon">
            <img src={SearchButton} />
          </button>
        </div>
      </div>
      {/* <MenuOptions /> */}
    </>
  );
}

export default MobileSearch;
