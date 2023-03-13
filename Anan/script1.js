const elements = document.querySelector('.elements');
const overviewList = document.querySelector('.overview-list');
const dealsList = document.querySelector('.deals-items');
const giftList = document.querySelector('.gift-list');
const giftSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 5 22 12" width="16" height="12" aria-hidden="true" focusable="false"><path d="M5,6A1,1,0,0,0,4,7v3H5v9a1,1,0,0,0,1,1h5V6H5Z"></path><path d="M19,6H13.007A4.245,4.245,0,0,0,14.97,3.744a1.614,1.614,0,0,0-2.65-1.375,1.757,1.757,0,0,0-.315.324,1.753,1.753,0,0,0-.315-0.324A1.615,1.615,0,0,0,9.042,3.746,4.257,4.257,0,0,0,11.006,6H13V20h5a1,1,0,0,0,1-1V10h1V7A1,1,0,0,0,19,6Z"></path></svg> `;
const cursor = document.querySelectorAll('.gift-name');
const likeSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="18" height="18"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z" fill="#A61A2E"></path></svg>`;
const likedImageSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="18" height="18"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" fill="#222222"></path></svg>`;
const playButtonSVG =
  '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="18" height="18"><polygon points="4 4 4 20 20 12 4 4" fill="#222222"></polygon></svg>';
const starSVG =
  '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="14" height="14"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z" fill="#222222"></path></svg>';
const halfStar =
  '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="18" height="18"><path class="background" d="M12.007 16.97l4.21 2.95c.182.12.422.11.592-.027.17-.138.23-.37.15-.574l-1.484-5.33 4.306-3.073c.182-.12.265-.347.203-.557-.065-.21-.258-.352-.477-.352h-5.35l-1.67-5.642c-.06-.215-.257-.363-.48-.363-.225 0-.42.148-.482.363v12.94l.48-.335z" fill="#E1E3DF"></path><path class="foreground" d="M12 4c-.224 0-.42.15-.48.366l-1.67 5.642H4.5c-.218.002-.41.145-.472.354-.064.208.014.433.193.557l4.307 3.07-1.5 5.33c-.08.202-.02.433.15.57.17.14.41.15.59.03L12 16.98V4z" fill="#222222"></path></svg>';
const editorsList = document.querySelectorAll('.editors');

