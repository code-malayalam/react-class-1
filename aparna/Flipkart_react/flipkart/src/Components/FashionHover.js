import React, { useState, useEffect } from "react";
import "./FashionHover.css";
import RightArrow from "../Assets/RightArrow.svg";


function CreateFashionHover() {
  const [fItems, setFItems] = useState([]);
  const [secItems, setSecItems] = useState([]);
  const [ishovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetch("./data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setFItems(data.fashionDrop);
      });
  });

  useEffect(() => {
    fetch("./data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setSecItems(data.fashionRight);
      });
  });

  const displayRight = () => {
    console.log("hello");
    setIsHovered(true);
  };
  // console.log(secItems)
 
  // console.log(secItems[1])

  return (
    <div className="fashion-hover">
      <div className="fashion-triangle"></div>
      <div className="fashion-sub-container">
        <div className="fashion-division">
          <div className="fashion-left-section">
            {fItems.map((items, indx) => {
              return (
                <a
                  className="fashion-items"
                  key={items}
                  onMouseOver={displayRight}
                >
                  {items}
                  <img src={RightArrow} />
                </a>
              );
            })}
          </div>
          <div className="fashion-right-section">
            <span className="more-in-title">
              {secItems[0]?.map((arrays, arrindx) => {
              
                return (
                  <a className="fashion-list" key={arrays}>
                  {arrays}
                  </a>
                )
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateFashionHover;
