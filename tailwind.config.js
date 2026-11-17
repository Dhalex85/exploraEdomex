/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidiana: "#101719",
        noche: "#0A0E0F",
        arena: "#D6D0C3",
        hueso: "#EFEAE0",
        salvia: "#82958A",
        bronce: "#B58A55",
      },
      fontFamily: {
        display: ['"Instrument Serif"', '"Times New Roman"', "serif"],
        sans: ['"Archivo"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
