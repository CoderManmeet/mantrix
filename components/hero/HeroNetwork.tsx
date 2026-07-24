const NODES: [number, number][] = [
  [420, 90],
  [540, 60],
  [600, 180],
  [520, 260],
  [610, 340],
  [460, 400],
  [560, 480],
  [400, 520],
  [340, 340],
  [300, 200],
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [3, 5],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 0],
  [3, 9],
  [5, 8],
];

/**
 * Spec (Hero > Background): "Digital Network" — distinct from the 6 global
 * Background.tsx layers (Part 2 BACKGROUND SYSTEM), scoped to the hero only.
 * Static positions for Stage 07. Stage 08 draws these lines in via GSAP
 * (spec HERO CHOREOGRAPHY: "Digital network draws") and adds subtle drift.
 * Hidden below lg — spec: "No distracting particles," so on small screens
 * where it'd compete with the headline, it's simplest to omit it entirely.
 *
 * Opacity reduced from 40 to 25 in the Portrait integration pass so the
 * network reads as sitting behind the portrait rather than competing with
 * it — nodes and lines remain visible around the portrait's silhouette,
 * per spec "network should remain visible behind and partially around."
 */
export function HeroNetwork() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 640 640"
      className="absolute right-0 top-0 hidden h-full w-[45%] opacity-25 lg:block"
      preserveAspectRatio="xMidYMid slice"
    >
      {EDGES.map(([a, b], index) => {
        const from = NODES[a];
        const to = NODES[b];
        if (!from || !to) return null;
        const [x1, y1] = from;
        const [x2, y2] = to;
        return (
          <line
            key={index}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--color-border)"
            strokeWidth={1}
          />
        );
      })}

      {NODES.map(([x, y], index) => (
        <circle
          key={index}
          cx={x}
          cy={y}
          r={index % 3 === 0 ? 4 : 2.5}
          fill={index % 3 === 0 ? "var(--color-accent)" : "var(--color-text-secondary)"}
          opacity={index % 3 === 0 ? 0.9 : 0.5}
        />
      ))}
    </svg>
  );
}