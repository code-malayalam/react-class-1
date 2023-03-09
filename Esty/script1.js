import {
  categorylistItteration,
  deaOfDay,
  discoverListItteration,
  popularGiftCardSingle,
  selectionItemsFn,
} from "./templates.js";

import { dropdown } from "./constant.js";

(function () {
  fetch(
    "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/categorylist.json"
  )
    .then((response) => response.json())
    .then((categorylist) => {
      categorylistItteration(categorylist);
    });
})();

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


(function () {
  fetch(
    "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/imageCardsItems.json"
  )
    .then((response) => response.json())
    .then((imgaeCardsItems) => {
      deaOfDay(imgaeCardsItems);
    });
})();

//Popular gift right now functions
//  DISCOUNT PRICE

export function calculationDiscount(products) {
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

export function starRatingAmount(key) {
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

export function freeDeliveryAvaliability(key) {
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
    });
})();

// POPULAR-GIFT

fetch(
  "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/selectionItems.json"
)
  .then((response) => response.json())
  .then((selectionItems) => {
    selectionItemsFn(selectionItems);
  });

function footerFaq() {
  dropdown.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      toatlSection[i].classList.toggle("active");
      icon[i].classList.toggle("rotate");
    });
  });
}

footerFaq();
