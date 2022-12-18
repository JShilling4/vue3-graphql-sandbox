import { useCharactersQuery, useCharacterQuery } from "../../gql";

// export type Character = {
//   id: string;
//   name: string;
// };

// export type CharactersQuery = {
//   characters: {
//     results: Character[];
//   };
// };

// export type CharacterQuery = {
//   character: Character;
// };

export const charactersRepository = {
  getAll() {
    return useCharactersQuery();
  },

  get(id: string) {
    return useCharacterQuery({ id });
  },
};
