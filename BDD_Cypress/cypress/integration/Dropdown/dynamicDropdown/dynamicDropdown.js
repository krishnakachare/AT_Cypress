import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import CSSSelector from "../../../support/cssElement";
import GenericFunctions from "../../../support/PageObject/GenericsFunctions";

const selector = new CSSSelector()
const generic = new GenericFunctions()

Given("Navigate to the Automation Page", () => {
    generic.Visit(selector.rsUrl)
})

When('select the dropdown list', () => {
    generic.GetElement(selector.dropdownLst).select('Option3')
    generic.GetIndexElement(selector.selectLst, 3).should('have.attr', 'value')
})


Given("Navigate to the Google Page", () => {
    generic.Visit(selector.gUrl)
})

When('Enter the search element', () => {
    generic.GetElement(selector.inputBox).type('Python')
    generic.FindElement(selector.autoSuggestLst, selector.liList).each(function (el) {
        cy.log(el.text())
        if (el.text().includes('tutorial')) {
            el.click()
        }
    })
})

Then('Validate the URL', () => {
    cy.url().should('include', 'tutorial')
})



Given("Navigate to the OYO Page", () => {
    generic.Visit(selector.yUrl)
})

When('Enter the search OYO element', () => {
    generic.SearchElement(selector.searchEle, 'Pune')
    generic.FindElement(selector.searchItem, selector.div).each(function (el) {
        if (el.text().includes('Shivaji')) {
            el.click()
        }
    })
})

And('Enter the search OYO element using js', () => {
    generic.SearchElement(selector.searchEle, 'Pune')
    generic.FindElement(selector.searchItem, selector.div).then(function (ela) {
        Array.from(ela).forEach(function (el) {
            if (el.textContent.includes('Viman Nagar')) {
                el.click()
            }
        })
    })
})

Then('Validate the Search Element', () => {
    generic.ElementWithText(selector.oyologinBtn, 'Login / Signup')
})



Given("Navigate to the Kesari Page", () => {
    // generic.Visit(selector.kUrl)
    cy.visit("https://ksrtc.in")
})

When('Enter the search Kesari element', () => {
    generic.SearchElement(selector.kesariSearchEle, 'BAL')
    generic.GetElement(selector.keasariSearchLst).each((el)=>{
        if (el.text() == "BALLARI") {
            cy.wrap(el).click()
        }
    })
})

Then('Validate the Search Kesari Element', () => {
    // generic.ElementWithText(selector.oyologinBtn, 'Login / Signup')

  

    
})







