// function GenerateTemplates(){
//   const generateAboutEtsy = (etsy) => {
//     const whatWeDo = document.querySelector(".what-we-do");
//     const arrayOfEtsyContents = etsy.map(elem => {
//       const etsyContent = `
//       <div class="community">
//         <h3 class="community-title">${elem.title}</h3>
//           <div class="community-content">
//             <span class="prev-content">${elem.content}</span>
//             <span class="style">${elem.contentPart}</span>
//           </div>
//       </div>
  
//       `
//       return etsyContent
//     })
//     whatWeDo.innerHTML = arrayOfEtsyContents.join('')
//   };
  
//    const createDealContainer = (clCat) => {
//     const clothingList = document.querySelector(".clothingList");
//     const arrayOfDeals = clCat.map((item) => {
//       const dealContents = `
//       <div class = "clothContainer">
//         <li class = "listOfClothes">
//           <div class = "clothes">
//           <img class="womensWear" src = "${item.url}"></div>
//           <div class = "dealTextContainer">
//             <p class = "discountPercent">
//             ${item.discount}
//             </p>
//             <span class = "tagOfDeals">
//             ${item.clothText}
//             </span>
//           </div>
//         </li>
//       </div>
//     `
//     return dealContents
//     })    
//     clothingList.innerHTML = arrayOfDeals.join('')
//   };
  
  
//     function createDiscoverContainer(dItems) {
//     const list = document.querySelector(".bubbleList");
//     const arrayOfDiscoverItems = dItems.map((item) => {
//       const discoverContents = `
//       <li class="shopping-list"> 
//         <img src="${item.url}" alt="image" class="imgCategories">
//         <p class="title">${item.text}</p>
//       </li>
//       `
//       return discoverContents
//     })
//     list.innerHTML = arrayOfDiscoverItems.join('')
//   }
  
