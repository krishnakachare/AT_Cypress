
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CSSSelector from "../../../support/cssElement";
import GenericFunctions from "../../../support/PageObject/GenericsFunctions";

const selector = new CSSSelector()
const generic = new GenericFunctions()


Given("Navigate to Spicejet Site", () => {
    generic.Visit(selector.spiUrl)
})


When('Validate the radio button functionality with select', () => {
    generic.Click(selector.roundTrip)
    generic.GetElement(selector.roundTrip).should('be.checked')
    generic.GetElement(selector.roundTripLabel).should(selector.class, 'select-label')
    generic.Click(selector.oneWay)
    generic.GetElement(selector.roundTrip).should('not.be.checked')
})

And('Validate the radio button functionality Not selected', () => {
    generic.Click(selector.oneWay)
    generic.GetElement(selector.roundTrip).should('not.have.class', 'select-label')
})

And('Validate the checkbox functionality with check', () => {
   generic.GetElement(selector.friendAndFamily).check()
   generic.GetElement(selector.familyFriendLabel).should(selector.text, ' Family & Friends')
   generic.GetElement(selector.friendAndFamily).should('be.checked')
})

Then('Validate the checkbox functionality with uncheck', () => {
    generic.GetElement(selector.seniorCitizen).check()
    generic.GetElement(selector.familyFriend).should('not.have.property', '::before')
})

