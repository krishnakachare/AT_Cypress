// npm install --save-dev cypress-file-upload
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CSSSelector from "../../../support/cssElement";
import GenericFunctions from "../../../support/PageObject/GenericsFunctions";

const selector = new CSSSelector()
const generic = new GenericFunctions()

const filepath = '../../cypress/fixtures/MinSkole Logo.jpg'  
Given("Navigate to heroku Page", () => {
    generic.Visit(selector.hrUrl)
})

When('Attach File', () => {
    generic.GetElement(selector.input).attachFile(filepath)
    generic.Click(selector.btn)
})

Then('Validate the file is uploded', () => {
    generic.GetElement(selector.msg).should(selector.text, 'File Uploaded!')
    generic.containsEle(selector.img, 'MinSkole Logo.jpg')
})
