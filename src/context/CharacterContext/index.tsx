import React, {
  useContext,
  useReducer,
  useEffect,
  useMemo,
  useState,
  BaseSyntheticEvent,
} from "react";

type ProviderProps = {
  children: React.ReactNode;
};

type CharacterState = {
  favorites: Character[];
  characters: Character[];
  originalCharacters: Character[];
  searchQuery: string;
};

type CharactersAction =
  | { type: "ADD_TO_FAVORITES"; payload: Character }
  | { type: "REMOVE_FROM_FAVORITES"; payload: Character }
  | { type: "SET_CHARACTERS"; payload: Character[] }
  | { type: "SET_FAVORITES"; payload: Character[] }
  | { type: "SET_SEARCH_QUERY"; payload: string } // nueva acción
  | { type: "CLEAR_SEARCH_QUERY" }; // nueva acción

const initialState: CharacterState = {
  favorites: [],
  characters: [],
  originalCharacters: [], // nueva propiedad
  searchQuery: "", // nueva propiedad
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
        originalCharacters: characters,
      };
    case "SET_FAVORITES":
      const favorites: Character[] = action.payload;
      return {
        ...state,
        favorites,
      };
    case "SET_SEARCH_QUERY": // nueva acción
      const searchQuery: string = action.payload;
      return {
        ...state,
        searchQuery,
      };
    case "CLEAR_SEARCH_QUERY": // nueva acción
      return {
        ...state,
        searchQuery: "",
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

  // Load favorites from local storage on app load
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    dispatch({ type: "SET_FAVORITES", payload: favorites });
  }, []);

  return (
    <CharacterContext.Provider value={{ state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};
export const useCharacterContext = () => useContext(CharacterContext);
