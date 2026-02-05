import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CSSSelector from "../../../support/cssElement";
import GenericFunctions from "../../../support/PageObject/GenericsFunctions";

const selector = new CSSSelector()
const generic = new GenericFunctions()

// Given("Navigate to recast page", () => {
//     generic.Visit(selector.eComUrl)
// })


When('User logged in using {word}  Password as {word}', function (username, password) {
    cy.login(username, password)
})

Then('Home page should not be displayed', () => {
    cy.url().should('include', 'login')
})