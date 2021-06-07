
// install cypress-xpath
// npm install cypress-xpath
// tell cypress to use it
// in /root/cypress/support/inddex.js add:
// require('cypress-xpath')

describe('Name of the group', () => {
  before(function() {
    cy.visit('http://zero.webappsecurity.com/index.html')
  })

  it('should click on element using xpath', () => {
    cy.xpath('//button[@id="signin_button"]').should('be.visible')
    cy.xpath('//button[@id="signin_button"]').click()
  });

  it('should display login form', () => {
    cy.xpath('//form').should('have.length', 1)
  });
  
});