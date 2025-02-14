import { motion } from "framer-motion";
import "../styles/CardContainer.css"; // Import the styles

const CardContainer = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="card-container"
    >
      {children}
    </motion.div>
  );
};

export default CardContainer;
