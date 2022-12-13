import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import type { Ref } from "vue";

export const getAllCharacters = () =>
  useQuery(
    gql`
      query Characters {
        characters {
          results {
            id
            name
            image
          }
        }
      }
    `
  );

export const getCharacter = (id: Ref<string>) =>
  useQuery(
    gql`
      query Character($id: ID!) {
        character(id: $id) {
          id
          name
        }
      }
    `,
    { id }
  );
