import React from "react";
import { motion } from "framer-motion";

function Accomplishments() {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Accomplishments
      </motion.h2>
      <motion.div
        className="card accomplish"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h3>Check out my outstanding accomplishments!</h3>
        <p>COMING SOON.</p>
      </motion.div>
    </section>
  );
}

export default Accomplishments;
