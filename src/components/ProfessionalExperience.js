import React from "react";
import { motion } from "framer-motion";

function ProfessionalExperience() {
  const experiences = [
    {
      company: "Tech Company A",
      role: "Software Engineer Intern",
      duration: "June 2022 - August 2022",
      responsibilities: [
        "Developed frontend components using React.js",
        "Collaborated with the backend team to integrate APIs",
        "Implemented responsive design principles",
      ],
    },
    // Add more experiences here
  ];

  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Professional Experience
      </motion.h2>
      {experiences.map((exp, index) => (
        <motion.div
          className="card"
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.3 }}
        >
          <h3>
            {exp.role} at {exp.company}
          </h3>
          <p>
            <em>{exp.duration}</em>
          </p>
          <ul>
            {exp.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </section>
  );
}

export default ProfessionalExperience;
