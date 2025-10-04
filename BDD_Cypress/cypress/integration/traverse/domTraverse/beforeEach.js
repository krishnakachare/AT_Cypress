
beforeEach(() => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#data-table').invoke('removeAttr', 'target').click({ force: true })
})
