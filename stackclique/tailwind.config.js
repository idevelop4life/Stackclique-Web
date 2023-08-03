/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#7E0772",
                primaryDark: "#5FOA56",
                darkGrey: "#8E8C8C",
                green: "#13B351",
                white: "#FFFFFF",
                black: "#242424",
                red: "#EB4335",
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