//    function createFooterHTML(){
//     const footerContainer = document.querySelector(".footer-container");
//       footerContainer.innerHTML = `
//     <div class="email-container">
//       <span class="inline-image">
//         <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="wt-fill-denim-tint wt-width-full" viewBox="0 0 1280 30" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false" width="1280" height="30">
//         <path d="M1280 30h-8.1c-5.7 
//         0-37-10.9-37.4-10.7-2.2 1.2-17.6-.8-19.9-4.1 0 0-9.8-3.3-10.3-3.3-1.3 0-12.6 3-13 2.5-.7-.7-13.8-3.7-13.8-5.3-2.3 1.3-21.2-7.8-23.4-6.7-1-.8-2.2-1.5-3.3-2.4-1.8 1.9-3.3 3.4-4.7 4.9-2.7-.8-4.8-1.4-7.1-2.1-.5.1-1 .3-1.5.5-4 1.3-5.3 1-7.3-1.3-1.7-2.1-5.3-2.2-8.1-.8-2 1-4.6 2.6-6.5 2.3-4.5-.7-6 
//         1.1-8.1 2.6-1.5 1.1-3.1 2.1-4.6 3.1-1.8-.8-3.5-1.2-5.3-2-.3.8-.7 1.3-.8 2-.5 0-.8 0-1.2-.1V3.5c-2 .8-3.5 1.2-4.8 1.8-1.3-.8-2.3-1.6-3.5-2.4-5.1 1.2-10.1 
//         2-15.3.1-.8-.3-2.2-.3-3-.1-1.2.3-2.2 1-3.3 1.6-1.2-.3-2.3-.8-3.8-1.1-1.7 1.1-3 2.9-6.5 1.6-.8-.3-2.3.1-3.5.3-4 .8-7.8 1.4-11.9 2-1.5.2-3-.2-4.7-.3-1-.1-1.8-.2-2.8-.2-6-.3-11.8 2.3-17.8.1-.5-.2-1.3-.2-1.8-.1-3.8 1.6-8.3 1.2-12.5 1.3-1 0-2.2.5-3.1.9-1.8.8-9.5 1.5-11.5 1.1-4.5-.8-8.1-.3-10.1 2.3-12.8-1.6-12.8-1.6-17.1.9-2.3-.4-6-1.6-7.1-1.1-4.7 2.4-7 .2-9.8-1.4-5 1.1-10.8-.8-15.8 1.4-7.3-2.7-14.9-2.7-22.9-.2-5-3.7-9.6-3.8-13.8 0-.3-1.3-.7-2.5-1-3.8-3.3.8-6.1 1.1-8.6 1.8-2.7.7-6 2.3-7.5 1.9-4.2-1.3-5.3 1.8-9 1.4-1-.9-2.3-2.2-4-3.5-1.3.3-2.8.7-4 1-3.5 1.1-6.8 2-10.3 0-.5-.3-1.8-.2-2.8-.1-2.5.2-4.8.7-7.5.9-.8.9-1.7 1.9-2.3 2.9-8.5-1.1-16.4-2.6-24.7-.4-.3.1-1.2-.1-1.7-.3-2.3-1.2-3.7-.3-5.1.8-1.2.7-2.7 1.8-4 1.8-7.3.2-14.8-.4-22.1.3-3 .3-6.8-.3-9 .7-3.3 1.5-6 .9-9.1.5-2.7-.4-5-.9-7.1-2.1-2-1-4.3-.5-4.6 1.1-.3 1.5-1.8 2.3-3.7 2.1-3.3-.8-6.8-.3-10-1.8-4.8-2.1-10.6-2.7-16.3-.7-1.7.7-3.3 1-5 1.6-.3.1-.8.1-1.5.1-1.2-.7-2.3-1.2-3.5-1.9-2 1.8-4.6 1.8-7.1.9-2.8-.8-5.6-1.3-8.8-.9-2.7.3-5.5.5-8.3.7-2 .1-4.5.8-5.8-.9-.2-.3-1.5-.4-2.2-.3-3.7.7-7.3 1.5-11 2.2-.2-.3-.5-.5-.5-.7-.2-.3-.2-.8-.2-.8-1.8.5-3.7 1.2-5.6 1.4-1.8.2-4.7-.7-5.8-.1-3.8 1.9-8.1 1.2-12.3 1.9-2.2-2.5-2.2-2.5-5.8-.9-.7.3-1.5.5-2.3.5-3-.1-6.1-.2-9.1-.5-2.7-.3-5.6-.5-7.6-1.4s-3.8-1.3-6.1-1.2c-4.6.2-9.3.3-13.9.5-4.3.2-8.6.4-14.3.8-1.7-.5-4.7-1.2-7.5-2.2-3.7-1.4-7.1-1.4-10.8.1-1.7.7-4.5 1.6-5.5 1.2-3.3-1.4-1.7 1.3-3 1.1-1.8-.3-3.7-.9-5.1-.7-3.7.4-7.1-.2-10.8-.1-5 .1-10 0-11.6 4.1-5-2.4-9.1-1-13 .5-1.3-.8-2.2-1.4-2.8-1.9-1.7.5-3 1.3-4.2 1.1-2.7-.3-5-1.1-7.3-1.8-1 .4-2 1-3 1.1-5.1.4-10.3.4-15.3.9-2 .2-5-.5-6.6 1.1-.3.3-2.8.4-3.3 0-2.2-1.9-5.1-1.2-8-1-3.3.3-6.6.5-9.8-.7-1.5-.5-4-.8-5.3-.2-4.6 1.9-9.5 2.6-14.9 3.3-5.6.8-9.8-.5-13.9-2.2-1.7 1-3.3 1.6-5.5.4-4.8-3-10.1-2.1-15.6-.7-2.8-.8-5.5-3.3-9.6-1.2-5.6-.8-11.1-.7-16.4 1-.7.2-2 .1-2.3-.2-1.7-1-3.5-1.8-6-1.6-1.2-2.5-4-.9-6.1-.8-2.5 0-5.1 1-7.1.5-2.5-.7-5-.4-7.3-.8-2.8-.4-6 .8-9 .8-5.3.3-10 1.4-13.9 3.6-.8.4-1.7.9-2.5.9-3.8.3-7.6.7-11.5.4-3.7-.3-7.3-.7-11.1-.1-1 .1-2.3-.5-3.3-.9-2.5-1-4.8-1.9-8.1-1.1-2.2.4-4.2 0-3.8-1.8-2.3.1-5 .8-7.1.3-2-.4-3-.9-4.5.5-.7.5-3.2.1-4.6.5-4.2.9-8.1 2.4-12.3 3-2.2.3-5.5.3-7.5-1.3-3.5-2.6-5.3-2.4-11-.9-1.3.3-2.8.8-4.3.9-3.3.2-6.8.3-10.8.5-2-2.9-6-5.2-11.5-7v3.1c-4.5-3.8-10.8-3-16.1-4.4-4.5 1.8-9 3.4-14.6 5.5-5-1-9.6-3.1-15.3-1.2-1 .3-3.2.1-4-.4-3.2-1.9-7.5-1.9-11-3.2-4.2-1.6-8.8-2.9-13.3-4.2-1.2-.3-11.8 2.4-13 2.4-6.6 0-20.3 11.5-25.6 9.8-6.1-2-13 .2-20.1-1-8.1 2.3-15.3 7.2-19.8 7.7H0M172.9 20c.1 0 .3 0 0 0z" fill="#D7E6F5"></path>
//         </svg>
//       </span>
//         <div class="exclusive-offers">
//           <form>
//             <p class="offersText">Yes! Send me exclusive offers, unique gift ideas, and personalised tips for shopping and selling on Etsy.</p>
//               <div class="mail-enter"><input type="text" placeholder="Enter your email"><button class="subscribe">Subscribe</button></div>
//           </form>
//         </div>
//       </div>
//       <div class="logo-container">
//         <span class="designImage">
//           <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 48" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false" width="1400" height="48"><path d="M839 47l7-1 4-1 2 1h4l3-1 3-1 2 1 1-1 8-1 2 1h4l5-1 2-1h5l2-1 1 1h6l2-1h9l2-1h4l3-1h27v1h10l1 1h3l3-1 1 1h11l6 2v-1h4l1-1h10l2 1h7l2 1h3l2 1h2l1-1h6v1h2l1-1 1 1h1l3 1h7l1 1h6l1-1h3l1 1 5-1h17l4-1h4l3 1h2l1 1h19l2-1h5v1l1-1h2l1 1h9l1-1 1 1 4-1h12l1-1h4l1-1h2l3-1h5v-1h11l1 1h6l2 1h3l1-1 2-1h1l2-1h5l2-1 2 1h2l2 1h5l1 1h2l2 1h1l1-2 1-1 2-1h10l2 1h6l1 1h2l1-2 2-1 1-1 2-1h12l1 1h19l1-1h6l1-1 3 1h7l2 2 1 1 7-1 1-1 2-1h4l2-1 1-1h6l1-1 2 1 3-1h9l1-1h2l2-1h2l1-1h1l4-1 3 1h1l1-1h2l1-1 2-1h2l2-1v-1h12l3-1h2l2-1h2l3 1 1-1 1-1h14V0H0v2h2v1-1h10l1 1 2-1h3l1 1h1V2h4l2 1v1l1-1h1l1 1V3l4 1h4l1 1h2l1-1h-1l1-1 1 1 2 1h1l2-1h7l2 1h9l2 1h3l1-1h4l2 1 2 1 2-1h8l1-1 1 1h4l2 1 3-1h10l1 1h3l3 1h1V7l2 1h4l1 1h1l1-1h5l3 1h2l1-1 1 1 1-1 2 1h5l1 1h1V8h1l2 1 1 1h4-1l1-1h1l2 1h2l1-1h1l3 1h20v1-1l1 1h2l2 1h2l2 1 2 1h6l1-1h4l1-1h2l5-1 3 1h9l1-1h2l1-1h4v1h3l4-2 3-1h2l1-1h6l8 1 3 1h3l2 1 1-1h1l2-1h9l4-1 6-2h6l2-1h7l5-1h1l1-1h15l1 1 2-1 2 1h2l1-1h1v1h1l6 1h2l1-1h4l2-1 4 1h5l2 1h1l1-1h3v1h2l3 1h5l1-1 1 1 1-1 2 1h6l2 1 3 1h1l2-1 2 1h8l2-1 2 1h4l2-1 2 1h4l1-1h9l3-1h4l1 1h4l2 1h18l3-1h4l1 1 1-1h2l1 1h7l2-1h1l1 1 4-1h11l2-1h2V4l1 1 4 1h1l2 1v1l4 1 4 1 3-1-1 1h2l1 1h2l-1 1h2l3 1 5 1 6 1 4 1 2 2 4-1h3l4 2 2-1h9l1 1h1l1-1 1 2 5-1h2l3-1 4 2 3 1 5 1 3-1 2 2 1 1 1 1h2l1 1 7 2h1l1 1h3l4 3 1-1 4 1 3 1h4l3 1 1 1h4l2 2h3l3 3h2l2 1h2l5 1 1-1 3 1 4 2v1l7-1-1 1h11l5 2h3l2-1v-2l2-1h9l3-2 4 1h5l3-1h5l5 1 1 1 2-1h5l2 1h4l4 1h4l2-1 4 2h1l2-1 2 1 1-2 1 1 2-1 1 1h15v1l3-1h1l3-1 1 1 1-1h2l6 2 1-1 3 1h3l3 1h3l8 2 5-1v1l2-1h1z" fill="#4D6BC6"></path></svg></span><div class="electricity"><div class="logo-box"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" aria-hidden="true" focusable="false" width="96" height="96">
//           <path d="M60.1 38H49v11h-2V38H35.9c1.931 9.368 6.626 17 12.1 17 5.474 0 10.171-7.632 12.1-17zm-25.145-9.5c-.003 2.511.19 5.019.577 7.5H47V18.522l-10.925.238a41.683 41.683 0 00-1.12 9.74zM47 2.31c-4.1 1.24-8.18 7.168-10.38 14.437L47 16.52V2.31z" fill="#FFFFFF">
//           </path>
//           <path d="M57.52 9.45l1.784-.9a31.775 31.775 0 012.558 7.65l9.117-.2.042 2-8.78.19c.55 3.41.818 6.857.8 10.31a50.836 50.836 0 01-.54 7.5H72v2h-9.846c-1.6 8.2-5.244 15.053-9.862 17.754C66.834 54.079 76 43.793 76 28.589c0-8.962-2.958-16.353-8.554-21.373A25.424 25.424 0 0049 1.04v15.438l10.83-.236a29.32 29.32 0 00-2.31-6.791zM43.51 55.643c-4.525-2.78-8.086-9.564-9.665-17.643H24v-2h9.5a50.84 50.84 0 01-.549-7.5 43.776 43.776 0 011.075-9.7l-9.009.2-.042-2 9.562-.208c1.89-6.667 5.317-12.436 9.432-15.143C29.71 4.412 20 15.13 20 28.589a27.636 27.636 0 0023.51 27.054z" fill="#FFFFFF">
//           </path>
//           <path d="M61.045 28.5a60.27 60.27 0 00-.818-10.265L49 18.479v17.52h11.468c.388-2.48.58-4.988.577-7.5zM91.7 60c-2.182 4.525-5.734 8.62-10.832 13.719l-1.414-1.414c6.6-6.6 10.511-11.424 12.08-17.7.072-.415.137-.832.215-1.278.607-3.48.262-5.951-1.027-6.068-.72-.066-1.559.68-1.947 2.3a30.158 30.158 0 01-2.454 8.148c-1.78 4.663-8.575 11.048-8.865 11.318l-1.366-1.461c.068-.063 6.8-6.391 8.381-10.62l.061-.133a30.644 30.644 0 002.526-9.148c.11-1.886.095-6.433-1.793-6.552-2.085-.132-2.537 3.505-3.367 7.379-.259 1.21-.89 3.456-1.153 4.243a1.55 1.55 0 01-.09.177c-1.386 4.053-5.32 7.859-5.515 8.045-2.984 2.983-9.707 9.74-9.707 9.74L64.01 69.3s6.726-6.761 9.727-9.761a28.158 28.158 0 003.064-3.6c.5-.788 1.452-2.646.55-3.572-1.148-1.178-3.287-.648-6.08.748-1.98.992-11.21 7.08-15.384 13.34-1.99 2.985-2.772 8.839-3.042 14.2l13.18 2.724 6.8 1.359a8.92 8.92 0 011-.778c7.075-4.74 14.663-11.833 17.317-16.54 3.566-6.32 1.988-7.52.558-7.42zM52.774 82.673l-.77 10.252 1.993.15.595-7.913 10.616 2.123 3.765.778L70.02 93.2l1.96-.4-.885-4.338 2.592.518.392-1.96-8.447-1.69-12.858-2.657zm-29.242 2.055l6.77-1.354 13.206-2.73c-.27-5.36-1.052-11.214-3.042-14.2-4.173-6.258-13.4-12.347-15.384-13.34-2.793-1.4-4.932-1.925-6.08-.747-.9.926.054 2.784.55 3.572a28.158 28.158 0 003.064 3.6c3 3 9.727 9.76 9.727 9.76l-1.418 1.41s-6.723-6.757-9.707-9.74c-.2-.186-4.129-3.992-5.515-8.045a1.74 1.74 0 01-.09-.177c-.263-.787-.894-3.033-1.153-4.243-.83-3.874-1.282-7.511-3.367-7.38-1.888.12-1.9 4.667-1.793 6.553a30.645 30.645 0 002.526 9.148l.061.133c1.58 4.229 8.313 10.557 8.381 10.62L18.9 69.034c-.29-.27-7.084-6.655-8.865-11.318a30.16 30.16 0 01-2.454-8.148c-.388-1.622-1.226-2.37-1.947-2.3-1.287.114-1.634 2.586-1.025 6.065.078.446.143.863.215 1.278C6.394 60.883 10.3 65.7 16.9 72.307l-1.41 1.414c-5.1-5.1-8.65-9.194-10.832-13.72-1.434-.104-3.013 1.1.553 7.42 2.654 4.706 10.238 11.8 17.321 16.529a8.92 8.92 0 011 .778zm7.175.605l-8.433 1.687.393 1.96 2.591-.518-.885 4.338 1.96.4 1.047-5.137 3.75-.775 10.631-2.126.595 7.913 1.994-.15-.77-10.252-12.873 2.66z" fill="#FFFFFF">
//         </path>
//         </svg>
//       </div>
      
