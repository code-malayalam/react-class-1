import React, { useEffect, useState, useRef } from "react";
import "./ToysFoodCards.css";
import LeftBtn from "../Assets/LeftBtn.svg";
import RightBtn from "../Assets/RightBtn.svg";

function ToysAndFoodCards() {
  const [tfItems, setTFItems] = useState([]);
  const [opacity, setOpacity] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    fetch("./data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setTFItems(data.toysAndFood);
      });
  }, []);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    setOpacity(!opacity)
  };

  return (
    <div className="tf-container ">
      <div className="beauty-food-toys">
        <div className="tf-section">
          <h2 className="text-heading">Beauty,Food,Toys & more</h2>
          <div className="view-container">
            <div className="view-all">VIEW ALL</div>
          </div>
        </div>
      </div>
      <div className="tf-equipments">
        <div className="tf-items" style={{ overflowX: "scroll" }} ref={ref}>
          {tfItems.map((items) => {
            return (
              <div className="beauty-toy-food-list" key={items.img}>
                <div className="tf-image">
                  <img src={items.img} />
                </div>
                <div className="tf-title">{items.title}</div>
                <div className="tf-price">{items.price}</div>
                <div className="tf-description">{items.description}</div>
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
          <div className="right-btn-box" 
          onClick={() => scroll(2000)}
          
          >
            <div className="right-btn-img">
              <img src={RightBtn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToysAndFoodCards;
