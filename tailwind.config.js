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
			fontFamily: {
				quicksand: ["Quicksand", "sans - serif"],
			},
		},
		screens: {
			xs: "480px",
			ss: "620px",
			sm: "768px",
			md: "1060px",
			lg: "1200px",
			xl: "1700px",
			"3xl": "2000px",
		},
	},

	plugins: [require("tailwind-scrollbar-hide")],
};
