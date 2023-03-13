import { dealsTemplate, giftsTemplate, overviewTemplate } from './template.js';
import a from './fetch.js'

const elements = document.querySelector('.elements');
const overviewList = document.querySelector('.overview-list');
const dealsList = document.querySelector('.deals-items');
const giftList = document.querySelector('.gift-list');
const giftSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 5 22 12" width="16" height="12" aria-hidden="true" focusable="false"><path d="M5,6A1,1,0,0,0,4,7v3H5v9a1,1,0,0,0,1,1h5V6H5Z"></path><path d="M19,6H13.007A4.245,4.245,0,0,0,14.97,3.744a1.614,1.614,0,0,0-2.65-1.375,1.757,1.757,0,0,0-.315.324,1.753,1.753,0,0,0-.315-0.324A1.615,1.615,0,0,0,9.042,3.746,4.257,4.257,0,0,0,11.006,6H13V20h5a1,1,0,0,0,1-1V10h1V7A1,1,0,0,0,19,6Z"></path></svg> `;
const cursor = document.querySelectorAll('.gift-name');
const likeSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="18" height="18"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z" fill="#A61A2E"></path></svg>`;
const likedImageSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="18" height="18"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" fill="#222222"></path></svg>`;

const editorsList = document.querySelectorAll('.editors');

  
  a().then(response => response.json())
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

    const overview = data.overview.map(function (item) {
      const html = overviewTemplate(item);

      return html;
    });

    overviewList.innerHTML = overview.join('');

    const deals = data.deals.map(function (item) {
      const html = dealsTemplate(item);

      return html;
    });

    dealsList.innerHTML = deals.join('');
    // console.log(data.gifts);
    const gifts = data.gifts.map(function (item, idx) {
      // console.log(item)
      const html = giftsTemplate(item, idx);

      return html;
    });
    giftList.innerHTML = gifts.join('');

    const giftElements = document.querySelectorAll('.gift-items');

    function createTooltip() {  
      giftElements.forEach(item => {
        item.addEventListener('mousemove', e => {
          let x = e.pageX - e.target.offsetLeft;
          let y = e.pageY - e.target.offsetTop + 20;

          // console.log(e.pageX, e.pageY);

          const textElement = item.querySelector('.gift-name');
          textElement.style.left = `${x}px`;
          textElement.style.top = `${y}px`;
        });
      });
    }

    createTooltip();

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

    function generateEtsyHomePage() {
      createNavBar(elements, data.list, 'li', 'list');
    }
    generateEtsyHomePage();
  });
