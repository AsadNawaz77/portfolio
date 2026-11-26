import { useEffect, useRef } from "react";

const REST = { wdth: 68, wght: 800 };
const COARSE = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
const PEAK = { wdth: COARSE ? 100 : 150, wght: 900 };
const SWEEP_MS = 2600;

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const smooth = (v) => v * v * (3 - 2 * v);

function setAxes(node, level) {
  const wdth = REST.wdth + (PEAK.wdth - REST.wdth) * level;
  const wght = REST.wght + (PEAK.wght - REST.wght) * level;
  node.style.fontVariationSettings = `"wdth" ${wdth.toFixed(1)}, "wght" ${wght.toFixed(0)}`;
}

/**
 * The name is set in a variable font. Each letter widens and thickens as the
 * pointer gets close. On load a single sweep runs through the letters, then
 * the pointer (or a finger) takes over.
 */
export default function KineticName({ lines }) {
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const chars = [...el.querySelectorAll("[data-ch]")];
    const level = chars.map(() => 0);
    chars.forEach((c) => setAxes(c, 0));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let pointer = null;
    let raf = 0;
    const start = performance.now();

    const tick = (now) => {
      raf = 0;
      const box = el.getBoundingClientRect();
      const size = parseFloat(getComputedStyle(el).fontSize);
      const reach = size * 0.9;
      const t = (now - start) / SWEEP_MS;
      const probes = [];
      if (pointer) probes.push(pointer);
      if (t < 1) {
        probes.push({
          x: box.left - size * 0.4 + (box.width + size * 0.8) * ease(t),
          y: box.top + box.height / 2,
        });
      }
      let moving = false;
      chars.forEach((c, i) => {
        const r = c.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        let target = 0;
        for (const p of probes) {
          const d = Math.hypot(p.x - cx, (p.y - cy) * 0.6);
          target = Math.max(target, smooth(Math.max(0, 1 - d / reach)));
        }
        const diff = target - level[i];
        if (Math.abs(diff) > 0.002) {
          level[i] += diff * 0.14;
          setAxes(c, level[i]);
          moving = true;
        }
      });
      if (moving || t < 1) raf = requestAnimationFrame(tick);
    };

    const wake = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onMove = (e) => {
      pointer = { x: e.clientX, y: e.clientY };
      wake();
    };
    const onRelease = (e) => {
      if (e.pointerType !== "mouse") {
        pointer = null;
        wake();
      }
    };
    const onLeave = () => {
      pointer = null;
      wake();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onMove, { passive: true });
    window.addEventListener("pointerup", onRelease, { passive: true });
    window.addEventListener("pointercancel", onRelease, { passive: true });
    window.addEventListener("scroll", wake, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    wake();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      window.removeEventListener("pointerup", onRelease);
      window.removeEventListener("pointercancel", onRelease);
      window.removeEventListener("scroll", wake);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <h1 ref={root} className="kname" aria-label={lines.join(" ")}>
      {lines.map((line) => (
        <span key={line} className="kname__line" aria-hidden="true">
          {[...line].map((ch, i) => (
            <span key={i} data-ch className="kname__ch">
              {ch}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
