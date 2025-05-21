import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(() => {
        const stored = localStorage.getItem("theme");
        return stored === "dark" || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    useEffect(() => {
        const html = document.documentElement;
        if (isDark) {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(prev => !prev);

    return (
        <button
            onClick={toggleTheme}
            className="text-xl p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
            aria-label="Toggle Dark Mode"
        >
            {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>
    );
};

export default DarkModeToggle;
