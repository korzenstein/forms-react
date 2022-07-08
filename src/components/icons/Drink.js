import { motion } from "framer-motion";
import { useState } from "react";
const Drink = () => {
  const [rotation, setRotation] = useState(0);
  const [smaller, setSmaller] = useState(1);
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.4 },
      }}
      onClick={
        // ()=> setRotation(rotation + 360)
        () => setSmaller(0)
      }
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="37"
        height="48"
        fill="none"
        className="tea"
      >
        <motion.path
          initial={{ pathLength: 1 }}
          animate={{
            // rotate: rotation,
            pathLength: smaller,
          }}
          stroke="var(--secondary)"
          strokeWidth="2"
          variants={pathVariants}
          d="M27.082 17H3.025a1.964 1.964 0 00-1.976 2.02C1.157 22.518 1.496 29.737 2.5 34c1.571 6.678 4.686 10.887 5.949 12.385.342.405.849.615 1.38.615h10.193c.617 0 1.197-.284 1.544-.795C22.676 44.57 25.23 40.428 27.5 34c1.476-4.181 1.584-11.596 1.544-15.084A1.945 1.945 0 0027.082 17z"
        ></motion.path>
        <motion.path
        initial={{ pathLength: 1 }}
          animate={{
            // rotate: rotation,
            pathLength: smaller,
          }}
          stroke="var(--secondary)"
          strokeWidth="2"
          d="M29 23.5s5.5-3 6.5 2c.599 2.993-1.297 6.038-3.5 7.371C29.456 34.411 28 34 28 34"
        ></motion.path>
        <motion.path
        initial={{ pathLength: 1 }}
          animate={{
            // rotate: rotation,
            pathLength: smaller,
          }}
          id={"teabag"}
          fill="var(--secondary)"
          fillRule="evenodd"
          d="M16 25v-8h-2v8h-2a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3v-6a3 3 0 00-3-3h-2zm-5 3a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6z"
          clipRule="evenodd"
        ></motion.path>
        <motion.path
        initial={{ pathLength: 1 }}
          animate={{
            // rotate: rotation,
            pathLength: smaller,
          }}
          id={"steamL"}
          stroke="var(--secondary)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 1s0 3.5-3 5.5-3 5.5-3 5.5"
        ></motion.path>
        <motion.path
        initial={{ pathLength: 1 }}
          animate={{
            // rotate: rotation,
            pathLength: smaller,
          }}
          id={"steamR"}
          stroke="var(--secondary)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 6s0 2.227-2 3.5c-2 1.273-2 3.5-2 3.5"
        ></motion.path>
      </motion.svg>
    </motion.div>
  );
};

export default Drink;
