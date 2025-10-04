//  npm install --save-dev cypress-file-upload  // package.json
// import 'cypress-file-upload'; // support/ command.js

describe('Example to demonstrate file upload in cypress', function () {

    it('File Upload using cypress-file-upload npm package', () => {
       
        const filepath = '../../cypress/fixtures/wallpaper.jpg'  
        cy.visit('https://tus.io/demo.html')
        cy.get('#js-file-input').attachFile(filepath)
        cy.wait(10000)
        cy.get('div[class="heading"]').should('have.text', 'The upload is complete!')
       
  
    })  
})

// www.igniteui.com/file-upload