import React from "react";
import { motion } from "framer-motion";

function Volunteering() {
  const volunteering = [
    {
      organization: "Code for Good",
      role: "Volunteer Developer",
      duration: "September 2021 - Present",
      activities: [
        "Developed web applications for non-profits",
        "Mentored high school students in coding",
      ],
    },
    // Add more volunteering experiences here
  ];

  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Volunteering
      </motion.h2>
      {volunteering.map((volunteer, index) => (
        <motion.div
          className="card"
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.3 }}
        >
          <h3>
            {volunteer.role} at {volunteer.organization}
          </h3>
          <p>
            <em>{volunteer.duration}</em>
          </p>
          <ul>
            {volunteer.activities.map((activity, idx) => (
              <li key={idx}>{activity}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </section>
  );
}

export default Volunteering;