fetch(
  'https://raw.githubusercontent.com/anannasreen/Training-Oct/main/Etsy/pageData.json'
)
  .then(response => response.json())
  .then(data => {
    const createNavBar = (divClass, objectList, elmType, itemClassName) => {
      for (let i = 0; i < objectList.length; i++) {
        const items = document.createElement(elmType);
        items.classList.add(itemClassName);
        divClass.appendChild(items);
        if (objectList[i].img === '' && objectList[i].img !== giftSVG) {
          items.innerHTML = `${objectList[i].title}`;
        } else {
          items.innerHTML = `${objectList[i].img}${objectList[i].title}`;
        }
      }
    };

    const createOverviewSection = (objectList, elmType) => {
      for (let key = 0; key < objectList.length; key++) {
        const overviewEl = document.createElement('li');
        overviewList.appendChild(overviewEl);

        const overviewImg = document.createElement('div');
        overviewEl.appendChild(overviewImg);
        overviewImg.classList.add('overview-img');

        const overviewImage = document.createElement('img');
        overviewImage.src = `${objectList[key].url}`;
        overviewImg.appendChild(overviewImage);

        const overviewText = document.createElement('p');
        overviewEl.appendChild(overviewText);
        overviewText.innerHTML = `${objectList[key].name}`;
      }
    };

    const createDealsElm = (objectList, elmType) => {
      for (let key = 0; key < objectList.length; key++) {
        const dealsEl = document.createElement(elmType);
        dealsList.appendChild(dealsEl);

        const dealsImg = document.createElement('div');
        dealsEl.appendChild(dealsImg);

        dealsImg.classList.add('deals-img');
        const dealsImage = document.createElement('img');
        dealsImg.appendChild(dealsImage);
        dealsImage.src = `${objectList[key].url}`;

        const dealsText = document.createElement('div');
        dealsText.classList.add('deals-txt');
        dealsEl.appendChild(dealsText);

        const discountDeals = document.createElement('span');
        dealsText.appendChild(discountDeals);
        discountDeals.innerHTML = `${objectList[key].discount}`;

        const categoryDeals = document.createElement('p');
        dealsText.appendChild(categoryDeals);
        categoryDeals.innerHTML = `${objectList[key].category}`;
      }
    };

    const createGiftElm = objectList => {
      for (let key = 0; key < objectList.length; key++) {
        const giftElement = document.createElement('div');
        giftList.appendChild(giftElement);

        giftElement.classList.add('gift-items');
        const giftImg = document.createElement('div');
        giftElement.appendChild(giftImg);

        giftImg.classList.add('gift-img');

        if (objectList[key].urlType === 'Photo') {
          const giftImage = document.createElement('img');
          giftImg.appendChild(giftImage);
          giftImage.src = `${objectList[key].url}`;
        } else {
          const giftVideo = document.createElement('video');
          giftImg.appendChild(giftVideo);
          giftVideo.classList.add('video');
          giftVideo.poster = `${objectList[key].url}`;
          giftVideo.loop = 'true';
          giftVideo.src = `${objectList[key].video}`;
        }

        const videos = document.querySelectorAll('.video');
        videos.forEach(video => {
          video.addEventListener('mouseover', () => {
            video.play();
          });
          video.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
          });
        });

        const likeGift = document.createElement('div');
        giftImg.appendChild(likeGift);
        likeGift.classList.add('like-gift');
        likeGift.innerHTML = likedImageSVG;

        const likeGiftElm = document.querySelectorAll('.like-gift');

        let state = 0;
        likeGiftElm.forEach(element => {
          element.addEventListener('click', () => {
            if (state === 0) {
              element.innerHTML = likeSVG;
              state = 1;
            } else {
              element.innerHTML = likedImageSVG;
              state = 0;
            }
          });
        });

        if (objectList[key].urlType === 'Video') {
          const playButtonTab = document.createElement('div');
          playButtonTab.classList.add('play-btn');
          giftImg.appendChild(playButtonTab);
          playButtonTab.innerHTML = playButtonSVG;
        }

        const giftText = document.createElement('div');
        giftText.classList.add('gift-txt');
        giftElement.appendChild(giftText);

        const giftTextHeading = document.createElement('h3');
        giftTextHeading.innerHTML = `${objectList[key].name}`;
        giftText.appendChild(giftTextHeading);

        const ratingElement = document.createElement('div');
        ratingElement.classList.add('rating');
        giftText.appendChild(ratingElement);

        const starRatingElement = document.createElement('div');
        starRatingElement.classList.add('star-rating');
        ratingElement.appendChild(starRatingElement);
        starRatingElement.innerHTML = `${starRating()}`;

        const ratingText = document.createElement('p');
        ratingElement.appendChild(ratingText);
        ratingText.innerHTML = `(${objectList[key].rating})`;

        const priceElement = document.createElement('div');
        priceElement.classList.add('price');
        giftText.appendChild(priceElement);

        const actualPriceTag = document.createElement('p');
        actualPriceTag.classList.add('priceActual');
        priceElement.appendChild(actualPriceTag);
        actualPriceTag.innerHTML = `${objectList[key].currencySymbol}`;

        const priceCalculated = document.createElement('p');
        priceCalculated.classList.add('priceCalculated');
        priceCalculated.innerHTML = `${discountPercentage(
          objectList[key].actualprice,
          objectList[key].discount
        )}`;
        priceElement.appendChild(priceCalculated);

        const currentPrice = document.createElement('span');
        priceElement.appendChild(currentPrice);
        currentPrice.innerHTML = `${objectList[key].currencySymbol}${objectList[key].actualprice}`;

        const discountElement = document.createElement('a');
        priceElement.appendChild(discountElement);
        discountElement.innerHTML = `(${objectList[key].discount}% off)`;

        const textElement = document.createElement('div');
        textElement.classList.add('gift-name');
        giftElement.appendChild(textElement);

        textElement.innerHTML = objectList[key].name;

        giftElement.addEventListener('mousemove', e => {
          x = e.pageX - giftElement.offsetLeft;
          y = e.pageY - giftElement.offsetTop + 20;
          textElement.style.top = `${y}px`;
          textElement.style.left = `${x}px`;
        });

        if (objectList[key].actualprice > 2000) {
          const deliveryElement = document.createElement('div');
          deliveryElement.classList.add('delivery');
          deliveryElement.innerHTML = 'FREE Delivery';
          giftElement.appendChild(deliveryElement);
        }

        function priceRange() {
          const filterBtn = document.getElementById('filter-btn');
          const filterInput = document.getElementById('filter');
          const giftItems = document.querySelectorAll('.gift-items');
          filterBtn.addEventListener('click', () => {
            const giftItems = document.querySelectorAll('.gift-items');
            const prices = document.querySelectorAll('.priceCalculated');
            prices.forEach(price => {
              let accumulator = +price.innerHTML;
              console.log(+price.innerHTML);
              const acc = accumulator <= filterInput.value;
              console.log(acc);
              if (acc) {
                giftItems.innerHTML = '';
                console.log(giftItems);
              }
            });
          });
        }
        priceRange();
      }
    };

    function starRating() {
      let x = '';

      for (let i = 1; i < data.gifts.length; i++) {
        x += starSVG;
      }
      return x;
    }

    function discountPercentage(actualPrice, discounts) {
      return (discountPrice = Math.round(
        actualPrice * ((100 - discounts) / 100)
      ));
    }

    const footer = document.querySelectorAll('.footer-list');
    const footerItems = document.querySelectorAll('.footer-list-mobile');
    const footerList = document.querySelectorAll('.footer-list-items');

    footer.forEach(element => {
      element.addEventListener('click', () => {
        element.children[0].classList.toggle('active');
        element.children[1].classList.toggle('show');
        element.children[0].children[1].classList.toggle('active');
      });
    });

    function generateEtsyHomePage(pageData) {
      createNavBar(elements, data.list, 'li', 'list');
      createOverviewSection(data.overview, 'li');
      createDealsElm(data.deals, 'li');
      createGiftElm(data.gifts);
    }
    generateEtsyHomePage();
  });
