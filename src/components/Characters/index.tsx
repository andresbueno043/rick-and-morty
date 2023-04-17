import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { CharacterCard } from "@/components/CharacterCard";
import { useThemeContext } from "@/context/ThemeContext";
import { useCharacterContext } from "@/context/CharacterContext";

type Props = {};

const Characters = (props: Props) => {
  const { state, dispatch } = useCharacterContext();
  const { theme } = useThemeContext();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "SET_CHARACTERS", payload: data.results })
      );
  }, [dispatch]);

  return (
    <div className={`${theme === "dark" ? "bg-gray-800" : "bg-gray-200"} h-screen`}>
      <div
        className={`grid grid-cols-4 content-center grid-flow-row auto-rows-max gap-4 p-10`}
      >
        {state.characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