//     <p class="logo-text">Etsy is powered by 100% renewable electricity</p>
//     </div>
//     </div>
//     `;
//     }
  
//      function mainInnerHTML(){
//       const mainContainer = document.querySelector(".mainContainer");
//         mainContainer.innerHTML = `
      
//       <div class="mainContainer">
//         <div class="heading">
//           <h2 class="heading-text">Discover one-of-a-kind items from independent creators</h2>
//         </div>
//         <div class="bubbleContainer">
//           <div class="halfContainer"></div>
//           <ul class="bubbleList"></ul>
//         </div>
      
//       <div class="dealContainer">
//         <div class="dealsHeadContainer">
//           <h3 class="dealsHeading">Deals of the day</h3>
//             <p class="shopDeals">
//               Shop all deals
//                 <div class="shop">
//                   <img class="arrow" src="data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 12 24%22%3E%3Cpath fill%3D%22%23222222%22d%3D%22M11.3,12.7L12,12l-0.7-0.7l-4-4c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L8.2,11H1c-0.6,0-1,0.4-1,1s0.4,1,1,1h7.2l-2.3,2.3 c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3C7.3,16.7,11.3,12.7,11.3,12.7z%22%2F%3E%3C%2Fsvg%3E">
//                 </div>
//             </p>
//             </div>
//             <ul class = "clothingList"></ul>
//       </div>
      
