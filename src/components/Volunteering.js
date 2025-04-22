import React from "react";
import { motion } from "framer-motion";
import rotary from "../assets/images/rotary.png";
import rotaract from "../assets/images/rotaract.png";
import { FaLinkedin } from "react-icons/fa";

function Volunteering() {
  const volunteering = [
    {
      organization: "Interact Club, Mexico",
      role: "Member",
      duration: "2013 - 2016",
      activities: [
        "Organized and participated in an athletic race fundraiser multiple times, raising between $3,000 and $5,000 USD per event to support a clinic aiding children with cleft lip and palate.",
        "Collaborated on various community service projects focused on improving local well-being and fostering inclusivity.",
      ],
    },
    {
      organization: "Rotary International",
      role: "Cultural Exchange Ambassador",
      duration: "2019 - 2020",
      activities: [
        "Represented Mexico in Taiwan, teaching Mexican culture and traditions to local communities while immersing myself in Taiwanese culture.",
        "Built cultural bridges by participating in cultural exchange programs, fostering mutual understanding and appreciation.",
      ],
      linkedin:
        "https://www.linkedin.com/company/rotary-international/posts/?feedView=all",
    },
    {
      organization: "Rotaract Club at San Francisco State University",
      role: "Treasurer and President",
      duration: "2023 - 2025",
      activities: [
        "Grew the club from 4 to 12 active members by fostering engagement and implementing strategic growth initiatives.",
        "Organized community service programs and participated in volunteering activities, including the Chinatown Night Market with the Rotary Club of SF Chinatown to assist local vendors.",
        "Led efforts in beach cleanups alongside the Rotary Club of San Francisco, contributing to environmental sustainability.",
      ],
      linkedin:
        "https://www.linkedin.com/company/rotaract-club-at-san-francisco-state-university/posts/?feedView=all",
    },
    {
      organization: "Rotaract Club of San Francisco",
      role: "Founding President",
      duration: "2025 - 2026",
      activities: [
        "Taking initiative to establish a new community-based Rotaract Club aimed at expanding opportunities for young professionals to engage in community service and leadership development.",
        "Developing strategic plans to ensure the club's successful launch and sustainable growth.",
      ],
      linkedin:
        "https://www.linkedin.com/company/rotaract-club-of-san-francisco/",
    },
  ].reverse();

  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Volunteering
      </motion.h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <img
          src={rotary}
          alt="Rotary Logo"
          style={{ width: "150px", height: "auto" }}
        />
        <img
          src={rotaract}
          alt="Rotaract Logo"
          style={{ width: "170px", height: "auto" }}
        />
      </div>
      {volunteering.map((volunteer, index) => (
        <motion.div
          className="card"
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.3 }}
        >
          <h3 style={{ display: "flex", alignItems: "center" }}>
            {volunteer.role} at {volunteer.organization}
            {volunteer.linkedin && (
              <a
                href={volunteer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: "8px",
                  display: "inline-flex",
                  alignItems: "center",
                  color: "var(--accent-color)",
                }}
              >
                <FaLinkedin size={18} />
              </a>
            )}
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
