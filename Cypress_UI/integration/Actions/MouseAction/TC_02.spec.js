describe('My first test suit',()=>{
    it('Test onmouse hover button',()=>{
        cy.visit('https://codenboxautomationlab.com/practice/')
        // With jQuery, you can hide and show HTML elements with the hide() and show() methods:
        cy.contains('Top').click()
        cy.get('.mouse-hover-content').invoke('show')                                
        cy.url().should('include','top')
    })

    it('scroll the page up and down',()=>{
        cy.visit('https://codenboxautomationlab.com/')
        cy.contains('Contact Us').scrollIntoView()
        cy.get('.block-editor-rich-text__editable > span').scrollIntoView()
    })
    
})