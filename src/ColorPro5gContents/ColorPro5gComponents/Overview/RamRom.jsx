import React, { useEffect, useRef, useState } from "react";
import RamRomBackground from "../../ColorPro5gAssets/RamRom/RamRomBackground.svg";
import Ramvideo from "../../ColorPro5gAssets/RamRom/RamVideo.mov";

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
          setHasPlayed(true); // Video will only play once
          observer.disconnect(); // Stop observing after the first intersection
        }
      },
      {
        threshold: 0.2, // Trigger as soon as any part of the element is in view
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

      // Delay for the "up" div (0.3s)
      setTimeout(() => {
        setIsUpActive(true);
      }, 300);

      // Delay for the "down" div (1.5s)
      setTimeout(() => {
        setIsDownActive(true);
      }, 1800);
    }
  }, [hasPlayed]);

  return (
    <div className="s-ramrom" ref={sectionRef}>
      <video
        ref={videoRef}
        src={Ramvideo}
        muted
        className="RamRomBackground"
      ></video>
      <div className={`s-ramromUp ${isUpActive ? "s-activeRam" : ""}`}>
        <h2>
          Unlock Boundless
          <br /> Possibilities with
          <br />
          memory technology
        </h2>
      </div>
      <div className={`s-ramromDowm ${isDownActive ? "s-activeRam" : ""}`}>
        <div className="s-heading">
          <div className="s-text">
            <h3>6GB + 6GB*</h3>
            <h4></h4>
          </div>
          <p>*Using memory fusion Technology</p>
        </div>
        <div className="s-content">
          <h3>128</h3>
          <h4>RAM</h4>
        </div>
      </div>
    </div>
  );
}

export default RamRom;
