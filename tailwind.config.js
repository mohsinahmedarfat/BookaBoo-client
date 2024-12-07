// tailwind.config.js
import daisyui from "daisyui"; // Use ES module import

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // Use the imported daisyui plugin
};
