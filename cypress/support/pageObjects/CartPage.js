class CartPage {

  get cartItems() { return cy.get('.cart_item'); }
  get checkoutButton() { return cy.get('[data-test="checkout"]'); }
  get removeFirstProductFromCart() { return cy.get('[data-test^="remove"]').first(); }
  
}

export default new CartPage();