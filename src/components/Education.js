import React from "react";
import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      institution: "San Francisco State University",
      degree: "Bachelor of Science in Computer Science",
      duration: "Expected Graduation: May 2024",
      details: [
        "GPA: 3.8",
        "Dean’s List for 4 semesters",
        "Relevant Coursework: Data Structures, Algorithms, Database Systems",
      ],
    },
    // Add more education details here
  ];

  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Education
      </motion.h2>
      {education.map((edu, index) => (
        <motion.div
          className="card"
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.3 }}
        >
          <h3>{edu.degree}</h3>
          <p>
            <strong>{edu.institution}</strong>
          </p>
          <p>
            <em>{edu.duration}</em>
          </p>
          <ul>
            {edu.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </section>
  );
}

export default Education;
