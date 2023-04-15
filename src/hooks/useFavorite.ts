import React, { useEffect } from "react";
import { useCharacterContext } from "@/context/CharacterContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const FAVORITES_KEY = "favorites";

function useFavorites() {
  const { state, dispatch } = useCharacterContext();
  const { item: favorites, saveItem } = useLocalStorage(
    FAVORITES_KEY,
    state.favorites
  );

  useEffect(() => {
    saveItem(state.favorites);
  }, [state.favorites]);

  const addToFavorites = (favorite: Character) => {
    dispatch({ type: "ADD_TO_FAVORITES", payload: favorite });
  };

  const removeFromFavorites = (favorite: Character) => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: favorite });
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
  };
}

export { useFavorites };
