/** @type {import('jest').Config} */
module.exports = {
  preset: 'react-native',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(js)$': [
      'babel-jest',
      {plugins: ['babel-plugin-syntax-hermes-parser']},
    ],
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  testEnvironment: 'node',
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-redux|react-native-safe-area-context|@react-navigation/.*)/)',
  ],
  moduleDirectories: ['node_modules', 'src'],
};
