describe('Device Tests', function() {
  it('720p', () => {
    cy.viewport(1280, 720)    
    cy.visit('http://www.example.com')
    cy.wait(500)
  });

  it('1080p', () => {
    cy.viewport(1980, 1080)    
    cy.visit('http://www.example.com')
    cy.wait(500)
  });

  it('iPhone X', () => {
    cy.viewport('iphone-x')    
    cy.visit('http://www.example.com')
    cy.wait(500)
  });

  it('IPad Mini', () => {
    cy.viewport('ipad-mini')    
    cy.visit('http://www.example.com')
    cy.wait(500)
  });

  it('Macbook 15', () => {
    cy.viewport('macbook-16')    
    cy.visit('http://www.example.com')
    cy.wait(500)
  });

});
