import React from "react";
import headerLogoSvg from "../../svg/headerLogoSvg.svg";

function HeaderLogo() {
    return (
        <div className="logo">
            <img src={headerLogoSvg} />
        </div>
    )
}

export default HeaderLogo;