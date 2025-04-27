import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        space: {
          deep: "#1a1f2c",
          purple: "#9b87f5",
          pink: "#ff61d8",
          gold: "#fffad1",
          green: "#7cffe6",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "twinkle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "stardust": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "shooting-star": {
          "0%": { transform: "translateX(-100%) translateY(-100%) rotate(-45deg)", opacity: "1" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateX(200%) translateY(200%) rotate(-45deg)", opacity: "0" },
        },
        "aurora": {
          "0%, 100%": { transform: "translateX(-50%) rotate(0deg)" },
          "50%": { transform: "translateX(50%) rotate(180deg)" },
        },
        "milky-way": {
          "0%": { transform: "rotate(-15deg) translateX(-100%)" },
          "100%": { transform: "rotate(-15deg) translateX(100%)" },
        },
        "comet": {
          "0%": { transform: "translateX(0) rotate(-15deg)", opacity: "1" },
          "100%": { transform: "translateX(200vw) rotate(-15deg)", opacity: "0.5" }
        }
      },
      animation: {
        "twinkle": "twinkle 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "stardust": "stardust 2s ease-out forwards",
        "shooting-star": "shooting-star 3s linear infinite",
        "aurora": "aurora 8s ease-in-out infinite",
        "milky-way": "milky-way 15s linear infinite",
        "comet": "comet 12s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
