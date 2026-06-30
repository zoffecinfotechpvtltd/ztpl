import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette extracted from /public/logo.jpeg — golden yellow + vivid
        // green on a deep charcoal-black. Dark, trust-led, premium.
        bg: {
          DEFAULT: "#070809",
          soft: "#0C0F14",
          card: "#11151C",
          elevated: "#161B24",
        },
        green: {
          DEFAULT: "#21C063",
          deep: "#15A04E",
          soft: "#34D77B",
        },
        yellow: {
          DEFAULT: "#FFD60A",
          deep: "#F5B70A",
          soft: "#FFE45C",
        },
        alert: "#E5484D",
        ink: {
          DEFAULT: "#F8FAFC",
          muted: "#9BA7B8",
          faint: "#5E6B7D",
        },
        line: "#1C2430",
      },
      fontFamily: {
        // Primary typeface from the brief: Pliant (Google Fonts), with a
        // graceful fallback chain via next/font + system UI.
        sans: ["Pliant", "var(--font-pliant-fallback)", "system-ui", "sans-serif"],
        display: ["Pliant", "var(--font-pliant-fallback)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(110deg, #FFD60A 0%, #34D77B 55%, #21C063 100%)",
        "green-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(33,192,99,0.20) 0%, rgba(33,192,99,0) 70%)",
        "yellow-glow":
          "radial-gradient(50% 50% at 50% 0%, rgba(255,214,10,0.16) 0%, rgba(255,214,10,0) 70%)",
        "grid-faint":
          "linear-gradient(to right, rgba(28,36,48,0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,36,48,0.45) 1px, transparent 1px)",
        "dot-faint":
          "radial-gradient(rgba(28,36,48,0.7) 1px, transparent 1px)",
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        aurora: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "33%": { transform: "translate3d(4%,-3%,0) scale(1.08)" },
          "66%": { transform: "translate3d(-3%,4%,0) scale(0.96)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        aurora: "aurora 22s ease-in-out infinite",
        "aurora-slow": "aurora 32s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee var(--marquee-duration,40s) linear infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        "gradient-pan": "gradient-pan 6s ease infinite",
      },
      maxWidth: {
        content: "1240px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
