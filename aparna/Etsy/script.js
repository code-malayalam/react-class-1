"use strict";
import { createDealContainer } from "./deal.js";
import { generatePopularContainer } from "./popular.js";
import { createDiscoverContainer } from "./discover.js";
import { generateAboutEtsy } from "./about.js";
import { mainInnerHTML } from "./main.js";
import { whatIsEtsyInnerHTML } from "./what.js";
import { createFooterHTML } from "./footer.js";
import { createNavBar, clearPopularContainer,createDropdowns,toFilterPrice,createSocialIcons } from "./functions.js";
// constants and configurations

const navDivID = "#categories";


mainInnerHTML();
whatIsEtsyInnerHTML();
createFooterHTML();

const generateHomePage = fetch(
  "https://raw.githubusercontent.com/Aparnakrishnan-Vonnue/Vonnue_Training/master/Websites/Etsy/data.JSON",
  {
    method: "GET",
  }
)
  .then((response) => response.json())
  .then((generateHomePage) => {
  
    createNavBar(navDivID,generateHomePage.categoryList,"li","category-list");
    createDiscoverContainer(generateHomePage.discoverItems);
    createDealContainer(generateHomePage.clothCategory);
    generatePopularContainer(generateHomePage.popularItems);
    generateAboutEtsy(generateHomePage.whatEtsyDo);
    createSocialIcons(generateHomePage.socialIcons);
    createDropdowns()
    toFilterPrice(generateHomePage.popularItems);
  });



  