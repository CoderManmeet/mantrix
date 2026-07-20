/**
 * MANTRIX color system — Part 2 (Visual Language) of the spec.
 * Mirrors styles/tokens.css @theme values exactly.
 * Use these for non-CSS contexts (Canvas/SVG generation, Three.js materials, dynamic gradients).
 * For component styling, prefer Tailwind utility classes (bg-accent, text-secondary, etc.)
 * generated from the CSS tokens — do not import this file just to set a className color.
 */

export const COLORS = {
  black: "#0A0A0A",
  surface: "#111111",
  elevated: "#181818",
  border: "#262626",

  textPrimary: "#F5F5F5",
  textSecondary: "#A1A1AA",

  accent: "#00E5FF",
  accentHover: "#66F2FF",
  accentGlow: "rgba(0, 229, 255, 0.25)",

  success: "#22C55E",
  error: "#EF4444",
  warning: "#F59E0B",
} as const;

export type ColorToken = keyof typeof COLORS;