const category = document.querySelector(".category");
const discoverItems = document.querySelector(".image-container");
const dealsCard = document.querySelector(".image-cards");
const shopSelection = document.querySelector(".shop-selection");
const sinlgeCard = document.querySelector(".single-card");
const dropdown = document.querySelectorAll(".main-drop-down");
const toatlSections = document.querySelectorAll(".total-section");
const icon = document.querySelectorAll(".icon");
const totalContainer = document.querySelector(".total-card-holder");
const inputValue = document.querySelector(".toget-input");
const buttonInput = document.querySelector(".input-button");
const buttonClear = document.querySelector(".clear-button");
let updated = 0;
// data form sever

(function () {
  fetch(
    "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/categorylist.json"
  )
    .then((response) => response.json())
    .then((categorylist) => {
      categorylistItteration(categorylist);
    });
})();

function categorylistItteration(items) {
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

// second section

(function () {
  fetch(
    "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/discoverlist.json"
  )
    .then((response) => response.json())
    .then((discoverlist) => {
      discoverListItteration(discoverlist);
    });
})();

function discoverListItteration(items) {
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

(function () {
  fetch(
    "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/imageCardsItems.json"
  )
    .then((response) => response.json())
    .then((imgaeCardsItems) => {
      deaOfDay(imgaeCardsItems);
    });
})();

function deaOfDay(items) {
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
//Popular gift right now functions
//  DISCOUNT PRICE

function calculationDiscount(products) {
  let discountPrice = 0;
  let price = 0;
  let priceArray = [];
  products.forEach((item) => {
    discountPrice = item.amount.originalPrice * (item.amount.discount / 100);
    price = Math.floor(item.amount.originalPrice - discountPrice);
    item.amount.payPrice = price;
    priceArray.push(Math.floor(price));
  });
  return price;
}

// STAR RATING

function starRatingAmount(key) {
  let svgHalf = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path class="foreground" d="M12 4c-.224 0-.42.15-.48.366l-1.67 5.642H4.5c-.218.002-.41.145-.472.354-.064.208.014.433.193.557l4.307 3.07-1.5 5.33c-.08.202-.02.433.15.57.17.14.41.15.59.03L12 16.98V4z"></path></svg>`;
  let svg = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="18" height="18"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z" fill="#222222"></path></svg>`;
  svg = "";

  for (let i = 1; i <= key; i++) {
    svg =
      svg +
      `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="18" height="18"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z" fill="#222222"></path></svg>`;
  }
  if (key % 1 !== 0) {
    svg = svg + svgHalf;
    return svg;
  }

  return svg;
}

// FREE DELIVERY

function freeDeliveryAvaliability(key) {
  if (key == "yes") {
    return "FREE delivery";
  } else {
    return "no-delivery";
  }
}

(function () {
  fetch(
    "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/popularGiftsNow.json"
  )
    .then((response) => response.json())
    .then((popularGiftsNow) => {
      calculationDiscount(popularGiftsNow);
      popularGiftCardSingle(popularGiftsNow);
      filterWithPrice(popularGiftsNow);
    });
})();

// POPULAR-GIFT

const fullCard = document.createElement("li");
sinlgeCard.appendChild(fullCard);

function popularGiftCardSingle(items) {
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
function getClearFunction() {
  sinlgeCard.innerHTML = "";
}

fetch(
  "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/selectionItems.json"
)
  .then((response) => response.json())
  .then((selectionItems) => {
    selectionItemsFn(selectionItems);
  });

function selectionItemsFn(items) {
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
console.log(toatlSections);
function footerFaq() {
  dropdown.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      toatlSections[i].classList.toggle("active");
      icon[i].classList.toggle("rotate");
    });
  });
}

footerFaq();

let selectedPrice = 0;
function filterWithPrice(items) {
  buttonInput.addEventListener("click", () => {
    selectedPrice = inputValue.value;
    array = items.filter((item) => {
      console.log(item.amount.payPrice);
      return item.amount.payPrice >= selectedPrice;
    });
    getClearFunction();
    popularGiftCardSingle(array);
  });
  return array;
}
filterWithPrice();
