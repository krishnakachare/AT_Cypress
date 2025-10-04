// Iframe

describe('iframe', () => {
    it('iframe', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').then(($iframe) => {
            const iframecontent = $iframe.contents().find('body')
            cy.wrap(iframecontent)
                .clear()
                .click()
                .type('helloo')
        })
    })
    
})