const { defineConfig } = require('cypress');
const cypressOnFix = require('cypress-on-fix');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  retries: 1,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Test Execution Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    async setupNodeEvents(on, config) {
      on = cypressOnFix(on);
      require('cypress-mochawesome-reporter/plugin')(on);
      await addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', createBundler({ plugins: [createEsbuildPlugin(config)] }));
      return config;
    },
    specPattern: ['cypress/tests/features/login.feature','cypress/tests/features/productCatalog.feature','cypress/tests/features/shoppingCart.feature']
  },
  'cypress-cucumber-preprocessor': {
    nonGlobalStepDefinitions: true,
    step_definitions: 'cypress/support/step_definitions',
  },
});