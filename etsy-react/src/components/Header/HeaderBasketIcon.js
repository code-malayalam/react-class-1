import React from "react";
import  headerBasketIcon from'../../svg/headerBasketIcon.svg'

function HeaderBasketIcon(){
    return(
        <div className="basket">
            <img src={headerBasketIcon}/>
        </div>
    )
}

export default HeaderBasketIcon;