import { useState } from "react";
import { projects } from "../data";
import Sketch from "./Sketch";

export default function Work() {
  const [open, setOpen] = useState(projects[0].id);

  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <h2 id="work-title" className="big">
        Work
      </h2>
      <ul className="rows">
        {projects.map((p) => {
          const isOpen = open === p.id;
          return (
            <li key={p.id} className={`row${isOpen ? " row--open" : ""}`}>
              <h3 className="row__head">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`panel-${p.id}`}
                  onClick={() => setOpen(isOpen ? null : p.id)}
                >
                  <span className="row__title">{p.title}</span>
                  <span className="row__kind">{p.kind}</span>
                </button>
              </h3>
              <div id={`panel-${p.id}`} className="panel" role="region" aria-label={p.title}>
                <div className="panel__inner">
                  <div className="panel__text">
                    <p>{p.description}</p>
                    <p className="panel__stack">{p.stack}</p>
                    {p.links && (
                      <ul className="panel__links">
                        {p.links.map((l) => (
                          <li key={l.href}>
                            <a href={l.href} target="_blank" rel="noopener noreferrer">
                              {l.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <Sketch kind={p.mock} active={isOpen} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
