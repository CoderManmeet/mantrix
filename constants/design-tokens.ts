/**
 * MANTRIX structural + spacing tokens — Part 2 & Part 5 of the spec.
 * Tailwind v4's spacing scale is generative (multiples of 4px), so the
 * 8pt grid is already the only "easy path" by default. ALLOWED_SPACING
 * below exists for documentation/lint-discipline, not enforcement —
 * flag any `p-[Npx]` arbitrary value in review that isn't on this list.
 */

export const ALLOWED_SPACING = [
  4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120, 160,
] as const;

export const RADIUS = {
  sm: "0.75rem", // 12px
  md: "1.125rem", // 18px
  lg: "1.5rem", // 24px
  card: "1.75rem", // 28px
  pill: "999px",
} as const;

export const CONTAINER = {
  width: "1400px",
  content: "1280px",
  reading: "720px",
} as const;

export const GRID_COLUMNS = {
  desktop: 12,
  tablet: 8,
  mobile: 4,
} as const;

export const Z_INDEX = {
  base: 0,
  nav: 100,
  cursor: 200,
  loader: 300,
  modal: 400,
  toast: 500,
} as const;

export type SpacingToken = (typeof ALLOWED_SPACING)[number];
export type RadiusToken = keyof typeof RADIUS;