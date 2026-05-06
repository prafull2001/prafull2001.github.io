import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

const poems = [
  {
    title: "Ganandorf",
    date: "December 2023",
    content: `True cruelty
smiles in your face,
slips off your guard
and lays beside.

It explains past victims
and unique dispositions,
masking the chambering
of another heartbreak.`,
  },
  {
    title: "Migratory Birds",
    date: "December 2023",
    content: `Does thou tire,
of migration
and its generosity
of unchanged change?

When beacons translate
pregnant abodes
are left barren
expecting me back.`,
  },
  {
    title: "The Fledgling",
    date: "August 2023",
    content: `Nestled in the soft moss
in a clumsy heap
the fledgling looks upward
and remembers home —

familiar chattering,
the symphony of life
with daily crescendos
of love.`,
  },
  {
    title: "What's Important?",
    date: "July 2023",
    content: `What's more important,
the flower or the soil that grows it?
The secret you were told,
or the number of people who know it?

The way your thoughts flow,
or the power to control it?
Native to the first world,
concepts like these are foreign.`,
  },
  {
    title: "Lessons from the Mahabharata",
    date: "February 2023",
    content: `If life was a story,
then years are the sentences
enunciated by the words
of everyday living.

And in between these words
lie the letters of emotions,
each syllable boomed
off the script of life.

My time dribbles at the chin
of a cosmic God
expounding my Mahabharata,
the journey behind details and reasons.`,
  },
  {
    title: "Sometimes I Dream",
    date: "May 2022",
    content: `Sometimes I scribble words,
and ask you what they mean —
the only time that they make sense
is when I fall asleep.

For in my dreams I'm dead,
hindered when I'm alive,
talking to souls and memories
for sleep is death being shy.`,
  },
  {
    title: "The Kwisatz Haderach",
    date: "January 2022",
    content: `Cinnamon-reeking flames
temper the sands of time
to make glass cages
for my trinocular focus`,
  },
  {
    title: "Grandfathers of the Forest",
    date: "October 2021",
    content: `The oaks bend and groan
leaning on splintery canes as they sway.

With their torrential whooping and breezy snickering,
the oaks gaze below with sympathy and adoration —

"We have much to teach" they offer, "will you listen?"

But the unsuspecting pupils disappear after a summer's growth,
yet wiser still the oaks grow, unbothered by the neglect.

The soft crackling of weathered bones fills the Forest
as they re-extend their gracious offer to new generations.`,
  },
  {
    title: "Morals",
    date: "April 2021",
    content: `Don't preach your morals
til you have money to fund
your own temptations.`,
  },
];

function PoemCard({ poem, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="poem-card"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="poem-header"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ x: 6 }}
        transition={{ duration: 0.2 }}
      >
        <div className="poem-title-group">
          <span className="poem-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="poem-title">{poem.title}</span>
          <span className="poem-date">{poem.date}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <HiChevronDown className="poem-expand-icon" />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <motion.div
              className="poem-body"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {poem.content}
              <div className="poem-attribution">— Prafull Sharma</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Poetry() {
  return (
    <section className="poetry-section">
      <div className="poetry-container">
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
            Writing
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 40, skewY: 2 }}
            whileInView={{ opacity: 1, y: 0, skewY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Poetry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              color: "var(--text-secondary)",
              marginTop: "1rem",
              maxWidth: "600px",
              fontSize: "1.1rem",
            }}
          >
            Nature, identity, mythology & the quiet spaces between.
          </motion.p>
        </motion.div>

        <div className="poetry-list" style={{ position: "relative" }}>
          {poems.map((poem, i) => (
            <PoemCard key={poem.title} poem={poem} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Poetry;
