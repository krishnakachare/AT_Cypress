// describe('Total Score of INDIA  ENGLAND Cricket Match', ()=>{

//     it('Total Score of second inning', ()=>{
//         let arr = [];
//         let sum = 0;
//         cy.visit('https://www.cricbuzz.com/live-cricket-scorecard/32047/eng-vs-ind-1st-test-india-tour-of-england-2021')
//         cy.get('div[class="cb-col cb-col-100 cb-ltst-wgt-hdr"]').eq(2).find('.text-right.text-bold').each((el, index)=>{
//             // cy.log(el.text())
//             if(index>0 && index < 12){
//                 // sum += Number(el.text())    
//                 // cy.log(el.text())

//                 // arr = arr.push(el.text())  
//                 // cy.log(arr)
//             }  
//             // cy.log(arr) 
//         }).then(() => {
//             expect(sum).to.equal(258)
//         })
//         // cy.log(arr)
       
//     })

//     it.only('Total Score of second inning', ()=>{
//         let arr = [];
//         let sum = 0;
//         cy.visit('https://www.cricbuzz.com/live-cricket-scorecard/32047/eng-vs-ind-1st-test-india-tour-of-england-2021')
//         cy.get('div[class="cb-col cb-col-100 cb-ltst-wgt-hdr"]').eq(2).find('.text-right.text-bold').each((el, index)=>{
//             // cy.log(el.text())
//             if(index>0 && index < 12){ 
//                 // cy.log(el.text())
//                 arr = arr.push(Number(el.text()))  
//                 // cy.log(arr)
//             }  
//             cy.log(arr) 
//         }).then(() => {
//             expect(sum).to.equal(258)
//         })
//         // cy.log(arr)
       
//     })
// })


describe('Total Score of INDIA  ENGLAND Cricket Match', ()=>{

    it('Total Score of second inning', ()=>{
        let arr = [];
        let sum = 0
        let extra = 0
        let total = 0
        cy.visit('https://www.cricbuzz.com/live-cricket-scorecard/32047/eng-vs-ind-1st-test-india-tour-of-england-2021')
        cy.get('div[class="cb-col cb-col-100 cb-ltst-wgt-hdr"]').eq(2).find('.text-right.text-bold').each((el, index)=>{
            // cy.log(el.text())
            if(index>0 && index < 12){  
                // cy.log(el.text())
                sum += Number(el.text())  
            }  

        }).then(() => {
            // cy.get('#innings_2 > :nth-child(1) > :nth-child(14) > .cb-col-8')
            cy.get('div[class="cb-col cb-col-100 cb-ltst-wgt-hdr"]').eq(2).find('.cb-col.cb-col-8.text-bold.cb-text-black.text-right').each((el, index)=>{     
                extra = Number(el.text())
                cy.log(extra)
                cy.get('div[class="cb-col cb-col-100 cb-ltst-wgt-hdr"]').eq(2).find('.cb-col cb-col-8.text-bold.text-black.text-right').eq(1).each((el, index)=>{
                    total = Number(el.text())
                    // cy.log(total)
                    expect(total).to.eq(sum+extra)
                })
            })
                
            
            
        })
    })

})

