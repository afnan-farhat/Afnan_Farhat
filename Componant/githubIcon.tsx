import React from 'react';

export default function GitHubIconBox() {
  return (
    <div
      style={{
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px', // Adjust size as needed
        height: '40px', // Adjust size as needed
        borderRadius: '50%', // Circular shape
      }}
    >
      <a
        href="https://github.com/afnan-farhat"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="GitHub Logo"
          style={{
            width: '30px', // Adjust size of the logo
            height: '30px', // Adjust size of the logo
          }}
        />
      </a>
    </div>
  );
}
