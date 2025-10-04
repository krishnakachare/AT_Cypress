///<reference types="cypress"/>

// Types of dropdowns =>

// Opening on user actions --. e.g Click, mouseover
// 1. Static Drop-down  --> List data limited 
// a. Select drop down  --> Select tag
// b. Dependent dropdown

// 2. Dynamic Drop-down --> List data dynamic
// cy.get("list").each((listElements,indix,list)=>{
//           if(conditions){
//           }
// })

describe("Handel Dropdowns", () => {
   Cypress.on("uncaught:exception", () => {
      return false;
   });

   it("Static dropdown : Select tag", () => {
      cy.visit("http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
      // select(value/values,options)
      cy.get("#dropdowm-menu-1").select("c#")
      cy.get("#dropdowm-menu-1").should("have.value", "c#")
   })

   // it("Static dropdown : Mouseover action", () => {
   //    cy.visit("https://www.oyorooms.com/")
   //    // cy.get(".c-nn640c.mddCityItem__cityItem").first().trigger("mouseover")
   //    cy.get(".c-nn640c.mddCityItem__cityItem").each(el => {
   //       // cy.wrap(el).trigger("mouseover");
   //       cy.wrap(el).realHover('mouse');
   //    })
   // })   // cypress real events

   it("Static dropdown : Mouseover action", () => {
      cy.visit("https://www.flipkart.com/")
      cy.get("._1_3w1N").trigger("mouseover")// .pO9syL._1s9xSv
      cy.get("._2NOVgj").each(el => {
         if (el.text() == "Gift Cards") cy.wrap(el).click()
      })
      cy.get("._3vKRL2").should("have.text", "Gift Card Store").and("be.visible")
   })

   it("Dynamic dropdown : Type action", () => {
      let flag = true;
      cy.visit("https://www.flipkart.com/")
      cy.get("._3704LK").type("computer")
      cy.wait(4000)
      cy.get(".col-12-12._1MRYA1._38UFBk li").find(".lrtEPN._17d0yO").each(el => {
         if (el.text() == "computer monitor") {
            cy.wrap(el).click()
            // flag = false
         }
      })
   })

   it("Dynamic dropdown : Type action, Ex-2", () => {
      cy.visit("https://www.google.co.in/");
      cy.get("#APjFqb").type("Cypress");
      cy.wait(4000)
      cy.get("ul li.sbct div div:nth-child(2) span:nth-child(1)").each(el => {
         if (el.text() == "cypress tutorial") {
            cy.wrap(el).click()
         }
      })
   })

   // it.only("Static dropdown : Dependent", () => {
   //    cy.visit("https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_cascading_dropdown");
   //    cy.get("#subject").select("Front-end")
   //    // cy.get("#topic")
   //    // cy.get("#chapter")
   // })// iframe
});



