import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      gradientColorStops: ({ theme }) => theme("colors"),
      fontSize: {
        h1: ["3.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h2: ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h3: ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h4: ["2rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        h5: ["1.5rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        h6: ["1.25rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        large: ["1.25rem", { lineHeight: "1.5" }],
        medium: ["1.125rem", { lineHeight: "1.5" }],
        regular: ["1rem", { lineHeight: "1.5" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        tiny: ["0.75rem", { lineHeight: "1.5" }],
      },
      colors: {
        scheme: {
          background: "#ffffff",
          foreground: "#ffffff",
          text: "#1F2A44",
          border: "#e4e0d8",
          "btn-text": "#ffffff",
        },
        neutral: {
          darkest: "#1F2A44",
        },
        cream: "#EFE6D8",
        "zylix-grey": "#6B7280",
      },
      borderRadius: {
        button: "999px",
        card: "1rem",
        image: "1rem",
        form: "0.5rem",
        badge: "999px",
        checkbox: "0.25rem",
        carousel: "1rem",
        dropdown: "0.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
