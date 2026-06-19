/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
        carlo: ['Carlo', 'sans-serif'],
        wolf: ['sans.woff2', 'sans-serif'],
      },
		},
	},
	plugins: [],
};
