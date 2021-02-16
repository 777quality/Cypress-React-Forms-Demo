/// <reference types="cypress" />

class login_page
{
visit()
//opens browser to url specified, the login page of the app
    {
    cy.visit("http://localhost:3000/")
    }

fillUsername(value)
    {
    const field=cy.get('[data-testid=username]')  
    field.clear()
    field.type(value)
    return  this
    }

fillPassword(value)
    {
    const field=cy.get('[data-testid=password]')
    field.clear()
    field.type(value)
    return  this
    }    

SignIn()
    {
    const button=cy.get('.MuiButton-label')  
    button.click()
    return  this    
    }

PasswordHelperText()  //this also acts as the location for username and password joint errors
    {
    return cy.get('#password-helper-text')   
    }

UsernameHelperText()
    {
    return cy.get('#username-helper-text')
    }
}

export default login_page