describe(" Handling Confirm Alert", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false
    })
    it("TC_01 Handling confirm Alert", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('input[id="confirmbtn"]').click()
        cy.on('window:confirm', (text) => {
            cy.log(text)
            expect(text).to.eqls('Hello , Are you sure you want to confirm?')
            return true
        
        })
        })
            it("TC_02 Handling confirm Alert", () => {
            cy.visit("https://www.w3resource.com/javascript/alert-prompt-confirm.php")
            cy.get('a[href="confirm-example1.html"]').invoke('removeAttr','target').click()
            cy.on('window:confirm',(text)=>{
                cy.log(text)
                expect(text).to.eql('Press Ok to Continue.')
                return true
            })
            cy.get('h1[style="color: red"]').should('have.text','JavaScript confirm() box example')
            
        

    })
        it.only("TC_03 Handling confirm Alert",()=>{
        cy.visit("http://demo.automationtesting.in/Alerts.html")
        cy.get('button[class="btn btn-primary"]').click({force:true})
        cy.on('window:confirm',(text)=>{
            cy.log(text)
            expect(text).to.eql('You pressed Ok')
            return true
        })
    })

        it('Verify the alert input text box',()=>{
        cy.get('a[href="#Textbox"]').click()
        cy.get('button[class="btn btn-info"]').click()
        cy.on('prompt',(text)=>{
            cy.log(text)
            return true
        })





})
})


