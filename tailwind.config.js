module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#04133E",
        secondary: "#2C87F4",
        accent: "#B444FF",
        light: "#FFFFFA",
        dark: "#030A1F",
        gold: "#FFD700",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
