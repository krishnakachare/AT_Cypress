// using install Plugin
// https://www.npmjs.com/package/cypress-iframe
// npm install -D cypress-iframe
// cypress/support/commands.js - import 'cypress-iframe';

/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

import 'cypress-iframe'
describe('frame test', function() {
it('test', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.frameLoaded('#courses-iframe')
    cy.iframe().find('a[href*="mentorship"]').eq(0).click()
    cy.iframe().find('h1[class*="pricing-title"]').should('have.length', '2')
})


})