import React, { useState, useEffect } from "react";
import "./../styles.css";
import { heartBtn,redHeart } from "./svg";


function HeartSvg() {
  let [heartSvg, setSvg] = useState(heartBtn);

  let clickHandler = (op) => {
    console.log(op.target);
    if (heartSvg == heartBtn) {
      setSvg(redHeart);
    } else {
      setSvg(heartBtn);
    }
  };

  return (
    <div className="heart-btn " onClick={clickHandler}>
      {heartSvg}
    </div>
  );
}

export default HeartSvg;
