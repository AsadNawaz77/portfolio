import { profile } from "../data";

export default function Contact() {
  return (
    <footer id="contact" className="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="contact__lead">
        Looking for a React or React Native developer?
      </h2>
      <a className="contact__mail" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <div className="contact__row">
        <a className="btn" href={profile.cv} download>
          Download CV
        </a>
        <a className="link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a className="link" href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
      <p className="contact__fine">
        {profile.name}, {new Date().getFullYear()}
      </p>
    </footer>
  );
}
