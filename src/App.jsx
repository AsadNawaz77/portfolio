import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { profile } from "./data";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t py-8 text-center text-sm" style={{ borderColor: "var(--line)", color: "var(--muted)" }}>
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
