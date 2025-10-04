
//  npm install -D cypress-iframe
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CSSSelector from "../../../support/cssElement";
import GenericFunctions from "../../../support/PageObject/GenericsFunctions";

const selector = new CSSSelector()
const generic = new GenericFunctions()

Given("Navigate to Automation Practice Page", () => {
    generic.Visit(selector.rsUrl)
})

When('Find the iframe', () => {
    generic.frameLoaded(selector.frameLoaded)
    generic.iframe(selector.mentroship).eq(0).click() 
})

Then('Validate the iframe element', () => {
    generic.iframe(selector.bronze).eq(0).should('have.text', 'BRONZE') 
})

