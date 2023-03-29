import React, { useState } from "react";
import Heart from '../Assets/Heart.svg'
import RedHeart from '../Assets/RedHeart.svg'

let HeartImg = Heart;

export function WishList() {
  const [active, setActive] = useState(true);

  function changeColor() {
    setActive(!active);
    console.log(active);

    if (active) {
      return (HeartImg = RedHeart);
    } else {
      return (HeartImg = Heart);
    }
  }

  return (
    <button className="heart-button " id="heart_button" onClick={changeColor}>
     <img src={HeartImg} />
    </button>
  );
}
