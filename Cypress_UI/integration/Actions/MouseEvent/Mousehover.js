



describe('My first test suit',()=>{
    it('Test onmouse hover button',()=>{
        cy.visit('https://codenboxautomationlab.com/practice/')
      cy.visit(Cypress.env('url')+"/practice/")
        cy.get('.mouse-hover-content').invoke('show')                                // With jQuery, you can hide and show HTML elements with the hide() and show() methods:
        cy.contains('Top').click()
        cy.url().should('include','top')
    })

    it('scroll the page up and down',()=>{
        // cy.visit('https://codenboxautomationlab.com/')
        cy.visit(Cypress.env('url'))
        cy.contains('Contact Us').scrollIntoView()
        cy.get('.block-editor-rich-text__editable > span').scrollIntoView()
    })
    
})


   
// it.only('Handling MouseOver',()=>{

//     cy.visit('http://www.way2automation.com/')
    
//     cy.contains('Selenium').trigger('mouseover')
//     cy.contains('Selenium Corporate Training').click()


//   })