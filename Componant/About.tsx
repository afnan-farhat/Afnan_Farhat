import React, { useState, useEffect } from "react";
import LinkedInIcon from "./LinkedInIcon";
import GitHubIconBox from "./githubIcon";

export default function About() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the key to trigger a re-render, causing the animation to reset
      setAnimationKey((prevKey) => prevKey + 1);
    }, 90000); // 90 seconds (adjust as needed for repeat intervals)

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="title">
      <h1>Hello I’m</h1>
      <h1 className="typewriter-text" key={animationKey}>
        Afnan Farhat
      </h1>
      <p className="content">
        I’m an IT graduate passionate about crafting innovative digital solutions through web and mobile development, UI/UX design, and technical project management. With a strong foundation in programming and a commitment to continuous learning, I thrive on turning ideas into impactful user experiences.
      </p>
      <div className="social-icons">
        <LinkedInIcon />
        <GitHubIconBox />
      </div>
      <hr />
    </main>
  );
}
