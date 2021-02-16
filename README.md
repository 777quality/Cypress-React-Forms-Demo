# Cypress automation demo on a React form :rocket:

## Summary
This project consists of a Cypress Automation Testing Framework 🤖, for testing the UI of a ReactJS / Node.js application.

To ensure maintainability, scalability, and 

* Page Object Model, has been utilised to ensure future test maintainability. WebElemnent Locators are kept seperate from the tests.
* Web Locators have been carefully selected to resist DOM structure changes. The application has been updated to include the attribute: [data-testid=attributename]
* Test have been written to run on both Desktop and Mobile resolutions
* This demo makes use of Data Driven Tests, creating 3 test cases from 1 written test (one each for Normal, Urgent and High priorities). The test data is stored in an externalised JSON file.

## Out of Scope

* Negative tests - the full extent of negative tests have not been included in this demo test suite

## How to run

1) Clone this repository from GitHub

2) Initialise the React demo application with:

``` npm start ```

3) From the project directory, run:

``` .\node_modules\.bin\cypress open ```

4) Select authenticated.test.js or unauthenticated.test.js to launch the tests
