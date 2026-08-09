import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official ZTPL brand palette (brand board v1.0) — Amber + Emerald on
        // a graphite neutral ramp. Surfaces map directly to the brand's own
        // Ink/Slate/Steel/Stone scale; muted/faint text tones are ours,
        // chosen off that same blue-gray hue but contrast-checked against
        // the actual backgrounds (~8:1 / ~5.5:1) since the board doesn't
        // specify a body-text gray.
        bg: {
          DEFAULT: "#0B0D11", // Ink
          soft: "#12161C", // Slate
          card: "#1A1F26", // Steel
          elevated: "#2A2F37", // Stone
        },
        green: {
          DEFAULT: "#00D26A", // Emerald
          deep: "#00A651", // Emerald Flow end
          soft: "#3DDB8A",
        },
        yellow: {
          DEFAULT: "#FFC107", // Amber
          deep: "#FF8A00", // Tangerine / Amber Flow end
          soft: "#FFD54F",
        },
        alert: "#E5484D",
        ink: {
          DEFAULT: "#FFFFFF",
          muted: "#9BA7B8",
          faint: "#7C8AA0",
        },
        line: "#2A2F37", // Stone
        // Secondary accents from the brand board — sparing use only
        // (status/data semantics), never the primary brand voice.
        accent: {
          blue: "#2684FF",
          cyan: "#00BFFF",
          violet: "#7C4DFF",
          magenta: "#FF4DA6",
        },
      },
      fontFamily: {
        // Satoshi — the brand's real typeface — carries both display and
        // body roles (per the official brand board), self-hosted via
        // next/font/local. IBM Plex Mono is a small utility accent for
        // data-like content only (ledger rail, labels).
        sans: ["var(--font-display)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(110deg, #FFC107 0%, #3DDB8A 55%, #00D26A 100%)",
        "green-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(0,210,106,0.20) 0%, rgba(0,210,106,0) 70%)",
        "yellow-glow":
          "radial-gradient(50% 50% at 50% 0%, rgba(255,193,7,0.16) 0%, rgba(255,193,7,0) 70%)",
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
