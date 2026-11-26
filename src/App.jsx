import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <Skills />
      </main>
      <Contact />
    </>
  );
}
