import Fish from '../../fixtures/testdata.json'
describe('My first test suit', function () {

    // it('My first test case', function () {
    //     cy.visit("https://petstore.octoperf.com/actions/Catalog.action");


    //     // cy.get('#SidebarContent > a:nth-child(1) > img').click();    
    //     cy.get('#SidebarContent > [href*="FISH"] > img').click();

    // })
    beforeEach(function () {
        cy.fixture('testdata').then(function (testdata) {
            this.testdata = testdata
        })
    })

    it('Validate all the Fish Texts', function () {



        cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
        // cy.get('#SidebarContent > a:nth-child(1) > img').click();  

        cy.get('#SidebarContent > [href*="FISH"] > img').click();
        cy.get('div#Catalog table tbody tr').find('td a').each((el, i) => {
            if (i !== 0) {
                cy.get('div#Catalog table tbody tr').eq(i).find('td a').click()
                // expect(Fish['FishList']).should('have.text', )
                // cy.go('back')
                // cy.get('#Catalog').find('h2').then((el)=>{
                // let fishName = el.text()
                // cy.log(fishName)
                //     // expect(Fish['FishList']).should('have.text', fishName)
                // })
                // let validateText =  cy.get('#Catalog').find('h2').then((el)=>{
                //     let fishName = el.text()
                //     cy.log(fishName)
                // })

                cy.log(validateText)

                cy.get('#BackLink > a').click()
            }

        })



        // cy.get('#Catalog').find('td').children('a').eq(0).click()
        // cy.get('#BackLink > a').click()
        // cy.get('#Catalog').find('td').children('a').eq(1).click()
        // cy.get('#BackLink > a').click()
        // cy.get('#Catalog > table > tbody > tr > td > a').eq(2).click()
        // cy.get('#BackLink > a').click()
        // cy.get('#Catalog > table > tbody > tr > td > a').eq(3).click()
        // cy.get('#BackLink > a').click()
    })
})


// it.only('Validate all the Fish Texts', function () {
//     cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
//     cy.get('#SidebarContent > [href*="FISH"] > img').click();
//     cy.get('div#Catalog table tbody tr').find('td a').each((el, i) => {
//         if (i !== 0) {
//             cy.get('div#Catalog table tbody tr').eq(i).find('td a').click()

//             // get Fish Name
//             cy.get('#Catalog').find('h2').then((el) => {
//                 let fishName = el.text()
//                 cy.log(fishName)
//             })

//             cy.get('#BackLink > a').click()
//         }
//     })

// })
