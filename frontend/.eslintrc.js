module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@next/next',
    'react',
    '@typescript-eslint',
    'prettier',
    'tailwindcss',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    es2021: true,
  },
  extends: [
    'next/core-web-vitals',
    'next/typescript',
    'eslint:recommended',
    'plugin:@next/next/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': 'warn',
    quotes: ['error', 'single'],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['.*'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
      },
    ],
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
