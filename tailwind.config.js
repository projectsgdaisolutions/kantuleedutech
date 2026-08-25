/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      /* ========================================
         KANTULE EDUTECH BRAND COLORS
      ======================================== */

      colors: {
        kantule: {
          navy: "#0B2D5C",
          blue: "#1455A0",
          cyan: "#18B8D4",
          light: "#F4FAFD",
          white: "#FFFFFF",
        },
      },

      /* ========================================
         GLOBAL WEBSITE FONT
      ======================================== */

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      /* ========================================
         BORDER RADIUS
      ======================================== */

      borderRadius: {
        "kantule": "14px",
      },

      /* ========================================
         BOX SHADOWS
      ======================================== */

      boxShadow: {
        "kantule": "0 10px 30px rgba(11, 45, 92, 0.08)",
        "kantule-lg": "0 20px 50px rgba(11, 45, 92, 0.12)",
      },

    },
  },

  plugins: [],
};