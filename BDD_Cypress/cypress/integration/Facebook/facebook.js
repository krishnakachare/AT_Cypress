import { Given,Then  } from "cypress-cucumber-preprocessor/steps";

Given('User want to open Instagram Page',()=>{
    cy.visit('https://www.instagram.com/')
})

Then('User see {string} in page',(string)=>{
    cy.contains(string).should('be.visible')
})

//=======================================================

Given('User want to open Facebook page',()=>{
    cy.visit('https://en-gb.facebook.com/')
})

Then('User see {string} in title',(title)=>{
    cy.title(title).should('include',title)

})