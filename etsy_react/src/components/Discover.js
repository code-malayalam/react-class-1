import React, { useState, useEffect } from "react";
import "./Discover.css";

function Discover() {
  const [discoverData, setDiscoverData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDiscoverData(data.discoverObjects);
      });
  }, []);

  return (
    <div className="discover_container">
      <div className="discover_heading">
        <h2>Discover one-of-a-kind items from independent creators</h2>
      </div>
      <div className="discover_items">
        <div className="bg_color"></div>
        <ul>
          {discoverData.map((item, index) => {
            return (
              <li key={item.text}>
                <a href="#">
                  <div className="discover_img_container">
                    <img src={item.url} alt="" />
                  </div>
                  <div className="discover_text_container">
                    <p>{item.text}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Discover;
