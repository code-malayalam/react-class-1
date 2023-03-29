import React, { useState, useEffect } from "react";
import './CategoryList.css'
import FetchData from "../utils/Fetch";

function CategoryList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(){
        const dataObj = await FetchData('https://raw.githubusercontent.com/anmh265/JSON-Etsy/main/Data.json')
        setData(dataObj.categoriesData)
    }
    fetchData()
}, []);

  function CreateATag({item}) {
    if (typeof item.label === "object") {
      return (
        <li>
          <a href="" className="gift-svg">
            <img src={`data:image/svg+xml;utf8,${item.label.gift_svg}`} />
          </a>
          <a href="" className="gift-text">
            {item.label.gift_text}
          </a>
        </li>
      );
    } else {
      return (
        <li>
          <a href="">{item.label}</a>
        </li>
      );
    }
  }

  return (
    <div className="categories">
      <ul id="category-list">
        {data.map((item, idx) => {
          const key = idx + item;
          return (
          <CreateATag item={item} key={key}/>
          )
        })}
      </ul>
    </div>
  );
}

export default CategoryList;
