const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            primary: {
                100: '#e9e0db',
                DEFAULT: '#6a3311',
                500: '#6a3311',
            }
        },
        ringColor: {
            DEFAULT: '#6a3311',
        },
        fontFamily: {
            display: ['Yanone Kaffeesatz', 'sans-serif'],
            body: ['Roboto', 'sans-serif'],
        },
        extend: {
            gridTemplateRows: {
                'topMenuLayout-content': 'auto 1fr',
            }
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
            textColor: ['active'],
        },
    },
    plugins: [],
}
