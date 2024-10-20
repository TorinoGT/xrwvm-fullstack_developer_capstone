export default [
  {
    files: ["**/*.js", "**/*.jsx"],
    ignores: ["node_modules/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    plugins: {
      react: require("eslint-plugin-react")
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-console": "off",
      "no-unused-vars": "warn"
    }
  }
];
