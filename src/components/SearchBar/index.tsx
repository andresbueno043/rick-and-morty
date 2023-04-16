import React, { useState, useEffect, useRef, useContext } from "react";
import { useCharacterContext } from "@/context/CharacterContext";
import { useThemeContext } from "@/context/ThemeContext";

type Props = {};

const SearchBar = (props: Props) => {
  const { state: characterState, dispatch } = useCharacterContext();
  const { theme } = useThemeContext();
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const term = searchRef.current?.value || "";
    setSearchTerm(term);

    if (term.trim() !== "") {
      const filteredCharacters = characterState.characters.filter((character) =>
        character.name.toLowerCase().includes(term.toLowerCase())
      );
      dispatch({ type: "SET_CHARACTERS", payload: filteredCharacters });
    } else {
      fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) =>
          dispatch({ type: "SET_CHARACTERS", payload: data.results })
        );
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      <div className="relative mx-40 w-72">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className={`${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            } w-5 h-5`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          className={`${
            theme === "dark"
              ? "placeholder-gray-400 border-gray-600 text-white bg-gray-700 focus:ring-blue-500 focus:border-blue-500 "
              : "text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
          }block w-full p-4 pl-10 text-sm rounded-lg   `}
          placeholder="Search"
          value={searchTerm}
          ref={searchRef}
          onChange={handleSearch}
        />
      </div>
    </>
  );
};

export default SearchBar;
