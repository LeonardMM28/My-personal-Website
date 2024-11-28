import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/images/leo.jpeg";

function Home() {
  return (
    <section className="home">
      <motion.img
        src={profileImage}
        alt="Leonardo Meza Martinez"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h2
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        Welcome to My Personal Website
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        I'm a Computer Science student passionate about technology and
        innovation.
      </motion.p>
    </section>
  );
}

export default Home;
