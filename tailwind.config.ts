import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"main-bg": {
					DEFAULT: "#F4F5F9",
					white: "#FFFFFF",
				},
				"button-color": {
					primary: {
						DEFAULT: "#1F5EDD",
						hover: "#2970FF",
						disabled: "#B2CCFF",
						text: "#ffffff",
						textHover: "#ffffff",
					},
					secondary: {
						DEFAULT: "#EEF4FF",
						hover: "#D1E0FF",
						disabled: "#F5F8FF",
						text: "#2970FF",
						textDisabled: "#84ADFF",
					},
					outline: {
						DEFAULT: "#C7C7C7",
						hover: "#E3E3E3",
						disabled: "#B2CCFF",
						text: "#474747",
						textDisabled: "#C7C7C7",
					},
					text: {
						DEFAULT: "#ffffff",
						hover: "#EEF4FF",
						disabled: "#B2CCFF",
						text: "#2970FF",
						textDisabled: "#C7C7C7",
					},
				},
				"border-color": {
					DEFAULT: "#D1E0FF",
					secondary: "#ADADAD",
					input: "#C9D0E14D",
					inputHover: "#C9D0E14D",
					inputFocused: "#C9D0E14D",
				},
				"text-color": {
					DEFAULT: "#000000",
					secondary: "#757575",
					checkbox: "#474747",
					button: "#2970FF",
				},
			},
			maxHeight: {
				"19": "19px",
			},
			screens: {
				"max-md": { max: "767px" },
			},
		},
	},
	plugins: [],
};
export default config;
