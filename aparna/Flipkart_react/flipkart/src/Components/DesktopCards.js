import React, { useEffect, useState, useRef } from "react";
import "./DesktopCards.css";
import LeftBtn from "../Assets/LeftBtn.svg";
import RightBtn from "../Assets/RightBtn.svg";
import { useSelector, useDispatch } from "react-redux";
import { fetchCardData } from "../reducers/cards";

function CreateDesktopCards() {

  const [opacity, setOpacity] = useState(0);
  const ref = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCardData());
  });

  const eItems = useSelector((state) => {
    return state.card.data.electronics;
  });

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    setOpacity(!opacity);
  };

  return (
    <div className="electronics-container ">
      <div className="best-of-electronics ">
        <div className="electronics-section ">
          <h2 className="text-heading">Best of Electronics</h2>
          <div className="view-container">
            <div className="view-all">VIEW ALL</div>
          </div>
        </div>
      </div>
      <div className="electronics-equipment">
        <div
          className="electronics-items"
          style={{ overflowX: "scroll" }}
          ref={ref}
        >
          {/* {eItems.map((items) => {
            return (
              <div className="electronics-items-list" key={items.img}>
                <div className="e-image">
                  <img src={items.img} />
                </div>
                <div className="e-title">{items.title}</div>
                <div className="e-price">{items.price}</div>
                <div className="e-description">{items.description}</div>
              </div>
            );
          })} */}
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
  );
}

export default CreateDesktopCards;
