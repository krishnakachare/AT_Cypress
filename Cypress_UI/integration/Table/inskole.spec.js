 Cypress.Commands.add('cricinfo', (r, e, t) => {

    let runs = 0
    let extraruns = 0
    let totalruns = 0

    let rarr = [0, 0, 1, 2, 3]
    let earr = [0, 0, 2, 4, 6]
    let tarr = [0, 1, 3, 5, 7]

    cy.get('.table.batsman').eq(`${rarr[r]}`).find('td[class="font-weight-bold"]').each((el) => {

        runs = runs + Number(el.text())
    })
    cy.get('.text-right.font-weight-bold').eq(`${earr[e]}`).then((el) => {
        extraruns = Number(el.text())
    })
    cy.get('.text-right.font-weight-bold').eq(`${tarr[t]}`).then((el) => {

        totalruns = Number(el.text())

    }).then((el) => {
        expect(runs + extraruns).to.eqls(totalruns)
    })

})
 describe('automate crickinfo table summation',()=>{
    it('get sum',()=>{

        cy.visit('https://www.espncricinfo.com/series/india-tour-of-england-2021-1239527/england-vs-india-4th-test-1239546/full-scorecard')
        
        cy.cricinfo(1,1,1)
        cy.cricinfo(2,2,2)
        cy.cricinfo(3,3,3)
        cy.cricinfo(4,4,4)

    })
})






Cypress.Commands.add('tablesum', (id, total) => {
    let sum = 0
    let regex = /[0-9]/

    cy.get(`#t0${id}`).find('tbody').find('tr').find('td').each((el, ind, array) => {

        if (regex.test(Number(el.text()))) {
            sum = sum + Number(el.text())
        }

    }).then(function () {
        expect(sum).to.eqls(total)
    })
})
 it('table sum',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.tablesum(1,159)
        cy.tablesum(2,163)
    })