import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://rickandmortyapi.com/graphql",
  documents: "src/api/graphql/**/*.ts",
  generates: {
    "src/gql/index.ts": {
      config: {
        enumsAsTypes: true,
        withCompositionFunctions: true,
        vueApolloComposableImportFrom: "@vue/apollo-composable",
        vueCompositionApiImportFrom: "vue",
      },
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-apollo-client-helpers",
        "typescript-vue-apollo",
        "named-operations-object",
      ],
    },
  },
};

export default config;
