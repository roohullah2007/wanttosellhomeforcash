import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Instrument Sans', ...defaultTheme.fontFamily.sans],
                accent: ['Lora', 'serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#053E78',
                    hover: '#042d59',
                },
                secondary: {
                    DEFAULT: '#000000',
                    hover: '#111111',
                },
                accent: {
                    DEFAULT: '#EEEDEA',
                    dark: '#E5E1DC',
                },
                text: {
                    DEFAULT: '#111111',
                    light: '#666666',
                    muted: '#3D3D3D',
                },
                background: {
                    DEFAULT: '#ffffff',
                    alt: '#DCD8D5',
                },
            },
        },
    },

    plugins: [forms],
};
