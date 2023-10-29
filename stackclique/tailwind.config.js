/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#d8b4fe",
                    200: "#c084fc",
                    300: "#a855f7",
                    500: "#7E0772",
                    600: "#3b0764",
                },

                appBackgroundColor: "#F3F3F3",
                primaryDark: "#5F0A56",
                darkGrey: "#9ca3af",
                lightGrey: "#e2e8f0",
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
                learnHeader:
                    "linear-gradient(92deg, #C326B3 12.13%, #5D1656 113.5%, rgba(92, 0, 82, 0.00) 113.5%)",
            },

            boxShadow: {
                aboutAppCardsShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.10)",
                whyJoinCardBoxShadow: "0px 64px 194px 0px rgba(0, 0, 0, 0.10)",
            },
        },
    },
    plugins: [],
};
