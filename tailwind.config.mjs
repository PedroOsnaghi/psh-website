/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode:'class',
	theme: {
		extend: {
			colors: {
				primaryColor: "#D22731",
				secondaryColor: "rgb(161, 163, 247)",
				primaryText: "rgb(255,255,255)",
				secondaryText: "rgb(174, 178, 183)",
				bgDark1: "var(--bg-dark1)",
				bgDark2: "rgb(23, 24, 26)",
				bgDark3: "rgb(48, 49, 54)",
				bgDark3Hover: "rgb(55, 56, 62)",
				bgDarkTransparent: "rgb(31, 32, 35, 0.7)",
				bgDarkTransparentDarker: "rgb(0,0,0,0.5)",
				bgDarkTransparentLighter: "rgb(48, 49, 54, 0.7)",
				mainBorder: "rgb(255,255,255,0.15)",
				mainBorderDarker: "rgb(255,255,255,0.07)",
				quoteIconColor: "rgb(178, 184, 205)",
				'pshyellow': {
					0: '#FFE7B8',
					80: '#FFCA62'
				}
			  },
			fontFamily: {
				Inter: "Inter",
				Jakarta: "Plus Jakarta Sans Variable"
			  },
			  screens: {
				xs: "530px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",      
				"2xl": "1536px",
			  }
		},
		
	},
	plugins: [],
}
