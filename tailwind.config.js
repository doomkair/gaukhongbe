/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      colors: {
        primary: {
          DEFAULT: "#7731f3",
        },
        dark: {
          DEFAULT: "#3b3951",
        },
        header: {
          DEFAULT: "#02224d",
        },
        decor: {
          pink: "#fef6fd",
        },
      },
      maxWidth: {
        "8xl": "1570px",
      },
      boxShadow: {
        button: "0 5px 5px #b08df64d",
      },
    },
  },
  plugins: [],
};
