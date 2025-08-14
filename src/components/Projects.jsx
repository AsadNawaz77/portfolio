import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Projects.css";
import { loadSlim } from "tsparticles-slim";

const Projects = ({ projects = [] }) => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  // Visible, lively particles config
  const particlesOptions = {
    fullScreen: { enable: false }, // we render inside the section, not full screen
    background: { color: "transparent" },
    detectRetina: true,
    fpsLimit: 60,
    particles: {
      number: { value: 70, density: { enable: true, area: 900 } },
      color: { value: ["#00ffcc", "#67e8f9", "#8b5cf6"] },
      shape: { type: "circle" },
      opacity: {
        value: 0.75,
        random: { enable: true, minimumValue: 0.3 },
        animation: { enable: true, speed: 0.6, minimumValue: 0.2, sync: false },
      },
      size: { value: { min: 1.5, max: 4.0 } },
      links: {
        enable: true,
        distance: 140,
        color: "#00ffcc",
        opacity: 0.18,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.9,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.35 } },
        push: { quantity: 4 },
      },
    },
  };

  return (
    <section className="projects-section" id="projects">
      {/* Particles canvas sits above the CSS gradient, below the content */}
      <div className="particles-wrap" aria-hidden="true">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
        />
      </div>

      {/* Soft animated gradient blob (kept behind canvas) */}
      <div className="animated-blob" aria-hidden="true" />

      {/* Header */}
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Featured Projects</h2>
        <p>Interactive, responsive, and built with passion.</p>
      </motion.div>

      {/* Cards */}
      <div className="projects-wrapper">
        {projects.map((project, index) => (
          <motion.div
            key={project.id ?? index}
            initial={{ opacity: 0, scale: 0.95, y: 18 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.12 }}
            className="motion-card"
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.18}
              scale={1.03}
              transitionSpeed={700}
              className="tilt-card"
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={900}
            >
              <article className="project-card">
                <div className="project-media">
                  <img
                    src={project.img}
                    alt={project.h3 || project.title || `project-${index}`}
                  />
                </div>

                <div className="card-content">
                  <h3>{project.h3}</h3>
                  <p>{project.content}</p>

                  <div className="card-row">
                    <div className="tech-row">
                      {(project.icons || []).slice(0, 5).map((s, i) => (
                        <img
                          key={i}
                          src={s}
                          alt={`tech-${i}`}
                          className="tech-s"
                        />
                      ))}
                    </div>
                    <a
                      className="view-btn"
                      href={project.links || project.repo || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
