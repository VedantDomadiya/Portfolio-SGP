const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js, jsx}", "./components/**/*.{js, jsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      // white/black/gray follow the theme (see :root and html.light in globals.scss),
      // so "white" means "foreground" and "black" means "background".
      white: "rgb(var(--c-fg) / <alpha-value>)",
      black: "rgb(var(--c-bg) / <alpha-value>)",
      // Fixed colours for text on purple/gradient surfaces in both themes
      snow: "#ffffff",
      ink: "#000000",
      purple: "#8b31ff",
      red: "#cf0000",
      green: "#00ac56",
      indigo: {
        light: "#9f55ff",
        dark: "#7000ff",
      },
      gray: {
        light: {
          1: "rgb(var(--c-gl1) / <alpha-value>)",
          2: "rgb(var(--c-gl2) / <alpha-value>)",
          3: "rgb(var(--c-gl3) / <alpha-value>)",
          4: "rgb(var(--c-gl4) / <alpha-value>)",
        },
        dark: {
          1: "rgb(var(--c-gd1) / <alpha-value>)",
          2: "rgb(var(--c-gd2) / <alpha-value>)",
          3: "rgb(var(--c-gd3) / <alpha-value>)",
          4: "rgb(var(--c-gd4) / <alpha-value>)",
          5: "rgb(var(--c-gd5) / <alpha-value>)",
        },
      },
    },
    fontFamily: {
      sans: ["var(--font-calibre)"],
      mono: ["var(--font-jetbrains-mono)"],
    },
    extend: {
      animation: {
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: 1,
          },
          "70%": {
            opacity: 1,
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
