import {
  category,
  discoverItems,
  dealsCard,
  sinlgeCard,
  totalContainer,
} from "./constant.js";
import { starRatingAmount, freeDeliveryAvaliability } from "./script1.js";

export function categorylistItteration(items) {
  let html = "";
  let totalHtml = "";
  items.forEach((item) => {
    if (item.svg === "") {
      html = `<li>${item.name}</li>`;
    } else html = `<li>${item.svg}${item.name}</li>`;

    totalHtml += html;
  });

  category.innerHTML = totalHtml;
}

export function discoverListItteration(items) {
  let html = "";
  let total = "";
  items.forEach((item) => {
    html = `
               <li><img src="${item.imglink}">
               <span>${item.caption}</span></li>
            `;
    total += html;
  });
  discoverItems.innerHTML = total;
}

export function deaOfDay(items) {
  let html = "";
  let totalCards = "";
  items.forEach((item) => {
    html = `<li><img src="${item.imglink}">
            <a><p>${item.discount}</p>
            <span>${item.caption}</span>
            </a></li>
            `;
    totalCards += html;
  });
  dealsCard.innerHTML = totalCards;
}

export function popularGiftCardSingle(items) {
  let html = "";
  let toatlSection = "";
  items.forEach((item) => {
    html = `<div class="full-card"><div class="image-container">
      <img src="${item.imgURL}">
      <div class="heart-btn"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" fill="#222222"></path></svg>
      </div>
      </div>
      <li class="bottom-container total-pricelist">
  
      <h2>${item.caption}</h2>
      <div class="rating">
      <div>${item.rating.amountOfRating}</div><span>${starRatingAmount(
      item.rating.stars
    )}</span></div>
      <div class="all-prices">
      <span>₹ ${item.amount.payPrice} </span>
      <span>₹ ${item.amount.originalPrice}</span>
      <span>(${item.amount.discount}% off)</span>
      <span class="${freeDeliveryAvaliability(
        item.freeDelivery
      )}">${freeDeliveryAvaliability(item.freeDelivery)}</span>
      </div> 
      </li>
      </div>
      `;
    toatlSection += html;
  });

  sinlgeCard.innerHTML = toatlSection;
}

export function selectionItemsFn(items) {
  let html = "";
  let toatlSection = "";
  items.forEach((item) => {
    html = `
      <div>
        <img src="${item.imageURl}">
        <span>${item.caption}</span>
      </div>
   `;
    toatlSection += html;
  });

  totalContainer.innerHTML = toatlSection;
}
