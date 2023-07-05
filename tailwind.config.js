/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FD3101",
      },
      boxShadow: {
        mv: "0px 0px 25px 0px rgba(200.25, 200.25, 200.25, 0.5)",
        b: "0px 0px 20px 0px rgba(156, 158, 186, 0.32)",
      },
    },
  },
  plugins: [],
};
