/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  'text-primary': '#f4dbd6',
			  'text-secondary': '#f5bde6',
			  'accent': '#8aadf4',
			  'accent-opacity': '#8aadf42a',
			  'bg-color': '#24273a',
			  'elevation-one': '#363a4f',
			  'elevation-two': '#363a4f75',
			  'elevation-three': '#494d64',
			  'elevation-four': '#cad3f5',
			  'elevation-five': '#b8c0e0',
			  'elevation-six': '#a5adcb',
			},
			fontFamily: {
				'font-one': ['Space Grotesk', 'sans-serif'],
				'font-two': ['JetBrains Mono', 'monospace']
			},
			animation: {
				shimmer: 'shimmer_keys 4s linear infinite forwards'
			},
			keyframes: {
				float: {
					'0%': { 'transform': 'translateY(5px);' },
					'50%': { 'transform': 'translateY(-5px);' },
					'100%': { 'transform': 'translateY(5px);' }
				},
				shimmer_keys: {
					'0%': { 'background-position': '-1200px 0' },
					'100%': { 'background-position': '1200px 0' }
				}
			}
		  },
	},
	plugins: [],
}
