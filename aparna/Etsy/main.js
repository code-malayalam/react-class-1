export function mainInnerHTML(){
const mainContainer = document.querySelector(".mainContainer");
  mainContainer.innerHTML = `

<div class="mainContainer">
  <div class="heading">
    <h2 class="heading-text">Discover one-of-a-kind items from independent creators</h2>
  </div>
  <div class="bubbleContainer">
    <div class="halfContainer"></div>
    <ul class="bubbleList"></ul>
  </div>

<div class="dealContainer">
  <div class="dealsHeadContainer">
    <h3 class="dealsHeading">Deals of the day</h3>
      <p class="shopDeals">
        Shop all deals
          <div class="shop">
            <img class="arrow" src="data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 12 24%22%3E%3Cpath fill%3D%22%23222222%22d%3D%22M11.3,12.7L12,12l-0.7-0.7l-4-4c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L8.2,11H1c-0.6,0-1,0.4-1,1s0.4,1,1,1h7.2l-2.3,2.3 c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3C7.3,16.7,11.3,12.7,11.3,12.7z%22%2F%3E%3C%2Fsvg%3E">
          </div>
      </p>
      </div>
      <ul class = "clothingList"></ul>
</div>

<div class="popular-container">
  <div class="popular-header">
    <h2 class="popular-heading-name">Popular gifts right now</h2>
  </div>
  <div class="price-filter">
    <input class="price-input" type="number">
      <button class="filter">filter</button>
  </div>
  <ul class="popular-sub-container"></ul>
`;
}