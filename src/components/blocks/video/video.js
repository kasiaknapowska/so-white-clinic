import React from "react"
import {asideVideo} from "./video.module.scss"
const Video = ({ videoSrcURL, videoTitle, aside, ...props }) => (
  <div className="video">
    <iframe
    className={aside ? asideVideo : ""}
      src={videoSrcURL}
      title={videoTitle}
      controls="0"
      rel="0"
      showinfo="0"
      autoplay="1"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video