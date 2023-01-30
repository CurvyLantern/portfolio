/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			boxShadow: {
				round: '0 4px .6rem rgba(0,0,0,.2)',
				'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
			},
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		// ...
	],
};

const theme = {
	screens: {
		sm: '480px',
		md: '768px',
		lg: '976px',
		xl: '1440px',
	},
	colors: {
		blue: '#1fb6ff',
		purple: '#7e5bef',
		pink: '#ff49db',
		orange: '#ff7849',
		green: '#13ce66',
		yellow: '#ffc82c',
		'gray-dark': '#273444',
		gray: '#8492a6',
		'gray-light': '#d3dce6',
	},
	fontFamily: {
		sans: ['Graphik', 'sans-serif'],
		serif: ['Merriweather', 'serif'],
	},
	extend: {
		boxShadow: {
			'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
		},
		spacing: {
			128: '32rem',
			144: '36rem',
		},
		borderRadius: {
			'4xl': '2rem',
		},
	},
};
