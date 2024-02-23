/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "17": "4.25rem",
        "18": "4.5rem",
        "19": "4.75rem",
        "90": "22.5rem",
        "200": "50rem"
      },
    },
  },
  plugins: [],
};
