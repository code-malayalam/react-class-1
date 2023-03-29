// import React, { useEffect, useState } from "react";

// import './../styles.css'
// const filterValue = document.querySelector(".toget-input");

// function Filter(){
//     const [filterdata, update] = useState([])

//     const fetchData =() => {
//         fetch( "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/popularGiftsNow.json")
//         .then((response) => response.json())
//         .then((data) => {
//             calculationDiscount(data)
//             update(data)
//         })
        
        
//     } 
        
//     function calculationDiscount(products) {
//         let discountPrice = 0;
//         let price = 0;
//         let priceArray = [];
//         products.forEach((item) => {
//           discountPrice = item.amount.originalPrice * (item.amount.discount / 100);
//           price = Math.floor(item.amount.originalPrice - discountPrice);
//           item.amount.payPrice = price;
//           priceArray.push(Math.floor(price));
//         });
//         return price;
//       }
    

    
    
//     function FilterClick() {
        
        
    
//               let filterItems = filterdata.filter((item) => {
//                 console.log(filterValue.value);
//                 console.log(item.amount.payPrice);
                
                
//                   return filterValue.value < item.amount.payPrice;
                  
//                 });
          
//         //    
//          }
         
//          useEffect(() => {
//              fetchData()
        
             
//          }, [])
     

   
    
     
// return(
//     <div className="input-area">
//     <input className="toget-input" type="number" size="10" />
//     <button className="input-button "onClick={FilterClick} >
//       click
//     </button>
//     <button className="clear-button">clear</button>
//   </div>
  


// )
    
// }

// export default Filter