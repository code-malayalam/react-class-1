import React from 'react'
import './Offers.css'
import bgtwo from '../assets/bgtwo.svg'

function Offers() {
    return (
        <div className="exclusive_offers">
            <div className="offer_svg">
                <img src={bgtwo} />
            </div>
            <div className="offers">
                <p>
                    Yes! Send me exclusive offers, unique gift ideas, and personalised
                    tips for shopping and selling on Etsy.
                </p>
                <div className="offer_input_box">
                    <input
                        type="email"
                        id="email"
                        className="email"
                        placeholder="Enter your email"
                    />
                    <button className="subscribe">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Offers