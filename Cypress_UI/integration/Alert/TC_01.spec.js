describe("Handaling Alert", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        
          return false
        });
    it("TC_01 handling alert ok button", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('input[id="name"]').type('pranali')
        cy.get('input[id="alertbtn"]').click({focus:true})
        cy.on('window:alert', (Text) => {
            // cy.log(Text)
            expect(Text).to.eqls('Hello pranali, share this practice page and share your knowledge')
        })
    })
    it("TC_02 handling alert ok button",()=>{
        cy.visit('http://demo.automationtesting.in/Alerts.html')
        cy.get('button[class="btn btn-danger"]').click()
        cy.on("window:alert",(text)=>{
            expect(text).to.eql('I am an alert box!')
        })

    })
    it.only("Tc_03 handling alert ok button",()=>{
        cy.visit("https://www.w3resource.com/javascript/alert-prompt-confirm.php")
        cy.get('a[href="alert-example1.html"]').invoke('removeAttr','target').click()
        cy.on('window:alert', (Text) => {
            // cy.log(Text)
            expect(Text).to.eqls('This is a alert box')
            })
        cy.get('h1[style="color: red"]').should('be.visible')

    })
})

