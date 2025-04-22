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
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Load saved theme
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  const navLinks = [
    { path: "/", label: "Home", icon: <FaHome /> },
    {
      path: "/professional-experience",
      label: "Experience",
      icon: <FaUserTie />,
    },
    { path: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
    { path: "/education", label: "Education", icon: <FaGraduationCap /> },
    { path: "/volunteering", label: "Volunteering", icon: <FaHandsHelping /> },
    { path: "/philosophy", label: "Philosophy", icon: <FaBrain /> },
    { path: "/skills", label: "Skills", icon: <FaCogs /> },
    { path: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <header>
      <h1>Leonardo Meza Martinez</h1>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={mobileOpen ? "open" : ""}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={location.pathname === link.path ? "active" : ""}
            onClick={() => setMobileOpen(false)}
          >
            {link.icon} {link.label}
          </Link>
        ))}
        <button
          onClick={toggleDarkMode}
          className="theme-toggle"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
}
