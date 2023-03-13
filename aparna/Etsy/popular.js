
const heartImage = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" ><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z"></path></svg>`;

const FiveStarsForRating = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width = "12px" height="24px"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path></svg>`;

const starsForRating = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width = "12px" height="24px"><path class="foreground" d="M12 4c-.224 0-.42.15-.48.366l-1.67 5.642H4.5c-.218.002-.41.145-.472.354-.064.208.014.433.193.557l4.307 3.07-1.5 5.33c-.08.202-.02.433.15.57.17.14.41.15.59.03L12 16.98V4z"></path></svg>`;

export const generatePopularContainer = (pItems) => {
  const popular = document.querySelector(".popular-sub-container");

  const arrayOfPopularItems = pItems.map((item) => {
    const popularContents = `
    <div class="popular-inner">
    <li class="giftList"></li>
    <div class="popular-img-container">
    <img src=${item.url} class="imagePop">
    <div class="tooltip-container">${item.tooltipText}
    </div>
    <button class="heart-button" >
    
    ${heartImage}
    </button>
    </div>
    <div class="video-container">
    <video src="" class="video" muted="muted"></video>
    </div>
    <div class="content-container">
    <p class="content-title">${item.title}
    </p>
    <div class="rating-container">
    <div class="star-container">
     ${printStars(item)}
    </div>
    <p class="reviews">${numberWithCommas(item.reviews)}</p>
    </div>
    <div class="price-container">
    <p class="marketPrice">${item.symbol}${numberWithCommas(Math.floor(item.actualPrice - item.actualPrice * (item.discount / 100)))}</p>
    <p class="actual-price">${item.symbol}${item.actualPrice}</p>
    <p class="discount-percent">(${item.discount}% off)</p>
    </div>
    <div class="delivery-offer">${item.delivery}</div>
    </div>
    </div>
    `
    // console.log(item.star)
    function printStars(){
      if (item.star % 1 === 0) {
        const printedStars = FiveStarsForRating.repeat(item.star);
        return printedStars
      } else {
        const printedStars = FiveStarsForRating.repeat(Math.floor(item.star)) +
        starsForRating;
        return printedStars
      }
    }
    
  
    
    
    
    return popularContents
  })
  // console.log(arrayOfPopularItems)
  popular.innerHTML = arrayOfPopularItems.join('')

}

function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
  return x;
}
