class BasePage {
  static loadHomePage() {
    cy.visit('https://devexpress.github.io/testcafe/example/')
  }

  static wait(number) {
    cy.wait(number)
  }
}

class HomePage extends BasePage {
  static scrollToBottom() {
    cy.get('#submit-button').scrollIntoView()
  }

  static scrollToTop() {
    cy.get('header').scrollIntoView()
  }
}

// Alternative oe scroll.spec.js
describe('Abstraction with Classes', () => {

  before(function() {
    // runs before all tests inside describe
    // setup data & context (seed or reset the database)
    HomePage.loadHomePage()
  })

  after(function() {
    // runs after all tests inside describe block are done
    // test clean up or 
    // clean cookies/localtorage
  })

  beforeEach(function() {
    // runs before each it block in the describe
  })

  // beforeAfter(function() {
  //   // runs after each it block in the describe
  // })

  xit('0st IT', () => {
    HomePage.loadHomePage()
    HomePage.scrollToBottom()
    HomePage.wait(5000)
    HomePage.scrollToTop
    HomePage.wait(3000)
  });

  it.skip('0st IT', () => {
    HomePage.loadHomePage()
    HomePage.scrollToBottom()
    HomePage.wait(5000)
    HomePage.scrollToTop
    HomePage.wait(3000)
  });

  it('2nt IT v1', () => {
    HomePage.loadHomePage()
    HomePage.scrollToBottom()
    HomePage.wait(5000)
    HomePage.scrollToTop
    HomePage.wait(3000)
  });

  it.only('2nt IT v2', () => {
    HomePage.loadHomePage()
    HomePage.scrollToBottom()
    HomePage.wait(5000)
    HomePage.scrollToTop
    HomePage.wait(3000)
  });
  
});