//  npm install --save-dev cypress-file-upload  // package.json
// import 'cypress-file-upload'; // support/ command.js

describe('Example to demonstrate file upload in cypress', function () {

    before(function () {
        cy.visit('https://the-internet.herokuapp.com/upload')
    })

    it('File Upload using cypress-file-upload npm package', () => {
        const filepath = '../../cypress/fixtures/wallpaper.jpg'  
        cy.get('input[type="file"]').attachFile(filepath)
        cy.get('#file-submit').click()
        cy.get('.example >h3').should('have.text', 'File Uploaded!')
        cy.get('#uploaded-files').contains('wallpaper.jpg')
  
    })  
})

