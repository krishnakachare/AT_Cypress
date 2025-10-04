describe('automate calendra', () => {

    it('validate the datepicker', () => {
        cy.visit('https://www.redbus.com/')
        let dt = new Date();
        dt.setDate(dt.getDate() + 150)
        // Expected values 
        let year = dt.getFullYear()
        let month = dt.toLocaleString('default', { month: 'long' })
        let furturedate = dt.getDate()
        cy.log(year)
        cy.log(month)
        cy.log(furturedate)


        // function selectMonthAndYear(){
        //     // cy.get('#onward_cal').click()
        //     // cy.get(':nth-child(2) > .text-trans-uc').click()
        //     // cy.get('.monthTitle').last().then((el)=>{
        //     //     cy.log(el.text())

            //     cy.contains('Onward Date').click()
            //     cy.get('.rb-monthHeader > td.next > button').eq(1).click()
            //     cy.get('#rb-calendar_onward_cal .monthTitle').then((el)=>{
            //         cy.log(el.text())
            //     if(!el.text().includes(year)){
            //         cy.get('.rb-monthHeader > td.next > button').eq(1).click({force: true})
            //         selectMonthAndYear()
            //     }
            // }).then(()=>{
        //         cy.get('.monthTitle').last().then((el)=>{
        //             cy.log(el.text())
        //             if(!el.text().includes(month)){
        //                 cy.get('.rb-monthHeader > td.next > button').eq(1).click({force: true})
        //                 selectMonthAndYear()
        //             }
        //         })
        //     })
        // }
        // function selectDate(){
        //     cy.get('.we.day').contains(furturedate).click({force: true})
        //     return true

        // }

        // selectMonthAndYear()
        // selectDate()
    //     cy.contains('Onward Date').click()  // box
    //     function selectMonthAndYear(){
    //         cy.get('#rb-calendar_onward_cal  td.next > button').click()  // next btn
    //         cy.get('#rb-calendar_onward_cal .monthTitle').then((el) => {  // month
    //             cy.log(el.text())
            
            // if(!el.text().includes(year)){
            //     // cy.get('#rb-calendar_onward_cal > .rb-monthTable > tbody > :nth-child(5) > :nth-child(5)').click()
            //     cy.get('.we.day').includes(furturedate).click()
            //     selectMonthAndYear()
            // }
    //     })
            
    //     }
    
    //  selectMonthAndYear()
    //  selectMonthAndYear()
    //  selectMonthAndYear()
    //  selectMonthAndYear()

        // function YearandMonth() {
        //     cy.get('.monthTitle').last().then((el) => {
        //         if (!el.text().includes(year)) {
        //             cy.log(el.text())
        //             cy.get('.next').last().click()
        //             YearandMonth()
        //         }
        //     }).then((el) => {
                // if (!el.text().includes(month)) {
                //     cy.log(el.text())
                //     cy.get('.next').last().click()
                //     YearandMonth()
                // }
        //     })
        // }

        cy.contains('Onward Date').click()  // box
        function selectMonth(){
            cy.get('#rb-calendar_onward_cal .monthTitle').then((el) => {  // month
                cy.log(el.text())  // current month sep 2021
                if(!el.text().includes(year)){
                    cy.get('#rb-calendar_onward_cal td.next > button').click({force: true})  // next btn
                    selectMonth()
                }
            }).then((el)=>{
                // month
                    // cy.log(el.text())  // current month Jan 2022
                    if(!el.text().includes(month)){
                        cy.log(month)  // Aug
                        cy.log(el.text())  // current month sep 2021
                        cy.get('#rb-calendar_onward_cal td.next > button').click({force: true})  // next btn  
                        selectMonth()                      
                    }
                    
                    // if (!el.text().includes(month)) {
                    // cy.log(el.text())
                    // cy.get('.next').last().click()
                    // YearandMonth()
                })
                
        
        }


              

       
        function selectDate(){
            cy.get('.we.day').contains(furturedate).click({force: true})
            return true
        }
        selectMonth()
        // selectMonth() 
        // selectMonth() 
        // selectDate()
    })

})


// make my trip 
// spice jet 
// redbus