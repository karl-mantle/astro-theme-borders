/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
			serif: ['IBM Plex Serif', ...defaultTheme.fontFamily.serif]
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'true-black': '#000000', // 900
			'black': '#242424', // 800
			'true-white': '#ffffff', // 100
			'white': '#f5f5f5', // 200
			'light-grey': '#d8d8d8', // 400
			'dark-grey': '#3e3e3e', // 700
		},
		extend: {
			typography: ({ theme }) => ({
				theme: {
					css: {
						'--tw-prose-body': theme('colors.black'),
						'--tw-prose-headings': theme('colors.true-black'),
						'--tw-prose-lead': theme('colors.dark-grey'),
						'--tw-prose-links': theme('colors.black'),
						'--tw-prose-bold': theme('colors.true-black'),
						'--tw-prose-counters': theme('colors.dark-grey'),
						'--tw-prose-bullets': theme('colors.light-grey'),
						'--tw-prose-hr': theme('colors.light-grey'),
						'--tw-prose-quotes': theme('colors.true-black'),
						'--tw-prose-quote-borders': theme('colors.light-grey'),
						'--tw-prose-captions': theme('colors.dark-grey'),
						'--tw-prose-code': theme('colors.true-black'),
						'--tw-prose-pre-code': theme('colors.true-white'),
						'--tw-prose-pre-bg': theme('colors.true-black'),
						'--tw-prose-th-borders': theme('colors.light-grey'),
						'--tw-prose-td-borders': theme('colors.white'),
						'--tw-prose-invert-body': theme('colors.white'),
						'--tw-prose-invert-headings': theme('colors.true-white'),
						'--tw-prose-invert-lead': theme('colors.light-grey'),
						'--tw-prose-invert-links': theme('colors.white'),
						'--tw-prose-invert-bold': theme('colors.white'),
						'--tw-prose-invert-counters': theme('colors.light-grey'),
						'--tw-prose-invert-bullets': theme('colors.dark-grey'),
						'--tw-prose-invert-hr': theme('colors.dark-grey'),
						'--tw-prose-invert-quotes': theme('colors.true-white'),
						'--tw-prose-invert-quote-borders': theme('colors.dark-grey'),
						'--tw-prose-invert-captions': theme('colors.light-grey'),
						'--tw-prose-invert-code': theme('colors.true-white'),
						'--tw-prose-invert-pre-code': theme('colors.light-grey'),
						'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-invert-th-borders': theme('colors.dark-grey'),
						'--tw-prose-invert-td-borders': theme('colors.dark-grey'),
					},
				},
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
