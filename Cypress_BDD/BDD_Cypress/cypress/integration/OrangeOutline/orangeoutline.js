
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('User navigate to ornageHRM URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
})

When('User enter userName {string} and passWord {string}', (userName, passWord) => {
    cy.get('#txtUsername').type(userName)
    cy.get('#txtPassword').type(passWord)
})

And('tap on "Login" button', () => {
    cy.get('#btnLogin').click()
})

Then('user should see navigating {string}', (tab) => {
    cy.contains(tab)
})

