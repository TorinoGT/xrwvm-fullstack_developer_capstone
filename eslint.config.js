module.exports = [
  {
    files: ["**/*.js", "**/*.jsx"],
    ignores: ["node_modules/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: require("@babel/eslint-parser"),
      parserOptions: {
        ecmaFeatures: {
          jsx: true,   // Enable JSX parsing
        },
        requireConfigFile: false,  // Allows parsing without a babel config file
        babelOptions: {
          plugins: ["@babel/plugin-syntax-jsx"],  // Enable JSX plugin
        },
      },
    },
    plugins: {
      react: require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks"),
    },
    rules: {
      "react/react-in-jsx-scope": "off",  // Not needed in React 17+
      "no-unused-vars": "off",            // Disable unused-vars rule
      "no-console": "warn",                // Allow console statements
    }
  }
];
