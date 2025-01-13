/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "screen-max-4": { max: "400px" },
        "screen-max-6": { max: "600px" },
        "screen-max-7": { max: "700px" },
        "screen-max-9": { max: "900px" },
        "screen-max-12": { max: "1200px" },
        "screen-max-14": { max: "1400px" },
      },
    },
  },
  plugins: [],
};
