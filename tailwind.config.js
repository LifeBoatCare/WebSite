module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      colors: {
        "light-blue": "#D8E5F6",
        "royal-blue": "rgba(32, 60, 96, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};