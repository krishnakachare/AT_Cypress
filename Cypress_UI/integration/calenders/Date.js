// Calender UI gothrough
// Real Example
// Date
// Cy

// JavaScript stores dates as number of milliseconds since January 01, 1970.

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// new Date(year,month,day,hours,minutes,seconds,ms)
// JavaScript counts months from 0 to 11:
// January = 0.
// December = 11.

// let date = new Date()
// let date = new Date("2023-03-28")
// console.log(date)
// console.log(date.toDateString())
// console.log(typeof (date.toDateString()))

// Get Methods ==>

//1. getFullYear()	    Get year as a four digit number (yyyy)
//2. getMonth()	    Get month as a number (0-11)
//3. getDate()	    Get day as a number (1-31)
//4. getDay()	    Get weekday as a number (0-6)
//5. getHours()	    Get hour (0-23)
//6. getMinutes()	    Get minute (0-59)
//7. getSeconds()	    Get second (0-59)
//8. getMilliseconds()  Get millisecond (0-999)

// Set Methods ==> Two Ways
//1. Set by set methods directly
//2. Use Get method + increment Pass it to set methods

//1. setFullYear()	   Set the year (optionally month and day)
//2. setMonth()	   Set the month (0-11)
//3. setDate()	   Set the day as a number (1-31)
//4. setHours()	   Set the hour (0-23)
//5. setMinutes()	   Set the minutes (0-59)
//6. setSeconds()      Set the seconds (0-59)

//======================================================

// inbuild class in js
// e.g Date
// JavaScript stores dates as number of milliseconds since January 01, 1970.

// varible --> new className
let currentDate = new Date()
// console.log(typeof currentDate) // object
// console.log(currentDate)   // 2023-04-05T02:51:09.519Z

// Object have properties & methods ----->

// 1. toString()
// Action = converting object to string
// Return = string

// console.log(currentDate.toString())  // Wed Apr 05 2023 08:21:09 GMT+0530 (India Standard Time)
// console.log(typeof currentDate.toString()) // string

// 2. toLocalString()
// Action = converting object to string
// Return = string

// console.log(currentDate.toLocaleString())  // 5/4/2023, 8:27:20 am
// console.log(typeof currentDate.toLocaleString())  // string

// console.log(currentDate.toLocaleString('default', { month: "short" }))   // Apr
// console.log(currentDate.toLocaleString('default', { month: "long" }))   // April

console.log( currentDate.toLocaleString('default', { month: "2-digit", day: "2-digit" }).split("/").reverse().join("/"))

// CURD operations ---->
// Get methods ===>

//1. getFullYear()	    Get year as a four digit number (yyyy)
// Action = extract fullYear from date Object
// Return = number

// console.log(currentDate.getFullYear())  // 2023
// console.log(typeof currentDate.getFullYear()) // number

//2. getMonth()	    Get month as a number (0-11)
// Jan == 0
// Dec == 11
// Action = extract month from date Object
// Return = number

// console.log(currentDate.getMonth())  // 3
// console.log(typeof currentDate.getMonth()) // number

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// console.log(months[3])  // April
// console.log(months[currentDate.getMonth()]) // April

//3. getDate()	    Get day as a number (1-31)
// Action = extract Date from date Object
// Return = number

// console.log(currentDate.getDate())          // 7
// console.log(typeof currentDate.getDate())  //  number

//4. getDay()	    Get weekday as a number (0-6)
// 0 = Sunday
// 6 = Sat
// Action = extract Day from date Object
// Return = number

// console.log(currentDate.getDay())          // 5
// console.log(typeof currentDate.getDay())  //  number
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(days[currentDate.getDay()])   // Friday

// //5. getHours()	    Get hour (0-23)
// console.log(currentDate.getHours())  // 8
// //6. getMinutes()	    Get minute (0-59)
// console.log(currentDate.getMinutes())  // 18
// //7. getSeconds()	    Get second (0-59)
// console.log(currentDate.getSeconds())  // 9
// //8. getMilliseconds()  Get millisecond (0-999)
// // 1 sec == 1000 MS
// console.log(currentDate.getMilliseconds())

//-------------------------------------------------------------
// Set methods --->
// we can custmize date & time [we can update the object]
// Use => Custmize time zone

// current time + add
// we can set timezone

//1. setFullYear()	   Set the year (optionally month and day)

