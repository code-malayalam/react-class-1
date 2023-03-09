import {
  createDealsHeading,
  createDealsItem,
  createDiscoverItem,
  createOverviewContent,
  createOverviewItem,
  createPopularItem,
  createSelectionContent,
  createSelectionItem,
  createValentineContent,
  createValentineItem,
  createNavItem,
} from "./templates.js";

import { createStars } from "./stars.js";
import { createPlayButton } from "./playBtn.js";
import { createLikeButton } from "./likeBtn.js";
import { getData } from "./fetchFunction.js";

getData().then((data) => {
  createMainSection(data);
});

function createNavBar(navObjs) {
  const navItemID = document.querySelector(".nav_lists");

  const itemsArray = navObjs.map((item, index) => {
    return createNavItem(navObjs, item, index);
  });
  navItemID.innerHTML = itemsArray.join("");
}

function createDiscoverSection(discoverObjs) {
  const discoverHeading = document.querySelector(".discover_heading");
  discoverHeading.innerHTML = `Discover one-of-a-kind items from independent creators`;

  const discoverItemsID = document.querySelector(".discover_items");

  const discoverItems = discoverObjs.map((item) => {
    return createDiscoverItem(item);
  });

  discoverItemsID.innerHTML = discoverItems.join("");
}

function createDealsSection(dealsObjs) {
  const dealsHeading = document.querySelector(".deals_heading");
  dealsHeading.innerHTML = createDealsHeading();

  const dealsItemsContainer = document.querySelector(".deals_items");

  const dealsItems = dealsObjs.map((item) => {
    return createDealsItem(item);
  });
  dealsItemsContainer.innerHTML = dealsItems.join("");
}

function createPopularSection(popularObjs) {
  const popularHeading = document.querySelector(".popular_heading");
  popularHeading.innerHTML = `Popular gifts rights now`;

  const popularItemsContainer = document.querySelector(".popular_items");

  const popularItems = popularObjs.map((item) => {
    return createPopularItem(item);
  });
  popularItemsContainer.innerHTML = popularItems.join("");

  const popularImgs = popularItemsContainer.querySelectorAll(".popular_img");

  const starContainers = popularItemsContainer.querySelectorAll(".star");

  popularObjs.forEach((obj, index) => {
    starContainers.forEach((container, indx) => {
      if (index === indx) {
        createStars(obj.rating, container);
      }
    });
  });

  createVideoElement(popularObjs, popularImgs);

  popularImgs.forEach((img) => {
    createLikeButton(img);
  });

  const freeDeliveryContainers =
    popularItemsContainer.querySelectorAll(".free_delivery");

  for (let i = 0; i < popularObjs.length; i++) {
    if (popularObjs[i].freeDelivery === true) {
      freeDeliveryContainers.forEach((item, index) => {
        if (i === index) {
          item.innerHTML = `<span>Free delivery</span>`;
        }
      });
    }
  }
  const popularitems = document.querySelectorAll(".popular_item");

  createPopularTooltip(popularitems);

  const filterBtn = document.querySelector(".filter_btn");

  filterBtn.addEventListener("click", () => {
    const filterValue = document.querySelector(".filter_input").value;
    popularObjs.forEach((item, index) => {
      if (item.actualPrice * ((100 - item.discount) / 100) < filterValue) {
        popularItemsContainer.children[index].style.display = "none";
      }
    });
  });
}

function createValentineSection(valentineObjs) {
  const valentineID = document.querySelector(".valentine");

  const valentineItems = valentineObjs.map((item) => {
    return createValentineItem(item);
  });

  valentineID.innerHTML = createValentineContent(valentineItems);

  const valentineItemContainers = valentineID.querySelectorAll(
    ".valentine_item_container"
  );

  createVideoElement(valentineObjs, valentineItemContainers);

  valentineItemContainers.forEach((container, index) => {
    createLikeButton(container);
    valentineObjs.forEach((obj, indx) => {
      if (index === indx) {
        container.innerHTML += `
        <div class="valentine_price">${obj.price}</div>`;
      }
    });
  });
}

function createSelectionsSection(selectionObjs) {
  const selection = document.querySelector(".selections");

  const selectionItems = selectionObjs.map((item) => {
    return createSelectionItem(item);
  });

  selection.innerHTML = createSelectionContent(selectionItems);
}

function createOverviewSection(overviewObjs) {
  const overviewID = document.querySelector(".overview_container");

  const overviewItems = overviewObjs.map((item, index) => {
    return createOverviewItem(item, index);
  });

  overviewID.innerHTML = createOverviewContent(overviewItems);
}

function createVideoElement(objs, containers) {
  for (let i = 0; i < objs.length; i++) {
    if (objs[i].videoURL) {
      containers.forEach((container, indx) => {
        if (i === indx) {
          createPlayButton(container);
          container.innerHTML += `
                                <div class="video_container">
                                <video src="${objs[i].videoURL}" muted loop class="vdeo"></video>
                                </div>
                                    `;
          container.addEventListener("mouseenter", () => {
            container.querySelector("video").play();
          });
        }
      });
    }
  }
}

function createPopularTooltip(containers) {
  containers.forEach((item) => {
    const text = item.querySelector(".text");
    item.addEventListener("mousemove", (e) => {
      const x = e.pageX;
      const y = e.pageY;

      text.style.left = x + 10 + "px";
      text.style.top = y + 12 + "px";
    });
  });
}

function createNavToggle() {
  const toggleItems = document.querySelectorAll(".footer_nav_item_container");

  toggleItems.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
    });
  });
}
createNavToggle();

function createMainSection(data) {
  createNavBar(data.navObjects);
  createDiscoverSection(data.discoverObjects);
  createDealsSection(data.dealsObjects);
  createPopularSection(data.popularObjects);
  createValentineSection(data.valentineObjects);
  createSelectionsSection(data.selectionObjects);
  createOverviewSection(data.overviewObjects);
}
