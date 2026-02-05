import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CSSSelector from "../../../support/cssElement";
import GenericFunctions from "../../../support/PageObject/GenericsFunctions";

const selector = new CSSSelector()
const generic = new GenericFunctions()


Given("Navigate to recast page", () => {
    // generic.Visit(selector.eComUrl)
    cy.visit('https://app.recast.studio/auth/login/')
})

When("User logged in using {word}", (username) => {
    // generic.GetElement(selector.getUsername).type(username)
    cy.get('#login-form_email').type(username)
})

And("Password as {word}", (password) => {
    // generic.GetElement(selector.getPassword).type(password)
    cy.get('#login-form_password').type(password)
})

And("User clicks on submit button", () => {
    // generic.Click(selector.getLoginBtn)
    cy.get('button[type="submit"]').click()
})

Then("Home page should be displayed", () => {
    // cy.url().should('include', 'login')
    cy.get('h4[class ="ant-typography"]').should('have.text', 'Create New Project')
})





