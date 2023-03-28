import React from "react";
import "./Subscribe.css"

function Subscribe(){
    return(
        <div className="subscribe_container">
        <div className="subscribe_content">
          <div className="subscribe_text">
            <p>
              Yes! Send me exclusive offers, unique gift ideas, and
              personalised tips for shopping and selling on Etsy.
            </p>
          </div>
          <div className="subscribe_input">
            <input type="text" placeholder="Enter your email" />
            <button className="subscribe_btn">Subscribe</button>
          </div>
        </div>
      </div>
    )
}

export default Subscribe