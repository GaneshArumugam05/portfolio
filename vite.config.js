// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // 🔥 IMPORTANT: Must have trailing slash for GitHub Pages
  base: "/portfolio/",

  build: {
    outDir: "dist",          // Use default dist (recommended for Vite)
    sourcemap: false,        // Disable source maps in production
    minify: "esbuild",
    target: "esnext",

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "lucide-react",
      "framer-motion",
      "@emailjs/browser",
    ],
  },

  server: {
    port: 5173,
    open: true,
  },
});