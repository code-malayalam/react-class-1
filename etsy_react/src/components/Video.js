import React from "react";

function Video(props) {
  const { videoURL, handlePlayVideo } = props;
  return (
    <div className="video_container">
      <video
        onMouseEnter={handlePlayVideo}
        src={videoURL}
        muted
        loop
        className="vdeo"
      ></video>
    </div>
  );
}

export default Video;
