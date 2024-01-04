const { defineConfig } = require("cypress");
const {downloadFile} = require("cypress-downloadfile/lib/addPlugin")

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);

      // implement node event listeners here
      on('task', {downloadFile});
    },
    baseUrl: 'http://localhost:3000/',
    watchForFileChanges: false,
    viewportHeight: 768,
    viewportWidth: 1366,
  },
});
