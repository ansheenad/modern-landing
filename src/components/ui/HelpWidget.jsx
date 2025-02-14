// src/components/ui/HelpWidget.jsx
import { useState } from 'react';
import '../ui/HelpWidget.css';

const HelpWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`help-widget ${isOpen ? 'open' : ''}`}>
      <button 
        className="help-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="help-icon">💡</span>
        {!isOpen && <span className="help-text">Need help?</span>}
      </button>

      {isOpen && (
        <div className="help-content">
          <div className="help-header">
            <h3>Hi there! Need help?</h3>
            <button 
              className="close-button"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>
          <div className="help-body">
            <p>Get help with using Fingerprint.</p>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="help-input"
            />
            <button className="help-submit">Start Chat</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpWidget;