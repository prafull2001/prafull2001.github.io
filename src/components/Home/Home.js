import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import homeLogo from "../../Assets/profile-photo.png";
import { HiOutlineMail } from "react-icons/hi";
import { AnimatedUnderline } from "../Doodles";

function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-greeting" variants={slideRight}>
            Hey, I'm
          </motion.p>

          <motion.div variants={slideUp}>
            <h1 className="hero-name">
              {[
                { text: "Prafull", accent: false },
                { text: "Sharma", accent: true },
              ].map((word, i) => (
                <span className="word-mask" key={i}>
                  <motion.span
                    className={`word ${word.accent ? "accent-text" : ""}`}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1.1,
                      delay: 0.3 + i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {word.text}
                  </motion.span>
                </span>
              ))}
            </h1>
          </motion.div>

          <motion.div variants={slideUp}>
            <AnimatedUnderline width={460} delay={0.6} strokeWidth={2.5} />
          </motion.div>

          <motion.p className="hero-tagline" variants={slideUp}>
            I'm building{" "}
            <a
              href="https://www.thespoolapp.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#56B5E3", fontWeight: 600 }}
            >
              Spool
            </a>
            , an app that makes you justify yourself before you doomscroll.
            I also{" "}
            <Link to="/poetry" style={{ color: "var(--accent)", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: "3px" }}>
              write poetry
            </Link>
            {" "}when I'm inspired & to express myself.
          </motion.p>

          <motion.div className="hero-cta" variants={slideUp}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/projects" className="btn-primary">
                View my work
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href="mailto:prafull2001@gmail.com"
                className="btn-ghost"
              >
                <HiOutlineMail /> Get in touch
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="hero-image-glow"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className={`hero-image-blur-wrapper ${imageLoaded ? "loaded" : ""}`}>
            <img
              src={homeLogo}
              alt="Prafull Sharma"
              className="hero-image"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
