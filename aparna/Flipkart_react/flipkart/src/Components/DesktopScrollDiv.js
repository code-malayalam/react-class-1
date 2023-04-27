import React, { useState, useEffect } from "react";
import "./DesktopScrollDiv.css";
import BlackChevron from "../Assets/BlackChevron.svg";
import CreateFashionHover from "./FashionHover";

function DesktopScrollCategories() {
  const [dData, setdData] = useState([]);
  const [mouseOver, setMouseOver] = useState(false);

  const fetchScroll = () => {
    fetch("./data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setdData(data.desktopScrollSection);
      });
  };

  useEffect(() => {
    fetchScroll();
  }, []);

  // console.log(scrollData)

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  return (
    <div className="dt_scroll_container">
      <div className="dt_scroll_right ">
        <div className="dt_scroll_flex">
          {dData.map((items, idx) => {
            return (
              <div key={items.id} className="dt_categories">
                <div className="dt_scrollitems">
                  <img className="scroll_img" src={items.img} />
                </div>
                <div
                  className="scroll_title"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  {items.title}
                  {items.chevron === true ? (
                    <img src={`${BlackChevron}`} className="chevron" />
                  ) : null}
                  {mouseOver && (items.chevron === true && idx === 2) ? (
                    <CreateFashionHover />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DesktopScrollCategories;
