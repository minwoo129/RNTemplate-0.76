/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'no-var': 'error', // var 금지
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/self-closing-comp': 'warn',
    'react-native/no-inline-styles': 'off',
    'no-undef': 'off',
    'no-trailing-spaces': 'off',
  },
};
