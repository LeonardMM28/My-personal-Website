import React from "react";
import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      institution: "San Francisco State University",
      degree: "Bachelor of Science in Computer Science (Dual Degree Program)",
      duration: "September 2022 - Expected May 2025",
      details: [
        "Cumulative GPA: 3.73 – Dean’s List (x4: FA22, SP23, FA23, SP24)",
        "Transfer from Feng Chia University (2+2 Program)",
      ],
    },
    {
      institution: "Feng Chia University",
      degree: "Bachelor of Science in Computer Science (Dual Degree Program)",
      duration: "September 2020 - Expected May 2025 (SFSU)",
      details: [
        "Received Outstanding Performance Scholarship (x2)",
        "Dean’s List (Spring 2021)",
      ],
    },
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
