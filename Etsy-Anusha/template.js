import { addToHeartTxt, valentineGiftsHeading, valentineShopHeading, arrowRight } from "./constants.js";
export function discoverItemTemplate(item) {

    const {
        url,
        text
    } = item;

    return `
       <div class="overview">
            <div class="img_container">
                 <img src="${url}">
            </div>
            <div class="img_text">
                          ${text}
            </div>
        </div>
    `
}

export function dealsOfTheDayTemplate(headingData) {
    const {
        deal,
        shop,
        url
    } = headingData;

    return `
                        <div class="deals">${deal}</div>
                        <div class="shop">
                            <p>${shop}</p>
                            <img src="${url}">
                        </div>
                   `
}

export function dealsCardsTemplate(item) {
    const {
        url,
        offer,
        heading
    } = item;

    return `
                        <div class="deals_card">
                            <div class="deal_items">
                                <div class="deal_item_container">
                                    <div class="deal_img">
                                        <img src="${url}">
                                    </div>
                                    <div class="deals_text">
                                        <span>${offer}</span>
                                        <p>${heading}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
}

export function popularGiftSectionTemplate(item) {
    const {
        imageURL,
        text,
        ratingCount,
        oldPrice,
        discount
    } = item;

    const price = Math.floor(oldPrice * (100 - discount) / 100).toFixed(0);

    return `
                        <div class="popular_item_container">
                            <div class="popular_card">
                                <div class="popular_card_container">
                                    <div class="popular_img">
                                        <img src="${imageURL}">
                                    </div>
                                    <div class="popular_video_container"></div>
                                </div>
                                <button class="like_btn"></button>
                                <div class="popular_text">
                                    <p>${text}</p>
                                    <div class="star">
                                        <div class="rating"></div>
                                        <span class="rating_count">(${ratingCount})</span>
                                    </div>
                                    <div class="price_container">
                                        <span class="current_price">
                                            ₹ ${price.toLocaleString()} 
                                        </span>
                                        <span class="old_price">
                                            ₹ ${oldPrice.toLocaleString()}
                                        </span>
                                        <span class="discount">
                                        (${discount}% off)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
}

export function valentineCardTemplate(item) {
    const {
        imgURL
    } = item

    return `
    <div class="valentine_card">
        <div class="valentine_card_container">
            <img src="${imgURL}">
            <div class="button"></div>
        </div>
    </div>
    `
}

export function valentineCardsSectionTemplate(cards) {

    return `
    <div class="valentine_heading_container">
        <p class="valentine_heading_editors_pick">
            Editors' Picks
        </p>
        <p class="valentine_gifts_heading">
            ${valentineGiftsHeading}
        </p>
        <div class="valentine_shop_text">
            <p class="valentine_shop_heading">
                ${valentineShopHeading}
            </p>
        </div>
        <img class="valentines_arrow_right" src="${arrowRight}">
    </div>
    ${cards.join("")}

    <div class="add_to_heart">
        <p class="add_to_heart_text">
            ${addToHeartTxt}
        </p>
    </div>
    `
}