export class cartPage {
  elements = {
    cartUrl: () => cy.url("https://www.saucedemo.com/cart.html"),
  };

  clickCheckoutBtn() {
    cy.get('[data-test="checkout"]').click();
  }
}
