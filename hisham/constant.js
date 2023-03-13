const category = document.querySelector(".category");
const discoverItems = document.querySelector(".image-container");
const dealsCard = document.querySelector(".image-cards");
const sinlgeCard = document.querySelector(".single-card");
const dropdown = document.querySelectorAll(".main-drop-down");
const icon = document.querySelectorAll(".icon");
const totalContainer = document.querySelector(".total-card-holder");
const inputValue = document.querySelector(".toget-input");
const buttonInput = document.querySelector(".input-button");
const buttonClear = document.querySelector(".clear-button");
const toatlSection = document.querySelectorAll(".total-section");
const svgHalfRating = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path class="foreground" d="M12 4c-.224 0-.42.15-.48.366l-1.67 5.642H4.5c-.218.002-.41.145-.472.354-.064.208.014.433.193.557l4.307 3.07-1.5 5.33c-.08.202-.02.433.15.57.17.14.41.15.59.03L12 16.98V4z"></path></svg>`;
let svgFullRating = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="18" height="18"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z" fill="#222222"></path></svg>`;

export {
  category,
  discoverItems,
  dealsCard,
  sinlgeCard,
  dropdown,
  icon,
  totalContainer,
  inputValue,
  buttonInput,
  buttonClear,
  toatlSection,
  svgHalfRating,
  svgFullRating,
};
