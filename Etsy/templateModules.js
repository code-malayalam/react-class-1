import { playButton } from "./script.js"
import { ratingStars } from "./script.js"
import { calculateActualPrice } from "./script.js"
import { popularDelivery } from "./script.js"
import { wishlistHover } from "./script.js"
import { athenusNewPrice } from "./script.js"
import { etsyJson } from "./response.js"


function discoverCards(element) {
    const {
        url,
        name
    } = element
    return `<div class="discover_card">
            <div class="discover_card_img">
            <img src="${url}">
            </div>
            <div class="discover_card_name">${name}
            </div>
        </div>
        `
}

function createdealCards(element) {

    const {
        url,
        offer,
        name
    } = element
    return `
        <div class="deal_card">
        <div class="deal_image">
        <img src="${url}">
        </div>
        <div class="deals_off">${offer}</div>
        <div class="deals_name">${name}</div>
        
        </div>
        `
}

function popularcardList(element) {
    const {
        url,
        button,
        videoURL,
        name,
        rating,
        raters,
        symbol,
        oldPrice,
        offer,
        delivery,
        wishlist,
        activewishlist,
        detail
    } = element
    return `
    <div class="popular_card">
        <div class="popular_image">
            <img src=${url}>
            ${playButton(button, videoURL)}
        </div>
       
      
        <div class="popular_name">
            ${name}
        </div>

        <div class="popular_ratings">
            
                ${ratingStars(rating)}
            <div class="rated">
                (${raters})
            </div>
        </div>
        <div class="popular_amount">
        <div class="popular_price">
            ${symbol}${(calculateActualPrice(oldPrice, offer))}
        </div>
        <div class="popular_offer">
            <div class="popular_oldprice">
                ${symbol}${oldPrice}
            </div>
            <div class="new_offer">
            ${offer}% off on
            </div>
        </div>                                                                                    
         ${popularDelivery(delivery)}
         </div>
         <div class="wishlist_items">
            <button class="wishlist_hover">
                ${wishlistHover(wishlist, activewishlist)}
            </button>
         </div>
         <div class="popular_detail">
         ${detail}
         </div>

    </div>

`
}
function athenusCardslistItem(element){
    const {
        url,
        currencySymbol,
        newPrice,
        oldPrice
    } = element
    return `
    <div class="athenus_card">
        <div class="athenus_card_img">
            <img src= ${url}>
        </div>
        <div class="price">
            <div class="new_price">
                ${currencySymbol}${newPrice}
             </div>
            ${athenusNewPrice(oldPrice, currencySymbol)}
        </div>
    </div>
    `
}


export { discoverCards }
export { createdealCards }
export {popularcardList}
export { athenusCardslistItem}