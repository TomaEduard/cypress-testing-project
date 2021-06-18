describe('Searchbox Test', () => {
  
  before(function() {
    cy.visit('http://zero.webappsecurity.com/index.html')
  })

  it('should type into serchbox and submit with pressing enter', () => {
    cy.get('#searchTerm').should('be.visible')
    cy.get('#searchTerm').type('some text {enter}')
  });

});