/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        segoe: ["Segoe UI", "sans-serif"],
      },
      colors: {
        primary: "#252DDA",
        secondary: "#2E2E2E",
        error: {
          text: "#D0031B",
          bg: "#FFF4F6",
        },
        success: {
          text: "#00A86B",
          bg: "#F0FFF4",
        },
      },
    },
  },
  plugins: [],
};
