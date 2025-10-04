///<reference types="cypress"/>

// User actions (user inputs) -->

// click
// dblclick
// rightclick
// type
// clear
// check
// uncheck
// select
// drag-drop
// scroll
// mouseactions
// keyPress

// Input tags recives inputs from users

// .check() --> 1.CheckBox  2.RadioButton
// .click() --> 1.CheckBox  2.RadioButton

// Question ==>
//1. Difference bt CheckBox & RadioButton
//2. Difference bt .Check() & .Click()

// .check(value/values, options)
// .uncheck(value/values, options)

//1. Assert empty check box, Check check box & assert
//2. Check multiple checkbox & assert, Uncheck & assert
//3. Check check box with click  
//4. Difference between check & Click

xdescribe("Handel Check box", () => {
          it("1. Assert default check boxs", () => {
                    cy.visit("http://www.tizag.com/htmlT/htmlcheckboxes.php");
                    cy.get("[value='soccer']").first().should("not.be.checked");
                    cy.get("[value='soccer']").eq(1).should("be.checked");
          });

          it("2. Change default conditions of check boxs & assert", () => {
                    cy.visit("http://www.tizag.com/htmlT/htmlcheckboxes.php");
                    cy.get("[value='soccer']").first().check().should("be.checked");
                    cy.get("[value='soccer']").eq(1).uncheck().should("not.be.checked");
          });

          it("3. Check check boxes with click action", () => {
                    cy.visit("http://www.tizag.com/htmlT/htmlcheckboxes.php");
                    cy.get("[value='soccer']").eq(1).should("be.checked");
                    cy.get("[value='soccer']").eq(1).click().should("not.be.checked");
                    // After the click action condition will be opposite
                    cy.get("[value='soccer']").eq(1).check().should("be.checked");
                    // Check will mainten check condition
          });

          it("4. Validate multiple Check check boxes ", () => {
                    cy.visit("http://www.tizag.com/htmlT/htmlcheckboxes.php");
                    // cy.get("[value='soccer']").eq(0).check().should("be.checked");

                    // With css
                    // cy.get("[type='checkbox']").check().should("be.checked");

                    // with check command
                    // cy.get("[type='checkbox']").check("football").should("be.checked");

                    // we can pass array to check
                    cy.get("[type='checkbox']").check(["football", "baseball"]).should("be.checked");
          });
});


// Radio buttons ==>
//1. Assert empty Radio button, Check Radio button & assert
//2. Check multiple Radio buttons & assert
//3. Check Radio button with click  

describe("Radio Buttons", () => {
          it("1. Assert default Radio button condition", () => {
                    cy.visit("http://www.tizag.com/htmlT/htmlradio.php");
                    cy.get(".display form > input").first().should("be.checked");
                    // cy.get(".display form > input").first().should("have.attr", "checked", "yes");
                    cy.get(".display form > input").first().should("have.attr", "checked", "checked");

                    // For unchecked button
                    cy.get(".display form > input").eq(1).should("not.be.checked");
                    cy.get(".display form > input").eq(1).should("not.have.attr", "checked", "checked");
          });

          it("2. Check Radio button & assert", () => {
                    cy.visit("http://www.tizag.com/htmlT/htmlradio.php");
                    cy.get(".display form > input").first().check().should("be.checked");
                    cy.get(".display form > input").first().should("have.attr", "checked", "checked");

                    // For unchecked button
                    cy.get(".display form > input").eq(1).check().should("be.checked");

                    // No action
                    cy.get(".display form > input").first().should("not.be.checked");
                    cy.get(".display form > input").first().should("have.attr", "checked", "checked");
          });


          it("3. Check Radio button & assert with Click action", () => {
                    cy.visit("http://www.tizag.com/htmlT/htmlradio.php");
                    cy.get(".display form > input").first().click().should("be.checked");
                    cy.get(".display form > input").first().should("have.attr", "checked", "checked");

                    // For unchecked button
                    cy.get(".display form > input").eq(1).click().should("be.checked");

                    // No action
                    cy.get(".display form > input").first().should("not.be.checked");
                    cy.get(".display form > input").first().should("have.attr", "checked", "checked");
          });

          it.only("4. Check multiple Radio buttons & assert", () => {
                    cy.visit("http://www.tizag.com/htmlT/htmlradio.php");
                    cy.get(".display form > input").check().should("be.checked");

                    // cy.wait(2000)
                    // // Assert radio buttons
                    cy.get(".display form > input").eq(0).should("not.be.checked");
                    cy.get(".display form > input").eq(1).should("not.be.checked");
                    cy.get(".display form > input").eq(2).should("be.checked");
          });
});































