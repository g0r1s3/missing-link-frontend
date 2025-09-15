/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,

  // Basis-Parser (ohne type-aware Rules; schnell & unkompliziert)
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: "module",
    ecmaFeatures: { jsx: true }
    // KEIN "project": wir nutzen hier bewusst keine type-aware Rules
  },

  env: { browser: true, es2021: true, node: true },

  settings: {
    react: { version: "detect" },
    // Hilft dem import-Plugin bei TS-Pfadauflösung
    "import/resolver": {
      typescript: { alwaysTryTypes: true },
      node: { extensions: [".js", ".jsx", ".ts", ".tsx"] }
    }
  },

  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "jsx-a11y",
    "import",
    "unicorn",
    "sonarjs",
    "promise"
  ],

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended",
    "plugin:promise/recommended",
    // Wichtig: Prettier zuletzt, damit Formatierungsregeln nicht kollidieren
    "eslint-config-prettier"
  ],

  ignorePatterns: [
    "node_modules/",
    "dist/",
    "build/",
    // füge weitere Output-/Gen-Pfade hinzu, falls nötig
  ],

  reportUnusedDisableDirectives: true,

  rules: {
    // --- Stil, Lesbarkeit, Robustheit ---
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-debugger": "error",
    "eqeqeq": ["error", "always"],
    "curly": ["error", "all"],
    "prefer-const": "error",

    // --- React specifics ---
    "react/react-in-jsx-scope": "off", // Vite/React 17+
    "react/prop-types": "off",         // wir nutzen TypeScript

    // A11y etwas feintunen
    "jsx-a11y/anchor-is-valid": "warn",

    // --- Hooks korrekt verwenden ---
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // --- Imports: Ordnung und Sauberkeit ---
    "import/order": ["warn", {
      "groups": [["builtin", "external"], ["internal"], ["parent", "sibling", "index"]],
      "newlines-between": "always",
      "alphabetize": { order: "asc", caseInsensitive: true }
    }],
    "import/no-unresolved": "off", // TS/Resolver übernimmt das
    "import/no-default-export": "off",

    // --- Unicorn Feintuning ---
    "unicorn/prefer-node-protocol": "off", // Browser/Vite-Kontexte
    "unicorn/filename-case": ["warn", { cases: { camelCase: true, pascalCase: true } }],

    // --- Inline-Styles in JSX verbieten ---
    "react/forbid-dom-props": ["error", { forbid: ["style"] }],
    "react/forbid-component-props": ["error", { forbid: ["style"] }],

    // Optional: härtere Bremse gegen style-Attribute
    "no-restricted-syntax": [
      "error",
      {
        selector: "JSXAttribute[name.name='style']",
        message: "Inline-CSS ist untersagt. Nutze Klassen + Theme-Variablen."
      }
    ],
  },

  // Sicherstellen, dass .ts/.tsx betroffen sind (und hier TS-spezifische Tweaks)
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json", // 👈 wichtig
        tsconfigRootDir: __dirname  // 👈 sorgt dafür, dass er sie findet
      },
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
        ]
      }
    }
  ]
}
