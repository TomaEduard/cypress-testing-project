describe('Login / Logout Test', () => {
  
  before(function() {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.get('#signin_button').click()
    cy.fixture('user').then(user => {
      cy.login(user.id, user.pwd)
    })
  })

  it('should try to login with invalid data', () => {
    cy.get('#login_form').should('be.visible')
    cy.login("invalid username", "invalid password");
  });

  it('should display error message', () => {
    cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
  });

  it('should login to application', () => {
    cy.fixture('user').then(user => {
      cy.login(user.id, user.pwd);
    })
  });

  it('should logout form', () => {
    cy.contains('username').click()
    cy.get('#logout_link').click()
    cy.url().should('include', 'index.html')
  });

});