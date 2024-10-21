/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgHero: "url('./public/images/bg-hero.png')",
        bgFeatures: "url('./public/images/bg-feature.png')",
        bgTeaser: "url('./public/images/teaser-bg.png')",
      },
      fontFamily: {
        josefin: "Josefin Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
