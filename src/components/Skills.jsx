import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="skills" aria-labelledby="skills-title">
      <h2 id="skills-title" className="big">
        Skills
      </h2>
      <dl className="skills__list">
        {skills.map((s) => (
          <div key={s.group} className="skills__item">
            <dt>{s.group}</dt>
            <dd>{s.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
