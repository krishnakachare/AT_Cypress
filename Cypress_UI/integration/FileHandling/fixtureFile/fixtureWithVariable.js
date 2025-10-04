describe('Fetch data from fixture file using cypress fixture method using variables', function () {
          cy.fixture(filepath,encoding, options)
          // variable --> Global varible, Aliase, this keyword
          let globalfixtFileData

          // before hook
          before("Get data from fixture data", function () {
                    // //1. Using global variable -->
                    cy.fixture('ABC/user.json').then(fixtFileData => {
                              globalfixtFileData = fixtFileData
                    });

                    //  //2. Using Alies => Cypress variable
                    //  //as()  --->
                    cy.fixture('ABC/user.json').as("fixtFileData")

                    // // 3. this keyword
                    cy.fixture('ABC/user.json').then(function (fixtFileData) {
                              this.fixtFileData = fixtFileData
                    });
          });

          it('Using cy.fixture get data from fixture file', () => {
                    // cy.fixture('user').then(fixtFileData => {
                    //           cy.log(fixtFileData)
                    // })

                    // cy.fixture('user.json').then(fixtFileData => {
                    //           cy.log(fixtFileData)
                    // })

                    // Nested path
                    cy.fixture('ABC/user.json').then(fixtFileData => {
                              cy.log(fixtFileData)
                              // fixtFileData  ---> Array
                              // fixtFileData[0]  ---> object
                              cy.visit('https://www.weifieldcontracting.com/contact/')
                              cy.get('[name="input_1.3"]').type(fixtFileData[0].firstName)
                              cy.get('[name="input_1.6"]').type(fixtFileData[0].lastName)
                              cy.get('#input_2_2').type(fixtFileData[0].email)
                              cy.get('#input_2_3').type(fixtFileData[0].msg)
                    })
          });

          it('Using cy.fixture get data from fixture file with global variable', () => {
                    cy.log(globalfixtFileData)
                    // globalfixtFileData  ---> Array
                    // globalfixtFileData[0]  ---> object
                    cy.visit('https://www.weifieldcontracting.com/contact/')
                    cy.get('[name="input_1.3"]').type(globalfixtFileData[0].firstName)
                    cy.get('[name="input_1.6"]').type(globalfixtFileData[0].lastName)
                    cy.get('#input_2_2').type(globalfixtFileData[0].email)
                    cy.get('#input_2_3').type(globalfixtFileData[0].msg)
          });

          it('Using cy.fixture get data from fixture file with cypress variable(Alies)', () => {
                    cy.get("@fixtFileData").then(data => cy.log(data))

          });

          it.only('Using cy.fixture get data from fixture file with this keyword', function () {
                    cy.log(this.fixtFileData)
                    // console.log(this)
          });

});

  
