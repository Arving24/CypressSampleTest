export class LoginPage{

    username_input = '#username'
    password_input = '#password'
    login_button = '.MuiButton-label'

    enterUsername(username) {
        cy.get(this.username_input).type(username)
    }

    enterPassword(password) {
        cy.get(this.password_input).type(password)
    }

    clickLogin() {
        cy.get(this.login_button).click()
    }

    login(username, password) {
       this.enterUsername(username)
       this.enterPassword(password)
       this.clickLogin()
    }
}