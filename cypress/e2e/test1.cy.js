
it('google test', function() {
    cy.visit('https://google.com')
    cy.get('#APjFqb', {timeout: 5000}).type('automation Step by Step{enter}')
    cy.wait(4000)
    cy.contains('Videos').click()

    // cy.get('.eKjLze > .g > [lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
})

it.only('login test', function(){
    cy.viewport(1366, 768)
    cy.visit('/signin')
    cy.get('#username').type('Katharina_Bernier')
    cy.get('#password').type('s3cret')
    cy.get('.MuiButton-label').click()
    cy.get('[data-test="sidenav-user-settings"] > .MuiListItemText-root > .MuiTypography-root').click()
})

