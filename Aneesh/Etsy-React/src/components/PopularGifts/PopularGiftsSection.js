import React, { useState, useEffect, useRef } from "react";
import FetchData from "../header/utils/Fetch";
import calculatePrice from "./CalculatePrice";
import PopularGiftCard from "./PopularGiftCard";
import "./PopularGiftsSection.css";

function PopularGiftSection() {
  const [data, setData] = useState([]);
  const [filterData, setFilter] = useState([]);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    async function fetchData() {
      const dataObj = await FetchData(
        "https://raw.githubusercontent.com/anmh265/JSON-Etsy/main/Data.json"
      );
      setData(dataObj.popularGiftData);
      setFilter(dataObj.popularGiftData);
    }
    fetchData();
  }, []);

  function handleFilter(e) {
    e.preventDefault();
    const filterDataList = filterData.filter(
      (item) => calculatePrice(item.actualPrice, item.discount) >= inputVal
    );
    setData(filterDataList);
  }

  return (
    <div className="popular-gifts-container">
      <div className="popular-gifts-heading">
        <h2>Popular Gifts right now</h2>
        <form className="filter-form" onSubmit={handleFilter}>
          <input
            type="number"
            className="popular-gift-filter"
            placeholder="Enter filter amount"
            onChange={(e) => setInputVal(+e.target.value)}
          />
          <input type="submit" className="submit-btn" value="filter" />
        </form>
      </div>
      <div className="popular-gift-card-container">
        {data.map((item, idx) => {
          return <PopularGiftCard key={idx} item={item} />;
        })}
      </div>
    </div>
  );
}

export default PopularGiftSection;
