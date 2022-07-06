import "./style/sass/App.scss";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Other from "./components/Other";

function App() {
  const current = useLocation();
  return (
    <div className="body">
      <AnimatePresence exitBeforeEnter initial={false}>
      <Routes 
      location={current} key={current.pathname}
      >
        <Route path="/" element={<Home />} />
        <Route path="/other" element={<Other />} />
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
