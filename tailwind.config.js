/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#121212 ",
				dimWhite: "rgba(255, 255, 255, 0.7)",
			},
		},
	},
	plugins: [],
};
