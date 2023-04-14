import { type } from "os";
import React, { useContext, useReducer, useState } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

const initialState: CharacterState = {
  favorites: [],
  characters: [],
};

function reducer(state: CharacterState, action: CharactersAction) {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      const newFavorite: Character = action.payload;
      return {
        ...state,
        favorites: [...state.favorites, newFavorite],
      };
    case "REMOVE_FROM_FAVORITES":
      const favoriteToRemove: Character = action.payload;
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.id !== favoriteToRemove.id
        ),
      };
    case "SET_CHARACTERS":
      const characters: Character[] = action.payload;
      return {
        ...state,
        characters,
      };
    default:
      return state;
  }
}

const CharacterContext = React.createContext<{
  state: CharacterState;
  dispatch: React.Dispatch<CharactersAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const CharacterProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CharacterContext.Provider value={{ state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => useContext(CharacterContext);
