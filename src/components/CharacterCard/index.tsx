import { useThemeContext } from "@/context/ThemeContext";
import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useFavorites } from "@/hooks/useFavorite";

type Props = {
  character: Character;
};

const CharacterCard = ({ character }: Props) => {
  const { theme } = useThemeContext();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const [open, setOpen] = useState(false);

  const isFavorite: boolean = favorites.some(
    (favorite: Character) => favorite.id === character.id
  );

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(character);
    } else {
      addToFavorites(character);
    }
  };

  return (
    <div
      className={`${
        open ? "col-span-2 flex-row justify-between" : "col-span-1 flex-col"
      } flex items-center w-full mx-auto rounded-lg overflow-hidden shadow-md text-center ${
        theme === "dark" ? "bg-gray-700" : "bg-gray-300"
      }`}
      onClick={() => setOpen(!open)}
    >
      <div className="h-80">
        <img
          className="h-full w-full object-fit-cover"
          src={character.image}
          alt={character.name}
        />
      </div>
      <div className="flex flex-row">
        <div className="flex-grow my-auto">
          <h2
            className={`font-bold text-xl my-auto ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            {character.name}
          </h2>
        </div>
        <div
          className={`${
            open ? "w-[50%] flex-col" : "w-full  justify-center"
          } flex px-6 py-4 items-center w-1/6`}
        >
          <div className="flex flex-row justify-between items-center">
            <button
              className="px-4 z-20"
              onClick={(event) => {
                event.stopPropagation();
                handleToggleFavorite();
              }}
            >
              <HeartIcon
                className={`w-10 h-10 ${
                  isFavorite
                    ? "text-red-600 hover:text-red-500"
                    : "text-gray-400 hover:text-red-500"
                }`}
              />
            </button>
          </div>
        </div>
        {open ? (
          <>
            <h2 className={theme === "dark" ? "text-white" : "text-black"}>
              <strong>Gender: </strong>
              {character.gender}
            </h2>
            <h2 className={theme === "dark" ? "text-white" : "text-black"}>
              <strong>Species: </strong>
              {character.species}
            </h2>
            <h2 className={theme === "dark" ? "text-white" : "text-black"}>
              <strong>Location: </strong>
              {character.location.name}
            </h2>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export { CharacterCard };
