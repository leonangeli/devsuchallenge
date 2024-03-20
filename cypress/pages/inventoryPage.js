export class InventoryPage {
  elements = {
    loginUrl: () => cy.url("https://www.saucedemo.com/inventory.html"),
  };

  addItemsToTheCart() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  }

  goToCart() {
    cy.get(".shopping_cart_link").click();
  }
}
