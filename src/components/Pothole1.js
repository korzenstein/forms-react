import Map from "./Map";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Pothole1 = ({ handleChoice, wardChoice, setWardChoice }) => {
  const [toggle, setToggle] = useState();
  return (
    <motion.div
      className="pothole1Page"
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.1,
      }}
    >
      <h3>Potholes</h3>
      {wardChoice === "none" ? null : <Link to="/">Back to Home</Link>}
    </motion.div>
  );
};
export default Pothole1;
