/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sora: ["Sora Variable", "normal"]
			},
			colors: {
				'chalet-green': {
					50: '#f6f8ed',
					100: '#eaf0d7',
					200: '#d5e2b4',
					300: '#b9ce88',
					400: '#9eb962',
					500: '#809e44',
					600: '#637d33',
					700: '#556b2f',
					800: '#3f4e26',
					900: '#374324',
					950: '#1b240f',
				},
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
