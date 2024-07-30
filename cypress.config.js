const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pcs5rn',
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
    watchForFileChanges: false,
    fixturesFolder: 'cypress/fixtures',
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
