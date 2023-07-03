/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        backgroundPrimary: "var(--background-primary)",
        textPrimary: "var(--text-primary)",
        greenPrimary: "var(--button-background-primary)",
        greenSecondary : "var(--button-border-primary)",
      }
    },
  },
  plugins: [],
}
