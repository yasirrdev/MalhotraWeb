/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
  "*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    colors: {
      primary: {
        DEFAULT: "#00607d",
        light: "#007d9e",
        dark: "#004e66",
      },
      secondary: {
        DEFAULT: "#e60000",
        light: "#ff1a1a",
        dark: "#cc0000",
      },
      neutral: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      background: {
        DEFAULT: "#ffffff",
        secondary: "#f9fafb",
        tertiary: "#f3f4f6",
      },
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      success: {
        DEFAULT: "#10b981",
        light: "#34d399",
        dark: "#059669",
      },
      warning: {
        DEFAULT: "#f59e0b",
        light: "#fbbf24",
        dark: "#d97706",
      },
      error: {
        DEFAULT: "#ef4444",
        light: "#f87171",
        dark: "#dc2626",
      },
      info: {
        DEFAULT: "#3b82f6",
        light: "#60a5fa",
        dark: "#2563eb",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
};
export const plugins = [require("tailwindcss-animate")];
  