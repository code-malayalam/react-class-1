import React, { useState, useEffect } from "react";
import "./Discover.css";
import DiscoverCategoriesCard from "./DiscoverCategoriesCard";
import FetchData from "../utils/Fetch";

function Discover() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const dataObj = await FetchData(
        "https://raw.githubusercontent.com/anmh265/JSON-Etsy/main/Data.json"
      );
      setData(dataObj.discoverListData);
    }
    fetchData();
  }, []);

  return (
    <div className="discover-section">
      <h1>Discover one-of-a-kind items from independent creators</h1>
      <div className="discover-categories">
        <div className="discover-categories-bg"></div>
        {
            data.map((item, key) => {
                return (<DiscoverCategoriesCard item={item} key={key} />)
            })
        }
      </div>
    </div>
  );
}

export default Discover;
