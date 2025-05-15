import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import * as pages from '../pageObjects/index'

Given('I have items in the cart', () => {
  pages.inventoryPage.addFirstProductToCart.click();
  pages.inventoryPage.cartBadge.should('contain', '1');
});

When('I add a product to the cart', () => {
  pages.inventoryPage.addFirstProductToCart.click();
});

Then('the cart badge should update accordingly', () => {
  pages.inventoryPage.cartBadge.should('be.visible').and('not.have.text', '0');
});

When('I remove a product from the cart', () => {
  pages.cartPage.removeFirstProductFromCart.click();
});

When('I complete the checkout process', () => {
  pages.inventoryPage.goToCart.click();
  pages.cartPage.checkoutButton.click();
  pages.checkoutPage.fillCheckoutDetails();
  pages.checkoutPage.continueButton.click();
  pages.checkoutPage.finishButton.click();
});

Then('I should see a confirmation message', () => {
  pages.checkoutPage.confirmationMessage.should('contain', 'Thank you for your order!');
});
