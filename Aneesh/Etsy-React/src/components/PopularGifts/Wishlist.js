import React, { useState } from "react";
import WishlistSVG from '../../svgs/Wishlist.svg'
import AfterClickSVG  from "../../svgs/AfterClick.svg";

function WishList() {
  const svgArr = [WishlistSVG, AfterClickSVG]
  const [flag, setFlag] = useState(0)

  return (
    <div className="wishlist-btn" onClick={() => {setFlag(flag === 0 ? 1 : 0)}}>
      <img src={`${svgArr[flag]}`} />
    </div>
  );
}

export default WishList;
