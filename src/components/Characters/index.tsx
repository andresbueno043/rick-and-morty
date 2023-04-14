import React, { useState, useEffect } from "react";
import { Character } from "@/@types/api";
import { CharacterCard } from "@/components/CharacterCard";
import { useThemeContext } from "@/context/ThemeContext";

type Props = {};

const Characters = (props: Props) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const { theme } = useThemeContext();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className={`grid grid-cols-4 content-center grid-flow-row auto-rows-max gap-4 p-10 ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Characters;
