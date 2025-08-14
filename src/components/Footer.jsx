import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="footer-logo">
            Asad<span>Nawaz</span>
          </h2>
          <p>
            Front-End Developer passionate about creating modern, user-friendly,
            and high-performance web applications.
          </p>
        </div>

        {/* Center Links */}
        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
            <li className="link" onClick={() => handleScroll("home")}>
              Home
            </li>
            <li className="link" onClick={() => handleScroll("About")}>
              About
            </li>
            <li className="link" onClick={() => handleScroll("projects")}>
              Projects
            </li>
            <li className="link" onClick={() => handleScroll("contact")}>
              Contact
            </li>
          </ul>
        </div>

        {/* Right Socials */}
        <div className="footer-right">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a
              href="https://github.com/AsadNawaZ77"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/asad-nawaz-509747248/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Asad Nawaz. All Rights Reserved.</p>
        <button className="scroll-top" onClick={handleScrollTop}>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
