import React, { useEffect, useState } from "react";
import "./Category.css";
import gift from "./gift.svg";

function Category() {
  const [navData, setNavData] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNavData(data.navObjects);
      });
  }, []);

  return (
    <nav>
      <div className="nav">
        <ul>
          {navData.map((item, index) => {
            return (
              <li key={item.text}>
                <a href="#">
                  {item.img ? <img src={gift} /> : ""}
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Category;
