/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1B1B1B",
        foreground: "#ffffff",
        primary: "#FFD700",
      },
    },
  },
  plugins: [],
};
