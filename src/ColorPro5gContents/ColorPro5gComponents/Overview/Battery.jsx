import React, { useEffect, useRef, useState } from "react";
import BatteryVideo from "../../ColorPro5gAssets/Battery/BatteryVideo.mp4";
import MobileBatteryVideo from "../../ColorPro5gAssets/Battery/MobileBatteryVideo.mov";

function Battery() {
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isTextActive, setIsTextActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasPlayed) {
          if (desktopVideoRef.current) {
            desktopVideoRef.current.play();
          }
          if (mobileVideoRef.current) {
            mobileVideoRef.current.play();
          }
          setHasPlayed(true);

          // Add a delay of 3 seconds to add the 's-activeBatterText' class
          setTimeout(() => {
            setIsTextActive(true);
          }, 3000);
        }
      });
    });

    if (desktopVideoRef.current) {
      observer.observe(desktopVideoRef.current);
    }
    if (mobileVideoRef.current) {
      observer.observe(mobileVideoRef.current);
    }

    return () => {
      if (desktopVideoRef.current) {
        observer.unobserve(desktopVideoRef.current);
      }
      if (mobileVideoRef.current) {
        observer.unobserve(mobileVideoRef.current);
      }
    };
  }, [hasPlayed]);

  return (
    <div className="s-battery">
      <video
        ref={desktopVideoRef}
        src={BatteryVideo}
        muted
        className="s-notMobile"
      ></video>
      <video
        ref={mobileVideoRef}
        src={MobileBatteryVideo}
        muted
        className="s-mobile"
      ></video>
      <div
        className={`s-captureContainer s-mobile ${
          isTextActive ? "s-activeBatterText" : ""
        }`}
      >
        <div className="s-heading">
          <h2>Power Through Your Day with the Monumental Battery</h2>
        </div>
        <div className="s-captureContainerDiv">
          <div className="s-captureSet">
            <h3>5000mAh</h3>
            <p>High-Endurance Battery</p>
          </div>
          <div className="s-Line"></div>
          <div className="s-captureSet">
            <h3>18 W</h3>
            <p>Type-C charging</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Battery;
