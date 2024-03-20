import { faker } from "@faker-js/faker";

export class checkoutPage {
  elements = {
    checkoutOneUrl: () =>
      cy.url("https://www.saucedemo.com/checkout-step-one.html"),
    checkoutTwoUrl: () =>
      cy.url("https://www.saucedemo.com/checkout-step-two.html"),
    checkoutCompleteUrl: () =>
      cy.url("https://www.saucedemo.com/checkout-complete.html"),
    completeTxt: () => cy.get(".complete-header"),
  };

  completeCheckoutForm() {
    cy.get('[data-test="firstName"]').type(faker.person.firstName());
    cy.get('[data-test="lastName"]').type(faker.person.lastName());
    cy.get('[data-test="postalCode"]').type(faker.location.zipCode());
  }

  clickContinueBtn() {
    cy.get('[data-test="continue"]').click();
  }

  clickFinishBtn() {
    cy.get('[data-test="finish"]').click();
  }

  clickBackHomeBtn() {
    cy.get('[data-test="back-to-products"]').click();
  }
}
