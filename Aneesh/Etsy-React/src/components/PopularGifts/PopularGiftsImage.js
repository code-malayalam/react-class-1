import React, { useState } from "react";
import MediaDisplay from "./MediaDisplay";
import WishList from "./Wishlist";
import PlaySVG from "../../svgs/PlaySVG.svg";

function PopularGiftsImage(props) {

    const {
        url: urlFormat,
        mediaURL,
        videoURL
    } = props

    const [play, setPlay] = useState(true)

      function handlePlayVideo(e){
        if(e.target.tagName === 'VIDEO'){
            e.target.play()
            setPlay(false)
        }
      }

      function handleStopVideo(e){
        if(e.target.tagName === 'VIDEO'){
            e.target.pause()
            e.target.load()
            setPlay(true)
        }
      }

  return (
    <div className="popular-gifts-img" onMouseOver={handlePlayVideo} onMouseLeave={handleStopVideo} >
      <MediaDisplay url={urlFormat} mediaURL={mediaURL} videoURL={videoURL}/>
      {<WishList />}
      <div className={`play-btn ${play && (urlFormat === 'video') ? "active" : ""}`}>
        <img src={PlaySVG} />
      </div>
    </div>
  );
}

export default PopularGiftsImage