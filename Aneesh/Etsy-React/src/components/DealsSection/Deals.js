import React, { useState, useEffect } from "react";
import "./Deals.css";
import FetchData from "../header/utils/Fetch";
import DressCard from "./DressCard";
import Home from "../header/utils/Fetch";
import RightArrow from '../../svgs/RightArrow.svg'

function Deals() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const dataObj = await FetchData(
        "https://raw.githubusercontent.com/anmh265/JSON-Etsy/main/Data.json"
      );
      setData(dataObj.dealsData);
    }
    getData();
  }, []);

  return (
    <div className="deals-container">
      <div className="deals-header">
        <h2>Deals of the day</h2>
        <a href="">
          Shop all deals
          <img src={RightArrow} className='right-arrow' />
        </a>
      </div>
      <div className="dress-category">
        {data.map((item, idx) => {
          return <DressCard key={idx} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Deals;
