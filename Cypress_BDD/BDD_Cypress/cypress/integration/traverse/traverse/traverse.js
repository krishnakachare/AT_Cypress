import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CSSSelector from "../../../support/cssElement";
import GenericFunctions from "../../../support/PageObject/GenericsFunctions";

const selector = new CSSSelector()
const generic = new GenericFunctions()

Given("Navigate to Automation Practice page", () => {  
    generic.Visit(selector.autoUrl)
})


When('Validate the Url',() => {
    cy.url().should(selector.contain, 'index')
    generic.getContainsClick(selector.women)
    cy.url().should(selector.contain,'category')
})

And('Validate the Title', () => {
    cy.title().should(selector.contain, 'My Store')
    generic.GetElement(selector.autoTitle).eq(1).click()

    cy.url().should(selector.contain,'controller')
    cy.title().should(selector.contain, 'Dresses - My Store')
})

Then ('Validating properties of head section',()=>{
    cy.document().should(selector.property,'URL')
    cy.document().should(selector.property,'title')
    cy.document().should(selector.property,'head')
    cy.document().should(selector.property,'body')
    cy.document().should(selector.property,'baseURI')
})




