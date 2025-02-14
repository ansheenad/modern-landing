// src/components/layout/MobileMenu.jsx
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/MobileMenu.css';

const MobileMenu = ({ isOpen, onClose, links }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div
            className="mobile-menu-container"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <div className="mobile-menu-header">
              <button className="close-button" onClick={onClose}>×</button>
            </div>
            
            <nav className="mobile-menu-nav">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={onClose}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;