import { experience, education } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="exp" aria-labelledby="exp-title">
      <h2 id="exp-title" className="big">
        Experience
      </h2>
      <ul className="jobs">
        {experience.map((j) => (
          <li key={`${j.company}-${j.when}`} className="job">
            <div className="job__who">
              <h3>
                {j.role}, {j.company}
              </h3>
              <p>
                {j.when}
                <br />
                {j.place}
              </p>
            </div>
            <ul className="job__points">
              {j.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className="edu">{education}</p>
    </section>
  );
}
