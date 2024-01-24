module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // Enforce camelCase for variable declarations
    camelcase: ["error", { properties: "always" }],

    // Enforce camelCase for function names
    "id-match": ["error", "^(?!_)[a-z]+(?:[A-Z][a-z]+)*$"],
  },
};
