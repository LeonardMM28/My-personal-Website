import React, { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FaBrain,
  FaCogs,
  FaEnvelope,
  FaGraduationCap,
  FaHandsHelping,
  FaHome,
  FaMoon,
  FaProjectDiagram,
  FaSun,
  FaTimes,
  FaUserTie,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);
  const menuBtnRef = useRef(null);
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
  // Close mobile menu when clicking outside of nav or hamburger button
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        mobileOpen &&
        navRef.current &&
        !navRef.current.contains(e.target) &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

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
      <h1>Welcome to my Bio</h1>

      {/* Mobile Menu Button */}
      <button
        ref={menuBtnRef}
        className={`mobile-menu-btn ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav ref={navRef} className={mobileOpen ? "open" : ""}>
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
          className="theme-toggle-btn"
          aria-label="Switch mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />} Switch Mode
        </button>
      </nav>
    </header>
  );
}
