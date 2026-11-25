import Reveal from "./Reveal";

export default function SectionHeading({ id, eyebrow, title }) {
  return (
    <Reveal className="mb-8">
      <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--accent)" }}>
        {eyebrow}
      </p>
      <h2 id={id} className="mt-1 text-3xl font-bold tracking-tight">
        {title}
      </h2>
    </Reveal>
  );
}
