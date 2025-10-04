// syntax -cy.viewport(width, height)

describe('testing different viewports',()=>{

    before(()=>{
        console.log('running my test')
    })
    beforeEach(()=>{
        cy.visit('http://www.google.com')
    })

    it('open in macbook -13',()=>{
        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(2000)

    })

    it('open in macbook-15',()=>{
        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(2000)

    })

    it('open in samsung-s10',()=>{
        cy.viewport('samsung-s10')
        cy.screenshot()

    })

    it('open in iphone-x',()=>{
        cy.viewport('iphone-x')
        cy.screenshot()

    })

    it('open in ipad-2',()=>{
        cy.viewport('ipad-2')
        cy.screenshot()

    })

    it('open in ipad-2',()=>{
        cy.viewport(550, 750)
        cy.screenshot()

    })

})