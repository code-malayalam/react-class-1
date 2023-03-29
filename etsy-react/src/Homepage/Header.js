import React from "react";
import HeaderBasketIcon from "../components/Header/HeaderBasketIcon";
import HeaderFavoriteIcon from "../components/Header/HeaderFavoriteIcons";
import HeaderLogo from "../components/Header/HeaderLogo";
import SearchBar from "../components/Header/HeaderSearchBar";
import '../components/Header/Header.css';

function Header() {
    return (
        <div className="logo_searchbar">
            <div className="etsy_logo_sign_in">
                <HeaderLogo />
                <div className="sign_in_container">
                    <button className="sign_in">Sign in</button>
                    <HeaderFavoriteIcon />
                    <HeaderBasketIcon />
                </div>
            </div>
            <SearchBar />
            <div className="sign_in_container_desktop">
                <button className="sign_in">Sign in</button>
                <HeaderFavoriteIcon />
                <HeaderBasketIcon />
            </div>
        </div>
    )
}
export default Header;