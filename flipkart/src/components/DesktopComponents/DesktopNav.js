import React, { useState, useEffect, useRef } from "react";
import "./DesktopNav.css";
import HeaderNavItemList from "./HeaderNavItemList";
import dropDown from "./../../svgs/blackDropDown.svg";

function DesktopNav() {
  const [navData, setNavData] = useState([]);

  const [mouseOver, setMouseOver] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./data.json");
      const json = await res.json();
      setNavData(json.desktopNavData);
    };
    fetchData();
  }, [setNavData]);

  return (
    <nav className="desktop_nav">
      <ul>
        {navData.map((item, index) => {
          return (
            <li
              key={index}
              onMouseOver={() => {
                setMouseOver(true);
                setActiveIndex(index);
              }}
              onMouseOut={() => {
                setMouseOver(false);
                setActiveIndex(-1);
              }}
            >
              {mouseOver && item.items && activeIndex === index && (
                <HeaderNavItemList data={item.items ? item.items : []} />
              )}
              {/* {
                index === 2 && <HeaderNavItemList data={item.items ? item.items : []} />
              } */}

              <a href="#">
                <div className="desktop_nav_img_container">
                  <img src={item.imgURL} />
                </div>
                <div className="desktop_nav_text_container">
                  <span>{item.text}</span>
                  {item.items ? <img src={dropDown} className="image" /> : ""}
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default DesktopNav;
