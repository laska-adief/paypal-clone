/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#142c8e",
        "dodger-blue": "#1040c1",
        "light-gray": "#9da4a6",
        "muted-gray": "#eaeced",
      },
      padding: {
        form: "30px 30px 50px",
      },
      boxShadow: {
        "input-focus": "inset 0 0 0 .125rem #1040c1,0 0 0 .375rem rgba(16,114,235,.16),inset 0 0 0 1px #031954,0 0 0 1px #1040c1",
      },
    },
  },
  plugins: [],
};
