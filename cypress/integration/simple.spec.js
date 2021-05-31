describe('Browser Actions', function() {
  it('should load books website', () => {
    cy.visit('http://books.toscrape.com/', {timeout: 10000})    
    cy.url().should('include', 'toscrape')
    cy.log('Before Reload')
    cy.reload()
    cy.log('After Reload')
  });

  it('should click on Travel category', () => {
    cy.get('a')
      .contains('Travel')
      .click()

    cy.get('h1').contains('Travel')
  });

  it('should display correct number of books', () => {
    cy.get('.product_pod')
      .its('length')
      .should('eq', 11)
  });
  
  it('should click on poetry category', () => {
    cy.url().should('include', 'toscrape')
    cy.get('a')
      .contains('Poetry')
      .click()
  });

  it('should click on Olio detail', () => {
    cy.get('a')
      .contains('Olio')
      .click()
  });

  it('should have correct price tag', () => {
    cy.get('.price_color')
      .contains('£23.88')
  });
});
