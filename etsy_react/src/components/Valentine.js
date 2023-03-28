import React, { useState, useEffect } from "react";
import "./Valentine.css";
import playButton from "./playButton.svg";
import likeButtonRed from "./likeButtonRed.svg";
import likeButtonWhite from "./likeButtonWhite.svg";
import Video from "./Video";

function Valentine() {
  const [valentineData, setValentineData] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setValentineData(data.valentineObjects);
      });
  }, []);
  const handlePlayVideo = (e) => {
    e.target.play();
  };

  const toggleClass = (e) => {
    e.currentTarget.classList.toggle("active");
    setIsActive(!isActive);
  };

  return (
    <div className="valentine">
      <div className="valentine_container">
        <div className="valentine_content">
          <div className="valentine_items">
            <div className="valentine_heading">
              <p>Editors' Picks </p>
              <h1>Valentine's Day Gifts</h1>
              <a href="#" className="valentine_heading_link">
                Shop these unique finds
                <img
                  src="data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 12 24%22%3E%3Cpath fill%3D%22%23222222%22 d%3D%22M11.3,12.7L12,12l-0.7-0.7l-4-4c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L8.2,11H1c-0.6,0-1,0.4-1,1s0.4,1,1,1h7.2l-2.3,2.3 c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3C7.3,16.7,11.3,12.7,11.3,12.7z%22%2F%3E%3C%2Fsvg%3E"
                  className="arrow"
                />
              </a>
            </div>
            {valentineData.map((item, index) => {
              return (
                <div className="valentine_item" key={index}>
                  <div className="valentine_item_container">
                    <img src={item.imgURL} />

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
                    <div className="valentine_price">
                      <span>₹ {item.price.toLocaleString()} </span>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="see_more">
              <a href="#">
                See more
                <img
                  src="data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 12 24%22%3E%3Cpath fill%3D%22%23222222%22 d%3D%22M11.3,12.7L12,12l-0.7-0.7l-4-4c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L8.2,11H1c-0.6,0-1,0.4-1,1s0.4,1,1,1h7.2l-2.3,2.3 c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3C7.3,16.7,11.3,12.7,11.3,12.7z%22%2F%3E%3C%2Fsvg%3E"
                  className="arrow"
                />
              </a>
            </div>
            <div className="valentine_text_container">
              <p className="valentine_text">
                Add to Heart: Explore extraordinary ways—from extraordinary
                local sellers—to express your love
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Valentine;
