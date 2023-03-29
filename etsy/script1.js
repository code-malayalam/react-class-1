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