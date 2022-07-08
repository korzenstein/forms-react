import { motion } from "framer-motion";
import { useState } from "react";
const Sign = () => {
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
    <>

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
      width="48"
      height="48"
      // x="0"
      // y="0"
      version="1.1"
      // viewBox="0 0 48 48"
      // xmlSpace="preserve"
      className="sign"
    >
      <motion.path
      initial={{ pathLength: 1 }}
          animate={{
            pathLength: smaller,
          }}
          stroke="var(--secondary)"
          strokeWidth="1"
          variants={pathVariants}
        fill="none"
        // stroke="#000"
        strokeLinejoin="round"
        d="M20.25 8.25v13.5h3v-4.5h1.5c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5h-4.5zm6 20.25v3m-4.5-3v3"
      ></motion.path>
      <motion.path
      initial={{ pathLength: 1 }}
          animate={{
            pathLength: smaller,
          }}
          stroke="var(--secondary)"
          strokeWidth="1"
          variants={pathVariants}

        fill="none"
        strokeLinejoin="round"
        d="M23.25 14.25v-3h1.5a1.5 1.5 0 010 3h-1.5z"
      ></motion.path>
      {/* <motion.path
      initial={{ pathLength: 1 }}
          animate={{
            pathLength: smaller,
          }}
          stroke="var(--secondary)"
          strokeWidth="2"
          variants={pathVariants}
        fill="none"
        strokeLinejoin="round"
        d="M34.5 15c0 5.801-4.699 10.5-10.5 10.5S13.5 20.801 13.5 15 18.199 4.5 24 4.5 34.5 9.199 34.5 15"
      ></motion.path> */}
      <motion.path
      initial={{ pathLength: 1 }}
          animate={{
            pathLength: smaller,
          }}
          stroke="var(--secondary)"
          strokeWidth="2"
          variants={pathVariants}
        fill="none"
        strokeLinejoin="round"
        d="M37.5 15c0 7.457-6.043 13.5-13.5 13.5S10.5 22.457 10.5 15 16.543 1.5 24 1.5 37.5 7.543 37.5 15M26.25 43.5v3.75m-4.5-3.75v3.75m-7.5-15.75h19.5v12h-19.5v-12z"
      ></motion.path>
      <motion.path
      initial={{ pathLength: 1 }}
          animate={{
            pathLength: smaller,
          }}
          stroke="var(--secondary)"
          strokeWidth="1"
          variants={pathVariants}
        fill="none"
        strokeLinejoin="round"
        d="M18.75 36L25.5 36 25.5 33.75 29.25 37.5 25.5 41.25 25.5 39 18.75 39z"
      ></motion.path>
      </motion.svg>
    </motion.div>
    </>
  );
};

export default Sign;
