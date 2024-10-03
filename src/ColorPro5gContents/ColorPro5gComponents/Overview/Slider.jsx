import React, { useRef, useState, useEffect } from "react";
import RiverBlue01 from "../../ColorPro5gAssets/Slider/River Blue 01.png";
import RiverBlue02 from "../../ColorPro5gAssets/Slider/River Blue 02.png";
import RiverBlue03 from "../../ColorPro5gAssets/Slider/River Blue 03.png";
import RiverBlue04 from "../../ColorPro5gAssets/Slider/River Blue 04.png";
import LavenderFantasy01 from "../../ColorPro5gAssets/Slider/Lavender Fantasy 01.png";
import LavenderFantasy02 from "../../ColorPro5gAssets/Slider/Lavender Fantasy 02.png";
import LavenderFantasy03 from "../../ColorPro5gAssets/Slider/Lavender Fantasy 03.png";
import LavenderFantasy04 from "../../ColorPro5gAssets/Slider/Lavender Fantasy 04.png";

function Slider() {
  const sliderDivRef = useRef(null);
  const [sliderDivWidth, setSliderDivWidth] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [activeColor, setActiveColor] = useState("River Blue"); // State to track active color
  const [images, setImages] = useState([
    RiverBlue01,
    RiverBlue02,
    RiverBlue03,
    RiverBlue04,
  ]); // Default images for River Blue

  useEffect(() => {
    if (sliderDivRef.current) {
      setSliderDivWidth(sliderDivRef.current.offsetWidth);
    }
  }, []);

  const handleLeftClick = () => {
    setTranslateX((prevTranslateX) =>
      Math.max(prevTranslateX - sliderDivWidth, -sliderDivWidth * 3)
    );
  };

  const handleRightClick = () => {
    setTranslateX((prevTranslateX) =>
      Math.min(prevTranslateX + sliderDivWidth, 0)
    );
  };

  // Function to update images based on the selected color
  const handleColorClick = (color) => {
    if (color === "Lavender Fantasy") {
      setImages([
        LavenderFantasy01,
        LavenderFantasy02,
        LavenderFantasy03,
        LavenderFantasy04,
      ]);
    } else {
      setImages([RiverBlue01, RiverBlue02, RiverBlue03, RiverBlue04]);
    }
    setActiveColor(color); // Update active color
    setTranslateX(0); // Reset slider position when color changes
  };

  return (
    <div className="s-slider s-notMobile">
      <div className="s-sliderUp">
        <svg
          onClick={handleRightClick}
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="51"
          viewBox="0 0 50 51"
          fill="none"
          style={{ cursor: "pointer" }}
        >
          <path
            d="M37.6222 46.9574L37.6222 46.8142C37.6222 45.0948 38.76 44.2352 40.3244 44.2352L40.6089 44.2352C42.3156 44.2352 43.5956 42.9457 43.5956 41.2264L43.5956 40.9398C43.5956 39.3638 44.4489 38.2176 46.1556 38.2176L46.2978 38.2176C48.0044 38.2176 49 37.2147 49 35.4953L49 15.864C49 14.1447 48.0044 13.1418 46.2978 13.1418L46.1556 13.1418C44.4489 13.1418 43.5956 11.9956 43.5956 10.4195L43.5956 10.133C43.5956 8.41367 42.3156 7.12418 40.6089 7.12418L40.3244 7.12418C38.76 7.12418 37.6222 6.26453 37.6222 4.54521L37.6222 4.40194C37.6222 2.68262 36.6267 1.67969 34.92 1.67969L15.08 1.67969C13.3733 1.67969 12.3778 2.68262 12.3778 4.40193L12.3778 4.54521C12.3778 6.26452 11.24 7.12418 9.67555 7.12418L9.39111 7.12418C7.68444 7.12418 6.40444 8.41367 6.40444 10.133L6.40444 10.4195C6.40444 11.9956 5.55111 13.1418 3.84444 13.1418L3.70222 13.1418C1.99555 13.1418 0.999999 14.1447 0.999999 15.864L0.999998 35.4953C0.999998 37.2147 1.99555 38.2176 3.70222 38.2176L3.84444 38.2176C5.55111 38.2176 6.40444 39.3638 6.40444 40.9398L6.40444 41.2264C6.40444 42.9457 7.68444 44.2352 9.39111 44.2352L9.67555 44.2352C11.24 44.2352 12.3778 45.0948 12.3778 46.8142L12.3778 46.9574C12.3778 48.6767 13.3733 49.6797 15.08 49.6797L34.92 49.6797C36.6267 49.6797 37.6222 48.6767 37.6222 46.9574Z"
            fill="white"
            fillOpacity="0.08"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M18.2564 25.6798C18.2564 24.4629 19.0676 23.8544 20.1831 23.8544H20.3859C21.6028 23.8544 22.5155 22.9418 22.5155 21.7249V21.522C22.5155 20.3051 23.0225 19.7981 24.2394 19.7981H24.4423C25.6592 19.7981 26.5718 18.8854 26.5718 17.6685V17.4657C26.5718 16.2488 27.0789 15.7418 28.2958 15.7418H28.4986C29.7155 15.7418 30.6282 14.8291 30.6282 13.6122V13.4094C30.6282 12.1925 29.7155 11.2798 28.4986 11.2798H28.2958C27.0789 11.2798 26.1662 12.1925 26.1662 13.4094V13.6122C26.1662 14.8291 25.6592 15.3361 24.4423 15.3361H24.2394C23.0225 15.3361 22.1099 16.2488 22.1099 17.4657V17.6685C22.1099 18.8854 21.6028 19.3925 20.3859 19.3925H20.1831C18.9662 19.3925 18.0535 20.3051 18.0535 21.522V21.7249C18.0535 22.8404 17.4451 23.6516 16.2282 23.6516H16.1268C15.0627 23.6516 14.2 24.5143 14.2 25.5784V25.7812C14.2 26.8453 15.0627 27.708 16.1268 27.708H16.2282C17.4451 27.708 18.0535 28.5192 18.0535 29.6347V29.8375C18.0535 31.0544 18.9662 31.9671 20.1831 31.9671H20.3859C21.6028 31.9671 22.1099 32.4742 22.1099 33.6911V33.8939C22.1099 35.1108 23.0225 36.0235 24.2394 36.0235H24.4423C25.6592 36.0235 26.1662 36.5305 26.1662 37.7474V37.9502C26.1662 39.1671 27.0789 40.0798 28.2958 40.0798H28.4986C29.7155 40.0798 30.6282 39.1671 30.6282 37.9502V37.7474C30.6282 36.5305 29.7155 35.6178 28.4986 35.6178H28.2958C27.0789 35.6178 26.5718 35.1108 26.5718 33.8939V33.6911C26.5718 32.4742 25.6592 31.5615 24.4423 31.5615H24.2394C23.0225 31.5615 22.5155 31.0544 22.5155 29.8375V29.6347C22.5155 28.4178 21.6028 27.5051 20.3859 27.5051H20.1831C19.0676 27.5051 18.2564 26.8967 18.2564 25.6798Z"
            fill="white"
          />
        </svg>
        <div className="s-sliderDiv" ref={sliderDivRef}>
          <div
            className="s-sliderContainer"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {images.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`${activeColor} ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <svg
          onClick={handleLeftClick}
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="51"
          viewBox="0 0 50 51"
          fill="none"
          style={{ cursor: "pointer" }}
        >
          <path
            d="M12.3778 46.9574L12.3778 46.8142C12.3778 45.0948 11.24 44.2352 9.67556 44.2352L9.39112 44.2352C7.68445 44.2352 6.40444 42.9457 6.40444 41.2264L6.40444 40.9398C6.40444 39.3638 5.55111 38.2176 3.84445 38.2176L3.70222 38.2176C1.99556 38.2176 1 37.2147 1 35.4953L1 15.864C1 14.1447 1.99556 13.1418 3.70222 13.1418L3.84445 13.1418C5.55111 13.1418 6.40444 11.9956 6.40444 10.4195L6.40444 10.133C6.40444 8.41367 7.68444 7.12418 9.39111 7.12418L9.67556 7.12418C11.24 7.12418 12.3778 6.26453 12.3778 4.54521L12.3778 4.40194C12.3778 2.68262 13.3733 1.67969 15.08 1.67969L34.92 1.67969C36.6267 1.67969 37.6222 2.68262 37.6222 4.40193L37.6222 4.54521C37.6222 6.26452 38.76 7.12418 40.3244 7.12418L40.6089 7.12418C42.3156 7.12418 43.5956 8.41367 43.5956 10.133L43.5956 10.4195C43.5956 11.9956 44.4489 13.1418 46.1556 13.1418L46.2978 13.1418C48.0044 13.1418 49 14.1447 49 15.864L49 35.4953C49 37.2147 48.0044 38.2176 46.2978 38.2176L46.1556 38.2176C44.4489 38.2176 43.5956 39.3638 43.5956 40.9398L43.5956 41.2264C43.5956 42.9457 42.3156 44.2352 40.6089 44.2352L40.3244 44.2352C38.76 44.2352 37.6222 45.0948 37.6222 46.8142L37.6222 46.9574C37.6222 48.6767 36.6267 49.6797 34.92 49.6797L15.08 49.6797C13.3733 49.6797 12.3778 48.6767 12.3778 46.9574Z"
            fill="white"
            fillOpacity="0.08"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M31.7436 25.6798C31.7436 24.4629 30.9324 23.8544 29.8169 23.8544H29.6141C28.3972 23.8544 27.4845 22.9418 27.4845 21.7249V21.522C27.4845 20.3051 26.9775 19.7981 25.7606 19.7981H25.5577C24.3408 19.7981 23.4282 18.8854 23.4282 17.6685V17.4657C23.4282 16.2488 22.9211 15.7418 21.7042 15.7418H21.5014C20.2845 15.7418 19.3718 14.8291 19.3718 13.6122V13.4094C19.3718 12.1925 20.2845 11.2798 21.5014 11.2798H21.7042C22.9211 11.2798 23.8338 12.1925 23.8338 13.4094V13.6122C23.8338 14.8291 24.3408 15.3361 25.5577 15.3361H25.7606C26.9775 15.3361 27.8901 16.2488 27.8901 17.4657V17.6685C27.8901 18.8854 28.3972 19.3925 29.6141 19.3925H29.8169C31.0338 19.3925 31.9465 20.3051 31.9465 21.522V21.7249C31.9465 22.8404 32.5549 23.6516 33.7718 23.6516H33.8732C34.9373 23.6516 35.8 24.5143 35.8 25.5784V25.7812C35.8 26.8453 34.9373 27.708 33.8732 27.708H33.7718C32.5549 27.708 31.9465 28.5192 31.9465 29.6347V29.8375C31.9465 31.0544 31.0338 31.9671 29.8169 31.9671H29.6141C28.3972 31.9671 27.8901 32.4742 27.8901 33.6911V33.8939C27.8901 35.1108 26.9775 36.0235 25.7606 36.0235H25.5577C24.3408 36.0235 23.8338 36.5305 23.8338 37.7474V37.9502C23.8338 39.1671 22.9211 40.0798 21.7042 40.0798H21.5014C20.2845 40.0798 19.3718 39.1671 19.3718 37.9502V37.7474C19.3718 36.5305 20.2845 35.6178 21.5014 35.6178H21.7042C22.9211 35.6178 23.4282 35.1108 23.4282 33.8939V33.6911C23.4282 32.4742 24.3408 31.5615 25.5577 31.5615H25.7606C26.9775 31.5615 27.4845 31.0544 27.4845 29.8375V29.6347C27.4845 28.4178 28.3972 27.5051 29.6141 27.5051H29.8169C30.9324 27.5051 31.7436 26.8967 31.7436 25.6798Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="s-colourDown">
        <h6>Color</h6>
        <div className="s-colourOptionDiv">
          <div
            className={`s-colourOptionSet ${
              activeColor === "Lavender Fantasy" ? "s-activeColour" : ""
            }`}
            onClick={() => handleColorClick("Lavender Fantasy")}
          >
            <div
              className="s-colourCircle"
              style={{ background: "#C2AFE3" }}
            ></div>
            <p>Lavender Fantasy</p>
          </div>
          <div
            className={`s-colourOptionSet ${
              activeColor === "River Blue" ? "s-activeColour" : ""
            }`}
            onClick={() => handleColorClick("River Blue")}
          >
            <div
              className="s-colourCircle"
              style={{ background: "#76C7E9" }}
            ></div>
            <p>River Blue</p>
          </div>
        </div>
      </div>

 
    </div>
  );
}

export default Slider;
