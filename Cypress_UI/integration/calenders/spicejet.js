// xdescribe("Automate calender", () => {
//           Cypress.on("uncaught:exception", () => {
//                     return false;
//           });

//           it.only("Automate SpiceJet Date calender for Depart date & Return date", () => {
//                     // Depart Date
//                     cy.log("##----------Depart Date-----------##");
//                     let DDate = new Date();
//                     DDate.setDate(DDate.getDate() + 270);
//                     let dDate = DDate.getDate();
//                     let dMonth = DDate.getMonth();
//                     dMonth = DDate.toLocaleString("default", { month: "long" });
//                     let selectedDate = DDate.toLocaleString("default", { day: "2-digit", month: "2-digit" }).split("/").reverse().join("/");
//                     //  01/08
//                     // ["01,08"]  ---> reverse ["08,"01] ---> join("/")---> 08/01
//                     let dYear = DDate.getFullYear();
//                     cy.log(dDate, dMonth, dYear, selectedDate);
//                     console.log(selectedDate)

//                     cy.visit("https://book.spicejet.com/");
//                     cy.get("#custom_date_picker_id_1").first().siblings("button").click({ force: true });

//                     function SelectYear(index) {
//                               cy.get(".ui-datepicker-title").eq(index).then(year => {
//                                         // cy.log(Year);
//                                         // cy.log(year.text());
//                                         // cy.log(!year.text().includes(Year));
//                                         if (!year.text().includes(dYear)) {
//                                                   cy.log(year.text());
//                                                   cy.get(".ui-datepicker-next.ui-corner-all").then(nextBtn => {
//                                                             cy.wrap(nextBtn).click()
//                                                             if (nextBtn.hasClass("ui-state-disabled")) {
//                                                                       SelectYear(1)
//                                                             } else {
//                                                                       SelectYear(0)
//                                                             }
//                                                   })
//                                         };
//                               });
//                     };

//                     function SelectMonth(index) {
//                               return cy.get(".ui-datepicker-title").eq(index).then(month => {
//                                         // cy.log(month.text());
//                                         // cy.log(!month.text().includes(Year));
//                                         if (!month.text().includes(dMonth)) {
//                                                   cy.log(month.text());
//                                                   cy.get(".ui-datepicker-next.ui-corner-all").then(nextBtn => {
//                                                             cy.wrap(nextBtn).click()
//                                                             if (nextBtn.hasClass("ui-state-disabled")) {
//                                                                       SelectMonth(1)
//                                                             } else {
//                                                                       SelectMonth(0)
//                                                             }
//                                                   })
//                                         };
//                               });
//                     };

//                     SelectYear(0);
//                     SelectMonth(0).then(month => {
//                               cy.wrap(month).parent("div").siblings("table").find(".ui-state-default").each(date => {
//                                         if (date.text() == (dDate)) {
//                                                   cy.log(month.text());
//                                                   cy.wrap(date).click({ force: true })
//                                         }
//                               });
//                     });

//                     cy.get("#custom_date_picker_id_1").first().should("have.value", selectedDate);
//                     // //------------------------------------------------------------------------

//                     // // // Return Date
//                     // cy.log("##----------Return Date-----------##");
//                     // let RDate = new Date();
//                     // RDate.setDate(RDate.getDate() + 320);
//                     // let rDate = RDate.getDate();
//                     // let rMonth = RDate.getMonth();
//                     // rMonth = RDate.toLocaleString("default", { month: "long" });
//                     // let rYear = RDate.getFullYear();
//                     // cy.log(rDate, rMonth, rYear);


//           });
// });


it("Type Date in input", () => {
          cy.visit("http://117.247.89.131/QMS1/BookingMaster.aspx")
          cy.wait(4000);
          cy.get("table:nth-child(2) input:nth-child(1)").first().type(1, { force: true }).type(1, { force: true })
})