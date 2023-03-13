const star = "asset/star.svg";
const halfStar = "asset/halfstar.svg";

export function createStars(number, starsContainer) {
    for (let j = 0; j < Math.floor(number); j++) {
      starsContainer.innerHTML += `
          <img src="${star}" />
        `;
    }
    if (Math.floor(number) !== number) {
      starsContainer.innerHTML += `
          <img src="${halfStar}" />
        `;
    }
  }