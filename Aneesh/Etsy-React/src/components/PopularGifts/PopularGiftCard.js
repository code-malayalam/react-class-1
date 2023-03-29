import React, {useRef} from "react";
import calculatePrice from "./CalculatePrice";
import PrintStar from "./PrintStar";
import './PopularGiftCard.css'
import PopularGiftsImage from "./PopularGiftsImage";

function PopularGiftCard(props) {
  const {
    textHeading,
    urlFormat,
    mediaURL,
    videoURL,
    rating,
    customerRating,
    currencySymbol,
    actualPrice,
    discount,
  } = props.item;

  const tooltip = useRef()
  const parentCard = useRef()

  function handleMouseOver(e){
      let x = e.pageX - parentCard.current.offsetLeft;
      let y = e.pageY - parentCard.current.offsetTop + 20;
      tooltip.current.style.top = `${y}px`;
      tooltip.current.style.left = `${x}px`;
  }


  return (
    <div className="popular-gift-card" id="popular-gift-card" ref={parentCard} onMouseOver={handleMouseOver}>
      <div className="tool-tip" ref={tooltip} >{textHeading}</div>
      <PopularGiftsImage url={urlFormat} mediaURL={mediaURL} videoURL={videoURL}/>
      <div className="popular-gifts-text">
        <p className="popular-gifts-text-heading">{textHeading}</p>
        <div className="rating">
          <div className="star-rating">
            {
               <PrintStar key={mediaURL} rating={rating} />
            }
          </div>
          <span className="customer-rating">
            ({customerRating.toLocaleString()})
          </span>
        </div>
        <div className="popular-gifts-price">
          <span className="currency-symbol">{currencySymbol}</span>
          <span className="actual-price">
            {calculatePrice(actualPrice, discount).toLocaleString()}
          </span>
        </div>
        <div className="popular-gifts-discount-section">
            <span className="popular-gift-strikeout">
                {currencySymbol} {actualPrice}
            </span>
            <span className="discount">
                {discount}% off
            </span>
            <div className={`free-delivery ${(calculatePrice(actualPrice, discount)) > 1000 ? 'active' : ''}`}>FREE delivery</div>
        </div>
       </div>
    </div>
  );
}

export default PopularGiftCard;
