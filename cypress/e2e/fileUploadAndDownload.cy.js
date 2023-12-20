/// <reference types="cypress-downloadfile" />

it("File upload test", function() {

    cy.visit('https://trytestingthis.netlify.app/')

    cy.get('#myfile').attachFile('example.json')

})

it('File Download Test', function() {
//sample only
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')

})