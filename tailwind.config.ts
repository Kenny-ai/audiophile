import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "home-bg-mobile": "url('/assets/home/mobile/image-header.jpg')",
        "home-bg-tablet": "url('/assets/home/tablet/image-header.jpg')",
        "home-bg-desktop": "url('/assets/home/desktop/image-hero.jpg')",
        pattern: "url('/assets/home/desktop/pattern-circles.svg')",
        "mobile-bg-zx7": "url('/assets/home/mobile/image-speaker-zx7.jpg')",
        "tablet-bg-zx7": "url('/assets/home/tablet/image-speaker-zx7.jpg')",
        "desktop-bg-zx7": "url('/assets/home/desktop/image-speaker-zx7.jpg')",
        "desktop-bg-yx1": "url('/assets/home/desktop/image-earphones-yx1.jpg')",
      },
      backgroundPosition: {
        center: "center -90px",
      },
      colors: {
        "clr-dark": "#000000",
        "clr-lighter-dark": "#101010",
        "clr-light": "#ffffff",
        "clr-darker-light": "#fafafa",
        "clr-grey": "#f1f1f1",
        "clr-accent": "#D87D4A",
        "clr-lighter-accent": "#FBAF85",
        "clr-darker-accent": "#C27042",
      },
      fontWeight: {
        "fw-bold": "500",
      },
      screens: {
        phones: "376px",
      },
    },
  },
  plugins: [],
};
export default config;
