import React from 'react'

function MediaDisplay(props){

    const {
        url: urlFormat,
        mediaURL,
        videoURL
    } = props

    return (
        <>
            {
                urlFormat === 'VIDEO' ? <img src={mediaURL} /> : <video src={videoURL} poster={mediaURL} muted="muted"></video>
            }
        </>  
    )
}

export default MediaDisplay