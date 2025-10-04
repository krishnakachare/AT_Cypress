describe('Hooks Demo', function () {

    before(function () {
        cy.log('This code will be executed once before any test execution')
    });

    beforeEach(function () {
        cy.log('This code is executed before any test execution');
    });

    it('Context #1', function () {
        console.log('#1 Test');
    });

    it('Context #2', function () {
        console.log('#2 Test')
    });


    it('Context #3', function () {
        console.log('#3 Test')
    });

    afterEach(function () {
        cy.log('This code is executed after any test execution');
    });

    after(function () {
        cy.log('This code will be executed once all test execution is done');
    });
});