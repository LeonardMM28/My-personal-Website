import React from "react";
import { motion } from "framer-motion";
import proj1 from "../assets/images/proj1.png";
import proj2 from "../assets/images/proj2.png";
import proj3 from "../assets/images/proj3.png";

function Projects() {
  const projects = [
    {
      title: "BlueCorgi Platform",
      description: `
        BlueCorgi is a globally accessible web platform offering a suite of AI-powered tools 
        to users across various industries. With a focus on scalability and multilingual 
        support, the platform caters to over 100 languages and utilizes cutting-edge AI 
        technologies. As the co-founder, I led the development of a secure and scalable 
        infrastructure, leveraging a wide array of AWS services such as EC2, S3, RDS, and 
        DynamoDB. This platform is built to provide seamless user experiences with robust 
        backend systems, making it suitable for high-traffic environments. 
        Public launch and broader testing are scheduled for late 2024. (Developed as public production project)
      `,
      technologies: [
        "React.js",
        "Node.js",
        "Python",
        "JavaScript",
        "AWS (EC2, CloudFront, Route 53, S3, RDS, DynamoDB, Lambda, SNS, SQS, SES)",
      ],
      link: "https://bluecorgi.com",
      image: proj2,
    },
    {
      title: "SFSU Inventory Management Web App",
      description: `
        This multi-tiered web application was developed to streamline inventory tracking and 
        logistics for San Francisco State University's summer orientation programs. The app 
        features a robust database to manage internal inventory, schedules, and student booking 
        details. Fully integrated with AWS, it utilizes EC2 for hosting, S3 for static file storage, 
        DynamoDB for some non-relational data, CloudFront for content delivery, and Route 53 
        for DNS management. By automating previously manual processes, this tool significantly 
        improved efficiency and resource management for events hosting over 2,000 students. 
        I led the development of both the frontend (React.js) and backend (Node.js and MySQL), 
        ensuring a seamless and reliable experience for users. (Developed as public production project)
      `,
      technologies: [
        "React.js",
        "Node.js",
        "MySQL",
        "JavaScript",
        "AWS (EC2, CloudFront, Route 53, S3, DynamoDB)",
      ],
      link: "https://sfsulogistics.online/",
      image: proj3,
    },
    {
      title: "WatchNest",
      description: `
        WatchNest is a full-stack web application designed to operate as a video-sharing platform, 
        similar in concept to YouTube. It allows users to watch videos uploaded by others while 
        offering account creation capabilities for users to upload their own content. The system 
        supports user authentication, video uploads, and playback functionality at scale. I was 
        responsible for implementing a responsive user interface using HTML, CSS, and JavaScript, 
        as well as building robust backend API management with Node.js and MySQL to handle video storage, 
        retrieval, and user management. The project demonstrated scalability and interactivity, 
        making it a dynamic platform for user-generated content. (Only developed as local project)
      `,
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
      link: "https://www.youtube.com/watch?v=V_HpzKikzT0",
      image: proj1,
    },
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
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={project.image}
                alt={project.title}
                style={{ marginBottom: "1rem" }}
              />
            </a>
          ) : null}
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>
            <strong>Technologies:</strong> {project.technologies.join(", ")}
          </p>
        </motion.div>
      ))}
    </section>
  );
}

export default Projects;
