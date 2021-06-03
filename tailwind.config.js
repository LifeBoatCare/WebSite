const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      zIndex: {
        "-10": "-10",
      },
      colors: {
        "light-blue": "#D8E5F6",
        "royal-blue": "rgba(32, 60, 96, 1)",
        "skye-blue": "rgba(243, 245, 250, 1)",
        "stale-blue": "rgba(193, 218, 232, 1)",
        "peach-yellow": "rgba(254, 244, 240, 1)",
        "juicy-peach-yellow": "rgba(249, 188, 186, 1)",
        "washout-blue": "rgba(71, 103, 143, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
