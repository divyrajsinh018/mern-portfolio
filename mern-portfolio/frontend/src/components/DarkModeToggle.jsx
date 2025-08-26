import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-600 
                 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
    >
      {darkMode ? (
        <Sun size={20} className="text-yellow-400 transition-all" />
      ) : (
        <Moon size={20} className="text-gray-800 dark:text-gray-200 transition-all" />
      )}
    </button>
  );
}
