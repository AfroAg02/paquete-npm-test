import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  external: ["react", "react-dom", "next"],
  banner: {
    js: '"use client";',
  },
  injectStyle: true,
  target: "es2020",
  platform: "browser",
});
