import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

type Props = {};

const Header = (props: Props) => {
  const {theme, toggleTheme} = useContext(ThemeContext);


  return (
    <nav className={`bg-slate-900 ${theme === "dark" ? "dark:bg-slate-900" : "dark:bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Texto del logo */}
          <div className={`flex-shrink-0 font-bold text-xl ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
            Rick and Morty
          </div>

          {/* Toggle button */}
          <button
            id="toggle-button"
            className={`ml-auto ${theme === "dark" ? "text-white" : "text-slate-900"}`}
            onClick={toggleTheme}
          >
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
