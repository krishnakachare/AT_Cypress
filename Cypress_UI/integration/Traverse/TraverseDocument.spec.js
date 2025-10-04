describe('Document Travese Method', ()=>{

    it('Validating the URL', ()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.url().should('contain', 'index')
    })

    it('Validating the URL2',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.contains('Women').click()
        cy.url().should('contain','category')
    })

    it('Validating the Title',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.wait(5000)
        cy.get('a[title="Dresses"]').eq(1).click()
        // cy.contains('Dresses').click()
        cy.url().should('contain','controller')
        cy.title().should('contain', 'Dresses - My Store')
    })

    it.only('validating any property of head section',()=>{
        cy.visit('http://automationpractice.com/index.php')
        // cy.document().should('have.property', 'name').and('eq', 'description')
        cy.document().should('have.property','URL')
        cy.document().should('have.property','title')
        cy.document().should('have.property','head')
        cy.document().should('have.property','body')
        cy.document().should('have.property','baseURI')
       
    })


})
