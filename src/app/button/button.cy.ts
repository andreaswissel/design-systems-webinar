import { ButtonComponent } from './button.component';

describe('The ButtonComponent', () => {
  beforeEach(() => {
    cy.mount(ButtonComponent, {
      componentProperties: {
        label: 'Hello Angular Architects!',
        counter: 0,
      },
    });
  });

  it('checks that the button element exists and is visible', () => {
    cy.get('button').should('exist');
    cy.get('button').should('be.visible');
  });

  it('should check that the label holds the right value', () => {
    cy.get('button').should('have.text', 'Hello Angular Architects!');
  });

  it('should click the button and check that the counter is incremented by 1', () => {
    cy.get('button').click();
    cy.get('#counter').should('have.text', '1');
  });
});
