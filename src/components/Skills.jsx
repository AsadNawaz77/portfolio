import { skills } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading id="skills-title" eyebrow="Skills" title="What I work with" />
      <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.03}>
            <dt className="text-sm font-semibold">{g.group}</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-md border px-2.5 py-1 text-sm"
                  style={{ borderColor: "var(--line)", background: "var(--surface)" }}
                >
                  {s}
                </span>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
