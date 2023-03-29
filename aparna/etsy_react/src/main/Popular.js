import React, { useState, useEffect } from "react";
import "./style.css";
import { VideoMaker } from "./PlayVideo";
import { StarGenerator } from "./Star";
import { WishList } from "./Wishlist";
import playButton from "../Assets/playButton.svg";


function PopularItems() {
  const [pItems, setPitems] = useState([]);

  const handleFilter = () => {
    const inputValue = document.querySelector(".price-input");
    const newPriceArray = pItems.filter(
      (price) =>
        Math.floor(
          price.actualPrice - price.actualPrice * (price.discount / 100)
        ) >= +inputValue.value
    );
    setPitems(newPriceArray);
  };

  const dataFunction = () => {
    fetch("./data1.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        // console.log(data)
        setPitems(data.popularItems);
      });
  };

  useEffect(() => {
    dataFunction();
  }, []);

  return (
    <div className="popular-container">
      <div className="popular-header">
        <h2 className="popular-heading-name">Popular gifts right now</h2>
      </div>
      <div className="price-filter">
        <input
          className="price-input"
          type="number"
          onChange={dataFunction}
        ></input>
        <button className="filter" onClick={() => handleFilter()}>
          filter
        </button>
      </div>
      <ul className="popular-sub-container">
        {pItems.map((item) => {
          return (
            <div key={item.url} className="popular-inner">
              <li className="giftList"></li>
              <div className="popular-img-container">
                <VideoMaker item={item}></VideoMaker>
                <div className="tooltip-container">{item.tooltipText}</div>
                <WishList />
                {item.playButton !== "" ? (
                  <button className="play-button">
                    <img src={playButton}/>
                  </button>
                ) : (
                  ""
                )}
              </div>

              <div className="content-container">
                <p className="content-title">{item.title}</p>
                <div className="rating-container">
                  <div className="star-container">
                    <StarGenerator item={item} />
                    <p className="reviews">{item.reviews}</p>
                  </div>
                  <div className="price-container">
                    <p className="marketPrice">
                      {item.symbol}
                      <MarketPrice item={item} />
                    </p>
                    <p className="actual-price">{item.actualPrice}</p>
                    <p className="discount-percent">{item.discount} % off</p>
                  </div>
                </div>
                <div className="delivery-text">
                  {item.delivery !== "" ? (
                    <div className="delivery-offer">{item.delivery}</div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

function MarketPrice(props) {
  const { actualPrice, discount } = props.item;
  return Math.floor(actualPrice - actualPrice * (discount / 100));
}

export default PopularItems;
