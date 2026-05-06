import React from "react";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { AnimatedUnderline } from "../Doodles";

const GOOGLE_DOC_ID = "1LbC1R7CzZzIajwaCZo4iaHfNmGEXh_FmB6ZAuKTIAng";
const EMBED_URL = `https://docs.google.com/document/d/${GOOGLE_DOC_ID}/preview`;
const EXPORT_URL = `https://docs.google.com/document/d/${GOOGLE_DOC_ID}/export?format=pdf`;

function Resume() {
  return (
    <section className="resume-section">
      <div className="resume-container">
        <motion.div
          className="resume-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <motion.p
              className="section-label"
              initial={{ opacity: 0, letterSpacing: "0.3em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.12em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Resume
            </motion.p>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              My experience
            </motion.h2>
            <AnimatedUnderline width={200} delay={0.4} strokeWidth={2} />
          </div>
          <motion.div
            className="resume-actions"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a
              href={EXPORT_URL}
              className="btn-primary"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <HiDownload /> Download PDF
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="resume-embed-wrapper"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <iframe
            className="resume-embed"
            src={EMBED_URL}
            title="Prafull Sharma Resume"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
