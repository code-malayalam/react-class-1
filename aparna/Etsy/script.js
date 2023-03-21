"use strict";

import {
  createNavBar,
  clearPopularContainer,
  createDropdowns,
  toFilterPrice,
  createSocialIcons,
} from "./functions.js";

import {
  generateAboutEtsy,
   
  createDealContainer,
  createDiscoverContainer,
  createFooterHTML,
  mainInnerHTML,
  generatePopularContainer,
  whatIsEtsyInnerHTML,
} from "./templates.js";

// import GenerateTemplates from "../etsy_react/src/template.js";

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
    createNavBar(
      navDivID,
      generateHomePage.categoryList,
      "li",
      "category-list"
    );
    createDiscoverContainer(generateHomePage.discoverItems);
    createDealContainer(generateHomePage.clothCategory);
    generatePopularContainer(generateHomePage.popularItems);
    generateAboutEtsy(generateHomePage.whatEtsyDo);
    createSocialIcons(generateHomePage.socialIcons);
    createDropdowns();
    toFilterPrice(generateHomePage.popularItems);
    // <GenerateTemplates />
  });
