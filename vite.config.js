import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

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

       if (id.includes("react-icons")) {
       return "icons";
      }

      return "vendor";
      }
      },
    },
  },
});