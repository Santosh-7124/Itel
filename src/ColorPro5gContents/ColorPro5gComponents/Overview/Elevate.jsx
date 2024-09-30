import React from "react";
import ElevateVideo from "../../ColorPro5gAssets/Elevate/ElevateVideo.mp4";

function Elevate() {
  return (
    <div className="s-enhance">
      <div className="s-heading">
        <h2>Elevate Unparalleled Capabilities </h2>
        <p>
          with a smartphone that transforms multitasking <br></br> and provides
          high speed performance
        </p>
      </div>
      <div className="s-enhanceVideo">
        <video src={ElevateVideo} autoPlay loop muted></video>
      </div>
    </div>
  );
}

export default Elevate;
