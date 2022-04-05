/// <reference types="cypress" />

describe('Authentification failed', () => {

    it('Filling wrong form', () => {
        cy.visit('https://preprod.backmarket.fr/register');
        cy.contains('C\'est OK pour moi').click();
        cy.get('#signin-email').type(`tititoto@yopmail.com`);
        cy.get('#signin-password').type('Azerty123');
        cy.get('[data-qa=signin-submit-button]').click();
    });
    it('Verify if connexion failed', () => {
        cy.contains('Informations d\'identification erronées');
    })
    
})