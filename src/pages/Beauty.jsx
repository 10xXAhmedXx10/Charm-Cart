import React from "react";
import ReactPlayer from "react-player";

function Test() {
    return (
     <div>
    <ReactPlayer
      url="/assets/videos/test.mp4"
      playing={true}
      loop={true}
      controls={false}
      muted={true}
      width="100%"
      height="100%"
    />
   </div>
    )
}



export default Test;