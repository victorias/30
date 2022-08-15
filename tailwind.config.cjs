/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      mono: ["Roboto Mono"],
    },
    extend: {
      boxShadow: {
        hard: "theme(spacing.1) theme(spacing.1) 0px 0px theme(colors.violet.600)",
      },
    },
  },
  plugins: [],
};
