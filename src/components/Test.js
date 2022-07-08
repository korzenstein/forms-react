import { motion } from "framer-motion";

const ellipseVariants = {
  start: {
    d:
    "M27.082 17H3.025a1.964 1.964 0 00-1.976 2.02C1.157 22.518 1.496 29.737 2.5 34c1.571 6.678 4.686 10.887 5.949 12.385.342.405.849.615 1.38.615h10.193c.617 0 1.197-.284 1.544-.795C22.676 44.57 25.23 40.428 27.5 34c1.476-4.181 1.584-11.596 1.544-15.084A1.945 1.945 0 0027.082 17z"

  },
  end: {
    d:
           "M85.5 34C85.5 45.5 83 51 63 73.5C43 96 17 70.5 4 46C-9 21.5 12 -8.49999 41.5 2.5C71 13.5 85.5 22.5 85.5 34Z"


  }
};

const Test = () => {
  return (
    <div className="App">
      <motion.svg
        initial="start"
        width="400"
        height="400"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover="end"
      >
        <motion.path
          variants={ellipseVariants}
          transition={{
            duration: 3,
            yoyo: Infinity,
            repeat: Infinity
          }}
          fill="#5C63FE"
        />
      </motion.svg>
      
    </div>
  );
}

export default Test