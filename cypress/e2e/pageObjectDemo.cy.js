import { LoginPage } from "./pages/login_page";

let loginPage = new LoginPage();

describe("All login test", () => {
  const testData = require("../fixtures/login_data.json");

  testData.valid_creds.forEach((data) => {
    it("Login with correct credentials", () => {
      cy.visit("/");
      loginPage.login(data.username, data.password);
      cy.get('[data-test="sidenav-username"]').should("be.visible");
      loginPage.clickLogoutButton();
    });
  });

  testData.invalid_creds.forEach((data) => {
    it("Login with correct credentials", () => {
      cy.visit("/");
      loginPage.login(data.username, data.password);
      loginPage.errMessage();
    });
  });
});
