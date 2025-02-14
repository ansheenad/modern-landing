import { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="public\logo.png" alt="spotter" />
          <span>Spotter</span>
        </div>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#product">Solutions</a>
          <a href="#use-cases">Platform</a>
          <a href="#developers">Resources</a>
        </div>

        <div className="navbar-buttons">
          <button className="btn-login">Login</button>
          <button className="btn-contact">Request a Demo</button>
          <button className="btn-start">Contact Us</button>
        </div>

        <button 
          className="mobile-menu" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;