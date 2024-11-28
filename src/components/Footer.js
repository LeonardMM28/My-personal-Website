import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <p>Connect with me:</p>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/yourprofile"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook size={30} color="var(--primary-text)" />
        </a>
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={30} color="var(--primary-text)" />
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={30} color="var(--primary-text)" />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Leonardo Meza Martinez</p>
    </footer>
  );
}

export default Footer;
