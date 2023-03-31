import { motion } from "framer-motion";
import { useState } from "react";
import "./ExpandCard.css";

function ExpandCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card_body">
    <div className="center_page">
      <motion.div
        layout
        transition={{ duration: 0.5, type: "spring" }}
        onClick={() => setIsOpen(!isOpen)}
        className="cardBT"
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)"
        }}
      >
        <motion.h2 layout="position">
          Base Rate Fallacy<span></span>
        </motion.h2>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>
            The probability of breast cancer is 1% for a woman at age forty who participates in
            routine screening. If a woman has breast cancer, the probability is 80% that she will get
            a positive mammography. If a woman does not have breast cancer, the probability is
            9.6% that she will also get a positive mammography. A woman in this age group had a
            positive mammography in a routine screening. 
            </p>
            
            <p>What is the probability that she actually
            has breast cancer? _%. </p>

            (Example from: Gigerenzer & Hoffrage, 1995)
          </motion.div>
        )}
      </motion.div>
    </div>
    </div>
  );
}

export default ExpandCard;
