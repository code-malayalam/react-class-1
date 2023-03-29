import React from "react";
import { pause, play } from "../../functions/videoPlayPause";

function PlayVideo(props) {
    const {
        value
    } = props

    if (value) {
        return (
            <video
                muted={true}
                className="video"
                src={value}
                type="video/mp4"
                onMouseEnter={play}
                onMouseLeave={pause}
            ></video>
        )
    }
}

export default PlayVideo;