/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CSSSelector from "../../../support/cssElement";
import GenericFunctions from "../../../support/PageObject/GenericsFunctions";

const selector = new CSSSelector()
const generic = new GenericFunctions()

Given('I open Google Page', () => {
    generic.Visit(selector.url)
})

When('I type the {word} in search box', function (element) {
    generic.SearchElement(selector.searchBox, element)
    generic.Click(selector.searchBtn)
})

Then('Visit the cypress official site', () => { 
    generic.Click(selector.cypressSite,{setTimeout})
    // cy.get(selector.signUp).should('have.attr', 'target')    
})


