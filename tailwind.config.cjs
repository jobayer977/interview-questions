/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem'
			},
			colors: {
				primary: '#42B983',
				dark: '#213547',
				light: '#F9F9F9',
				gray: '#E5E5E5',
				'gray-dark': '#767676'
			}
		}
	},
	plugins: [require('@tailwindcss/line-clamp')]
};
