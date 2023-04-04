import React from "react";
import './LoginDrop.css';
import Profile from '../Assets/Profile.svg'
import Plus from '../Assets/Plus.svg'
import Orders from '../Assets/Orders.svg'
import Wishlist from '../Assets/Wishlist.svg'
import Rewards from '../Assets/Rewards.svg'
import Gift from '../Assets/Gift.svg'

function CreateLoginDrop(){


  return(
    <div className="drop-container">
      <div className="triangle">
      </div>
      <div className="drop-down-box">
        <div className="customer-signup">
          <div className="customer-signup-flex">
            <div className="new-customer">
              New customer?
            </div>
            <div className="sign-up">Sign Up</div>
          </div>
        </div>
        <ul className="drop-items">
          <li className="drop-list">
            <div className="list-card">
              <img src={Profile}/>
              <div className="list-text">My Profile</div>
            </div>
          </li>
          <li className="drop-list">
            <div className="list-card">
              <img src={Plus}/>
              <div className="list-text">Flipkart Plus Zone</div>
            </div>
          </li>  <li className="drop-list">
            <div className="list-card">
              <img src={Orders}/>
              <div className="list-text">Orders</div>
            </div>
          </li>  <li className="drop-list">
            <div className="list-card">
              <img src={Wishlist}/>
              <div className="list-text">Wishlist</div>
            </div>
          </li>  <li className="drop-list">
            <div className="list-card">
              <img src={Rewards}/>
              <div className="list-text">Rewards</div>
            </div>
          </li>  <li className="drop-list">
            <div className="list-card">
              <img src={Gift}/>
              <div className="list-text">Gift Cards</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CreateLoginDrop