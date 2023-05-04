import React, { useEffect, useState } from "react";
import "./Carousel.css";

function Carousel() {
  const [carouseldata, setData] = useState([]);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [transition, setTranstion] = useState(0.3);
  const [time, setTime] = useState(1000);
  

  let fetchdata = () => {
    fetch("/data.json")
      .then((respose) => respose.json())
      .then((data) => {
        setData(data.movingitem);
      });
  };


  useEffect(() => {
    fetchdata();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      UpdateIndex();
    }, time);
    return () => {
      clearInterval(interval);
    };
  }, [visibleIndex]);

  let UpdateIndex = () => {
    if (visibleIndex == carouseldata?.length - 1) {
      setTime(10);
      setVisibleIndex(0);
      setTranstion(0);
    } else {
      setVisibleIndex(visibleIndex + 1);
      setTranstion(0.3);
      setTime(1000);
    }
  };


  return (
    <div className="full-carousel">
      <div className="total-carousel"  style={{
            transform: `translateX(-${visibleIndex * 100}%)`,
            transition: `transform ${transition}s ease-in-out`,
          }}>
   
        <div className="carousel">
          {carouseldata?.map((items, index) => {
            // console.log(items);

            return (
              <div className="carousel-image" key={index}>
                <img src={items} />
              </div>
            );
          })}
        </div>
      </div>
    </div>

  );
}

export default Carousel;
