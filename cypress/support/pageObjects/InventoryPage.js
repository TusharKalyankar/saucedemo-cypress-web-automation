import * as pages from '../pageObjects/index'
import testData from '../../fixtures/testData.json'

class InventoryPage {
  get inventoryContainer() { return cy.get('.inventory_list'); }
  get productSortDropdown() { return cy.get('[data-test="product_sort_container"]'); }
  get firstProduct() { return cy.get('.inventory_item').first(); }
  get sortDropdown() { return cy.get('.product_sort_container'); }
  get productTitle() { return cy.get('.inventory_details_name'); }
  get productDescription() { return cy.get('.inventory_details_desc'); }
  get productPrice() { return cy.get('.inventory_details_price'); }
  get allProductImages() { return cy.get('.inventory_item_img img'); }
  get clickFirstProduct() { return cy.get('.inventory_item_name').first() }
  get addFirstProductToCart() { return cy.get('[data-test^="add-to-cart"]').first(); }
  get cartBadge() { return cy.get('.shopping_cart_badge'); }
  get goToCart() { return cy.get('.shopping_cart_link'); }


  sortBy(option) {
    pages.inventoryPage.sortDropdown.select(option);
  }

  getProductPrices() {
    return cy.get('.inventory_item_price').then($els =>
      Cypress._.map($els, 'innerText')
    );
  }

}

export default new InventoryPage();