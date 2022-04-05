/// <reference types="cypress" />

describe('Authentification success', () => {

    it('Filling right form', () => {
        cy.visit('https://preprod.backmarket.fr/register');
        cy.contains('C\'est OK pour moi').click();
        cy.get('#signin-email').type(`tititoto@yopmail.com`);
        cy.get('#signin-password').type('Azerty12345');
        cy.get('[data-qa=signin-submit-button]').click();
    });
    it('Visit account', () => {
        cy.contains('C\'est OK pour moi').click();
        cy.visit('https://preprod.backmarket.fr/dashboard/profile');        
        cy.url().should('equal', 'https://preprod.backmarket.fr/dashboard/profile');
        cy.contains('C\'est OK pour moi').click();
        cy.contains(`tititoto@yopmail.com`).should("exist");
    });
    
})