import React, { useState } from "react";
import { StaticImageData } from "next/image";  // Import StaticImageData for handling imported images
import "./skillBox.css";

// Update the type for logoSrc to accept both string (URL) and StaticImageData (imported image)
interface SkillBoxProps {
  logoSrc: string | StaticImageData;  // Accept both string and StaticImageData
  logoName: string;
  hoverLogoSrc: string | StaticImageData;  // Add a prop for the image to show on hover
}

const SkillBox: React.FC<SkillBoxProps> = ({ logoSrc, logoName, hoverLogoSrc }) => {
  const [touched, setTouched] = useState(false);
  const [isHovered, setIsHovered] = useState(false);  // State to track hover

  // Function to handle touch/click
  const handleTouch = () => {
    setTouched(true);
    setTimeout(() => setTouched(false), 200); // Reset pop effect after 200ms
  };

  return (
    <div
      className={`skill-box ${touched ? "popped" : ""}`}
      onClick={handleTouch}
      onMouseEnter={() => setIsHovered(true)}  // Set hover state to true on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
    >
      <img 
        src={isHovered ? (typeof hoverLogoSrc === "string" ? hoverLogoSrc : hoverLogoSrc.src) : (typeof logoSrc === "string" ? logoSrc : logoSrc.src)} 
        alt={`${logoName} logo`} 
        className="logo-image" 
      />
      <p className="logo-name">{logoName}</p>
    </div>
  );
};

export default SkillBox;
