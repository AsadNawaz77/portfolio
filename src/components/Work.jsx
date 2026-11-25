import { FiArrowUpRight } from "react-icons/fi";
import { featured, stores } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading id="work-title" eyebrow="Selected work" title="Things I've built" />
      <ul className="grid gap-4 sm:grid-cols-2">
        {featured.map((p, i) => (
          <li key={p.title}>
            <Reveal delay={i * 0.05} className="h-full">
              <article
                className="flex h-full flex-col rounded-2xl border p-6 transition-colors hover:border-[var(--accent)]"
                style={{ borderColor: "var(--line)", background: "var(--surface)" }}
              >
                <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--accent)" }}>
                  {p.tag}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {p.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-md px-2 py-1 text-xs"
                      style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium hover:underline"
                  >
                    {p.linkLabel} <FiArrowUpRight aria-hidden />
                  </a>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal className="mt-10">
        <h3 className="text-sm font-semibold">Shopify stores I built</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {stores.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm transition-colors hover:bg-[var(--accent-soft)]"
                style={{ borderColor: "var(--line)" }}
              >
                {s.name} <FiArrowUpRight aria-hidden size={14} />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm" style={{ color: "var(--muted)" }}>
          I also build internal dashboards and an AI personal assistant that schedules meetings and starts calls from
          calendar events. Details on request.
        </p>
      </Reveal>
    </section>
  );
}
