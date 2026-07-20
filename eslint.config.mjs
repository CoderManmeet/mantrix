import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "out/**", "build/**"],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];

export default eslintConfig;