import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography"; // ✅ import plugin đúng cách
import lineClamp from "@tailwindcss/line-clamp";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-garamond)"],
      },
    },
  },
  plugins: [typography, lineClamp], // ✅ thêm plugin vào đây
};

export default config;
