module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      serif: ["Source Serif Pro", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
