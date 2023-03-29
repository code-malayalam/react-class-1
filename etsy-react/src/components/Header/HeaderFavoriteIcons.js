import React from "react";
import  headerFavoriteIcon  from "../../svg/headerFavoriteIcon.svg";

function HeaderFavoriteIcon(){
     return(
        <div className="favorites">
            <a href="#">
               <img src= {headerFavoriteIcon}/>
            </a>
        </div>
     )
}

export default HeaderFavoriteIcon
