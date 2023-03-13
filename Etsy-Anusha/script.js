import { dealsCardsTemplate, dealsOfTheDayTemplate, discoverItemTemplate, popularGiftSectionTemplate, valentineCardsSectionTemplate, valentineCardTemplate } from "./template.js";

import { btnSVG, discoverHeadingText, valentineGiftSection, ratingStar, ratingStarHalf, likeBtnSvg, redLikeBtn, popularHeadingText } from "./constants.js";

import { fetchData } from "./fetch.js";

fetchData()

    .then(etsyHomeData => {
      
            createNavItems(etsyHomeData.categories);
            generateDiscoverItems(discoverHeadingText, etsyHomeData.overviewCardItems);
            createDealsOfTheDaySection(etsyHomeData);
            createValentineDayGiftsSection(etsyHomeData.valentineGiftItems);
            createFooterListItems(etsyHomeData);
            generateFilter(etsyHomeData.popularCardItems);
        
    })

        function createNavItems(navItems) {

            const categoryListItems = document.getElementById('category_list');
            const category = navItems.map(function (item) {

                if (item.hasOwnProperty('img') && item.img !== "") {
                    return `
                            <li>${item.img + item.title}</li>
                        `;
                } else {
                    return `
                            <li>${item.title}</li>
                        `;
                }

            })

            categoryListItems.innerHTML = category.join("");
        }

        function generateDiscoverItems(headingText, cardItems) {

            const heading = document.getElementById('heading');
            const overviewContainer = document.getElementById('overview_container');
            heading.innerHTML = headingText;

            const discoverOverViewContainer = cardItems.map((item) => {
                return discoverItemTemplate(item)
            })

            overviewContainer.innerHTML = discoverOverViewContainer.join("");
        }

        function createDealsOfTheDayHeading(headingData) {

            const dealsOfTheDay = document.querySelector(".deals_of_the_day");
            dealsOfTheDay.innerHTML = dealsOfTheDayTemplate(headingData)
        }

        function createDealsOfTheDayCard(dealsItems) {

            const dealCardsContainer = document.querySelector(".deals_container");
            const dealCards = dealsItems.map((item) => {
                return dealsCardsTemplate(item);
            })

            dealCardsContainer.innerHTML = dealCards.join("");

        }

        function createDealsOfTheDaySection(etsyHomeData) {

            createDealsOfTheDayHeading(etsyHomeData.dealHeadingData);
            createDealsOfTheDayCard(etsyHomeData.dealCardContents);
        }

        function createPopularGiftsHeading(headingText) {

            const popular = document.querySelector(".popular");
            popular.innerText = headingText;
        }

      

        function createPopularGiftsSection(popularItems) {

            createPopularGiftsHeading(popularHeadingText);
            const container = document.querySelector(".popular_container");
            const popularCardItemContainer = popularItems.map((item) => {

                return popularGiftSectionTemplate(item)
            })

            container.innerHTML = popularCardItemContainer.join("");
            const likeBtn = container.querySelectorAll(".like_btn");

            likeBtn.forEach((btn) => {
                let state = 0
                btn.innerHTML = likeBtnSvg;

                btn.addEventListener("click", () => {
                    if (state === 1) {
                        btn.innerHTML = likeBtnSvg;
                        state = 0;

                    } else {
                        btn.innerHTML = redLikeBtn;
                        state = 1;

                    }
                });
            })

            const VideoImgContainer = container.querySelectorAll(".popular_card_container");

            for (let i = 0; i < popularItems.length; i++) {
                if (popularItems[i].videoURL) {
                    VideoImgContainer.forEach((container, index) => {
                        if (i === index) {
                            const popularVideoContainer = container.querySelector('.popular_video_container')

                            popularVideoContainer.innerHTML = `
                                    <video class="video" src="${popularItems[i].videoURL}"></video>
                                `

                            const popularVideo = popularVideoContainer.querySelector('.video');

                            popularVideoContainer.addEventListener('mouseenter', () => {
                                popularVideo.style.opacity = 1;
                                popularVideo.play();
                            })

                            popularVideoContainer.addEventListener('mouseout', () => {
                                popularVideo.style.opacity = 0;
                            })
                        }
                    })
                }

                const description = document.querySelectorAll(".popular_text");
                const rating = document.querySelectorAll('.rating');

                rating.forEach((rate, idx) => {
                    if (i === idx) {
                        for (let j = 0; j < Math.floor(popularItems[i].rating); j++) {

                            rate.innerHTML += `
                                    <span class="popular_rating">${ratingStar}</span>
                                `
                        }
                    }
                })

                if (Math.floor(popularItems[i].rating) < popularItems[i].rating) {
                    rating.forEach((rate, idx) => {
                        if (i === idx) {

                            rate.innerHTML += `
                                    <span class="popular_rating">${ratingStarHalf}</span>
                                `
                        }
                    })
                }

                if (popularItems[i].hasOwnProperty("delivery") && popularItems[i].delivery !== "") {
                    description.forEach((desc, indx) => {
                        if (i === indx) {
                            desc.innerHTML += `
                                    <span class="free_delivery>${popularItems[i].delivery}</span>
                                `
                        }
                    })
                }

                const selectButton = document.querySelectorAll(".popular_img");
                selectButton.forEach((item, indx) => {
                    if (i === indx) {

                        if (popularItems[i].videoURL) {

                            item.innerHTML += `
                                    <button class="play_button">${btnSVG}</button>
                                `
                        }
                    }
                })

                const popularCardContainer = document.querySelectorAll(".popular_item_container");

                popularCardContainer.forEach((item, idx) => {
                    if (i === idx) {
                        const popularPopupCard = document.createElement("div");
                        popularPopupCard.classList.add("popular_pop");
                        popularPopupCard.innerHTML = popularItems[i].text;
                        item.appendChild(popularPopupCard);

                        item.addEventListener("mousemove", (event) => {
                            let x = event.pageX;
                            let y = event.pageY;

                            popularPopupCard.style.left = `${x - item.offsetLeft}px`
                            popularPopupCard.style.top = `${y - item.offsetTop + 20}px`;
                            popularPopupCard.style.opacity = 1

                        })
                        item.addEventListener("mouseout", () => {
                            popularPopupCard.style.opacity = 0
                        })
                    }
                })
            }
        }

        function createValentineDayGiftsSection(valentineSectionItems) {

            const valentineSection = document.getElementById(valentineGiftSection);
            const valentineCards = valentineSectionItems.map((item) => {
                return valentineCardTemplate(item);
            })

            valentineSection.innerHTML = valentineCardsSectionTemplate(valentineCards)
            const button = document.querySelectorAll('.button')

            button.forEach((btn, indx) => {

                for (let i = 0; i < valentineSectionItems.length; i++) {
                    if (valentineSectionItems[i].videoURL && valentineSectionItems[i].videoURL !== "") {
                        if (i === indx) {

                            btn.innerHTML += `
                                    <button class="play_button">${btnSVG}</button>
                                `
                        }
                    }
                }
            })
        }

        function createFooterListItems() {

            const footerListItems = document.querySelector(".footer_list_items");
            footerListItems.addEventListener("click", (e) => {

                if (e.target.classList.contains('item')) {
                    const list = e.target.nextElementSibling;
                    list.classList.toggle('unactive')
                    e.target.children[1].classList.toggle('up')
                }

                if (e.target.classList.contains('arrow_down')) {
                    e.target.parentNode.nextElementSibling.classList.toggle('unactive');
                    e.target.classList.toggle('up');
                }

                if (e.target.classList.contains('item_text')) {
                    e.target.parentNode.nextElementSibling.classList.toggle('unactive');
                    e.target.nextElementSibling.classList.toggle('up');
                }
            });
        }
        function generateFilter(popularItems) {

            const filterBtn = document.querySelector('.filter_btn');
            let filterInputValue = 0;

            let state = 0
            if (state === 0) {
                createPopularGiftsSection(popularItems);
            }

            filterBtn.addEventListener("click", () => {
                state = 1
                if (state === 1) {
                    const container = document.querySelectorAll(".popular_item_container");
                    container.forEach((element) => {
                        element.classList.add("hidden")
                    })

                    filterInputValue = document.querySelector('.filter_input').value;
                    const val = popularItems.filter(function (item, arg) {
                        const price = Math.floor(item.oldPrice * (100 - item.discount) / 100).toFixed(0)

                        return Number([price]) > Number(filterInputValue)
                    })

                    createPopularGiftsSection(val);
                }

            })
        }