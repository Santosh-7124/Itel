import React, { useState, useRef, useEffect } from "react";
import RiverBlue01 from "../../ColorPro5gAssets/Slider/River Blue 01.png";
import RiverBlue02 from "../../ColorPro5gAssets/Slider/River Blue 02.png";
import RiverBlue03 from "../../ColorPro5gAssets/Slider/River Blue 03.png";
import RiverBlue04 from "../../ColorPro5gAssets/Slider/River Blue 04.png";
import LavenderFantasy01 from "../../ColorPro5gAssets/Slider/Lavender Fantasy 01.png";
import LavenderFantasy02 from "../../ColorPro5gAssets/Slider/Lavender Fantasy 02.png";
import LavenderFantasy03 from "../../ColorPro5gAssets/Slider/Lavender Fantasy 03.png";
import LavenderFantasy04 from "../../ColorPro5gAssets/Slider/Lavender Fantasy 04.png";

// Image mapping for each color option
const imageMapping = {
  "River Blue": [
    { src: RiverBlue01, alt: "River Blue 01" },
    { src: RiverBlue02, alt: "River Blue 02" },
    { src: RiverBlue03, alt: "River Blue 03" },
    { src: RiverBlue04, alt: "River Blue 04" },
  ],
  "Lavender Fantasy": [
    { src: LavenderFantasy01, alt: "Lavender Fantasy 01" },
    { src: LavenderFantasy02, alt: "Lavender Fantasy 02" },
    { src: LavenderFantasy03, alt: "Lavender Fantasy 03" },
    { src: LavenderFantasy04, alt: "Lavender Fantasy 04" },
  ],
};

const colors = [
  { name: "Lavender Fantasy", color: "#C2AFE3" },
  { name: "River Blue", color: "#76C7E9" },
];

function MobileSlide() {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current slide
  const [selectedColor, setSelectedColor] = useState(colors[1]); // Default to River Blue
  const containerRef = useRef(null);

  // Handle scroll to update the active indicator
  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, offsetWidth } = containerRef.current;
      const newIndex = Math.round(scrollLeft / offsetWidth);
      setCurrentIndex(newIndex);
    }
  };

  // Add a scroll event listener to update indicators when the user scrolls
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  // Handle color option click
  const handleColorClick = (color) => {
    setSelectedColor(color);
    setCurrentIndex(0); // Reset index to 0 when changing colors
  };

  return (
    <div className="s-mobileSlide">
      <div className="s-mobileSlideContainer" ref={containerRef}>
        {imageMapping[selectedColor.name].map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
      <div className="s-mobileIndicatorContainer">
        {imageMapping[selectedColor.name].map((_, index) => (
          <div
            key={index}
            className={`s-mobileIndicator ${
              currentIndex === index ? "s-mobileActiveIndicator" : ""
            }`}
          ></div>
        ))}
      </div>
      <div className="s-colourDown">
        <h6>Color</h6>
        <div className="s-colourOptionDiv">
          {colors.map((color) => (
            <div
              key={color.name}
              className={`s-colourOptionSet ${
                selectedColor.name === color.name ? "s-activeColour" : ""
              }`}
              onClick={() => handleColorClick(color)}
            >
              <div
                className="s-colourCircle"
                style={{ background: color.color }}
              ></div>
              <p>{color.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileSlide;
