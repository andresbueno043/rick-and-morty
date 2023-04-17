import { ThemeContext, useThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import SearchBar from "@/components/SearchBar";

type Props = {};

const Header = (props: Props) => {
  const {theme, toggleTheme} = useThemeContext();


  return (
    <nav className={`bg-slate-900 ${theme === "dark" ? "dark:bg-slate-900" : "dark:bg-gray-400"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Texto del logo */}
          <div className={`flex-shrink-0 font-bold text-xl ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
            Rick and Morty
          </div>

          <SearchBar />

          {/* Toggle button */}
          <button
            id="toggle-button"
            className={`px-8 py-2 rounded-lg border ml-auto ${theme === "dark" ? "text-white bg-slate-600 border-slate-300" : "text-slate-900 bg-slate-200 border-slate-900"}`}
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
