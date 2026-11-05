module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "no-unused-vars": "off",
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: true,
        // Context 文件按惯例同时导出 Provider 组件与配套 Hook
        allowExportNames: ["useCities", "useAuth"],
      },
    ],
  },
};
