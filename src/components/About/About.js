import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiSwift,
  SiFirebase,
  SiFlutter,
  SiDocker,
  SiAmazonaws,
  SiTypescript,
  SiMongodb,
  SiGo,
  SiNextdotjs,
  SiTensorflow,
  SiGit,
  SiCplusplus,
  SiJavascript,
} from "react-icons/si";

const techStack = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiSwift />, name: "Swift" },
  { icon: <SiFlutter />, name: "Flutter" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiAmazonaws />, name: "AWS" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiGo />, name: "Go" },
  { icon: <SiTensorflow />, name: "TensorFlow" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <SiJavascript />, name: "JavaScript" },
];

const wordReveal = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.06,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const paragraphSlide = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function About() {
  const titleWords = "A bit about me".split(" ");

  return (
    <section className="about-section">
      <div className="about-container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="section-label"
            initial={{ opacity: 0, letterSpacing: "0.3em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.12em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            About
          </motion.p>
          <h2 className="section-title" style={{ display: "flex", gap: "0.3em", flexWrap: "wrap" }}>
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordReveal}
                style={{ display: "inline-block" }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <div className="about-grid">
          <div className="about-text">
            <motion.p
              custom={0}
              variants={paragraphSlide}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              I studied CS at <span className="highlight">UW-Madison</span> and
              have been building apps since I taught myself JavaScript in 7th grade.
              I've shipped everything from iOS apps to a{" "}
              <span className="highlight">hardware DJ glove</span> I put together
              over a weekend.
            </motion.p>
            <motion.p
              custom={1}
              variants={paragraphSlide}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Right now I'm building{" "}
              <a
                href="https://www.thespoolapp.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#56B5E3", fontWeight: 600 }}
              >
                Spool
              </a>
              , a screen time app with 8,000+ excuses recorded.
              Outside of work I'm into lifting, pickleball, hiking & vinyl.
              I{" "}
              <span style={{ color: "var(--accent)" }}>write poetry</span> when
              I'm inspired & to express myself.
            </motion.p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="tech-section">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              className="section-label"
              initial={{ opacity: 0, letterSpacing: "0.3em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.12em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Stack
            </motion.p>
            <h2 className="section-title">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                Technologies I work with
              </motion.span>
            </h2>
          </motion.div>

          <div className="tech-grid">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="tech-item"
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.04,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
                }}
              >
                {tech.icon}
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
