module.exports = [
  {
    files: ["**/*.js", "**/*.jsx"],
    ignores: ["node_modules/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: require("@babel/eslint-parser"),  // Use Babel parser for JSX/ES6+
      parserOptions: {
        ecmaFeatures: {
          jsx: true,   // Enable JSX
        },
        requireConfigFile: false,  // Allows parsing without a babel config file
      },
    },
    plugins: {
      react: require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks")
    },
    rules: {
      "react/react-in-jsx-scope": "off",   // Not needed in React 17+
      "no-console": "off",                 // Allow console statements
      "no-unused-vars": "warn",             // Disable unused-vars rule
    }
  }
];
