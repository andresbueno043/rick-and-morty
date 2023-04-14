import { useCharacterContext } from "@/context/CharacterContext";
import { useThemeContext } from "@/context/ThemeContext";
import React, { useEffect } from "react";

type Props = {};

const Favorites = (props: Props) => {
  const { state } = useCharacterContext();
  const { theme } = useThemeContext();

  useEffect(() => {
    console.log(state.favorites);
  }, [state.favorites]);

  return (
    <div className={`${theme === "dark" ? "bg-gray-800" : "bg-gray-200"} flex w-full justify-between h-[100px]`}>
      <div className="flex items-center w-full">
        <div className="mx-auto">
          <h1 className="text-2xl font-bold">Favoritos:</h1>
        </div>
      </div>
      <div className="flex items-center w-full">
        {state.favorites.map((favorite) => (
          <div key={favorite.id} className="mx-0">
            <img
              src={favorite.image}
              alt=""
              className="h-16 w-16 rounded-full border-[3px] border-slate-900"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
