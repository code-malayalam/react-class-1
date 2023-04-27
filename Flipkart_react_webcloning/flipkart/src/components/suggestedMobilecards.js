import React from "react";

function SuggestedMobileCards(props) {
    const{
        card
    }=props

    return (
        <div className="mobile_cards_container">
            {
                card?.suggestions?.map((item) => {
                    return (
                        <div className="card_container" key={item.id}>
                            <div className="card">
                                <div className="img_container" >
                                    <img src={item.img} />
                                </div>
                                <div className="cards_text">
                                    <div className="text"  >
                                        <p>{item.textOne} </p>
                                    </div>
                                    <div className="additional_text">
                                        <p>{item.textTwo}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SuggestedMobileCards;