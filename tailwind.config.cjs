const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      gray: {
        darkest: colors.slate[900],
        dark: "#2a2d36",
        medium: "#7b7e84",
        light: "#e3e3e3",
        subtle: "#f7f7f7",
      },
      blue: {
        darker: "#093C53",
        dark: "#0e5777",
        light: "#0c9ac4",
      },
      red: "#bd2326",
      orange: "#d74f27",
      yellow: "#f7b918",
      gold: "#b79042",
      green: "#1F8623",
    },
    fontFamily: {
      sans: ["Mona-Sans", "Helvetica", "Arial", "sans-sarif"],
      display: ["Hubot-Sans", "sarif"],
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  prefix: "tw-",
  important: true,
};
