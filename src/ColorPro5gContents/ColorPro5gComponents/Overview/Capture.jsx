import React from "react";
import CaptureImg from "../../ColorPro5gAssets/Capture/CaptureImg.svg";

function Capture() {
  return (
    <div className="s-capture">
      <div className="s-captureBackground">
        <img src={CaptureImg}></img>
      </div>
      <div className="s-captureContainer">
        <div className="s-heading">
          <h2>Capture More with Smart Scene Detection</h2>
          <p>
            Wide Shot AI Camera automatically detects scenes and adjusts
            settings to deliver optimal image quality. It also offers advanced
            smart beauty effects to showcase your best self.
          </p>
        </div>
        <div className="s-captureContainerDiv">
          <div className="s-captureSet">
            <h3>50MP AI</h3>
            <p>Rear Camera </p>
          </div>
          <div className="s-Line"></div>
          <div className="s-captureSet">
            <h3>8MP</h3>
            <p>Selfie Camera</p>
          </div>
        </div>
      </div>
      <div className="s-captureText">
        <p>
          Dual Video Mode | Document | Slow Motion Mode | AR Shots | Short Video
          | Pro | Sky Shop | Time Lapse | Panaroma |Super Night Mode
        </p>
      </div>
    </div>
  );
}

export default Capture;
