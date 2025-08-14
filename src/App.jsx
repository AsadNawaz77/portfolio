import { useState } from "react";

import Navbar from "./components/Navbar";
import "./index.css";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ConnectedBackground from "./components/ConnectedBackground";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import {
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";
import Footer from "./components/Footer";
function App() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cards = [
    {
      id: 1,
      h3: "Expense Tracker App – Expenzo",
      img: "/asad.png",
      content:
        "Expenzo is a smart expense tracking app built with React Native, Laravel, and MySQL. It helps users manage budgets, record transactions, and visualize spending patterns with features like receipt scanning, voice input, and category-based insights.",
      icons: ["/react.png", "/laravel.png", "/mysql.png"],
      // links: "https://www.everydaysuperheroescoaching.com/",
    },
    {
      id: 2,
      h3: "School Mentor",
      img: "/school.png",
      content:
        "Worked on the frontend of School Mentor using React. Collaborated on building a platform that connects students with mentors, helping schools streamline mentorship and career guidance programs.",
      icons: ["/react.png", "/technology.png"],
      links: "https://theschoolmentor.online/",
    },
    {
      id: 3,
      h3: "Empower Solano – Thinkific Platform",
      img: "/2.png",
      content:
        "Built and customized a full online learning platform for Empower Solano using Thinkific. Integrated custom HTML, CSS, JS, and Liquid to enhance design and functionality, supporting community skill-building initiatives.",
      icons: [
        "https://cdn.prod.website-files.com/64be309a0c8ae7454454fcef/653932043d90a3fa696fd68a_liquid-logo-text.png",
        "/html.png",
        "/css-3.png",
        // "/js.png",
        "https://www.fahimai.com/wp-content/uploads/2025/02/CTA.png",
      ],
      links:
        "https://empowersolano.thinkific.com/courses/small-business-accelerator",
    },
    {
      id: 4,
      h3: "Mindify",
      img: "/Mindify.png",
      content:
        "Developed Mindify using HTML, CSS, and JavaScript, focusing on an intuitive user interface and smooth interactions for a better user experience.",
      icons: ["/html.png", "/css-3.png", "/js.png"],
    },
    {
      id: 5,
      h3: "Everyday Superheroes Academy",
      img: "/Empower.png",
      content:
        "Created a Wix-based coaching website with custom JavaScript sections to enhance interactivity. Designed to highlight coaching programs and client success stories.",
      icons: ["/wix.png", "/js.png"],
      links: "https://www.everydaysuperheroescoaching.com/",
    },
    {
      id: 6,
      h3: "America IPTV HD",
      img: "/america.png",
      content:
        "Developed America IPTV HD using React, Node.js, and MySQL. The platform streams high-definition IPTV content with a smooth and responsive UI.",
      icons: ["/react.png", "/nodejs.png", "/mysql.png"],
      links: "https://americaiptvhd.com/",
    },
  ];
  const tech = [
    { icon: <FaNodeJs />, name: "Node.js", color: "#68A063" },
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <FaReact />, name: "React Native", color: "#61DAFB" },
    { icon: <FaBootstrap />, name: "Bootstrap", color: "#7952B3" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#38BDF8" },
    { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
    { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
    { icon: <FaJsSquare />, name: "JavaScript", color: "#F7DF1E" },
  ];
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };
  return (
    <>
      <ConnectedBackground
        density={14000}
        maxDistance={160}
        particleSpeed={0.3}
        pointSize={3.2}
        lineColor="#66f0ff"
      />
      <Navbar />
      <Hero />

      <Projects projects={cards} />

      <section className="About" id="About" aria-label="About Asad Nawaz">
        <div className="about-card">
          {/* Ambient accents */}
          <span
            className="about-accent about-accent--a"
            aria-hidden="true"
          ></span>
          <span
            className="about-accent about-accent--b"
            aria-hidden="true"
          ></span>

          <div className="about-grid">
            {/* Text */}
            <div className="about-content">
              <span className="about-eyebrow">About Me</span>
              <h2 className="about-title">
                Hi, I’m <strong>Asad Nawaz</strong> — a
                <span className="title-underline"> Front-End Developer</span>
              </h2>

              <p className="about-intro">
                I build responsive, user-friendly, and pixel-perfect web apps
                with
                <strong> React.js</strong>, modern{" "}
                <strong>JavaScript (ES6+)</strong>, and UI/UX best practices.
                I’m finishing my
                <strong> BScs in Computer Science</strong> (2025) and love
                turning crisp Figma files into delightful, accessible
                interfaces.
              </p>

              <ul className="about-bullets" role="list">
                <li>
                  Front-End Dev at a startup — converted
                  <strong> Figma designs into functional CMS websites</strong>.
                </li>
                <li>
                  React internship — strengthened component architecture, API
                  integration, and state management.
                </li>
                <li>
                  Teaching Assistant (Programming Fundamentals) — mentored
                  students on core concepts.
                </li>
              </ul>

              <p className="about-more">
                Currently exploring <strong>React Native</strong> for
                cross-platform apps. I’m obsessed with crafting intuitive,
                high-quality digital experiences that solve real problems.
              </p>

              <div className="about-cta">
                <li
                  className="btn btn--primary"
                  onClick={() => handleScroll("contact")}
                  style={{ cursor: "pointer" }}
                >
                  Let’s Work Together
                </li>
                <a
                  className="btn btn--ghost"
                  href="/AsadNawaz-CV.pdf"
                  download="AsadNawaz-CV.pdf"
                >
                  Download CV
                </a>
              </div>

              <div className="tech-icons">
                {tech.map((t, i) => (
                  <div
                    key={i}
                    className="tech-icon"
                    style={{ "--hover-color": t.color }}
                    title={t.name}
                  >
                    {t.icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Portrait */}
            <figure className="about-portrait">
              <div className="portrait-ring" aria-hidden="true"></div>
              <img
                src="/profile.png"
                alt="Portrait of Asad Nawaz"
                loading="eager"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>

      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
