import { starRatingAmount, freeDeliveryAvaliability } from "./script1.js";

export function categorylistItterationHtml(item) {
  const { name, svg } = item;
  if (svg !== "") {
    return `<li>${svg}${name}</li>`;
  } else {
    return `<li>${name}</li>`;
  }
}

export function discoverListItterationHtml(item) {
  return `
      <li><img src="${item.imglink}">
      <span>${item.caption}</span></li>
   `;
}

export function dealOfDayHtml(item) {
  const { imglink, discount, caption } = item;

  return `<li><img src="${imglink}">
            <a><p>${discount}</p>
            <span>${caption}</span>
            </a></li>
            `;
}

export function popularGiftCardSingleHtml(item) {
  let { imgURL, caption, freeDelivery, amount, rating } = item;
  return `<div class="full-card"><div class="image-container">
      <img src="${imgURL}">
      <div class="heart-btn"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" fill="#222222"></path></svg>
      </div>
      </div>
      <li class="bottom-container total-pricelist">
  
      <h2>${caption}</h2>
      <div class="rating">
     <div>${rating.amountOfRating}</div><span>${starRatingAmount(
    rating.stars
  )}</span></div>
      <div class="all-prices">
      <span>₹ ${amount.payPrice} </span>
      <span>₹ ${amount.originalPrice}</span>
      <span>(${amount.discount}% off)</span>
      <span class="${freeDeliveryAvaliability(
        freeDelivery
      )}">${freeDeliveryAvaliability(freeDelivery)}</span>
      </div> 
      </li>
      </div>
      `;
}

export function selectionItemsHtml(item) {
  const { imageURl, caption } = item;

  return `
      <div>
        <img src="${imageURl}">
        <span>${caption}</span>
      </div>
   `;
}
