/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,vue}"],
    theme: {
        extend: {
            fontFamily: {
                sans: "Open Sans",
            },
            colors: {
                primary: {
                    900: "#5E7BF9",
                    800: "#7C94FD",
                    700: "#EFF6FF",
                    600: "#F1F5FE",
                },
            },
        },
    },
    plugins: [],
};
