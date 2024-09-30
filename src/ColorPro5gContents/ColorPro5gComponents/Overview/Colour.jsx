import React, { useState } from "react";
import ColourBackgroundBlue from "../../ColorPro5gAssets/Colour/ColourBackgroundBlue.svg";
import ColourBlueMobile from "../../ColorPro5gAssets/Colour/ColourBlueMobile.png";
import BlueStar from "../../ColorPro5gAssets/Colour/BlueStar.svg";
import ColourBackgroundPink from "../../ColorPro5gAssets/Colour/ColourBackgroundPink.svg";
import ColourPinkMobile from "../../ColorPro5gAssets/Colour/ColourPinkMobile.png";
import PinkStar from "../../ColorPro5gAssets/Colour/PinkStar.svg"; // Fixed typo for PinkStar

function Colour() {
  // State to track the active color
  const [activeColor, setActiveColor] = useState("blue");

  // Handler for changing the color
  const handleColorChange = (color) => {
    setActiveColor(color);
  };

  // Determine the background and star based on the active color
  const background =
    activeColor === "blue" ? ColourBackgroundBlue : ColourBackgroundPink;
  const mobileBackground =
    activeColor === "blue" ? ColourBlueMobile : ColourPinkMobile;
  const star = activeColor === "blue" ? BlueStar : PinkStar;

  return (
    <div className="s-colour">
      <div className="s-colourUp">
        <img src={background} className="ColourBackground"></img>
        <img src={mobileBackground} className="ColourMobile"></img>
        <div className="s-MarqueeContainer">
          <div className="wrapper">
            <div className="marquee">
              <img src={star}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="s-colourDown">
        <h6>Color</h6>
        <div className="s-colourOptionDiv">
          <div
            className={`s-colourOptionSet ${
              activeColor === "lavender" ? "s-activeColour" : ""
            }`}
            onClick={() => handleColorChange("lavender")}
          >
            <div
              className="s-colourCircle"
              style={{ background: "#C2AFE3" }}
            ></div>
            <p>Lavender Fantasy</p>
          </div>
          <div
            className={`s-colourOptionSet ${
              activeColor === "blue" ? "s-activeColour" : ""
            }`}
            onClick={() => handleColorChange("blue")}
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

export default Colour;
