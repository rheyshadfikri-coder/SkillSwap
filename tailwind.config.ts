import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0a0c10",
          card: "#0d1117",
          elevated: "#121820",
          border: "rgba(255,255,255,0.08)",
        },
        midnight: {
          950: "#0a0c10",
          900: "#0d1117",
          800: "#121820",
          700: "#1a2332",
        },
        accent: {
          cyan: "#00d4ff",
          blue: "#3b82f6",
          glow: "#00e5ff",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 212, 255, 0.12) 0%, transparent 60%)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)",
        "mesh-gradient":
          "radial-gradient(at 20% 30%, rgba(0, 212, 255, 0.08) 0%, transparent 50%), radial-gradient(at 80% 20%, rgba(59, 130, 246, 0.06) 0%, transparent 50%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.5)",
        glow: "0 0 40px rgba(0, 212, 255, 0.15)",
        "glow-sm": "0 0 20px rgba(0, 212, 255, 0.2)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
      keyframes: {
        "scan-line": {
          "0%": { top: "0%", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { top: "100%", opacity: "0" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "scan-line": "scan-line 2.5s ease-in-out infinite",
        shimmer: "shimmer 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
