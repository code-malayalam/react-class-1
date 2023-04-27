import React from "react";

function Card(props) {
    const {
        cards,
        value
    } = props

    return (
        <>
            {
                cards?.map((item) => {
                    return (
                        <div className="card_desktop" key={item.id} style={{ transform: `translateX(-${value * 10}vw)` }}>
                            <div className="card_img_container_desktop">
                                <img src={item.img} />
                            </div>
                            <div className="card_text_desktop">
                                <span className="card_heading_text_desktop">{item.textOne}</span>
                                <span className="rate">{item.offer}</span>
                                {
                                    <MoreText textTwo={item.textTwo} />
                                }
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

function MoreText(props) {
    const {
        textTwo
    } = props
    if (textTwo) {
        return (
            <span className="description">{textTwo}</span>
        )
    }
    return ""
}

export default Card;