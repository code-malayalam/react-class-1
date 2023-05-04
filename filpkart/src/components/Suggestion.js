import React,{useState, useEffect} from "react";
import './Suggestion.css'

function Suggestion(){
    return(
        <div className="container">
            <div className="suggestion-image">
                <img src="https://rukminim1.flixcart.com/fk-p-reco/900/200/images/Reco_BBDH_Apr_ffd2ed.jpg?q=90"/>
                <div className="total-view">
                <div className="view-all">
                    <span className="popular">Popular Nearby</span>
                    <button className="view">view all</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Suggestion
