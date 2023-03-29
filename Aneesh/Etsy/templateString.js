import {printStar, calculatePrice } from "./script1.js";
import {playSvg, wishlistSVG} from './constants.js'

export function createDiscoverCardTemplate(obj) {
  const { imgURL, listText } = obj;
  return `
    <div class = 'discover-categories-card'>
      <div class = 'card-img'>
        <img src = "${imgURL}" alt = "">
      </div>
      <div class = 'card-text'>
        ${listText}
      </div>  
    </div>
  `;
}

export function dealsCardTemplate(obj) {
  const { imgURL, discountText, dressType } = obj;
  return `
        <div class = 'dress-card'>
          <div class = 'dress-card-img'>
            <img src = '${imgURL}' alt = ''>
          </div>
          <div class = 'dress-card-text'>
            <div class = 'dress-card-text-off'>
              ${discountText}
            </div>
            <div class = 'dress-card-type'>
              ${dressType}
            </div>
          </div>
        </div>
      `;
}

export function giftCardTemplate(obj) {
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
  } = obj;

  return `
  <div class = 'popular-gift-card' on>
    <div class = 'tool-tip'>
      ${textHeading}
    </div>
    <div class = 'popular-gifts-img'>
      ${
        urlFormat === "picture"
          ? `<img src = '${mediaURL}'>`
          : `<video src = '${videoURL}' poster = '${mediaURL}' muted = "muted"></video>`
      }
      <div class = 'wishlist-btn'>
        ${wishlistSVG}
      </div>
      <div class = 'play-btn ${urlFormat === "video" ? "active" : ""}'>
        ${playSvg}
      </div>
    </div>
    <div class = 'popular-gifts-text'>
      <p class = 'popular-gifts-text-heading'>
        ${textHeading}
      </p>
      <div class = 'rating'>

          <div class = 'star-rating'>
          ${printStar(rating)}
          </div>
          <span class = 'customer-rating'>(${customerRating.toLocaleString()})
      </div>
      <div class = 'popular-gifts-price'>
        <span class = 'currency-symbol'>
          ${currencySymbol}
        </span>
        <span class = 'actual-price'>
          ${calculatePrice(actualPrice, discount).toLocaleString()}
        </span>
      </div>
      <div class = 'popular-gifts-discount-section'>
        <span class = 'popular-gift-strikeout'>
          ${currencySymbol} ${actualPrice}
        </span>
        <span class = 'discount'>
          ${discount}% off
        </span>
        <div class = 'free-delivery ${
          calculatePrice(actualPrice, discount) > 1000 ? "active" : ""
        }'>
        FREE delivery
        </div>
        </div>
      </div>
    </div>
  </div>
`;
}
