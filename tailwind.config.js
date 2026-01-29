/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#f8fafc",
          dark: "#0f1418",
        },
        surface: {
          light: "#ffffff",
          dark: "#141a1f",
        },
        primary: "#20b2a6",
        muted: {
          light: "#475569",
          dark: "#7a8491",
        },
        border: {
          light: "#e5e7eb",
          dark: "#242b32",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(32,178,166,0.25)",
      },
    },
  },
  plugins: [],
};
