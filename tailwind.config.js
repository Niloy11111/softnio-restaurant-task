/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Bebas: "Bebas Neue",
        Raleway: "Raleway",
        Roboto: "Roboto",
        Inter: "Inter",
        OpenSans: "Open Sans",
      },
      colors: {
        b1: "#febf00",
        p1: "#B52B1D",
        p2: "#BD1F17",
        t1: "#0A1425",
        t2: "#181818",
        d1: "#333333",
        y1: "#febf00",
      },
    },
  },
  plugins: [],
};
