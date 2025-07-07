
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1B1B1B",
        foreground: "#ffffff",
        primary: "#FFD700",
        secondary: "#2ECC71",
        gold: "#FFD700",
        emerald: "#2ECC71",
        crimson: "#E74C3C",
        ash: "#BDC3C7",
        "soft-gray": "#DADADA",
        charcoal: "#1B1B1B",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 2s infinite',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};
