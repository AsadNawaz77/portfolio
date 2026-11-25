import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-5xl px-5 py-20">
      <Reveal>
        <div
          className="rounded-3xl border p-8 sm:p-12"
          style={{ borderColor: "var(--line)", background: "var(--surface)" }}
        >
          <h2 id="contact-title" className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
            Let's work together
          </h2>
          <p className="mt-3 max-w-xl" style={{ color: "var(--muted)" }}>
            I'm looking for a remote React or React Native role. The quickest way to reach me is email.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--accent)" }}
            >
              <FiMail aria-hidden /> {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--accent-soft)]"
              style={{ borderColor: "var(--line)" }}
            >
              <FiLinkedin aria-hidden /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--accent-soft)]"
              style={{ borderColor: "var(--line)" }}
            >
              <FiGithub aria-hidden /> GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
