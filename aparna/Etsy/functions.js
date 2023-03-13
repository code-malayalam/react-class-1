const createNavBar = (divID, cList, elmType, itemClassName) => {
  const div = document.querySelector(divID);
  for (let i = 0; i < cList.length; i++) {
    const listOfCategory = document.createElement(elmType);
    listOfCategory.classList.add(itemClassName);
    if (cList[i].hasOwnProperty("img") && cList[i].img != "") {
      listOfCategory.innerHTML = cList[i].img + cList[i].title;
    } else {
      listOfCategory.innerHTML = cList[i].title;
    }

    div.appendChild(listOfCategory);
  }
};

function clearPopularContainer() {
  const popular = document.querySelector(".popular-sub-container");
  popular.innerHTML = "";
}

function createDropdowns(){
  const dropDownBoxes = document.querySelectorAll(".drop-downs");
  const chevronIcon = document.querySelectorAll(".chevron-icon");
  const dropBoxes = document.querySelectorAll(".dropBox");
  dropDownBoxes.forEach((item, i) => {
    item.addEventListener("click", () => {
      dropBoxes[i].classList.toggle("active");
      chevronIcon[i].classList.toggle("rotation");
    });
  });
}


function toFilterPrice(pItems) {
  const filterBtn = document.querySelector(".filter");
  const priceInput = document.querySelector(".price-input");
  priceInput.setAttribute("type", "number");

  filterBtn.addEventListener("click", () => {
    const filteredValue = pItems.filter((items, i) => {
      const price = Math.floor(
        items.actualPrice - items.actualPrice * (items.discount / 100)
      );

      return price >= Number(priceInput.value);
    });

    clearPopularContainer();
    generatePopularContainer(filteredValue);
    console.log(filteredValue);
  });
  
}

const createSocialIcons = (icons) => {
  const iconsContainer = document.querySelector(".icons-container");
  for (let i = 0; i < icons.length; i++) {
    const iconsList = document.createElement("li");
    iconsList.classList.add("icons-list");
    iconsContainer.appendChild(iconsList);
    iconsList.innerHTML = icons[i].icon;
  }
};

export{
  createNavBar,clearPopularContainer,createDropdowns,toFilterPrice,createSocialIcons
}