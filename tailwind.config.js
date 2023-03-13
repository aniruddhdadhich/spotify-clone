/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        "gray-700-spotify": "#282828",
        "gray-800-spotify": "#181818",
        "gray-900-spotify": "#121212",
      },
      variants: {
        textColor: ["responsive", "hover", "active", "group-hover"],
      },
      spacing: {
        22: "5.5rem",
        14: "3.5rem",
        200: "50rem",
      },
      lineHeight: {
        "extra-loose": "2.5",
      },
    },
  },
  plugins: [],
};
