// DarkModeToggle.jsx

const DarkModeToggle = () => {
    const handleToggle = () => {
        const root = window.document.documentElement;
        if (root.classList.contains("dark")) {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    };

    // set initial theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
        }
    }, []);

    return (
        <button onClick={handleToggle} className="btn">
            Toggle Mode
        </button>
    );
};

export default DarkModeToggle;
