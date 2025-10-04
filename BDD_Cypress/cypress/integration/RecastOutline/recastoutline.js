import { Given ,Then,When,And} from "cypress-cucumber-preprocessor/steps";

Given('User navigate to recast studio URL', () => {
    cy.visit('https://app.recast.studio/auth/login/?next=/')
})

When('User enter EmailId {string} and password {string}', (emailID, password) => {
    cy.get('#login-form_email').type(emailID)
    cy.get('#login-form_password').type(password)
})

And('User tap on "Login" button', () => {
    cy.get('button[type="submit"]').click()
})

And('Wait to load home page',()=>{
    cy.wait(5000)
})

Then('User able to visible create new projevt',()=>{
    cy.get('.ant-btn.ant-btn-primary.ant-btn-lg').should('be.visible')
})