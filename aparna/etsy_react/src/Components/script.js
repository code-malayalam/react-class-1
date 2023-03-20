import React, { Component, useState, useEffect } from "react";
import "./style.css";

function NavItems() {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    fetch("./data1.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        // console.log(data)
        setCat(data.categoryList);
      });
  }, []);

  return (
    <div>
      {cat.map((item) => {
        return (
          <div>
            <div id="categories">{item.title}</div>
            <img src={item.img}></img>
          </div>
        );
      })}
    </div>
  );
}

export default NavItems;
