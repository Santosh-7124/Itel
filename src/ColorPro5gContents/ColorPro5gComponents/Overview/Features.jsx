import React, { useState } from "react";
import Button from "../../ColorPro5gAssets/Features/Buttons.png";
import FeatureSet1 from "../../ColorPro5gAssets/Features/FeatureSet1.svg";
import FeatureSet2 from "../../ColorPro5gAssets/Features/FeatureSet2.svg";
import FeatureSet3 from "../../ColorPro5gAssets/Features/FeatureSet3.svg";
import FeatureSet4 from "../../ColorPro5gAssets/Features/FeatureSet4.svg";
import FeatureVideo from "../../ColorPro5gAssets/Features/FeatureVideo1.mov";
import FeatureSetDown from "../../ColorPro5gAssets/Features/FeatureSetDown.svg";

function Features() {
  // State to toggle the visibility of the additional text
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to expand the text
  const toggleReadMore = () => {
    setIsExpanded(true); // Only expand, no collapsing
  };

  return (
    <div className="s-features">
      <div className="s-heading">
        <h2>Be Unstoppable: Color Changing Back Technology with 5G Power</h2>
        <div className="s-text">
          <p>
            The revolutionary itel Color Pro 5G smartphone has arrived, bringing
            in breathtaking IVCO (itel Vivid Color Technology) that transforms
            its back with every shift of sunlight. Embrace the future with
            blazing-fast 5G speed powered by NRCA, letting you multitask,
            download & surf internet at warp speed and dominate your online
            world {isExpanded ? <>.</> : <>. . .</>}
            {isExpanded ? (
              <>
                {" "}
                Capture memories in stunning detail with the pro-grade 50MP HD
                camera. Experience unparalleled fluidity with lightning-fast 6GB
                RAM, expandable to a colossal 12GB with virtual RAM support.
                Store all your games and apps on the ample 128GB storage. Power
                through your day with the monumental 5000mAh battery. And when
                it’s time to refuel, 18W fast charging gets you back in the
                action instantly. Immersive experience with expansive 6.6-inch
                HD+ display with a silky-smooth 90Hz refresh rate. The unleashed
                power of the MediaTek Dimensity 6080 processor obliterates lag,
                ensuring a blazing-fast, seamless experience. Be Unstoppable!
              </>
            ) : (
              <span className="read-more" onClick={toggleReadMore}>
                {" "}
                Read More
              </span>
            )}
          </p>
        </div>
        <div className="s-featurePrice">
          <a className="s-featurePriceButton">
            <img src={Button}></img>
            <p className="s-featurePriceBuy">BUY NOW</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.1384 11.0415C17.7581 10.8935 17.5031 10.5284 17.5031 10.0775V9.9789C17.5031 9.38733 17.2591 9.14088 16.6747 9.14088H16.5774C15.9922 9.14088 15.5537 8.69718 15.5537 8.10561V8.00703C15.5537 7.41547 15.3097 7.16902 14.7245 7.16902H14.6272C14.0427 7.16902 13.6035 6.72532 13.6035 6.13385V6.03517C13.6035 5.4437 14.0427 5 14.6272 5H14.7245C15.3097 5 15.7482 5.4437 15.7482 6.03517V6.13385C15.7482 6.72532 15.9922 6.97186 16.5774 6.97186H16.6747C17.2591 6.97186 17.6984 7.41547 17.6984 8.00703V8.10561C17.6984 8.69718 17.9416 8.94363 18.5268 8.94363H18.6241C19.2093 8.94363 19.6478 9.38733 19.6478 9.9789V10.0775C19.6478 10.6198 19.9404 11.0141 20.5249 11.0141H20.5736C21.0851 11.0141 21.5 11.4334 21.5 11.9507V12.0493C21.5 12.5666 21.0851 12.9859 20.5736 12.9859H20.5249C19.9404 12.9859 19.6478 13.3802 19.6478 13.9225V14.0211C19.6478 14.6127 19.2093 15.0564 18.6241 15.0564H18.5268C17.9416 15.0564 17.6984 15.3028 17.6984 15.8944V15.993C17.6984 16.5845 17.2591 17.0281 16.6747 17.0281H16.5774C15.9922 17.0281 15.7482 17.2747 15.7482 17.8662V17.9648C15.7482 18.5563 15.3097 19 14.7245 19H14.6272C14.0427 19 13.6035 18.5563 13.6035 17.9648V17.8662C13.6035 17.2747 14.0427 16.831 14.6272 16.831H14.7245C15.3097 16.831 15.5537 16.5845 15.5537 15.993V15.8944C15.5537 15.3028 15.9922 14.8591 16.5774 14.8591H16.6747C17.2591 14.8591 17.5031 14.6127 17.5031 14.0211V13.9225C17.5031 13.4622 17.7684 13.0916 18.162 12.9497H2.4434C1.92232 12.9497 1.5 12.5225 1.5 11.9956C1.5 11.4687 1.92232 11.0415 2.4434 11.0415H18.1384Z"
                fill="#FF0037"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="bannerDownButtonSvg"
            >
              <path
                d="M18.1384 11.0415C17.7581 10.8935 17.5031 10.5284 17.5031 10.0775V9.9789C17.5031 9.38733 17.2591 9.14088 16.6747 9.14088H16.5774C15.9922 9.14088 15.5537 8.69718 15.5537 8.10561V8.00703C15.5537 7.41547 15.3097 7.16902 14.7245 7.16902H14.6272C14.0427 7.16902 13.6035 6.72532 13.6035 6.13385V6.03517C13.6035 5.4437 14.0427 5 14.6272 5H14.7245C15.3097 5 15.7482 5.4437 15.7482 6.03517V6.13385C15.7482 6.72532 15.9922 6.97186 16.5774 6.97186H16.6747C17.2591 6.97186 17.6984 7.41547 17.6984 8.00703V8.10561C17.6984 8.69718 17.9416 8.94363 18.5268 8.94363H18.6241C19.2093 8.94363 19.6478 9.38733 19.6478 9.9789V10.0775C19.6478 10.6198 19.9404 11.0141 20.5249 11.0141H20.5736C21.0851 11.0141 21.5 11.4334 21.5 11.9507V12.0493C21.5 12.5666 21.0851 12.9859 20.5736 12.9859H20.5249C19.9404 12.9859 19.6478 13.3802 19.6478 13.9225V14.0211C19.6478 14.6127 19.2093 15.0564 18.6241 15.0564H18.5268C17.9416 15.0564 17.6984 15.3028 17.6984 15.8944V15.993C17.6984 16.5845 17.2591 17.0281 16.6747 17.0281H16.5774C15.9922 17.0281 15.7482 17.2747 15.7482 17.8662V17.9648C15.7482 18.5563 15.3097 19 14.7245 19H14.6272C14.0427 19 13.6035 18.5563 13.6035 17.9648V17.8662C13.6035 17.2747 14.0427 16.831 14.6272 16.831H14.7245C15.3097 16.831 15.5537 16.5845 15.5537 15.993V15.8944C15.5537 15.3028 15.9922 14.8591 16.5774 14.8591H16.6747C17.2591 14.8591 17.5031 14.6127 17.5031 14.0211V13.9225C17.5031 13.4622 17.7684 13.0916 18.162 12.9497H2.4434C1.92232 12.9497 1.5 12.5225 1.5 11.9956C1.5 11.4687 1.92232 11.0415 2.4434 11.0415H18.1384Z"
                fill="#FF0037"
              />
            </svg>
          </a>
          <p>
            Starting from <span>₹9,999/-</span>
          </p>
        </div>
      </div>
      <div className="s-featuresContainer">
        <div className="s-featuresContainerTop">
          <div className="s-featuresContainerTopLeft">
            <video src={FeatureVideo} autoPlay loop muted>
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="s-featuresContainerTopRight">
            <div className="s-featureSet">
              <img src={FeatureSet1}></img>
              <div className="s-heading">
                <h3>5G Power with NRCA Support</h3>
                <p>
                  Wider Network Reception | Higher Internet Speed | Low Latency
                  | Higher Battery Life | Low Drop in Online Video Resolution
                </p>
              </div>
            </div>
            <div className="s-featureSet">
              <img src={FeatureSet2}></img>
              <div className="s-heading">
                <h3>Store More, Run Smooth</h3>
                <h4>12 GB* (6GB+6GB*) RAM | 128GB ROM</h4>
                <p>With Memory Fusion Technology*</p>
              </div>
            </div>
            <div className="s-featureSet">
              <img src={FeatureSet3}></img>
              <div className="s-heading">
                <h3>Superior Processor Power</h3>
                <h4>
                  MediaTek Dimensity 6080<br></br> (4,20,000 AnTuTu Score)
                </h4>
              </div>
            </div>
            <div className="s-featureSet">
              <img src={FeatureSet4}></img>
              <div className="s-heading">
                <h3>Endless Battery Power*</h3>
                <h4>5000 mAh | 18W Fast Charging</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="s-featuresContainerDown">
          <img src={FeatureSetDown}></img>
          <div className="s-heading">
            <h3>Get a Free Screen Replacement within 100 Days*</h3>
            <p>
              *Disclaimer: Terms & conditions apply. Offer valid for 100 days
              from the date of purchase and covers only the first screen
              breakage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
