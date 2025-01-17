/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FAC05E",
        green: "#8EB897",
        beige: "#F9F7F0",
        tomato: "#FFC09F",
      },
    },
  },
  plugins: [],
};
