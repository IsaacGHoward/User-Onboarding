describe('Name Entry', function(){
    it('Should enter a name in the name field of the webpage', function(){
        cy.visit('localhost:3000');
        cy.get('#nameInput')
            .type('Example Name')
            .should('have.value', 'Example Name')
    })
})
describe('Email Entry', function(){
    it('Should enter an email in the email field of the webpage', function(){
        cy.get('#emailInput')
            .type('email@test.com')
            .should('have.value', 'email@test.com')
    })
})
describe('Password Entry', function(){
    it('Should enter a password in the password field of the webpage', function(){
        cy.get('#passwordInput')
            .type('password')
            .should('have.value', 'password')
    })
})
describe('Terms of Service Checkbox', function(){
    it('Should check the terms of service box on the page', function(){
        cy.get('#tosInput')
            .check()
            .should('have.checked', 'true')
    })
})
describe('Submit Form', function(){
    it('Should submit the form', function(){
        cy.get('button')
            .click()
        
    })
})
describe('Check for invalid form submission', function(){
    it('Should not submit form', function(){
        cy.get('#tosInput')
            .uncheck()
        cy.get('button')
            .should('have.disabled', 'true');
    })
})