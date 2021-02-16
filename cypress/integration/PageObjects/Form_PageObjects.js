/// <reference types="cypress" />

class form_page
{
visit()
//opens browser to url specified, the login page of the app
    {
    cy.visit("http://localhost:3000/")
    }

fill_firstName(value)
    {
    const field=cy.get('[data-testid=firstname]')
    field.clear()
    field.type(value)
    return  this
    }

fill_lastName(value)
    {
    const field=cy.get('[data-testid=lastname]')
    field.clear()
    field.type(value)
    return  this
    }

fill_email(value)
    {
    const field=cy.get('[data-testid=email]')
    field.clear()
    field.type(value)
    return  this
    }

fill_phone(value)
    {
    const field=cy.get('[data-testid=phone]')
    field.clear()
    field.type(value)
    return  this
    }

fill_company(value)
    {
    const field=cy.get('[data-testid=company]')
    field.clear()
    field.type(value)
    return  this
    }    

fill_postcode(value)
    {
    const field=cy.get('[data-testid=postcode]')
    field.clear()
    field.type(value)
    return  this
    }    

fill_feedback(value)
    {
    const field=cy.get('[data-testid=feedback]')
    field.clear()
    field.type(value)
    return  this
    }   

select_priority(value)
    {
    const field=cy.get('[data-testid=prioritydrop]')
    field.select(value)
    return  this
    }   

submit_btn()
    {
    return  cy.get('[data-testid=submitbtn]')
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

export default form_page