/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // ✅ এইভাবে 'class' দিয়েই dark mode enable করতে হবে
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
