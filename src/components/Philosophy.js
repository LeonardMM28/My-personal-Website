import React from "react";
import { motion } from "framer-motion";

function Philosophy() {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Philosophy
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I believe in the power of technology to transform lives and create a
        better future. My approach to problem-solving is rooted in critical
        thinking, collaboration, and continuous learning.
      </motion.p>
      <motion.blockquote
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        "The best way to predict the future is to invent it." - Alan Kay
      </motion.blockquote>
    </section>
  );
}

export default Philosophy;
