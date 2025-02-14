// src/components/Footer.jsx
import React from "react";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2025 Copyright spotter.ai. All rights reserved.
          </div>
          <div className="footer-address">
            251 Little Falls Dr. Wilmington DE 19808
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;