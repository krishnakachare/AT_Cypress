///<reference types="cypress"/>

// mouseactions  --> Click, dbclick, rightclick, mouseOver

// 1. scroll ==>
// #Command ---> cy.scrollIntoView()

// xdescribe("Handel mouse scroll action", () => {

//           it("scroll page at specific element", () => {
//                     cy.visit("http://www.tizag.com/htmlT/htmlradio.php");
//                     cy.get(".cont a").scrollIntoView();
//           });
// });

// // Action ==> // drag-drop
// // MouseEvent --> Action (drad drop)
// // mouseEvent --> mousedown, mouseUp, mouseMove, mouseOver

// // child command -->
// // cy.trigger(event,x,y,option)
// // use trigger events to perform user actions


// xdescribe("Handel mouse actions by trigger method", () => {
//           // Drag Drop --> mousedown, mouseup,mousemove

//           it("Drag 'drag me' element & Drop on 'drop here' by trigger", () => {
//                     cy.visit("https://testpages.herokuapp.com/styled/drag-drop-javascript.html");
//                     cy.get("#draggable1").trigger("mousedown");
//                     cy.get("#droppable1").trigger("mousemove");
//                     cy.get("#droppable1 p").should("have.text", "Drop here");
//                     cy.get("#droppable1").trigger("mouseup", { force: true });
//                     cy.get("#droppable1 p").should("have.text", "Dropped!");
//           });

//           it.only("Drag 'drag me' element & Drop on 'No drop here' by trigger", () => {
//                     cy.visit("https://testpages.herokuapp.com/styled/drag-drop-javascript.html");
//                     cy.get("#draggable1").trigger("mousedown");
//                     cy.get("#droppable2").trigger("mousemove");
//                     cy.get("#droppable2 p").should("have.text", "No Drop here");
//                     cy.get("#droppable2").trigger("mouseup", { force: true });
//                     cy.get("#droppable2 p").should("have.text", "Dropped!");
//                     cy.get("#droppable2").trigger("mousedow")
//           });
// });

// Actions -->

xdescribe("Handel mouse actions ", () => {
          // mouseover
          it.skip("verify mouseover action", () => {
                    cy.visit("https://www.amazon.com/ref=nav_bb_logo");
                    // cy.get("#navBackToTop").scrollIntoView().should("have.css", "color", "rgb(0, 75, 145)").and("have.css", "background-color", "rgba(0, 0, 0, 0)").trigger("mouseover", { force: true }).should("have.css", "color", "rgb(17, 17, 17)").and("have.css", "background-color", "rgba(0, 0, 0, 0)");
                    // cy.get("#navBackToTop").scrollIntoView().trigger("mouseover", { force: true }).should("have.css", "color", "rgb(17, 17, 17)").and("have.css", "background-color", "rgba(0, 0, 0, 0)");
          });

          it("verify mouseover action: Example2", () => {
                    cy.visit("https://www.amazon.com/ref=nav_bb_logo");
                    cy.get("#nav-link-accountList").trigger("mouseover")
                    cy.get(".nav-action-inner").contains("Sign in").should("exist").and("be.visible")

          });

});

describe("validate user actions ", () => {

          // dbclick
          it("verify dbclick action", () => {
                    cy.visit("https://example.cypress.io/commands/actions?");
                    cy.contains("Double click to edit").dblclick();
                    cy.get(".action-input-hidden.form-control").should("be.visible");
                    //
                    cy.get(".action-input-hidden").should("exist");
                    cy.get(".action-input-hidden").should("be.visible");
                    // "not.exist"
                    // "not.be.visible"
          });

          // submit
          // cy.submit()
          it("verify submit action", () => {
                    cy.visit("https://example.cypress.io/commands/actions?");
                    cy.get("form.action-form").find("#couponCode1").type("ABC");
                    cy.get("form.action-form").submit()
                    cy.get("form.action-form").siblings("p").should("have.text", "Your form has been submitted!")
          });

          // select
          // cy.select(value/values,option)
          it("verify select action", () => {
                    cy.visit("https://example.cypress.io/commands/actions?");
                    // Single
                    // cy.get(".form-control.action-select").select("apples") // HTML TXT
                    // cy.get(".form-control.action-select").select("fr-apples")  // value

                    // Multiple
                    // cy.get("select.action-select-multiple").select(["apples", "oranges"])
                    cy.get("select.action-select-multiple").select(["fr-apples", "fr-oranges"])
          });

          // rightclick
          it("verify rightclick action", () => {
                    cy.visit("https://example.cypress.io/commands/actions?");
                    cy.get(".rightclick-action-div").last().rightclick();
                    cy.get(".rightclick-action-div").last().should("have.class", "hidden");
          });

          // type (keypress)
          it("verify keypress", () => {
                    cy.visit("https://example.cypress.io/commands/actions?");
                    // .type("ABC")
                    // .type("{keyName}")

                    cy.get("#email1").type("ABC@gmail.com").should("have.value", "ABC@gmail.com");
                    cy.get("#email1").type("{backspace}").should("have.value", "ABC@gmail.co");
                    cy.get("#email1").type("{selectall}{backspace}").should("have.value", "");
          });

          it("verify keypress", () => {
                    cy.visit("https://www.amazon.com/ref=nav_bb_logo");
                    cy.wait(4000)
                    cy.get("#twotabsearchtextbox").type("Mobile{enter}")
          });


});








