import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

Given('User should navigate to reddit URL', () => {
    cy.visit('https://www.reddit.com/login/')
})

// When('User tap on "LogIn" button', () => {
//     cy.get('a[href="https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2F"]').click()
// })

And('User Enter username {string} and password {string}', (userName, passWord) => {
    cy.get('#loginUsername').type(userName)
    cy.get('#loginPassword').type(passWord)
})

And('User tap on "LogIn" button', () => {
    cy.get('button[type="submit"]').first().click()
})

And('Wait to load home page',()=>{
    cy.wait(200000)
})

Then('User should able to be see {string} at top right',(username)=>{
    cy.contains(username)
})