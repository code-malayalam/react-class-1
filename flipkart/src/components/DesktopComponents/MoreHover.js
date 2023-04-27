import React from "react";
import "./MoreHover.css";
import notificationImg from "./../../svgs/notification.svg";
import advertiseImg from "./../../svgs/advertise.svg";
import customercareImg from "./../../svgs/customercare.svg";
import downloadImg from "./../../svgs/download.svg";

function MoreHover(props) {
  const { leftPosition } = props;
  return (
    <div className="more_hover_container" style={{ left: `${leftPosition}px` }}>
      <div className="more_hover_arrow_container"></div>
      <div className="more_hover_list">
        <ul>
          <li>
            <a href="#">
              <img src={notificationImg} />
              <p>Notification Preferences</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={customercareImg} />
              <p>24x7 Customer Care</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={advertiseImg} />
              <p>Advertise</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={downloadImg} />
              <p>Download App</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default MoreHover;
