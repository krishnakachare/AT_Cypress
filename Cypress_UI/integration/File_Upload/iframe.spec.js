// npm install -D cypress-iframe 
// import 'cypress-iframe';

/// <reference types='Cypress'/>
/// <reference types='cypress-iframe'/>


describe('iFrame Test', () => {

    const getIframeBody = (element) => {
        return cy
            .get(element)
            .its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap)
    }

    it('iFrame', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.iframe().find('h1[class*="pricing-title"]').eq(0).should('have.text', 'BRONZE')
    })


    it('Web Driver University iFrame Example', () => {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#iframe').invoke('removeAttr', 'target').click({ force: true })
        cy.get('.nav.navbar-nav ').children('.active').click()

    })


    it.only('WebUni Driver', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(($el) => {
            let body = $el.contents().find('body')
            cy.wrap(body).as('iFrame')
        })

        cy.get('@iFrame').find('#button-find-out-more').should('have.text', 'Find Out More!')
        cy.get('@iFrame').find('.section-title').children('p.sub-heading').eq(0).should('have.text', 'Who Are We?')
        getIframeBody('#frame').find('.nav.navbar-nav .active').next().click()
            .next().should('have.text', 'Contact Us')
        getIframeBody('#frame').find('.col-lg-12> p').should('have.text', 'Copyright © www.GianniBruno.com')

    })


    it('utility function', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        getIframeBody('#frame').find('#button-find-out-more').should('have.text', 'Find Out More!')
    })


    it('dragabble', () => {
        cy.visit('https://jqueryui.com/draggable/')
        getIframeBody('.demo-frame').find('#draggable').should('be.visible')
    })


    it.only('Our Products', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        getIframeBody('#frame').contains('Our Products').click();
        cy.wait(2000)
        getIframeBody('#frame').contains('Cameras').should('be.visible')
        getIframeBody('#frame').find('.sub-heading').first().should('have.text', 'Special Offers')

    })


    it.only('Our Products', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(($el) => {
            cy.wrap($el.contents().find('body')).as('iFrame')
            cy.get('@iFrame').contains('Our Products').click();
        })
        cy.wait(2000)
        cy.get('#frame').then(($el) => {
            cy.wrap($el.contents().find('body')).as('iFrame')
            cy.get('@iFrame').contains('Cameras').should('exist')
        })
    })

    
    it.only('Contact Us page', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        getIframeBody('#frame').contains('Contact Us').click();
        cy.wait(2000)
        getIframeBody('#frame').find('input[type="reset"]').should('have.value', 'RESET')
        getIframeBody('#frame').find('.section_header').should('have.text', 'CONTACT US')

        // not run 
        // getIframeBody('#frame').contains('RESET').should('be.visible')
    })

})





