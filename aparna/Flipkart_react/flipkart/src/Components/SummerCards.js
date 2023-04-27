import React, { useEffect, useState, useRef } from "react";
import "./SummerCards.css";
import LeftBtn from "../Assets/LeftBtn.svg";
import RightBtn from "../Assets/RightBtn.svg";
import CreateMobSummerCards from "./mobSummerCards";

function SummerCards() {
  const [summerItems, setSummerItems] = useState([]);
  const [opacity, setOpacity] = useState(0);
  const ref = useRef(null);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width : 978px)").matches
  )

useEffect(() => {
  window
    .matchMedia("(min-width : 978px)")
    .addEventListener("change", (e) => setMatches(e.matches))
})

  useEffect(() => {
    fetch("./data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setSummerItems(data.summerSection);
      });
  });


  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    setOpacity(!opacity);
  };

  return (
    <>
    {
      matches && (
        <div className="summer-container ">
      <div className="shop-summer">
        <div className="summer-section">
          <h2 className="text-heading">Shop for a Cool Summer</h2>
          <div className="view-container">
            <div className="view-all">VIEW ALL</div>
          </div>
        </div>
      </div>
      <div className="summer-equipments">
        <div className="summer-items" style={{ overflowX: "scroll" }} ref={ref}>
          {summerItems.map((items) => {
            return (
              <div className="summer-items-list" key={items.img}>
                <div className="summer-image">
                  <img src={items.img} />
                </div>
                <div className="summer-title">{items.title}</div>
                <div className="summer-price">{items.price}</div>
              </div>
            );
          })}
          <div
            className="left-btn-box"
            onClick={() => scroll(-2000)}
            style={{ opacity }}
          >
            <div className="left-btn-img">
              <img src={LeftBtn} />
            </div>
          </div>
          <div className="right-btn-box" onClick={() => scroll(2000)}>
            <div className="right-btn-img">
              <img src={RightBtn} />
            </div>
          </div>
        </div>
      </div>
    </div>
      )
    }
    {
      !matches && (<><CreateMobSummerCards/></>)
    }
    </>
  );
}


export default SummerCards