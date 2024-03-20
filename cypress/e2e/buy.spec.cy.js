import { cartPage } from "../pages/cartPage";
import { checkoutPage } from "../pages/checkoutPage";
import { InventoryPage } from "../pages/inventoryPage";
import { loginPage } from "../pages/loginPage";

const login = new loginPage();
const username = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");

const inventory = new InventoryPage();
const cart = new cartPage();
const checkout = new checkoutPage();

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
    //Login into the app
    login.completeLoginForm(username, password);
    login.elements
      .loginUrl()
      .should("eq", "https://www.saucedemo.com/inventory.html");
    //Add two items to the cart as requested
    inventory.addItemsToTheCart();
    //Go to the cart and validate the that the two items has been added successfully
    inventory.goToCart();
    cart.elements.cartUrl().should("eq", "https://www.saucedemo.com/cart.html");
    //Start checkout process
    cart.clickCheckoutBtn();
    //Complete the checkout form with valid data
    checkout.completeCheckoutForm();
    //Continue with the process
    checkout.clickContinueBtn();
    //Finish it and assert it has been completed successfully
    checkout.clickFinishBtn();
    checkout.elements
      .completeTxt()
      .should("have.text", "Thank you for your order!");
    checkout.elements
      .checkoutCompleteUrl()
      .should("eq", "https://www.saucedemo.com/checkout-complete.html");
  });
});
