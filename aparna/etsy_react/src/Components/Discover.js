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
    <div>
      {dItems.map((item) => {
        return (
          <div>
            <div>
              <div><img src={item.url}></img></div>
            <div>{item.text}</div>
          </div>
          </div>
        );
      })}
    </div>
  );
}

export default DiscoverItems;
