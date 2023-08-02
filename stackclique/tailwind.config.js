/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#7E0772",
                grey: "#242424",
                green: "#13B351",
                white: "#FFFFFF",
                black: "#232233",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
                manrope: ["Manrope", "sans-serif"],
            },
        },
    },
    plugins: [],
};
