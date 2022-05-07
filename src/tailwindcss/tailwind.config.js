module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        "new-color": "#30ff04",
        black: "#ff00ff",
      },
      fontFamily: {
        arial: "Arial",
      },

      backgroundImage: {
        "test-back": "url('../assets/bg.bmp')",
      },
    },
  },
  plugins: [],
};
