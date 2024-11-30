import React from "react";
import { motion } from "framer-motion";
import blueCorgiLogo from "../assets/images/bluecorgi-logo.png"; // Ensure this path is correct

function Philosophy() {
  return (
    <section className="philosophy">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="philosophy-title"
      >
        My Philosophy
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="philosophy-intro"
      >
        At the core of my work is a steadfast belief in leveraging technology to
        enhance lives and foster a better future for everyone. My approach is
        driven by critical thinking, relentless pursuit of excellence, and a
        deep commitment to community empowerment.
      </motion.p>

      <motion.blockquote
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="philosophy-quote"
      >
        "Se lo puoi sognare, lo puoi fare." - Enzo Ferrari
      </motion.blockquote>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="philosophy-body"
      >
        My mantra, <strong>"Take the best and make it better,"</strong> drives
        me to continuously refine and enhance every project I undertake. I
        believe in setting tangible goals over mere dreams because{" "}
        <strong>
          "dreams are unreachable, but goals are not, no matter how far they
          are."
        </strong>{" "}
        This perspective ensures that every ambition is backed by actionable
        steps and unwavering determination.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="philosophy-body"
      >
        Through my company, <strong>BlueCorgi</strong>, we strive to democratize
        access to cutting-edge technologies like AI. Our mission is to educate
        and empower individuals worldwide, regardless of their technical
        background, ensuring that everyone can harness the power of innovation
        to improve their quality of life. By breaking down complex concepts and
        making technology accessible, we aim to uplift communities and foster a
        culture of continuous learning and growth.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="philosophy-body"
      >
        In everything I do, I commit to delivering the highest quality. Whether
        it's developing a new software solution, leading a project, or engaging
        with the community, I give 200% to ensure exceptional outcomes. This
        unwavering dedication to excellence is what sets my work apart and
        drives meaningful impact.
      </motion.p>

      <motion.div
        className="philosophy-logo-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <img
          src={blueCorgiLogo}
          alt="BlueCorgi Logo"
          className="philosophy-logo"
        />
      </motion.div>
    </section>
  );
}

export default Philosophy;
