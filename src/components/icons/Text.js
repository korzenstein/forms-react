import {motion} from 'framer-motion'
import {useState} from 'react'

const Text = () => {
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
    <motion.svg
      whileHover={{
        scale: 1.1,
        opacity: 0.5,
        transition: { duration: 0.4 },
      }}

      xmlns="http://www.w3.org/2000/svg"
      width="330.89"
      height="151.28"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 330.89 151.28"
      xmlSpace="preserve"
    >
      <motion.text
      
   
        

      className="text"
        stroke="#000"
        strokeMiterlimit="10"
        fontFamily="'Avenir-Roman'"
        fontSize="49"
        transform="translate(41.5 84.5)"
      >
        City Helper
      </motion.text>
    </motion.svg>
  );
}

export default Text;