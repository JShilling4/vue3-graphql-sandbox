import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://rickandmortyapi.com/graphql",
  documents: "src/api/repositories/*.ts",
  generates: {
    "src/gql/": {
      preset: "client",
      config: {
        useTypeImports: true,
        skipTypename: true,
      },
      plugins: [],
    },
  },
};

export default config;
