import { LoginPage } from "./pages/login_page";

const loginPage = new LoginPage();

beforeEach(() => {
    cy.visit("/signin");
  })

describe("All login test", () => {

  it("Login with correct credentials", () => {

    loginPage.login("Katharina_Bernier", "s3cret");

    cy.get('[data-test="sidenav-username"]').should("be.visible");
  });

  it("Login with invalid username", () => {

    loginPage.login("Katharina_Berniera", "s3cret");

    cy.get('.MuiAlert-message').should("be.visible");
  });

  it("Login with invalid password", () => {

    loginPage.login("Katharina_Bernier", "s3crets");

    cy.get('.MuiAlert-message').should("be.visible");
  });

});

