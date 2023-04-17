import { useState, useEffect, useCallback } from "react";
import { useCharacterContext } from "@/context/CharacterContext";

export const useCharacterSearch = () => {
  const { state: characterState, dispatch } = useCharacterContext();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = useCallback(() => {
    if (searchTerm.trim() !== "") {
      const filteredCharacters = characterState.characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      dispatch({ type: "SET_CHARACTERS", payload: filteredCharacters });
    } else {
      fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) =>
          dispatch({ type: "SET_CHARACTERS", payload: data.results })
        );
    }
  }, [searchTerm, characterState.characters, dispatch]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return { searchTerm, setSearchTerm };
};
