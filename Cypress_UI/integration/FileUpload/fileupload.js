// File upload

describe('file upload testcase', () => {
    it('validate upload file', () => {
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        let fixturePath = 'abc.jpg'
        cy.get('#fileUpload').attachFile(fixturePath)

        cy.get('.filename').should('have.text', fixturePath)

    })

    it('upload multiple files', () => {
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        let fixture = 'abc.jpg'
        let fixture1 = 'abc.jpg'
        let arr = [fixture, fixture1]
        cy.get('input[type="file"]').last().attachFile(arr)
        cy.get('#igUpload1_fc').children('div').should('have.length', arr.length)

    })
})