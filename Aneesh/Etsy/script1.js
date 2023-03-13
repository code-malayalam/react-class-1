import {
  createDiscoverCardTemplate,
  dealsCardTemplate,
  giftCardTemplate,
} from "./templateString.js";
import jsonDataToObj from "./fetch.js";

import {categoryListIdName, popularGiftImgContainerClassName, popularGiftCardClassName, discoverCategoryContainerClassName,dealsContainerClassName, footerDropDownBtns, fullStar, halfStar} from './constants.js'

const URL = "https://raw.githubusercontent.com/anmh265/JSON-Etsy/main/Data.json";

jsonDataToObj(URL)
.then(data => {
  callFunctions(data)
})

function callFunctions(data) {
  createCategoryList(data.categoriesData, categoryListIdName);
  createDealsCards(data.dealsData, dealsContainerClassName);
  createDiscoverListSection(data.discoverListData);
  createGiftCards(popularGiftCardClassName, data.popularGiftData);
  popularGiftFilter(data.popularGiftData);
}

function createCategoryList(cList, listItemIdName) {
  const container = document.getElementById(listItemIdName);

  for (let key of cList) {
    const category = `
          <li>
            ${createATag(key)}
          </li>
        `;

    container.innerHTML += category;
  }
}

function createATag(key) {
  if (typeof key.label === "object") {
    return `
          <a href = "" class = "gift-svg">${key.label.gift_svg}</a>
          <a href = "" class = "gift-text">${key.label.gift_text}</a>`;
  } else {
    return `
        <a href = "">${key.label}</a>
        `;
  }
}

function createDiscoverListSection(items) {
  const container = document.querySelector(discoverCategoryContainerClassName);
  const discoverListArray = items.map(item => {
    return createDiscoverCardTemplate(item)
  })

  container.innerHTML += discoverListArray.join('')
}

function createDealsCards(data, containerClassName) {
  const dealsContainer = document.querySelector(containerClassName);

  const dealsCardArray = data.map((item) => {
    ////////////////module - deals card////////////////

    const cardItem = dealsCardTemplate(item);
    return cardItem;
  });
  dealsContainer.innerHTML = dealsCardArray.join("");
}

function createGiftCards(giftContainer, data) {
  let mainContainer = document.querySelector(giftContainer);

  removeChildren(mainContainer);

  data.forEach((item) => {
    ///////////module - giftcard section///////////////

    const container = giftCardTemplate(item);
    mainContainer.innerHTML += container;
  });
  playVideoOnHover();
  clickWishlist();
  tooltipDisplay();
}

function popularGiftFilter(data) {
  const formFilter = document.getElementById("filter-form");
  const popolarSectionPriceFilter = document.getElementById(
    "popular-gift-filter"
  );

  formFilter.addEventListener("submit", (e) => {
    e.preventDefault();
    let filterValue = +popolarSectionPriceFilter.value;
    const filterData = data.filter(
      (item) => calculatePrice(item.actualPrice, item.discount) > filterValue
    );
    createGiftCards(popularGiftCardClassName, filterData);
  });
}

function removeChildren(mainContainer) {
  let child = mainContainer.lastElementChild;
  while (child) {
    mainContainer.removeChild(child);
    child = mainContainer.lastElementChild;
  }
}

function playVideoOnHover() {
  const container = document.querySelectorAll(popularGiftImgContainerClassName);
  container.forEach((item) => {
    if (item.children[0].tagName === "VIDEO") {
      item.addEventListener("mouseover", () => {
        item.children[0].play();
        item.children[2].classList.remove("active");
      });

      item.addEventListener("mouseleave", () => {
        item.children[0].pause();
        item.children[0].load();
        item.children[2].classList.add("active");
      });
    }
  });
}

function clickWishlist() {
  const items = document.querySelectorAll(".wishlist-btn");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("add-wishlist")) {
        item.classList.remove("add-wishlist");
        item.innerHTML = wishlistSVG;
      } else {
        item.classList.add("add-wishlist");
        item.innerHTML = afterClickSVG;
      }
    });
  });
}

function tooltipDisplay() {
  const cards = document.querySelectorAll(".popular-gift-card");
  cards.forEach((card) => {
    card.addEventListener("mouseover", (e) => {
      let x = e.pageX - card.offsetLeft;
      let y = e.pageY - card.offsetTop + 20;
      card.firstElementChild.style.top = `${y}px`;
      card.firstElementChild.style.left = `${x}px`;
    });
  });
}

function printStar(n) {
  if (n > 5) {
    n = 5;
  }

  let starArr = [];
  for (let i = 0; i < Math.floor(n); i++) {
    const star = `<span>${fullStar}</span>`;
    starArr.push(star);
  }
  if (n - Math.floor(n) !== 0) {
    const star = `<span>${halfStar}</span>`;
    starArr.push(star);
  }
  return starArr.join("");
}

function calculatePrice(price, disc) {
  return Math.round(price * (1 - disc / 100));
}

footerDropDownBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.parentNode.classList.toggle("show");
  });
});

export { printStar, calculatePrice, callFunctions };
