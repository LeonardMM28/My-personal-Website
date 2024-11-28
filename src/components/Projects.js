import React from "react";
import { motion } from "framer-motion";
import proj1 from "../assets/images/proj1.png";
import htmlIcon from "../assets/images/hmtl.png"; // Ensure correct spelling: html.png
import cssIcon from "../assets/images/css.png";
import jsIcon from "../assets/images/js.png";
import nodeIcon from "../assets/images/node.png";
import sqlIcon from "../assets/images/sql.png";

function Projects() {
  const projects = [
    {
      title: "WatchNest",
      description:
        "A full-stack web application developed as a college project.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
      link: "https://www.youtube.com/watch?v=V_HpzKikzT0",
      image: proj1,
    },
    // Add more projects here
  ];

  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>
      {projects.map((project, index) => (
        <motion.div
          className="card"
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.3 }}
        >
          <a href={project.link} target="_blank" rel="noreferrer">
            <img src={project.image} alt={project.title} />
          </a>
          <h3>
            <a href={project.link} target="_blank" rel="noreferrer">
              {project.title}
            </a>
          </h3>
          <p>{project.description}</p>
          <p>
            <strong>Technologies:</strong> {project.technologies.join(", ")}
          </p>
          <div className="icons">
            {project.technologies.map((tech, idx) => {
              let iconSrc;
              switch (tech) {
                case "HTML":
                  iconSrc = htmlIcon;
                  break;
                case "CSS":
                  iconSrc = cssIcon;
                  break;
                case "JavaScript":
                  iconSrc = jsIcon;
                  break;
                case "Node.js":
                  iconSrc = nodeIcon;
                  break;
                case "MySQL":
                  iconSrc = sqlIcon;
                  break;
                default:
                  iconSrc = "";
              }
              return iconSrc ? (
                <img key={idx} src={iconSrc} alt={tech} title={tech} />
              ) : null;
            })}
          </div>
        </motion.div>
      ))}
    </section>
  );
}

export default Projects;
