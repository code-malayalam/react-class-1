import React, { useEffect } from "react";
import './suggested.css';
import SuggestedMobileCards from "./suggestedMobilecards";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchFlipkartData } from "../reducers/userInfo";

function Suggested() {

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.flipkartData.data;
    })

    useEffect(() => {
        dispatch(fetchFlipkartData());
    })

    return (
        <div className="suggestion_cards">
            <div className="seperator_div">
                <div className="white"></div>
                <div className="yellow"></div>
                <div className="blue"></div>
            </div>
            <div className="container">
                <div className="head">
                    <div className="heading_text">
                        <p className="text_one">Mobiles To Check Out</p>
                        <p className="text_two">Suggested for You</p>
                    </div>
                    <div className="next_arrow">
                        <img src="https://rukminim1.flixcart.com/www/70/70/promos/04/08/2021/a76dff7e-d644-455c-9bb1-76ab974c4c5e.png?q=90" />
                    </div>
                </div>
                <SuggestedMobileCards card={data} />
            </div>
            <div className="seperator_div">
                <div className="white"></div>
                <div className="yellow"></div>
                <div className="blue"></div>
            </div>
        </div>
    )
}

export default Suggested;