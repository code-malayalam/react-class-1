import React, { useEffect, useState, useRef } from "react";
import "./MobileAdsCarousel.css";

function MobileAdsCarousel() {
  const [adsData, setAdsData] = useState([]);
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);
  const delay = 2500;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./data.json");
      const json = await res.json();
      setAdsData(json.mobileAdsData);
    };
    fetchData();
  }, [setAdsData]);

  const setWindowWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowWidth);

    return () => window.removeEventListener("resize", setWindowWidth);
  }, []);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === adsData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="mobileAds_container">
      <div
        className="moblieAds_slides_container"
        style={{ transform: `translateX(${-index * 100}%)` }}
      >
        {adsData.map((item, indx) => {
          return <img src={item} style={{ width: width }} key={indx} />;
        })}
      </div>
      <div className="dots_container">
        {adsData.map((item, indx) => {
          return (
            <div
              className={`dot ${index === indx ? "active" : ""}`}
              key={indx}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default MobileAdsCarousel
