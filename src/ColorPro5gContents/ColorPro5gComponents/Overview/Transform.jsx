import React from "react";
import TransformImg from "../../ColorPro5gAssets/Transform/TransformImg.svg";
import TransformVideo from "../../ColorPro5gAssets/Transform/TransformVideo.mov";

function Transform() {
  return (
    <div className="s-transform">
      <div className="s-transformVideo">
        <video src={TransformVideo} autoPlay loop muted></video>
      </div>
      <div className="s-heading">
        <img src={TransformImg}></img>
        <div className="s-text">
          <h2>Transform Your Phone With Every Ray of Sunlight</h2>
          <p>
            Discover the enchantment of color changing back technology in two
            color models: <br />
            Lavender Fantasy | River Blue
          </p>
        </div>
      </div>
    </div>
  );
}

export default Transform;
