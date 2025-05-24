import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../ThemeContext/ThemeContext";

const ThemeToggle = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <button
            onClick={() => setDarkMode(prev => !prev)}
            className="text-xl p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Toggle Theme"
        >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>
    );
};

export default ThemeToggle;