//       <div class="popular-container">
//         <div class="popular-header">
//           <h2 class="popular-heading-name">Popular gifts right now</h2>
//         </div>
//         <div class="price-filter">
//           <input class="price-input" type="number">
//             <button class="filter">filter</button>
//         </div>
//         <ul class="popular-sub-container"></ul>
//       `;
//       }
  
  
//       const heartImage = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" ><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z"></path></svg>`;
  
//       const FiveStarsForRating = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width = "12px" height="24px"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path></svg>`;
      
//       const starsForRating = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width = "12px" height="24px"><path class="foreground" d="M12 4c-.224 0-.42.15-.48.366l-1.67 5.642H4.5c-.218.002-.41.145-.472.354-.064.208.014.433.193.557l4.307 3.07-1.5 5.33c-.08.202-.02.433.15.57.17.14.41.15.59.03L12 16.98V4z"></path></svg>`;
      
//        const generatePopularContainer = (pItems) => {
//         const popular = document.querySelector(".popular-sub-container");
      
//         const arrayOfPopularItems = pItems.map((item) => {
//           const popularContents = `
//           <div class="popular-inner">
//           <li class="giftList"></li>
//           <div class="popular-img-container">
//           <img src=${item.url} class="imagePop">
//           <div class="tooltip-container">${item.tooltipText}
//           </div>
//           <button class="heart-button" >
          
