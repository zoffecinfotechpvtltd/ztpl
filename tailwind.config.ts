import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand — Variant A (yellow + green), dark/trust-led
        bg: {
          DEFAULT: "#0B0F17",
          soft: "#0F1521",
          card: "#121A28",
        },
        green: {
          DEFAULT: "#21C063",
          deep: "#16A34A",
        },
        yellow: {
          DEFAULT: "#FFD60A",
          deep: "#F5C518",
        },
        alert: "#E5484D",
        ink: {
          DEFAULT: "#FFFFFF",
          muted: "#94A3B8",
          faint: "#64748B",
        },
        line: "#1E293B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "green-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(33,192,99,0.18) 0%, rgba(33,192,99,0) 70%)",
        "grid-faint":
          "linear-gradient(to right, rgba(30,41,59,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,41,59,0.35) 1px, transparent 1px)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
