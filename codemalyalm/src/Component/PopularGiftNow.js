import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState, useRef } from "react";
import "./../styles.css";
import HeartSvg from "./HeartSvg";
import { svgFullRating, svgHalfRating } from "./svg";
const filterValue = document.querySelector(".toget-input");

function PopularGiftNow() {
  let [data, setUpdate] = useState([]);

  const inputValue = useRef();

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/popularGiftsNow.json"
    )
      .then((response) => response.json())
      .then((data) => {
        calculationDiscount(data);

        setUpdate(data);
        // console.log(data);
      });
  };
  function FilterClick() {
    console.log(data);

    console.log(inputValue.current.value);
    let filterdata = data.filter((item) => {
      // console.log(filitterValue.value);

      console.log(item.amount.payPrice, "price");
      return item.amount.payPrice > inputValue.current.value;
    });

    console.log(filterdata);
    setUpdate(filterdata);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function StarRatingAmount(props) {
    let svg = [];
    for (let i = 1; i <= props.item.rating.stars; i++) {
      svg.push(svgFullRating);
    }
    if (props % 1 !== 0) {
      svg.push(svgHalfRating);
      return svg;
    }
    return svg;
  }

  function calculationDiscount(products) {
    let discountPrice = 0;
    let price = 0;
    let priceArray = [];
    products.forEach((item) => {
      discountPrice = item.amount.originalPrice * (item.amount.discount / 100);
      price = Math.floor(item.amount.originalPrice - discountPrice);
      item.amount.payPrice = price;
      priceArray.push(Math.floor(price));
    });
    return price;
  }

  return (
    <section>
      <div className="top-of-popular">
        <h2>Popular gifts right now</h2>
      </div>
      <div className="popular-gift-cards">
        <div className="single-card">
          {data.map((item, indx) => (
            <div className={"full-card"}>
              <div className="image-container">
                <img src={item.imgURL} />
                <HeartSvg />
              </div>
              <li className="bottom-container total-pricelist">
                <h2>{item.caption}</h2>
                <div className="rating">
                  <div>{item.rating.amountOfRating}</div>
                  <span>
                    <StarRatingAmount item={item} />
                  </span>
                </div>
                <div className="all-prices" style={{ textAlign: "initial" }}>
                  <span>₹ {item.amount.payPrice} </span>
                  <span>₹ {item.amount.originalPrice}</span>
                  <span>({item.amount.discount}% off)</span>
                  {item.freeDelivery === "" ? (
                    <span className="no-delivery">no-delivery</span>
                  ) : (
                    <span className="FREE delivery">FREE delivery</span>
                  )}
                </div>
              </li>
            </div>
          ))}
        </div>
      </div>
      <div className="input-area">
        <input
          className="toget-input"
          type="number"
          size="10"
          onChange={fetchData}
          ref={inputValue}
        />
        <button className="input-button " onClick={FilterClick}>
          click
        </button>
        <button className="clear-button">clear</button>
      </div>
    </section>
  );
}

export default PopularGiftNow;
