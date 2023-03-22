import React, { Component, useState, useEffect } from "react";
import "./style.css";

function DiscoverItems() {
  const [dItems, setDitems] = useState([]);

  useEffect(() => {
    fetch("./data1.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        // console.log(data)
        setDitems(data.discoverItems);
      });
  }, []);

  return (
    <main>
      <div className="mainContainer">
      <div className="mainContainer">
          <div className="heading">
              <h2 className="heading-text"> Discover one-of-a-kind items from independent creators</h2>
          </div>
          <div className="bubbleContainer">
            <div className="halfContainer"></div>
          
      <ul className="bubbleList">
      {dItems.map((item) => {
        return (
              <li className="shopping-list" key={item.text}>
              <img src={item.url} className="imgCategories"></img>
              <p className="title">{item.text}</p>
              </li>
        );
      })}
      </ul>
      </div>
    </div>
    </div>
    </main>
  );
}

export default DiscoverItems;
