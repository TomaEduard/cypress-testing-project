describe('New Pay Test', () => {
  
  before(function() {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.get('#signin_button').click()
    cy.fixture('user').then(user => {
      cy.login(user.id, user.pwd)
    })
  })

  it.only('should add new pay to the list', () => {
    cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
    cy.get('#pay_bills_tab').click()
    cy.contains('Add New Payee').click()

    cy.get('#np_new_payee_name').type('Name')
    cy.get('#np_new_payee_address').type('123456789')
    cy.get('#np_new_payee_account').type('Account')
    cy.get('#np_new_payee_details').type('Details')

    cy.get('#add_new_payee').click()
  });

  it('should display succes message', () => {
    cy.get('#alert_container')
    .should('be.visible')
    .and('contain', 'The new payee Name was successfully created.')
  });

});