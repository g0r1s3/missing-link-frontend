// eslint.config.mjs
import js from '@eslint/js'
import * as tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'
import unicorn from 'eslint-plugin-unicorn'
import sonarjs from 'eslint-plugin-sonarjs'
import promise from 'eslint-plugin-promise'
import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx,js,jsx}'],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',          // <- wichtig
        tsconfigRootDir: new URL('.', import.meta.url).pathname
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      unicorn,
      sonarjs,
      promise
    },

    rules: {
      // --- Stil, Lesbarkeit, Robustheit ---
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'prefer-const': 'error',

      // --- React specifics ---
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // A11y minimal
      'jsx-a11y/anchor-is-valid': 'warn',

      // --- Hooks ---
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // --- Imports ---
      'import/order': ['warn', {
        groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true }
      }],
      'import/no-unresolved': 'off',
      'import/no-default-export': 'off',

      // --- Unicorn ---
      'unicorn/prefer-node-protocol': 'off',
      'unicorn/filename-case': ['warn', { cases: { camelCase: true, pascalCase: true } }],

      // --- Inline-Styles in JSX verbieten ---
      'react/forbid-dom-props': ['error', { forbid: ['style'] }],
      'react/forbid-component-props': ['error', { forbid: ['style'] }],
      'no-restricted-syntax': [
        'error',
        {
          selector: "JSXAttribute[name.name='style']",
          message: 'Inline-CSS ist untersagt. Nutze Klassen + Theme-Variablen.'
        }
      ],

      // Prettier-Kompatibilität
      ...eslintConfigPrettier.rules
    }
  }
]
