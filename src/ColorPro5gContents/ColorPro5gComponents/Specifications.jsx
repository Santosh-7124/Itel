import React, { useState } from "react";

export default function Specifications() {
  const [activeOption, setActiveOption] = useState("General");

  const specificationsData = {
    General: [
      { parameter: "Model", data: "Color Pro 5G" },
      { parameter: "Colors", data: "River Blue, Lavender Fantasy" },
    ],
    "Display Features": [
      { parameter: "Display Size", data: '6.6" HD+ IPS' },
      { parameter: "Resolution", data: "1612x720 Pixels" },
      { parameter: "Resolution Type", data: "HD+ IPS" },
      { parameter: "Technology", data: "G+F, Incell" },
      { parameter: "Refresh Rate", data: "90 Hz" },
      { parameter: "Touch Sampling Rate", data: "180Hz" },
      { parameter: "Pixel Density", data: "267 PPI" },
    ],
    "OS & Processor": [
      { parameter: "Operating System", data: "Android 13 (Go Edition)" },
      { parameter: "Chipset", data: "Mediatek Dimensity 6080" },
      { parameter: "Processor Core", data: "Octa Core" },
    ],
    Camera: [
      { parameter: "Rear Camera", data: "50MP Al Camera" },
      { parameter: "Rear Flash", data: "Yes" },
      { parameter: "Front Camera", data: "8MP" },
      { parameter: "Front flash", data: "No" },
    ],
    Battery: [
      { parameter: "Battery Capacity", data: "5000 mAh" },
      { parameter: "Battery Type", data: "Li-Polymer" },
      { parameter: "Fast Charging", data: "18W" },
      { parameter: "USB", data: "Type-C" },
      { parameter: "Standby", data: "32 Days" },
      { parameter: "Talktime", data: "7.5 Hours" },
      { parameter: "Media Playback Time", data: "112 hours" },
    ],
    "Memory & Storage": [
      { parameter: "RAM", data: "12GB (6GB+6GB)*" },
      { parameter: "ROM", data: "128GB" },
      { parameter: "User Memory", data: "113 GB" },
      { parameter: "Expandable", data: "Upto 1TB" },
    ],
    Connectivity: [
      {
        parameter: "Network Type",
        data: "5G (n1, n3 , n5, n8 , n28, n38, n40, n41, n77, n78)",
      },
      { parameter: "GSM", data: "2G:B3 | 5 | 8" },
      { parameter: "EDGE", data: "Support Download" },
      { parameter: "WCDMA", data: "3G:B1 | 5 |8" },
      { parameter: "LTE", data: "B1/B3/B5/B8/B40/B38/B41 (120M)" },
      { parameter: "SIM Slot", data: "Slot1 & Slot2-Nano" },
      { parameter: "Dual active/Standby", data: "Dual Active" },
      { parameter: "Bluetooth Support", data: "5.0" },
      { parameter: "Wi-Fi", data: "Yes" },
      { parameter: "GPS", data: "Yes" },
      { parameter: "USB Connectivity", data: "Type C" },
    ],
    Additional: [
      { parameter: "Earphone Jack", data: "3.5mm" },
      { parameter: "Thickness", data: "8.4 mm" },
      {
        parameter: "Sensors",
        data: "Side Fingerprint | Face Unlock | G Sensor",
      },
      { parameter: "Fingerprint", data: "Side" },
      {
        parameter: "Accessories",
        data: "18W Adapter | USB cable | Protective Cover | Protective Film",
      },
    ],
  };

  return (
    <div className="s-specifications">
      <h2 className="s-specificationsHeading">Full Specifications</h2>
      <div className="s-specificationsContainer">
        <div className="s-specificationsOptionsContainer">
          {Object.keys(specificationsData).map((option) => (
            <div
              key={option}
              className={`s-specificationsOptions ${
                activeOption === option ? "s-activeSpecifications" : ""
              }`}
              onClick={() => setActiveOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
        <div className="s-specificationsDataContainer">
          {specificationsData[activeOption].map((spec, index) => (
            <div key={index} className="s-specificationsData">
              <p className="s-parameter">{spec.parameter}</p>
              <p className="s-data">{spec.data}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
