import {Given,Then,When,And} from "cypress-cucumber-preprocessor/steps"

Given('User navigate to URL',()=>{
    cy.visit('https://app.recast.studio/auth/login/')
})

When('User enter email id {string} and password {string}',(emailid,password)=>{
    cy.get('#login-form_email').type(emailid)
    cy.get('#login-form_password').type(password)
})

And('Tap on "Login" button',()=>{
    cy.get('button[type="submit"]').click()
})

And('User wait for few sec to navigate into home page',()=>{
    cy.wait(7000)
})

Then('User should navigate to home page and {string} should be shown',(element)=>{
    cy.contains(element).should('be.visible')
})