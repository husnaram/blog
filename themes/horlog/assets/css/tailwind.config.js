module.exports = {
    purge: ['layouts/**/*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Fira Sans', 'monospace'],
                mono: ['Roboto Mono', 'sans-serif'],
            },
            borderWidth: {
                3: '3px',
            },
            typography: {
                DEFAULT: {
                    css: {
                        a: {
                            'border-bottom': '3px solid #F59E0B',
                            'text-decoration': 'none',
                            '&:hover': {
                                'background-color': '#F87171',
                            },
                        },
                    },
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
}
