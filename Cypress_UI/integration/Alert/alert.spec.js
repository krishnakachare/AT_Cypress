describe('verify the alert',()=>{

    it('validate the normal alert',()=>{
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
        // cy.on('window:alert',(str) =>{
        //     expect(str).to.equal('I am an alert box!')

        // })

        cy.window().then((win) => {
            let foo = win.alert()
            cy.log(foo)
          })
    })


    it('validate the confirm alert one',()=>{
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm',(str) =>{
            return true
        })
        cy.get('#confirm-alert-text').should('have.text','You pressed OK!')

    })

    it('validate the confirm alert two',()=>{
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm',(str) =>{
            return false
        })
        cy.get('#confirm-alert-text').should('have.text','You pressed Cancel!')

    })

    it('validate modal',()=>{
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button2').click()
        cy.get('#myModal').should('have.class','in')
        cy.get('.modal-title').should('have.text','It’s that Easy!!  Well I think it is.....')
        cy.get('button[data-dismiss = "modal"]').first().click()
        cy.get('#myModal').should('not.have.class','in')

    })





})