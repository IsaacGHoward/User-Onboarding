describe('Name Entry', function(){
    it('Should enter a name in the name field of the webpage', function(){
        cy.visit('localhost:3000');
        cy.get('#nameInput')
            .type('Example Name')
            .should('have.value', 'Example Name')
        
    })
})