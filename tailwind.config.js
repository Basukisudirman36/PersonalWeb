/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {animation: {
      floating: "floating 3s ease-in-out infinite", // Nama animasi dan durasi
    },
    keyframes: {
      floating: {
        "0%, 100%": { transform: "translateY(-5px)" }, // Naik sedikit
        "50%": { transform: "translateY(5px)" }, // Turun sedikit
      },
    },},
  },
  plugins: [],
};
