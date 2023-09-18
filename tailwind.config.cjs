/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'cs-melon' : '#ffadad',
				'cs-sunset' : '#ffd6a5',
				'cs-cream' : '#fdffb6',
				'cs-tea' : '#caffbf',
				'cs-electric' : '#9bf6ff',
				'cs-jordy' : '#a0c4ff',
				'cs-periw' : '#bdb2ff',
				'cs-mauve' : '#ffc6ff',
				'cs-light' : '#fffffc',
				'cs-dark' : '#333333'
			},
			fontFamily: {
  			'poppins' : 'Poppins'
			},
			fontSize: {
				sm: '0.8rem',
				base: '1rem',
				xl: '1.25rem',
				'2xl': '1.563rem',
				'3xl': '1.953rem',
				'4xl': '2.441rem',
				'5xl': '3.052rem',
			}
		},
	},
	plugins: [],
}
