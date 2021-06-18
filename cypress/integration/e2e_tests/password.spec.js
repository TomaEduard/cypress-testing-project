describe('Password Test', () => {
  
  before(function() {
    cy.visit('http://zero.webappsecurity.com/index.html')
  })

  it('should click on the signin button', () => {
    cy.get('#signin_button').click()
  });

  it('should show search results page', () => {
    cy.get('.offset3 > a').click()
  });

  it('should fill email form', () => {
    cy.get('#user_email').type('test_email@email.com')
  });

  it('should submit the email form', () => {
    cy.contains('Send Password').click()
  });

});