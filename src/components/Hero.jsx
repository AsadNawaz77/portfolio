import { FiArrowDownRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="mx-auto max-w-5xl px-5 pb-20 pt-20 sm:pt-28">
      <Reveal>
        <p
          className="mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium"
          style={{ borderColor: "var(--line)", color: "var(--muted)", background: "var(--surface)" }}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
          Open to remote roles
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 id="hero-title" className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
          {profile.name}
          <span className="block" style={{ color: "var(--muted)" }}>
            {profile.role}
          </span>
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl text-lg" style={{ color: "var(--muted)" }}>
          {profile.summary}
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={profile.cv}
            download
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--accent)" }}
          >
            <FiDownload aria-hidden /> Download CV
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--accent-soft)]"
            style={{ borderColor: "var(--line)" }}
          >
            See my work <FiArrowDownRight aria-hidden />
          </a>
          <div className="ml-1 flex items-center gap-1">
            {[
              { href: profile.github, label: "GitHub", Icon: FiGithub },
              { href: profile.linkedin, label: "LinkedIn", Icon: FiLinkedin },
              { href: `mailto:${profile.email}`, label: "Email", Icon: FiMail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-lg transition-colors hover:bg-[var(--accent-soft)]"
                style={{ color: "var(--muted)" }}
              >
                <Icon aria-hidden size={18} />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
