import React from "react";
import proj1 from "../assets/images/proj1.png";
import htmlIcon from "../assets/images/hmtl.png";
import cssIcon from "../assets/images/css.png";
import jsIcon from "../assets/images/js.png";
import nodeIcon from "../assets/images/node.png";
import sqlIcon from "../assets/images/sql.png";

function Projects() {
  return (
    <div className="projects">
      <h2>Here are some of my projects.</h2>
      <div className="proj1">
        <a
          href="https://www.youtube.com/watch?v=V_HpzKikzT0"
          target="_blank"
          rel="noreferrer"
        >
          <img id="video" src={proj1} alt="WatchNest" />
        </a>
        <p>WatchNest</p>
        <p>
          This is a full-stack web application that I made as a final project
          for a class in college. The technologies used are HTML/Handlebars,
          CSS, JS, Node.js, Express, MySQL.
        </p>
        <div className="icons">
          <img src={htmlIcon} alt="HTML" />
          <img src={cssIcon} alt="CSS" />
          <img src={jsIcon} alt="JavaScript" />
          <img src={nodeIcon} alt="Node.js" />
          <img src={sqlIcon} alt="MySQL" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
