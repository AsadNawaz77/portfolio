import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section, div[id]");
    const handleActiveLink = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleActiveLink);
    return () => window.removeEventListener("scroll", handleActiveLink);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo"> Asad<span style={{ color: "#38bdf8" }}>Nawaz</span></div>

        {/* Desktop Menu */}
        <ul className="nav-items">
          <li
            className={activeSection === "home" ? "active" : ""}
            onClick={() => handleScroll("home")}
          >
            Home
          </li>
          <li
            className={activeSection === "About" ? "active" : ""}
            onClick={() => handleScroll("About")}
          >
            About
          </li>
          <li
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => handleScroll("projects")}
          >
            Projects
          </li>
          <li
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => handleScroll("contact")}
          >
            Contact
          </li>
        </ul>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <li
          className={activeSection === "home" ? "active" : ""}
          onClick={() => handleScroll("home")}
        >
          Home
        </li>
        <li
          className={activeSection === "About" ? "active" : ""}
          onClick={() => handleScroll("About")}
        >
          About
        </li>
        <li
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => handleScroll("projects")}
        >
          Projects
        </li>
        <li
          className={activeSection === "contact" ? "active" : ""}
          onClick={() => handleScroll("contact")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
