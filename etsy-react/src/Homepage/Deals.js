import React, { useState, useEffect } from "react";
import '../components/Deals/deals.css'

function Deals() {
    const [deal, setdeal] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                setdeal(data.dealCardContents);
                // console.log(data);
            })
    }, [])

    return (
        <div>
            <DealHeading />
            <div className="deals_container">
                {
                    deal.map((item) => {
                        return (
                            <DealCard item={item} key={item.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

function DealCard(props) {
    // console.log(props)
    const {
        url,
        offer,
        heading
    } = props.item

    return (
        <div className="deals_card">
            <div className="deal_items">
                <div className="deal_item_container">
                    <div className="deal_img">
                        <img src={url} />
                    </div>
                    <div className="deals_text">
                        <span>{offer}</span>
                        <p>{heading}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function DealHeading() {
    const [heading, setHeading] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                setHeading(data.dealHeadingData);
                // console.log(data.dealHeadingData.deal);
            })
    }, [])

    return (
        <div className="deals_of_the_day">

            <div className="deals">{heading.deal}</div>
            <div className="shop">
                <p>{heading.shop}</p>
                <img src={heading.url} />
            </div>

        </div>
    )
}

export default Deals; 