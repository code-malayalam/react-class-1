import React from "react";
import './MoreDrop.css'
import Notification from '../Assets/Notification.svg';
import CustomerCare from '../Assets/CustomerCare.svg';
import Advertise from '../Assets/Advertise.svg'
import Download from '../Assets/Download.svg'

function MoreDropDown(){
  return(
    <div className="more-drop-down">
      <div className="more-triangle">  
      </div>
      <div className="more-drop">
        <ul className="more-items">
          <li className="more-list">
            <div className="more-card">
              <img src={Notification}/>
              <div className="more-text">Notification Preferences</div>
            </div>
          </li>
          <li className="more-list">
            <div className="more-card">
              <img src={CustomerCare}/>
              <div className="more-text">24x7 Customer Care</div>
            </div>
          </li>
          <li className="more-list">
            <div className="more-card">
              <img src={Advertise}/>
              <div className="more-text">Advertise</div>
            </div>
          </li>
          <li className="more-list">
            <div className="more-card">
              <img src={Download}/>
              <div className="more-text">Download App</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MoreDropDown