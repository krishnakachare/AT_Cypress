//# Type of popup/alert  ---->

const cypress = require("cypress");

// I. popup from DOM =>  e.g. Notification popups

// II. popup from window =>
// 1.Alert popup --> Validating String

// 2.prompt popup  --> Types of prompt on user inputs =>
// confirm -> true = ok, false = cancel
// User can pass input from UI

// Ex. URL => http://www.webdriveruniversity.com/Login-Portal/index.html?, https://the-internet.herokuapp.com/javascript_alerts

///<reference types="cypress"/>

Cypress.on("uncaught:exception", () => {
          return false;
});

describe("validate popups", () => {
        
          it("Get window object", () => {
                    cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html");
                    cy.get("#button1").click()
                    cy.window().then(win => {
                            cy.log(win)
                    });
    
                    // cy.on("window:alert", str => {
                    //           cy.log(str)
                    // })
            });
    
            it("listen window alert event object", () => {
                    cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html");
                    cy.get("#button1").click()
                    cy.on("window:alert", str => {
                            expect(str).to.eql("I am an alert box!")
                            cy.log(str)
                            // expect(str).to.be.called
                    })
    
                    // cy.on("window:alert")
            });
    
            it("listen window prompt event for OK/true", () => {
                    cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html");
                    cy.get("#button4").click()
                    cy.on("window:confirm", conf => {
                            // return == user input or prompt input
                            return true
                    });
                    cy.get("#confirm-alert-text").should("have.text", "You pressed OK!");  //You pressed Cancel!
            });
    
            it("listen window prompt event for cancel/false", () => {
                    cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html");
                    cy.get("#button4").click()
                    cy.on("window:confirm", conf => {
                            // return == user input or prompt input
                            return false
                    })
                    cy.get("#confirm-alert-text").should("have.text", "You pressed Cancel!");  //You pressed Cancel!
            });
    
            it.only("Handel window prompt popup", () => {
                    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
                    cy.window().then(win => {
                            cy.stub(win, "prompt").returns("cypress")
                            // cy.log(win.prompt())
                            // cy.log(win)
                    });
                    cy.get(".example ul li:nth-child(3) button").click();
                    cy.get("#result").should("have.text", "You entered: cypress");  //You pressed Cancel
            });
});









