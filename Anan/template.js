const likedImageSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="18" height="18"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" fill="#222222"></path></svg>`;
const playButtonSVG =
  '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="18" height="18"><polygon points="4 4 4 20 20 12 4 4" fill="#222222"></polygon></svg>';
const starSVG =
  '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="14" height="14"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z" fill="#222222"></path></svg>';
const halfStar =
  '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="18" height="18"><path class="background" d="M12.007 16.97l4.21 2.95c.182.12.422.11.592-.027.17-.138.23-.37.15-.574l-1.484-5.33 4.306-3.073c.182-.12.265-.347.203-.557-.065-.21-.258-.352-.477-.352h-5.35l-1.67-5.642c-.06-.215-.257-.363-.48-.363-.225 0-.42.148-.482.363v12.94l.48-.335z" fill="#E1E3DF"></path><path class="foreground" d="M12 4c-.224 0-.42.15-.48.366l-1.67 5.642H4.5c-.218.002-.41.145-.472.354-.064.208.014.433.193.557l4.307 3.07-1.5 5.33c-.08.202-.02.433.15.57.17.14.41.15.59.03L12 16.98V4z" fill="#222222"></path></svg>';

export function overviewTemplate(item) {
  const html = `
    <li>
      <div class="overview-img">
      <img src="${item.url}"/>
      </div>
      <p>${item.name}</p>
    </li>
    `;

  return html;
}

export function dealsTemplate(item) {
  const html = `
       <li>
         <div class="deals-img"><img src="${item.url}"</div>
         <div class="deals-txt">
           <span>${item.discount}</span>
           <p>${item.category}</p>
         </div>
       </li>
    `;

  return html;
}

export function giftsTemplate(item, idx) {
  // console.log(item)
  const html = `
    <div class="gift-items">
    <div class="gift-img">
       <video poster="${item.url}" class="video" loop="true" src="${
    item.video
  }"></video>
      <div class="like-gift">${likedImageSVG}</div>
      ${playButton(item, idx)}
    </div>
    <div class="gift-txt">
      <h3>${item.name}</h3>
      <div class="rating">
        <div class="star-rating">${starRating(item)}</div>
        <p>(${item.rating})</p>
      </div>
      <div class="price">
        <p class="priceActual">${item.currencySymbol}${discountPercentage(
    item.actualprice,
    item.discount
  )}</p>
        <span>${item.currencySymbol}${item.actualprice}</span>
        <a href="">(${item.discount}% off)</a>
      </div>
    </div>
    <div class="gift-name">${item.name}</div>
    ${createDeliveryIcon(item, idx)}
    </div>
    `;
  return html;
}

function createDeliveryIcon(data, idx) {
  if (data.actualprice > 2000) {
    const deliveryElement = document.createElement('div');
    deliveryElement.classList.add('delivery');
    deliveryElement.innerHTML = 'FREE Delivery';

    return deliveryElement.outerHTML;
  } else {
    return '';
  }
}

function playButton(data, idx) {
  // console.log(data)
  if (data.urlType === 'Video') {
    const playButtonTab = document.createElement('div');
    playButtonTab.classList.add('play-btn');
    playButtonTab.innerHTML = playButtonSVG;

    return playButtonTab.outerHTML;
  } else {
    return '';
  }
}

function starRating(data) {
  // console.log(data);
  let x = '';

  for (let i = 0; i < data.ratingStar; i++) {
    x += starSVG;
  }
  return x;
}

function discountPercentage(actualPrice, discounts) {
  return Math.round(actualPrice * ((100 - discounts) / 100));
}
