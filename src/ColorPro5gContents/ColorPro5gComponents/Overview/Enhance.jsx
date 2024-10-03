import React from "react";
import EnhanceVideo from "../../ColorPro5gAssets/Enhance/EnhanceVideo.webm";

function Enhance() {
  return (
    <div className="s-enhance">
      <div className="s-heading">
        <h2>Enhance Your Style Every time</h2>
        <p>
          With a smartphone that seamlessly transitions <br /> between vibrant
          shades
        </p>
      </div>
      <div className="s-enhanceVideo">
        <video src={EnhanceVideo} autoPlay loop muted></video>
      </div>
    </div>
  );
}

export default Enhance;
