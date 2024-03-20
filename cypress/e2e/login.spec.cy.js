import { loginPage } from "../pages/loginPage";

const login = new loginPage();
const username = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");

describe("User Login Tests", () => {
  Cypress.on(
    "uncaught:exception",
    () =>
      // Returning false here prevents Cypress from failing the test on the unhandled app exception
      // Ideally would fix app exception long-term
      false
  );
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should be able to login successfully with valid credentials", () => {
    //Retrive the user data from the cypres.env in order to avoid hardcoding sensitive data
    //Complete the form and click the Login button
    login.completeLoginForm(username, password);
    login.elements
      .loginUrl()
      .should("eq", "https://www.saucedemo.com/inventory.html");
  });
});
