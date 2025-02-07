/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
    	fontSize: {
    		xs: [
    			'12px',
    			'16px'
    		],
    		sm: [
    			'14px',
    			'20px'
    		],
    		base: [
    			'16px',
    			'19.5px'
    		],
    		lg: [
    			'18px',
    			'21.94px'
    		],
    		xl: [
    			'20px',
    			'24.38px'
    		],
    		'2xl': [
    			'24px',
    			'29.26px'
    		],
    		'3xl': [
    			'28px',
    			'50px'
    		],
    		'4xl': [
    			'48px',
    			'58px'
    		],
    		'8xl': [
    			'96px',
    			'106px'
    		]
    	},
    	extend: {
    		fontFamily: {
    			poppins: [
    				'Poppins',
    				'sans-serif'
    			],
    			inter: [
    				'Inter',
    				'sans-serif'
    			]
    		},
    		colors: {
    			primary: '#ECEEFF',
    			'coral-blue': '#3ab2fb',
    			'slate-gray': '#6D6D6D',
    			'pale-blue': '#d0e8f6',
    			'white-400': 'rgba(255, 255, 255, 0.80)'
    		},
    		boxShadow: {
    			'3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
    		},
    		screens: {
    			'wide': '1440px'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: [],
  }