// SkillBox.tsx
import React, { useState } from 'react';
import { StaticImageData } from 'next/image';  // Import StaticImageData for handling imported images
import './skillBox.css';  // Import the corresponding CSS for styling

interface SkillBoxProps {
  logoSrc: string | StaticImageData;
  logoName: string;
  hoverLogoSrc: string | StaticImageData;
}

const SkillBox: React.FC<SkillBoxProps> = ({ logoSrc, logoName, hoverLogoSrc }) => {
  const [touched, setTouched] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleTouch = () => {
    setTouched(true);
    setTimeout(() => setTouched(false), 200); // Reset pop effect after 200ms
  };

  return (
    <div
      className={`skill-box ${touched ? 'popped' : ''}`}
      onClick={handleTouch}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? (typeof hoverLogoSrc === 'string' ? hoverLogoSrc : hoverLogoSrc.src) : (typeof logoSrc === 'string' ? logoSrc : logoSrc.src)}
        alt={`${logoName} logo`}
        className="logo-image"
      />
      <p className="logo-name">{logoName}</p>
    </div>
  );
};

export default SkillBox;
