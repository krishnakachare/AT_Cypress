describe('file upload', () => {
    it('file upload', () => {

        cy.visit('https://the-internet.herokuapp.com/upload')
        let img = 'abc.jpg'
        cy.get('#file-upload').click()
        cy.get('#file-upload').attachFile(img)
        cy.get('#file-submit').click()
        cy.url().should('have.include', 'upload')


    })
})