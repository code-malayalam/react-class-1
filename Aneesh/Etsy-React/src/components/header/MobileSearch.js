import React from "react";
import "./MobileSearch.css";
import MenuOptions from "./MenuOptions";

function MobileSearch() {
  return (
    <>
      <div className="mobile-search-section">
        <div className="search-menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M20 7H4c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1zm-4.8 6H4c-.6 0-1-.4-1-1s.4-1 1-1h11.2c.6 0 1 .4 1 1s-.4 1-1 1zm4.8 6H4c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1z"></path>
          </svg>
        </div>
        <div className="search">
          <input
            type="text"
            className="input search"
            placeholder="Search for anything"
          />
          <button className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18ZM10,4a6,6,0,1,0,6,6A6.007,6.007,0,0,0,10,4Z"></path>
              <path d="M21,22a1,1,0,0,1-.707-0.293l-4-4a1,1,0,0,1,1.414-1.414l4,4A1,1,0,0,1,21,22Z"></path>
            </svg>
          </button>
        </div>
      </div>
      <MenuOptions />
    </>
  );
}

export default MobileSearch;
