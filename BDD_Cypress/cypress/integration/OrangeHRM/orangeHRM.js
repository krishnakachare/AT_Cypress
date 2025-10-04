import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('User navigating to OrangeHRM URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

When('User enter username as {string} and password as {string}', (userName, passWord) => {
    cy.get('#txtUsername').type(userName)
    cy.get('#txtPassword').type(passWord)
})

And('Used click on {string} button', () => {
    cy.get('#btnLogin').click()
})

Then('User should navigate to Dashboard', () => {
    //cy.get('#menu_admin_viewAdminModule').should('be.visible')
    cy.get('img[alt="OrangeHRM"]').should('be.visible')
})

Then('User should see appropriate validation message {string}', (message) => {
    cy.contains(message).should('be.visible')
})

