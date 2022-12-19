import { graphql } from "../../gql";
import { useQuery } from "@vue/apollo-composable";

export const charactersRepository = {
  getAll() {
    return useQuery(
      graphql(/* GraphQL */ `
        query Characters {
          characters {
            results {
              id
              name
            }
          }
        }
      `)
    );
  },

  get(id: string) {
    return useQuery(
      graphql(/* GraphQL */ `
        query Character($id: ID!) {
          character(id: $id) {
            id
            name
          }
        }
      `),
      { id }
    );
  },
};
