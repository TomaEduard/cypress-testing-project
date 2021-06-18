
describe('Navbar Test', () => {

  before(function() {
    cy.visit('http://zero.webappsecurity.com/index.html')
  })
  
  it('should display online backing content', () => {
    cy.get('#onlineBankingMenu div strong').click()
    cy.url().should('include', 'online-banking.html')
    cy.get('h1').should('be.visible')
  });

  it('should display feedback content', () => {
    cy.get('#feedback div strong').click()
    cy.url().should('include', 'feedback.html')
  });

  it('should display homepage content', () => {
    cy.get('.brand').click()
    cy.url().should('include', 'index.html')
  })

});