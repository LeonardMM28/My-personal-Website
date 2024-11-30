import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <p>Connect with me:</p>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/people/Leonard-Meza-Mart%C3%ADnez/pfbid0izxsEQ9JEGNvMLjWgDajC1ftssC1vnZXY4tkG7a6m85GxSws3MxjtqAACNXDsTHNl/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook size={30} color="var(--primary-text)" />
        </a>
        <a
          href="https://www.instagram.com/leonardmezamtz/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={30} color="var(--primary-text)" />
        </a>
        <a
          href="https://www.linkedin.com/in/leonardo-meza-martinez-168342100/"
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
