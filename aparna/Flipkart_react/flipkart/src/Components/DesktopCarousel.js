import React, { useState, useEffect } from "react";
import "./DesktopCarousel.css";
import LeftBtn from '../Assets/LeftBtn.svg'
import RightBtn from '../Assets/RightBtn.svg'

function DesktopCarousel() {
  const [image, setImage] = useState([]);
  const [visibleIndex, setVisibleIndex] = useState(0);

 

  useEffect(() => {
    fetch("./data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setImage(data.DesktopCarouselItems);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex();
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [visibleIndex]);



  let updateIndex = () => {
    if (visibleIndex == image?.length - 1) {
      setVisibleIndex(0);
    } else {
      setVisibleIndex(visibleIndex + 1);
    }
    
  };

  const handleLeftClick = () => {
    if (visibleIndex === 0) {
      setVisibleIndex(image?.length - 1);
    } else {
      setVisibleIndex(visibleIndex - 1);
    }
  }

  const handleRightClick = () => {
    updateIndex()
  }

  return (
    <div className="dt-carousel-container">

      {image?.map((items) => {
        return (
          <div className="dt-carousel-section" key={items.id} >
            <div
              className="dt-carousel-scroll"
              style={{ transform: `translateX(-${visibleIndex * 100}%)` }}
            >
              <img src={items.img} className="dt-banner" width={100} />
            </div>          
          </div>
        );
      })}
      
      <div className="left-btn" onClick={handleLeftClick}>
        <img src={LeftBtn}/>
      </div>
      <div className="right-btn" onClick={handleRightClick}>
        <img src={RightBtn}/>
      </div>
    </div>
  );
}

export default DesktopCarousel;
