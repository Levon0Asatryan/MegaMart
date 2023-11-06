import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        border: "#EDEDED",
        primary: "#008ECC",
        text: "#666666",
        light: "#888888",
        background1: "#F5F5F5",
        background2: "#F6F6FC",
        background3: "F3F9FB",
        yellow1: "E3BC01",
        line: "D9D9D9",
      },
      fontSize: {
        xxs: "10px",
        xxxs: "8px",
      },
    },
  },
  plugins: [],
};
export default config;
