import React, { useEffect, useRef, useState } from "react";
import BatterVideo from "../../ColorPro5gAssets/Battery/BatteryVideo.mp4";

function Battery() {
  const videoRef = useRef(null); // Create a ref for the video
  const [hasPlayed, setHasPlayed] = useState(false); // State to track if the video has already played

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasPlayed) {
          videoRef.current.play(); // Play the video
          setHasPlayed(true); // Mark the video as played
        }
      });
    });

    if (videoRef.current) {
      observer.observe(videoRef.current); // Observe the video element
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current); // Cleanup observer on unmount
      }
    };
  }, [hasPlayed]);

  return (
    <div className="s-battery">
      <video ref={videoRef} src={BatterVideo} muted></video>
    </div>
  );
}

export default Battery;
