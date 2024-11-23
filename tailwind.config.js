/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg')",
      },
    },
  },
  plugins: [],
};
