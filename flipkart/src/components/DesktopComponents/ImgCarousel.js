import React from "react";
import "./ImgCarousel.css";

function ImgCarousel(props) {
  const { imgURL, text, offer, items } = props;

  return (
    <div className="carousel_card">
      <div className="carousel_card_img">
        <div className="img_inner_container">
          <img src={imgURL} />
        </div>
      </div>
      <div className="carousel_card_text">{text}</div>
      <div className="carousel_card_offer">{offer}</div>
      <div className="carousel_card_items">{items}</div>
    </div>
  );
}
export default ImgCarousel;
