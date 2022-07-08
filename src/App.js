import "./style/sass/App.scss";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Coffee1 from "./components/Coffee1";
import Coffee2 from "./components/Coffee2";
import Pothole1 from "./components/Pothole1";

import Other from "./components/Other";

function App() {
  const [wardChoice, setWardChoice] = useState("none");
  const [allOthers, setAllOthers] = useState();
  const [started, setStarted] = useState(true);
  const handleChoice = (ward) => {
    setWardChoice(ward);
  };

  const current = useLocation();
  return (
    <div className="body">
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={current} key={current.pathname}>
          <Route
            path="/"
            element={
              <Home
                handleChoice={handleChoice}
                wardChoice={wardChoice}
                setWardChoice={setWardChoice}
              />
            }
          />
          <Route
            path="/coffee1"
            element={
              <Coffee1
                handleChoice={handleChoice}
                wardChoice={wardChoice}
                setWardChoice={setWardChoice}
              />
            }
          />
          <Route
            path="/coffee2"
            element={<Coffee2 wardChoice={wardChoice} />}
            
          />
          <Route
            path="/pothole1"
            element={<Pothole1 wardChoice={wardChoice} />}
            
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
