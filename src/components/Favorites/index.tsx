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
        <div className={`${theme === "dark" ? "text-white" : "text-black" } mx-auto`}>
          <h1 className="text-2xl font-bold">Favoritos:</h1>
        </div>
      </div>
      <div className="flex items-center w-full">
        {state.favorites.map((favorite) => (
          <div key={favorite.id} className="mx-4">
            <img
              src={favorite.image}
              alt=""
              className={`${theme === "dark" ? "border-slate-200" : "border-slate-900"} h-16 w-16 rounded-full border-[3px]`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
