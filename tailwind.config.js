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
        link: "#1072eb",
        separator: "#cbd2d6",
        "dark-gray": "#6c7378",
        error: "#545d68",
        "input-border-error": "#d9360b",
        "light-error": "#fff7f7",
        "link-hovered": "#d1f1ff33",
        "link-active": "#d1f1ff1a",
        placeholder: "#001435",
      },
      padding: {
        form: "30px 40px 50px",
      },
      boxShadow: {
        "input-focus": "inset 0 0 0 .125rem #1040c1,0 0 0 .375rem rgba(16,114,235,.16),inset 0 0 0 1px #031954,0 0 0 1px #1040c1",
        "input-focus-error": "inset 0 0 0 .0625rem #d9360b,0 0 0 .375rem rgba(217,54,11,.16),inset 0 0 0 1px #d9360b,0 0 0 1px #d9360b",
        "button-focus": "0 0 0 .375rem rgba(16,114,235,.16)",
        "button-secondary-hover": "inset 0 0 0 .0625rem #142c8e",
      },
    },
  },
  plugins: [],
};
