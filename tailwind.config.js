/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0544b5",
        "dodger-blue": "#097ff5",
        "light-gray": "#9da4a6",
      },
    },
  },
  plugins: [],
};
