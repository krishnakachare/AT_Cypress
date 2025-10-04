///<reference types="cypress"/>

Cypress.on("uncaught:exception", () => {
        return false;
});

describe("Cypress commands for handel elements which is outside the DOM", () => {
        it("validate browser page title", () => {
                cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html");
                cy.title().then(title => {
                        cy.log(title)
                        expect(title).to.eql("WebDriver | Popups & Alerts")
                });
        });

        it("validate browser page url", () => {
                cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html");
                cy.url().then(url => {
                        cy.log(url);
                        expect(url).to.eql("http://www.webdriveruniversity.com/Popup-Alerts/index.html");
                });
                // cy.url().should("contain", "http://www.webdriveruniversity.com/Popup-Alerts/index.html");
                cy.url().should("includes", "http://www.webdriveruniversity.com/Popup-Alerts/index.html");
                // cy.url().should("have.text", "http://www.webdriveruniversity.com/Popup-Alerts/index.html");
        });

        it("Get DOM object", () => {
                cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html");
                cy.document().then(doc => {
                        cy.log(doc)
                });
        });

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


        it("What is Diff. b/t Cypress & cy", () => {
                // cy.stub(object,method)
                // what is Object?  --> js data type whos store data more iteratively/ Descriptive form
                // Object ---> key/Properties & Values
                // Values => Have diff types --> String, no, function
                // what is Method?  -->
                // let kk = {
                //         Name: "ABC",
                //         MobNo: 10,
                //         write: function () {
                //                 console.log("HI I am METHOD")
                //         }
                // }
                // kk.write()

                // Interview Que. --> What is Diff. b/t Cypress & cy
                // Ans.
                // Cypress --> Object
                // cy ---> Method of cypress

                cy.log(Cypress)
                //  cy.get()
                //  cy.contains()
                //  url
                //  window
                cy.log(cy)
                // window global object  --> Browser ---> Cypress

                // Cypress --> Cy--> Window
                //            ---> get, contains, url,-----
        });

        it("cy.reload() command", () => {
                cy.visit("https://example.cypress.io/commands/actions?");
                cy.reload()
                cy.get("select.action-select-multiple").select(["fr-apples", "fr-oranges"])
        });

        it("cy.go() command", () => {
                // cy.go(string/number)
                // cy.go("forward")  // cy.go(1)
                // cy.go("back") // cy.go(-1)

                cy.visit("https://practice.automationbro.com/cart/");  // cart page
                cy.get("#menu-item-489").click();  // Home page
                // cy.go("back");  // cart page
                cy.go(-1);
                // cy.go("forward");  // home page
                cy.go(1);
        });

        it("cy.pause() command", () => {
                // cy.pause() --> pause the test script
                // use for debugging
                cy.visit("https://practice.automationbro.com/cart/");  // cart page
                cy.get("#menu-item-489").click();  // Home page
                cy.go(-1);
                cy.pause()
                cy.go(1);
        });

        it("cy.screenshot() command", () => {
                // cy.pause() --> pause the test script
                // use for debugging
                cy.visit("https://practice.automationbro.com/cart/");  // cart page
                cy.get("#menu-item-489").click();  // Home page
                cy.go(-1);
                cy.screenshot()
                cy.go(1);
        });

        // WE was covered already ---->
        //           cy.clear()  -->  to clear input box/ user input
        //           cy.trigger(eventName, x, y, options)   --> handel events
        //           cy.as()  --> cypress variable
        //           cy.wrap()  ---> wrap object (converting object into cypress object)


        //cy.viewport()
        it("cy.viewport() command", () => {
                // cy.viewport(diviceName/innerWidth,Hight,mode)
                cy.visit("https://demoblaze.com/")
                cy.wait(4000)
                // cy.viewport(800, 450)
                cy.viewport("iphone-6")
        });

        //cy.its(propertyName, options)  // eg. keyName, length
        it("cy.its() command", () => {
                // let a = "cypress"
                // String, array, object, 
                // cy.its(propertyName, options) 
                let a = {
                        FName: "kk",
                        MobNo: 100
                }
                // cy.wrap(a).its("FName").then(el => cy.log(el)) // a.FName
                // cy.wrap([1, 2, 3, 4]).its(1).then(el => cy.log(el))  // index === key == PropertyName
                // cy.wrap([1, 2, 3, 4]).its("length").then(el => cy.log(el))
        });


        // cy.invoke(options, functionName, args...)  //Name of function to be invoked(jQuery functions are used).
        it("cy.invoke() command", () => {
                // cy.invoke(options, functionName, args...)
                // functionName == methodName ---> jQuery --> js lib
                cy.visit("https://demoblaze.com/")
                cy.wait(4000)
                // get html element text
                // cy.get("#nava").invoke("text").then(el=>cy.log(el)) 

                // get id,class,href value     
                // cy.get("#nava").invoke("attr","id").then(el=>cy.log(el))  
                // cy.get("#nava").invoke("attr","class").then(el=>cy.log(el))
                // cy.get("#nava").invoke("attr","href").then(el=>cy.log(el)) 

                // cy.get("#nava").invoke("removeAttr","href").then(el=>cy.log(el)) // remove the attribute from html element

                // can update the attribute values
                // cy.get("#nava").its("id").should("have.attr", "id", "nava");
                // cy.get("#nava").invoke("attr", "id", "Hi I am cypress learner").should("have.attr", "id", "Hi I am cypress learner");
                // cy.get("#nava").its("id").should("have.attr", "id", "nava");
        });


        //  cy.task(event, arg, options)
        it("cy.task() command", () => {
                cy.log("Hi")
                // event == function == method

                // function logMsg(para) {
                //         console.log(para)
                // }
                // logMsg("Its my Task")
                
                cy.task("logMsg", "Its my Task").then(el => console.log(el))

        });











        ////////////////////////////////////////////////////
        //           cy
        //           cy.window()
        //           cy.reload()
        //           // cy.go(direction)
        //           // direction ---> Number/string
        //           cy.pause()
        //           cy.screenshot()
        //           cy.viewport()
        //           cy.clear()
        //           cy.trigger(eventName, x, y, options)
        //           cy.as()
        //           cy.wrap()
        //           cy.its(propertyName, options)
        //           cy.invoke()  //Name of function to be invoked.

        //           cy.shadow()
        //           //Traverse into the shadow DOM of an element.
        //           cy.root()
        //           //Get the root DOM element.
        //           cy.within(callbackFn)

        //           cy.task()

        //           cy.debug()
        //           cy.clock()
        //           cy.tick()
        //           cy.exec(command)


        //           cy.spy()
        //           cy.stub()
        //           cy.intercept()
        //           cy.request()

        //           cy.getCookie()
        //           cy.getCookies()
        //           cy.session()
        //           cy.clearLocalStorage()
        //           cy.clearCookie()
        //           cy.clearCookies()
        //           cy.location()
        //           cy.origin()

        //           // Cy. --> We not have anything

        //           cypress
        //           cypress.cli()
        //           cypress.defineConfig()
        //           cypress.open()
        //           cypress.run()

        //           Cypress
        //           Cypress.arch
        //           Cypress.currentRetry
        //           // an object with title and titlePath properties
        //           Cypress.currentTest
        //           // the title of the current test
        //           Cypress.currentTest.title
        //           // an array with the current test's title path
        //           Cypress.currentTest.titlePath
        //           Cypress.testingType
        //           Cypress.config(name, value)
        //           Cypress.version()
        //           Cypress.browser()
        //           Cypress.log()
        //           Cypress.spec()
        //           Cypress.env()
        //           Cypress.on()
        //           Cypress.currentTest()
        //           Cypress.Commands()
        //           Cypress.Cookies()
        //           Cypress.Keyboard()
        //           Cypress.SelectorPlayground()
        //           Cypress.Screenshot()
        //           //Cypress automatically includes Bluebird and exposes it as Cypress.Promise.
        //           Cypress.Promise()

        //           //Cypress automatically includes lodash and exposes it as Cypress._. Call any valid Lodash method on Cypress._
        //           Cypress._.times()
        //           //Cypress automatically includes jQuery and exposes it as Cypress.$.
        //           Cypress.$(selector)


        //           /// Cypress Bundled Libraries =>
        //           // 1.Mocha
        //           // http://mochajs.org/
        //           // describe()
        //           // context()
        //           // it()
        //           // before()
        //           // beforeEach()
        //           // afterEach()
        //           // after()
        //           //           .only()
        //           //           .skip()

        //           // 2. Chai
        //           http://chaijs.com/
        //           https://github.com/chaijs/chai

})