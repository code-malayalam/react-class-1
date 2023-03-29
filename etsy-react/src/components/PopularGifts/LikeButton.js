import React, { useState } from "react";
import  redLikeBtn  from "../../svg/redLikeBtn.svg";
import  likeBtnSvg from "../../svg/likeBtnSvg.svg";

function LikeButton() {
    const [likebtn, setLikebtn] = useState(true)

    const handleClick = () => {
        setLikebtn(!likebtn)
    }
    if (likebtn) {
        return (
            <button onClick={handleClick} className="like_btn">
                <img src={likeBtnSvg}/>
            </button>
        )
    } else {
        return (
            <button onClick={handleClick} className="like_btn">
                <img src={redLikeBtn}/>
            </button>
        )
    }
}

export default LikeButton; 