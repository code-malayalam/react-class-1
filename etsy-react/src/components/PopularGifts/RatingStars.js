import React from "react";
import ratingStarHalf from "../../svg/ratingStarHalf.svg";
import ratingStar from "../../svg/ratingStar.svg";

export function Starloop(props) {

    const stars = [];
    for (let i = 0; i < Math.floor(props.value); i++) {
        stars.push(<Star key={i} />)
    }
    return <>{stars}</>
}

function Star() {
    return (
        <span className="popular_rating">
            <img src={ratingStar} />
        </span>
    )
}
export function HalfStar(props) {

    if (Math.floor(props.value) < props.value) {
        return (
            <span className="popular_rating">
                <img src={ratingStarHalf} />
            </span>
        )
    }
}

// export default Starloop;