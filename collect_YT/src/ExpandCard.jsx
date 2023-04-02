import { motion } from "framer-motion";
import { useState } from "react";
import "./ExpandCard.css";

function ExpandCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="center_page">
      <motion.div
        layout
        transition={{ duration: 0.5, type: "spring" }}
        onClick={() => setIsOpen(!isOpen)}
        className="card"
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",
        }}
      >
        <motion.h2 layout="position">Liquid Learning</motion.h2>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default ExpandCard;
