import React, { useEffect, useRef, useState } from "react";
import FetchData from "./utils/Fetch";
import "./MenuOptions.css";

function MenuOptions() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(true)
  const mobileMenu = useRef()

  useEffect(() => {
    async function getData() {
      const datalist = await FetchData(
        "https://raw.githubusercontent.com/anmh265/JSON-Etsy/main/Data.json"
      );

      setData(datalist.categoriesData);
    }
    getData();
  }, []);

  const handleClose = () =>{
    setFlag(false)
  }

  return (
    <div className={`mobile-menu ${flag ? 'show' : ''}`} ref={mobileMenu} >
      {/* <div className="background-blur"></div> */}
      <div className="mobile-menu-container">
        <h2>Browse Categories</h2>
        <button className="close-btn" onClick={handleClose} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z"></path></svg>
        </button>
        <ul className="mobile-menu-list">
          {data.map((item) => {
            if (typeof item.label !== "object") {
              return (
                <li key={item.label}>
                  <a href="">{item.label}</a>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z" fill="#222222"></path></svg>
                </li>
              );
            } else {
              return (
                <li key={item.label}>
                  <a href="">{item.label.gift_text}</a>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z" fill="#222222"></path></svg>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default MenuOptions;
