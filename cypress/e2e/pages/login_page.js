export class LoginPage{

    username_input = '#username'
    password_input = '#password'
    login_button = '.MuiButton-label'
    login_error = ".MuiAlert-message"

    accounts = "[data-test='sidenav-user-settings'] > .MuiListItemText-root > .MuiTypography-root"
    validateAccounts = ".MuiPaper-root > .MuiTypography-root"

    logout_button = "[data-test='sidenav-signout'] > .MuiListItemText-root > .MuiTypography-root"

    enterUsername(username) {
        cy.get(this.username_input).clear().type(username).blur()
    }

    enterPassword(password) {
        cy.get(this.password_input).clear().type(password)
    }

    // navToAcc() {
    //     cy.get(this.accounts).click()
    // }

    // validateAccount() {
    //     cy.get(this.validateAccounts).should("be.visible")
    // }

    clickLogin() {
        cy.get(this.login_button).click()
    }

    clickLogoutButton() {
       cy.get(this.logout_button).click()
    }

    errMessage() {
        cy.get(this.login_error).should("be.visible")
    }

    login(username, password) {
       this.enterUsername(username)
       this.enterPassword(password)
       this.clickLogin()
    }


}