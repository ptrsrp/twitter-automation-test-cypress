const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'aktonu',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/"
  },
});
