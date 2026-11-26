import KineticName from "./KineticName";
import { profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="hero" aria-label="Introduction">
      <p className="hero__status">{profile.status}</p>
      <KineticName lines={["Asad", "Nawaz"]} />
      <div className="hero__foot">
        <p className="hero__pitch">{profile.pitch}</p>
        <div className="hero__actions">
          <a className="btn" href={profile.cv} download>
            Download CV
          </a>
          <a className="link" href={`mailto:${profile.email}`}>
            Email
          </a>
          <a className="link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="link" href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
