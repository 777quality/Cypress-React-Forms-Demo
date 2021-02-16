/// <reference types="cypress" />

// Test for Authenticated Users

import form_page from './PageObjects/Form_PageObjects'
import login_page from './PageObjects/Login_PageObjects'

//const confirm=new   confirmation_page
const form=new   form_page
const login=new  login_page

// here if the test application was using tokens for authentication, I would set a token as local storage, thus eliminating the requirement to login for each test, this would dramatically increase the speed of each test suite run.

const validtestData = require("../fixtures/valid_formdata.json")

// this test block, uses a JSON file to fetch data and iterates the test through this data, once per priority Normal/High/Urgent
validtestData.forEach((testCase) => {

    describe('Desktop View: Authenticated User - Dynamic Data', function() {

      //imports data from fixture file 
          beforeEach(function() {
              cy.fixture('login').then(function(userdata){    
              this.userdata=userdata   
        //this - makes data available outside of this block
        })
      })

          beforeEach(() =>  {
            // bootstrapping external things
            cy.viewport(1280, 720)
            login.visit()
          })
      
          it(`Submits the form for the Priority: ${testCase.priority}`, function(){
            cy.contains('Sign In').should('exist')  //VALIDATION elements exist on the page
            cy.contains('Username').should('exist') //VALIDATION elements exist on the page
            cy.contains('Password').should('exist') //VALIDATION elements exist on the page
            login.fillUsername(this.userdata.User)
            login.fillPassword(this.userdata.Pass)
            login.SignIn()
            cy.contains('Feedback Form').should('exist')  //VALIDATION user successfully logged in
            form.fill_firstName(testCase.firstname)
            form.fill_lastName(testCase.lastname)
            form.fill_email(testCase.email)
            form.fill_phone(testCase.phone)
            form.fill_company(testCase.company)
            form.fill_postcode(testCase.postalcode)
            form.select_priority(testCase.priority)
            //VALIDATION - checks that the submit button is still inactive before the final mandatory element has been filled
            form.submit_btn().should('be.disabled')
            form.fill_feedback(testCase.feedback)
            form.submit_btn().click()
            //VALIDATION - final validation to ensure feedback form data successfully post
            cy.contains('Thank you for your feedback').should('exist')
          })
        })
      })

// this test block, uses a JSON file to fetch data and iterates the test through this data, once per priority Normal/High/Urgent
validtestData.forEach((testCase) => {

  describe('Mobile View: Authenticated User - Dynamic Data', function() {

    //imports data from fixture file 
        beforeEach(function() {
            cy.fixture('login').then(function(userdata){    
            this.userdata=userdata   
      //this - makes data available outside of this block
      })
    })

        beforeEach(() =>  {
          // bootstrapping external things
          cy.viewport('iphone-5')
          login.visit()
        })
    
        it(`Submits the form for the Priority: ${testCase.priority}`, function(){
          cy.contains('Sign In').should('exist')  //VALIDATION elements exist on the page
          cy.contains('Username').should('exist') //VALIDATION elements exist on the page
          cy.contains('Password').should('exist') //VALIDATION elements exist on the page
          login.fillUsername(this.userdata.User)
          login.fillPassword(this.userdata.Pass)
          login.SignIn()
          cy.contains('Feedback Form').should('exist')  //VALIDATION user successfully logged in
          //the following enter data from the valid_formdata.json file
          form.fill_firstName(testCase.firstname)
          form.fill_lastName(testCase.lastname)
          form.fill_email(testCase.email)
          form.fill_phone(testCase.phone)
          form.fill_company(testCase.company)
          form.fill_postcode(testCase.postalcode)
          form.select_priority(testCase.priority)
          //VALIDATION - checks that the submit button is still inactive before the final mandatory element has been filled
          form.submit_btn().should('be.disabled')
          form.fill_feedback(testCase.feedback)
          form.submit_btn().click()
          //VALIDATION - final validation to ensure feedback form data successfully post
          cy.contains('Thank you for your feedback').should('exist')
        })
      })
    })

