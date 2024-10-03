import React from "react";
import CameraModeVideo from "../../ColorPro5gAssets/CameraMode/CameraModeVideo.webm";

function CameraMode() {
  return (
    <div className="s-cameraMode">
      <video src={CameraModeVideo} autoPlay loop muted></video>
    </div>
  );
}

export default CameraMode;
