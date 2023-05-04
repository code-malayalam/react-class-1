import {
  category,
  discoverItems,
  dealsCard,
  sinlgeCard,
  totalContainer,
  dropdown,
  toatlSection,
  svgHalfRating,
  svgFullRating,
} from "./constant.js";
import { forFetchApi } from "./api.js";
import {
  categorylistItterationHtml,
  discoverListItterationHtml,
  dealOfDayHtml,
  popularGiftCardSingleHtml,
  selectionItemsHtml,
} from "./templates.js";

forFetchApi(
  "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/categorylist.json"
).then((items) => {
  categorylistItteration(items);
});

export function categorylistItteration(items) {
  let totalcards = items.map((item) => {
    return categorylistItterationHtml(item);
  });
  category.innerHTML = totalcards.join("");
}

forFetchApi(
  "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/discoverlist.json"
).then((discoverlist) => {
  discoverListItteration(discoverlist);
});
export function discoverListItteration(items) {
  const totalCards = items.map((item) => {
    return discoverListItterationHtml(item);
  });
  discoverItems.innerHTML = totalCards.join(" ");
}

forFetchApi(
  "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/imageCardsItems.json"
).then((items) => {
  dealOfDay(items);
});
export function dealOfDay(items) {
  const totalCards = items.map((item) => {
    return dealOfDayHtml(item);
  });
  dealsCard.innerHTML = totalCards.join(" ");
}

forFetchApi(
  "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/popularGiftsNow.json"
).then((items) => {
  calculationDiscount(items);
  popularGiftCardSingle(items);
});

export function popularGiftCardSingle(items) {
  const totalCards = items.map((item) => {
    return popularGiftCardSingleHtml(item);
  });
  sinlgeCard.innerHTML = totalCards.join(" ");
}

forFetchApi(
  "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/selectionItems.json"
).then((data) => {
  selectionItems(data);
});

export function selectionItems(items) {
  const totalCards = items.map((item) => {
    return selectionItemsHtml(item);
  });
  totalContainer.innerHTML = totalCards.join(" ");
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

export function starRatingAmount(key) {
  let svg = "";
  for (let i = 1; i <= key; i++) {
    svg = svg + svgFullRating;
  }
  if (key % 1 !== 0) {
    svg = svg + svgHalfRating;
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

function footerFaq() {
  dropdown.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      toatlSection[i].classList.toggle("active");
      icon[i].classList.toggle("rotate");
    });
  });
}

footerFaq();
