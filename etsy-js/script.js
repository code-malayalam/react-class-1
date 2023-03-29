import {dealsFunction, discoverFunction, freshBlogFunction, navFunction} from './script1.js'

const collections = document.querySelector(".collections")
const discover = document.querySelector(".discover")
const items = document.querySelector(".items")
const giftPopular = document.querySelector(".gift-popular")
const footerFour= document.querySelector(".footer-four")
const addCard = document.querySelector(".add-card")
const filterPrice = document.querySelector(".filter-price")
const gift = document.querySelector(".gift")

const giftSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 5 22 12" width="16" height="12" aria-hidden="true" focusable="false"><path d="M5,6A1,1,0,0,0,4,7v3H5v9a1,1,0,0,0,1,1h5V6H5Z"></path><path d="M19,6H13.007A4.245,4.245,0,0,0,14.97,3.744a1.614,1.614,0,0,0-2.65-1.375,1.757,1.757,0,0,0-.315.324,1.753,1.753,0,0,0-.315-0.324A1.615,1.615,0,0,0,9.042,3.746,4.257,4.257,0,0,0,11.006,6H13V20h5a1,1,0,0,0,1-1V10h1V7A1,1,0,0,0,19,6Z"></path></svg>`

const fullStrSVG=`<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="18" height="18"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z" fill="#222222"></path></svg>`

const halfStrSVG=`<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="18" height="18"><path class="background" d="M12.007 16.97l4.21 2.95c.182.12.422.11.592-.027.17-.138.23-.37.15-.574l-1.484-5.33 4.306-3.073c.182-.12.265-.347.203-.557-.065-.21-.258-.352-.477-.352h-5.35l-1.67-5.642c-.06-.215-.257-.363-.48-.363-.225 0-.42.148-.482.363v12.94l.48-.335z" fill="#E1E3DF"></path><path class="foreground" d="M12 4c-.224 0-.42.15-.48.366l-1.67 5.642H4.5c-.218.002-.41.145-.472.354-.064.208.014.433.193.557l4.307 3.07-1.5 5.33c-.08.202-.02.433.15.57.17.14.41.15.59.03L12 16.98V4z" fill="#222222"></path></svg>`

const btnSVG= `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4" fill="#222222"></polygon></svg>`

const wishSVG=`<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" fill="#222222"></path></svg>`

const redWishSVG=`<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z" fill="#A61A2E"></path></svg>`


fetch('./collection.json')
.then((response) => response.json())
.then((data) => {
    renderCollection(data)
});
const renderCollection = (rsp) => {
   let collectionObj = rsp
   const collectionUl=document.createElement('ul')
   collections.appendChild(collectionUl)

const collectionList=collectionObj.map(function(item){
      const html = navFunction(item);
         return html;
        })
        collectionUl.innerHTML =collectionList.join('');
    
}

fetch('https://raw.githubusercontent.com/aiswaryaasudhakaran/training-project/main/etsy/discover.json')
.then((response) => response.json())
.then((data) => {

    renderDiscover(data)
});
const renderDiscover = (rsp) => {
   const discoverObject = rsp.data;


const discoverUl=document.createElement('ul')
discover.appendChild(discoverUl)

 const  discoverItem=discoverObject.map(function(item){
    const html =discoverFunction(item);
    return html;
 });
 discoverUl.innerHTML = discoverItem.join('')
}


fetch('https://raw.githubusercontent.com/aiswaryaasudhakaran/training-project/main/etsy/deals.json')
.then((response) => response.json())
.then((data) => {
    renderDealsOfDay(data)
});

const renderDealsOfDay = (rsp) => {
    const dealsOfDay = rsp.data;    

    const deals = dealsOfDay.map(function(item){
        const html = dealsFunction(item)
        return html;
    });
    items.innerHTML = deals.join('');
}

fetch('https://raw.githubusercontent.com/aiswaryaasudhakaran/training-project/main/etsy/gift.json')
.then((response) => response.json())
.then((data) => {
 
    renderGiftPopular(data)
});

