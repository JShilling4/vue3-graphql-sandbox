/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  // overrides: [
  //   {
  //     files: ["*.graphql"],
  //     parser: "@graphql-eslint/eslint-plugin",
  //     plugins: ["@graphql-eslint"],
  //     rules: {
  //       "@graphql-eslint/known-type-names": "error",
  //     },
  //   },
  // ],
};
