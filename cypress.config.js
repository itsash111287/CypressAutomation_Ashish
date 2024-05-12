const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    supportFile: false,
    setupNodeEvents(on, config) {
      
      // implement node event listeners here

      
    },
  },
});
