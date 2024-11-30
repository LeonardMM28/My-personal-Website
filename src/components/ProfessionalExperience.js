import React from "react";
import { motion } from "framer-motion";

function ProfessionalExperience() {
  const experiences = [
    {
      company: "BlueCorgi (www.bluecorgi.com)",
      role: "Co-Founder | Lead Software Engineer",
      duration: "March 2024 – Present",
      responsibilities: [
        "Co-founded BlueCorgi, a web platform offering AI-powered tools to global users.",
        "Led full-stack development (frontend, backend, and DevOps) using JavaScript, Python, and Java.",
        "Designed and deployed a scalable, secure infrastructure using AWS services like EC2, S3, RDS, DynamoDB, and more.",
        "Integrated advanced AI tools, supporting thousands of users and over 100 languages.",
        "Scheduled public launch and broader testing by year-end 2024.",
      ],
    },
    {
      company: "San Francisco State University",
      role: "Orientation Leader / Team Leader / Peer Director",
      duration: "April 2023 – Present",
      responsibilities: [
        "Managed orientation events for over 2,000 students, overseeing booking and payments.",
        "Developed a web app to streamline inventory management for summer orientations.",
        "Coordinated logistics, managed a $200,000+ budget, and implemented leadership training.",
      ],
    },
    {
      company: "San Francisco State University",
      role: "Front Desk Assistant",
      duration: "December 2022 – Present",
      responsibilities: [
        "Effectively managed administrative tasks, ensured safety protocols, and monitored access for an SFSU housing building.",
        "Provided support to around 600 student residents, ensuring a smooth living experience.",
      ],
    },
    {
      company: "Taiwan Bubbles",
      role: "Founder/Manager",
      duration: "September 2020 – Present",
      responsibilities: [
        "Established 'Taiwan Bubbles,' a Bubble Tea brand in Aguascalientes, Mexico.",
        "Achieved 120% growth in business model expansion across the city.",
        "Oversaw all operational aspects, including menu design and staff management.",
      ],
    },
    {
      company: "Teotihuacan Restaurant",
      role: "Head Chef/Manager",
      duration: "July 2021 – February 2022",
      responsibilities: [
        "Promoted from kitchen assistant to head chef/manager in a Mexican restaurant in Taichung, Taiwan.",
        "Supervised food preparation, trained over 10 staff members, and managed daily restaurant operations.",
      ],
    },
    {
      company: "Teleperformance",
      role: "Bilingual Customer Service Representative",
      duration: "August 2020 – December 2020",
      responsibilities: [
        "Delivered effective bilingual customer support in Spanish and English.",
        "Assisted customers with technical issues and inquiries related to Comcast services.",
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