//           ${heartImage}
//           </button>
//           </div>
//           <div class="video-container">
//           <video src="" class="video" muted="muted"></video>
//           </div>
//           <div class="content-container">
//           <p class="content-title">${item.title}
//           </p>
//           <div class="rating-container">
//           <div class="star-container">
//            ${printStars(item)}
//           </div>
//           <p class="reviews">${numberWithCommas(item.reviews)}</p>
//           </div>
//           <div class="price-container">
//           <p class="marketPrice">${item.symbol}${numberWithCommas(Math.floor(item.actualPrice - item.actualPrice * (item.discount / 100)))}</p>
//           <p class="actual-price">${item.symbol}${item.actualPrice}</p>
//           <p class="discount-percent">(${item.discount}% off)</p>
//           </div>
//           <div class="delivery-offer">${item.delivery}</div>
//           </div>
//           </div>
//           `
//           // console.log(item.star)
//           function printStars(){
//             if (item.star % 1 === 0) {
//               const printedStars = FiveStarsForRating.repeat(item.star);
//               return printedStars
//             } else {
//               const printedStars = FiveStarsForRating.repeat(Math.floor(item.star)) +
//               starsForRating;
//               return printedStars
//             }
//           }
          
        
          
          
          
//           return popularContents
//         })
//         // console.log(arrayOfPopularItems)
//         popular.innerHTML = arrayOfPopularItems.join('')
      
