import React from "react";
import './DressCard.css'

function DressCard(props) {

    const {
        imgURL,
        discountText,
        dressType
    } = props.item

  return (
    <>
      <div className="dress-card">
        <div className="dress-card-img">
          <img src={imgURL} alt="" />
        </div>
        <div className="dress-card-text">
          <div className="dress-card-text-off">{discountText}</div>
          <div className="dress-card-type">{dressType}</div>
        </div>
      </div>
    </>
  );
}

export default DressCard;
