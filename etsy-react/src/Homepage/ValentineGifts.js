import React, { useState, useEffect } from "react";
import { valentineGiftsHeading, valentineShopHeading, addToHeartTxt, arrowRight } from "../components/Constants";
import '../components/ValentineDayGifts/valentiveGift.css'

function ValentineDayGifts() {

    const [gift, setGift] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                setGift(data.valentineGiftItems);
            })
    }, [])
    return (
        <div id="valentines_day_gifts_section">

            <div className="valentine_heading_container">
                <p className="valentine_heading_editors_pick">
                    Editors' Picks
                </p>
                <p className="valentine_gifts_heading">
                    {valentineGiftsHeading}
                </p>
                <div className="valentine_shop_text">
                    <p className="valentine_shop_heading">
                        {valentineShopHeading}
                    </p>
                </div>
                <img className="valentines_arrow_right" src={arrowRight} />
            </div>
            {
                gift.map((item) => {
                    return (
                        <GiftCard item={item} key={item.id} />
                    )
                })
            }
            <div className="add_to_heart">
                <p className="add_to_heart_text">
                    {addToHeartTxt}
                </p>
            </div>
        </div>
    )
}

function GiftCard(props) {
    const {
        imgURL
    } = props.item
    return (
        <div className="valentine_card">
            <div className="valentine_card_container">
                <img src={imgURL} />
                <div className="button"></div>
            </div>
        </div>
    )
}

export default ValentineDayGifts;
