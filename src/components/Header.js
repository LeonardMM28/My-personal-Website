// src/components/Header.js

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUserTie,
  FaProjectDiagram,
  FaGraduationCap,
  FaHandsHelping,
  FaBrain,
  FaCogs,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";

function Header() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  // On component mount, check for saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { path: "/", name: "Home", icon: <FaHome /> },
    {
      path: "/professional-experience",
      name: "Experience",
      icon: <FaUserTie />,
    },
    { path: "/projects", name: "Projects", icon: <FaProjectDiagram /> },
    { path: "/education", name: "Education", icon: <FaGraduationCap /> },
    { path: "/volunteering", name: "Volunteering", icon: <FaHandsHelping /> },
    { path: "/philosophy", name: "Philosophy", icon: <FaBrain /> },
    { path: "/skills", name: "Skills", icon: <FaCogs /> },
    { path: "/contact", name: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <header>
      <h1>Leonardo Meza Martinez</h1>
      <nav>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={location.pathname === link.path ? "active" : ""}
          >
            {link.icon} {link.name}
          </Link>
        ))}
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="theme-toggle"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
}

export default Header;
