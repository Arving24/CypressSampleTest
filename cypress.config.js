const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
    },
    baseUrl: 'http://localhost:3000/',
    watchForFileChanges: false,
    viewportHeight: 768,
    viewportWidth: 1366,
  },
});
