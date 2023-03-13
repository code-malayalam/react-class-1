import { calculatePrice } from "./calculatePrice.js";
const rupeeSymbol = "₹";
const arrow = "asset/arrow.svg";
const giftSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 5 22 12" width="16" height="12" aria-hidden="true" focusable="false"><path d="M5,6A1,1,0,0,0,4,7v3H5v9a1,1,0,0,0,1,1h5V6H5Z"></path><path d="M19,6H13.007A4.245,4.245,0,0,0,14.97,3.744a1.614,1.614,0,0,0-2.65-1.375,1.757,1.757,0,0,0-.315.324,1.753,1.753,0,0,0-.315-0.324A1.615,1.615,0,0,0,9.042,3.746,4.257,4.257,0,0,0,11.006,6H13V20h5a1,1,0,0,0,1-1V10h1V7A1,1,0,0,0,19,6Z"></path></svg>`;

export function createNavItem(objs, item, index) {
  const { text } = item;

  if (index === objs.length - 1) {
    return `
      <li>
       <a href="#">
        ${giftSVG} ${text}
       </a>
      </li>`;
  } else {
    return `
      <li>
         <a href="#">${text}</a>
      </li>`;
  }
}

export function createDiscoverItem(obj) {
  const { url, text } = obj;

  return `
     <div class="discover_item">
        <div class="discover_item_img">
            <img src="${url}">
        </div>
        <div class="discover_item_text">${text}</div>
     </div>
        `;
}

export function createDealsHeading() {
  return `
    <div class="deals_heading_text">Deals of the Day</div>
    <div class="shop_link">
        <span>Shop all deals</span>
        <img src="${arrow}" class="arrow">
    </div>
        `;
}

export function createDealsItem(obj) {
  const { url, off, text } = obj;

  return `
        <div class="deals_item">
        <div class="deals_item_container">
            <div class="deals_item_content">
                <div class="deals_item_img">
                    <img src="${url}">
                </div>
                <div class="deals_item_info">
                    <span>Up to ${off}% off on</span>
                    <p>${text}</p>
                </div>
            </div>
        </div>
        </div>
        `;
}

export function createPopularItem(obj) {
  const { title, url, starno, actualPrice, discount } = obj;

  return `
        <div class="popular_item">
            <div class="text">${title}</div>
            <div class="popular_item_container">
                <div class="popular_item_content">
                <div class="popular_img">
                    <img src="${url}">
                </div>
                <div class="popular_info">
                    <div class="heading">${title}</div>
                        <p class="star">
                        <span class="star_no">(${starno.toLocaleString()})</span>
                        </p>
                    <div class="price">
                        <span class="current_price">
                        ${rupeeSymbol} ${calculatePrice(actualPrice, discount)}
                        </span>
                        <span class="actual_price">${actualPrice.toLocaleString()}</span>
                        <span class="off">(${discount}% off)</span>
                    </div>
                    <div class="free_delivery"></div>
                </div>
            </div>
            </div>
        </div>
        `;
}

export function createValentineContent(itemsMap) {
  return `
        <div class="valentine_container">
            <div class="valentine_content">
                <div class="valentine_items">
                    <div class="valentine_heading">
                        <p>Editors' Picks </p>
                        <h1>Valentine's Day Gifts</h1>
                        <a href="#" class="valentine_heading_link">
                            Shop these unique finds
                            <img src="${arrow}" class="arrow">
                        </a>
                    </div>
                    ${itemsMap.join("")}
                    <div class="see_more">
                    <a href="#">See more
                        <img src="${arrow}" class="arrow">
                    </a>
                </div>
                <div class="valentine_text_container">
                <p class="valentine_text">Add to Heart: Explore extraordinary ways—from extraordinary local sellers—to express your love</p>    
                </div>
                </div>
            </div>
        </div>
        `;
}

export function createValentineItem(obj) {
  const { videoURL, imgURL } = obj;
  return `
    <div class="valentine_item">
        <div class="valentine_item_container">
            <a href="${videoURL}"></a>
            <img src="${imgURL}">
        </div>
    </div>
  `;
}

export function createSelectionContent(itemsMap) {
  return `
        <div class="selection_container">
        <div class="selection_heading">
            <div class="selection_link">
                <h2>Shop our selections</h2>
                <img src="${arrow}" class="arrow">
            </div>
            <p>Curated collections hand-picked by Etsy editors</p>
        </div>
        <div class="selection_items">
        ${itemsMap.join("")}
        </div>
        </div>
    `;
}

export function createSelectionItem(obj) {
  const { imgURL, text } = obj;

  return `
        <div class="selection_item">
        <div class="selection_item_container">
            <div class="selection_item_content">
                <div class="selection_img">
                    <img src="${imgURL}">
                </div>
                <div class="selection_item_info">
                    <p>${text}</p>
                </div>
            </div>
        </div>
        </div>
        `;
}

export function createOverviewContent(itemsMap) {
  return `
           <div class="overview">
                <h2>What is Etsy?</h2>
                <a href="#" class="story_link">Read our wondefully weired story</a>
                <div class="overview_content">${itemsMap.join("")}</div>
                <div class="help">
                <h4>Have a question? Well we've got some answers.</h4>
                <button class="help_btn">Go to Help Center</button>
                </div>
            </div>
         `;
}

export function createOverviewItem(item, index) {
  const { title, text } = item;

  if (index === 0) {
    return `
          <div class="community">
              <h3>${title}</h3>
              <p>${text}
              <a href="#">Here are some of the ways we're making a positive impact,together.</a>
          </p>
          </div>`;
  } else {
    return `<div class="community">
              <h3>${title}</h3>
              <p>${text}</p>
          </div>`;
  }
}
