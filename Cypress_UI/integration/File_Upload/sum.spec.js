/// <reference types = "Cypress"/>

describe('Check addition of total runs of CSK', () => {

    it('Check addition of total runs', () => {

        var sum = 0
        cy.visit('https://www.espncricinfo.com/series/8048/scorecard/1216494/kolkata-knight-riders-vs-royal-challengers-bangalore-39th-match-indian-premier-league-2020-21')

        cy.get('.table.batsman').eq(0).find('tr td:nth-child(3)').as('firstList')

        cy.get('@firstList').each((el, index) => {
            if (index != 10) {
                sum += Number(el.text())
            }
        }).then(() => {
            expect(sum).to.equal(84)
        })

    })

    it('Check addition of total runs', () => {

        var sum = 0
        cy.visit('https://www.espncricinfo.com/series/8048/scorecard/1216494/kolkata-knight-riders-vs-royal-challengers-bangalore-39th-match-indian-premier-league-2020-21')

        cy.get('.table.batsman').eq(1).find('tr td:nth-child(3)').as('firstList')
        cy.get('@firstList').each((el, index) => {
            if (index != 5) {
                sum += Number(el.text())
            }
        }).then(() => {
            expect(sum).to.equal(85)
        })



    })


})