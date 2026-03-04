// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // ✅ IMPORTANT for Vercel (NOT GitHub Pages)
  base: "/",

  build: {
    outDir: "dist",
    sourcemap: false,
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