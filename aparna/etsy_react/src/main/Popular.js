import React, { Component, useState, useEffect } from "react";
import "./style.css";

const FiveStars = <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width = "12px" height="24px"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path></svg>

const halfStars = <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width = "12px" height="24px"><path class="foreground" d="M12 4c-.224 0-.42.15-.48.366l-1.67 5.642H4.5c-.218.002-.41.145-.472.354-.064.208.014.433.193.557l4.307 3.07-1.5 5.33c-.08.202-.02.433.15.57.17.14.41.15.59.03L12 16.98V4z"></path></svg>

function PopularItems() {
  const [pItems, setPitems] = useState([]);

  useEffect(() => {
    fetch("./data1.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data)
        setPitems(data.popularItems);
      });
  }, []);

  return (
      <div className="popular-container">
          <div className="popular-header">
              <h2 className="popular-heading-name">Popular gifts right now</h2>
          </div>
          <div className="price-filter">
            <input className="price-input" type="number"></input>
            <button className="filter">filter</button>
          </div>  
      <ul className="popular-sub-container">
      {pItems.map((item) => {
         function videoMaker() {
          if (item.videoURl !== "") {
            return(<video className="video" src={item.videoURl} muted="muted"></video> )
            }else{
            return(<video className="video" src="" muted="muted"></video>)
           }
         }

         function StarGenerator(){
          if (item.star % 1 === 0) {
             return (FiveStars)
          } else {
            return (
             FiveStars 
            )
          } 
         }

         function MarketPrice(){
          return (Math.floor(item.actualPrice - item.actualPrice * (item.discount / 100)))
         }

        return (
              <div className="popular-inner">
                <li className="giftList"></li>
                  <div className="popular-img-container">
                    <img src={item.url} className="imagePop"></img>
                    <div className="tooltip-container">{item.tooltipText}</div>
                    <button className="heart-button">{item.heartButton}</button>
                  </div>
                  
                  <div className="video-container">
                   <videoMaker/>
                  </div>
                  <div className="content-container">
                    <p className="content-title">
                      {item.title}
                    </p>
                    <div className="rating-container">
                      <div className="star-container">
                        <StarGenerator/>
                        <p className="reviews">{item.reviews}</p>
                      </div>
                      <div className="price-container">
                        <p className="marketPrice">
                          {item.symbol}<MarketPrice/>
                        </p>
                        <p className="actual-price">{item.actualPrice}</p>
                        <p className="discount-percent">{item.discount} % off</p>
                      </div>
                    </div>
                  </div>
              </div>
        );
      })}
      </ul>
    </div>
  );
}

export default PopularItems;
