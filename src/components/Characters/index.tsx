import React, { useState, useEffect } from "react";
import { Character } from "@/@types/api";
import { CharacterCard } from "@/components/CharacterCard";

type Props = {};

const Characters = (props: Props) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="grid grid-cols-4 content-center grid-flow-row auto-rows-max gap-4 p-10">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Characters;
