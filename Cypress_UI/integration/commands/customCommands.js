//cypress custom commands(user own commands) => we can make our own commands by our requirements in support > command.js

describe("Test suit", () => {
          it.only("To check 'PRODUCT STORE' TExt is visible to user after the login", () => {
                    let userName = "test"
                    cy.visit("https://demoblaze.com/");
                    cy.get("#login2").click();
                    cy.wait(2000)
                    cy.get("#loginusername").type(userName, { defaultCommandTimeout: 900 });
                    cy.get("#loginpassword").type("test", { defaultCommandTimeout: 900 });
                    cy.contains(".btn.btn-primary", "Log in").click();
                    cy.get("#login2").should("have.text", "LogOut");
                    cy.get("#login2").should("have.text", "Log out");
                    cy.get("#nameofuser").should("have.text", `Welcome ${userName}`);
          })
})






























        //           cy.session(id, setup, options) (setup==CallBackFun)

        //           API login
