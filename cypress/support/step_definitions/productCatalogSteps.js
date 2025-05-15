import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import * as pages from '../pageObjects/index'

Given('I am on the inventory page', () => {
  cy.visit('/inventory.html');
});

When('I sort products by {string}', (sortOption) => {
  pages.inventoryPage.sortBy(sortOption);
});

Then('products should be sorted in ascending order of price', () => {
  pages.inventoryPage.getProductPrices().then((prices) => {
    const numericPrices = prices.map(price => parseFloat(price.replace('$', '')));
    const sortedPrices = [...numericPrices].sort((a, b) => a - b);
    expect(numericPrices).to.deep.equal(sortedPrices);
  });
});

Then('all product images should load', () => {
  pages.inventoryPage.allProductImages.each(($img) => {
    cy.wrap($img).should('be.visible');
  });
});

When('I click on a product', () => {
  pages.inventoryPage.clickFirstProduct.click();
});

Then('I should see the correct product details', () => {
  pages.inventoryPage.productTitle.should('exist');
  pages.inventoryPage.productDescription.should('exist');
  pages.inventoryPage.productPrice.should('exist');
});
