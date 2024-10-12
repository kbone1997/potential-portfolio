import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        'depth': '0 10px 10px rgba(0, 0, 0, 0.4)',
      },
      colors: {
        primary: "#FD6F00",
        darkBg: "#1E1E1E",
        offwhite: "#F8F8F8",
        offblack: "#424242",
        border: "#545454",
        skin: "#FFEBDB"
      },
    },
  },
  plugins: [],
};
export default config;
