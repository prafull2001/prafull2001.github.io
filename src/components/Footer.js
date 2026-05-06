import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiSpotify } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const socials = [
  { href: "mailto:prafull2001@gmail.com", icon: <HiOutlineMail />, label: "Email" },
  { href: "https://github.com/prafull2001", icon: <AiFillGithub />, label: "GitHub", external: true },
  { href: "https://www.linkedin.com/in/prafull-sharma-363187168/", icon: <FaLinkedinIn />, label: "LinkedIn", external: true },
  { href: "https://open.spotify.com/user/prafull2001", icon: <SiSpotify />, label: "Spotify", external: true },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-container">
        <motion.div
          className="footer-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span>Prafull Sharma &copy; {year}</span>
        </motion.div>

        <div className="footer-socials">
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.external ? "_blank" : undefined}
              rel={social.external ? "noopener noreferrer" : undefined}
              className="footer-social-link"
              aria-label={social.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
