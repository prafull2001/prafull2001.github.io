import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";
import spoolIcon from "../../Assets/Projects/spooli-app-icon.png";
import matchmeds from "../../Assets/Projects/matchmeds.png";
import grocerymule from "../../Assets/Projects/grocerymule.png";
import shell from "../../Assets/Projects/shell.png";
import jumper from "../../Assets/Projects/jumper.png";
import nhs from "../../Assets/Projects/nhs.png";
import stem from "../../Assets/Projects/stemplayer.jpg";
import appStoreBadge from "../../Assets/app-store-badge.svg";

const projects = [
  {
    title: "Spool",
    description:
      "AI-powered screen time app that combats doomscrolling through voice check-ins. 8,000+ excuses recorded, 4.8 stars, helping users reduce screen time by 25% on average. Built with Swift, ML, and Firebase.",
    image: spoolIcon,
    tags: ["Swift", "AI/ML", "Firebase", "iOS"],
    github: null,
    demo: "https://www.thespoolapp.com",
    appStore: "https://apps.apple.com/us/app/spool-screen-time-control/id6749428484",
    featured: true,
  },
  {
    title: "MatchMeds",
    description:
      "Platform connecting patients to safety-net clinics for affordable prescriptions. Won $15,000 at the Diamond Challenge. Full-stack MERN application.",
    image: matchmeds,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/prafull2001/matchmeds-demo-app",
    demo: "https://vimeo.com/344841700",
    featured: true,
  },
  {
    title: "Stem Player",
    description:
      "Hardware DJ device built over a weekend. Separates vocals, drums, bass, and melody from any audio and maps them to force-sensitive resistors activated by finger pressure.",
    image: stem,
    tags: ["Hardware", "Python", "Audio Processing"],
    github: "https://github.com/prafull2001/stem-glove",
    demo: "https://www.youtube.com/watch?v=b77IK56quzs",
    featured: false,
  },
  {
    title: "GroceryMule",
    description:
      "Collaborative shopping app for roommates. Make shared lists, snap receipts to split costs automatically. Built with Flutter and Firebase.",
    image: grocerymule,
    tags: ["Flutter", "Firebase", "Dart"],
    github: "https://github.com/prafull2001/grocerymule-website",
    demo: "https://grocerymule.net/",
    featured: false,
  },
  {
    title: "Unix Shell",
    description:
      "Custom Unix terminal written in C. Supports command aliases, output redirection, and process management.",
    image: shell,
    tags: ["C", "Systems", "Unix"],
    github: "https://github.com/prafull2001/interactive-shell",
    demo: null,
    featured: false,
  },
  {
    title: "NHS Tutoring App",
    description:
      "iOS app streamlining the National Honor Society tutoring sign-up process with direct chatroom access to tutors. Built with Swift and Firebase.",
    image: nhs,
    tags: ["Swift", "Firebase", "iOS"],
    github: "https://github.com/prafull2001/NHS-Student",
    demo: "https://devpost.com/software/nhs-tutoring-app",
    featured: false,
  },
  {
    title: "JUMP3R",
    description:
      "2D platformer game with 5,000+ downloads on the App Store. One of my first published apps, built with Corona Labs game engine in Lua.",
    image: jumper,
    tags: ["Lua", "Corona Labs", "Game Dev"],
    github: "https://github.com/ByteMeClub/Jumper",
    demo: "https://appadvice.com/app/jump3r/1212154687",
    featured: false,
  },
];

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`project-card ${project.featured ? "featured" : ""}`}
      initial={{
        opacity: 0,
        y: 40,
        x: project.featured ? 0 : isEven ? -20 : 20,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.3 },
      }}
    >
      <motion.img
        src={project.image}
        alt={project.title}
        className="project-card-image"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
      />
      <div className="project-card-content">
        <div className="project-card-tags">
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              className="project-tag"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.07 + tagIndex * 0.05,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-links">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <AiFillGithub /> Code
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <HiExternalLink /> {project.title === "MatchMeds" ? "Pitch" : "Website"}
            </motion.a>
          )}
          {project.appStore && (
            <motion.a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={appStoreBadge}
                alt="Download on the App Store"
                className="app-store-badge"
              />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-container">
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
            Work
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Things I've built
          </motion.h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
