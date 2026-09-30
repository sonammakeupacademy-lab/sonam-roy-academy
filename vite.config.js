import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// Packages every page needs on first load. Everything else (react-markdown,
// remark/unified, supabase-js, ...) is left to Rollup, so it only downloads
// on the pages that import it (the blog pages).
const CORE_PACKAGES = [
  "react",
  "react-dom",
  "scheduler",
  "react-router",
  "react-router-dom",
  "@remix-run/router",
  "react-helmet-async",
  "react-fast-compare",
  "invariant",
  "shallowequal",
  "prop-types",
  "react-is",
  "object-assign",
  "loose-envify",
  "js-tokens",
  "@babel/runtime",
];

const isCore = (id) =>
  CORE_PACKAGES.some((name) => id.includes(`/node_modules/${name}/`));

export default defineConfig({
  plugins: [
    react(),

    process.env.ANALYZE &&
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
        filename: "dist/stats.html",
      }),
  ].filter(Boolean),

  server: {
    host: "0.0.0.0",
    port: 5174,
  },

  build: {
    target: "es2020",
    minify: "esbuild",
    sourcemap: false,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 700,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (id.includes("/node_modules/react-icons/")) return "icons";

          if (isCore(id)) return "vendor";
        },
      },
    },
  },
});