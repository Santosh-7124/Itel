import React from "react";
import CameraVideo from "../../ColorPro5gAssets/Camera/Camera.webm";

function Camera() {
  return (
    <div className="s-enhance">
      <div className="s-heading">
        <h2>
          50MP AI-Powered Camera:
          <br /> Capture Brilliance
        </h2>
        <p>
          Ensure every photo is a masterpiece with <br />
          exceptional clarity and realistic color contrast
        </p>
      </div>
      <div className="s-enhanceVideo">
        <video src={CameraVideo} autoPlay loop muted></video>
      </div>
    </div>
  );
}

export default Camera;
