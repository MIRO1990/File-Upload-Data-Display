/** @type {import('jest').Config} */
export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],

  // Allow NodeNext-style TS imports that end with ".js"
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },

  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true, tsconfig: 'tsconfig.test.json' }],
  },

  // Only run TS tests
  testMatch: ['**/__tests__/**/*.(test|spec).ts?(x)'],
};
