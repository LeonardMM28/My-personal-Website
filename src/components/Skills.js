import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        "JavaScript",
        "Python",
        "Java",
        "TypeScript",
        "C++",
        "HTML5",
        "CSS3",
        "SQL",
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        "React.js",
        "Next.js",
        "Angular",
        "HTML5",
        "CSS3",
        "SASS/SCSS",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
        "UI/UX Design Principles",
      ],
    },
    {
      category: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful API Design",
        "Authentication & Authorization",
      ],
    },
    {
      category: "Databases",
      skills: [
        "MySQL",
        "MongoDB",
        "AWS DynamoDB",
        "SQLite",
      ],
    },
    {
      category: "Cloud Services",
      skills: [
        "AWS EC2",
        "AWS S3",
        "AWS RDS",
        "AWS DynamoDB",
        "AWS CloudFront",
        "AWS Route 53",
        "AWS Lambda",
        "AWS SNS",
        "AWS SQS",
        "AWS SES",
        "Google Cloud Platform (GCP)",
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        "Git & GitHub",
        "CI/CD Pipelines",
        "Docker",
        "Kubernetes",
        "Webpack",
        "Prettier",
      ],
    },
    {
      category: "API Integration & Management",
      skills: [
        "RESTful APIs",
        "API Documentation",
        "Postman",
        "API Security",
      ],
    },
    {
      category: "AI & Machine Learning",
      skills: [
        "Machine Learning Algorithms",
        "TensorFlow",
        "MathLab",
        "AI Model Deployment",
      ],
    },
    {
      category: "Project Management",
      skills: [
        "Agile Methodologies",
        "Scrum",
        "JIRA",
        "Project Planning",
        "Resource Allocation",
        "Risk Management",
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        "Leadership",
        "Team Collaboration",
        "Effective Communication",
        "Problem-Solving",
        "Time Management",
        "Adaptability",
        "Critical Thinking",
        "Mentoring & Coaching",
        "Public Speaking",
        "Conflict Resolution",
      ],
    },
    {
      category: "Entrepreneurship",
      skills: [
        "Business Strategy",
        "Startup Development",
        "Market Research",
        "Product Development",
        "Fundraising",
        "Financial Planning",
        "Branding",
        "Customer Acquisition",
        "Scaling Businesses",
      ],
    },
    {
      category: "Community Engagement",
      skills: [
        "Volunteer Coordination",
        "Event Planning",
        "Public Relations",
        "Cultural Exchange Programs",
        "Educational Workshops",
        "Community Outreach",
        "Social Impact Initiatives",
      ],
    },
    {
      category: "Other Technologies & Tools",
      skills: [
        "EmailJS",
        "Figma",
        "Adobe",
        "Photoshop",
        "Slack",
        "Microsoft Office Suite",
        "Google Workspace",
        "Notion",
      ],
    },
    {
      category: "Spoken Languages",
      skills: [
        "English (Fluent)",
        "Spanish (Native)",
        "Mandarin Chinese (Conversational)",
        "Portuguese (Basic)",
        "Italian (Basic)",
      ],
    },
  ];

  return (
    <section className="skills-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="skills-title"
      >
        Skills (Varying Proficiency)
      </motion.h2>
      <motion.div
        className="skills-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            className="skill-category"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 * index }}
          >
            <h3 className="category-title">{category.category}</h3>
            <ul className="skills-list">
              {category.skills.map((skill, idx) => (
                <motion.li
                  key={idx}
                  className="skill-item"
                  whileHover={{ scale: 1.05}}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
