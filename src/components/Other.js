import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {useState} from 'react'


const Other = () => {

  const [rotation, setRotation] = useState(0);
  return (
    <motion.div
      className="other"
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{ 
        duration: 0.7,
        delay: 0.1
     }}
    >
      <motion.div
      className="red"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
      ></motion.div>
      <h3>Other</h3>
      <Link to="/">Back to Home</Link>
      <motion.div
      className="red"
      animate={{rotate: rotation}}
      onClick={()=> setRotation(rotation + 180)}
          
      >

      </motion.div>
    </motion.div>
  );
};

export default Other;
