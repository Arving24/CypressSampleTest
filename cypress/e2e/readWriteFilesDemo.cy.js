before(function() {
    cy.fixture('example.json').as('test_data')
})

it("Read a file using Fixture", function() {

    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
    })

    cy.log (this.test_data.name)

})

it("Read file using readFile()", function() {

    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
    })

})

it('Write file using writeFile()', function() {

    cy.writeFile('sample.text', 'Hello World\n')

    cy.writeFile('sample.text', 'Taro is learning cypress', {flag: 'a+'})

})