import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const c = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", lg: "2rem" },
      screens: { "2xl": "80rem" },
    },
    extend: {
      colors: {
        background: c("background"),
        foreground: c("foreground"),
        surface: c("surface"),
        card: { DEFAULT: c("card"), foreground: c("card-foreground") },
        muted: { DEFAULT: c("muted"), foreground: c("muted-foreground") },
        border: c("border"),
        input: c("border"),
        ring: c("primary"),
        primary: { DEFAULT: c("primary"), foreground: c("primary-foreground") },
        secondary: { DEFAULT: c("secondary"), foreground: c("secondary-foreground") },
        destructive: c("destructive"),
        success: c("success"),
        brand: {
          blue: c("brand-blue"),
          cyan: c("brand-cyan"),
          violet: c("brand-violet"),
          fuchsia: c("brand-fuchsia"),
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: { lg: "0.75rem", xl: "1rem", "2xl": "1.25rem", "3xl": "1.75rem" },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #3B82F6 0%, #22D3EE 100%)",
        "gradient-secondary": "linear-gradient(135deg, #7C3AED 0%, #D946EF 100%)",
        "gradient-cta": "linear-gradient(120deg, #1D4ED8 0%, #0E7490 50%, #6D28D9 100%)",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.8)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(6%,-4%,0) scale(1.1)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 40s) linear infinite",
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
        drift: "drift 24s ease-in-out infinite",
        "gradient-shift": "gradient-shift 12s ease infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;
