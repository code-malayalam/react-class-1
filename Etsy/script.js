import { discoverCards } from "./templateModules.js";
import { createdealCards } from "./templateModules.js";
import { popularcardList } from "./templateModules.js";
import { athenusCardslistItem } from "./templateModules.js";
import { etsyJson } from "./response.js"


const sellerItems = document.querySelector(".seller_items");
const discoverHeader = document.querySelector(".discover_heading");
const discoverCardsSection = document.querySelector(".discover_cards")
const dealsCardsSection = document.querySelector(".deals_cards")
const popularCardsSection = document.querySelector(".popular_cards");
const athenusCardsSection = document.querySelector(".athenus_cards");
const dropDownSection = document.querySelectorAll(".dropdown_section");

const itemID = ".categories"
const itemSVG = `<svg xmlns=\"http://www.w3.org/2000/svg" viewBox="0 5 22 12" width="16" height="12" aria-hidden="true" focusable="false"><path d="M5,6A1,1,0,0,0,4,7v3H5v9a1,1,0,0,0,1,1h5V6H5Z"></path><path d="M19,6H13.007A4.245,4.245,0,0,0,14.97,3.744a1.614,1.614,0,0,0-2.65-1.375,1.757,1.757,0,0,0-.315.324,1.753,1.753,0,0,0-.315-0.324A1.615,1.615,0,0,0,9.042,3.746,4.257,4.257,0,0,0,11.006,6H13V20h5a1,1,0,0,0,1-1V10h1V7A1,1,0,0,0,19,6Z"></path></svg>`
const wishlistSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" fill="#222222"></path></svg>`
const wishlistclickedSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z" fill="#A61A2E"></path></svg>`
const videoBtnSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><polygon points="4 4 4 20 20 12 4 4" fill="#222222"></polygon></svg>`
const ratingStarSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="18" height="18"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z" fill="#222222"></path></svg>`
const ratingStarHalfSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="18" height="18"><path class="background" d="M12.007 16.97l4.21 2.95c.182.12.422.11.592-.027.17-.138.23-.37.15-.574l-1.484-5.33 4.306-3.073c.182-.12.265-.347.203-.557-.065-.21-.258-.352-.477-.352h-5.35l-1.67-5.642c-.06-.215-.257-.363-.48-.363-.225 0-.42.148-.482.363v12.94l.48-.335z" fill="#E1E3DF"></path><path class="foreground" d="M12 4c-.224 0-.42.15-.48.366l-1.67 5.642H4.5c-.218.002-.41.145-.472.354-.064.208.014.433.193.557l4.307 3.07-1.5 5.33c-.08.202-.02.433.15.57.17.14.41.15.59.03L12 16.98V4z" fill="#222222"></path></svg>`
const jsonURL = 'https://raw.githubusercontent.com/nivyamathew/Training-Oct-hello/main/js-webcloning/Etsy/etsy.json'


etsyJson(jsonURL)
.then(data => {
    SectionsInEtsy(data)
})




const ItemsDIV = (ulID, classList, elementType, itemClassName) => {
    const ul = document.querySelector(ulID)
    const sellerItems = document.querySelector(".seller_items");
    for (let i = 0; i < classList.length; i++) {
        const itemElement = document.createElement(elementType)
        itemElement.classList.add(itemClassName)
        if (classList[i].hasOwnProperty('img') && classList[i].img != "") {
            itemElement.innerHTML = `${classList[i].img}${classList[i].list}`
        } else {
            itemElement.innerHTML = classList[i].list
        }
        ul.appendChild(itemElement)
    }
}


document.querySelector(".dis").innerHTML = `Discover one-of-a-kind items from independent creators`


function generateDiscoverItems(classList, className) {
    const discoverItems = classList.map(function (element) {

        return discoverCards(element)
    })

    className.innerHTML = discoverItems.join('')
}

function createdealsItem(classList, className) {
    const dealsItems = classList.map(function (element) {
        return createdealCards(element)
    })
    className.innerHTML = dealsItems.join('')

}

function createPopularCards(classList, className) {
    // for (let i = 0; i < classList.length; i++) {
    //     const classListElement = document.createElement('div')
    //     classListElement.className = 'popular_card'
    //     className.appendChild(classListElement);

    //     const popularImg = document.createElement('div')
    //     popularImg.className = 'popular_image'
    //     const image = document.createElement('img')
    //     image.src = classList[i].url
    //     popularImg.appendChild(image)
    //     classListElement.appendChild(popularImg)

    //     if (classList[i].hasOwnProperty('button') && classList[i].video !== "") {
    //         const playButton = document.createElement('button')
    //         playButton.className = 'play_button'
    //         playButton.innerHTML = classList[i].button
    //         popularImg.appendChild(playButton)
    //     }

    //     const popularName = document.createElement("div")
    //     popularName.className = 'popular_name'
    //     popularName.innerHTML = classList[i].name
    //     classListElement.appendChild(popularName)

    //     const popularRatings = document.createElement("div")
    //     popularRatings.className = 'popular_ratings'
    //     classListElement.appendChild(popularRatings)


    // for (let j = 0; j < Math.floor(classList[i].rating); j++) {
    //     const ratingStar = document.createElement('div')
    //     ratingStar.className = "rating_star"
    //     ratingStar.innerHTML = ratingStarSVG;
    //     popularRatings.appendChild(ratingStar);
    // }

    // if (Math.floor(classList[i].rating) < classList[i].rating) {
    //     const ratingStar = document.createElement('div');
    //     ratingStar.classList.add("rating_star");
    //     ratingStar.innerHTML = ratingStarHalfSVG;
    //     popularRatings.appendChild(ratingStar);
    // }

    //     const ratedBy = document.createElement('div')
    //     ratedBy.className = 'rated'
    //     ratedBy.innerHTML = `(${classList[i].raters})`
    //     popularRatings.appendChild(ratedBy)

    //     const popularAmount = document.createElement('div')
    //     popularAmount.className = 'popular_amount'
    //     classListElement.appendChild(popularAmount)



    //     const currentPrice = calculateActualPrice(classList[i].oldPrice, classList[i].offer)





    //     const newPrice = document.createElement('div')
    //     newPrice.className = 'popular_price'
    //     newPrice.innerHTML = `${classList[i].symbol}${currentPrice.toLocaleString()}`
    //     popularAmount.appendChild(newPrice)


    //     const popularOffer = document.createElement('div')
    //     popularOffer.className = 'popular_offer'
    //     classListElement.appendChild(popularOffer)

    //     const popularOldPrice = document.createElement('div')
    //     popularOldPrice.className = 'popular_oldprice'
    //     popularOldPrice.innerHTML = `${classList[i].symbol}${classList[i].oldPrice}`
    //     popularOffer.appendChild(popularOldPrice)

    //     const newOffer = document.createElement('div')
    //     newOffer.className = 'new_offer'
    //     newOffer.innerHTML = `(${classList[i].offer}% off on)`
    //     popularOffer.appendChild(newOffer)

    //     if (classList[i].hasOwnProperty('delivery') && classList[i].delivery !== "") {
    //         const popularDelivery = document.createElement('div')
    //         popularDelivery.className = 'popular_delivery'
    //         popularDelivery.innerHTML = classList[i].delivery
    //         classListElement.appendChild(popularDelivery)
    //     }

    //     const wishList = document.createElement('button')
    //     wishList.className = 'wishlist_items'
    //     popularImg.appendChild(wishList)

    //     const wishlistHover = document.createElement('button')
    //     wishlistHover.className = 'wishlist_hover'
    //     wishlistHover.innerHTML = classList[i].wishlist
    //     wishList.appendChild(wishlistHover)

    //     const wishlistItem = document.querySelectorAll('.wishlist_hover')
    //     let state = 0;
    //     wishlistItem.forEach(element => {
    //         element.addEventListener('click', () => {
    //             if (state === 0) {
    //                 element.innerHTML = classList[i].wishlist
    //                 state = 1;
    //             } else {
    //                 element.innerHTML = classList[i].activewishlist
    //                 state = 0;
    //             }
    //         })
    //     })


    //     const detailHover = document.createElement('div')
    //     detailHover.className = "popular_detail"
    //     detailHover.innerHTML = classList[i].detail
    //     classListElement.appendChild(detailHover)

    //     if (classList[i].hasOwnProperty('videoURL') && classList[i].video !== "") {
    //         const playVideo = document.createElement('video')
    //         playVideo.className = 'play_video'
    //         playVideo.src = classList[i].videoURL
    //         playVideo.autoplay = false
    //         playVideo.muted = 'muted'
    //         popularImg.appendChild(playVideo)
    //         playVideo.play()
    //     }
    // }
    const popularCards = classList.map(function (element) {
       return popularcardList(element)

    })


    // console.log(playButton())

    className.innerHTML = popularCards.join('')
    const popularRatings = document.querySelector('.popular_ratings')




}

function createPriceCard(classList, className) {

    const athenusCards = classList.map(function (element) {
       return athenusCardslistItem(element)
    })

    className.innerHTML = athenusCards.join('')
}

function athenusNewPrice(oldPrice, symbol){
    // console.log(oldPrice !== "")
    if(oldPrice !== ""){
       return `
        <div class="old_price">
            ${symbol}${oldPrice}
        </div>
        `
    } else {
        return ""
    }
    
}

// *************************************************************
dropDownSection.forEach(element => {
    element.addEventListener('click', () => {
        console.log(element)
        element.children[1].classList.toggle("show");
        element.children[0].children[0].classList.toggle("arrow")
    })
})

// ***********************************************************
function calculateActualPrice(oldPrice, offer) {
    return (Number(Math.floor(oldPrice) * (100 - offer) / 100).toFixed(0))

}
function ratingStars(ratingStar) {
    let ratingArr = [];
    for (let i = 0; i < Math.floor(ratingStar); i++) {
        let x = `<div class="rating_star">
        ${ratingStarSVG}
        </div>
        `
        ratingArr.push(x)
    }
    if (Math.floor(ratingStar) < ratingStar) {
        let y = `<div class="rating_star">
            ${ratingStarHalfSVG}
            </div>
        `
        ratingArr.push(y)
    }
    return ratingArr.join('')
}

  
function popularDelivery(delivery) {
    if (delivery !== "") {
        // const popularDelivery = document.createElement('div')
        // popularDelivery.className = 'popular_delivery'
        // popularDelivery.innerHTML = delivery

        return `
        <div class="popular_delivery">${delivery}</div>
         `

        // return popularDelivery.outerHTML

    } else {
        return ""
    }
}

function playButton(button, video) {

    // console.log(element)
    // console.log(video !== "")
    if (video !== "") {
        return `<button class="play_button">${button}</button>`
        // const playButton = document.createElement('button')
        // playButton.className = 'play_button'"
        // playButton.innerHTML = button
        // container.innerHTML = playButton.outerHTML"
        // //    console.log(element.button)
        // return playButton.outerHTML
        // popularCardsSection.querySelector('.popular_image').innerHTML += `<button class="play_button">${button}</button>`
    } 
}



function wishlistHover(wishlist, activewishlist) {
    const popularCardsSection = document.querySelectorAll('.popular_cards')
    // console.log(popularCardsSection)
    let state = 0;
    popularCardsSection.forEach(element => {
        // console.log(item)
        element.addEventListener('click', () => {
            console.log("hello")
            if (state === 0) {
                element.innerHTML = wishlist
                state = 1;
            } else {
                element.innerHTML = activewishlist
                state = 0
            }
        })
    })

}



function filterDisplayNone() {
    const filterDisplayNonePopular = document.querySelector('.popular_cards')
    filterDisplayNonePopular.innerHTML = "";
}

function filterPrice(classList) {
    const filterBtn = document.querySelector(".popular_button");
    const inputFilter = document.querySelector(".popular_filter")
    filterBtn.addEventListener("click", () => {
        let enterPrice = +inputFilter.value
        const filterToRange = classList.filter(obj => {
            const priceToFilter = Number((Math.floor(obj.oldPrice) * (100 - obj.offer) / 100).toFixed(0))
            return (priceToFilter >= enterPrice)
        })
        console.log(filterToRange)
        filterDisplayNone()
        console.log(createPopularCards(filterToRange, popularCardsSection))


    })

}

// **********************************************

// let arr = [4, 2, 6, 9,1]

// const price = arr.filter(arrprice => arrprice >= 3)
// console.log(price)
// ***********************************************************

function SectionsInEtsy(etsy) {

    ItemsDIV(itemID, etsy.itemList, "li", "categories")

    generateDiscoverItems(etsy.discoverCreatorList, discoverCardsSection)

    createdealsItem(etsy.dealsList, dealsCardsSection)

    createPopularCards(etsy.popularList, popularCardsSection)

    createPriceCard(etsy.athenusList, athenusCardsSection)
    // calculateActualPrice(etsy.popularList)


    filterPrice(etsy.popularList)
}

export {playButton}
export {ratingStars}
export {calculateActualPrice}
export {popularDelivery}
export {wishlistHover}
export {athenusNewPrice}
export {SectionsInEtsy}
