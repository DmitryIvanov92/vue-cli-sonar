module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
  ],
};
