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

        /* BACKGROUND */
        background: {
          light: "#f8fafc",
          dark: "#0f1418",
        },

        /* CARD / SURFACE */
        surface: {
          light: "#ffffff",
          dark: "#141a1f",
        },

        /* PRIMARY BRAND COLOR */
        primary: "#20b2a6",

        /* TEXT COLORS */
        foreground: {
          light: "#0f1418",
          dark: "#f8fafc",
        },

        /* MUTED TEXT */
        muted: {
          light: "#475569",
          dark: "#7a8491",
        },

        /* BORDERS */
        border: {
          light: "#e5e7eb",
          dark: "#242b32",
        },
      },

      /* SHADOW EFFECT */
      boxShadow: {
        glow: "0 0 40px rgba(32,178,166,0.25)",
      },

      /* SMOOTH UI TRANSITIONS */
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

    },
  },

  plugins: [],
};