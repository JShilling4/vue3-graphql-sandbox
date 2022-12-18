import { createClient } from "@urql/vue";

export const urqlClient = createClient({
  url: "https://rickandmortyapi.com/graphql",
});
