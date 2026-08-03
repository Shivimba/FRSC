import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import path from "path";

// Offline single-file preview build: everything inlined into one HTML file
// that works when opened directly from disk (file://). Uses hash-based routing.
export default defineConfig({
  base: "./",
  define: { "import.meta.env.VITE_HASH_ROUTER": JSON.stringify("1") },
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: { "@": path.resolve(import.meta.dirname, "src") },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist-preview"),
    emptyOutDir: true,
  },
});
