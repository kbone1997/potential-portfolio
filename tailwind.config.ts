import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'Montserrat'],
      },
      boxShadow: {
        'depth': '0 10px 10px rgba(0, 0, 0, 0.4)',
      },
      colors: {
        primary: "#FD6F00",
        darkBg: "#1E1E1E",
        offwhite2: "#D9D9D9",
        offwhite: "#F8F8F8",
        offblack: "#424242",
        border: "#545454",
        border2: "#AFAFAF",
        skin: "#FFEBDB",
        placeholder: "#797979",
        logotext: "#FBFBFB",
        darkfooter: "#121212",
        mask: "#FD6F0099",
        progressCircle: "#EDECEC"
      },
    },
  },
  plugins: [],
};
export default config;
