/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        teal: "#66E2DC",
        orange: "#FA7453",
        lightorange: "#FFB964",
        white: "#FCFAF9",
        black: "#191826",
      },

      fontFamily: {
        PlexSans: ["IBM Plex Sans", "sans,serif"],
      },

      fontSize: {
        "h1-lg": [
          "5.5rem",
          {
            lineHeight: "5.5rem",
            letterSpacing: "-.0.625rem",
            fontWeight: "700",
          },
        ],
        "h1-md": [
          "4rem",
          {
            lineHeight: "4rem",
            fontWeight: "700",
          },
        ],
        "h1-sm": [
          "2.5rem",
          {
            lineHeight: "3rem",
            fontWeight: "700",
          },
        ],
        h2: [
          "2.5rem",
          {
            lineHeight: "3.25rem",
            fontWeight: "700",
          },
        ],
        "body-sm": [
          "1rem",
          {
            lineHeight: "1.625rem",
            fontWeight: "400",
          },
        ],
        "body-md": [
          "1.125rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "400",
          },
        ],
        "body-lg": [
          "1.25rem",
          {
            lineHeight: "2.125rem",
            fontWeight: "400",
          },
        ],
      },
      backgroundImage: {
        desktop: "url('../assets/bg-main-desktop.png')",
        tablet: "url('../assets/bg-main-tablet.png')",
        mobile: "url('../assets/bg-main-mobile.png')",
        pattern1: "url('../assets/bg-pattern-1.svg')",
        pattern2: "url('../assets/bg-pattern-2.svg')",
      },
    },
  },
  plugins: [],
};
