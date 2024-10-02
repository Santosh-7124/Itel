import React, { useEffect, useRef, useState } from "react";
import RamRomBackground from "../../ColorPro5gAssets/RamRom/RamRomBackground.svg";
import Ramvideo from "../../ColorPro5gAssets/RamRom/RamVideo.mov";
import MobileRamvideo from "../../ColorPro5gAssets/RamRom/MobileRamvideo.mp4";
function RamRom() {
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isUpActive, setIsUpActive] = useState(false);
  const [isDownActive, setIsDownActive] = useState(false);

  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;

        if (entry.isIntersecting && !hasPlayed) {
          setHasPlayed(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasPlayed]);

  useEffect(() => {
    if (hasPlayed) {
      videoRef.current.play();

      setTimeout(() => {
        setIsUpActive(true);
      }, 500);

      setTimeout(() => {
        setIsDownActive(true);
      }, 2000);
    }
  }, [hasPlayed]);

  return (
    <div className="s-ramrom" ref={sectionRef}>
      <div className={`s-ramromUp ${isUpActive ? "s-activeRam" : ""}`}>
        <h2>
          Unlock Boundless
          <br className="s-notMobile" /> Possibilities with
          <br className="s-notMobile" />
          memory technology
        </h2>
      </div>
      <div className={`s-ramromDowm ${isDownActive ? "s-activeRam" : ""}`}>
        <div className="s-heading">
          <div className="s-text">
            <h3>12GB* (6GB + 6GB)*</h3>
            <h4>RAM</h4>
          </div>
          <p>*Using memory fusion Technology</p>
        </div>
        <div className="s-content">
          <h3>128</h3>
          <h4>RAM</h4>
        </div>
      </div>
      <video
        ref={videoRef}
        src={Ramvideo}
        muted
        className="RamRomBackground s-notMobile"
      ></video>
      <video
        ref={videoRef}
        src={MobileRamvideo}
        muted
        className="RamRomBackground s-mobile"
      ></video>
    </div>
  );
}

export default RamRom;
