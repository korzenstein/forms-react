import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Repeat = () => {
 
 const [langChoice, setLangChoice] = useState("english")

 const toEnlgish = () => {
    setLangChoice("english")
 }
 const toFrench = () => {
    setLangChoice("french")
 }
  const array = [
    {
      thing: "stephen",
      next: "pandda",
      id: 1,
    },
    {
      thing: "ted",
      next: "mongoose",
      id: 2,
    },
    {
      thing: "Mary",
      next: "bear",
      id: 3,
    },
    {
      thing: "Sally",
      next: "tiger",
      id: 4,
    },
  ];
  const language = {
    english: {
      yes: "yes",
      maybe: "maybe",
      id: 1
    },
    french: {
      yes: "oui",
      maybe: "petetre",
      id: 2
    },
  };

  console.log(array)
  return (
    <motion.div
    className="testDiv"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
    >
        {/* <AnimatePresence>
      <motion.h2
      className="h2"
      
      key={language[langChoice].id}
      initial={{  opacity: 0}}
      animate={{  opacity: 1 }}
      exit={{  opacity: 0 }}
      transition={{
        duration: 0.9,
        delay: 0.2,
      }}>{language[langChoice].maybe}</motion.h2>

      </AnimatePresence> */}

      
<button
onClick={toEnlgish}
>English</button>
<button
onClick={toFrench}
>French</button>

    </motion.div>
  );
};

export default Repeat;
