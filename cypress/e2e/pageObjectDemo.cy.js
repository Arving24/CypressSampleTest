describe("All login test", () => {

  beforeEach(() => {
    cy.login("Katharina_Bernier", "s3cret")
  })

  it("Login with correct credentials", () => {
    cy.visit('/')

    cy.get('[data-test="sidenav-username"]').should("be.visible");

    // loginPage.navToAcc();

    // loginPage.validateAccount();

    // cy.go('forward')
    
    // cy.go('back')

  });

  it("Login with invalid username", () => {
    cy.visit('/')
    cy.get('[data-test="sidenav-user-settings"]').click()
    cy.get('.MuiPaper-root > .MuiTypography-root').should("be.visible");
  });

});

