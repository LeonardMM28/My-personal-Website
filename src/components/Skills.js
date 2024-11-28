import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    "JavaScript",
    "React.js",
    "Node.js",
    "Python",
    "C++",
    "MySQL",
    "Git/GitHub",
    // Add more skills here
  ];

  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>
      <motion.ul
        className="skills-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="skill-item"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default Skills;
