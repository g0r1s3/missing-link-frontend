/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2023,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: false
    },
    env: { browser: true, es2021: true, node: true },
    settings: { react: { version: "detect" } },
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
        "plugin:promise/recommended"
    ],
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

        // --- Hooks korrekt verwenden ---
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",

        // --- Imports: Ordnung und Sauberkeit ---
        "import/order": ["warn", {
            "groups": [["builtin", "external"], ["internal"], ["parent", "sibling", "index"]],
            "newlines-between": "always",
            "alphabetize": { order: "asc", caseInsensitive: true }
        }],
        "import/no-unresolved": "off", // TS übernimmt das
        "import/no-default-export": "off", // optional, je nach Präferenz

        // --- Unicorn (nützliche Kleinigkeiten) ---
        "unicorn/prefer-node-protocol": "off", // Vite/Browser
        "unicorn/filename-case": ["warn", { cases: { camelCase: true, pascalCase: true } }],

        // --- Inline-Styles in JSX verbieten ---
        "react/forbid-dom-props": ["error", { forbid: ["style"] }],
        "react/forbid-component-props": ["error", { forbid: ["style"] }],

        // Optional: schärfer gegen Style-Objekte in Code
        "no-restricted-syntax": [
            "error",
            {
                selector: "JSXAttribute[name.name='style']",
                message: "Inline-CSS ist untersagt. Nutze Klassen + Theme-Variablen."
            }
        ],
    },
    overrides: [
        {
            files: ["**/*.ts", "**/*.tsx"],
            rules: {
                "@typescript-eslint/explicit-module-boundary-types": "off",
                "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }]
            }
        }
    ]
};
