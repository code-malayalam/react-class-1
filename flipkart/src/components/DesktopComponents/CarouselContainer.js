import React from "react";
import "./CarouselContainer.css";
import arrow from "./../../svgs/blackDropDown.svg";
import ImgCarousel from "./ImgCarousel";

function CarouselContainer(props) {
  const {
    heading,
    handleLeftClick,
    data,
    handleRightClick,
    backgroundImage,
    slideRef,
    slideLeft,
    innerWidth,
  } = props;

  return (
    <div className="carousel_container">
      <div
        className="carousel_text_container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="carousel_text_inner_container">
          <h2>{heading}</h2>
          <div className="viewall_btn">
            <button>View all</button>
          </div>
        </div>
      </div>

      <div className={`carousel_cards ${heading.split(" ")[0]}`} ref={slideRef}>
        {slideLeft > 0 ? (
          <div className=" arrow arrow_left">
            <button className="left_button" onClick={handleLeftClick}>
              <img src={arrow} />
            </button>
          </div>
        ) : (
          ""
        )}

        {data.map((item, index) => {
          return (
            <ImgCarousel
              imgURL={item.imgURL}
              text={item.text}
              offer={item.offer}
              items={item.items}
              key={index}
            />
          );
        })}

        {slideLeft >= innerWidth ? (
          ""
        ) : (
          <div className="arrow arrow_right">
            <button className="right_button" onClick={handleRightClick}>
              <img src={arrow} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CarouselContainer;
