/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#7E0772",
                appBackgroundColor: "#F3F3F3",
                primaryDark: "#5F0A56",
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
            backgroundColor: {
                header: "rgb(110, 114, 122)",
                backdrop: "rgba(245, 241, 243, 0.33)",
            },
        },
    },
    plugins: [],
};
