import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm Mediterranean palette
        cream: "#F7F4EE", // warm Mediterranean white
        sand: {
          DEFAULT: "#E7DCC7",
          50: "#FAF6EF",
          100: "#F1E8D7",
          200: "#E7DCC7",
          300: "#D8C7A6",
          400: "#C4AC7E",
        },
        olive: {
          DEFAULT: "#6B7A4F",
          50: "#F2F3EC",
          100: "#DEE2D0",
          200: "#BCC4A2",
          300: "#97A276",
          400: "#7C8A58",
          500: "#6B7A4F",
          600: "#56633F",
          700: "#414B30",
        },
        charcoal: {
          DEFAULT: "#2B2B28",
          50: "#6E6E68",
          100: "#54544E",
          200: "#3D3D38",
          300: "#2B2B28",
          400: "#1C1C1A",
        },
        ocean: {
          DEFAULT: "#7FB2C9",
          50: "#EAF3F7",
          100: "#CFE5ED",
          200: "#A9D0DF",
          300: "#7FB2C9",
          400: "#5B98B3",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "10xl": "10rem",
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      backgroundImage: {
        "hero-fade":
          "linear-gradient(to bottom, rgba(27,27,26,0.55) 0%, rgba(27,27,26,0.15) 35%, rgba(27,27,26,0.65) 100%)",
        "grain":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        luxe: "0 30px 80px -20px rgba(43,43,40,0.35)",
        "luxe-sm": "0 18px 40px -18px rgba(43,43,40,0.3)",
        glass: "0 8px 32px rgba(27,27,26,0.18)",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "scroll-hint": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "40%": { opacity: "1" },
          "80%, 100%": { transform: "translateY(14px)", opacity: "0" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
        "scroll-hint": "scroll-hint 1.8s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
