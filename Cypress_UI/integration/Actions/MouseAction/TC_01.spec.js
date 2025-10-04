describe("Drag and Drop", () => {

    beforeEach(() => {
      cy.visit('/ingredients/drag-and-drop');
    });
  
  
    it('should drag fried chicken to the order', () => {
      cy.visit('/ingredients/drag-and-drop');
      const dataTransfer = new DataTransfer();
  
      cy.get('#menu-fried-chicken').trigger('dragstart', {
        dataTransfer
      });
  
      cy.get('#plate').trigger('drop', {
        dataTransfer
      });
    });
  
  
    it('should drag ice cream to the order', () => {
      cy.visit('/ingredients/drag-and-drop');
     // install plugin -- npm i @4tw/cypress-drag-drop
      cy.get('#menu-ice-cream').drag('#plate-items');            
    });
  
  
  
  
    it('Handling Drag and Drop', () => {
      cy.visit('https://jqueryui.com/resources/demos/droppable/default.html')
      cy.get('#draggable').drag('#droppable', { force: true })
    })
  
  
  
    it('Handling Drag and Drop', () => {
      cy.visit('https://jqueryui.com/resources/demos/droppable/default.html')
  
      cy.get('#draggable').trigger('mousedown', { which: 1 })
      cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
      cy.get('#draggable').should('be.visible')
  
    })
  
  });