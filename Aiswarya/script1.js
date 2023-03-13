
export function navFunction(item){
    const html = `
              <li>
                ${checkImg(item)} 
            </li>
         `;
         return html;
}

function checkImg(element){
    if(element.img===""){
        return `${element.title}`;
    } else {
        return `${element.img} ${element.title}`
    }
}
export function discoverFunction(item){
 const html =  `
    <li>
       <img src=${item.img}
       <p>${item.title}</p>
    </li>
  `;
  return html;
}

export function dealsFunction(item){
    const html = `
        <div class="item-one">
          <img src="${item.img}">
          <span>${item.offer}</span>
          <p>${item.title}</p>
        </div>
        `;
        return html;
}
export function freshBlogFunction(item){
    const html = `
    <div class="fresh-blog">
       <img src=${item.img}>
    <div class="add-text">
            <span>${item.title}</span>
            <h3>${item.heading}</h3>
            <p>${item.paragraph}</p>
         </div>
    </div>
    `;
    return html;
}

export function giftFunction(item,giftObj){
    const html = `
    <div class="gift">
      <p>${item.message}</p>
      ${giftMessage()}
      <div class="gift-img">
      <img src=${item.img}>
      <div class="gift-text">
        <h3>${item.heading}</h3>
        ${starFunc(item)}
      </div>
      <span>${item.rupeeSymbol} ${newCalcPrice}<span>
      <div class="offr">
        <span>${item.rupeeSymbol} ${item.old}</span>
        <span>(${item.offer}% off)</span>
       </div>
        <a href="${item.free}"></a>
        ${vdoBtnFunc(item)}
        <div class="gift-vdo">
          ${vdoFunc(item)}
        </div>
        <div class="wish-btn">
          ${item.wish}
          ${redWishFunc(item)}
        </div>
       </div>
  `;
return html;
}
// function giftMessage() {
//   const gifts=document.querySelectorAll('.gift')
//   gifts.forEach(gift=>{
//     gift.addEventListener("mouseenter", (e) => {
//       const y = gift.getBoundingClientRect().top;
//       const yy = e.pageY;
//       const height = yy - y - 700;
//       const x = gift.getBoundingClientRect().left;
//       const xx = e.pageX;
//       const width = xx - x;
//       giftMessage.style.top = `${height}px`;
//       giftMessage.style.left = `${width}px`;
      
//     })
//     });
//   }

//   function starFunc(element) {
//     const giftStr = document.createElement("span");

//     if (element.rating % 1 === 0) {
//       giftStr.innerHTML = `${element.fullStr.repeat(element.rating)}`;
//     } else {
//       giftStr.innerHTML =
//         `${element.fullStr.repeat(Math.floor(element.rating)) +
//         element.halfStr}`;
//     }
//   }

//   function vdoBtnFunc(element){
//     if (giftObj[i].btn !== "") {
//       const vdoBtn = document.createElement("div");
//       vdoBtn.classList = "vdo-btn";
//       giftImg.appendChild(vdoBtn);
//       vdoBtn.innerHTML = `${element.btn}`;
//     }
// }

// function  redWishFunc(element){
//     wishBtn.addEventListener("click", function () {
//       if (wishBtn.innerHTML === `${element.wish}`) {
//         wishBtn.innerHTML = `${element.redWish}`;
//       } else {
//         wishBtn.innerHTML = `${element.wish}`;
//       }
//     });
// }

