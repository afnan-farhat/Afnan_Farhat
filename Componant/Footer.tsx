import React from "react";
import "./CSS/footer.css"; // Import the CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <hr className="footer-line" />
        <div className="footer-top">
          <p className="footer-name">Afnan Farhat</p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/afnan-tariq-7b284a314?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="linkedin_logo.png" alt="LinkedIn" className="social-icon" />
            </a>
            <a
              href="https://github.com/afnan-farhat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub"
                className="social-icon"
              />
            </a>
          </div>
        </div>
        <p className="footer-copyright">
          &copy; 2025 Afnan Farhat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
