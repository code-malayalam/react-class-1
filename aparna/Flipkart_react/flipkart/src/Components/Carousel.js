import React, { useState, useEffect } from "react";
import "./Carousel.css";
import DesktopCarousel from "./DesktopCarousel";


function CarouselImages() {
  const [image, setImage] = useState([]);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 978px)").matches
  )

  useEffect(() => {
    window.matchMedia("(min-width: 978px)")
    .addEventListener('change', e => setMatches(e.matches))
  }, [])

  useEffect(() => {
    fetch("./data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setImage(data.carouselItems);
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

  // console.log(image)

  let updateIndex = () => {
    if (visibleIndex == image?.length - 1) {
      setVisibleIndex(0);
    } else {
      setVisibleIndex(visibleIndex + 1);
    }
    
  };

  return (
    <>
      {!matches && (
        <>
          <div className="carousel-container">
      {image?.map((items) => {
        return (
          <div className="carousel-section" key={items}>
            <div
              className="carousel-scroll"
              style={{ transform: `translateX(-${visibleIndex * 100}%)` }}
            >
              <img src={items} className="banner" width={100} />
            </div>
            <div className="scroll-dots">
              <div className="scroll-bubble">
                <div className="bubble-elipse">
                  <div className="bouncing-bubble" style={{transform: `translateX(${visibleIndex * 12}px) scaleX(1)`}}></div>
                  {image.map((items) => {
                    return <div className="bubble" key={items}></div>;
                  })}
                </div>
               
              </div>
            </div>
          </div>
        );
      })}
    </div>
        </>
      )}
      {
        matches && (<><DesktopCarousel/></>)
      }
    </>
  );
}

export default CarouselImages;
