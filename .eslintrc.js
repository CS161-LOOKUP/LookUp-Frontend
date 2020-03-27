module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["react", "prettier", "@typescript-eslint"],
  parserOptions: {
    version: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["plugin:react/recommended", "plugin:prettier/recommended", "prettier/react"],
  rules: {
    "prettier/prettier": "error",
  },
}
