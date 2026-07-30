import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Cloudflare/vinext leftovers, excluded from the Next.js build.
    "db/**",
    "examples/**",
    "scripts/**",
    "tests/**",
    "vite.config.ts",
    "worker/**",
  ]),
]);

export default eslintConfig;
