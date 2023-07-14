module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'prettier'],
  parserOptions: {
    tsconfigRootDir: '.',
    project: ['./tsconfig.json'],
  },
  rules: {
    'import/prefer-default-export': 0,
    'import/no-cycle': 0,
    'react/function-component-declaration': 0,
    'react/function-component-definition': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'no-param-reassign': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