const renderGiftPopular = (rsp) => {
    const giftObj = rsp;



const filterInput=document.querySelector(".filter-input")
const filterBtn=document.querySelector(".filter-btn")
let priceArr =[]
const newPrice = function(a, b){
    const new1 = Math.floor(a*((100-b)/100));
    return new1;
}

filterBtn.addEventListener('click',()=> {
  let filterVal = filterInput.value;
  console.log(typeof filterVal)
  const result=priceArr.filter(priceArr => priceArr > filterVal);
  console.log(result)
})

    for(let i=0;i<giftObj.length;i++){
    const newCalcPrice=newPrice(giftObj[i].old, giftObj[i].offer)
    priceArr.forEach(function(val){
    })        
    priceArr.push(newCalcPrice);
    const gift=document.createElement('div')
    gift.classList = "gift"
    giftPopular.appendChild(gift)
    const giftMessage =document.createElement('p')
    giftMessage.innerHTML = giftObj[i].message

    gift.addEventListener('mouseenter', (e) =>{
        const y=gift.getBoundingClientRect().top
        const yy=e.pageY;
        const height=yy-y -700;        
        const x=gift.getBoundingClientRect().left
        const xx=e.pageX;
        const width=xx-x;
        giftMessage.style.top =`${height}px`
        giftMessage.style.left=`${width}px`
    })
    
    const giftImg=document.createElement('div')
    giftImg.classList = "gift-img"
    gift.appendChild(giftMessage)
    
    
    const giftIm =document.createElement('img')
    giftIm.src=giftObj[i].img
    giftImg.appendChild(giftIm)
    
    gift.appendChild(giftImg)
   

    const giftTxt=document.createElement('div')
    giftTxt.classList = "gift-text"
    gift.appendChild(giftTxt)

    const giftHd=document.createElement('h3')
    giftHd.innerHTML = giftObj[i].heading
    giftTxt.appendChild(giftHd)

    const giftStr=document.createElement('span')
      
        if(giftObj[i].rating %1 === 0){
            giftStr.innerHTML=giftObj[i].fullStr.repeat(giftObj[i].rating)
        }else {
            giftStr.innerHTML=giftObj[i].fullStr.repeat(Math.floor(giftObj[i].rating)) + giftObj[i].halfStr
        } 

    giftTxt.appendChild(giftStr)

    const giftPara=document.createElement('span')
    giftPara.innerHTML = giftObj[i].rate
    giftTxt.appendChild(giftPara)

    const price=document.createElement('div')
    price.classList = "price"
    gift.appendChild(price)

    const ofrPrice=document.createElement('span')
    ofrPrice.classList = "ofr-price"
    price.appendChild(ofrPrice)
    ofrPrice.innerHTML= `${giftObj[i].rupeeSymbol} ${newCalcPrice}`

    const offr=document.createElement('div')
    offr.classList = "offr"
    price.appendChild(offr)

    const orgPrice=document.createElement('span')
    orgPrice.classList = "org-price"
    offr.appendChild(orgPrice)
    orgPrice.innerHTML=`${giftObj[i].rupeeSymbol} ${giftObj[i].old}`

    const off=document.createElement('span')
    off.classList = "off"
    offr.appendChild(off)
    off.innerHTML=`(${giftObj[i].offer}% off)`
    
    if(giftObj[i].free!== ""){
    const free=document.createElement('a')
    free.classList ="free"
    gift.appendChild(free)
    free.innerHTML=giftObj[i].free
    }
    
    if(giftObj[i].btn!==""){
        const vdoBtn=document.createElement('div')
        vdoBtn.classList = "vdo-btn"
        giftImg.appendChild(vdoBtn)
        vdoBtn.innerHTML = giftObj[i].btn
    }
    const giftVideo=document.createElement('div')
    giftVideo.classList = "gift-vdo"
    giftImg.appendChild(giftVideo)

    if(giftObj[i]!== ""){
        const vdo=document.createElement('video')
        giftVideo.appendChild(vdo)
        vdo.src=giftObj[i].video
        vdo.autoplay = false
        vdo.muted="muted"
        vdo.play()

    }
    const wishBtn=document.createElement('div')
    wishBtn.classList="wish-btn"
    giftImg.appendChild(wishBtn)
    wishBtn.innerHTML = giftObj[i].wish

    wishBtn.addEventListener("click",function(){
        if(wishBtn.innerHTML===giftObj[i].wish){
            wishBtn.innerHTML=giftObj[i].redWish
        }else{
            wishBtn.innerHTML=giftObj[i].wish
        }
        
    })
}
const footerDropDown = document.querySelectorAll(".drop-content")
footerDropDown.forEach(element => {
    element.addEventListener("click",(e) =>{
        element.children[1].children[0].classList.toggle("show")
        element.children[0].children[0].children[0].classList.toggle("arrow")
    })
});
}
fetch('https://raw.githubusercontent.com/aiswaryaasudhakaran/training-project/main/etsy/add.json')

.then((response)=> response.json())
.then((data) => {
    renderAddItems(data)
});
const renderAddItems = (rsp) => {
   const addObj = rsp.addObj;

const blog=addObj.map(function(item){
    const html = freshBlogFunction(item)
    return html;
});
addCard.innerHTML = blog.join('');
}