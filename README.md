# SauceDemo Cypress Cucumber Automation Suite

## Project Overview
This project automates SauceDemo Shopping website using Cypress Cucumber framework with Javascript

## Tech Stack
- Cypress
- Cucumber (Gherkin)
- JavaScript
- POM Pattern
- Cypress Dashboard (optional for CI/parallel testing)

## Folder Structure
- Feature files: `cypress/tests/features/`
- Step definitions: `cypress/support/step-definitions/`
- Page objects: `cypress/support/pageObjects/`
- Test data: `cypress/fixtures/testData.json`

## How to Run the Tests
1. Install dependencies:
   ```sh
   npm install

2. Run Cypress tests (Chrome Headless Mode):
   ```sh
   npm run chrome

3. Run Cypress tests (Firefox Headless Mode):
   ```sh
   npm run firefox

4. Run Cypress tests (Edge Headless Mode):
   ```sh
   npm run edge

4. Run Manually via Cypress Test Runner(Headed Mode):
   ```sh
   npx cypress open

## Features Tested
- Login: valid, invalid, locked-out users
- Product Catalog: sorting, details, image validation
- Shopping Cart: add/remove/checkout

## Credentials
Stored securely in `testData.json` in the `fixtures` folder.