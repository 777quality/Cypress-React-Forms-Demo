/// <reference types="cypress" />

// Tests for Unauthenticated Users

import login_page from './PageObjects/Login_PageObjects'

const login=new  login_page

    describe('Desktop View: Unauthenticated Login Page Functionality', function() {

      //imports data from fixture file 
      beforeEach(function() {
        cy.fixture('login').then(function(userdata){    

        this.userdata=userdata   
        //makes this data available outside of this block
        })
      })

          beforeEach(() =>  {
            // bootstrapping external things, beforeEach all actions below occur before each test defined in each 'it'
            cy.viewport(1280, 720)  //typical desktop resolution 
            login.visit()   //externalised URL, so address can be easily changed, incase testing on different environments
            // in this applicaiton, the form does not remember the prior input once refreshed, therefore it was logical to just reload the form for each test
            cy.contains('Sign In').should('exist') //validates form elements exist on the page
            cy.contains('Username').should('exist')
            cy.contains('Password').should('exist')
          })
      
          it('Login Error: Username no password', function(){
            login.fillUsername(this.userdata.User)
            login.SignIn()
            login.PasswordHelperText().should('have.text', 'Please enter a password.')
          })

          it('Login Error: Password no username', function(){
            login.fillPassword(this.userdata.Pass)
            login.SignIn()
            login.UsernameHelperText().should('have.text', 'Please provie a username.')
            login.PasswordHelperText().should('not.exist')
          })

          it('Login Error: No username no password', function(){
            login.SignIn()
            login.UsernameHelperText().should('have.text', 'Please provie a username.')  //spelling typo in application!
            login.PasswordHelperText().should('have.text', 'Please enter a password.')
          })

        })

    describe('Mobile View: Unauthenticated Login Page Functionality', function() {

          beforeEach(() =>  {
            // bootstrapping external things
            cy.viewport('iphone-5')
            login.visit()   //externalised URL, so address can be easily changed, incase testing on different environments
            cy.contains('Sign In').should('exist') //validates form elements exist on the page
            cy.contains('Username').should('exist')
            cy.contains('Password').should('exist')
          })
      
          it('Login Error: Username no password', function(){
            login.fillUsername("!£$%^&*()_+=¬#~@?/><.,")
            login.SignIn()
            login.PasswordHelperText().should('have.text', 'Please enter a password.')
          })

          it('Login Error: Password no username', function(){
            login.fillPassword("ExamplePassword1234£$^")
            login.SignIn()
            login.UsernameHelperText().should('have.text', 'Please provie a username.')  //spelling typo in application!
            login.PasswordHelperText().should('not.exist')
          })

          it('Login Error: No username no password', function(){
            login.SignIn()
            login.UsernameHelperText().should('have.text', 'Please provie a username.')  
            login.PasswordHelperText().should('have.text', 'Please enter a password.')
          })

          it('Login Error: No username no password', function(){
            login.SignIn()
            login.UsernameHelperText().should('have.text', 'Please provie a username.')
            login.PasswordHelperText().should('have.text', 'Please enter a password.')
          })

        })