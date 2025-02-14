// src/components/sections/AnimatedSection.jsx
import { motion } from 'framer-motion';
import { useAnimation } from '../../hooks/useAnimation';

const AnimatedSection = ({ children, className }) => {
  const [ref, isVisible] = useAnimation(0.2);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;