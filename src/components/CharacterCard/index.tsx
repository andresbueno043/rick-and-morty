import { Character } from "@/@types/api";
import React from "react";

type Props = {
  character: Character;
};

const CharacterCard = ({ character }: Props) => {
  return (
    <div className="mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md text-center w-64">
      <img
        className="h-40 w-40 object-cover mx-auto mt-5"
        src={character.image}
        alt={character.name}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 dark:text-white">
          {character.name}
        </h2>
      </div>
    </div>
  );
};

export { CharacterCard };
