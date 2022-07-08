import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Coffee2 = () => {
  return (
    <motion.div
    className="class2Page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.1,
      }}
    >
      <h3>Page2 of Coffee</h3>
    </motion.div>
  );
};
export default Coffee2;
