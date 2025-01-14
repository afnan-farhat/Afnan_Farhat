import React from 'react';

// Import the local LinkedIn logo
import linkedInLogo from './assets/linkedin-logo.png'; // Adjust the path to your image

export default function LinkedInIconBox() {
  return (
    <div
      style={{
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px', // Adjust size as needed
        height: '40px', // Adjust size as needed
      }}
    >
      <a
        href="https://www.linkedin.com/in/afnan-tariq-7b284a314?"  // Change this link to your LinkedIn profile
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
        }}
      >
        <img
          src="linkedin_Logo.png" // Using the local image path
          alt="LinkedIn Logo"
          style={{
            width: '30px', // Adjust size of the logo
            height: '30px', // Adjust size of the logo
          }}
        />
      </a>
    </div>
  );
}
