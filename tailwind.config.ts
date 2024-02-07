import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
      },
      fontSize: {
        "fs-h1": "2.25rem",
        "fs-h2": "1.75rem",
        "fs-h3": "1.75rem",
        "fs-h4": "1.75rem",
        "fs-body": "0.9375rem",
        "fs-overline": "0.875rem",
        "fs-subtitle": "0.8125rem",
        "fs-h1-xs": "3.5rem",
        "fs-h2-xs": "2.5rem",
        "fs-h3-xs": "2rem",
      },
      fontWeight: {
        "fw-reg": "400",
        "fw-bold": "500",
        "fw-bolder": "700",
      },
      screens: {
        phones: "376px",
      },
      gap: {
        test: "6rem"
      }
    },
  },
  plugins: [],
};
export default config;
