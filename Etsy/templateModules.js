import { playButton } from "./script.js"
import { rating } from "./script.js"
import { calculateActualPrice } from "./script.js"
import { popularDelivery } from "./script.js"
import { wishlistHover } from "./script.js"
import { athenusNewPrice } from "./script.js"

function discoverCards(element) {
    return `<div class="discover_card">
            <div class="discover_card_img">
            <img src="${element.url}">
            </div>
            <div class="discover_card_name">${element.name}
            </div>
        </div>
        `
}

function createdealCards(element) {
    return `
        <div class="deal_card">
        <div class="deal_image">
        <img src="${element.url}">
        </div>
        <div class="deals_off">${element.offer}</div>
        <div class="deals_name">${element.name}</div>
        
        </div>
        `
}

function popularcardList(element) {
    return `
    <div class="popular_card">
        <div class="popular_image">
            <img src=${element.url}>
            ${playButton(element.button, element.videoURL)}
        </div>
       
      
        <div class="popular_name">
            ${element.name}
        </div>

        <div class="popular_ratings">
            
                ${rating(element.rating)}
            <div class="rated">
                (${element.raters})
            </div>
        </div>
        <div class="popular_amount">
        <div class="popular_price">
            ${element.symbol}${(calculateActualPrice(element.oldPrice, element.offer))}
        </div>
        <div class="popular_offer">
            <div class="popular_oldprice">
                ${element.symbol}${element.oldPrice}
            </div>
            <div class="new_offer">
            ${element.offer}% off on
            </div>
        </div>                                                                                    
         ${popularDelivery(element.delivery)}
         </div>
         <div class="wishlist_items">
            <button class="wishlist_hover">
                ${wishlistHover(element.wishlist, element.activewishlist)}
            </button>
         </div>
         <div class="popular_detail">
         ${element.detail}
         </div>

    </div>

`
}
function athenusCardslistItem(element){
    return `
    <div class="athenus_card">
        <div class="athenus_card_img">
            <img src= ${element.url}>
        </div>
        <div class="price">
            <div class="new_price">
                ${element.currencySymbol}${element.newPrice}
             </div>
            ${athenusNewPrice(element.oldPrice, element.currencySymbol)}
        </div>
    </div>
    `
}


export { discoverCards }
export { createdealCards }
export {popularcardList}
export { athenusCardslistItem}