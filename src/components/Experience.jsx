import { experience, education } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading id="exp-title" eyebrow="Experience" title="Where I've worked" />
      <ol className="space-y-10 border-l pl-6" style={{ borderColor: "var(--line)" }}>
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative">
            <span
              aria-hidden
              className="absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-semibold">
                  {job.role} <span style={{ color: "var(--muted)" }}>· {job.company}</span>
                </h3>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  {job.period}
                </p>
              </div>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                {job.place}, Pakistan
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
      <Reveal className="mt-10">
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Education: <span style={{ color: "var(--text)" }}>{education.degree}</span>, {education.school} (
          {education.period})
        </p>
      </Reveal>
    </section>
  );
}
