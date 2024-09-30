import React, { useState, useEffect } from "react";
import RevolutionBackground from "../../ColorPro5gAssets/Revolution/Revolution.svg";
import HighSpeed from "../../ColorPro5gAssets/Revolution/Highspeed.mov";
import LowLag from "../../ColorPro5gAssets/Revolution/LowLag.mov";
import BetterExperience from "../../ColorPro5gAssets/Revolution/BetterExperience.mp4";

function Revolution() {
  // Array of videos and corresponding text
  const videos = [
    { src: HighSpeed, text: "High Speed" },
    { src: LowLag, text: "Low Lag" },
    { src: BetterExperience, text: "Better Experience" },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Change to the next video after 8 seconds
      setCurrentVideoIndex((prevIndex) =>
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount or before re-running the effect
  }, [currentVideoIndex]);

  return (
    <div className="s-revolution">
      <img src={RevolutionBackground} className="s-revolutionBackground" />
      <div className="s-heading">
        <h2>
          5G Revolution:
          <br />
          Redefining Connectivity
        </h2>
        <p>
          itel Color Pro 5G is all set to transform the way you connect,
          communicate, and create
        </p>
      </div>
      <div className="s-revolutionPhone">
        <img alt="phone" />
      </div>
      <div className="s-revolutionVideo">
        {/* Render the current video */}
        <video
          key={currentVideoIndex} // Ensure the video element re-renders with the new video
          src={videos[currentVideoIndex].src}
          autoPlay
          muted
        />
      </div>
      <div className="s-revolutionText">
        {/* Render the corresponding text */}
        <p>{videos[currentVideoIndex].text}</p>
      </div>
    </div>
  );
}

export default Revolution;
