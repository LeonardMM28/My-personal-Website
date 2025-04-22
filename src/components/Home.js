import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/images/leo.jpeg";

function Home() {
  return (
    <section className="home">
      <motion.div
        className="home-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={profileImage}
          alt="Leonardo Meza Martinez"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="profile-img"
        />
        <motion.div
          className="home-text"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
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
            I'm the Co-Founder & CTO of BlueCorgi Inc. I thrive on turning
            complex problems into scalable, secure solutions using the latest
            technologies. From designing AI-driven applications to mentoring the
            next generation of tech leaders, my journey is fueled by creativity
            and a relentless drive to innovate.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="intro-paragraph"
          >
            Beyond coding, I'm dedicated to making a meaningful impact in my
            community and continuously pushing the boundaries of what's possible
            in the tech landscape. Whether it's developing groundbreaking
            projects or collaborating on visionary ideas, I'm always eager to
            create something extraordinary together.
          </motion.p>

          {/* New Section: Location and Immigration Status */}
          <motion.div
            className="home-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <div className="info-item">
              <span className="info-icon">&#128205;</span>{" "}
              {/* Location Pin Icon */}
              <span className="info-text">San Francisco, CA</span>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="home-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <Link
              to="/projects"
              className="btn primary-btn"
              style={{ color: "rgb(74, 144, 226)" }}
            >
              Explore My Projects |{" "}
            </Link>
            <Link
              to="/contact"
              className="btn secondary-btn"
              style={{ color: "rgb(74, 144, 226)" }}
            >
              Let's Connect
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
