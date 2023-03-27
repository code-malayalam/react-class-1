import React, { useState } from "react";

export function VideoMaker(item) {
  const { videoURL, url } = item.item;

  function foo(url) {
    return url;
  }

  if (videoURL !== "") {
    return (
      <video
        className="video"
        src={videoURL}
        muted={true}
        autoPlay={false}
        onMouseEnter={handlePlay}
        width="100%"
        height="100%"
        onMouseLeave={handlePause}
        poster={url}
      ></video>
    );
  } else {
    return (
      <video className="video" width="100%" height="100%" poster={url}></video>
    );
  }
}

export function handlePlay(evnt) {
  evnt.target.play();
}

export function handlePause(evnt) {
  evnt.target.pause();
  evnt.target.load();
}
