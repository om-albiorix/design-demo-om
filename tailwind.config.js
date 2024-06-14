/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "common-bg": "rgb(78,84,111)",
      },
    },
  },
  plugins: [],
};
