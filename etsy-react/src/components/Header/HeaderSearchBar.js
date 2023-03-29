import React from "react";
import Hamburger from "./HeaderHamburger";

function SearchBar() {
    return (
        <div className="search_container">
            <Hamburger />
            <div className="search_bar">
                <input
                    type="text"
                    className="search"
                    placeholder="Search for anything"
                />
            </div>
        </div>
    )
}

export default SearchBar;