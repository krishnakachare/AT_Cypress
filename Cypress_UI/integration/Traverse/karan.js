describe("Transversing the DOM in cypress", () => {
    it("children() to get the children element of the DOM", () => {
      cy.visit("https://www.ebay.com/n/all-categories#electronics");
      cy.get(".top-level-cats").children().should("have.length", "11");
    });
    it("closest() to validate the closest ancestor of the element", () => {
      cy.visit("https://www.ebay.com/n/all-categories#electronics");
      cy.get('[href="#sporting-goods"]')
        .closest("ul")
        .should("have.class", "top-level-cats");
    });
    it("eq() to retrive the specific element in the list based on index", () => {
      cy.visit("https://www.ebay.com/n/all-categories#electronics");
      cy.get(".top-level-cats").children().eq(2).should("contain", "Fashion");
    });
    it("last() to retrive the last element in the list", () => {
      cy.visit("https://www.ebay.com/n/all-categories#electronics");
      cy.get(".top-level-cats").children().last().should("contain", "Others");
    });
    it("first() retrive the first element in the list", () => {
      cy.visit("https://www.ebay.com/n/all-categories#electronics");
      cy.get(".top-level-cats")
        .children()
        .first()
        .should("contain", "Electronics");
    });
    it("filter() retrive the first element in the list", () => {
      cy.visit("https://www.ebay.com/n/all-categories#electronics");
      cy.get(".top-level-cats")
        .children()
        .filter(".active")
        .should("contain", "Electronics");
    });
    it("find() to retrive the element that have specific selector", () => {
      cy.visit("https://www.ebay.com/n/all-categories#electronics");
      cy.get(".top-level-cats")
        .find("li")
        .find("a")
        .find("span")
        .should("have.class", "clipped");
    });
    it("next all() to get all the next sbilings with a specific parent (DOM element)", () => {
      cy.visit("https://www.ebay.com/n/all-categories#electronics");
      cy.get(".top-level-cats")
        .find(".active")
        .nextAll()
        .should("have.length", "10");
    });
    it("nextUntil() to get the all sibling elements for the defined elements", () => {
      cy.visit("https://www.ebay.com/n/all-categories#electronics");
      cy.get(".top-level-cats").children().eq(5).click();
      cy.get(".top-level-cats")
        .children()
        .nextUntil(".active")
        .should("contain", "Toys & Hobbies");
    });
  
    it(".not to remove the element from the set", () => {
      cy.visit("https://www.ebay.com/n/all-categories#electronics");
      cy.get(".top-level-cats").children().eq(5).click();
      cy.get(".top-level-cats")
        .children()
        .not(".active")
        .should("have.length", "10");
    });
  
    it("parent() to get the parent element of the DOM", () => {
      cy.visit("https://www.ebay.com/n/all-categories#electronics");
      cy.get(".top-level-cats")
        .parent()
        .should("have.class", "all-categories-left-nav-container");
    });
  
    it("parents() to get multiple parent elements in DOM", () => {
      cy.visit("https://www.ebay.com/n/all-categories#electronics");
      cy.get(".top-level-cats")
        .parents()
        .should("have.class", "all-categories-left-nav-container sticky");
    });
  
    it("prevAll() to get all previous siblings with specific parent", () => {
      cy.visit("https://www.ebay.com/n/all-categories#electronics");
      cy.get(".top-level-cats").children().eq(8).click();
      cy.get(".top-level-cats")
        .find(".active")
        .prevAll()
        .should("have.length", "8");
    });
  
    it("prevUntil() to get all the sibling elements for the defined element", () => {
      cy.visit("https://www.ebay.com/n/all-categories#electronics");
      cy.get(".top-level-cats")
        .children()
        .eq(7)
        .click()
        .prevUntil(".active")
        .should("contain", "Toys & Hobbies");
    });
  
    //  prev
    // next()
    // parentsUntil()
    //  siblings()
  });