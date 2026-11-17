type Star = { x: number; y: number; r: number; o: number };

/** Deterministic star field so the sky looks the same on every render. */
function buildStars(count: number): Star[] {
  let seed = 20260116;
  const rnd = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };

  return Array.from({ length: count }, () => {
    const y = rnd() * 520;
    return {
      x: rnd() * 1600,
      y,
      r: 0.5 + rnd() * 1.15,
      o: (0.18 + rnd() * 0.5) * Math.max(0, 1 - y / 560),
    };
  });
}

const STARS = buildStars(120);

export default function Stars() {
  return (
    <svg viewBox="0 0 1600 620" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="#F4EDDF">
        {STARS.map((s, i) => (
          <circle key={i} cx={s.x.toFixed(1)} cy={s.y.toFixed(1)} r={s.r.toFixed(2)} opacity={s.o.toFixed(2)} />
        ))}
      </g>
    </svg>
  );
}
