import { Character } from "@/@types/api";
import { useThemeContext } from "@/context/ThemeContext";
import React, { useState } from "react";

type Props = {
  character: Character;
};

const CharacterCard = ({ character }: Props) => {
  const { theme } = useThemeContext();
  const [open, setOpen] = useState(false);

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
      <div className={`${open ? "w-[50%] flex-col" : "w-full  justify-center"} flex px-6 py-4 items-center`}>
        <h2
          className={`font-bold text-xl mb-2 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {character.name}
        </h2>
        {open ? (<>
          <h2><strong>Gender: </strong>{character.gender}</h2>
          <h2><strong>Species: </strong>{character.species}</h2>
          <h2><strong>Location: </strong>{character.location.name}</h2>
        </>) : (<></>)}
      </div>
    </div>
  );
};

export { CharacterCard };
