import React, { useState, useEffect, useRef } from "react";
import "./Popular.css";
import playButton from "./playButton.svg";
import likeButtonRed from "./likeButtonRed.svg";
import likeButtonWhite from "./likeButtonWhite.svg";
import CreateStars from "./Stars";
import Video from "./Video";

function Popular() {
  const [popularData, setPopularData] = useState([]);
  const [inputValue, setInputValue] = useState(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPopularData(data.popularObjects);
      });
  }, []);

  const handlePlayVideo = (e) => {
    e.target.play();
  };

  const toggleClass = (e) => {
    e.currentTarget.classList.toggle("active");
    setIsActive(!isActive);
  };

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleClick() {
    const newList = popularData.filter((item) => {
      const price = calculatePrice(item.actualPrice, item.discount);

      return price <= inputValue;
    });
    setPopularData(newList);
  }
  return (
    <div className="popular_container">
      <div className="popular_heading">Popular gifts rights now</div>
      <div className="popular_items">
        {popularData.map((item, index) => {
          return (
            <div className="popular_item" key={item.title}>
              <div className="popular_item_container">
                <div className="popular_item_content">
                  <div className="popular_img">
                    <img src={item.url} />
                    {item.videoURL ? (
                      <Video
                        videoURL={item.videoURL}
                        handlePlayVideo={handlePlayVideo}
                      />
                    ) : (
                      ""
                    )}
                    {item.videoURL ? (
                      <button className="play_btn">
                        <img src={playButton} />
                      </button>
                    ) : (
                      ""
                    )}
                    <button className="like_btn" onClick={toggleClass}>
                      {isActive ? (
                        <img src={likeButtonRed} />
                      ) : (
                        <img src={likeButtonWhite} />
                      )}
                    </button>
                  </div>
                  <div className="popular_info">
                    <div className="heading">{item.title}</div>
                    <p className="star">
                      <CreateStars starno={item.rating} />

                      <span className="star_no">
                        ({item.starno.toLocaleString()})
                      </span>
                    </p>
                    <div className="price">
                      <span className="current_price">
                        ₹
                        {Math.floor(
                          calculatePrice(item.actualPrice, item.discount)
                        ).toLocaleString()}
                      </span>
                      <span className="actual_price">
                        {item.actualPrice.toLocaleString()}
                      </span>
                      <span className="off">({item.discount}% off)</span>
                    </div>
                    <div className="free_delivery">
                      {item.freeDelivery ? <span>Free delivery</span> : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="popular_filter_container">
        <input type="number" className="filter_input" onChange={handleChange} />
        <button className="filter_btn" onClick={handleClick}>
          Filter
        </button>
      </div>
    </div>
  );
}

function calculatePrice(actualPrice, discount) {
  const currentPrice = actualPrice * ((100 - discount) / 100);
  return currentPrice;
}

export default Popular;
