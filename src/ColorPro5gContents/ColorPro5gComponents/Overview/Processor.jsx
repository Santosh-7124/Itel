import React, { useEffect, useRef, useState } from "react";
import ProcessorVideo from "../../ColorPro5gAssets/Processor/ProcessorVideo.mov";
import Mediatek from "../../ColorPro5gAssets/Processor/Mediatek.svg";

function Processor() {
  const [isInView, setIsInView] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          setIsInView(true); // Video and animation should be triggered
        }
      },
      {
        threshold: 0.3, // Trigger when 50% of the element is in view
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
  }, []);

  useEffect(() => {
    if (isInView) {
      if (videoRef.current) {
        videoRef.current.play(); // Play the video when it's in view
      }

      // Add a delay of 1 second to activate the class
      setTimeout(() => {
        setIsActive(true);
      }, 1000);
    }
  }, [isInView]);

  return (
    <div
      className={`s-processor ${isActive ? "s-activeProcessor" : ""}`}
      ref={sectionRef}
    >
      <video ref={videoRef} src={ProcessorVideo} muted></video>
      <div className="s-heading">
        <div className="s-text">
          <img src={Mediatek} alt="Mediatek" />
          <h3>
            <span>Dimensity</span> 6080 Octa-Core
          </h3>
        </div>
        <div className="s-content">
          <h2>Next-Gen Performance</h2>
          <p>Obliterates Lag | Blazing-fast Speed | Better Image Processing</p>
        </div>
      </div>
    </div>
  );
}

export default Processor;
