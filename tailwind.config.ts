const withMT = require("@material-tailwind/react/utils/withMT");

const config = withMT({
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
        background3: "#F3F9FB",
        yellow1: "#E3BC01",
        line: "#D9D9D9",
        heading: "#222222",
        save: "#249B3E",
      },
      fontSize: {
        xxs: "10px",
        xxxs: "8px",
        xxxxs: "5px",
        xsm: "0.8rem",
      },
      theme: {
        screens: {
          sm: "640px",
          // => @media (min-width: 640px) { ... }

          mds: "840px",
          // => @media (min-width: 768px) { ... }

          lg: "1024px",
          // => @media (min-width: 1024px) { ... }

          xl: "1280px",
          // => @media (min-width: 1280px) { ... }

          "2xl": "1536px",
          // => @media (min-width: 1536px) { ... }
        },
      },
    },
  },
  plugins: [],
});
export default config;
