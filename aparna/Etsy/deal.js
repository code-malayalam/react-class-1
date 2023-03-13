export const createDealContainer = (clCat) => {
  const clothingList = document.querySelector(".clothingList");
  const arrayOfDeals = clCat.map((item) => {
    const dealContents = `
    <div class = "clothContainer">
      <li class = "listOfClothes">
        <div class = "clothes">
        <img class="womensWear" src = "${item.url}"></div>
        <div class = "dealTextContainer">
          <p class = "discountPercent">
          ${item.discount}
          </p>
          <span class = "tagOfDeals">
          ${item.clothText}
          </span>
        </div>
      </li>
    </div>
  `
  return dealContents
  })    
  clothingList.innerHTML = arrayOfDeals.join('')
};

