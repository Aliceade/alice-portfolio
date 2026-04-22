import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#fff7e8", forest: "#162117",
        coral: "#ffbba6", "coral-vivid": "#ff8c6b", "coral-dark": "#c96a4a",
      },
      fontFamily: {
        serif: ["'Playfair Display'","serif"],
        sans: ["'Plus Jakarta Sans'","sans-serif"],
        mono: ["'JetBrains Mono'","monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
