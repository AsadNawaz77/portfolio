/* Small line drawings of each product's interface. They draw themselves
   when a project row opens (see .sketch in index.css). */

let n = 0;
const D = (props) => {
  n += 1;
  return <g className="d" style={{ "--i": n }} {...props} />;
};

const R = (x, y, w, h, r = 3) => <rect x={x} y={y} width={w} height={h} rx={r} pathLength="1" />;
const L = (x1, y1, x2, y2) => <line x1={x1} y1={y1} x2={x2} y2={y2} pathLength="1" />;

const art = {
  pos: () => (
    <>
      {[0, 1, 2].flatMap((c) =>
        [0, 1].map((r) => <D key={`${c}${r}`}>{R(20 + c * 58, 24 + r * 70, 50, 62)}</D>)
      )}
      <D>{R(206, 24, 94, 132)}</D>
      {[44, 62, 80, 98].map((y) => (
        <D key={y}>{L(216, y, 290, y)}</D>
      ))}
      <D className="hot">{R(216, 126, 74, 20)}</D>
    </>
  ),
  school: () => (
    <>
      <D>{R(20, 20, 280, 26)}</D>
      {[64, 90, 116, 142, 168].map((y, i) => (
        <D key={y}>
          {L(20, y, 300, y)}
          {L(96, y - 18, 96, y)}
          {L(210, y - 18, 210, y)}
          {i === 2 && <rect className="hot" x="104" y={y - 14} width="60" height="10" pathLength="1" />}
        </D>
      ))}
    </>
  ),
  jobs: () => (
    <>
      {[20, 78, 136].map((y, i) => (
        <D key={y}>
          {R(20, y, 280, 48)}
          <circle cx="46" cy={y + 24} r="12" pathLength="1" />
          {L(70, y + 18, 190, y + 18)}
          {L(70, y + 32, 150, y + 32)}
          <rect className={i === 0 ? "hot" : ""} x="226" y={y + 15} width="56" height="18" rx="9" pathLength="1" />
        </D>
      ))}
    </>
  ),
  tasks: () => (
    <>
      {[2, 3, 2].map((count, c) => (
        <D key={c}>
          {R(20 + c * 94, 20, 86, 160)}
          {L(30 + c * 94, 38, 76 + c * 94, 38)}
          {Array.from({ length: count }, (_, k) => (
            <rect
              key={k}
              className={c === 1 && k === 1 ? "hot" : ""}
              x={28 + c * 94}
              y={50 + k * 40}
              width="70"
              height="32"
              rx="3"
              pathLength="1"
            />
          ))}
        </D>
      ))}
    </>
  ),
  floor: () => (
    <>
      <D>{R(24, 20, 272, 160, 2)}</D>
      <D>{L(150, 20, 150, 110)}</D>
      <D>{L(24, 110, 220, 110)}</D>
      <D>{L(220, 110, 220, 180)}</D>
      <D>{L(150, 60, 190, 60)}</D>
      <D>
        <path d="M96 110 A22 22 0 0 1 118 132" pathLength="1" />
        <path d="M220 150 A20 20 0 0 0 240 130" pathLength="1" />
      </D>
      <D className="hot">
        <circle cx="86" cy="64" r="9" pathLength="1" />
        <circle cx="250" cy="70" r="9" pathLength="1" />
      </D>
    </>
  ),
  steps: () => (
    <>
      <D>
        <path d="M24 170 C 90 170, 70 110, 140 110 S 210 50, 296 40" pathLength="1" strokeDasharray="1" />
      </D>
      {[
        [52, 168],
        [96, 146],
        [136, 112],
        [180, 92],
        [222, 62],
      ].map(([x, y], i) => (
        <D key={i}>
          <circle cx={x} cy={y} r="8" pathLength="1" />
        </D>
      ))}
      <D className="hot">
        <circle cx="272" cy="46" r="16" pathLength="1" />
        <circle cx="266" cy="42" r="2" pathLength="1" />
        <circle cx="278" cy="42" r="2" pathLength="1" />
      </D>
    </>
  ),
  voice: () => (
    <>
      {Array.from({ length: 22 }, (_, i) => {
        const h = 10 + Math.abs(Math.sin(i * 0.9)) * 52 + (i % 3) * 6;
        return (
          <D key={i} className={i === 11 ? "hot" : ""}>
            {L(26 + i * 12.5, 70 - h / 2, 26 + i * 12.5, 70 + h / 2)}
          </D>
        );
      })}
      {[116, 138, 160].map((y, i) => (
        <D key={y}>{L(26, y, i === 2 ? 190 : 294, y)}</D>
      ))}
    </>
  ),
  receipt: () => (
    <>
      <D>
        <path d="M30 20 H130 V176 L118 168 L106 176 L94 168 L82 176 L70 168 L58 176 L46 168 L30 176 Z" pathLength="1" />
      </D>
      {[44, 62, 80, 98, 116].map((y) => (
        <D key={y}>{L(44, y, 116, y)}</D>
      ))}
      <D>{L(150, 96, 190, 96)}</D>
      {[28, 76, 124].map((y, i) => (
        <D key={y} className={i === 1 ? "hot" : ""}>
          {R(200, y, 100, 36)}
        </D>
      ))}
    </>
  ),
  legal: () => (
    <>
      <D>{R(70, 14, 180, 172, 2)}</D>
      {[40, 58, 76, 94, 112].map((y, i) => (
        <D key={y}>{L(90, y, i === 4 ? 180 : 230, y)}</D>
      ))}
      <D className="hot">
        <path d="M92 156 q10 -24 20 0 t20 0 t20 -6 t22 6" pathLength="1" />
      </D>
    </>
  ),
  calendar: () => (
    <>
      <D>{R(20, 20, 280, 160)}</D>
      <D>{L(20, 48, 300, 48)}</D>
      {Array.from({ length: 21 }, (_, i) => {
        const c = i % 7;
        const r = Math.floor(i / 7);
        return (
          <D key={i} className={i === 9 ? "hot" : ""}>
            {R(30 + c * 38, 58 + r * 38, 28, 28, 4)}
          </D>
        );
      })}
    </>
  ),
  dash: () => (
    <>
      <D>{R(20, 20, 54, 160)}</D>
      {[40, 58, 76].map((y) => (
        <D key={y}>{L(30, y, 64, y)}</D>
      ))}
      {[0, 1, 2].map((c) => (
        <D key={c}>{R(88 + c * 76, 20, 68, 40)}</D>
      ))}
      {[78, 104, 130, 156].map((y, i) => (
        <D key={y} className={i === 2 ? "hot" : ""}>
          {R(88, y, 220, 20, 2)}
        </D>
      ))}
    </>
  ),
  logo: () => (
    <>
      <D>{R(20, 20, 180, 160)}</D>
      <D>
        <circle cx="110" cy="90" r="44" pathLength="1" />
        <path d="M84 104 L110 60 L136 104 Z" pathLength="1" />
      </D>
      <D className="hot">
        <circle cx="110" cy="90" r="14" pathLength="1" />
      </D>
      {[0, 1, 2, 3].map((i) => (
        <D key={i} className={i === 1 ? "hot" : ""}>
          <circle cx={226 + (i % 2) * 36} cy={40 + Math.floor(i / 2) * 36} r="12" pathLength="1" />
        </D>
      ))}
      {[124, 146, 168].map((y) => (
        <D key={y}>{L(216, y, 296, y)}</D>
      ))}
    </>
  ),
  store: () => (
    <>
      {[0, 1].flatMap((c) =>
        [0, 1].map((r) => (
          <D key={`${c}${r}`}>
            {R(20 + c * 100, 20 + r * 82, 92, 74)}
            {L(30 + c * 100, 80 + r * 82, 70 + c * 100, 80 + r * 82)}
          </D>
        ))
      )}
      <D>{R(228, 20, 72, 156)}</D>
      <D className="hot">{R(236, 142, 56, 24)}</D>
      {[40, 60, 80].map((y) => (
        <D key={y}>{L(238, y, 290, y)}</D>
      ))}
    </>
  ),
};

export default function Sketch({ kind, active }) {
  n = 0;
  const draw = art[kind] || art.tasks;
  return (
    <svg
      className={`sketch${active ? " sketch--on" : ""}`}
      viewBox="0 0 320 200"
      role="img"
      aria-label={`Line drawing of the ${kind} screen layout`}
    >
      {draw()}
    </svg>
  );
}
