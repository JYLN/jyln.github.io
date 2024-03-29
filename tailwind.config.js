/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./build/*.html'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                jetbrains: ['Jetbrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
};
