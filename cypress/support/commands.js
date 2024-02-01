// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { LoginPage } from "../e2e/pages/login_page";
import 'cypress-file-upload';

require('cypress-downloadfile/lib/downloadFileCommand')


//store login session
const loginPage = new LoginPage();

Cypress.Commands.add('login', (username, password) => {
    cy.session(
      username,
      () => {
        cy.visit('/signin')
        loginPage.login(username, password)
      },
    //   {
    //     validate: () => {
    //       cy.getCookie('your-session-cookie').should('exist')
    //     },
    //   }
    )
  })