// console.log(currentDate)  // 2023-04-08T02:40:34.502Z
// currentDate.setFullYear(2010)
// console.log(currentDate)  // 2023-04-08T02:40:34.502Z
// currentDate.setFullYear(2010, 1, 10)
// console.log(currentDate)  // 2010-02-10T02:42:32.155Z

// //2. setMonth()	   Set the month (0-11)
// console.log(currentDate)  // 2023-04-08T02:44:33.553Z
// currentDate.setMonth(0)
// console.log(currentDate)  // 2023-01-08T02:44:33.553Z

// //3. setDate()	   Set the day as a number (1-31)
// console.log(currentDate)  // 2023-04-08T02:44:33.553Z
// currentDate.setDate(10)
// console.log(currentDate)  // 2023-01-10T02:44:33.553Z

// //4. setHours()	   Set the hour (0-23)
// console.log(currentDate.toString())  // Sat Apr 08 2023 08:17:19 GMT+0530 (India Standard Time)
// currentDate.setHours(10)
// console.log(currentDate.toString())  // Sat Apr 08 2023 10:18:08 GMT+0530 (India Standard Time)

// //5. setMinutes()	   Set the minutes (0-59)
// console.log(currentDate.toString())  // Sat Apr 08 2023 08:19:11 GMT+0530 (India Standard Time)
// currentDate.setMinutes(20)
// console.log(currentDate.toString())  // Sat Apr 08 2023 08:20:14 GMT+0530 (India Standard Time)

// //6. setSeconds()      Set the seconds (0-59)
// console.log(currentDate.toString())  // Sat Apr 08 2023 08:19:11 GMT+0530 (India Standard Time)
// currentDate.setSeconds(40)
// console.log(currentDate.toString())  // Sat Apr 08 2023 08:21:40 GMT+0530 (India Standard Time)










describe("Automate calender", () => {

          Cypress.on("uncaught:exception", () => {
                    return false
          })

          it.only("Automate SpiceJet Date calender for Depart date & Return date", () => {

                    cy.log("##--- Depart Date ---##")
                    var DepartDateObj = new Date()
                    DepartDateObj.setDate(DepartDateObj.getDate() + 5)
                    var Departyear = DepartDateObj.getFullYear()
                    var DepartMonth = DepartDateObj.getMonth()
                    DepartMonth = DepartDateObj.toLocaleString("default", { month: "long" })
                    var DepartMonthStr = DepartDateObj.toLocaleString('default', { day: "2-digit", month: "2-digit" }).split("/").reverse().join("/")
                    var DepartDate = DepartDateObj.getDate()
                    cy.log(Departyear, DepartMonth, DepartDate)

                    cy.visit("https://book.spicejet.com/");
                    cy.get("#custom_date_picker_id_1").first().siblings("button").click({ force: true })

                    function SelectYear(para) {
                              cy.get(".ui-datepicker-title").eq(para).then((el) => {
                                        if (!el.text().includes(Departyear)) {
                                                  cy.get(".ui-datepicker-next.ui-corner-all").click({ force: true })
                                                  SelectYear(1)
                                        }
                              })
                    }

                    function SelectMonth(para) {
                              return cy.get(".ui-datepicker-title").eq(para).then((el) => {
                                        if (!el.text().includes(DepartMonth)) {
                                                  cy.get(".ui-datepicker-next.ui-corner-all").click({ force: true })
                                                  SelectMonth(1)
                                        }
                              })
                    }

                    SelectYear(0)
                    SelectMonth(0).then(el => {
                              cy.wrap(el).parent("div").siblings("table").find(".ui-state-default").each((el) => {
                                        if (el.text() == DepartDate) cy.wrap(el).click({ force: true })
                              })
                    })
                    cy.get("#custom_date_picker_id_1").first().should("have.value", DepartMonthStr)


                    //--------------------------------------
                    cy.log("##--- Return Date ---##")
                    var ReturnDateObj = new Date()
                    ReturnDateObj.setDate(ReturnDateObj.getDate() + 210)
                    var ReturnYear = ReturnDateObj.getFullYear()
                    var ReturnMonth = ReturnDateObj.getMonth()
                    ReturnMonth = ReturnDateObj.toLocaleString("default", { month: "long" })
                    var ReturnMonthStr = ReturnDateObj.toLocaleString('default', { day: "2-digit", month: "2-digit" }).split("/").reverse().join("/")
                    var ReturnDate = ReturnDateObj.getDate()
                    cy.log(ReturnYear, ReturnMonth, ReturnDate)

                    cy.get("#custom_date_picker_id_2").last().click({ force: true })

                    function ReturnSelectYear(para) {
                              cy.get(".ui-datepicker-title").eq(para).then((el) => {
                                        if (!el.text().includes(ReturnYear)) {
                                                  cy.get(".ui-datepicker-next.ui-corner-all").click({ force: true })
                                                  ReturnSelectYear(1)
                                        }
                              })
                    }
                    function ReturnSelectMonth(para) {
                              return cy.get(".ui-datepicker-title").eq(para).then((el) => {
                                        if (!el.text().includes(ReturnMonth)) {
                                                  cy.get(".ui-datepicker-next.ui-corner-all").click({ force: true })
                                                  ReturnSelectMonth(1)
                                        }
                              })
                    }

                    ReturnSelectYear(0)
                    ReturnSelectMonth(0).then(el => {
                              cy.wrap(el).parent("div").siblings("table").find(".ui-state-default").each((el) => {
                                        if (el.text() == ReturnDate) cy.wrap(el).click({ force: true })
                              })
                    })
                    cy.get("#custom_date_picker_id_2").last().should("have.value", ReturnMonthStr)
          })


})


