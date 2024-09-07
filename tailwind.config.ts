import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: { primary: "#ffed00" },
    extend: {
      textColor: {
        white: "#ffffff",
      },
      backgroundColor: {
        black: "#000000",
      },
    },
  },
  plugins: [],
} satisfies Config;
