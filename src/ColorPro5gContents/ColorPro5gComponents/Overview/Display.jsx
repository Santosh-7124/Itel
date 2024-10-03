import React, { useEffect, useRef, useState } from "react";
import DisplayBackground from "../../ColorPro5gAssets/Display/DisplayBackground.mov";
import MobileDisplayBackground from "../../ColorPro5gAssets/Display/MobileDisplayBackground.mov";

function Display() {
  const desktopVideoRef = useRef(null); // Ref for desktop video
  const mobileVideoRef = useRef(null); // Ref for mobile video
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const handlePlayVideo = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasPlayed) {
        // Play desktop video and set play time
        if (desktopVideoRef.current) {
          desktopVideoRef.current.play();
          setTimeout(() => {
            if (desktopVideoRef.current) {
              desktopVideoRef.current.pause();
            }
          }, 2500); // Desktop video plays for 3 seconds
        }

        // Play mobile video and set different play time
        if (mobileVideoRef.current) {
          mobileVideoRef.current.play();
          setTimeout(() => {
            if (mobileVideoRef.current) {
              mobileVideoRef.current.pause();
            }
          }, 3000); // Mobile video plays for 5 seconds
        }

        setHasPlayed(true); // Ensure it only triggers once
      }
    };

    const observer = new IntersectionObserver(handlePlayVideo, {
      threshold: 0.5, // Trigger when 50% of the video is visible
    });

    // Observe both videos
    if (desktopVideoRef.current) {
      observer.observe(desktopVideoRef.current);
    }
    if (mobileVideoRef.current) {
      observer.observe(mobileVideoRef.current);
    }

    return () => {
      // Unobserve both videos on cleanup
      if (desktopVideoRef.current) {
        observer.unobserve(desktopVideoRef.current);
      }
      if (mobileVideoRef.current) {
        observer.unobserve(mobileVideoRef.current);
      }
    };
  }, [hasPlayed]);

  return (
    <div className="s-display">
      <video
        ref={desktopVideoRef}
        src={DisplayBackground}
        muted
        className="DisplayBackground s-notMobile"
      ></video>
      <video
        ref={mobileVideoRef}
        src={MobileDisplayBackground}
        muted
        className="DisplayBackground s-mobile"
      ></video>
      <div className="s-displayText">
        <h2>
          Ultra-Smooth <br className="s-notMobile" /> 6.6” HD+ Display
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
