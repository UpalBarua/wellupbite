/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      colors: {
        dark: "#050404",
        light: "#f4f4f9",
        primary: "#00a7e1",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#00a7e1",
          "base-100": "#f4f4f9",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
