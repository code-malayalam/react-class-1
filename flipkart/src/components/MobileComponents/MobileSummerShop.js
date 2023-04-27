import React, { useEffect, useState } from "react";
import "./MobileSummerShop.css";
import arrow from "./../../svgs/whiteDropDown.svg";

function MobileSummerShop() {
  const [shopData, setShopData] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./data.json");
      const json = await res.json();
      setShopData(json.MobileSummerShopData);
    };
    fetchData();
  }, [setShopData]);

  const setWindowWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowWidth);

    return () => window.removeEventListener("resize", setWindowWidth);
  }, []);
  return (
    <div className="summer_shop_container">
      <div className="summer_shop_heading_container">
        <p>Shop for a cool summer</p>
        <button>
          <img src={arrow} />
        </button>
      </div>
      <div className="summer_shop_cards">
        {shopData.map((item) => {
          return (
            <div className="summer_shop_card" key={item.text}>
              <div
                className="shop_card_img_container"
                style={{ width: (width - 76) / 2, height: (width - 76) / 2 }}
              >
                <img src={item.imgURL} />
              </div>
              <div className="shop_card_text_container">
                <div className="card_text">{item.text}</div>
                <div className="card_offer">{item.offer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MobileSummerShop;
