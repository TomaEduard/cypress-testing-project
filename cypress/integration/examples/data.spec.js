describe('Write / Read Data tp JSON /Text file', () => {

  // Write
  // save file into root application
  it('should write data into JSON', () => {
    cy.writeFile('log.json', { name: "Mike", age: 25 })
    
  });

  it('should write data to the text file', () => {
    cy.writeFile('log.txt', 'Hello World!')
    
  });

  // Read
  it('should read and verify data from JSON file', () => {
    cy.readFile('log.json')
      .its('age') // target the key
      .should('eq', 25)

  });

  it('should read and verify data from text file', () => {
    cy.readFile('log.txt')
      .should('eq', 'Hello World!')
        
  });

  it('should read and verify browser document content', () => {
    cy.visit('https://www.example.com')
    cy.wait(2000)
    cy.document()
      .its('contentType')
      .should('eq', 'text/html')
      cy.document()
        .should('have.property', 'charset')
        .and('eq', 'UTF-8')
  });

});