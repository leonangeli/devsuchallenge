export class loginPage {
  elements = {
    loginUrl: () => cy.url("https://www.saucedemo.com/inventory.html"),
  };

  completeLoginForm(username, password) {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
  }
}
