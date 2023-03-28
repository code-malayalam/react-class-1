import React, { useState, useEffect } from "react";
import "./FooterNav.css";
import downloadImg from "./downloadimg.svg";
import instaIcon from "./insta.svg";
import fbIcon from "./fb.svg";
import pinterestIcon from "./pinterest.svg";
import twitterIcon from "./twitter.svg";
import youtubeIcon from "./youtube.svg";

function FooterNav() {
  const [deviceSize, changeDeviceSize] = useState(window.innerWidth);
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNavData(data.footerLists);
      });
  }, []);

  const toggleClass = (event) => {
    changeDeviceSize(window.innerWidth);
    if (deviceSize < 640) {
      event.currentTarget.classList.toggle("active");
    }
  };
  return (
    <div className="footer_nav">
      <div className="footer_nav_container">
        {navData.map((item) => {
          return (
            <div
              key={item.itemText}
              className="footer_nav_item_container"
              onClick={toggleClass}
            >
              <div className="footer_nav_item">
                <span>{item.itemText}</span>
                <button className="toggle_btn">
                  <img src="data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 24 24%22 aria-hidden%3D%22true%22 focusable%3D%22false%22%3E%3Cpath fill%3D%22%23FFFFFF%22 d%3D%22M12,15.414L7.293,10.707A1,1,0,1,1,8.707,9.293L12,12.586l3.293-3.293a1,1,0,0,1,1.414,1.414Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" />
                </button>
              </div>

              <div className="item_list sell">
                {item.lists.map((list) => {
                  return <span key={list}>{list}</span>;
                })}
              </div>
            </div>
          );
        })}

        <div
          className="footer_nav_item_container active footer_help_container"
          onClick={toggleClass}
        >
          <div className="help_container">
            <div className="footer_nav_item">
              <span>Help</span>
              <button className="toggle_btn">
                <img src="data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 24 24%22 aria-hidden%3D%22true%22 focusable%3D%22false%22%3E%3Cpath fill%3D%22%23FFFFFF%22 d%3D%22M12,15.414L7.293,10.707A1,1,0,1,1,8.707,9.293L12,12.586l3.293-3.293a1,1,0,0,1,1.414,1.414Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" />
              </button>
            </div>
            <div className="item_list help">
              <span>Help Centre</span>
              <span>Privacy settings</span>
            </div>
          </div>

          <div className="media">
            <div className="download_btn">
              <img src={downloadImg} />
              <span>Download the Etsy App</span>
            </div>

            <div className="media_icons">
              <ul>
                <li>
                  <img src={instaIcon} />
                </li>
                <li>
                  <img src={fbIcon} />
                </li>
                <li>
                  <img src={pinterestIcon} />
                </li>
                <li>
                  <img src={twitterIcon} />
                </li>
                <li>
                  <img src={youtubeIcon} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterNav;
