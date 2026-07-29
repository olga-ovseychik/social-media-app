module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    'node_modules/(?!(' +
    [
      '(jest-)?react-native',
      '@react-native',
      'expo',
      '@expo',
      'react-redux',
      '@react-navigation',
      '@reduxjs/toolkit',
      'immer',
      'redux-persist',
      'react-redux',
      '@react-native-async-storage/async-storage',
    ].join('|') +
    '))'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx,js,jsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/expo-env.d.ts",
    "!**/.expo/**"
  ]
}