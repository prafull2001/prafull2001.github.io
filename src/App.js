import React, { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Poetry from "./components/Poetry/Poetry";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./style.css";
import "./App.css";
import "./index.css";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    scale: 0.99,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="page-wrapper"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/poetry" element={<Poetry />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return (
    <Router basename="/">
      <div className={`App ${loading ? "no-scroll" : ""}`}>
        {/* Preloader */}
        <div className={`preloader ${!loading ? "preloader-hidden" : ""}`}>
          <div className="preloader-spinner" />
        </div>

        {/* Background mesh gradient */}
        <div className="mesh-gradient" />

        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
