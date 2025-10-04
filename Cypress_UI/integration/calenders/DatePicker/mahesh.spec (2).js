describe('Calender', ()=>{

    it('date time picker', ()=>{

        let dt = new Date()
        // cy.log(dt.getDate())  // 5
        // cy.log(dt.getFullYear())
        // // cy.log(dt.getMonth())
        // cy.log(dt.toLocaleString('default', {month: "long"})) // sep
        // cy.log(dt.toLocaleDateString())  // 9-5-2021
        // cy.log(dt.toLocaleDateString('en-US', { weekday: 'long' }))  // sunday
      
        // dt.setDate(dt.getDate() + 200 )
        // cy.log(dt.getDate()) // 24
        // cy.log(dt.toLocaleString('default', {month: "long"})) // March
        // cy.log(dt.getFullYear()) // 2022


        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        dt.setDate(dt.getDate() + 200 )
        let date = dt.getDate() // 24
        let month = dt.toLocaleString('default', {month: "long"}) // March
        let fullyear = dt.getFullYear() // 2022
        // cy.log(date, month, fullyear)

        function selectMonthAndYear(){
            cy.get('#datepicker').click()
            cy.get('.datepicker-switch').first().then((el)=>{
                // cy.log(el.text()) // !september 2021.include(2022)
                if(!el.text().includes(fullyear)){
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }  
            }).then(()=>{ // 2022
                cy.get('.datepicker-switch').first().then((el)=>{
                    // cy.log(el.text()) // sep 2021
                    if(!el.text().includes(month)){
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }  
                })
            })
        }

        function selectDate(){
            cy.get('.day').contains(date).click()
        }
        selectMonthAndYear()
        selectDate()  
       
    })


})



// class Person{
//     // name = 'sarika'
//     // job = 'tester'

//     constructor(name, job){
//         this.name = name
//         this.job = job
//     }

//     display(){
//         console.log(`My name is ${this.name} and I'm working as a ${this.job}`)
//     }
// }

// let p = new Person('Pratik', 'Team Lead')
// p.display()












