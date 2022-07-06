import "./style/sass/App.scss";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Other from "./components/Other";
import Something from "./components/Something";

function App() {
  const current = useLocation();
  return (
    <div className="main">
      <AnimatePresence exitBeforeEnter initial={false}>
      <Routes 
      location={current} key={current.pathname}
      >
        <Route path="/" element={<Other />} />
        <Route path="/something" element={<Something />} />
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
