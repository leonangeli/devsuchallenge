const { defineConfig } = require("cypress");

module.exports = defineConfig({
  failOnStatusCode: false,
  e2e: {
    experimentalSessionAndOrigin: true,
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportPageTitle: "Demo Casino Cypress Report",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    baseUrl: "https://www.saucedemo.com/",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: ["cypress/**/**.cy.js", "integration/petstoreapi.spec.cy.js"],
  },
});
