import React from "react";
import { video } from "../../../static/videos/video";
import "../../../../node_modules/video-react/dist/video-react.css";

function HeroContents() {
  return (
    <div className="app__hero__contents">
      <div className="herocontents__videocontainer">
        <video
          className="herocontents__video"
          src={video}
          muted
          autoPlay={"autoplay"}
          preload="auto"
          loop
        />
      </div>
      <div className="herocontents__text">
        <h1>Flying Pan</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel
        </p>
      </div>
    </div>
  );
}

export default HeroContents;
