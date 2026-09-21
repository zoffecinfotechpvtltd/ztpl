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
          green: c("brand-green"),
          deep: c("brand-deep"),
          amber: c("brand-amber"),
        },
      },
      fontFamily: {
        sans: ["var(--font-satoshi)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: { lg: "0.75rem", xl: "1rem", "2xl": "1.25rem", "3xl": "1.75rem" },
      backgroundImage: {
        // Emerald only. Amber is a separate accent and is never blended into it (that reads as lime).
        "gradient-primary": "linear-gradient(135deg, #2BE58A 0%, #00D26A 50%, #00B85C 100%)",
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
        marquee: "marquee var(--marquee-duration, 70s) linear infinite",
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
        drift: "drift 48s ease-in-out infinite",
        "gradient-shift": "gradient-shift 24s ease infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;
