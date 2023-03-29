import React from "react";
import './Subscription.css'
import SubscriptionSVG from '../../svgs/SubscriptionSVG.svg'

function Subscription() {
  return (
    <div className="subscription-section">
      <div className="subscription-span-svg">
        <img src={SubscriptionSVG} />
      </div>
      <p className="subscription-text">
        Yes! Send me exclusive offers, unique gift ideas, and personalised tips
        for shopping and selling on Etsy.
      </p>
      <div className="subscribe-input">
        <input type="text" className="email" placeholder="Enter your email" />
        <button className="subscribe-btn">Subscribe</button>
      </div>
    </div>
  );
}

export default Subscription;
