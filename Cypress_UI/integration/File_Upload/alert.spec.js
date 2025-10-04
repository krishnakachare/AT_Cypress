describe('Validate the window based elements', () => {

    it('alert', () => {

        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
        cy.on('window.alert', (str) => {
            expect(str).to.eq('I am an alert box!')

        })

    })

    it('alert', () => {

        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
        cy.window().then((str) => {
            let foo = str.alert()
            cy.log(foo)

        })

    })

    it('alert', () => {

        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return true
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')
    })

    it.only('alert', () => {

        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return false
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')

    })

    it('alert', () => {

        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button2').click()
        cy.get('#myModal').should('have.class', 'in')
        cy.get('.modal-title').should('have.text', 'It’s that Easy!!  Well I think it is.....')
        cy.get('button[data-dismiss="modal"]').first().click()
        cy.get('#myModal').should('not.have.class', 'in')

    })


})