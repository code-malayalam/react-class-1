import React from "react";
import Delivery from "./Delivery";
import PopularImg from "./PopularImg";
import PlayVideo from "./PlayVideo";
import LikeButton from "./LikeButton";
import { HalfStar, Starloop } from "./RatingStars";

function PopularCards(props) {
    const {
        delivery,
        videoURL,
        oldPrice,
        discount,
        imageURL,
        text,
        ratingCount,
        rating,
        id
    } = props.item

    const price = Math.floor(oldPrice * (100 - discount) / 100).toFixed(0);
    return (
        <div className="popular_item_container">
            <div className="popular_card">
                <div className="popular_card_container">
                    <PopularImg value={imageURL} />
                    <div className="popular_video_container">
                        <PlayVideo value={videoURL} />
                    </div>
                </div>
                <LikeButton />
                <div className="popular_text">
                    <p>{text}</p>
                    <div className="star">
                        <div className="rating">

                            <Starloop value={rating}  />
                            <HalfStar value={rating} />
                        </div>
                        <span className="rating_count">({ratingCount})</span>
                    </div>
                    <div className="price_container">
                        <span className="current_price">
                            ₹ {price.toLocaleString()}
                        </span>
                        <span className="old_price">
                            ₹ {oldPrice.toLocaleString()}
                        </span>
                        <span className="discount">
                            ({discount}% off)
                        </span>
                    </div>
                    <Delivery value={delivery} item={props.item} />
                </div>
            </div>
        </div>
    )
}
export default PopularCards;


// function Star() {
//     return (
//         <span>{ratingStar}</span>
//     )
// }

// function HalfStar(props) {

//     if (Math.floor(props.value) < props.value) {
//         return (
//             <span>{ratingStarHalf}</span>
//         )
//     }
// }

// function Starloop(props) {

//     const stars = [];
//     for (let i = 0; i < Math.floor(props.value); i++) {
//         stars.push(<Star key={i} />)
//     }
//     return <div>{stars}</div>
// }


// function PopularSection(){
//     return(
//         <div className="popular_gifts">
//             <div className="popular_gifts_filter">
//                 <input className="filter_input" type="number"/>
//                 <button onClick={filter} className="filter_btn">Filter</button>
//             </div>
//             <p className="deals popular">
//                 {popularHeadingText}
//             </p>
//             <div className="popular_container">
//                 {
//                     gift.map((item)=>{
//                         return (
//                             <></>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }
// import { popularHeadingText } from "../Constants";
// import RatingStars, { HalfStar } from "./RatingStars";
// import Starloop from "./RatingStars";
// console.log(props)
{/* <Starloop value={rating} key={id} /> */ }
{/* <RatingStars /> */ }
// import { ratingStar, ratingStarHalf } from "../Constants";