//       }
      
//       function numberWithCommas(x) {
//         x = x.toString();
//         var pattern = /(-?\d+)(\d{3})/;
//         while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
//         return x;
//       }
  
      
//        function whatIsEtsyInnerHTML() {
//         const aboutContainer = document.querySelector(".aboutContainer");
//           aboutContainer.innerHTML = `
//         <span class="about-image">
//           <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1400 48" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
//           <path d="M1400 0l-55 12-23 10-23 4-6-1-9 1-5 2-24 8h-11l-18-5-11-1-10-1h-7l-8 3-8 1-14-4v1l-3 1-9-5-3-1-17 2-10-1-9-1-8 1-7 1-2 1h-13l-2-1-13-2h-20l-11 2-14 3h-18l-10 1-3-1-2-1-4-1h-4l-16 1h-2l-7-1h-6l-8 1-6-2-5-1-2 1-20-1-10 2h-6l-11-1-9-1h-4l-3 1-19 1h-19l-3-1-11 1h-2l-7 3h-23l-3 1h-19l-16-1-17 1h-8l-2-1-20-2-4 1-4-1h-2l-12 1-2 1h-13l-9 1h-4l-6-1-10 1-9-1h-15l-9 2-12-2-12-2-3 2-5 2-11-3-6 1h-6l-28 1-5 2h-33l-3 1-4 2h-17l-5 1-4-1-7-1h-5l-4 1-13 3-2-2-2-1h-15l-22-1h-2l-11 1h-5l-2-1h-19l-9 1-6-1h-2l-9 2-15 2h-4l-12 1h-25l-12 1-7 1h-4l-4 1h-4l-4 1h-20l-3-1h-7l-1-1v-4l-1 1h-2l-9 1-2 2-6 2-7 1-5 2h-2l-3-2-8-1h-4l-11 3h-1l-3-2-11-3-20-6-9-3h-3l-9 2h-5l-11-4-13-3-11-15-21-4L0 0h1400z"></path>
//           </svg>  
//             </span>
//               <div class="about-etsy">
//                 <h2 class="about-heading">What is Etsy?</h2>
//                   <a class="wierd-story" href="#">Read our wonderfully wierd story</a>
//                     <div class="what-we-do">
//                         </div>
//                         <div class="question-box">
//                         <h4 class="question"> Have a question? Well, we've got some answers.</h4>
//                         <button class="help-button">Go to Help Center</button>
//                         </div>
//                         </div>
//         `;
//         }
        
// }

// export default GenerateTemplates