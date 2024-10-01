import React, { useEffect, useRef, useState } from "react";
import DisplayBackground from "../../ColorPro5gAssets/Display/DisplayBackground.mov";

function Display() {
  const videoRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const handlePlayVideo = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasPlayed) {
        videoRef.current.play();
        setHasPlayed(true);

        // Stop the video after 2 seconds
        setTimeout(() => {
          videoRef.current.pause();
        }, 2500); // 2000ms = 2 seconds
      }
    };

    const observer = new IntersectionObserver(handlePlayVideo, {
      threshold: 0.5, // Adjust when to trigger the video (50% visible)
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [hasPlayed]);

  return (
    <div className="s-display">
      <video
        ref={videoRef}
        src={DisplayBackground}
        muted
        className="DisplayBackground"
      ></video>
      <div className="s-displayText">
        <h2>
          Ultra-Smooth <br /> 6.6” HD+ Display
        </h2>
        <p>
          Experience stunning visuals on the 6.6-inch HD+ display, featuring a
          90Hz refresh rate that reduces visual fatigue and ensures smoother,
          faster response times.
        </p>
      </div>
    </div>
  );
}

export default Display;
