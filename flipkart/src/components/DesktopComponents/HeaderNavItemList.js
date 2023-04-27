import React, { useEffect, useRef, useState } from "react";
import "./HeaderNavItemList.css";
import arrowImg from "./../../svgs/blueDropDown.svg";
import { useSelector, useDispatch } from "react-redux";
import { showArrow, hideArrow } from "../../redux-toolkit/arrowReducer";

function HeaderNavItemList(props) {
  const { data } = props;
  const [mouseover, setMouseover] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
//   const [isShowArrow, setIsShowArrow] = useState(false);
  const [isList, setisList] = useState(false);

  const val = useSelector((state) => state.arrow.show);
  
  const dispatch = useDispatch();

  return (
    <div
      className="item_list_container"
      style={{ left: `${isList ? "-185" : "-65"}px` }}
    >
      <div
        className={`item_arrow_container ${!isList ? "list_arrow" : ""}`}
      ></div>

      <div className="item_list_inner_container">
        <div className="itemListContainer">
          <div className="itemListInnerContainer">
            <div className="item_list_left_container">
              {data.map((item, index) => {
                return (
                  <div key={index}>
                    <div
                      className="list_item_container"
                      onMouseOver={() => {
                        setActiveIndex(index);
                        setMouseover(true);
                        // setIsShowArrow(true);
                        dispatch(showArrow());

                        {
                          item.list.length === 0
                            ? setisList(false)
                            : setisList(true);
                        }
                      }}
                      onMouseOut={() => {
                        setActiveIndex(-1);
                        setMouseover(false);

                        // setIsShowArrow(true);
                      }}
                    >
                      <a href="#">{item.item}</a>
                      {val &&
                        activeIndex == index &&
                        item.list.length !== 0 && <img src={arrowImg} />}
                    </div>

                    {mouseover &&
                      activeIndex === index &&
                      item.list &&
                      item.list.length !== 0 && (
                        <div className="item_list_right_container">
                          <div className="more_item">more in {item.item}</div>
                          <ul>
                            {item.list.map((listItem, indx) => {
                              return <li key={indx}>{listItem}</li>;
                            })}
                          </ul>
                        </div>
                      )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderNavItemList;
