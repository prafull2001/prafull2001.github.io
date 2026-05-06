import React from "react";
import { motion } from "framer-motion";

export function AnimatedUnderline({
  width = 200,
  delay = 0.3,
  strokeWidth = 2.5,
  color = "var(--accent)",
  style = {},
}) {
  return (
    <svg
      width={width}
      height="12"
      viewBox={`0 0 ${width} 12`}
      fill="none"
      style={{ display: "block", overflow: "visible", ...style }}
    >
      <motion.path
        d={`M0 8 Q${width * 0.25} 2, ${width * 0.5} 6 T${width} 4`}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          pathLength: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.3, delay },
        }}
      />
    </svg>
  );
}
