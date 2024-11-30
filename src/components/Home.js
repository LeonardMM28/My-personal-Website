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
        transition={{ duration: 1, ease: "easeOut" }}
        className="profile-img"
      />
      <motion.h2
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
        className="intro-title"
      >
        Hey there! I'm Leonardo Meza Martinez
      </motion.h2>
      <motion.h3
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
        className="sub-title"
      >
        Innovator | Software Engineer | Entrepreneur
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="intro-paragraph"
      >
        I'm a passionate Computer Science student at San Francisco State
        University and the co-founder of BlueCorgi. I thrive on turning complex
        problems into scalable, secure solutions using the latest technologies.
        From designing AI-driven applications to mentoring the next generation
        of tech leaders, my journey is fueled by creativity and a relentless
        drive to innovate.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="intro-paragraph"
      >
        Beyond coding, I'm dedicated to making a meaningful impact in my
        community and continuously pushing the boundaries of what's possible in
        the tech landscape. Whether it's developing groundbreaking projects or
        collaborating on visionary ideas, I'm always eager to create something
        extraordinary together.
      </motion.p>
      <motion.div
        className="home-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <a
          href="/projects"
          className="btn primary-btn"
          style={{ color: "#4a90e2" }}
        >
          Explore My Projects |{" "}
        </a>
        <a
          href="/contact"
          className="btn secondary-btn"
          style={{ color: "#4a90e2" }}
        >
          Let's Connect
        </a>
      </motion.div>
    </section>
  );
}

export default Home;
