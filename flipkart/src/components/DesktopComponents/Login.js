import React from "react";
import "./Login.css";
import profile from "./../../svgs/myprofile.svg";
import pluszone from "./../../svgs/pluszone.svg";
import orders from "./../../svgs/orders.svg";
import wishlist from "./../../svgs/wishlist.svg";
import rewards from "./../../svgs/rewards.svg";
import giftcards from "./../../svgs/giftcards.svg";

function Login() {
  return (
    <div className="login_outer_container">
      <div className="arrow_container"></div>
      <div className="login_inner_container">
        <div className="signup_container">
          <div className="customer_text_container">New customer?</div>
          <div className="signup_text_container">Sign Up</div>
        </div>
        <ul>
          <li>
            <a href="#">
              <img src={profile} />
              <p>My Profile</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={pluszone} />
              <p>Flipkart Plus Zone</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={orders} />
              <p>Orders</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={wishlist} />
              <p>Whishlist</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={rewards} />
              <p>Rewards</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={giftcards} />
              <p>Gift Cards</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Login;
