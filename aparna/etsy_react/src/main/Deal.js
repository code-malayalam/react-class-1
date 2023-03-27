import React, { Component, useState, useEffect } from "react";
import "./style.css";

function DealItems() {
  const [dealItems, setDealitems] = useState([]);

  useEffect(() => {
    fetch("./data1.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setDealitems(data.clothCategory);
      });
  }, []);

  return (
    <div className="dealContainer">
      <div className="dealsHeadContainer">
        <h3 className="dealsHeading">Deals of the day</h3>
        <div className="shopDeals">
          {" "}
          Shop all deals
          <div className="shop">
            <img
              className="arrow"
              src="data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2F….3,16.7,11.3,12.7,11.3,12.7z%22%2F%3E%3C%2Fsvg%3E"
            ></img>
          </div>
        </div>
      </div>

      <ul className="clothingList">
        {dealItems.map((item) => {
          return (
            <div key={item.url} className="clothContainer">
              <li className="listOfClothes">
                <div className="clothes">
                  <img className="womensWear" src={item.url}></img>
                </div>
                <div className="dealTextContainer">
                  <p className="discountPercent">{item.discount}</p>
                  <span className="tagOfDeals">{item.clothText}</span>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default DealItems;
