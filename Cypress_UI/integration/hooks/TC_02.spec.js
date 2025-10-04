describe('hooks concept', () => {
    before(() => {
        cy.log(('befote test cases'));
    })

    beforeEach(() => {
        cy.log('beforeeach testcases')

    })
    it('first testcaes', () => {
        expect(5).to.equal(5)
    })
    after('after testcase', () => {
        cy.log('after testcase')

    })
    it('second testcase', () => {
        expect(8).to.equal(8)
    })
    before(() => {
        cy.log(('befote test cases'));
    })
    after('after testcase', () => {
        cy.log('after testcase')

    })
    afterEach('aftereach testcases', () => {
        cy.log('aftereach testcase')
    })
})