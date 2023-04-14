import { useThemeContext } from "@/context/ThemeContext";
import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useCharacterContext } from "@/context/CharacterContext";

type Props = {
  character: Character;
};

const CharacterCard = ({ character }: Props) => {
  const { state, dispatch } = useCharacterContext();
  const { theme } = useThemeContext();
  const [open, setOpen] = useState(false);

  const handleAddFavorite = () => {
    dispatch({
      type: "ADD_TO_FAVORITES",
      payload: character,
    });
  };

    

  return (
    <div
      className={`${
        open ? "col-span-2 flex-row justify-between" : "col-span-1 flex-col"
      } flex items-center w-full mx-auto rounded-lg overflow-hidden shadow-md text-center  ${
        theme === "dark" ? "bg-gray-700" : "bg-gray-300"
      }`}
      onClick={() => setOpen(!open)}
    >
      <div className={open ? "w-[50%]" : "w-full"}>
        <img
          className="h-40 w-40 object-cover mx-auto mt-5"
          src={character.image}
          alt={character.name}
        />
      </div>
      <div
        className={`${
          open ? "w-[50%] flex-col" : "w-full  justify-center"
        } flex px-6 py-4 items-center`}
      >
        <div className="flex flex-row justify-between items-center">
          <h2
            className={`font-bold text-xl mb-2 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            {character.name}
          </h2>
          <p
            className="px-4 z-20"
            onClick={(event) => {
              event.stopPropagation();
              handleAddFavorite();
              console.log("Hola")
            }}
          >
            <HeartIcon className="w-6 h-6" />
          </p>
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
