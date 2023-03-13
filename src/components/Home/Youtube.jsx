import React from "react";
import Youtube from "react-youtube";

function YoutubePlayer() {
  return (
    <>
      <Youtube
        videoId={"Xc1Le3CSdrM"}
        opts={{ height: "300", width: "100%", playerVars: { autoplay: 1 } }}
      />
    </>
  );
}

export default YoutubePlayer;
