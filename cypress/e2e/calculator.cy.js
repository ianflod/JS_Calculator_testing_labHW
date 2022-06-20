describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update display with result of operation', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6')
  })

  it('should allow multpile operations to be chained together', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number8').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '67')
  })

  it('should display negative numbers as required', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-5')
  })

  it('should display numbers with decimal points as required', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0.5')
  })

  it('should display large numbers as required', () => {
    cy.get('#number6').click();
    cy.get('#number8').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#number9').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '404835')
  })

  it('should display err when dividing by zero', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Err')
  })

})