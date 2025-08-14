import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Hero.css";
import {
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";
const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-left", {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".hero-right", {
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });
      gsap.from(".float-icon", {
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
        stagger: 0.3,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };
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
  return (
    <section ref={heroRef} className="hero-container" id="home">
      {/* Left side */}
      <div className="hero-left">
        <div className="glass-card">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Asad</span> <br />
            <span className="role">Frontend Web Developer</span>
          </h1>
          <p className="hero-desc">
            I design and build responsive, modern, and engaging web applications
            with stunning UI and smooth animations.
          </p>
          <li onClick={() => handleScroll("contact")} className="hero-btn">
            Let’s Work Together →
          </li>
        </div>
      </div>

      {/* Right side */}
      <div className="hero-right">
        {tech.map((t, i) => (
          <div
            key={i}
            className="tech-icon icon float-icon"
            style={{ "--hover-color": t.color }}
            title={t.name}
          >
            {t.icon}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
