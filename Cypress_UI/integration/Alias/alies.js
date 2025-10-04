///<reference types="cypress"/>

// describe, context
// it, specify

// xdescribe, xcontext
// it.only/ it.skip, specify.only/ specify.skip

// alies ---> Cypress variables
// as("variableName")

// cy.get(".abc")-- > Need perform multiple operations

// Example -->
// cy.get(".abc").type("xyz")
// cy.get(".abc").should("")   // have.text, contian, include

describe("Alies (Cypress variables)", () => {
          it("Need of variables", () => {
                    cy.visit('https://www.weifieldcontracting.com/contact/')
                    cy.get('[name="input_1.3"]').type(" RAM ");
                    // cy.get('[name="input_1.3"]').should("have.text", "RAM");

                    // what is the difference bt have.text & have.value ?
                    // cy.get('[name="input_1.3"]').should("have.value", " RAM ");

                    // // value ---> user input
                    // // text ---> HTML text

                    // // clear() --> clear user input
                    // cy.get('[name="input_1.3"]').clear();

                    // how to call object methods (dot , bracket)
                    // .dot
                    // cy-- > Object
                    // get()-- > method
                    // cy.type().get()
          })

          it.only("Store cypress commands in variable", () => {
                    cy.visit('https://www.weifieldcontracting.com/contact/')

                    // Js
                    // let element = cy.get('[name="input_1.3"]')

                    // cy.log(element)
                    // // Parent command
                    // get,contains,request,vist

                    // // child command
                    // type, click,check,clear,contains
                    // // Both parent + child ----> contains
                    // cy.get('[name="input_1.3"]').type(" RAM ");
                    // element.type(" RAM ");
                    // element.should("have.value", " RAM ");
                    // element.clear();

                    // Cypress variable

                    cy.get('[name="input_1.3"]').as("element");

                    cy.get("@element").type(" RAM ");
                    cy.get("@element").should("have.value", " RAM ");
                    cy.get("@element").clear();
                    cy.get("@element").should("have.value", "");
          });

})

// Use of alies  ==>

// 1. API  --> cy.request
// 2. Routes ---> cy.intercept   /// Dynamic wait
// 3. In code ---> 1. store the file data  2. store element

