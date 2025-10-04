///<reference types="cypress" />


describe('Visit MultiDomain In CYPRESS', function () {

    it('verify the contact us form', function () {
        cy.origin("https://webdriveruniversity.com/", () => {
            cy.visit('https://webdriveruniversity.com/')
            cy.get('#contact-us').click()
        })
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('chinmay')
        cy.get('input[name="last_name"]').type('deshpande')
        cy.get('input[name="email"]').type('chinmaydeshpande010@gmail.com')
        cy.get('textarea[name="message"]').type('I am learning js')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    specify.only('Visit Multiple Domain in CYPRESS', function () {
        cy.on("uncaught:exception", () => {
            return false;
        });
        cy.origin("https://www.selenium.dev/", () => {
            cy.visit('https://www.selenium.dev/');
            cy.url().should("contain", "selenium");
        });
        cy.origin("https://webdriveruniversity.com/", () => {
            cy.visit('https://webdriveruniversity.com/');
            cy.url().should("contain", "webdriveruniversity");
        });
        cy.visit('https://google.com/');
        cy.url().should("contain", "google");
    });


})