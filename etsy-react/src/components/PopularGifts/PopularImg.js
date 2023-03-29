import React from "react"; 

function PopularImg(props) {
    return (
        <div className="popular_img">
            <img src={props.value} />
        </div>
    )
}

export default PopularImg;