describe("Automate calender", () => {
          Cypress.on("uncaught:exception", () => {
                    return false;
          });

          it.only("Automate SpiceJet Date calender for Depart date & Return date", () => {
                    // Depart Date
                    cy.log("##----------Depart Date-----------##");
                    let DDate = new Date();
                    DDate.setDate(DDate.getDate() + 12);
                    let dDate = DDate.getDate();
                    let dMonth = DDate.getMonth();
                    dMonth = DDate.toLocaleString("default", { month: "long" });
                    let dYear = DDate.getFullYear();
                    cy.log(dDate, dMonth, dYear);

                    cy.visit("https://book.spicejet.com/");
                    cy.get("#custom_date_picker_id_1").first().siblings("button").click({ force: true });

                    function SelectYear(index, Year) {
                              cy.get(".ui-datepicker-title").eq(index).then(year => {
                                        // cy.log(Year);
                                        // cy.log(year.text());
                                        // cy.log(!year.text().includes(Year));
                                        if (!year.text().includes(Year)) {
                                                  cy.get(".ui-datepicker-next.ui-corner-all").then(nextBtn => {
                                                            cy.wrap(nextBtn).click({ force: true });
                                                            nextBtn.hasClass("ui-state-disabled") ? SelectYear(1, Year) : SelectYear(0, Year)
                                                  });
                                        };
                              });
                    };

                    function SelectMonth(index, Month) {
                              return cy.get(".ui-datepicker-title").eq(index).then(month => {
                                        // cy.log(month.text());
                                        // cy.log(!month.text().includes(Year));
                                        if (!month.text().includes(Month)) {
                                                  cy.get(".ui-datepicker-next.ui-corner-all").then(nextBtn => {
                                                            cy.wrap(nextBtn).click({ force: true });
                                                            nextBtn.hasClass("ui-state-disabled") ? SelectMonth(1, Month) : SelectMonth(0, Month)
                                                  });

                                        };
                              });
                    };

                    SelectYear(0, dYear);
                    SelectMonth(0, dMonth).then(month => {
                              cy.wrap(month).parent("div").siblings("table").find(".ui-state-default").each(date => {
                                        // cy.log(date.text() == dDate);
                                        if (date.text() == dDate) {
                                                  cy.wrap(date).click({ force: true });
                                        };
                              });
                    });

                    // //------------------------------------------------------------------------

                    // // Return Date
                    cy.log("##----------Return Date-----------##");
                    let RDate = new Date();
                    RDate.setDate(RDate.getDate() + 320);
                    let rDate = RDate.getDate();
                    let rMonth = RDate.getMonth();
                    rMonth = RDate.toLocaleString("default", { month: "long" });
                    let rYear = RDate.getFullYear();
                    cy.log(rDate, rMonth, rYear);

                    cy.get("#custom_date_picker_id_2").last().click({ force: true });
                    SelectYear(0, rYear);
                    SelectMonth(0, rMonth).then(month => {
                              cy.wrap(month).parent("div").siblings("table").find(".ui-state-default").each(date => {
                                        // cy.log(date.text() == rDate);
                                        if (date.text() == rDate) {
                                                  cy.wrap(date).click({ force: true });
                                        };
                              });
                    });
          });
});
