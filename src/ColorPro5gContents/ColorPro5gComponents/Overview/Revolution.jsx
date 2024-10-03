import React, { useState, useEffect } from "react";
import RevolutionBackground from "../../ColorPro5gAssets/Revolution/Revolution.svg";
import PhoneFrame from "../../ColorPro5gAssets/Revolution/PhoneFrame.png";
import HighSpeed from "../../ColorPro5gAssets/Revolution/Highspeed.webm";
import LowLag from "../../ColorPro5gAssets/Revolution/LowLag.webm";
import BetterExperience from "../../ColorPro5gAssets/Revolution/BetterExperience.mp4";

function Revolution() {
  const videos = [
    { src: HighSpeed, text: "High Speed" },
    { src: LowLag, text: "Low Lag" },
    { src: BetterExperience, text: "Better Experience" },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [textStyle, setTextStyle] = useState({
    opacity: 1,
    transform: "translateX(0)",
    transition: "opacity 0.5s, transform 0.5s",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      // Trigger slide-out effect
      setTextStyle({
        opacity: 0,
        transform: "translateX(-100%)",
        transition: "opacity 0.5s, transform 0.5s",
      });

      const textTimer = setTimeout(() => {
        // Change the video and reset text animation style for slide-in effect
        setCurrentVideoIndex((prevIndex) =>
          prevIndex === videos.length - 1 ? 0 : prevIndex + 1
        );
        setTextStyle({
          opacity: 0,
          transform: "translateX(100%)", // Start from the right
          transition: "none",
        });

        setTimeout(() => {
          // After a brief delay, animate the text sliding in
          setTextStyle({
            opacity: 1,
            transform: "translateX(0)", // End at normal position
            transition: "opacity 0.5s, transform 0.5s",
          });
        }, 50); // Small delay to ensure the transition applies correctly
      }, 500); // Delay corresponds to the slide-out duration

      return () => clearTimeout(textTimer);
    }, 7500); // Slide-out before changing text (8s video - 0.5s animation)

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
        <img src={PhoneFrame} alt="phone" />
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
        {/* Render the corresponding text with animation styles */}
        <p style={textStyle}>{videos[currentVideoIndex].text}</p>
      </div>
    </div>
  );
}

export default Revolution;
